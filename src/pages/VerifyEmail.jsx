import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../hooks/useAuth';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const user = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user && user.emailVerified) {
      navigate('/feed');
    }
  }, [user, navigate]);

  const handleResend = async () => {
    if (!auth.currentUser) return;
    setLoading(true);
    setMessage('');
    setError('');
    try {
      await sendEmailVerification(auth.currentUser);
      setMessage('verification email sent. please check your inbox.');
    } catch (err) {
      if (err.code === 'auth/too-many-requests') {
        setError('too many requests. please wait a minute.');
      } else {
        setError('failed to send verification email.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = async () => {
    if (!auth.currentUser) return;
    setLoading(true);
    setMessage('');
    setError('');
    try {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        navigate('/feed');
      } else {
        setError('email not verified yet. please check your inbox.');
      }
    } catch (err) {
      setError('failed to check status.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
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
      `}</style>

      <div style={{
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
          src="/assets/nxus_logo_icon.svg"
          alt="NXUS"
          style={{ height: '60px', objectFit: 'contain' }}
        />

        <h2 style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '1.5rem',
          color: '#ffffff',
          margin: 0,
          textTransform: 'lowercase'
        }}>
          check your email
        </h2>

        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.8rem',
          color: '#aaaaaa',
          textAlign: 'center',
          lineHeight: 1.5,
          textTransform: 'lowercase',
          margin: 0,
        }}>
          we sent a verification link to your student email. please verify to continue using nxus.
        </p>

        {message && (
          <p style={{ color: '#34A853', fontSize: '0.75rem', margin: 0 }}>{message}</p>
        )}
        
        {error && (
          <p style={{ color: '#FF2D2D', fontSize: '0.75rem', margin: 0 }}>{error}</p>
        )}

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          <button
            onClick={handleCheck}
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
            i've verified my email →
          </button>

          <button
            onClick={handleResend}
            disabled={loading}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid #333',
              borderRadius: '50px',
              padding: '0.8rem',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.9rem',
              textTransform: 'lowercase',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'border-color 0.2s',
              width: '100%',
            }}
          >
            resend link
          </button>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: 'transparent',
            color: '#666',
            border: 'none',
            fontSize: '0.75rem',
            fontFamily: "'IBM Plex Mono', monospace",
            textTransform: 'lowercase',
            textDecoration: 'underline',
            marginTop: '0.5rem',
            cursor: 'pointer'
          }}
        >
          log out
        </button>
      </div>
    </div>
  );
}
