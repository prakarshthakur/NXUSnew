import React, { useState } from 'react';

export default function ShareButton({ eventId, eventTitle, style = {} }) {
  const [toast, setToast] = useState(false);

  const handleShare = async (e) => {
    e.stopPropagation();
    const url = `${window.location.origin}/event/${eventId}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: eventTitle, url });
      } catch {}
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch {}
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', ...style }}>
      <button
        onClick={handleShare}
        title="share event"
        style={{
          background: 'transparent',
          border: '1px solid #333',
          borderRadius: '50px',
          padding: '0.4rem 0.85rem',
          color: '#666',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.72rem',
          cursor: 'pointer',
          textTransform: 'lowercase',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#666'; }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        share
      </button>
      {toast && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '6px',
          padding: '0.3rem 0.65rem',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.65rem',
          color: '#4ade80',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          animation: 'toastIn 0.15s ease',
        }}>
          link copied ✓
        </div>
      )}
      <style>{`@keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(4px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`}</style>
    </div>
  );
}
