import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import NavBar from '../components/NavBar';
import ProfileAvatar from '../components/ProfileAvatar';
import ShareButton from '../components/ShareButton';
import { useAuth } from '../hooks/useAuth';

const MAPS_KEY = 'AIzaSyAf9mNqgec3VKLVoa9xs9GBcTIXdiCrpD8';

export default function EventPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const user = useAuth();

  const [event, setEvent] = useState(null);
  const [hostName, setHostName] = useState('');
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!eventId) return;
    const load = async () => {
      try {
        const snap = await getDoc(doc(db, 'events', eventId));
        if (!snap.exists()) { setNotFound(true); setLoading(false); return; }
        const ev = { id: snap.id, ...snap.data() };
        setEvent(ev);
        if (ev.hostUid) {
          const hostSnap = await getDoc(doc(db, 'users', ev.hostUid));
          if (hostSnap.exists()) setHostName(hostSnap.data().displayName || 'anonymous');
        }
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [eventId]);

  const formatDate = (dt) => {
    if (!dt) return '';
    const d = dt.toDate ? dt.toDate() : new Date(dt);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) +
      ' at ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', animation: 'fadeIn 0.2s ease' }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <NavBar />
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '2rem 1rem' }}>

        {loading && (
          <div style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>loading...</div>
        )}

        {!loading && notFound && (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', color: '#444' }}>
              event not found or has been removed.
            </p>
            <button
              onClick={() => navigate('/feed')}
              style={{
                marginTop: '1rem',
                background: 'transparent',
                border: '1px solid #333',
                borderRadius: '50px',
                padding: '0.5rem 1.2rem',
                color: '#666',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.78rem',
                cursor: 'pointer',
                textTransform: 'lowercase',
              }}
            >
              ← back to feed
            </button>
          </div>
        )}

        {!loading && event && (
          <>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="event-page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                <h1 className="page-title" style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#FF2D2D',
                  textTransform: 'lowercase',
                  lineHeight: 1.1,
                  flex: 1,
                }}>
                  {event.title}
                </h1>
                <ShareButton eventId={event.id} eventTitle={event.title} />
              </div>
            </div>

            {/* Meta */}
            <div style={{
              background: '#0d0d0d',
              border: '1px solid #1a1a1a',
              borderRadius: '8px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              marginBottom: '1.25rem',
            }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem', color: '#666' }}>
                🗓 {formatDate(event.datetime)}
              </div>
              {event.locationName && (
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem', color: '#666' }}>
                  📍 {event.locationName}
                </div>
              )}
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: '#444' }}>
                {event.attendeeCount || 0} going
                {event.maxAttendees ? ` · max ${event.maxAttendees}` : ''}
              </div>
            </div>

            {/* Host */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.25rem',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/profile/${event.hostUid}`)}
            >
              <ProfileAvatar userId={event.hostUid} size={36} />
              <div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', color: '#555', textTransform: 'lowercase' }}>
                  hosted by
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem', color: '#FF2D2D', textTransform: 'lowercase' }}>
                  {hostName || 'unknown'}
                  {event.hostCircle && <span style={{ color: '#444', marginLeft: '0.4rem' }}>· {event.hostCircle}</span>}
                </div>
              </div>
            </div>

            {/* Description */}
            {event.description && (
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.88rem',
                color: '#aaa',
                lineHeight: 1.7,
                textTransform: 'lowercase',
                marginBottom: '1.25rem',
              }}>
                {event.description}
              </p>
            )}

            {/* Map */}
            {event.lat && event.lng && (
              <div style={{
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #1a1a1a',
                marginBottom: '1.75rem',
              }}>
                <iframe
                  title="event-map"
                  width="100%"
                  height="260"
                  frameBorder="0"
                  style={{
                    display: 'block',
                    filter: 'invert(0.92) hue-rotate(180deg) brightness(0.9)',
                  }}
                  src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${event.lat},${event.lng}&zoom=15`}
                  allowFullScreen
                />
              </div>
            )}

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {user ? (
                <button
                  onClick={() => navigate('/feed')}
                  style={{
                    background: '#FF2D2D',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '0.7rem 1.75rem',
                    color: '#000',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'lowercase',
                    cursor: 'pointer',
                  }}
                >
                  find it on the feed →
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  style={{
                    background: '#FF2D2D',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '0.7rem 1.75rem',
                    color: '#000',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'lowercase',
                    cursor: 'pointer',
                  }}
                >
                  join nxus to request →
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
