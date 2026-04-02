import React from 'react';

export default function FlairBadge({ flair, size = 'sm' }) {
  if (!flair?.text) return null;
  const fontSize = size === 'xs' ? '0.58rem' : '0.62rem';
  const padding = size === 'xs' ? '0.1rem 0.45rem' : '0.18rem 0.55rem';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '50px',
      padding,
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize,
      fontWeight: 700,
      textTransform: 'lowercase',
      border: `1px solid ${flair.color}55`,
      color: flair.color,
      background: `${flair.color}18`,
      whiteSpace: 'nowrap',
      letterSpacing: '0.01em',
    }}>
      {flair.text}
    </span>
  );
}
