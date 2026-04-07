import React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const STATS_REF = () => doc(db, 'public', 'stats');

export default function MemberCount({ style = {} }) {
  const [stats, setStats] = React.useState(null);
  const [showFounding, setShowFounding] = React.useState(false);

  React.useEffect(() => {
    getDoc(STATS_REF()).then(snap => {
      if (snap.exists()) setStats(snap.data());
    }).catch(() => {});
  }, []);

  if (!stats) return null;

  const total = stats.totalUsers ?? 0;
  const founding = stats.foundingUsers ?? 0;

  return (
    <button
      onMouseEnter={() => setShowFounding(true)}
      onMouseLeave={() => setShowFounding(false)}
      onClick={() => setShowFounding(v => !v)}
      style={{
        background: 'transparent',
        border: '1px solid #1a1a1a',
        borderRadius: '50px',
        padding: '0.28rem 0.75rem',
        cursor: 'pointer',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.68rem',
        color: showFounding ? '#f59e0b' : '#444',
        textTransform: 'lowercase',
        transition: 'color 0.2s, border-color 0.2s',
        borderColor: showFounding ? 'rgba(245,158,11,0.3)' : '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        ...style,
      }}
    >
      <span style={{
        width: '5px', height: '5px', borderRadius: '50%',
        background: showFounding ? '#f59e0b' : '#333',
        transition: 'background 0.2s',
        flexShrink: 0,
      }} />
      {showFounding
        ? `${founding} founding`
        : `${total} member${total !== 1 ? 's' : ''}`
      }
    </button>
  );
}
