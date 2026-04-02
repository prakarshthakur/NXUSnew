import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

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

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const createUserDoc = async (user, name) => {
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        displayName: name || user.displayName || '',
        email: user.email,
        avatarUrl: user.photoURL || '',
        bio: '',
        keywords: [],
        createdAt: serverTimestamp(),
      }, { merge: true });
    } catch (e) {
      console.warn('createUserDoc failed (non-critical):', e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName });
        await createUserDoc(cred.user, displayName);
      }
      navigate('/feed');
    } catch (err) {
      let msg = err.message || 'something went wrong';
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') msg = 'invalid email or password';
      if (err.code === 'auth/email-already-in-use') msg = 'email already in use';
      if (err.code === 'auth/weak-password') msg = 'password too weak (min 6 chars)';
      if (err.code === 'auth/invalid-email') msg = 'invalid email address';
      setError(msg.toLowerCase());
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
        const msg = err.code?.startsWith('auth/') ? err.message : 'google sign in failed';
        setError(msg.toLowerCase());
      }
    } finally {
      setLoading(false);
    }
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

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      animation: 'fadeIn 0.2s ease',
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .login-input:focus { border-color: #FF2D2D !important; }
      `}</style>

      <div className="login-card" style={{
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
      }}>
        <img
          className="login-logo"
          src="/assets/nxus_logo.png"
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
          ebay for fun.
        </p>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={mode === 'login' ? tabActive : tabInactive} onClick={() => setMode('login')}>
            log in
          </button>
          <button style={mode === 'signup' ? tabActive : tabInactive} onClick={() => setMode('signup')}>
            sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {mode === 'signup' && (
            <input
              className="login-input"
              type="text"
              placeholder="display name"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              required={mode === 'signup'}
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

          {error && (
            <p style={{
              color: '#FF2D2D',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              textTransform: 'lowercase',
              margin: '0',
            }}>
              {error}
            </p>
          )}

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
            {loading ? '...' : mode === 'login' ? "let's go →" : 'create account →'}
          </button>
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
            background: 'transparent',
            border: '1px solid #333',
            borderRadius: '50px',
            padding: '0.7rem 1.5rem',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.82rem',
            color: '#ffffff',
            textTransform: 'lowercase',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            width: '100%',
            opacity: loading ? 0.7 : 1,
            transition: 'border-color 0.2s',
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
