import React from 'react';

/**
 * Shows a green graduation-cap icon when university_verified is true.
 * Usage: <VerifiedBadge verified={userDoc.university_verified} />
 */
export default function VerifiedBadge({ verified, size = 14 }) {
  if (!verified) return null;
  return (
    <span
      title="university verified"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginLeft: '0.25rem',
        flexShrink: 0,
        verticalAlign: 'middle',
      }}
    >
      {/* Graduation cap SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="university verified"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    </span>
  );
}
