import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, increment, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import ProfileAvatar from './ProfileAvatar';
import TagPill from './TagPill';
import VerifiedBadge from './VerifiedBadge';

export default function RequestRow({ request, eventId }) {
  const navigate = useNavigate();
  const [userDoc, setUserDoc] = useState(null);
  const [actionDone, setActionDone] = useState(false);
  const [fading, setFading] = useState(false);
  const [askMode, setAskMode] = useState(false);
  const [question, setQuestion] = useState('');
  const [sending, setSending] = useState(false);
  const [questionSent, setQuestionSent] = useState(!!request.hostQuestion);

  useEffect(() => {
    if (!request.userId) return;
    getDoc(doc(db, 'users', request.userId)).then(snap => {
      if (snap.exists()) setUserDoc(snap.data());
    }).catch(() => {});
  }, [request.userId]);

  const handleAccept = async () => {
    setFading(true);
    try {
      await updateDoc(doc(db, 'joinRequests', request.id), { status: 'accepted' });
      await updateDoc(doc(db, 'events', eventId), { attendeeCount: increment(1) });
    } catch (e) { console.error(e); }
    setTimeout(() => setActionDone(true), 300);
  };

  const handleDecline = async () => {
    setFading(true);
    try {
      await updateDoc(doc(db, 'joinRequests', request.id), { status: 'declined' });
    } catch (e) { console.error(e); }
    setTimeout(() => setActionDone(true), 300);
  };

  const handleAsk = async () => {
    if (!question.trim()) return;
    setSending(true);
    try {
      await updateDoc(doc(db, 'joinRequests', request.id), {
        status: 'info_requested',
        hostQuestion: question.trim(),
        questionedAt: serverTimestamp(),
      });
      setQuestionSent(true);
      setAskMode(false);
    } catch (e) { console.error(e); }
    setSending(false);
  };

  if (actionDone) return null;

  const keywords = userDoc?.keywords || [];
  const displayName = userDoc?.displayName || request.userDisplayName || 'anonymous';
  const requestedAt = request.requestedAt?.toDate ? request.requestedAt.toDate() : null;
  const timeStr = requestedAt
    ? requestedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : '';

  return (
    <div style={{
      padding: '0.75rem 0',
      borderBottom: '1px solid #111',
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.3s ease',
    }}>
      {/* Main row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div
          onClick={() => navigate(`/profile/${request.userId}`)}
          style={{ cursor: 'pointer', flexShrink: 0 }}
        >
          <ProfileAvatar userId={request.userId} size={32} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.82rem',
            color: '#ffffff',
            marginBottom: '0.25rem',
            textTransform: 'lowercase',
          }}>
            <span
              onClick={() => navigate(`/profile/${request.userId}`)}
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FF2D2D'}
              onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
            >{displayName}<VerifiedBadge verified={userDoc?.university_verified} size={13} /></span>
            {timeStr && (
              <span style={{ color: '#444', marginLeft: '0.5rem', fontSize: '0.7rem' }}>{timeStr}</span>
            )}
            {request.status === 'info_requested' && (
              <span style={{
                marginLeft: '0.5rem',
                fontSize: '0.65rem',
                color: '#f59e0b',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '50px',
                padding: '0.1rem 0.4rem',
              }}>
                awaiting reply
              </span>
            )}
          </div>
          {keywords.length > 0 && (
            <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
              {keywords.slice(0, 4).map((kw, i) => (
                <TagPill key={i} label={kw} />
              ))}
            </div>
          )}
          {userDoc?.bio && (
            <div style={{
              color: '#555',
              fontSize: '0.72rem',
              fontFamily: "'IBM Plex Mono', monospace",
              marginTop: '0.25rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {userDoc.bio}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
          <button
            onClick={handleAccept}
            title="accept"
            style={{
              background: 'transparent',
              border: '1px solid rgba(74,222,128,0.4)',
              color: '#4ade80',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.72rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '50px',
              cursor: 'pointer',
              textTransform: 'lowercase',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(74,222,128,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            ✓ let in
          </button>

          <button
            onClick={() => { setAskMode(v => !v); }}
            title="request more info"
            style={{
              background: askMode ? 'rgba(245,158,11,0.12)' : 'transparent',
              border: `1px solid ${questionSent ? 'rgba(245,158,11,0.5)' : 'rgba(245,158,11,0.3)'}`,
              color: '#f59e0b',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.72rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '50px',
              cursor: 'pointer',
              textTransform: 'lowercase',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = askMode ? 'rgba(245,158,11,0.12)' : 'transparent'}
          >
            ? ask
          </button>

          <button
            onClick={handleDecline}
            title="decline"
            style={{
              background: 'transparent',
              border: '1px solid rgba(239,68,68,0.3)',
              color: '#ef4444',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.72rem',
              padding: '0.3rem 0.65rem',
              borderRadius: '50px',
              cursor: 'pointer',
              textTransform: 'lowercase',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            ✗ nope
          </button>
        </div>
      </div>

      {/* Existing question (if already asked) */}
      {questionSent && request.hostQuestion && !askMode && (
        <div style={{
          marginTop: '0.5rem',
          marginLeft: '44px',
          borderRadius: '6px',
          overflow: 'hidden',
          border: '1px solid rgba(245,158,11,0.15)',
        }}>
          <div style={{
            padding: '0.5rem 0.75rem',
            background: 'rgba(245,158,11,0.06)',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.72rem',
            color: '#f59e0b',
          }}>
            asked: "{request.hostQuestion}"
          </div>
          {request.userReply ? (
            <div style={{
              padding: '0.5rem 0.75rem',
              background: 'rgba(245,158,11,0.03)',
              borderTop: '1px solid rgba(245,158,11,0.1)',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.72rem',
              color: '#888',
            }}>
              <span style={{ color: '#555', fontSize: '0.68rem' }}>their reply: </span>
              "{request.userReply}"
            </div>
          ) : (
            <div style={{
              padding: '0.4rem 0.75rem',
              background: '#0a0a0a',
              borderTop: '1px solid rgba(245,158,11,0.08)',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.68rem',
              color: '#444',
            }}>
              awaiting reply...
            </div>
          )}
        </div>
      )}

      {/* Inline ask form */}
      {askMode && (
        <div style={{
          marginTop: '0.6rem',
          marginLeft: '44px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          animation: 'expandIn 0.15s ease',
        }}>
          <style>{`@keyframes expandIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }`}</style>
          <textarea
            autoFocus
            placeholder="what do you need to know? (e.g. how'd you hear about this?)"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            maxLength={200}
            rows={2}
            style={{
              background: '#0d0d0d',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '6px',
              color: '#ffffff',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.78rem',
              padding: '0.5rem 0.75rem',
              outline: 'none',
              resize: 'none',
              width: '100%',
            }}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAsk(); } }}
          />
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <button
              onClick={handleAsk}
              disabled={sending || !question.trim()}
              style={{
                background: '#f59e0b',
                border: 'none',
                borderRadius: '50px',
                padding: '0.3rem 0.9rem',
                color: '#000',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: sending || !question.trim() ? 'not-allowed' : 'pointer',
                opacity: sending || !question.trim() ? 0.5 : 1,
                textTransform: 'lowercase',
              }}
            >
              {sending ? 'sending...' : 'send'}
            </button>
            <button
              onClick={() => { setAskMode(false); setQuestion(''); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#444',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                cursor: 'pointer',
                textTransform: 'lowercase',
              }}
            >
              cancel
            </button>
            <span style={{ color: '#333', fontSize: '0.65rem', fontFamily: "'IBM Plex Mono', monospace", marginLeft: 'auto' }}>
              {question.length}/200
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
