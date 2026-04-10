import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useUserDoc } from '../contexts/UserDocContext';
import { useVerification } from '../contexts/VerificationContext';
import { useAuth } from '../hooks/useAuth';
import {
  RESEND_COOLDOWN,
  isUniversityVerified,
  sendUniversityVerificationOtp,
  verifyUniversityOtp,
} from '../utils/universityVerification';

const inputStyle = {
  background: '#0d0d0d',
  border: '1px solid #1a1a1a',
  color: '#ffffff',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.9rem',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const tabActive = {
  background: '#FF2D2D',
  color: '#000000',
  border: '1px solid #FF2D2D',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.82rem',
  padding: '0.45rem 1.4rem',
  borderRadius: '50px',
  cursor: 'pointer',
  textTransform: 'lowercase',
};

const tabInactive = {
  background: 'transparent',
  color: '#FF2D2D',
  border: '1px solid #FF2D2D',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.82rem',
  padding: '0.45rem 1.4rem',
  borderRadius: '50px',
  cursor: 'pointer',
  textTransform: 'lowercase',
};

const STATS_REF = () => doc(db, 'public', 'stats');

export default function Login() {
  const navigate = useNavigate();
  const authUser = useAuth();
  const { userDoc, setUserDoc } = useUserDoc();
  const { verifiedEmailDoc, isVerified, refreshVerification } = useVerification();

  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [signupStep, setSignupStep] = useState('form');
  const [otpExpiry, setOtpExpiry] = useState(0);
  const [otpInput, setOtpInput] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown(value => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const resetSignupFlow = () => {
    setSignupStep('form');
    setOtpExpiry(0);
    setOtpInput('');
    setCooldown(0);
  };

  useEffect(() => {
    if (authUser === undefined || verifiedEmailDoc === undefined) return;

    if (!authUser) {
      return;
    }

    if (!verifiedEmailDoc) {
      setMode('signup');
      setSignupStep('otp');
      setEmail(authUser.email?.trim().toLowerCase() || '');
      return;
    }

    if (userDoc === undefined) return;

    navigate(userDoc?.onboardingComplete ? '/feed' : '/onboarding', { replace: true });
  }, [authUser, verifiedEmailDoc, userDoc, navigate]);

  const createUserDoc = async (user) => {
    const userRef = doc(db, 'users', user.uid);
    const existing = await getDoc(userRef);
    const isNew = !existing.exists();
    const normalizedEmail = (user.email || email).trim().toLowerCase();
    const existingData = existing.exists() ? existing.data() : {};

    const payload = {
      displayName: existingData.displayName || '',
      email: normalizedEmail,
      photoURL: existingData.photoURL || existingData.avatarUrl || user.photoURL || '',
      bio: existingData.bio || '',
      keywords: Array.isArray(existingData.keywords) ? existingData.keywords : [],
      instagram: existingData.instagram || '',
      university: existingData.university || existingData.universityFlair || '',
      onboardingComplete: existingData.onboardingComplete || false,
      age: existingData.age || '',
      gender: existingData.gender || '',
      lookingFor: existingData.lookingFor || '',
      university_verified: true,
      universityVerifiedAt: existingData.universityVerifiedAt || serverTimestamp(),
      createdAt: existingData.createdAt || serverTimestamp(),
    };

    await setDoc(userRef, payload, { merge: true });
    if (isNew) {
      await setDoc(STATS_REF(), { totalUsers: increment(1) }, { merge: true });
    }

    const nextUserDoc = { ...(existingData || {}), ...payload };
    setUserDoc(nextUserDoc);
    return nextUserDoc;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      const verified = await isUniversityVerified(cred.user.uid);

      if (!verified) {
        setMode('signup');
        setSignupStep('otp');
        setOtpInput('');
        setOtpExpiry(0);
        setCooldown(0);
        setEmail(cred.user.email?.trim().toLowerCase() || email.trim().toLowerCase());
        setError('verify your university email to continue');
        return;
      }

      const nextUserDoc = await createUserDoc(cred.user);
      navigate(nextUserDoc.onboardingComplete ? '/feed' : '/onboarding', { replace: true });
    } catch (err) {
      let msg = err.message || 'something went wrong';
      if (
        err.code === 'auth/user-not-found'
        || err.code === 'auth/wrong-password'
        || err.code === 'auth/invalid-credential'
      ) {
        msg = 'invalid email or password';
      }
      if (err.code === 'auth/invalid-email') msg = 'invalid email address';
      setError(msg.toLowerCase());
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const normalizedEmail = email.trim().toLowerCase();

    try {
      if (password.trim().length < 6) {
        throw Object.assign(new Error('password too weak (min 6 chars)'), { code: 'auth/weak-password' });
      }

      if (authUser && isVerified) {
        navigate(userDoc?.onboardingComplete ? '/feed' : '/onboarding', { replace: true });
        return;
      }

      if (authUser && authUser.email?.trim().toLowerCase() !== normalizedEmail) {
        throw Object.assign(new Error('finish verifying your current account or sign out first'), { code: 'auth/session-conflict' });
      }

      let activeUser = auth.currentUser;

      if (!activeUser) {
        const cred = await createUserWithEmailAndPassword(auth, normalizedEmail, password);
        activeUser = cred.user;
      }

      const { expiresAt } = await sendUniversityVerificationOtp({
        user: activeUser,
        displayName: 'student',
      });

      setOtpExpiry(expiresAt);
      setOtpInput('');
      setSignupStep('otp');
      setCooldown(RESEND_COOLDOWN);
    } catch (err) {
      let msg = err.message || 'failed to send code';
      if (err.code === 'email-domain-not-allowed') msg = 'MDX & MAHE only, your campus coming soon';
      if (err.code === 'auth/email-already-in-use') msg = 'that student email is already in use';
      if (err.code === 'otp-still-active') msg = 'a code is already active for this account';
      if (err.code === 'otp-locked') msg = 'too many incorrect attempts. please contact support';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (otpInput.trim().length < 6) {
      setError('enter the 6-digit code');
      return;
    }

    if (!auth.currentUser) {
      setError('your verification session expired. log in again');
      return;
    }

    setLoading(true);
    try {
      await verifyUniversityOtp({
        user: auth.currentUser,
        code: otpInput,
      });
      await refreshVerification();
      const verified = await isUniversityVerified(auth.currentUser.uid);

      if (!verified) {
        throw Object.assign(new Error('verification failed'), { code: 'verified-email-missing' });
      }

      const nextUserDoc = await createUserDoc(auth.currentUser);
      resetSignupFlow();
      navigate(nextUserDoc.onboardingComplete ? '/feed' : '/onboarding', { replace: true });
    } catch (err) {
      let msg = err.message || 'something went wrong';
      if (err.code === 'incorrect-code') msg = 'incorrect code';
      if (err.code === 'otp-expired') msg = 'code expired. resend to try again';
      if (err.code === 'otp-missing') msg = 'code expired. resend to try again';
      if (err.code === 'otp-locked') msg = 'too many incorrect attempts. please contact support';
      setError(msg.toLowerCase());
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (cooldown > 0 || loading) return;
    setError('');
    setLoading(true);
    try {
      if (!auth.currentUser) {
        throw Object.assign(new Error('your verification session expired. log in again'), { code: 'missing-auth-user' });
      }

      const { expiresAt } = await sendUniversityVerificationOtp({
        user: auth.currentUser,
        displayName: 'student',
      });
      setOtpExpiry(expiresAt);
      setOtpInput('');
      setCooldown(RESEND_COOLDOWN);
    } catch (err) {
      let msg = err.message || 'failed to resend code';
      if (err.code === 'email-domain-not-allowed') msg = 'MDX & MAHE only, your campus coming soon';
      if (err.code === 'otp-still-active') msg = 'your active code has not expired yet';
      if (err.code === 'otp-locked') msg = 'too many incorrect attempts. please contact support';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = {
    background: '#0d0d0d',
    border: '1px solid #1a1a1a',
    borderRadius: '8px',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
  };

  const pageStyle = {
    minHeight: '100vh',
    background: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    animation: 'fadeIn 0.2s ease',
  };

  const errorEl = error && (
    <p style={{
      color: '#FF2D2D',
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.75rem',
      margin: '0',
      textAlign: 'center',
    }}>
      {error}
    </p>
  );

  return (
    <div style={pageStyle}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .login-input:focus { border-color: #FF2D2D !important; }
      `}</style>

      <div className="login-card" style={cardStyle}>
        <img
          className="login-logo"
          src="/assets/nxus_logo_icon.svg"
          alt="NXUS"
          style={{ height: '80px', objectFit: 'contain' }}
        />

        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          color: '#666666',
          textTransform: 'lowercase',
          margin: '-0.5rem 0 0',
        }}>
          Eliminate your Boredom.
        </p>

        <div style={{
          width: '100%',
          border: '1px solid #1a1a1a',
          borderRadius: '10px',
          background: '#080808',
          padding: '0.8rem 1rem',
          textAlign: 'center',
        }}>
          <p style={{
            margin: 0,
            color: '#FF2D2D',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            textTransform: 'lowercase',
          }}>
            mdx + mahe student signups only
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            style={mode === 'login' ? tabActive : tabInactive}
            onClick={() => {
              setMode('login');
              setError('');
              resetSignupFlow();
            }}
          >
            log in
          </button>
          <button
            type="button"
            style={mode === 'signup' ? tabActive : tabInactive}
            onClick={() => {
              setMode('signup');
              setError('');
            }}
          >
            sign up
          </button>
        </div>

        {mode === 'signup' && signupStep === 'otp' ? (
          <form
            onSubmit={handleVerifyOtp}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <p style={{
              color: '#555',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              textTransform: 'lowercase',
              margin: 0,
              textAlign: 'center',
              lineHeight: 1.5,
            }}>
              enter the 6-digit code sent to {(authUser?.email || email).trim().toLowerCase()}
            </p>

            <input
              className="login-input"
              type="text"
              inputMode="numeric"
              placeholder="6-digit code"
              value={otpInput}
              onChange={e => setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
              required
              maxLength={6}
              style={{ ...inputStyle, letterSpacing: '0.2em', textAlign: 'center' }}
            />

            {errorEl}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: '#FF2D2D',
                color: '#000000',
                border: 'none',
                borderRadius: '50px',
                padding: '0.8rem',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'lowercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'opacity 0.2s',
                width: '100%',
              }}
            >
              {loading ? '...' : 'verify & continue →'}
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={cooldown > 0 || loading}
                style={{
                  background: 'none',
                  border: 'none',
                  color: cooldown > 0 ? '#333' : '#666',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  textTransform: 'lowercase',
                  padding: 0,
                  cursor: cooldown > 0 || loading ? 'default' : 'pointer',
                }}
              >
                {cooldown > 0 ? `resend in ${cooldown}s` : 'resend code'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setError('');
                  resetSignupFlow();
                  signOut(auth).catch(() => {});
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#444',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  textTransform: 'lowercase',
                  padding: 0,
                }}
              >
                back
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={mode === 'login' ? handleLogin : handleSendOtp}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <input
              className="login-input"
              type="email"
              placeholder={mode === 'signup' ? 'your university email' : 'email'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              className="login-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={inputStyle}
            />

            {errorEl}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: '#FF2D2D',
                color: '#000000',
                border: 'none',
                borderRadius: '50px',
                padding: '0.8rem',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'lowercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'opacity 0.2s',
                width: '100%',
              }}
            >
              {loading ? '...' : mode === 'login' ? "let's go →" : 'send verification code →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
