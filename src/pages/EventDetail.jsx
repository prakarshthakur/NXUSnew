import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../utils/firebase';
import { useAuth } from '../contexts/AuthContext';

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, 'events', eventId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEvent({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvent();
  }, [eventId]);

  const handleBack = () => {
    if (user) {
      navigate('/home');
    } else {
      navigate('/');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="nxus-detail-shell">
        <div className="nxus-loading">Loading event...</div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="nxus-detail-shell">
        <div className="nxus-error">
          <p>Event not found.</p>
          <button onClick={handleBack} className="nxus-back-btn">&larr; Back</button>
        </div>
      </div>
    );
  }

  return (
    <main className="nxus-detail-shell">
      <style>{`
        .nxus-detail-shell {
          min-height: 100vh;
          background: #000000;
          color: #F0EDE8;
          font-family: 'DM Sans', 'Outfit', sans-serif;
          padding: clamp(1.4rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        
        .nxus-detail-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.14), transparent 38vw),
            radial-gradient(circle at 80% 85%, rgba(232, 0, 28, 0.08), transparent 28vw);
          z-index: 0;
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
          width: 100%;
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
          font-family: 'Bebas Neue', 'Barlow Condensed', sans-serif;
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
          font-family: 'Space Mono', monospace;
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
          color: #E8001C;
          padding: 0.45rem 0.9rem;
          font-family: 'Space Mono', monospace;
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

        @media (max-width: 640px) {
          .nxus-home-nav-email {
            display: none;
          }
        }

        .nxus-detail-content {
          position: relative;
          z-index: 1;
          width: min(100%, 700px);
          animation: nxusFadeUp 500ms ease both;
          background: #0A0A0A;
          border: 1px solid rgba(232, 0, 28, 0.2);
          border-left: 3px solid #E8001C;
          padding: 2rem;
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-back-btn {
          background: transparent;
          border: none;
          color: rgba(240, 237, 232, 0.6);
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
          cursor: pointer;
          margin-bottom: 2rem;
          padding: 0;
          transition: color 150ms;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nxus-back-btn:hover {
          color: #E8001C;
        }

        .nxus-event-title-detail {
          margin: 0;
          color: #FFFFFF;
          font-family: 'Bebas Neue', 'Barlow Condensed', sans-serif;
          font-size: clamp(3rem, 7vw, 4.2rem);
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .nxus-event-meta-detail {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .nxus-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(240, 237, 232, 0.6);
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .nxus-meta-icon {
          color: #E8001C;
        }

        .nxus-event-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(240, 237, 232, 0.8);
          margin-bottom: 3rem;
          white-space: pre-wrap;
        }

        .nxus-join-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: #E8001C;
          border: 1px solid #E8001C;
          color: #000000;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 1.2rem;
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease;
          text-decoration: none;
        }

        .nxus-join-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 24px rgba(232, 0, 28, 0.4);
        }

        .nxus-loading, .nxus-error {
          position: relative;
          z-index: 1;
          font-family: 'Space Mono', monospace;
          color: rgba(240, 237, 232, 0.5);
          text-transform: uppercase;
          margin-top: 5rem;
        }
      `}</style>

      <nav className="nxus-home-nav">
        <div className="nxus-home-nav-left" style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
          <img className="nxus-home-nav-logo" src="/assets/nxus_logo_icon.svg" alt="NXUS" />
          <span className="nxus-home-nav-brand">NXUS</span>
        </div>
        {user && (
          <div className="nxus-home-nav-right">
            <span className="nxus-home-nav-email">{user.email}</span>
            <button className="nxus-home-nav-signout" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </nav>

      <div className="nxus-detail-content" style={{ marginTop: '2rem' }}>
        <button className="nxus-back-btn" onClick={handleBack}>
          &larr; Back
        </button>

        <h1 className="nxus-event-title-detail">{event.title}</h1>
        
        <div className="nxus-event-meta-detail">
          <span className="nxus-meta-item">
            <span className="nxus-meta-icon">{'\u{1F4C5}'}</span>
            {event.date}
          </span>
          <span className="nxus-meta-item">
            <span className="nxus-meta-icon">{'\u{1F4CD}'}</span>
            {event.location}
          </span>
        </div>

        <div className="nxus-event-desc">
          {event.fullDescription || event.shortDescription}
        </div>

        <a 
          href={event.formLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nxus-join-btn"
        >
          Join Now &rarr;
        </a>
      </div>
    </main>
  );
}
