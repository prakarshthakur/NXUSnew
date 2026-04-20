import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SOCIAL_LINKS } from '../components/SocialLinks';
import { useAuth } from '../contexts/AuthContext';

const waitlistEndpoint = 'https://api.freewaitlists.com/waitlists/cmnrq1m75087001pnr40o6xtf';

const socialCopy = {
  discord: {
    eyebrow: 'Community',
    title: 'Join Discord',
    body: 'Meet the first people planning the first drops.',
  },
  instagram: {
    eyebrow: 'Updates',
    title: 'Follow Instagram',
    body: 'Watch the build, the launch, and the Dubai rollout.',
  },
};

const statPills = [
  { icon: '\u{1F3D9}\uFE0F', label: 'Dubai First' },
  { icon: '\u26A1', label: 'Real-Time Drops' },
  { icon: '\u{1F3AF}', label: 'No Scroll, Just Show Up' },
];

export default function ComingSoon() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [tapCount, setTapCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ tone: 'idle', message: '' });
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const hiddenTapTarget = 15;

  useEffect(() => {
    if (tapCount === 0 || tapCount >= hiddenTapTarget) return undefined;

    const timer = window.setTimeout(() => {
      setTapCount(0);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [hiddenTapTarget, tapCount]);

  const handleLogoTap = () => {
    setTapCount(current => {
      const next = current + 1;
      if (next >= hiddenTapTarget) {
        navigate('/login');
        return 0;
      }
      return next;
    });
  };

  const handleWaitlistSubmit = async event => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    if (!trimmedEmail) {
      setSubmitState({
        tone: 'error',
        message: 'Drop your email so we know where to send the invite.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ tone: 'idle', message: '' });

    const payload = {
      email: trimmedEmail,
      meta: {
        source: 'nxus-coming-soon',
        ...(trimmedName ? { name: trimmedName } : {}),
      },
    };

    try {
      const response = await fetch(waitlistEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || 'Unable to save your spot right now.');
      }

      setSubmitState({
        tone: 'success',
        message: "You're on the list. We'll reach out when NXUS opens up.",
      });
      setName('');
      setEmail('');
    } catch (error) {
      setSubmitState({
        tone: 'error',
        message: error.message || 'Something went wrong. Please try again in a minute.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openAccessModal = () => {
    if (user) {
      navigate('/home');
      return;
    }
    setAccessCode('');
    setAccessError('');
    setIsAccessModalOpen(true);
  };

  const closeAccessModal = () => {
    setIsAccessModalOpen(false);
    setAccessCode('');
    setAccessError('');
  };

  const handleAccessSubmit = event => {
    event.preventDefault();

    const configuredAccessCode = import.meta.env.VITE_ACCESS_CODE;

    if (accessCode.trim() === configuredAccessCode) {
      window.sessionStorage.setItem('earlyAccess', 'true');
      navigate('/signup');
      return;
    }

    setAccessError('Invalid access code');
  };

  return (
    <main className="nxus-shell">
      <style>{`
        :root {
          --nxus-red: #E8001C;
          --nxus-black: #0A0A0A;
          --nxus-panel: #111111;
          --nxus-cream: #F0EDE8;
          --nxus-muted: rgba(240, 237, 232, 0.68);
          --nxus-dim: rgba(240, 237, 232, 0.42);
          --nxus-hairline: rgba(232, 0, 28, 0.38);
          --display-font: 'Bebas Neue', 'Barlow Condensed', sans-serif;
          --body-font: 'DM Sans', 'Outfit', sans-serif;
          --mono-font: 'Space Mono', 'IBM Plex Mono', monospace;
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes nxusLogoBreathe {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(232, 0, 28, 0)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 28px rgba(232, 0, 28, 0.42)); }
        }

        @keyframes nxusGlowDrift {
          0%, 100% { transform: translate3d(-3%, 2%, 0) scale(1); opacity: 0.64; }
          50% { transform: translate3d(4%, -3%, 0) scale(1.1); opacity: 0.9; }
        }

        @keyframes nxusDividerPulse {
          0%, 100% { opacity: 0.36; box-shadow: 0 0 0 rgba(232, 0, 28, 0); }
          50% { opacity: 0.86; box-shadow: 0 0 22px rgba(232, 0, 28, 0.72); }
        }

        .nxus-shell {
          min-height: 100vh;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
          position: relative;
          overflow: hidden;
        }

        .nxus-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 42% 48%, rgba(232, 0, 28, 0.24), transparent 32vw),
            radial-gradient(circle at 16% 78%, rgba(232, 0, 28, 0.12), transparent 24vw),
            #0A0A0A;
          animation: nxusGlowDrift 13s ease-in-out infinite;
        }

        .nxus-shell::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.13;
          mix-blend-mode: screen;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(232, 0, 28, 0.6) 0 1px, transparent 1px),
            radial-gradient(circle at 72% 12%, rgba(240, 237, 232, 0.22) 0 1px, transparent 1px),
            radial-gradient(circle at 46% 84%, rgba(232, 0, 28, 0.42) 0 1px, transparent 1px);
          background-size: 17px 19px, 29px 31px, 41px 37px;
        }

        .nxus-layout {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 55% 45%;
        }

        .nxus-left,
        .nxus-right {
          min-height: 100vh;
          position: relative;
        }

        .nxus-left {
          display: grid;
          place-items: center;
          padding: clamp(2rem, 5vw, 5rem);
          overflow: hidden;
        }

        .nxus-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, rgba(232, 0, 28, 0.12), transparent 28%),
            repeating-linear-gradient(90deg, rgba(240, 237, 232, 0.025) 0 1px, transparent 1px 86px);
          opacity: 0.8;
        }

        .nxus-hero {
          width: min(100%, 720px);
          display: grid;
          justify-items: center;
          gap: 1.45rem;
          text-align: center;
          position: relative;
          animation: nxusFadeUp 650ms ease both;
        }

        .nxus-logo-button {
          width: 160px;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: default;
          animation: nxusLogoBreathe 4s ease-in-out infinite;
        }

        .nxus-logo-button img {
          display: block;
          width: 100%;
          height: auto;
          user-select: none;
          pointer-events: none;
        }

        .nxus-kicker,
        .nxus-eyebrow,
        .nxus-field-label,
        .nxus-proof,
        .nxus-footer-mark {
          font-family: var(--mono-font);
          text-transform: uppercase;
        }

        .nxus-kicker {
          color: var(--nxus-red);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          margin-right: -0.4em;
        }

        .nxus-title {
          margin: 0;
          font-family: var(--display-font);
          font-size: clamp(4.5rem, 7.2vw, 5rem);
          line-height: 0.84;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          color: #FFFFFF;
          text-wrap: balance;
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.64);
        }

        .nxus-title span {
          display: inline;
        }

        .nxus-title span + span::before {
          content: ' ';
        }

        .nxus-subhead {
          margin: 0;
          color: var(--nxus-muted);
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1rem, 1.35vw, 1.16rem);
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .nxus-stat-row {
          display: flex;
          justify-content: center;
          gap: 0.72rem;
          flex-wrap: wrap;
          margin-top: 0.6rem;
        }

        .nxus-stat {
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          border: 1px solid rgba(240, 237, 232, 0.12);
          background: rgba(5, 5, 5, 0.54);
          color: rgba(240, 237, 232, 0.84);
          padding: 0.74rem 0.86rem;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          box-shadow: inset 0 -1px 0 rgba(232, 0, 28, 0.28);
        }

        .nxus-footer-mark {
          position: absolute;
          left: clamp(1.25rem, 3vw, 3rem);
          bottom: clamp(1.25rem, 3vw, 2.4rem);
          color: rgba(240, 237, 232, 0.36);
          font-size: 0.64rem;
          letter-spacing: 0.32em;
        }

        .nxus-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 55%;
          width: 1px;
          background: var(--nxus-red);
          transform: translateX(-0.5px);
          z-index: 3;
          animation: nxusDividerPulse 5s ease-in-out infinite;
        }

        .nxus-right {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 28%),
            var(--nxus-panel);
          border-left: 1px solid rgba(232, 0, 28, 0.08);
          display: grid;
          align-items: center;
          padding: clamp(1.4rem, 4vw, 4.2rem);
        }

        .nxus-action {
          width: min(100%, 520px);
          justify-self: center;
          display: grid;
          gap: 1.45rem;
          animation: nxusFadeUp 650ms 200ms ease both;
        }

        .nxus-action-header {
          display: grid;
          gap: 0.36rem;
        }

        .nxus-eyebrow {
          color: var(--nxus-red);
          font-size: 0.74rem;
          letter-spacing: 0.26em;
        }

        .nxus-action-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(3rem, 5vw, 4.9rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-form {
          display: grid;
          gap: 1rem;
        }

        .nxus-field {
          display: grid;
          gap: 0.48rem;
        }

        .nxus-field-label {
          color: rgba(240, 237, 232, 0.58);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
        }

        .nxus-input-wrap {
          position: relative;
          background: #0A0A0A;
        }

        .nxus-input-wrap::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: var(--nxus-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
        }

        .nxus-input-wrap:focus-within::after {
          transform: scaleX(1);
        }

        .nxus-input {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: transparent;
          color: #FFFFFF;
          font: 500 1rem/1.2 var(--body-font);
          outline: none;
          padding: 1.08rem 1rem;
          transition: border-color 180ms ease, background 180ms ease;
        }

        .nxus-input:focus {
          border-color: rgba(232, 0, 28, 0.42);
          background: rgba(232, 0, 28, 0.035);
        }

        .nxus-input::placeholder {
          color: rgba(240, 237, 232, 0.28);
        }

        .nxus-cta {
          width: 100%;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          min-height: 3.5rem;
          padding: 1rem 1.2rem;
          font-family: var(--mono-font);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }

        .nxus-cta:hover:not(:disabled),
        .nxus-cta:focus-visible:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 34px rgba(232, 0, 28, 0.42);
        }

        .nxus-cta:disabled {
          opacity: 0.66;
          cursor: wait;
        }

        .nxus-access-trigger {
          width: 100%;
          min-height: 3.15rem;
          border: 1px solid rgba(232, 0, 28, 0.48);
          border-radius: 0;
          background: #0A0A0A;
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.68rem;
          font-family: var(--mono-font);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: background 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .nxus-access-trigger:hover,
        .nxus-access-trigger:focus-visible {
          background: rgba(232, 0, 28, 0.1);
          box-shadow: 0 0 26px rgba(232, 0, 28, 0.22);
          transform: translateY(-1px);
          outline: none;
        }

        .nxus-access-lock {
          color: var(--nxus-red);
          font-size: 1rem;
          line-height: 1;
        }

        .nxus-form-note {
          min-height: 1.2rem;
          margin: 0;
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          line-height: 1.7;
        }

        .nxus-form-note[data-tone='success'] {
          color: #ff8d84;
        }

        .nxus-form-note[data-tone='error'] {
          color: #ffb3ad;
        }

        .nxus-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, var(--nxus-red), rgba(240, 237, 232, 0.08));
          opacity: 0.64;
        }

        .nxus-socials {
          display: grid;
          gap: 0.86rem;
        }

        .nxus-social-card {
          border: 1px solid rgba(240, 237, 232, 0.08);
          border-left: 3px solid var(--nxus-red);
          background: #0B0B0B;
          color: var(--nxus-cream);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 0.9rem;
          padding: 1rem;
          min-height: 5.9rem;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .nxus-social-card:hover,
        .nxus-social-card:focus-visible {
          background: #151010;
          border-color: rgba(232, 0, 28, 0.58);
          transform: translateX(4px);
          outline: none;
        }

        .nxus-social-icon {
          width: 2.35rem;
          height: 2.35rem;
          display: grid;
          place-items: center;
          color: var(--nxus-red);
          background: rgba(232, 0, 28, 0.08);
        }

        .nxus-social-text {
          display: grid;
          gap: 0.22rem;
        }

        .nxus-social-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .nxus-social-title {
          font-family: var(--display-font);
          font-size: 1.55rem;
          letter-spacing: 0.04em;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .nxus-social-body {
          color: rgba(240, 237, 232, 0.52);
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .nxus-social-arrow {
          color: rgba(240, 237, 232, 0.76);
          font-family: var(--mono-font);
          font-size: 1.25rem;
        }

        .nxus-proof {
          color: rgba(240, 237, 232, 0.46);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
        }

        .nxus-mobile-footer {
          display: none;
        }

        .nxus-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          background: rgba(0, 0, 0, 0.74);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .nxus-modal {
          width: min(100%, 430px);
          border: 1px solid rgba(232, 0, 28, 0.48);
          background: #111111;
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.72);
          padding: clamp(1.2rem, 4vw, 1.7rem);
          display: grid;
          gap: 1rem;
          animation: nxusFadeUp 220ms ease both;
        }

        .nxus-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .nxus-modal-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 2.7rem;
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-modal-close {
          width: 2rem;
          height: 2rem;
          border: 1px solid rgba(240, 237, 232, 0.12);
          border-radius: 0;
          background: #0A0A0A;
          color: rgba(240, 237, 232, 0.78);
          font-family: var(--mono-font);
        }

        .nxus-access-error {
          min-height: 1.1rem;
          margin: -0.3rem 0 0;
          color: #ffb3ad;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }

        @media (max-width: 920px) {
          .nxus-title {
            font-size: clamp(4rem, 9vw, 4.7rem);
          }

          .nxus-right {
            padding: clamp(1.25rem, 3vw, 2rem);
          }
        }

        @media (max-width: 767px) {
          .nxus-shell {
            min-height: 100svh;
            overflow-x: hidden;
            overflow-y: auto;
          }

          .nxus-shell::before {
            background:
              radial-gradient(circle at 50% 0%, rgba(232, 0, 28, 0.28), transparent 58vw),
              #0A0A0A;
          }

          .nxus-layout {
            min-height: 100svh;
            display: block;
            padding: 1.15rem;
          }

          .nxus-left,
          .nxus-right {
            min-height: auto;
          }

          .nxus-left {
            display: block;
            padding: 1.2rem 0 0.85rem;
          }

          .nxus-left::before,
          .nxus-divider,
          .nxus-footer-mark {
            display: none;
          }

          .nxus-hero {
            width: 100%;
            gap: 1rem;
            text-align: left;
            justify-items: start;
          }

          .nxus-logo-button {
            width: 80px;
          }

          .nxus-kicker {
            display: inline-flex;
            border: 1px solid rgba(232, 0, 28, 0.42);
            background: rgba(232, 0, 28, 0.08);
            padding: 0.45rem 0.6rem;
            border-radius: 999px;
            font-size: 0.66rem;
            letter-spacing: 0.26em;
            margin-right: 0;
          }

          .nxus-title {
            font-size: clamp(3.25rem, 15vw, 4.2rem);
            letter-spacing: 0.025em;
          }

          .nxus-title span {
            display: block;
          }

          .nxus-title span + span::before {
            content: '';
          }

          .nxus-subhead {
            font-size: 1rem;
          }

          .nxus-stat-row {
            justify-content: flex-start;
            gap: 0.48rem;
            margin-top: 0.1rem;
          }

          .nxus-stat {
            padding: 0.58rem 0.62rem;
            font-size: 0.62rem;
          }

          .nxus-right {
            margin-top: 0.8rem;
            background: transparent;
            border-left: 0;
            padding: 0;
            display: block;
          }

          .nxus-action {
            width: 100%;
            gap: 1.15rem;
          }

          .nxus-action-title {
            font-size: clamp(2.7rem, 13vw, 3.6rem);
          }

          .nxus-input {
            padding: 1rem 0.9rem;
          }

          .nxus-socials {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.7rem;
          }

          .nxus-social-card {
            min-height: 8.2rem;
            grid-template-columns: 1fr auto;
            align-items: start;
            gap: 0.65rem;
            padding: 0.85rem;
          }

          .nxus-social-icon {
            width: 2rem;
            height: 2rem;
          }

          .nxus-social-text {
            grid-column: 1 / -1;
            order: 2;
          }

          .nxus-social-title {
            font-size: 1.35rem;
          }

          .nxus-social-body {
            display: none;
          }

          .nxus-proof {
            text-align: center;
          }

          .nxus-mobile-footer {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin-top: 1.4rem;
            color: rgba(240, 237, 232, 0.44);
            font-family: var(--mono-font);
            font-size: 0.66rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
        }
      `}</style>

      <div className="nxus-divider" aria-hidden="true" />

      <div className="nxus-layout">
        <section className="nxus-left" aria-labelledby="nxus-coming-soon-title">
          <div className="nxus-hero">
            <button
              type="button"
              onClick={handleLogoTap}
              aria-label="NXUS logo"
              className="nxus-logo-button"
            >
              <img src="/assets/nxus_logo_icon.svg" alt="NXUS bowtie logo" />
            </button>

            <div className="nxus-kicker">Coming Soon</div>

            <h1 className="nxus-title" id="nxus-coming-soon-title">
              <span>Kill your</span>
              <span>Boredom</span>
            </h1>

            <p className="nxus-subhead">Find your people. Show up. Repeat.</p>

            <div className="nxus-stat-row" aria-label="Launch details">
              {statPills.map(stat => (
                <div className="nxus-stat" key={stat.label}>
                  <span aria-hidden="true">{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="nxus-footer-mark">NXUS, from us, to you</div>
        </section>

        <section className="nxus-right" aria-label="Early access waitlist">
          <div className="nxus-action">
            <header className="nxus-action-header">
              <div className="nxus-eyebrow">Early Access</div>
              <h2 className="nxus-action-title">Claim Your Spot</h2>
            </header>

            <form className="nxus-form" onSubmit={handleWaitlistSubmit}>
              <label className="nxus-field">
                <span className="nxus-field-label">Name</span>
                <span className="nxus-input-wrap">
                  <input
                    className="nxus-input"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </span>
              </label>

              <label className="nxus-field">
                <span className="nxus-field-label">Email</span>
                <span className="nxus-input-wrap">
                  <input
                    className="nxus-input"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </span>
              </label>

              <button className="nxus-cta" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving Your Spot...' : 'Join The Waitlist \u2192'}
              </button>

              <p className="nxus-form-note" data-tone={submitState.tone}>
                {submitState.message || '140+ people already in. Dubai opens first.'}
              </p>
            </form>

            <button className="nxus-access-trigger" type="button" onClick={openAccessModal}>
              <span className="nxus-access-lock" aria-hidden="true">{'\u{1F512}'}</span>
              Early Access
            </button>

            <div className="nxus-rule" aria-hidden="true" />

            <div className="nxus-socials" aria-label="NXUS social links">
              {SOCIAL_LINKS.map(link => {
                const copy = socialCopy[link.key];

                return (
                  <a
                    className="nxus-social-card"
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="nxus-social-icon" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="nxus-social-text">
                      <span className="nxus-social-eyebrow">{copy.eyebrow}</span>
                      <span className="nxus-social-title">{copy.title}</span>
                      <span className="nxus-social-body">{copy.body}</span>
                    </span>
                    <span className="nxus-social-arrow" aria-hidden="true">
                      {'\u2192'}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="nxus-proof">140+ people already in. Dubai opens first.</div>

            <footer className="nxus-mobile-footer">
              <span>More friends. More fun.</span>
              <span>nxus.fun</span>
            </footer>
          </div>
        </section>
      </div>

      {isAccessModalOpen ? (
        <div
          className="nxus-modal-backdrop"
          role="presentation"
          onMouseDown={event => {
            if (event.target === event.currentTarget) {
              closeAccessModal();
            }
          }}
        >
          <section
            className="nxus-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nxus-access-title"
          >
            <div className="nxus-modal-header">
              <div>
                <div className="nxus-eyebrow">Locked Drop</div>
                <h2 className="nxus-modal-title" id="nxus-access-title">Enter Access Code</h2>
              </div>
              <button
                className="nxus-modal-close"
                type="button"
                onClick={closeAccessModal}
                aria-label="Close access code modal"
              >
                x
              </button>
            </div>

            <form className="nxus-form" onSubmit={handleAccessSubmit}>
              <label className="nxus-field">
                <span className="nxus-field-label">Access Code</span>
                <span className="nxus-input-wrap">
                  <input
                    className="nxus-input"
                    type="password"
                    value={accessCode}
                    onChange={event => {
                      setAccessCode(event.target.value);
                      setAccessError('');
                    }}
                    placeholder="Enter code"
                    autoComplete="off"
                    autoFocus
                  />
                </span>
              </label>

              <p className="nxus-access-error" aria-live="polite">
                {accessError}
              </p>

              <button className="nxus-cta" type="submit">
                Unlock Signup {'\u2192'}
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </main>
  );
}
