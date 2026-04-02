import React from 'react';

const pulseStyle = `
  @keyframes pendingPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

export default function StatusBadge({ status }) {
  const configs = {
    pending: {
      background: '#1a1a1a',
      border: '1px solid #333',
      color: '#fbbf24',
      text: 'pending',
      showDot: true,
    },
    info_requested: {
      background: 'rgba(245,158,11,0.1)',
      border: '1px solid rgba(245,158,11,0.4)',
      color: '#f59e0b',
      text: 'host has a question',
      showDot: true,
    },
    replied: {
      background: 'rgba(245,158,11,0.06)',
      border: '1px solid rgba(245,158,11,0.2)',
      color: '#92733a',
      text: 'reply sent',
      showDot: false,
    },
    accepted: {
      background: 'rgba(74,222,128,0.1)',
      border: '1px solid rgba(74,222,128,0.3)',
      color: '#4ade80',
      text: "you're in ✓",
      showDot: false,
    },
    declined: {
      background: 'rgba(239,68,68,0.08)',
      border: '1px solid rgba(239,68,68,0.2)',
      color: '#ef4444',
      text: 'not this time',
      showDot: false,
    },
  };

  const cfg = configs[status] || configs.pending;

  return (
    <>
      <style>{pulseStyle}</style>
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        background: cfg.background,
        border: cfg.border,
        color: cfg.color,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.65rem',
        padding: '0.25rem 0.65rem',
        borderRadius: '50px',
        textTransform: 'lowercase',
        whiteSpace: 'nowrap',
      }}>
        {cfg.showDot && (
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: status === 'info_requested' ? '#f59e0b' : '#fbbf24',
            display: 'inline-block',
            animation: 'pendingPulse 1.5s infinite',
          }} />
        )}
        {cfg.text}
      </span>
    </>
  );
}
