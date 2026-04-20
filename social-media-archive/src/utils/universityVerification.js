import emailjs from '@emailjs/browser';
import {
  Timestamp,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_KEY) {
  emailjs.init({ publicKey: EMAILJS_KEY });
}

export const OTP_EXPIRY_MS = 10 * 60 * 1000;
export const RESEND_COOLDOWN = 60;
const MAX_OTP_ATTEMPTS = 5;

function otpRequestRef(uid) {
  return doc(db, 'otpRequests', uid);
}

function verifiedEmailRef(uid) {
  return doc(db, 'verifiedEmails', uid);
}

function isAllowedUniversityEmail(email) {
  return /^[^@\s]+@[^@\s]+\.edu$/i.test(email)
    || /^[^@\s]+@[^@\s]+\.ac\.uk$/i.test(email)
    || /^[^@\s]+@([^.@\s]+\.)*studentmdx\.ac$/i.test(email);
}

function requireEmailJsConfig() {
  if (!EMAILJS_SERVICE || !EMAILJS_TEMPLATE || !EMAILJS_KEY) {
    throw new Error('missing email delivery configuration');
  }
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function normalizeTimestamp(value) {
  if (value?.toMillis) return value;
  if (value instanceof Date) return Timestamp.fromDate(value);
  return null;
}

export async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function getOtpRequest(uid) {
  const snap = await getDoc(otpRequestRef(uid));
  return snap.exists() ? snap.data() : null;
}

export async function isUniversityVerified(uid) {
  if (!uid) return false;
  const snap = await getDoc(verifiedEmailRef(uid));
  return snap.exists();
}

export async function sendUniversityVerificationOtp({ user, displayName }) {
  requireEmailJsConfig();

  if (!user?.uid || !user?.email) {
    const error = new Error('missing authenticated user');
    error.code = 'missing-auth-user';
    throw error;
  }

  const normalizedEmail = user.email.trim().toLowerCase();

  if (!isAllowedUniversityEmail(normalizedEmail)) {
    const error = new Error("this email domain isn't on the verified list yet.");
    error.code = 'email-domain-not-allowed';
    throw error;
  }

  const otpRef = otpRequestRef(user.uid);
  const existingSnap = await getDoc(otpRef);

  if (existingSnap.exists()) {
    const existing = existingSnap.data();
    const expiresAt = normalizeTimestamp(existing.expiresAt);
    const isExpired = !expiresAt || expiresAt.toMillis() <= Date.now();

    if ((existing.attempts || 0) >= MAX_OTP_ATTEMPTS) {
      const error = new Error('too many incorrect attempts');
      error.code = 'otp-locked';
      throw error;
    }

    if (!isExpired) {
      const error = new Error('a code has already been sent');
      error.code = 'otp-still-active';
      throw error;
    }

    await deleteDoc(otpRef);
  }

  const otp = generateOtp();
  const hashedCode = await sha256Hex(`${otp}${user.uid}`);
  const expiresAt = Timestamp.fromDate(new Date(Date.now() + OTP_EXPIRY_MS));
  const expiry = expiresAt.toDate();
  const timeStr = expiry.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  await setDoc(otpRef, {
    email: normalizedEmail,
    hashedCode,
    attempts: 0,
    expiresAt,
    createdAt: serverTimestamp(),
  });

  try {
    await emailjs.send(
      EMAILJS_SERVICE,
      EMAILJS_TEMPLATE,
      {
        to_email: normalizedEmail,
        email: normalizedEmail,
        otp_code: otp,
        passcode: otp,
        user_name: displayName || 'student',
        time: timeStr,
      },
      { publicKey: EMAILJS_KEY }
    );
  } catch (error) {
    await deleteDoc(otpRef).catch(() => {});
    error.code = error.code || 'otp-send-failed';
    throw error;
  }

  return {
    expiresAt: expiresAt.toMillis(),
  };
}

export async function verifyUniversityOtp({ user, code }) {
  if (!user?.uid || !user?.email) {
    const error = new Error('missing authenticated user');
    error.code = 'missing-auth-user';
    throw error;
  }

  const otpRef = otpRequestRef(user.uid);
  const snap = await getDoc(otpRef);

  if (!snap.exists()) {
    const error = new Error('verification session expired');
    error.code = 'otp-missing';
    throw error;
  }

  const request = snap.data();
  const expiresAt = normalizeTimestamp(request.expiresAt);

  if (!expiresAt || expiresAt.toMillis() <= Date.now()) {
    const error = new Error('verification code expired');
    error.code = 'otp-expired';
    throw error;
  }

  if ((request.attempts || 0) >= MAX_OTP_ATTEMPTS) {
    const error = new Error('too many incorrect attempts');
    error.code = 'otp-locked';
    throw error;
  }

  const hashedAttempt = await sha256Hex(`${code.trim()}${user.uid}`);

  if (hashedAttempt !== request.hashedCode) {
    await updateDoc(otpRef, {
      attempts: (request.attempts || 0) + 1,
    });

    const error = new Error('incorrect code');
    error.code = 'incorrect-code';
    error.remainingAttempts = Math.max(0, MAX_OTP_ATTEMPTS - ((request.attempts || 0) + 1));
    throw error;
  }

  await setDoc(verifiedEmailRef(user.uid), {
    uid: user.uid,
    universityEmail: user.email.trim().toLowerCase(),
    verifiedAt: serverTimestamp(),
  });

  await deleteDoc(otpRef).catch(() => {});

  return true;
}
