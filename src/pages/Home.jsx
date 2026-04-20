import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { useAuth } from '../contexts/AuthContext';
import { seedEventsIfEmpty } from '../utils/seedEvents';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [seeding, setSeeding] = useState(true);

  /* seed on first load, then listen */
  useEffect(() => {
    if (user?.uid) {
      seedEventsIfEmpty(user.uid).finally(() => setSeeding(false));
    }
  }, [user]);

  useEffect(() => {
    const q = query(collection(db, 'events'));
    const unsub = onSnapshot(q, snapshot => {
      setEvents(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const toggleExpand = id => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <main className="nxus-home-shell">
      <style>{`
        .nxus-home-shell {
          min-height: 100vh;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
          position: relative;
        }

        .nxus-home-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.14), transparent 38vw),
            radial-gradient(circle at 80% 85%, rgba(232, 0, 28, 0.08), transparent 28vw),
            #0A0A0A;
        }

        /* ── NAV ── */
        .nxus-home-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem clamp(1.2rem, 4vw, 3rem);
          background: rgba(10, 10, 10, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(232, 0, 28, 0.18);
        }

        .nxus-home-nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nxus-home-nav-logo {
          width: 36px;
          height: auto;
        }

        .nxus-home-nav-brand {
          font-family: var(--display-font);
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .nxus-home-nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nxus-home-nav-email {
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nxus-home-nav-signout {
          border: 1px solid rgba(232, 0, 28, 0.42);
          border-radius: 0;
          background: transparent;
          color: var(--nxus-red);
          padding: 0.45rem 0.9rem;
          font-family: var(--mono-font);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 160ms ease, transform 160ms ease;
        }

        .nxus-home-nav-signout:hover {
          background: rgba(232, 0, 28, 0.08);
          transform: translateY(-1px);
        }

        /* ── CONTENT ── */
        .nxus-home-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(1.4rem, 4vw, 3rem);
        }

        .nxus-home-header {
          display: grid;
          gap: 0.4rem;
          margin-bottom: 2rem;
          animation: nxusHomeIn 500ms ease both;
        }

        @keyframes nxusHomeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-home-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-home-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(2.8rem, 7vw, 4.2rem);
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-home-subtitle {
          margin: 0.2rem 0 0;
          color: rgba(240, 237, 232, 0.52);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* ── EVENT CARDS ── */
        .nxus-events-list {
          display: grid;
          gap: 1rem;
        }

        .nxus-event-card {
          border: 1px solid rgba(240, 237, 232, 0.08);
          border-left: 3px solid var(--nxus-red);
          background: var(--nxus-panel);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem 1.4rem;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
          animation: nxusHomeIn 400ms ease both;
        }

        .nxus-event-card:hover {
          background: #161212;
          border-color: rgba(232, 0, 28, 0.48);
          transform: translateX(3px);
        }

        .nxus-event-body {
          min-width: 0;
        }

        .nxus-event-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 1.65rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
        }

        .nxus-event-short {
          margin: 0.35rem 0 0;
          color: rgba(240, 237, 232, 0.62);
          font-size: 0.9rem;
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .nxus-event-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.55rem;
          flex-wrap: wrap;
        }

        .nxus-event-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: rgba(240, 237, 232, 0.42);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .nxus-event-meta-icon {
          color: var(--nxus-red);
          font-size: 0.82rem;
          line-height: 1;
        }

        .nxus-event-join {
          flex-shrink: 0;
          border: 1px solid rgba(232, 0, 28, 0.5);
          border-radius: 0;
          background: rgba(232, 0, 28, 0.06);
          color: var(--nxus-red);
          padding: 0.65rem 1.3rem;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: background 160ms ease, box-shadow 160ms ease, transform 160ms ease;
        }

        .nxus-event-join:hover {
          background: rgba(232, 0, 28, 0.14);
          box-shadow: 0 0 22px rgba(232, 0, 28, 0.28);
          transform: translateY(-1px);
        }

        /* ── EXPANDED ── */
        .nxus-event-expanded {
          grid-column: 1 / -1;
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(240, 237, 232, 0.06);
          animation: nxusExpandIn 280ms ease both;
        }

        @keyframes nxusExpandIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 300px; }
        }

        .nxus-event-full {
          margin: 0;
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.65;
        }

        /* ── EMPTY STATE ── */
        .nxus-events-empty {
          text-align: center;
          padding: 4rem 1rem;
          color: rgba(240, 237, 232, 0.38);
          font-family: var(--mono-font);
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .nxus-event-card {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            padding: 1rem;
          }

          .nxus-event-join {
            justify-self: stretch;
            text-align: center;
          }

          .nxus-home-nav-email {
            display: none;
          }
        }
      `}</style>

      <nav className="nxus-home-nav">
        <div className="nxus-home-nav-left">
          <img className="nxus-home-nav-logo" src="/assets/nxus_logo_icon.svg" alt="NXUS" />
          <span className="nxus-home-nav-brand">NXUS</span>
        </div>
        <div className="nxus-home-nav-right">
          <span className="nxus-home-nav-email">{user?.email}</span>
          <button className="nxus-home-nav-signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </nav>

      <div className="nxus-home-content">
        <header className="nxus-home-header">
          <div className="nxus-home-eyebrow">Live Drops</div>
          <h1 className="nxus-home-title">Upcoming Events</h1>
          <p className="nxus-home-subtitle">Tap a card to see more. Hit Join Now to sign up.</p>
        </header>

        {seeding && events.length === 0 ? (
          <div className="nxus-events-empty">Loading events\u2026</div>
        ) : events.length === 0 ? (
          <div className="nxus-events-empty">No events yet. Check back soon.</div>
        ) : (
          <div className="nxus-events-list">
            {events.map((event, index) => (
              <div
                className="nxus-event-card"
                key={event.id}
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => toggleExpand(event.id)}
              >
                <div className="nxus-event-body">
                  <h2 className="nxus-event-title">{event.title}</h2>
                  {expandedId !== event.id && (
                    <p className="nxus-event-short">{event.shortDescription}</p>
                  )}
                  <div className="nxus-event-meta">
                    <span className="nxus-event-meta-item">
                      <span className="nxus-event-meta-icon">{'\u{1F4C5}'}</span>
                      {event.date}
                    </span>
                    <span className="nxus-event-meta-item">
                      <span className="nxus-event-meta-icon">{'\u{1F4CD}'}</span>
                      {event.location}
                    </span>
                  </div>
                </div>

                <button
                  className="nxus-event-join"
                  onClick={e => {
                    e.stopPropagation();
                    window.open(event.formLink, '_blank', 'noopener,noreferrer');
                  }}
                >
                  Join Now {'\u2192'}
                </button>

                {expandedId === event.id && (
                  <div className="nxus-event-expanded">
                    <p className="nxus-event-full">{event.fullDescription}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
