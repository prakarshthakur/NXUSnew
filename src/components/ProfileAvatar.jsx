import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function ProfileAvatar({ userId, size = 40, editable = false, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!userId) return;
    getDoc(doc(db, 'users', userId)).then(snap => {
      if (snap.exists()) {
        const data = snap.data();
        setAvatarUrl(data.avatarUrl || null);
        setDisplayName(data.displayName || '');
      }
    }).catch(() => {});
  }, [userId]);

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  const avatar = avatarUrl ? (
    <img
      src={avatarUrl}
      alt={displayName || 'avatar'}
      style={{
        width: size, height: size, borderRadius: '50%',
        objectFit: 'cover', border: '1px solid #FF2D2D', display: 'block',
      }}
    />
  ) : (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: '#1a1a1a', border: '1px solid #FF2D2D',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#FF2D2D', fontSize: size * 0.35,
      fontFamily: 'grovant, sans-serif', fontWeight: 700,
    }}>
      {getInitials(displayName)}
    </div>
  );

  if (!editable) return <div style={{ display: 'inline-block' }}>{avatar}</div>;

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(v => !v)}
    >
      {avatar}

      {/* "i" badge */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '16px', height: '16px', borderRadius: '50%',
        background: '#1a1a1a', border: '1px solid #333',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.55rem',
        color: '#666', fontWeight: 700, pointerEvents: 'none',
      }}>
        i
      </div>

      {showTooltip && (
        <div style={{
          position: 'absolute',
          top: '110%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '8px',
          padding: '0.5rem 0.75rem',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.7rem',
          color: '#aaa',
          whiteSpace: 'nowrap',
          textTransform: 'lowercase',
          zIndex: 20,
          pointerEvents: 'none',
        }}>
          hold your horses, profile pictures coming soon
          <div style={{
            position: 'absolute', bottom: '100%', left: '50%',
            transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '5px solid #2a2a2a',
          }} />
        </div>
      )}
    </div>
  );
}
