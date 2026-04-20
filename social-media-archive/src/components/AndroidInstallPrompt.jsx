import { useEffect, useRef, useState } from 'react';

export default function AndroidInstallPrompt() {
  const deferredPrompt = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('nxus_install_dismissed_android')) return;

    function handleBeforeInstallPrompt(e) {
      e.preventDefault();
      deferredPrompt.current = e;
      setVisible(true);
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  if (!visible) return null;

  async function handleInstall() {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    const { outcome } = await deferredPrompt.current.userChoice;
    if (outcome === 'dismissed') {
      localStorage.setItem('nxus_install_dismissed_android', '1');
    }
    deferredPrompt.current = null;
    setVisible(false);
  }

  function handleDismiss() {
    localStorage.setItem('nxus_install_dismissed_android', '1');
    setVisible(false);
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 'calc(72px + env(safe-area-inset-bottom, 0px))',
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
        Add <strong style={{ color: '#ffffff', fontWeight: 600 }}>NXUS</strong> to your home screen
      </div>

      {/* Install button */}
      <button
        onClick={handleInstall}
        style={{
          background: '#FF2D2D',
          border: 'none',
          color: '#ffffff',
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: "'IBM Plex Mono', monospace",
          padding: '5px 10px',
          borderRadius: '20px',
          flexShrink: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          letterSpacing: '0.02em',
        }}
      >
        {/* Android add-to-homescreen icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        install
      </button>

      {/* Dismiss */}
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
