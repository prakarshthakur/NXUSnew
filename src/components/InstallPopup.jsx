import { useEffect, useState } from 'react';

export default function InstallPopup() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone || document.referrer.includes('android-app://');
    let dismissed = false;
    try {
      dismissed = localStorage.getItem('installDismissed') === 'true';
    } catch (e) {
      console.warn('localStorage is disabled or restricted');
    }

    if (isStandalone || dismissed) return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const _isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = _isIOS && /safari/.test(userAgent) && !/crios|fxios/.test(userAgent);
    const _isAndroid = /android/.test(userAgent);

    setIsIOS(_isIOS && isSafari);
    setIsAndroid(_isAndroid);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!dismissed && !isStandalone && _isAndroid) {
        setTimeout(() => setShow(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (_isIOS && isSafari && !dismissed && !isStandalone) {
      setTimeout(() => setShow(true), 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleDismiss = () => {
    setShow(false);
    try {
      localStorage.setItem('installDismissed', 'true');
    } catch (e) {
      // Ignore storage errors in private mode
    }
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShow(false);
        try {
          localStorage.setItem('installDismissed', 'true');
        } catch (e) {
          // Ignore
        }
      }
      setDeferredPrompt(null);
    }
  };

  if (!show) return null;
  if (!isIOS && !isAndroid) return null; 

  return (
    <>
      <div style={overlayStyle} onClick={handleDismiss} />
      <div style={sheetStyle}>
        <button style={closeBtnStyle} onClick={handleDismiss}>&times;</button>
        <div style={headerStyle}>
          <img src="/assets/nxus_logo_icon.svg" alt="NXUS App Icon" style={iconStyle} />
          <h3 style={titleStyle}>Add NXUS to Home Screen</h3>
          <p style={subtitleStyle}>Get the full app experience</p>
        </div>

        {isIOS && (
          <div style={instructionsStyle}>
            Tap the Share button{' '}
            <svg style={inlineIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>{' '}
            below, then select <br />
            <strong>'Add to Home Screen'</strong>{' '}
            <svg style={inlineIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
        )}

        {isAndroid && (
          <button style={installBtnStyle} onClick={handleInstall}>
            Install App
          </button>
        )}
      </div>
    </>
  );
}

const overlayStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: 10000,
  animation: 'fadeIn 0.3s ease',
};

const sheetStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100vw',
  background: '#0a0a0a',
  borderTop: '1px solid #E8001C',
  borderRadius: '16px 16px 0 0',
  padding: '1.5rem 1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  zIndex: 10001,
  boxShadow: '0 -5px 30px rgba(232, 0, 28, 0.1)',
  textAlign: 'center',
  boxSizing: 'border-box',
  animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1)',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '0.8rem',
  right: '1rem',
  background: 'transparent',
  border: 'none',
  color: 'rgba(232, 0, 28, 0.5)',
  fontSize: '1.8rem',
  cursor: 'pointer',
  lineHeight: 1,
  padding: 0,
  fontWeight: 300,
};

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
};

const iconStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '10px',
  objectFit: 'contain',
  border: '1px solid rgba(232, 0, 28, 0.5)',
  background: '#000000',
  padding: '4px',
};

const titleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.4rem',
  color: '#E8001C',
  margin: 0,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
};

const subtitleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.85rem',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: 0,
};

const instructionsStyle = {
  background: 'rgba(232, 0, 28, 0.05)',
  border: '1px solid rgba(232, 0, 28, 0.3)',
  padding: '0.8rem',
  borderRadius: '8px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.85rem',
  color: '#ffffff',
  lineHeight: 1.5,
  textAlign: 'center',
  fontWeight: 400,
};

const inlineIconStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '18px',
  height: '18px',
  margin: '0 4px',
  stroke: '#E8001C',
  strokeWidth: '2px',
};

const installBtnStyle = {
  background: '#E8001C',
  border: '1px solid #E8001C',
  borderRadius: 0,
  color: '#000000',
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.1rem',
  letterSpacing: '0.1em',
  padding: '0.8rem',
  cursor: 'pointer',
  width: '100%',
  textTransform: 'uppercase',
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}
