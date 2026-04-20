import React from 'react';

export default function TagPill({ label, onRemove }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      background: '#1a1a1a',
      border: '1px solid #333',
      color: '#FF2D2D',
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.65rem',
      padding: '0.2rem 0.6rem',
      borderRadius: '50px',
      textTransform: 'lowercase',
    }}>
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          style={{
            background: 'none',
            border: 'none',
            color: '#FF2D2D',
            cursor: 'pointer',
            padding: '0',
            lineHeight: 1,
            fontSize: '0.75rem',
            marginLeft: '0.1rem',
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
