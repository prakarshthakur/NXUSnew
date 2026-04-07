import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  collection, query, where, getDocs, getDocsFromServer, addDoc, updateDoc, serverTimestamp, doc, getDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import NavBar from '../components/NavBar';
import ProfileAvatar from '../components/ProfileAvatar';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../components/ShareButton';
import FlairBadge from '../components/FlairBadge';
import VerifiedBadge from '../components/VerifiedBadge';

const MAPS_KEY = 'AIzaSyAf9mNqgec3VKLVoa9xs9GBcTIXdiCrpD8';

function DetailModal({ event, onClose, onLike, onPass }) {
  const [hostName, setHostName] = useState('');
  const [hostFlair, setHostFlair] = useState(null);
  const [hostVerified, setHostVerified] = useState(false);

  useEffect(() => {
    if (!event.hostUid) return;
    getDoc(doc(db, 'users', event.hostUid)).then(snap => {
      if (snap.exists()) {
        setHostName(snap.data().displayName || 'anonymous');
        setHostFlair(snap.data().flair || null);
        setHostVerified(snap.data().university_verified || false);
      }
    }).catch(() => {});
  }, [event.hostUid]);

  const formatDate = (dt) => {
    if (!dt) return '';
    const d = dt.toDate ? dt.toDate() : new Date(dt);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) +
      ' at ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        className="detail-modal-inner"
        style={{
          background: '#0d0d0d',
          border: '1px solid #1a1a1a',
          borderRadius: '8px',
          padding: '2rem',
          width: '100%',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h2 style={{
            fontFamily: "grovant, sans-serif",
            fontSize: '1.8rem',
            fontWeight: 800,
            color: '#FF2D2D',
            textTransform: 'lowercase',
            lineHeight: 1.1,
          }}>
            {event.title}
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
            <ShareButton eventId={event.id} eventTitle={event.title} />
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: '1px solid #333',
                color: '#666',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >×</button>
          </div>
        </div>

        {event.flair?.text && (
          <div><FlairBadge flair={event.flair} size="sm" /></div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem', color: '#666' }}>
            🗓 {formatDate(event.datetime)}
          </div>
          {event.locationName && (
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.82rem', color: '#666' }}>
              📍 {event.locationName}
            </div>
          )}
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: '#555' }}>
            {event.attendeeCount || 0} going
            {event.maxAttendees ? ` · max ${event.maxAttendees}` : ''}
          </div>
        </div>

        {event.description && (
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.88rem',
            color: '#aaa',
            lineHeight: 1.7,
            textTransform: 'lowercase',
          }}>
            {event.description}
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ProfileAvatar userId={event.hostUid} size={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.78rem',
              color: '#FF2D2D',
              textTransform: 'lowercase',
            }}>
              hosted by {hostName || 'unknown'}
              <VerifiedBadge verified={hostVerified} size={13} />
              {event.hostCircle && (
                <span style={{ color: '#444', marginLeft: '0.4rem' }}>· {event.hostCircle}</span>
              )}
            </span>
            {hostFlair && <FlairBadge flair={hostFlair} size="xs" />}
          </div>
        </div>

        {event.lat && event.lng && (
          <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #1a1a1a' }}>
            <iframe
              title="event-map"
              width="100%"
              height="220"
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

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            onClick={() => { onLike(); onClose(); }}
            style={{
              flex: 1,
              background: '#FF2D2D',
              border: 'none',
              borderRadius: '50px',
              padding: '0.75rem',
              color: '#000',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.88rem',
              fontWeight: 700,
              textTransform: 'lowercase',
              cursor: 'pointer',
            }}
          >
            like ♥
          </button>
          <button
            onClick={() => { onPass(); onClose(); }}
            style={{
              flex: 1,
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '50px',
              padding: '0.75rem',
              color: '#666',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.88rem',
              textTransform: 'lowercase',
              cursor: 'pointer',
            }}
          >
            pass
          </button>
        </div>
      </div>
    </div>
  );
}

function SwipeCard({ event, onLike, onPass, onTap, zIndex, scale, offsetY, flyOut }) {
  const cardRef = useRef(null);
  const startRef = useRef(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [stamp, setStamp] = useState(null); // 'like' | 'nope' | null
  const [swiped, setSwiped] = useState(false); // committed swipe — keep position

  const threshold = window.innerWidth * 0.25;

  const handlePointerDown = (e) => {
    if (zIndex < 10) return;
    startRef.current = e.clientX;
    setIsDragging(true);
    cardRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || startRef.current === null) return;
    const dx = e.clientX - startRef.current;
    setDragX(dx);
    if (dx > 40) setStamp('like');
    else if (dx < -40) setStamp('nope');
    else setStamp(null);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX > threshold) {
      setSwiped(true);
      onLike();
    } else if (dragX < -threshold) {
      setSwiped(true);
      onPass();
    } else {
      setDragX(0);
      setStamp(null);
    }
    startRef.current = null;
  };

  let finalDragX = dragX;
  let finalRotation = (isDragging || swiped) ? (dragX / 20) : 0;
  
  if (flyOut === 'like') {
    finalDragX = window.innerWidth * 1.5;
    finalRotation = 20;
  } else if (flyOut === 'pass') {
    finalDragX = -window.innerWidth * 1.5;
    finalRotation = -20;
  }

  // Use transition when resting, returning to center, or flying out. Disable when dragging.
  const needsTransition = (!isDragging && !swiped) || flyOut;

  return (
    <div
      ref={cardRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={() => {
        if (!isDragging && Math.abs(dragX) < 5) onTap();
      }}
      style={{
        position: 'absolute',
        width: '100%',
        touchAction: 'none',
        zIndex,
        transform: `translateX(${finalDragX}px) rotate(${finalRotation}deg) translateY(${offsetY}px) scale(${scale})`,
        opacity: flyOut ? 0 : 1,
        transition: needsTransition ? 'transform 0.3s ease, opacity 0.3s ease' : 'none',
        cursor: zIndex >= 10 ? 'grab' : 'default',
      }}
    >
      <div style={{
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255,45,45,0.2)',
        borderRadius: '20px',
        padding: '2rem',
        minHeight: '420px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {stamp === 'like' && (
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            border: '3px solid #4ade80',
            color: '#4ade80',
            fontFamily: "grovant, sans-serif",
            fontWeight: 800,
            fontSize: '1.8rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '6px',
            transform: 'rotate(-12deg)',
            opacity: Math.min(1, Math.abs(dragX) / 80),
            zIndex: 10,
          }}>
            LIKE
          </div>
        )}
        {stamp === 'nope' && (
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            border: '3px solid #FF2D2D',
            color: '#FF2D2D',
            fontFamily: "grovant, sans-serif",
            fontWeight: 800,
            fontSize: '1.8rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '6px',
            transform: 'rotate(12deg)',
            opacity: Math.min(1, Math.abs(dragX) / 80),
            zIndex: 10,
          }}>
            NOPE
          </div>
        )}

        <h2 style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          lineHeight: 1.1,
        }}>
          {event.title}
        </h2>

        {event.flair?.text && (
          <FlairBadge flair={event.flair} size="sm" />
        )}

        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem', color: '#666', textTransform: 'lowercase' }}>
          {event.datetime
            ? (() => {
              const d = event.datetime.toDate ? event.datetime.toDate() : new Date(event.datetime);
              return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
                ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
            })()
            : ''}
        </div>

        {event.locationName && (
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: '#666', textTransform: 'lowercase' }}>
            📍 {event.locationName}
          </div>
        )}

        {event.lat && event.lng && (
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #1a1a1a',
            flex: 1,
            minHeight: '160px',
            pointerEvents: 'none',
          }}>
            <iframe
              title="card-map"
              width="100%"
              height="100%"
              style={{ display: 'block', minHeight: '160px', filter: 'invert(0.92) hue-rotate(180deg) brightness(0.9)' }}
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${event.lat},${event.lng}&zoom=15`}
              allowFullScreen
            />
          </div>
        )}

        <HostRow hostUid={event.hostUid} attendeeCount={event.attendeeCount} eventId={event.id} />

        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.7rem',
          color: '#444',
          textAlign: 'right',
          textTransform: 'lowercase',
        }}>
          tap for details
        </div>
      </div>
    </div>
  );
}

function HostRow({ hostUid, attendeeCount, eventId }) {
  const [hostName, setHostName] = useState('');
  const [hostFlair, setHostFlair] = useState(null);
  const [hostVerified, setHostVerified] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);
  const [attendeeNames, setAttendeeNames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hostUid) return;
    getDoc(doc(db, 'users', hostUid)).then(snap => {
      if (snap.exists()) {
        setHostName(snap.data().displayName || 'anonymous');
        setHostFlair(snap.data().flair || null);
        setHostVerified(snap.data().university_verified || false);
      }
    }).catch(() => {});
  }, [hostUid]);

  const fetchAttendees = async (e) => {
    e.stopPropagation();
    if (showAttendees) { setShowAttendees(false); return; }
    try {
      const q = query(
        collection(db, 'joinRequests'),
        where('eventId', '==', eventId),
        where('status', '==', 'accepted')
      );
      const snaps = await getDocs(q);
      const names = [];
      for (const s of snaps.docs.slice(0, 5)) {
        const userSnap = await getDoc(doc(db, 'users', s.data().userId));
        if (userSnap.exists()) names.push(userSnap.data().displayName || 'someone');
      }
      setAttendeeNames(names);
      setShowAttendees(true);
    } catch {}
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          onClick={e => { e.stopPropagation(); navigate(`/profile/${hostUid}`); }}
        >
          <ProfileAvatar userId={hostUid} size={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              color: '#FF2D2D',
              textTransform: 'lowercase',
              display: 'inline-flex',
              alignItems: 'center',
            }}>
              {hostName || 'host'}
              <VerifiedBadge verified={hostVerified} size={13} />
            </span>
            {hostFlair && <FlairBadge flair={hostFlair} size="xs" />}
          </div>
        </div>
        <button
          onClick={fetchAttendees}
          style={{
            background: 'none',
            border: 'none',
            color: '#555',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.75rem',
            cursor: 'pointer',
            textTransform: 'lowercase',
          }}
        >
          {attendeeCount || 0} going
        </button>
      </div>
      {showAttendees && attendeeNames.length > 0 && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          right: 0,
          background: '#111',
          border: '1px solid #222',
          borderRadius: '8px',
          padding: '0.5rem 0.75rem',
          zIndex: 20,
          minWidth: '140px',
        }}
          onClick={e => e.stopPropagation()}
        >
          {attendeeNames.map((n, i) => (
            <div key={i} style={{ color: '#aaa', fontSize: '0.72rem', fontFamily: "'IBM Plex Mono', monospace", padding: '0.2rem 0', textTransform: 'lowercase' }}>
              {n}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Feed() {
  const user = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailEvent, setDetailEvent] = useState(null);
  const [flyDirection, setFlyDirection] = useState(null);
  const [passedMode, setPassedMode] = useState(false);
  // passedRequestMap: eventId → joinRequest doc id (for updating instead of re-creating)
  const passedRequestMap = useRef({});

  const loadFreshEvents = useCallback(async () => {
    if (!user?.uid) return;
    setLoading(true);
    try {
      const allEventsSnap = await getDocsFromServer(collection(db, 'events'));
      const allEvents = allEventsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

      const swipedSnap = await getDocsFromServer(
        query(collection(db, 'joinRequests'), where('userId', '==', user.uid))
      );
      const swipedIds = new Set(swipedSnap.docs.map(d => d.data().eventId));

      const filtered = allEvents.filter(e => !swipedIds.has(e.id) && e.hostUid !== user.uid);
      setEvents(filtered);
      setCurrentIndex(0);
      setPassedMode(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user?.uid]);

  const loadPassedEvents = useCallback(async () => {
    if (!user?.uid) return;
    setLoading(true);
    try {
      const passedSnap = await getDocs(
        query(collection(db, 'joinRequests'), where('userId', '==', user.uid), where('status', '==', 'passed'))
      );
      // Build a map of eventId → request doc id so we can update instead of duplicate
      const reqMap = {};
      passedSnap.docs.forEach(d => { reqMap[d.data().eventId] = d.id; });
      passedRequestMap.current = reqMap;

      const eventIds = Object.keys(reqMap);
      const eventsWithData = [];
      for (const eid of eventIds) {
        const evSnap = await getDoc(doc(db, 'events', eid));
        if (evSnap.exists()) eventsWithData.push({ id: evSnap.id, ...evSnap.data() });
      }
      setEvents(eventsWithData);
      setCurrentIndex(0);
      setPassedMode(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user?.uid]);

  useEffect(() => {
    loadFreshEvents();
  }, [loadFreshEvents]);

  const handleLike = useCallback(async (event) => {
    if (!user?.uid || !event) return;
    setFlyDirection('like');
    try {
      const existingReqId = passedRequestMap.current[event.id];
      if (existingReqId) {
        // Re-liking a passed event — update existing request to pending
        await updateDoc(doc(db, 'joinRequests', existingReqId), {
          status: 'pending',
          requestedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, 'joinRequests'), {
          eventId: event.id,
          userId: user.uid,
          hostUid: event.hostUid,
          status: 'pending',
          requestedAt: serverTimestamp(),
        });
      }
    } catch (err) {
      console.error(err);
    }
    setTimeout(() => {
      setCurrentIndex(i => i + 1);
      setFlyDirection(null);
    }, 300);
  }, [user?.uid]);

  const handlePass = useCallback(async (event) => {
    if (!user?.uid || !event) return;
    setFlyDirection('pass');
    // In passed mode just skip — no need to re-write the same status
    if (!passedMode) {
      try {
        await addDoc(collection(db, 'joinRequests'), {
          eventId: event.id,
          userId: user.uid,
          hostUid: event.hostUid,
          status: 'passed',
          requestedAt: serverTimestamp(),
        });
      } catch (err) {
        console.error(err);
      }
    }
    setTimeout(() => {
      setCurrentIndex(i => i + 1);
      setFlyDirection(null);
    }, 300);
  }, [user?.uid, passedMode]);

  const visibleEvents = events.slice(currentIndex, currentIndex + 3);
  const isDone = !loading && currentIndex >= events.length;

  return (
    <div className="feed-container" style={{ minHeight: '100vh', position: 'relative', animation: 'fadeIn 0.2s ease' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .feed-container::before {
          content: "";
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: -1;
          background-image: url('/assets/feed_bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .feed-container::before {
            background-image: url('/assets/feed_bg_mobile.jpg');
          }
        }
      `}</style>
      <NavBar />
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '1rem',
          color: '#333',
          textTransform: 'lowercase',
          marginBottom: '1.5rem',
          letterSpacing: '0.05em',
        }}>
          swipe to explore
        </div>

        {loading && (
          <div style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem', marginTop: '4rem' }}>
            loading...
          </div>
        )}

        {!loading && isDone && (
          <div style={{
            textAlign: 'center',
            marginTop: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            animation: 'fadeIn 0.3s ease',
          }}>
            <div style={{
              fontFamily: "grovant, sans-serif",
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#FF2D2D',
              textTransform: 'lowercase',
            }}>
              {passedMode ? 'end of passed events' : "that's all for now 🔴"}
            </div>

            {!passedMode && (
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.8rem',
                color: '#444',
                textTransform: 'lowercase',
                maxWidth: '280px',
                lineHeight: 1.6,
              }}>
                you've seen everything. nothing stopping you from starting your own thing.
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%', maxWidth: '280px' }}>
              {!passedMode && (
                <button
                  onClick={loadPassedEvents}
                  style={{
                    background: 'transparent',
                    border: '1px solid #333',
                    borderRadius: '50px',
                    padding: '0.65rem 1.5rem',
                    color: '#666',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.82rem',
                    textTransform: 'lowercase',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#666'; }}
                >
                  revisit passed events
                </button>
              )}

              {passedMode && (
                <button
                  onClick={loadFreshEvents}
                  style={{
                    background: 'transparent',
                    border: '1px solid #333',
                    borderRadius: '50px',
                    padding: '0.65rem 1.5rem',
                    color: '#666',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.82rem',
                    textTransform: 'lowercase',
                    cursor: 'pointer',
                  }}
                >
                  ← back to feed
                </button>
              )}

              {!passedMode && (
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.68rem',
                  color: '#333',
                  textTransform: 'lowercase',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  margin: '0.25rem 0',
                }}>
                  refresh the page to check for new events
                </p>
              )}

              <button
                onClick={() => navigate('/host')}
                style={{
                  background: '#FF2D2D',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.65rem 1.5rem',
                  color: '#000',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'lowercase',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                + host something
              </button>
            </div>
          </div>
        )}

        {!loading && !isDone && (
          <div className="feed-card-stack" style={{ position: 'relative', width: '100%', height: '480px' }}>
            {[...visibleEvents].reverse().map((event, revIdx) => {
              const idx = visibleEvents.length - 1 - revIdx;
              const isTop = idx === 0;
              const scale = 1 - idx * 0.04;
              const offsetY = idx * 12;
              const zIndex = 10 - idx;

              return (
                <SwipeCard
                  key={event.id}
                  event={event}
                  zIndex={zIndex}
                  scale={scale}
                  offsetY={offsetY}
                  flyOut={isTop ? flyDirection : null}
                  onLike={() => handleLike(event)}
                  onPass={() => handlePass(event)}
                  onTap={() => isTop && setDetailEvent(event)}
                />
              );
            })}
          </div>
        )}

        {!loading && !isDone && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={() => handlePass(visibleEvents[0])}
              style={{
                background: 'transparent',
                border: '1px solid #333',
                borderRadius: '50px',
                padding: '0.6rem 1.8rem',
                color: '#666',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.85rem',
                textTransform: 'lowercase',
                cursor: 'pointer',
              }}
            >
              pass
            </button>
            <button
              onClick={() => handleLike(visibleEvents[0])}
              style={{
                background: '#FF2D2D',
                border: 'none',
                borderRadius: '50px',
                padding: '0.6rem 1.8rem',
                color: '#000',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'lowercase',
                cursor: 'pointer',
              }}
            >
              like ♥
            </button>
          </div>
        )}
      </div>

      {detailEvent && (
        <DetailModal
          event={detailEvent}
          onClose={() => setDetailEvent(null)}
          onLike={() => handleLike(detailEvent)}
          onPass={() => handlePass(detailEvent)}
        />
      )}
    </div>
  );
}
