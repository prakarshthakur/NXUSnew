import React, { useState, useEffect, useRef } from 'react';
import {
  collection, query, where, onSnapshot, doc, getDoc, runTransaction, serverTimestamp, updateDoc,
} from 'firebase/firestore';

import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import NavBar from '../components/NavBar';
import StatusBadge from '../components/StatusBadge';

const FILTERS = ['all', 'questions', 'pending', 'accepted', 'declined'];

function QuestionBlock({ req, onReplySent }) {
  const [reply, setReply] = useState(req.reply || '');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(req.status === 'replied');
  const textareaRef = useRef(null);

  // If status was already replied, show read-only view
  if (sent || req.status === 'replied') {
    return (
      <div style={{
        marginTop: '0.75rem',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid rgba(245,158,11,0.2)',
      }}>
        <div style={{
          background: 'rgba(245,158,11,0.07)',
          padding: '0.6rem 0.85rem',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          color: '#f59e0b',
          borderBottom: '1px solid rgba(245,158,11,0.15)',
        }}>
          💬 {req.hostQuestion}
        </div>
        <div style={{
          background: 'rgba(245,158,11,0.03)',
          padding: '0.6rem 0.85rem',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          color: '#666',
        }}>
          <span style={{ color: '#444', fontSize: '0.7rem' }}>you: </span>
          {req.reply}
        </div>
      </div>
    );
  }

  const handleSend = async () => {
    if (!reply.trim()) return;
    setSending(true);
    try {
      await updateDoc(doc(db, 'joinRequests', req.id), {
        reply: reply.trim(),
        repliedAt: serverTimestamp(),
        status: 'replied',
      });
      setSent(true);
      onReplySent?.();
    } catch (e) {
      console.error('failed to send join request reply', e?.code);
    }
    setSending(false);
  };

  return (
    <div style={{
      marginTop: '0.75rem',
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid rgba(245,158,11,0.35)',
      animation: 'questionPop 0.2s ease',
    }}>
      {/* Host's question */}
      <div style={{
        background: 'rgba(245,158,11,0.1)',
        padding: '0.65rem 0.85rem',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.8rem',
        color: '#f59e0b',
        borderBottom: '1px solid rgba(245,158,11,0.2)',
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'flex-start',
      }}>
        <span style={{ flexShrink: 0 }}>💬</span>
        <span>{req.hostQuestion}</span>
      </div>

      {/* Reply input */}
      <div style={{ background: '#0d0d0d', padding: '0.65rem 0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <textarea
          ref={textareaRef}
          placeholder="type your reply..."
          value={reply}
          onChange={e => setReply(e.target.value)}
          maxLength={300}
          rows={2}
          style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '6px',
            color: '#fff',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.78rem',
            padding: '0.5rem 0.7rem',
            outline: 'none',
            resize: 'none',
            width: '100%',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = '#222'}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={handleSend}
            disabled={sending || !reply.trim()}
            style={{
              background: '#f59e0b',
              border: 'none',
              borderRadius: '50px',
              padding: '0.35rem 1rem',
              color: '#000',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'lowercase',
              cursor: sending || !reply.trim() ? 'not-allowed' : 'pointer',
              opacity: sending || !reply.trim() ? 0.5 : 1,
            }}
          >
            {sending ? 'sending...' : 'send reply'}
          </button>
          <span style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', marginLeft: 'auto' }}>
            {reply.length}/300
          </span>
        </div>
      </div>
    </div>
  );
}

function OptOutButton({ req }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [withdrawing, setWithdrawing] = useState(false);

  const isAccepted = req.status === 'accepted';

  const handleWithdraw = async () => {
    setWithdrawing(true);
    try {
      await runTransaction(db, async (transaction) => {
        const requestRef = doc(db, 'joinRequests', req.id);
        const requestSnap = await transaction.get(requestRef);

        if (!requestSnap.exists()) {
          throw new Error('missing-request');
        }

        const currentRequest = requestSnap.data();
        const eventRef = doc(db, 'events', currentRequest.eventId);
        const eventSnap = await transaction.get(eventRef);

        transaction.update(requestRef, {
          status: 'withdrawn',
          withdrawnAt: serverTimestamp(),
        });

        if (currentRequest.status === 'accepted' && eventSnap.exists()) {
          const eventData = eventSnap.data();
          const attendeeCount = Math.max(0, (eventData.attendeeCount || 0) - 1);
          transaction.update(eventRef, { attendeeCount });
        }
      });
    } catch (e) {
      console.error('failed to withdraw join request', e?.code || e?.message);
    }
    setWithdrawing(false);
  };

  if (confirmOpen) {
    return (
      <div style={{
        marginTop: '0.75rem',
        padding: '0.75rem',
        background: 'rgba(239,68,68,0.06)',
        border: '1px solid rgba(239,68,68,0.2)',
        borderRadius: '6px',
        animation: 'questionPop 0.15s ease',
      }}>
        {isAccepted && (
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            color: '#ef4444',
            marginBottom: '0.5rem',
            lineHeight: 1.5,
          }}>
            heads up — opting out of accepted events may affect your chances at future ones.
          </p>
        )}
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.72rem',
          color: '#666',
          marginBottom: '0.6rem',
        }}>
          {isAccepted ? 'still want to opt out?' : 'withdraw your request?'}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={handleWithdraw}
            disabled={withdrawing}
            style={{
              background: '#ef4444',
              border: 'none',
              borderRadius: '50px',
              padding: '0.3rem 0.85rem',
              color: '#000',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 700,
              cursor: withdrawing ? 'not-allowed' : 'pointer',
              opacity: withdrawing ? 0.6 : 1,
              textTransform: 'lowercase',
            }}
          >
            {withdrawing ? 'withdrawing...' : isAccepted ? 'yes, opt out' : 'yes, withdraw'}
          </button>
          <button
            onClick={() => setConfirmOpen(false)}
            style={{
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '50px',
              padding: '0.3rem 0.85rem',
              color: '#555',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              cursor: 'pointer',
              textTransform: 'lowercase',
            }}
          >
            cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirmOpen(true)}
      style={{
        marginTop: '0.65rem',
        background: 'transparent',
        border: '1px solid rgba(239,68,68,0.25)',
        borderRadius: '50px',
        padding: '0.28rem 0.8rem',
        color: '#ef4444',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.68rem',
        cursor: 'pointer',
        textTransform: 'lowercase',
        opacity: 0.7,
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
      onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
    >
      {isAccepted ? 'opt out' : 'withdraw'}
    </button>
  );
}

export default function MyFun() {
  const user = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  // Cache fetched event docs to avoid re-fetching
  const eventCache = useRef({});

  useEffect(() => {
    if (!user?.uid) return;

    const q = query(
      collection(db, 'joinRequests'),
      where('userId', '==', user.uid)
    );

    const unsub = onSnapshot(q, async (snap) => {
      const reqs = snap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(r => r.status !== 'passed' && r.status !== 'withdrawn');

      const enriched = await Promise.all(
        reqs.map(async (req) => {
          if (eventCache.current[req.eventId]) {
            return { ...req, event: eventCache.current[req.eventId] };
          }
          try {
            const evSnap = await getDoc(doc(db, 'events', req.eventId));
            const evData = evSnap.exists() ? { id: evSnap.id, ...evSnap.data() } : null;
            if (evData) eventCache.current[req.eventId] = evData;
            return { ...req, event: evData };
          } catch {
            return { ...req, event: null };
          }
        })
      );

      enriched.sort((a, b) => {
        // Surface questions first, then by date
        const aIsQ = a.status === 'info_requested' ? 1 : 0;
        const bIsQ = b.status === 'info_requested' ? 1 : 0;
        if (bIsQ !== aIsQ) return bIsQ - aIsQ;
        const at = a.requestedAt?.toMillis?.() || 0;
        const bt = b.requestedAt?.toMillis?.() || 0;
        return bt - at;
      });

      setRequests(enriched);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });

    return unsub;
  }, [user?.uid]);

  const filtered = (() => {
    if (activeFilter === 'all') return requests;
    if (activeFilter === 'questions') return requests.filter(r => r.status === 'info_requested' || r.status === 'replied');
    return requests.filter(r => r.status === activeFilter);
  })();

  const questionCount = requests.filter(r => r.status === 'info_requested').length;

  const formatDate = (dt) => {
    if (!dt) return '';
    const d = dt.toDate ? dt.toDate() : new Date(dt);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const tabStyle = (active, isQuestions) => ({
    background: active ? (isQuestions ? '#f59e0b' : '#FF2D2D') : 'transparent',
    color: active ? '#000' : (isQuestions ? '#f59e0b' : '#FF2D2D'),
    border: `1px solid ${isQuestions ? (active ? '#f59e0b' : 'rgba(245,158,11,0.5)') : '#FF2D2D'}`,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.72rem',
    padding: '0.35rem 0.9rem',
    borderRadius: '50px',
    cursor: 'pointer',
    textTransform: 'lowercase',
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  });

  return (
    <div style={{ minHeight: '100vh', background: '#000', animation: 'fadeIn 0.2s ease' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cardIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes questionPop { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <NavBar />
      <div className="mobile-page-shell" style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 className="page-title" style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          marginBottom: '0.4rem',
        }}>
          my fun
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.8rem',
          color: '#666',
          textTransform: 'lowercase',
          marginBottom: '1.5rem',
        }}>
          fun you've liked
        </p>

        {/* Filter tabs */}
        <div className="filter-tabs" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {FILTERS.map(f => {
            const isQ = f === 'questions';
            return (
              <button
                key={f}
                style={tabStyle(activeFilter === f, isQ)}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'accepted' ? 'accepted ✓' : f}
                {isQ && questionCount > 0 && (
                  <span style={{
                    background: activeFilter === f ? 'rgba(0,0,0,0.2)' : 'rgba(245,158,11,0.2)',
                    borderRadius: '50%',
                    width: '16px',
                    height: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                  }}>
                    {questionCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {loading && (
          <div style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>loading...</div>
        )}

        {!loading && filtered.length === 0 && (
          <div style={{
            background: '#0d0d0d',
            border: '1px solid #1a1a1a',
            borderRadius: '8px',
            padding: '2.5rem',
            textAlign: 'center',
          }}>
            <p style={{ color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', textTransform: 'lowercase' }}>
              {activeFilter === 'all'
                ? "nothing yet — start swiping on the feed"
                : activeFilter === 'questions'
                  ? 'no questions from hosts'
                  : `no ${activeFilter} events`}
            </p>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.map((req, idx) => {
            const ev = req.event;
            if (!ev) return null;
            const hasQuestion = req.status === 'info_requested' || req.status === 'replied';

            return (
              <div
                key={req.id}
                style={{
                  background: '#0d0d0d',
                  border: hasQuestion
                    ? '1px solid rgba(245,158,11,0.25)'
                    : req.status === 'accepted'
                      ? '1px solid rgba(74,222,128,0.15)'
                      : '1px solid #1a1a1a',
                  borderRadius: '8px',
                  padding: '1.2rem 1.5rem',
                  animation: `cardIn 0.3s ease ${idx * 0.06}s both`,
                  ...(req.status === 'accepted' ? { boxShadow: '0 0 20px rgba(255,45,45,0.08)' } : {}),
                  ...(hasQuestion ? { boxShadow: '0 0 16px rgba(245,158,11,0.06)' } : {}),
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <h3 style={{
                    fontFamily: "grovant, sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#FF2D2D',
                    textTransform: 'lowercase',
                    lineHeight: 1.2,
                    flex: 1,
                    minWidth: 0,
                  }}>
                    {ev.title}
                  </h3>
                  <StatusBadge status={req.status} />
                </div>

                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.78rem',
                  color: '#555',
                  textTransform: 'lowercase',
                  marginTop: '0.5rem',
                }}>
                  {formatDate(ev.datetime)}
                  {ev.locationName && ` · ${ev.locationName}`}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.5rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', color: '#444', textTransform: 'lowercase' }}>
                    {ev.attendeeCount || 0} going
                    {ev.hostCircle && <span> · by {ev.hostCircle}</span>}
                  </div>

                  {req.status === 'accepted' && ev.lat && ev.lng && (
                    <a
                      href={`https://www.google.com/maps?q=${ev.lat},${ev.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.72rem',
                        color: '#4ade80',
                        textTransform: 'lowercase',
                        textDecoration: 'none',
                        border: '1px solid rgba(74,222,128,0.3)',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '50px',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(74,222,128,0.08)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      🗺 get directions
                    </a>
                  )}
                </div>

                {/* Question / reply block */}
                {hasQuestion && req.hostQuestion && (
                  <QuestionBlock
                    key={req.id + '-q'}
                    req={req}
                    onReplySent={() => {}} // onSnapshot handles the update
                  />
                )}

                {/* Opt-out / withdraw */}
                {(req.status === 'pending' || req.status === 'accepted') && (
                  <OptOutButton req={req} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
