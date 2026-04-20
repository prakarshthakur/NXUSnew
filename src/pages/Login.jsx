import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async event => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      const dest = window.sessionStorage.getItem('redirectAfterLogin') || '/home';
      window.sessionStorage.removeItem('redirectAfterLogin');
      navigate(dest);
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      const dest = window.sessionStorage.getItem('redirectAfterLogin') || '/home';
      window.sessionStorage.removeItem('redirectAfterLogin');
      navigate(dest);
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(friendlyError(err.code));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="nxus-auth-shell">
      <style>{`
        .nxus-auth-shell {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          position: relative;
          overflow: hidden;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
        }

        .nxus-auth-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 0, 28, 0.22), transparent 48vw),
            radial-gradient(circle at 80% 90%, rgba(232, 0, 28, 0.10), transparent 32vw),
            #0A0A0A;
        }

        .nxus-auth-card {
          position: relative;
          width: min(100%, 460px);
          border: 1px solid rgba(232, 0, 28, 0.36);
          background: var(--nxus-panel);
          padding: clamp(1.6rem, 5vw, 2.6rem);
          display: grid;
          gap: 1.3rem;
          animation: nxusFadeUp 500ms ease both;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-auth-logo {
          width: 64px;
          justify-self: center;
        }

        .nxus-auth-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-auth-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(3rem, 10vw, 4.4rem);
          font-weight: 800;
          line-height: 0.88;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-auth-form {
          display: grid;
          gap: 1rem;
        }

        .nxus-auth-field {
          display: grid;
          gap: 0.42rem;
        }

        .nxus-auth-label {
          color: rgba(240, 237, 232, 0.58);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .nxus-auth-input-wrap {
          position: relative;
          background: var(--nxus-black);
        }

        .nxus-auth-input-wrap::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          background: var(--nxus-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
        }

        .nxus-auth-input-wrap:focus-within::after {
          transform: scaleX(1);
        }

        .nxus-auth-input {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: transparent;
          color: #FFFFFF;
          font: 500 1rem/1.2 var(--body-font);
          outline: none;
          padding: 1rem;
          transition: border-color 180ms ease, background 180ms ease;
        }

        .nxus-auth-input:focus {
          border-color: rgba(232, 0, 28, 0.42);
          background: rgba(232, 0, 28, 0.035);
        }

        .nxus-auth-cta {
          width: 100%;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          min-height: 3.4rem;
          padding: 1rem 1.2rem;
          font-family: var(--mono-font);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }

        .nxus-auth-cta:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 34px rgba(232, 0, 28, 0.42);
        }

        .nxus-auth-cta:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .nxus-auth-divider {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(240, 237, 232, 0.32);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .nxus-auth-divider::before,
        .nxus-auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(232, 0, 28, 0.3), rgba(240, 237, 232, 0.06));
        }

        .nxus-auth-divider::after {
          background: linear-gradient(90deg, rgba(240, 237, 232, 0.06), rgba(232, 0, 28, 0.3));
        }

        .nxus-auth-google {
          width: 100%;
          min-height: 3.15rem;
          border: 1px solid rgba(240, 237, 232, 0.14);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          font-family: var(--mono-font);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .nxus-auth-google:hover {
          background: rgba(240, 237, 232, 0.04);
          border-color: rgba(240, 237, 232, 0.28);
          transform: translateY(-1px);
        }

        .nxus-auth-google svg {
          width: 18px;
          height: 18px;
        }

        .nxus-auth-error {
          min-height: 1.1rem;
          margin: 0;
          color: #ffb3ad;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }

        .nxus-auth-footer {
          text-align: center;
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        .nxus-auth-footer a {
          color: var(--nxus-red);
          text-decoration: none;
          font-weight: 700;
          transition: opacity 180ms ease;
        }

        .nxus-auth-footer a:hover {
          opacity: 0.78;
        }
      `}</style>

      <div className="nxus-auth-card">
        <img
          className="nxus-auth-logo"
          src="/assets/nxus_logo_icon.svg"
          alt="NXUS logo"
        />

        <div>
          <div className="nxus-auth-eyebrow">Welcome Back</div>
          <h1 className="nxus-auth-title">Log In</h1>
        </div>

        <form className="nxus-auth-form" onSubmit={handleEmailLogin}>
          <label className="nxus-auth-field">
            <span className="nxus-auth-label">Email</span>
            <span className="nxus-auth-input-wrap">
              <input
                className="nxus-auth-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </span>
          </label>

          <label className="nxus-auth-field">
            <span className="nxus-auth-label">Password</span>
            <span className="nxus-auth-input-wrap">
              <input
                className="nxus-auth-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Your password"
                autoComplete="current-password"
                required
              />
            </span>
          </label>

          {error && <p className="nxus-auth-error" aria-live="polite">{error}</p>}

          <button className="nxus-auth-cta" type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In \u2192'}
          </button>
        </form>

        <div className="nxus-auth-divider">or</div>

        <button
          className="nxus-auth-google"
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.97.47 3.83 1.28 5.49l3.56-2.77.01-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <div className="nxus-auth-footer">
          Don't have an account?{' '}
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

function friendlyError(code) {
  switch (code) {
    case 'auth/invalid-email':
      return 'That email doesn\u2019t look right.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Wrong email or password.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.';
    default:
      return 'Something went wrong. Please try again.';
  }
}
