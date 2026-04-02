import React, { useState, useEffect } from 'react';
import {
  collection, query, where, getDocs, onSnapshot, doc, deleteDoc, writeBatch,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import RequestRow from '../components/RequestRow';
import ShareButton from '../components/ShareButton';

export default function MyEvents() {
  const user = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [pendingCounts, setPendingCounts] = useState({});
  const [pendingRequests, setPendingRequests] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(null); // eventId pending delete
  const [deleting, setDeleting] = useState(false);
  const unsubscribers = React.useRef({});

  useEffect(() => {
    if (!user?.uid) return;
    const loadEvents = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, 'events'),
          where('hostUid', '==', user.uid)
        );
        const snap = await getDocs(q);
        const evts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        evts.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
        setEvents(evts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, [user?.uid]);

  useEffect(() => {
    events.forEach(ev => {
      if (unsubscribers.current[ev.id]) return;
      const q = query(
        collection(db, 'joinRequests'),
        where('eventId', '==', ev.id),
        where('status', 'in', ['pending', 'info_requested', 'replied'])
      );
      const unsub = onSnapshot(q, snap => {
        const reqs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setPendingCounts(prev => ({ ...prev, [ev.id]: reqs.length }));
        setPendingRequests(prev => ({ ...prev, [ev.id]: reqs }));
      });
      unsubscribers.current[ev.id] = unsub;
    });
    return () => {
      Object.values(unsubscribers.current).forEach(u => u());
      unsubscribers.current = {};
    };
  }, [events]);

  const handleDeleteEvent = async (eventId) => {
    setDeleting(true);
    try {
      // Delete all joinRequests for this event
      const reqSnap = await getDocs(
        query(collection(db, 'joinRequests'), where('eventId', '==', eventId))
      );
      if (reqSnap.size > 0) {
        const batch = writeBatch(db);
        reqSnap.docs.forEach(d => batch.delete(d.ref));
        await batch.commit();
      }
      await deleteDoc(doc(db, 'events', eventId));
      setEvents(prev => prev.filter(e => e.id !== eventId));
      setDeleteConfirm(null);
    } catch (err) {
      console.error(err);
    }
    setDeleting(false);
  };

  const formatDate = (dt) => {
    if (!dt) return '';
    const d = dt.toDate ? dt.toDate() : new Date(dt);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const toggleRequests = (eventId) => {
    setExpandedEvent(exp => exp === eventId ? null : eventId);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', animation: 'fadeIn 0.2s ease' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cardIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <NavBar />
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 className="page-title" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          marginBottom: '0.4rem',
        }}>
          your drops
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.8rem',
          color: '#666',
          textTransform: 'lowercase',
          marginBottom: '2rem',
        }}>
          events you've created
        </p>

        {loading && (
          <div style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>loading...</div>
        )}

        {!loading && events.length === 0 && (
          <div style={{
            background: '#0d0d0d',
            border: '1px solid #1a1a1a',
            borderRadius: '8px',
            padding: '2.5rem',
            textAlign: 'center',
          }}>
            <p style={{ color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', marginBottom: '1rem' }}>
              no drops yet
            </p>
            <button
              onClick={() => navigate('/host')}
              style={{
                background: '#FF2D2D',
                border: 'none',
                borderRadius: '50px',
                padding: '0.6rem 1.5rem',
                color: '#000',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'lowercase',
                cursor: 'pointer',
              }}
            >
              host your first event →
            </button>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {events.map((event, idx) => {
            const count = pendingCounts[event.id] || 0;
            const reqs = pendingRequests[event.id] || [];
            const isExpanded = expandedEvent === event.id;

            return (
              <div
                key={event.id}
                style={{
                  background: '#0d0d0d',
                  border: '1px solid #1a1a1a',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  animation: `cardIn 0.3s ease ${idx * 0.08}s both`,
                  ...(isExpanded ? { boxShadow: '0 0 20px rgba(255,45,45,0.15)' } : {}),
                }}
              >
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#FF2D2D',
                        textTransform: 'lowercase',
                        marginBottom: '0.4rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {event.title}
                      </h3>
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.78rem',
                        color: '#555',
                        textTransform: 'lowercase',
                        marginBottom: '0.25rem',
                      }}>
                        {formatDate(event.datetime)}
                        {event.locationName && ` · ${event.locationName}`}
                      </div>
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.72rem',
                        color: '#444',
                        textTransform: 'lowercase',
                      }}>
                        {event.attendeeCount || 0} / {event.maxAttendees || '∞'} going
                      </div>
                    </div>

                    <div className="event-card-actions" style={{ display: 'flex', gap: '0.5rem', flexShrink: 0, alignItems: 'center' }}>
                      <ShareButton eventId={event.id} eventTitle={event.title} />
                      <button
                        onClick={() => toggleRequests(event.id)}
                        style={{
                          background: 'transparent',
                          border: '1px solid',
                          borderColor: isExpanded ? '#FF2D2D' : '#222',
                          borderRadius: '50px',
                          padding: '0.4rem 0.9rem',
                          color: isExpanded ? '#FF2D2D' : '#555',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.72rem',
                          textTransform: 'lowercase',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          transition: 'color 0.2s, border-color 0.2s',
                        }}
                      >
                        requests
                        <span style={{
                          background: count > 0 ? '#FF2D2D' : '#333',
                          color: count > 0 ? '#000' : '#555',
                          borderRadius: '50%',
                          width: '18px',
                          height: '18px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          transition: 'background 0.2s',
                        }}>
                          {count}
                        </span>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(event.id)}
                        title="delete event"
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(239,68,68,0.25)',
                          borderRadius: '50px',
                          padding: '0.4rem 0.6rem',
                          color: '#ef4444',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          opacity: 0.6,
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div style={{
                    borderTop: '1px solid #111',
                    padding: '0 1.5rem 1.5rem',
                  }}>
                    <div style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.72rem',
                      color: '#444',
                      textTransform: 'lowercase',
                      padding: '0.75rem 0 0.5rem',
                    }}>
                      open requests + replies ({count})
                    </div>
                    {reqs.length === 0 ? (
                      <div style={{
                        color: '#333',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.78rem',
                        textTransform: 'lowercase',
                        padding: '0.75rem 0',
                      }}>
                        no pending requests
                      </div>
                    ) : (
                      reqs.map(req => (
                        <RequestRow key={req.id} request={req} eventId={event.id} />
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Delete confirmation overlay */}
      {deleteConfirm && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          zIndex: 100,
          animation: 'fadeIn 0.15s ease',
        }}>
          <div style={{
            background: '#0d0d0d',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '10px',
            padding: '1.75rem',
            maxWidth: '320px',
            width: '100%',
          }}>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '0.5rem',
              textTransform: 'lowercase',
            }}>
              delete this event?
            </p>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              color: '#555',
              marginBottom: '1.25rem',
              lineHeight: 1.6,
            }}>
              this will remove the event and all associated requests. this cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => handleDeleteEvent(deleteConfirm)}
                disabled={deleting}
                style={{
                  background: '#ef4444',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.55rem 1.2rem',
                  color: '#000',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'lowercase',
                  cursor: deleting ? 'not-allowed' : 'pointer',
                  opacity: deleting ? 0.6 : 1,
                }}
              >
                {deleting ? 'deleting...' : 'yes, delete'}
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                disabled={deleting}
                style={{
                  background: 'transparent',
                  border: '1px solid #333',
                  borderRadius: '50px',
                  padding: '0.55rem 1.2rem',
                  color: '#666',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.78rem',
                  textTransform: 'lowercase',
                  cursor: 'pointer',
                }}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
