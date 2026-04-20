import { useState } from 'react';

const isIosSafari =
  /iPhone|iPad|iPod/.test(navigator.userAgent) &&
  !window.navigator.standalone &&
  !/CriOS|FxiOS/.test(navigator.userAgent);

export default function IOSInstallPrompt() {
  const [dismissed, setDismissed] = useState(
    () => !!localStorage.getItem('nxus_install_dismissed')
  );

  if (!isIosSafari || dismissed) return null;

  function handleDismiss() {
    localStorage.setItem('nxus_install_dismissed', '1');
    setDismissed(true);
  }

  return (
    <div style={{
      position: 'fixed',
      // 76px clears Safari's bottom toolbar; safe-area-inset-bottom adds home bar height
      bottom: 'calc(76px + env(safe-area-inset-bottom, 0px))',
      left: '12px',
      right: '12px',
      zIndex: 9999,
      background: 'rgba(20, 20, 20, 0.92)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}>
      <img
        src="/assets/nxus_logo_icon.svg"
        alt="NXUS"
        style={{ width: '28px', height: '28px', flexShrink: 0, opacity: 0.9 }}
      />
      <div style={{ flex: 1, fontSize: '12px', lineHeight: '1.5', color: '#aaaaaa' }}>
        Tap&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ verticalAlign: 'middle', display: 'inline-block', margin: '0 1px' }}
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        &nbsp;then <strong style={{ color: '#ffffff', fontWeight: 600 }}>"Add to Home Screen"</strong>
      </div>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: 'none',
          color: '#666666',
          fontSize: '12px',
          lineHeight: 1,
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          cursor: 'pointer',
        }}
      >
        ✕
      </button>
    </div>
  );
}
