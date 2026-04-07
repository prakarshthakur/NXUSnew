import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import ProfileAvatar from './ProfileAvatar';
import SettingsPanel from './SettingsPanel';
import MemberCount from './MemberCount';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (!user?.uid) return;
    getDoc(doc(db, 'users', user.uid)).then(snap => {
      if (snap.exists()) setAvatarUrl(snap.data().avatarUrl || null);
    }).catch(() => {});
  }, [user?.uid]);

  const isActive = (path) => location.pathname === path;

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

  const drawerLinkStyle = (active) => ({
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '1rem',
    padding: '0.8rem 1.2rem',
    borderRadius: '50px',
    border: '1px solid #FF2D2D',
    background: active ? '#FF2D2D' : 'transparent',
    color: active ? '#000000' : '#FF2D2D',
    cursor: 'pointer',
    textTransform: 'lowercase',
    textAlign: 'center',
    width: '100%',
    display: 'block',
  });

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #111',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <img
          src="/assets/nxus_logo_icon.svg"
          alt="NXUS"
          style={{ height: '28px', cursor: 'pointer', objectFit: 'contain' }}
          onClick={() => navigate('/feed')}
        />

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

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setDrawerOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="open menu"
        >
          <span style={{ width: '22px', height: '2px', background: '#FF2D2D', display: 'block' }} />
          <span style={{ width: '22px', height: '2px', background: '#FF2D2D', display: 'block' }} />
          <span style={{ width: '22px', height: '2px', background: '#FF2D2D', display: 'block' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            background: 'rgba(0,0,0,0.7)',
          }}
          onClick={() => setDrawerOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: '#0d0d0d',
              borderTop: '1px solid #1a1a1a',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setDrawerOpen(false)}
                style={{
                  background: 'none',
                  border: '1px solid #333',
                  color: '#666',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
            </div>
            {navLinks.map(link => (
              <button
                key={link.path}
                style={drawerLinkStyle(isActive(link.path))}
                onClick={() => { navigate(link.path); setDrawerOpen(false); }}
              >
                {link.label}
              </button>
            ))}
            <button
              style={drawerLinkStyle(isActive('/profile'))}
              onClick={() => { navigate('/profile'); setDrawerOpen(false); }}
            >
              profile
            </button>
            <button
              style={{
                ...drawerLinkStyle(false),
                borderColor: '#333',
                color: '#666',
              }}
              onClick={() => { setDrawerOpen(false); setSettingsOpen(true); }}
            >
              ⚙ settings
            </button>
          </div>
        </div>
      )}

      {/* Mobile settings panel — rendered as a full-screen overlay on mobile */}
      {settingsOpen && !drawerOpen && (
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
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>

      {/* Spacer for fixed nav */}
      <div style={{ height: '60px' }} />
    </>
  );
}
