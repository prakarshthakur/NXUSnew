import React from 'react';
import { useNavigate } from 'react-router-dom';

const mono = "'IBM Plex Mono', monospace";

const TEAM = [
  { name: 'Prakarsh Thakur', role: 'Founder & CEO' },
  { name: 'Karina Nayak',    role: 'Co-Founder & CMO' },
  { name: 'Hassan Abshar',   role: 'Co-Founder & CGO' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      textAlign: 'center',
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '1.25rem',
          background: 'transparent',
          border: '1px solid #222',
          borderRadius: '50px',
          padding: '0.3rem 0.85rem',
          color: '#555',
          fontFamily: mono,
          fontSize: '0.72rem',
          cursor: 'pointer',
          textTransform: 'lowercase',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#aaa'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#555'; }}
      >
        ← back
      </button>

      {/* Logo */}
      <div style={{ animation: 'fadeUp 0.4s ease both', animationDelay: '0s', marginBottom: '2.5rem' }}>
        <img
          src="/assets/nxus_logo_icon.svg"
          alt="NXUS"
          style={{ height: '72px', objectFit: 'contain' }}
        />
      </div>

      {/* Quote */}
      <div style={{ animation: 'fadeUp 0.4s ease both', animationDelay: '0.1s', marginBottom: '2.75rem' }}>
        <p style={{
          fontFamily: 'grovant, sans-serif',
          fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          lineHeight: 1.15,
          margin: 0,
        }}>
          making the first move is exhausting.
        </p>
        <p style={{
          fontFamily: 'grovant, sans-serif',
          fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
          fontWeight: 800,
          color: '#ffffff',
          textTransform: 'lowercase',
          lineHeight: 1.15,
          margin: '0.3rem 0 0',
        }}>
          we solve that.
        </p>
      </div>

      {/* Divider */}
      <div style={{
        animation: 'fadeUp 0.4s ease both', animationDelay: '0.2s',
        width: '40px', height: '1px', background: '#1a1a1a', marginBottom: '2.75rem',
      }} />

      {/* Team */}
      <div style={{
        animation: 'fadeUp 0.4s ease both', animationDelay: '0.25s',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginBottom: '3.5rem',
      }}>
        {TEAM.map((member, i) => (
          <div key={i} style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
            <div style={{
              fontFamily: 'grovant, sans-serif',
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              fontWeight: 800,
              color: '#ffffff',
              textTransform: 'lowercase',
              letterSpacing: '0.01em',
            }}>
              {member.name}
            </div>
            <div style={{
              fontFamily: mono,
              fontSize: '0.72rem',
              color: '#444',
              textTransform: 'lowercase',
              marginTop: '0.2rem',
              letterSpacing: '0.04em',
            }}>
              {member.role}
            </div>
          </div>
        ))}
      </div>

      {/* Footer line */}
      <div style={{
        animation: 'fadeUp 0.4s ease both', animationDelay: '0.45s',
        fontFamily: mono,
        fontSize: '0.75rem',
        color: '#333',
        textTransform: 'lowercase',
        letterSpacing: '0.08em',
      }}>
        nxus, from us, to you
      </div>
    </div>
  );
}
