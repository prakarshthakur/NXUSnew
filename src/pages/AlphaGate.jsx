import React, { useState } from 'react';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

// Unlimited-use key hash (nxustakeoverdubai)
const UNLIMITED_HASH = '090d0b170162663f4176cd970317b2d9cec2036da0ad3aedcd0e3d47cf1bb82f';

// One-time founding keys — SHA-256 hashes only, plaintext never in bundle
const FOUNDING_HASHES = new Set([
  'aceb8d94da5b2be2ab064eca74192138362b80d7381a109500bb8b34b893fb66',  // nxus-alpha-crew
  '2f9784b712d6a7b2c82b9e577a6f41bd0a44a6a79d2c0976585a41e6e015bbb7',  // nxus-inner-circle
  'c669dbfe7ba47f33ba6abfc52bde59a6131a4e3729ac6d6bcb77351e87e2a2d1',  // nxus-vip-access
  '318cf8160f255a01437da6ef565253010a682c6ae655966d90a782c6422cd7b6',  // nxus-first-wave
  'ee47cac4c0fe10648d2cd82aa4ce07b011258c2ad93bbd0e56b0e11269bbee19',  // nxus-early-birds
  '347c561da3bd9089191b15f97adfcf67ce5892099c47e8bb4597d59928a30378',  // nxus-ground-zero
  '8ac502e363ee73a77cfb70b64b18cab7fd11eb80d2790b2629c01c075148ec1c',  // nxus-day-one-club
  'c4064bb78e4f4308a480520f4db8f24fa064ee074ecb1b72e23aef3ea6a3a875',  // nxus-original-ten
  'e803ef61b35e1b858b91a01ee3e3ff00e45879792b8bcbacdc0a4117746f82a6',  // nxus-founding-pass
  '61cb37d4b041666cb9fdd262c9ab1ac6f38791f528f3c67c153114bff3c779f0',  // nxus-pioneer-key
]);

const STORAGE_KEY = 'nxus_alpha_v1';
export const FOUNDING_STORAGE_KEY = 'nxus_founding_key';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function isAlphaUnlocked() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === UNLIMITED_HASH || (stored && FOUNDING_HASHES.has(stored));
}

export default function AlphaGate({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const [shake, setShake] = useState(false);

  const triggerShake = (msg) => {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 500);
    setInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || checking) return;
    setChecking(true);
    setError('');

    const hash = await sha256(input.trim());

    // ── Unlimited key ──────────────────────────────────────────────────────
    if (hash === UNLIMITED_HASH) {
      localStorage.setItem(STORAGE_KEY, hash);
      onUnlock();
      return;
    }

    // ── One-time founding key ──────────────────────────────────────────────
    if (FOUNDING_HASHES.has(hash)) {
      try {
        const keyRef = doc(db, 'alphaKeys', hash);
        const snap = await getDoc(keyRef);

        if (snap.exists()) {
          // Already claimed
          triggerShake('this key has already been used');
          setChecking(false);
          return;
        }

        // Claim it
        await setDoc(keyRef, { usedAt: serverTimestamp() });
        localStorage.setItem(STORAGE_KEY, hash);
        localStorage.setItem(FOUNDING_STORAGE_KEY, hash);
        onUnlock();
        return;
      } catch (err) {
        // If setDoc failed because another request claimed it first, Firestore
        // will throw — treat as already used
        if (err.code === 'permission-denied') {
          triggerShake('this key has already been used');
        } else {
          triggerShake('network error — try again');
        }
        setChecking(false);
        return;
      }
    }

    // ── Invalid key ────────────────────────────────────────────────────────
    triggerShake('incorrect code');
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
          nxus alpha
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
            onChange={e => { setInput(e.target.value); setError(''); }}
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
          />

          {error && (
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.68rem',
              color: '#ef4444',
              textTransform: 'lowercase',
              margin: 0,
            }}>
              {error}
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

      {/* Social links */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="https://chat.whatsapp.com/GSa1HonxiXNIEL3yVdxmZ0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.9rem',
            borderRadius: '50px',
            border: '1px solid #1a3a1a',
            background: 'rgba(37,211,102,0.06)',
            color: '#25d366',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            textDecoration: 'none',
            textTransform: 'lowercase',
            transition: 'border-color 0.15s, background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#25d366'; e.currentTarget.style.background = 'rgba(37,211,102,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a3a1a'; e.currentTarget.style.background = 'rgba(37,211,102,0.06)'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          whatsapp
        </a>
        <a
          href="https://www.instagram.com/nxusdxb/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.9rem',
            borderRadius: '50px',
            border: '1px solid #3a1a2a',
            background: 'rgba(225,48,108,0.06)',
            color: '#e1306c',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            textDecoration: 'none',
            textTransform: 'lowercase',
            transition: 'border-color 0.15s, background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#e1306c'; e.currentTarget.style.background = 'rgba(225,48,108,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#3a1a2a'; e.currentTarget.style.background = 'rgba(225,48,108,0.06)'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          instagram
        </a>
        <a
          href="https://discord.gg/JDxPnzys"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.9rem',
            borderRadius: '50px',
            border: '1px solid #1a1a3a',
            background: 'rgba(88,101,242,0.06)',
            color: '#5865F2',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            textDecoration: 'none',
            textTransform: 'lowercase',
            transition: 'border-color 0.15s, background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#5865F2'; e.currentTarget.style.background = 'rgba(88,101,242,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a3a'; e.currentTarget.style.background = 'rgba(88,101,242,0.06)'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          discord
        </a>
      </div>

      <p style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.65rem',
        color: '#2a2a2a',
        marginTop: '1.25rem',
        textTransform: 'lowercase',
      }}>
        alpha · invite only
      </p>
    </div>
  );
}