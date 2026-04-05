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
  // ── wave-2 founding keys (one-time use) ──────────────────────────────────
  '614b38b75e815f58046cd11ed272b0a1206fa31e7cae9e5b4b0c5d84962d2fd9',
  'dca6fe4af2ccc81a1c491645f20663feefb626e2dfa6050fd660a74621fd01c6',
  'f66317df9852663caddfaa7d57a1a13ce97510586789ffbd3981c73ba9d2fd06',
  'a8076007e6d92a9b9baaa6a56f4419d640f7764a759281420cf82d8f8def81c7',
  '2f91f2bc49045cbc1831fcc0d14a7e73c1bfab6ac9b6409f1fc27b783944a185',
  'd85d688f96a9b9f97f41ccf8d171efd2138fb33bbbbd6ac4f85cbb458f9e2b8d',
  '036f41a6da3ee7a97f73c6a2444634d00d34de1703d1c9b4c0d60b8021191007',
  '04b2bc3b622aa66df52e0a381b91438ebec5fc7059e3b4d0bd5ffd19bf8c6d56',
  '21a4fe3225a5006b0119cef79ee93751d65a0bfd04972c4be6e0a29c3246cca7',
  '92948af8f98b13c7ebe926ad72f4f62925673726a6e30388f94bcf8a678b9eac',
  '790f625a2e645c78d07b5d30b23061341e8420d810d7c2886dfaf80a26b2c45e',
  '1491869de1bf621888434a0046d98e01b0fb28ba6287de8fd0f6821faed49e0b',
  '499b92cee28a117206ee87308c5c0ce2a01dbcb16a2c7668fa710789b292adfb',
  'f25e9df0ac639ad068f11b4986fed44a105bb3d13bc5cc887c82e2f78ab9969b',
  'fc819c6a2e01f96e34cc3dafd770301f0fc33cba33e6827a23dfcf3f29569636',
  '3e4ffbbc2509242b3ea6d334e81d9442120ce87b179518a7978c379a5b6987dc',
  'f591e45971cb2d6027ea91125f05b8df568efe5aaf68074fcd21afae9172eec3',
  '9cd3771a73a308586c74abea0e2245201bb1baa3fc0fd6a52bc9eb6798cfa995',
  'af5228ff6fcae3f4fc603ac5c08b0f6be89407f9c37c2228da643b74f710eed5',
  '2f686b6272d28a5b5622cdbcb61e7b6784c5731feb365e65b435509748d9f0c1',
  '60f4bb704ee300a6857fccdcd92551b308202ff5528cfd9819b513554b24e18d',
  '9672f3022eca934d0b32b0bf81aa7d7c62fd88149cc8b0b9fb6f4599d4649536',
  '9e7355f92e276cff229df1c4947d2491c48ded428d63a6541ea5ec44c8ce9911',
  'e951d71ec6a98e6a0e7803c2d7ee213cf925e3e6644baf1689897988feb12abb',
  '6e966ffe98a21b9d8ae2500d9d1f717760dbdd78e11f8f50609e4e26ff6002c3',
  '072757b2348401749fd94f2b282a2de04030cb80bc1fb89447d6abce2b6b08fa',
  'd746c29d91bc9bf40015dcf32184d41651bbfe620b61fc251a4fa9705e66f81c',
  '8d5a62d51111c8d7104dbe9411d71f5b048cd216eb5fc184c4272b5893d98a30',
  'abf38ae6fe1475f79ec49b36d609927b91f3bb5f4f51245377aed17648d49b2e',
  '55e2adbe3caaa1898a2ea1e7c7bf53df5d20ce95135340b803d5c3bbc595ae7b',
  '622c2334cac7da69d4df84a2587e11bcabd1ecc2e69ef2e273cfbfbd3fd509d2',
  '8fa0705e03066f56d01e473fb506b3adceafc77467fc6be87e1d15bdb712406a',
  '8151e668d8dcf9612affd4aa7bf6dc5e5f2323f7a3d0e3e5f56cc6d6dbbf6a93',
  '0d066dadde909ead94864e2f9029c1a221148b21813d902824fc590e1ea6c388',
  '70095b7ac9833c1d13989f9c3edf27a10274501dd322e58b40d78ec08755373a',
  'f34d239142a4d71783194c0c707d16f903f982ef3dae0627852668e5b88d51a2',
  '2f62e1cb7713b678ef29f70fc0198d5332ddfae7514bbb50390569fffbf02687',
  '74d895a07da23411aa3c2b0cb4cc4a64bf7b67e4743f6f729ba1d385b2b52c4a',
  '9b8add26d5a9c50a887035f7a8a1c91d650340481b2685d037e2498321915cba',
  '242157f7513713cbc580a7637cb78d0f3e8c5fc19245cc586f133d8f9be05e93',
  '74521816656fd947e12a78153cc12325635b421755e687f676f1c87742dd9c87',
  'f22c1886036e9978e3602ddbf5cfb7ac074d1406ba3bbb06fc948335ec7cdc2f',
  '6370471bd05d1ddad997c627263971d8bdbe365fbc81319415aa041df735611f',
  '7820d8f14415f29ff62b8d5843a8a2a8e73a381246c928c4575b97dda2e1a93e',
  '9d8730e42fa91e6f3de06ce2bf478339d4d05d3f0b4ea49877605c9386502e47',
  'e523fb12c8415ddb8e7198e45ded42347425120ceb043d0dfb72e85decd0b2ba',
  '4ef1194c1de0d279054b645b54fc6dca959dcbcec9e73180cf390e4f80f1bd14',
  '0aa87093cce879507ebdc66b22aa47b4ceaa8230f5c6c504bab637c7b81860b5',
  '26a68aa38d5ecb93b5c6c896dc07cf072e554081ca90c733ca967dfe38d6d498',
  '7b8ba4c7220cc132b21efd66662e6ad021bb85a51edbcfd937bdded992a30c1b',
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