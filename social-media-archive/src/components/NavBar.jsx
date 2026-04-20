import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import SettingsPanel from './SettingsPanel';
import MemberCount from './MemberCount';

function HomeIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
    </svg>
  );
}

function SparkIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    </svg>
  );
}

function PlusSquareIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill={active ? 'rgba(255,45,45,0.18)' : 'none'} />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}

function CalendarIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UserIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill={active ? 'currentColor' : 'none'} />
      <path d="M5 19c1.6-3.3 4-5 7-5s5.4 1.7 7 5" />
    </svg>
  );
}

function SettingsIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill={active ? 'currentColor' : 'none'} />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ShieldIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.8-2.8 8.7-7 10-4.2-1.3-7-5.2-7-10V6l7-3z" />
    </svg>
  );
}

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuth();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    if (!user?.uid) return;
    getDoc(doc(db, 'users', user.uid)).then(snap => {
      if (snap.exists()) setAvatarUrl(snap.data().photoURL || snap.data().avatarUrl || null);
    }).catch(() => {});
  }, [user?.uid]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isActive = (path) => {
    if (path === '/profile') return location.pathname.startsWith('/profile');
    return location.pathname === path;
  };

  const isAdmin = user?.email === 'prakarshthakur1@gmail.com';

  const navLinks = [
    { label: 'feed', path: '/feed' },
    { label: 'my fun', path: '/my-fun' },
    { label: 'host +', path: '/host' },
    { label: 'my events', path: '/my-events' },
    ...(isAdmin ? [{ label: 'admin', path: '/admin' }] : []),
  ];

  const pillStyle = (active) => ({
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.78rem',
    padding: '0.4rem 0.9rem',
    borderRadius: '50px',
    border: '1px solid #FF2D2D',
    background: active ? '#FF2D2D' : 'transparent',
    color: active ? '#000000' : '#FF2D2D',
    cursor: 'pointer',
    textTransform: 'lowercase',
    transition: 'background 0.15s, color 0.15s',
    whiteSpace: 'nowrap',
  });

  const mobileNavItems = [
    { label: 'feed', path: '/feed', icon: HomeIcon },
    { label: 'my fun', path: '/my-fun', icon: SparkIcon },
    { label: 'host', path: '/host', icon: PlusSquareIcon },
    { label: 'events', path: '/my-events', icon: CalendarIcon },
    ...(isAdmin ? [{ label: 'admin', path: '/admin', icon: ShieldIcon }] : []),
    { label: 'profile', path: '/profile', icon: UserIcon },
    { label: 'settings', action: () => setSettingsOpen(v => !v), icon: SettingsIcon, active: settingsOpen },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isMobile ? 'rgba(5,5,5,0.94)' : 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isMobile ? '1px solid rgba(255,45,45,0.08)' : '1px solid #111',
        padding: isMobile ? '0.3rem 1rem 0.24rem' : '0.75rem 1.5rem',
        minHeight: isMobile ? '42px' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="nav-brand-desktop">
          <img
            src="/assets/nxus_logo_icon.svg"
            alt="NXUS"
            style={{ height: '28px', cursor: 'pointer', objectFit: 'contain' }}
            onClick={() => navigate('/feed')}
          />
          <MemberCount />
        </div>

        <button
          className="nav-brand-mobile"
          onClick={() => navigate('/feed')}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: isMobile ? '0.08rem 0.25rem' : 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '999px',
          }}
          aria-label="go to feed"
        >
          <img
            src="/assets/nxus_logo_mobile_cropped.png"
            alt="NXUS"
            style={{ height: isMobile ? '30px' : '32px', width: 'auto', objectFit: 'contain' }}
          />
        </button>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          position: 'relative',
        }} className="nav-desktop">
          {navLinks.map(link => (
            <button
              key={link.path}
              style={pillStyle(isActive(link.path))}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          ))}
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #FF2D2D',
              overflow: 'hidden',
              cursor: 'pointer',
              background: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => navigate('/profile')}
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ color: '#FF2D2D', fontSize: '0.7rem', fontFamily: "grovant, sans-serif", fontWeight: 700 }}>
                {user?.displayName?.[0]?.toUpperCase() || '?'}
              </span>
            )}
          </div>

          {/* Gear icon */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setSettingsOpen(v => !v)}
              title="settings"
              style={{
                background: settingsOpen ? 'rgba(255,255,255,0.06)' : 'transparent',
                border: '1px solid #222',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: settingsOpen ? '#ccc' : '#555',
                transition: 'color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => { if (!settingsOpen) { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; } }}
              onMouseLeave={e => { if (!settingsOpen) { e.currentTarget.style.color = '#555'; e.currentTarget.style.background = 'transparent'; } }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
            {settingsOpen && (
              <SettingsPanel user={user} onClose={() => setSettingsOpen(false)} />
            )}
          </div>
        </div>
      </nav>

      <div
        className="mobile-bottom-nav"
        style={{
          position: 'fixed',
          left: isMobile ? '0.65rem' : '0.75rem',
          right: isMobile ? '0.65rem' : '0.75rem',
          bottom: isMobile ? 'max(0.35rem, env(safe-area-inset-bottom))' : 'max(0.75rem, env(safe-area-inset-bottom))',
          zIndex: 1100,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.2rem',
          padding: isMobile ? '0.32rem 0.38rem' : '0.45rem 0.5rem',
          background: 'rgba(8,8,8,0.96)',
          border: '1px solid rgba(255,45,45,0.18)',
          borderRadius: isMobile ? '18px' : '22px',
          boxShadow: '0 18px 48px rgba(0,0,0,0.45)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {mobileNavItems.map(item => {
          const Icon = item.icon;
          const active = item.active ?? isActive(item.path);

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                if (item.action) {
                  item.action();
                  return;
                }
                navigate(item.path);
              }}
              aria-label={item.label}
              title={item.label}
              style={{
                width: isMobile ? '38px' : '44px',
                height: isMobile ? '38px' : '44px',
                borderRadius: isMobile ? '12px' : '14px',
                border: 'none',
                background: active ? 'rgba(255,45,45,0.14)' : 'transparent',
                color: '#FF2D2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.15s ease, transform 0.15s ease',
              }}
            >
              <Icon active={active} />
            </button>
          );
        })}
      </div>

      {/* Mobile settings panel — rendered as a full-screen overlay on mobile */}
      {settingsOpen && isMobile && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1200,
          background: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1rem',
        }}
          onClick={() => setSettingsOpen(false)}
        >
          <div
            style={{ width: '100%', position: 'relative' }}
            onClick={e => e.stopPropagation()}
          >
            <SettingsPanel
              user={user}
              onClose={() => setSettingsOpen(false)}
              mobile
            />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-brand-desktop { visibility: hidden; pointer-events: none; }
          .nav-brand-mobile { display: flex !important; position: absolute; left: 50%; transform: translateX(-50%); }
          .mobile-bottom-nav { display: flex !important; }
          .mobile-bottom-nav-spacer { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-desktop { display: flex !important; }
          .nav-brand-mobile { display: none !important; }
          .mobile-bottom-nav { display: none !important; }
          .mobile-bottom-nav-spacer { display: none !important; }
        }
      `}</style>

      {/* Spacer for fixed nav */}
      <div className="nav-spacer" style={{ height: isMobile ? '42px' : '60px' }} />
      <div className="mobile-bottom-nav-spacer" style={{ display: 'none', height: isMobile ? '64px' : '92px' }} />
    </>
  );
}
