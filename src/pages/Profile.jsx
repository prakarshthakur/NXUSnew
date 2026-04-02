import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import NavBar from '../components/NavBar';
import TagPill from '../components/TagPill';
import AvatarComponent from '../components/ProfileAvatar';
import FlairBadge from '../components/FlairBadge';

const ADMIN_EMAIL = 'prakarshthakur1@gmail.com';
const FLAIR_COLORS = [
  '#FF2D2D', '#fb923c', '#f59e0b', '#4ade80',
  '#2dd4bf', '#60a5fa', '#a78bfa', '#f472b6', '#e5e5e5',
];

export default function Profile() {
  const { userId } = useParams();
  const authUser = useAuth();
  const navigate = useNavigate();

  const targetUserId = userId || authUser?.uid;
  const isOwn = !userId || userId === authUser?.uid;

  const [userDoc, setUserDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editKeywords, setEditKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [editInstagram, setEditInstagram] = useState('');

  // Admin flair editor
  const isAdmin = authUser?.email === ADMIN_EMAIL;
  const [flairEditing, setFlairEditing] = useState(false);
  const [flairText, setFlairText] = useState('');
  const [flairColor, setFlairColor] = useState(FLAIR_COLORS[0]);
  const [flairSaving, setFlairSaving] = useState(false);

  const [eventsHosted, setEventsHosted] = useState(0);
  const [eventsAttended, setEventsAttended] = useState(0);
  const [hostedEventsList, setHostedEventsList] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!targetUserId) return;
    const load = async () => {
      setLoading(true);
      try {
        const snap = await getDoc(doc(db, 'users', targetUserId));
        if (snap.exists()) {
          const data = snap.data();
          setUserDoc(data);
          setEditName(data.displayName || '');
          setEditBio(data.bio || '');
          setEditKeywords(data.keywords || []);
          setEditInstagram(data.instagram || '');
        } else if (isOwn && authUser) {
          const skeleton = {
            displayName: authUser.displayName || '',
            email: authUser.email || '',
            avatarUrl: authUser.photoURL || '',
            bio: '',
            keywords: [],
            createdAt: serverTimestamp(),
          };
          await setDoc(doc(db, 'users', targetUserId), skeleton);
          setUserDoc(skeleton);
          setEditName(skeleton.displayName);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [targetUserId, authUser, isOwn]);

  useEffect(() => {
    if (!targetUserId) return;
    const loadStats = async () => {
      try {
        const hostedSnap = await getDocs(
          query(collection(db, 'events'), where('hostUid', '==', targetUserId))
        );
        setEventsHosted(hostedSnap.size);
        const events = hostedSnap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .sort((a, b) => {
            const ta = a.dateTime?.toDate?.() || new Date(a.dateTime || 0);
            const tb = b.dateTime?.toDate?.() || new Date(b.dateTime || 0);
            return tb - ta;
          });
        setHostedEventsList(events);

        const attendedSnap = await getDocs(
          query(
            collection(db, 'joinRequests'),
            where('userId', '==', targetUserId),
            where('status', '==', 'accepted')
          )
        );
        setEventsAttended(attendedSnap.size);
      } catch {}
    };
    loadStats();
  }, [targetUserId]);

  const handleFlairSave = async () => {
    if (!flairText.trim()) return;
    setFlairSaving(true);
    try {
      await updateDoc(doc(db, 'users', targetUserId), {
        flair: { text: flairText.trim(), color: flairColor },
      });
      setUserDoc(prev => ({ ...prev, flair: { text: flairText.trim(), color: flairColor } }));
      setFlairEditing(false);
    } catch (e) { console.error(e); }
    setFlairSaving(false);
  };

  const handleFlairRemove = async () => {
    setFlairSaving(true);
    try {
      await updateDoc(doc(db, 'users', targetUserId), { flair: null });
      setUserDoc(prev => ({ ...prev, flair: null }));
      setFlairEditing(false);
      setFlairText('');
    } catch (e) { console.error(e); }
    setFlairSaving(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const igHandle = editInstagram.trim().replace(/^@+/, '');
      await updateDoc(doc(db, 'users', targetUserId), {
        displayName: editName.trim(),
        bio: editBio.trim(),
        keywords: editKeywords,
        instagram: igHandle,
      });
      setUserDoc(prev => ({
        ...prev,
        displayName: editName.trim(),
        bio: editBio.trim(),
        keywords: editKeywords,
        instagram: igHandle,
      }));
      setEditing(false);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleKeywordKey = (e) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault();
      if (editKeywords.length >= 6) return;
      const kw = keywordInput.trim().toLowerCase();
      if (!editKeywords.includes(kw)) {
        setEditKeywords(prev => [...prev, kw]);
      }
      setKeywordInput('');
    }
  };

  const removeKeyword = (kw) => {
    setEditKeywords(prev => prev.filter(k => k !== kw));
  };

  const inputStyle = {
    background: '#0d0d0d',
    border: '1px solid #1a1a1a',
    color: '#ffffff',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.88rem',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#000' }}>
        <NavBar />
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 1rem' }}>
          <div style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>loading...</div>
        </div>
      </div>
    );
  }

  const displayName = editing ? editName : (userDoc?.displayName || 'anonymous');
  const bio = editing ? editBio : (userDoc?.bio || '');
  const keywords = editing ? editKeywords : (userDoc?.keywords || []);

  return (
    <div style={{ minHeight: '100vh', background: '#000', animation: 'fadeIn 0.2s ease' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .profile-input:focus { border-color: #FF2D2D !important; }
        .profile-textarea:focus { border-color: #FF2D2D !important; }
      `}</style>
      <NavBar />
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <AvatarComponent
            userId={targetUserId}
            size={96}
            editable={isOwn}
            onUpload={(url) => setUserDoc(prev => ({ ...prev, avatarUrl: url }))}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            {editing ? (
              <input
                className="profile-input"
                style={{ ...inputStyle, fontSize: '1.2rem', marginBottom: '0.5rem' }}
                value={editName}
                onChange={e => setEditName(e.target.value)}
                placeholder="display name"
              />
            ) : (
              <h1 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#FF2D2D',
                textTransform: 'lowercase',
                marginBottom: '0.4rem',
              }}>
                {displayName}
              </h1>
            )}
            {userDoc?.flair && !editing && (
              <div style={{ marginBottom: '0.25rem' }}>
                <FlairBadge flair={userDoc.flair} />
              </div>
            )}
            {userDoc?.foundingMember && !editing && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'rgba(255,45,45,0.08)',
                border: '1px solid rgba(255,45,45,0.25)',
                borderRadius: '50px',
                padding: '0.2rem 0.65rem',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.65rem',
                color: '#FF2D2D',
                textTransform: 'lowercase',
                marginBottom: '0.3rem',
              }}>
                <span style={{ fontSize: '0.6rem' }}>🔴</span> founding 10
              </div>
            )}
            {userDoc?.email && !editing && (
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                color: '#444',
                textTransform: 'lowercase',
              }}>
                {userDoc.email}
              </div>
            )}
            {isOwn && !editing && (
              <button
                onClick={() => setEditing(true)}
                style={{
                  marginTop: '0.5rem',
                  background: 'transparent',
                  border: '1px solid #FF2D2D',
                  borderRadius: '50px',
                  padding: '0.3rem 0.8rem',
                  color: '#FF2D2D',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.72rem',
                  textTransform: 'lowercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                edit
              </button>
            )}
          </div>
        </div>

        {/* Admin flair editor */}
        {isAdmin && !editing && (
          <div style={{
            marginBottom: '1.25rem',
            padding: '0.85rem 1rem',
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '8px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: flairEditing ? '0.75rem' : 0 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: '#333', textTransform: 'lowercase' }}>
                admin · flair {userDoc?.flair ? `— ${userDoc.flair.text}` : '— none'}
              </span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  onClick={() => {
                    setFlairText(userDoc?.flair?.text || '');
                    setFlairColor(userDoc?.flair?.color || FLAIR_COLORS[0]);
                    setFlairEditing(v => !v);
                  }}
                  style={{
                    background: 'transparent', border: '1px solid #222', borderRadius: '50px',
                    padding: '0.2rem 0.6rem', color: '#555', fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem', cursor: 'pointer', textTransform: 'lowercase',
                  }}
                >
                  {flairEditing ? 'cancel' : userDoc?.flair ? 'edit' : '+ add'}
                </button>
                {userDoc?.flair && !flairEditing && (
                  <button
                    onClick={handleFlairRemove}
                    disabled={flairSaving}
                    style={{
                      background: 'transparent', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '50px',
                      padding: '0.2rem 0.6rem', color: '#ef4444', fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.65rem', cursor: 'pointer', textTransform: 'lowercase',
                      opacity: flairSaving ? 0.5 : 1,
                    }}
                  >
                    remove
                  </button>
                )}
              </div>
            </div>

            {flairEditing && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <input
                  value={flairText}
                  onChange={e => setFlairText(e.target.value.slice(0, 22))}
                  placeholder="flair text"
                  maxLength={22}
                  autoFocus
                  style={{
                    background: '#111', border: '1px solid #222', borderRadius: '6px',
                    color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem',
                    padding: '0.45rem 0.65rem', outline: 'none', width: '100%',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = flairColor}
                  onBlur={e => e.currentTarget.style.borderColor = '#222'}
                />
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {FLAIR_COLORS.map(c => (
                    <button
                      key={c}
                      onClick={() => setFlairColor(c)}
                      title={c}
                      style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: c, border: flairColor === c ? '2px solid #fff' : '2px solid transparent',
                        cursor: 'pointer', padding: 0, flexShrink: 0,
                        boxShadow: flairColor === c ? `0 0 0 1px ${c}` : 'none',
                        transition: 'border 0.15s',
                      }}
                    />
                  ))}
                </div>
                {flairText.trim() && (
                  <div>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.62rem', color: '#333', marginRight: '0.4rem' }}>preview:</span>
                    <FlairBadge flair={{ text: flairText, color: flairColor }} />
                  </div>
                )}
                <button
                  onClick={handleFlairSave}
                  disabled={flairSaving || !flairText.trim()}
                  style={{
                    background: flairColor, border: 'none', borderRadius: '50px',
                    padding: '0.4rem 1rem', color: '#000', fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.72rem', fontWeight: 700, textTransform: 'lowercase',
                    cursor: flairSaving || !flairText.trim() ? 'not-allowed' : 'pointer',
                    opacity: flairSaving || !flairText.trim() ? 0.5 : 1,
                    alignSelf: 'flex-start',
                  }}
                >
                  {flairSaving ? 'saving...' : 'save flair'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Stats row */}
        <div className="profile-stats-row" style={{
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#FF2D2D' }}>
              {eventsAttended}
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', color: '#555', textTransform: 'lowercase' }}>
              events attended
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#FF2D2D' }}>
              {eventsHosted}
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', color: '#555', textTransform: 'lowercase' }}>
              events hosted
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ marginBottom: '1.5rem' }}>
          {editing ? (
            <div>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#555',
                marginBottom: '0.5rem',
                textTransform: 'lowercase',
              }}>
                keywords (press enter to add, max 6)
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                {editKeywords.map(kw => (
                  <TagPill key={kw} label={kw} onRemove={() => removeKeyword(kw)} />
                ))}
              </div>
              {editKeywords.length < 6 && (
                <input
                  className="profile-input"
                  style={inputStyle}
                  value={keywordInput}
                  onChange={e => setKeywordInput(e.target.value)}
                  onKeyDown={handleKeywordKey}
                  placeholder="add a keyword..."
                />
              )}
            </div>
          ) : (
            keywords.length > 0 && (
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {keywords.map(kw => (
                  <TagPill key={kw} label={kw} />
                ))}
              </div>
            )
          )}
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '2rem' }}>
          {editing ? (
            <div>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#555',
                marginBottom: '0.35rem',
                textTransform: 'lowercase',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <span>bio</span>
                <span>{editBio.length} / 150</span>
              </div>
              <textarea
                className="profile-textarea"
                style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }}
                maxLength={150}
                value={editBio}
                onChange={e => setEditBio(e.target.value)}
                placeholder="a few words about you..."
              />
            </div>
          ) : (
            bio && (
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.88rem',
                color: '#aaa',
                lineHeight: 1.7,
                textTransform: 'lowercase',
              }}>
                {bio}
              </p>
            )
          )}
        </div>

        {/* Instagram */}
        <div style={{ marginBottom: '1.5rem' }}>
          {editing ? (
            <div>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#555',
                marginBottom: '0.35rem',
                textTransform: 'lowercase',
              }}>
                instagram
              </div>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '0.9rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.88rem',
                  color: '#555',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>@</span>
                <input
                  className="profile-input"
                  style={{ ...inputStyle, paddingLeft: '1.8rem' }}
                  value={editInstagram}
                  onChange={e => setEditInstagram(e.target.value.replace(/^@+/, ''))}
                  placeholder="yourhandle"
                  autoComplete="off"
                  maxLength={30}
                />
              </div>
            </div>
          ) : (
            userDoc?.instagram && (
              <a
                href={`https://instagram.com/${userDoc.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.82rem',
                  color: '#888',
                  textDecoration: 'none',
                  textTransform: 'lowercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#888'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @{userDoc.instagram}
              </a>
            )
          )}
        </div>

        {/* Edit mode actions */}
        {editing && (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                background: '#FF2D2D',
                border: 'none',
                borderRadius: '50px',
                padding: '0.65rem 1.5rem',
                color: '#000',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'lowercase',
                cursor: saving ? 'not-allowed' : 'pointer',
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? 'saving...' : 'save'}
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setEditName(userDoc?.displayName || '');
                setEditBio(userDoc?.bio || '');
                setEditKeywords(userDoc?.keywords || []);
                setEditInstagram(userDoc?.instagram || '');
                setKeywordInput('');
              }}
              style={{
                background: 'transparent',
                border: '1px solid #333',
                borderRadius: '50px',
                padding: '0.65rem 1.5rem',
                color: '#666',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.85rem',
                textTransform: 'lowercase',
                cursor: 'pointer',
              }}
            >
              cancel
            </button>
          </div>
        )}

        {/* Hosted events */}
        {hostedEventsList.length > 0 && (
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              color: '#444',
              textTransform: 'lowercase',
              letterSpacing: '0.08em',
              marginBottom: '0.75rem',
            }}>
              hosted events
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {hostedEventsList.map(event => {
                const dt = event.dateTime?.toDate?.() || (event.dateTime ? new Date(event.dateTime) : null);
                const isPast = dt && dt < new Date();
                return (
                  <div
                    key={event.id}
                    onClick={() => navigate(`/event/${event.id}`)}
                    style={{
                      background: '#0d0d0d',
                      border: '1px solid #1a1a1a',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      cursor: 'pointer',
                      opacity: isPast ? 0.5 : 1,
                      transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#333'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}
                  >
                    <div style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: '#fff',
                      textTransform: 'lowercase',
                      marginBottom: '0.2rem',
                    }}>
                      {event.title}
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      {dt && (
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', color: '#555' }}>
                          {dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                      {event.location && (
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', color: '#555' }}>
                          {event.location}
                        </span>
                      )}
                      {isPast && (
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.62rem', color: '#333' }}>
                          past
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
