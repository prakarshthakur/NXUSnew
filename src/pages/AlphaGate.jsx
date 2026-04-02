import React, { useState } from 'react';

// SHA-256 hash of the access password — never store plaintext
const ACCESS_HASH = '090d0b170162663f4176cd970317b2d9cec2036da0ad3aedcd0e3d47cf1bb82f';
const STORAGE_KEY = 'nxus_alpha_v1';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function isAlphaUnlocked() {
  return localStorage.getItem(STORAGE_KEY) === ACCESS_HASH;
}

export default function AlphaGate({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setChecking(true);
    const hash = await sha256(input.trim());
    if (hash === ACCESS_HASH) {
      localStorage.setItem(STORAGE_KEY, ACCESS_HASH);
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setInput('');
    }
    setChecking(false);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'gfadeIn 0.4s ease',
    }}>
      <style>{`
        @keyframes gfadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gshake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        .gate-shake { animation: gshake 0.45s ease; }
      `}</style>

      {/* Logo */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <img
          src="/assets/nxus_logo.png"
          alt="NXUS"
          style={{ width: '52px', height: '52px', objectFit: 'contain', marginBottom: '1rem' }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          letterSpacing: '-0.02em',
        }}>
          nxus
        </div>
      </div>

      {/* Card */}
      <div
        className={shake ? 'gate-shake' : ''}
        style={{
          width: '100%',
          maxWidth: '340px',
          background: '#0d0d0d',
          border: error ? '1px solid rgba(239,68,68,0.4)' : '1px solid #1a1a1a',
          borderRadius: '10px',
          padding: '2rem 1.75rem',
          transition: 'border-color 0.2s',
        }}
      >
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.72rem',
          color: '#555',
          textTransform: 'lowercase',
          marginBottom: '1.5rem',
          lineHeight: 1.6,
        }}>
          nxus is in private alpha.<br />
          enter your access code to continue.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <input
            type="password"
            placeholder="access code"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            autoFocus
            autoComplete="off"
            style={{
              background: '#111',
              border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : '#222'}`,
              borderRadius: '6px',
              color: '#fff',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.82rem',
              padding: '0.65rem 0.9rem',
              outline: 'none',
              width: '100%',
              transition: 'border-color 0.2s',
              letterSpacing: '0.05em',
            }}
            onFocus={e => { if (!error) e.currentTarget.style.borderColor = '#333'; }}
            onBlur={e => { if (!error) e.currentTarget.style.borderColor = '#222'; }}
          />

          {error && (
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.68rem',
              color: '#ef4444',
              textTransform: 'lowercase',
              margin: 0,
            }}>
              incorrect code
            </p>
          )}

          <button
            type="submit"
            disabled={checking || !input.trim()}
            style={{
              background: '#FF2D2D',
              border: 'none',
              borderRadius: '50px',
              padding: '0.6rem 1.2rem',
              color: '#000',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'lowercase',
              cursor: checking || !input.trim() ? 'not-allowed' : 'pointer',
              opacity: checking || !input.trim() ? 0.5 : 1,
              transition: 'opacity 0.2s',
              marginTop: '0.25rem',
            }}
          >
            {checking ? 'checking...' : 'enter →'}
          </button>
        </form>
      </div>

      <p style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.65rem',
        color: '#2a2a2a',
        marginTop: '2rem',
        textTransform: 'lowercase',
      }}>
        alpha · invite only
      </p>
    </div>
  );
}
