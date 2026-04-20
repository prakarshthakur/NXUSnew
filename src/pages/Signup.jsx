import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '1.25rem',
      background:
        'radial-gradient(circle at 50% 0%, rgba(232, 0, 28, 0.24), transparent 42vw), #0A0A0A',
      color: '#F0EDE8',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <section style={{
        width: 'min(100%, 520px)',
        border: '1px solid rgba(232, 0, 28, 0.42)',
        background: '#111111',
        padding: 'clamp(1.5rem, 5vw, 2.4rem)',
        display: 'grid',
        gap: '1rem',
      }}>
        <div style={{
          color: '#E8001C',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.72rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}>
          Early Access Unlocked
        </div>

        <h1 style={{
          margin: 0,
          color: '#FFFFFF',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(3.6rem, 12vw, 5.4rem)',
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '0.035em',
          textTransform: 'uppercase',
        }}>
          Sign Up
        </h1>

        <p style={{
          margin: 0,
          color: 'rgba(240, 237, 232, 0.64)',
          fontSize: '1rem',
          lineHeight: 1.7,
        }}>
          Your early access session is active. The signup flow can be connected here.
        </p>

        <Link
          to="/"
          style={{
            color: '#E8001C',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Back to coming soon
        </Link>
      </section>
    </main>
  );
}
