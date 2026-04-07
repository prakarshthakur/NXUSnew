import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SocialLinks from '../components/SocialLinks';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp, increment } from 'firebase/firestore';
import { auth, db } from '../firebase';
import MemberCount from '../components/MemberCount';

const ADMIN_EMAIL = 'prakarshthakur1@gmail.com';
const STATS_REF = () => doc(db, 'public', 'stats');

const EMAILJS_SERVICE  = 'service_bxm5d9s';
const EMAILJS_TEMPLATE = 'template_n4cxn9e';
const EMAILJS_KEY      = '0PpBz8KikvlE81sVG';
const OTP_EXPIRY_MS    = 15 * 60 * 1000;
const RESEND_COOLDOWN  = 60;
const MAX_ATTEMPTS     = 5;

// ── helpers ───────────────────────────────────────────────────────────────────

async function checkEmailAllowed(email) {
  if (email === ADMIN_EMAIL) return true;
  try {
    const snap = await getDoc(doc(db, 'config', 'emailSuffixes'));
    if (!snap.exists()) return true;
    const suffixes = snap.data().suffixes || [];
    if (suffixes.length === 0) return true;
    return suffixes.some(s => email.toLowerCase().endsWith(s.toLowerCase()));
  } catch (e) {
    console.error('checkEmailAllowed failed:', e);
    return false;
  }
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ── shared styles ─────────────────────────────────────────────────────────────

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

// ── component ─────────────────────────────────────────────────────────────────

export default function Login() {
  const navigate = useNavigate();

  // form state
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // OTP state
  const [otpStep, setOtpStep] = useState(false);
  const [pendingOtp, setPendingOtp] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [otpExpiry, setOtpExpiry] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const otpRefs = useRef([]);

  // cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  // ── firebase helpers ─────────────────────────────────────────────────────

  const createUserDoc = async (user, name) => {
    try {
      const userRef = doc(db, 'users', user.uid);
      const existing = await getDoc(userRef);
      const isNew = !existing.exists();
      await setDoc(userRef, {
        displayName: name || user.displayName || '',
        email: user.email,
        avatarUrl: user.photoURL || '',
        bio: '',
        keywords: [],
        createdAt: serverTimestamp(),
      }, { merge: true });
      if (isNew) await setDoc(STATS_REF(), { totalUsers: increment(1) }, { merge: true });
    } catch (e) {
      console.warn('createUserDoc failed (non-critical):', e.message);
    }
  };


  // ── OTP helpers ──────────────────────────────────────────────────────────

  const sendOtp = async (toEmail, code) => {
    const expiry = new Date(Date.now() + OTP_EXPIRY_MS);
    const timeStr = expiry.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
      email: toEmail,
      passcode: code,
      time: timeStr,
    }, { publicKey: EMAILJS_KEY });
    return expiry;
  };

  const handleOtpDigit = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...otpDigits];
    next[index] = digit;
    setOtpDigits(next);
    setError('');
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      setOtpDigits(pasted.split(''));
      otpRefs.current[5]?.focus();
      e.preventDefault();
    }
  };

  // ── submit handlers ──────────────────────────────────────────────────────

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/feed');
    } catch (err) {
      let msg = err.message || 'something went wrong';
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password'
          || err.code === 'auth/invalid-credential') msg = 'invalid email or password';
      if (err.code === 'auth/invalid-email') msg = 'invalid email address';
      setError(msg.toLowerCase());
    } finally {
      setLoading(false);
    }
  };

  // Step 1 — validate + send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const allowed = await checkEmailAllowed(email);
      if (!allowed) throw { code: 'auth/email-not-allowed' };

      const code = generateOtp();
      const expiry = await sendOtp(email, code);

      setPendingOtp(code);
      setOtpExpiry(expiry);
      setOtpDigits(['', '', '', '', '', '']);
      setAttempts(0);
      setCooldown(RESEND_COOLDOWN);
      setOtpStep(true);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } catch (err) {
      let msg = 'failed to send code — try again';
      if (err.code === 'auth/email-not-allowed') msg = 'this email domain is not allowed to sign up';
      if (err.code === 'auth/invalid-email') msg = 'invalid email address';
      setError(msg.toLowerCase());
    } finally {
      setLoading(false);
    }
  };

  // Step 2 — verify OTP + create account
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const entered = otpDigits.join('');
    if (entered.length < 6) { setError('enter all 6 digits'); return; }
    if (new Date() > otpExpiry) { setError('code expired — click resend'); return; }
    if (attempts >= MAX_ATTEMPTS) { setError('too many attempts — click resend for a new code'); return; }

    if (entered !== pendingOtp) {
      const left = MAX_ATTEMPTS - attempts - 1;
      setAttempts(a => a + 1);
      setOtpDigits(['', '', '', '', '', '']);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
      setError(left > 0 ? `wrong code — ${left} attempt${left !== 1 ? 's' : ''} left` : 'too many wrong attempts — request a new code');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName });
      await createUserDoc(cred.user, displayName);
      navigate('/feed');
    } catch (err) {
      let msg = err.message || 'something went wrong';
      if (err.code === 'auth/email-already-in-use') msg = 'email already in use';
      if (err.code === 'auth/weak-password') msg = 'password too weak (min 6 chars)';
      setError(msg.toLowerCase());
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0 || loading) return;
    setError('');
    setLoading(true);
    try {
      const code = generateOtp();
      const expiry = await sendOtp(email, code);
      setPendingOtp(code);
      setOtpExpiry(expiry);
      setOtpDigits(['', '', '', '', '', '']);
      setAttempts(0);
      setCooldown(RESEND_COOLDOWN);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } catch {
      setError('failed to resend — try again');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      await createUserDoc(cred.user, cred.user.displayName);
      navigate('/feed');
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('google sign in failed');
      }
    } finally {
      setLoading(false);
    }
  };

  // ── tab styles ───────────────────────────────────────────────────────────

  const tabActive = {
    background: '#FF2D2D', color: '#000000', border: '1px solid #FF2D2D',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem',
    padding: '0.45rem 1.4rem', borderRadius: '50px', cursor: 'pointer', textTransform: 'lowercase',
  };
  const tabInactive = {
    background: 'transparent', color: '#FF2D2D', border: '1px solid #FF2D2D',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem',
    padding: '0.45rem 1.4rem', borderRadius: '50px', cursor: 'pointer', textTransform: 'lowercase',
  };

  // ── render ───────────────────────────────────────────────────────────────

  const cardStyle = {
    background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '8px',
    padding: '2.5rem 2rem', width: '100%', maxWidth: '400px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem',
  };

  const pageStyle = {
    minHeight: '100vh', background: '#000000',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: '2rem 1rem', animation: 'fadeIn 0.2s ease',
  };

  const errorEl = error && (
    <p style={{
      color: '#FF2D2D', fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.75rem', textTransform: 'lowercase', margin: '0', textAlign: 'center',
    }}>
      {error}
    </p>
  );

  const submitBtn = (label) => (
    <button
      type="submit"
      disabled={loading}
      style={{
        background: '#FF2D2D', color: '#000000', border: 'none', borderRadius: '50px',
        padding: '0.8rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.9rem',
        fontWeight: 700, textTransform: 'lowercase',
        cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1,
        transition: 'opacity 0.2s', width: '100%',
      }}
    >
      {loading ? '...' : label}
    </button>
  );

  // ── OTP verification step ────────────────────────────────────────────────
  if (otpStep && mode === 'signup') {
    return (
      <div style={pageStyle}>
        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .otp-box { border: 1px solid #1a1a1a !important; transition: border-color 0.15s; }
          .otp-box:focus { border-color: #FF2D2D !important; outline: none; }
        `}</style>
        <div style={cardStyle}>
          <img src="/assets/nxus_logo_icon.svg" alt="NXUS" style={{ height: '60px', objectFit: 'contain' }} />

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.88rem', color: '#fff', margin: '0 0 0.35rem', textTransform: 'lowercase' }}>
              check your email
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', color: '#555', margin: 0, textTransform: 'lowercase' }}>
              we sent a 6-digit code to
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', color: '#888', margin: '0.2rem 0 0', wordBreak: 'break-all' }}>
              {email}
            </p>
          </div>

          <form
            onSubmit={handleVerifyOtp}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
          >
            {/* 6-digit boxes */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              {otpDigits.map((d, i) => (
                <input
                  key={i}
                  ref={el => otpRefs.current[i] = el}
                  className="otp-box"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  onChange={e => handleOtpDigit(i, e.target.value)}
                  onKeyDown={e => handleOtpKeyDown(i, e)}
                  onPaste={handleOtpPaste}
                  style={{
                    width: '44px', height: '54px', textAlign: 'center',
                    background: '#0d0d0d', borderRadius: '8px',
                    color: '#ffffff', fontSize: '1.4rem', fontWeight: 700,
                    fontFamily: "'IBM Plex Mono', monospace",
                    caretColor: '#FF2D2D',
                  }}
                />
              ))}
            </div>

            {errorEl}
            {submitBtn('verify →')}
          </form>

          {/* Resend + back */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={handleResend}
              disabled={cooldown > 0 || loading}
              style={{
                background: 'none', border: 'none', cursor: cooldown > 0 ? 'default' : 'pointer',
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem',
                color: cooldown > 0 ? '#333' : '#666',
                textTransform: 'lowercase', transition: 'color 0.15s', padding: 0,
              }}
              onMouseEnter={e => { if (cooldown === 0) e.currentTarget.style.color = '#aaa'; }}
              onMouseLeave={e => e.currentTarget.style.color = cooldown > 0 ? '#333' : '#666'}
            >
              {cooldown > 0 ? `resend in ${cooldown}s` : 'resend code'}
            </button>
            <button
              onClick={() => { setOtpStep(false); setError(''); setOtpDigits(['','','','','','']); }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem',
                color: '#333', textTransform: 'lowercase', padding: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#666'}
              onMouseLeave={e => e.currentTarget.style.color = '#333'}
            >
              ← back
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── main login / signup form ─────────────────────────────────────────────
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
          fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem',
          color: '#666666', textTransform: 'lowercase', margin: '-0.5rem 0 0',
        }}>
          Eliminate your Boredom.
        </p>

        <MemberCount style={{ margin: '-0.35rem 0 0' }} />

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={mode === 'login' ? tabActive : tabInactive} onClick={() => { setMode('login'); setError(''); }}>
            log in
          </button>
          <button style={mode === 'signup' ? tabActive : tabInactive} onClick={() => { setMode('signup'); setError(''); }}>
            sign up
          </button>
        </div>

        <form
          onSubmit={mode === 'login' ? handleLogin : handleSendOtp}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {mode === 'signup' && (
            <input
              className="login-input"
              type="text"
              placeholder="display name"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              required
              style={inputStyle}
            />
          )}
          <input
            className="login-input"
            type="email"
            placeholder="email"
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
          {submitBtn(mode === 'login' ? "let's go →" : 'send verification code →')}
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '0.75rem' }}>
          <div style={{ flex: 1, height: '1px', background: '#1a1a1a' }} />
          <span style={{ color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem' }}>or</span>
          <div style={{ flex: 1, height: '1px', background: '#1a1a1a' }} />
        </div>

        {/* Google sign in */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          style={{
            background: 'transparent', border: '1px solid #333', borderRadius: '50px',
            padding: '0.7rem 1.5rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem',
            color: '#ffffff', textTransform: 'lowercase',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
            width: '100%', opacity: loading ? 0.7 : 1, transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#555'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#333'}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          continue with google
        </button>
      </div>
    </div>
  );
}
