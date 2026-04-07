import { useEffect, useRef } from 'react';

function Divider() {
  return <div style={{ height: '1px', background: '#1a1a1a', margin: '0.25rem 0' }} />;
}

export default function SettingsPanel({ user, onClose, mobile = false }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);


  return (
    <div
      ref={panelRef}
      style={{
        position: mobile ? 'static' : 'absolute',
        top: mobile ? undefined : 'calc(100% + 8px)',
        right: mobile ? undefined : 0,
        width: mobile ? '100%' : '220px',
        background: '#0d0d0d',
        border: '1px solid #222',
        borderRadius: '10px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        zIndex: 2000,
        overflow: 'hidden',
        animation: 'settingsIn 0.15s ease',
      }}
    >
      <style>{`
        @keyframes settingsIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Header */}
      <div style={{
        padding: '0.75rem 0.85rem 0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '0.82rem',
          fontWeight: 700,
          color: '#FF2D2D',
          textTransform: 'lowercase',
        }}>
          settings
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'none', border: '1px solid #333', color: '#555',
            width: '22px', height: '22px', borderRadius: '50%', cursor: 'pointer',
            fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ×
        </button>
      </div>

      <Divider />

      <div style={{ padding: '0.35rem 0 0.5rem' }}>
        {user?.email && (
          <div style={{
            padding: '0.4rem 0.85rem 0.6rem',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.65rem',
            color: '#444',
            textTransform: 'lowercase',
          }}>
            signed in as {user.email}
          </div>
        )}

        <Divider />

        <a
          href="/login"
          onClick={handleLogout}
          style={{
            display: 'flex',
            width: '100%',
            padding: '0.6rem 0.85rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.78rem',
            color: '#ef4444',
            textTransform: 'lowercase',
            textDecoration: 'none',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          log out
        </a>
      </div>
    </div>
  );
}
