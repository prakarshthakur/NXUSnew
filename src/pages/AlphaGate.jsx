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