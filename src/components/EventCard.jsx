import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import ProfileAvatar from './ProfileAvatar';
import VerifiedBadge from './VerifiedBadge';
import FlairBadge from './FlairBadge';

const UNI_FLAIR_COLORS = { MDX: '#7C3AED', HWUD: '#1D4ED8', UOWD: '#059669' };

export default function EventCard({ event, style, onTap }) {
  const [hostName, setHostName] = useState('');
  const [hostVerified, setHostVerified] = useState(false);
  const [hostUniFlair, setHostUniFlair] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!event.hostUid) return;
    getDoc(doc(db, 'users', event.hostUid)).then(snap => {
      if (snap.exists()) {
        setHostName(snap.data().displayName || 'anonymous');
        setHostVerified(snap.data().university_verified || false);
        setHostUniFlair(snap.data().universityFlair || null);
      }
    }).catch(() => {});
  }, [event.hostUid]);

  const formatDate = (dt) => {
    if (!dt) return '';
    const d = dt.toDate ? dt.toDate() : new Date(dt);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
      ' · ' +
      d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div
      onClick={onTap}
      style={{
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255,45,45,0.2)',
        borderRadius: '20px',
        padding: '2rem',
        cursor: 'pointer',
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        ...style,
      }}
    >
      <div>
        <h2 style={{
          fontFamily: "grovant, sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          color: '#FF2D2D',
          textTransform: 'lowercase',
          lineHeight: 1.1,
          marginBottom: '0.4rem',
        }}>
          {event.title}
        </h2>
        {event.flair?.text && (
          <div style={{ marginBottom: '0.3rem' }}>
            <FlairBadge flair={event.flair} size="sm" />
          </div>
        )}
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.8rem',
          color: '#666',
          textTransform: 'lowercase',
        }}>
          {formatDate(event.datetime)}
        </div>
      </div>

      {event.locationName && (
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          color: '#666',
          textTransform: 'lowercase',
        }}>
          📍 {event.locationName}
        </div>
      )}

      {event.description && (
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.9rem',
          color: '#aaa',
          lineHeight: 1.6,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textTransform: 'lowercase',
        }}>
          {event.description}
        </div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingTop: '0.5rem',
      }}>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${event.hostUid}`);
          }}
        >
          <ProfileAvatar userId={event.hostUid} size={28} />
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
            {hostVerified && hostUniFlair && UNI_FLAIR_COLORS[hostUniFlair] && (
              <span style={{
                marginLeft: '0.25rem',
                background: UNI_FLAIR_COLORS[hostUniFlair] + '22',
                border: `1px solid ${UNI_FLAIR_COLORS[hostUniFlair]}55`,
                borderRadius: '50px',
                padding: '0.05rem 0.4rem',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.58rem',
                fontWeight: 700,
                color: UNI_FLAIR_COLORS[hostUniFlair],
              }}>
                {hostUniFlair}
              </span>
            )}
          </span>
        </div>

        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.75rem',
          color: '#555',
          textTransform: 'lowercase',
        }}>
          {event.attendeeCount || 0} going
        </div>
      </div>

      <div style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.7rem',
        color: '#444',
        textAlign: 'right',
        textTransform: 'lowercase',
        marginTop: '-0.25rem',
      }}>
        tap for details
      </div>
    </div>
  );
}
