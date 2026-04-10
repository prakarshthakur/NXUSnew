import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SOCIAL_LINKS } from '../components/SocialLinks';

const mono = "'IBM Plex Mono', monospace";
const waitlistEndpoint = 'https://api.freewaitlists.com/waitlists/cmnrq1m75087001pnr40o6xtf';
const socialCopy = {
  whatsapp: 'join the circle',
  discord: 'hop into the server',
  instagram: 'follow the build',
};

export default function ComingSoon() {
  const navigate = useNavigate();
  const [tapCount, setTapCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ tone: 'idle', message: '' });
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

  return (
    <div style={{
      minHeight: '100vh',
      background:
        'radial-gradient(circle at top, rgba(255, 29, 12, 0.18), transparent 34%), #050505',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes comingSoonFade {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes comingSoonGlow {
          0%, 100% { transform: scale(1); opacity: 0.28; }
          50% { transform: scale(1.08); opacity: 0.48; }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        width: '340px',
        height: '340px',
        borderRadius: '50%',
        background: 'rgba(255, 45, 45, 0.12)',
        filter: 'blur(42px)',
        top: '-100px',
        right: '-120px',
        animation: 'comingSoonGlow 9s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'rgba(255, 45, 45, 0.08)',
        filter: 'blur(36px)',
        bottom: '-80px',
        left: '-100px',
        animation: 'comingSoonGlow 11s ease-in-out infinite',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '760px',
          display: 'grid',
          gap: '1.35rem',
          animation: 'comingSoonFade 0.45s ease both',
        }}>
          <div style={{
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(10, 10, 10, 0.88)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
            borderRadius: '28px',
            padding: 'clamp(1.4rem, 4vw, 2.4rem)',
            display: 'grid',
            gap: '1.35rem',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              padding: '0.45rem 0.8rem',
              borderRadius: '999px',
              border: '1px solid rgba(255, 45, 45, 0.25)',
              background: 'rgba(255, 45, 45, 0.08)',
              color: '#ff6a5f',
              fontFamily: mono,
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
            }}>
              Coming Soon
            </div>

            <button
              type="button"
              onClick={handleLogoTap}
              aria-label="NXUS logo"
              style={{
                border: 'none',
                background: 'transparent',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
              }}
            >
              <img
                src="/assets/nxus_logo_mobile_cropped.png"
                alt="NXUS"
                style={{
                  width: 'min(100%, 520px)',
                  height: 'auto',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </button>

            <div style={{ display: 'grid', gap: '0.7rem' }}>
              <h1 style={{
                margin: 0,
                fontFamily: 'grovant, sans-serif',
                fontSize: 'clamp(2.5rem, 9vw, 4.8rem)',
                lineHeight: 0.95,
                textTransform: 'lowercase',
                letterSpacing: '0.02em',
              }}>
                <span style={{ display: 'block' }}>tinder for fun</span>
                <span style={{ color: '#FF2D2D', display: 'block' }}>coming soon</span>
              </h1>
              <p style={{
                margin: '0 auto',
                maxWidth: '520px',
                color: '#a1a1a1',
                fontFamily: mono,
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}>
                nxus is getting ready. follow the drop, join the early community,
                and be first in when we open the doors.
              </p>
            </div>

            <form
              onSubmit={handleWaitlistSubmit}
              style={{
                display: 'grid',
                gap: '0.95rem',
                padding: '1rem',
                borderRadius: '22px',
                border: '1px solid rgba(255, 45, 45, 0.16)',
                background:
                  'linear-gradient(180deg, rgba(255,45,45,0.12), rgba(255,45,45,0.03))',
                textAlign: 'left',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}>
                <div style={{ display: 'grid', gap: '0.2rem' }}>
                  <span style={{
                    color: '#ff6a5f',
                    fontFamily: mono,
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                  }}>
                    Early Access
                  </span>
                  <span style={{
                    color: '#ffffff',
                    fontFamily: 'grovant, sans-serif',
                    fontSize: '1.35rem',
                    textTransform: 'lowercase',
                  }}>
                    claim your spot
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    border: '1px solid rgba(255, 45, 45, 0.4)',
                    background: isSubmitting ? 'rgba(255, 45, 45, 0.12)' : '#FF2D2D',
                    color: isSubmitting ? '#ffb3ad' : '#050505',
                    borderRadius: '999px',
                    padding: '0.8rem 1.15rem',
                    fontFamily: mono,
                    fontSize: '0.76rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    minWidth: '190px',
                    transition: 'transform 0.18s ease, opacity 0.18s ease',
                    opacity: isSubmitting ? 0.8 : 1,
                  }}
                >
                  {isSubmitting ? 'Saving your spot...' : 'Join the waitlist'}
                </button>
              </div>

              <div style={{
                display: 'grid',
                gap: '0.75rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}>
                <label style={{ display: 'grid', gap: '0.4rem' }}>
                  <span style={{
                    color: '#b0b0b0',
                    fontFamily: mono,
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                    Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="John Doe"
                    autoComplete="name"
                    style={{
                      width: '100%',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(8, 8, 8, 0.78)',
                      color: '#ffffff',
                      padding: '0.95rem 1rem',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </label>

                <label style={{ display: 'grid', gap: '0.4rem' }}>
                  <span style={{
                    color: '#b0b0b0',
                    fontFamily: mono,
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    style={{
                      width: '100%',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(8, 8, 8, 0.78)',
                      color: '#ffffff',
                      padding: '0.95rem 1rem',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </label>
              </div>

              <div style={{
                minHeight: '1.2rem',
                color:
                  submitState.tone === 'success'
                    ? '#ff8d84'
                    : submitState.tone === 'error'
                      ? '#ffb3ad'
                      : '#6f6f6f',
                fontFamily: mono,
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
              }}>
                {submitState.message || 'No app-store scavenger hunt. One button, one list, first access.'}
              </div>
            </form>

            <div style={{
              display: 'grid',
              gap: '0.85rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              textAlign: 'left',
            }}>
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 45, 45, 0.18)',
                    background: 'linear-gradient(180deg, rgba(255,45,45,0.12), rgba(255,45,45,0.04))',
                    padding: '1rem 1rem 0.95rem',
                    display: 'grid',
                    gap: '0.4rem',
                    transition: 'transform 0.18s ease, border-color 0.18s ease, background 0.18s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 45, 45, 0.35)';
                    e.currentTarget.style.background =
                      'linear-gradient(180deg, rgba(255,45,45,0.18), rgba(255,45,45,0.08))';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 45, 45, 0.18)';
                    e.currentTarget.style.background =
                      'linear-gradient(180deg, rgba(255,45,45,0.12), rgba(255,45,45,0.04))';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    color: '#FF2D2D',
                    fontFamily: mono,
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
                      {link.icon}
                      {link.label}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div style={{
                    color: '#ffffff',
                    fontFamily: 'grovant, sans-serif',
                    fontSize: '1.1rem',
                    textTransform: 'lowercase',
                  }}>
                    {socialCopy[link.key]}
                  </div>
                </a>
              ))}
            </div>

            <p style={{
              margin: 0,
              color: '#4a4a4a',
              fontFamily: mono,
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              minHeight: '1em',
            }}>
              nxus, from us, to you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
