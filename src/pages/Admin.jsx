import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  collection, getDocs, doc, deleteDoc,
  query, where, writeBatch, getDoc, setDoc, updateDoc,
  orderBy, serverTimestamp, increment,
} from 'firebase/firestore';

const STATS_REF = () => doc(db, 'public', 'stats');
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import NavBar from '../components/NavBar';

const ADMIN_EMAIL = 'prakarshthakur1@gmail.com';

// ── Shared styles ──────────────────────────────────────────────────────────────

const mono = "'IBM Plex Mono', monospace";

const inputStyle = {
  background: '#0d0d0d',
  border: '1px solid #1a1a1a',
  color: '#ffffff',
  fontFamily: mono,
  fontSize: '0.85rem',
  padding: '0.6rem 0.9rem',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const dangerBtn = {
  background: 'transparent',
  border: '1px solid rgba(239,68,68,0.35)',
  borderRadius: '50px',
  padding: '0.25rem 0.7rem',
  color: '#ef4444',
  fontFamily: mono,
  fontSize: '0.68rem',
  cursor: 'pointer',
  textTransform: 'lowercase',
  transition: 'background 0.15s, border-color 0.15s',
  whiteSpace: 'nowrap',
  flexShrink: 0,
};

const ghostBtn = {
  background: 'transparent',
  border: '1px solid #333',
  borderRadius: '50px',
  padding: '0.25rem 0.7rem',
  color: '#666',
  fontFamily: mono,
  fontSize: '0.68rem',
  cursor: 'pointer',
  textTransform: 'lowercase',
};

// ── Confirm Modal ──────────────────────────────────────────────────────────────

function ConfirmModal({ title, message, onConfirm, onCancel, loading }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.88)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: '#0d0d0d',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        padding: '1.75rem',
        maxWidth: '360px',
        width: '100%',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span style={{ fontFamily: mono, fontSize: '0.88rem', color: '#fff', textTransform: 'lowercase' }}>
            {title}
          </span>
        </div>
        <p style={{
          fontFamily: mono, fontSize: '0.76rem', color: '#666',
          margin: '0 0 1.5rem', textTransform: 'lowercase', lineHeight: 1.7,
        }}>
          {message}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={onConfirm}
            disabled={loading}
            style={{
              background: '#ef4444', border: 'none', borderRadius: '50px',
              padding: '0.5rem 1.2rem', color: '#fff',
              fontFamily: mono, fontSize: '0.78rem',
              fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1, textTransform: 'lowercase',
            }}
          >
            {loading ? 'deleting...' : 'delete'}
          </button>
          <button
            onClick={onCancel}
            disabled={loading}
            style={ghostBtn}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Section wrapper ────────────────────────────────────────────────────────────

function SectionHeader({ title, count, onRefresh, refreshing }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
      <span style={{ fontFamily: mono, fontSize: '0.72rem', color: '#555', textTransform: 'lowercase', letterSpacing: '0.06em' }}>
        {title}
      </span>
      {count != null && (
        <span style={{
          background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '50px',
          padding: '0.1rem 0.5rem', fontFamily: mono, fontSize: '0.62rem', color: '#444',
        }}>
          {count}
        </span>
      )}
      <button
        onClick={onRefresh}
        disabled={refreshing}
        style={{ ...ghostBtn, marginLeft: 'auto', fontSize: '0.62rem' }}
      >
        {refreshing ? '...' : 'refresh'}
      </button>
    </div>
  );
}

// ── Users Tab ─────────────────────────────────────────────────────────────────

function UsersTab() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(null); // { uid, name }
  const [deleting, setDeleting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState('');

  const load = useCallback(async () => {
    setRefreshing(true);
    try {
      const snap = await getDocs(query(collection(db, 'users'), orderBy('createdAt', 'desc')));
      setUsers(snap.docs.map(d => ({ uid: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleDelete = async () => {
    if (!confirmDelete) return;
    setDeleting(true);
    const { uid } = confirmDelete;
    try {
      const batch = writeBatch(db);

      // 1. Delete user's hosted events and their joinRequests
      const eventsSnap = await getDocs(
        query(collection(db, 'events'), where('hostUid', '==', uid))
      );
      for (const evDoc of eventsSnap.docs) {
        const jrSnap = await getDocs(
          query(collection(db, 'joinRequests'), where('eventId', '==', evDoc.id))
        );
        jrSnap.docs.forEach(jr => batch.delete(jr.ref));
        batch.delete(evDoc.ref);
      }

      // 2. Delete user's joinRequests as participant
      const jrSnap = await getDocs(
        query(collection(db, 'joinRequests'), where('userId', '==', uid))
      );
      jrSnap.docs.forEach(jr => batch.delete(jr.ref));

      // 3. Delete the user doc
      batch.delete(doc(db, 'users', uid));

      await batch.commit();

      // Decrement public stats
      const deletedUser = users.find(u => u.uid === uid);
      const statsUpdate = { totalUsers: increment(-1) };
      if (deletedUser?.foundingMember) statsUpdate.foundingUsers = increment(-1);
      await setDoc(STATS_REF(), statsUpdate, { merge: true });

      setUsers(prev => prev.filter(u => u.uid !== uid));
      setConfirmDelete(null);
      showToast(`deleted user and all their content`);
    } catch (e) {
      console.error(e);
      showToast('error deleting user');
    } finally {
      setDeleting(false);
    }
  };

  const filtered = users.filter(u => {
    const q = search.toLowerCase();
    return (
      (u.displayName || '').toLowerCase().includes(q) ||
      (u.email || '').toLowerCase().includes(q)
    );
  });

  if (loading) {
    return <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '2rem 0' }}>loading...</div>;
  }

  return (
    <div>
      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: '50px',
          padding: '0.5rem 1.25rem', fontFamily: mono, fontSize: '0.75rem', color: '#aaa',
          zIndex: 9998, whiteSpace: 'nowrap',
        }}>
          {toast}
        </div>
      )}

      {confirmDelete && (
        <ConfirmModal
          title="delete user"
          message={`delete "${confirmDelete.name}" and all their events, posts, and data? this cannot be undone. their login credentials will remain in firebase auth.`}
          onConfirm={handleDelete}
          onCancel={() => setConfirmDelete(null)}
          loading={deleting}
        />
      )}

      <SectionHeader title="all users" count={filtered.length} onRefresh={load} refreshing={refreshing} />

      {/* Search */}
      <input
        style={{ ...inputStyle, width: '100%', marginBottom: '1rem', boxSizing: 'border-box' }}
        placeholder="search by name or email..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="admin-input"
      />

      {/* Users list */}
      {filtered.length === 0 ? (
        <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '1.5rem 0' }}>
          {search ? 'no users match your search' : 'no users found'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {filtered.map(u => {
            const isAdmin = u.email === ADMIN_EMAIL;
            const joined = u.createdAt?.toDate?.()?.toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric',
            }) || '—';

            return (
              <div
                key={u.uid}
                className="admin-row"
                style={{
                  background: '#0a0a0a',
                  border: '1px solid #1a1a1a',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.1s',
                }}
              >
                {/* Avatar initial */}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: isAdmin ? 'rgba(255,45,45,0.12)' : '#111',
                  border: `1px solid ${isAdmin ? 'rgba(255,45,45,0.3)' : '#222'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {u.avatarUrl ? (
                    <img src={u.avatarUrl} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{
                      fontFamily: 'grovant, sans-serif', fontSize: '0.85rem', fontWeight: 800,
                      color: isAdmin ? '#FF2D2D' : '#444',
                    }}>
                      {(u.displayName || u.email || '?')[0].toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: mono, fontSize: '0.82rem', color: '#e5e5e5',
                      textTransform: 'lowercase', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>
                      {u.displayName || '(no name)'}
                    </span>
                    {isAdmin && (
                      <span style={{
                        background: 'rgba(255,45,45,0.1)', border: '1px solid rgba(255,45,45,0.25)',
                        borderRadius: '50px', padding: '0.1rem 0.45rem',
                        fontFamily: mono, fontSize: '0.58rem', color: '#FF2D2D',
                      }}>
                        admin
                      </span>
                    )}
                    {u.foundingMember && (
                      <span style={{
                        background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                        borderRadius: '50px', padding: '0.1rem 0.45rem',
                        fontFamily: mono, fontSize: '0.58rem', color: '#f59e0b',
                      }}>
                        founding
                      </span>
                    )}
                  </div>
                  <div style={{ fontFamily: mono, fontSize: '0.68rem', color: '#444', marginTop: '0.1rem' }}>
                    {u.email || '(no email)'}
                  </div>
                </div>

                {/* Date */}
                <span style={{
                  fontFamily: mono, fontSize: '0.62rem', color: '#2a2a2a',
                  flexShrink: 0, display: 'none',
                }} className="admin-date">
                  {joined}
                </span>

                {/* Delete */}
                {!isAdmin && (
                  <button
                    style={dangerBtn}
                    onClick={() => setConfirmDelete({ uid: u.uid, name: u.displayName || u.email })}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(239,68,68,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)';
                    }}
                  >
                    delete
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .admin-input:focus { border-color: #FF2D2D !important; }
        @media (min-width: 560px) { .admin-date { display: inline !important; } }
      `}</style>
    </div>
  );
}

// ── Events Tab ────────────────────────────────────────────────────────────────

const FLAIR_COLORS = [
  '#FF2D2D', '#fb923c', '#f59e0b', '#4ade80',
  '#2dd4bf', '#60a5fa', '#a78bfa', '#f472b6', '#e5e5e5',
];

function EventsTab() {
  const [events, setEvents] = useState([]);
  const [hostNames, setHostNames] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState('');
  const [flairEdit, setFlairEdit] = useState(null); // { id } — which row is open
  const [flairText, setFlairText] = useState('');
  const [flairColor, setFlairColor] = useState(FLAIR_COLORS[0]);
  const [flairSaving, setFlairSaving] = useState(false);

  const load = useCallback(async () => {
    setRefreshing(true);
    try {
      const snap = await getDocs(query(collection(db, 'events'), orderBy('createdAt', 'desc')));
      const evList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setEvents(evList);

      // Batch-load host names
      const uniqueHosts = [...new Set(evList.map(e => e.hostUid).filter(Boolean))];
      const names = {};
      await Promise.all(uniqueHosts.map(async uid => {
        try {
          const u = await getDoc(doc(db, 'users', uid));
          names[uid] = u.exists() ? (u.data().displayName || u.data().email || uid) : uid;
        } catch { names[uid] = uid; }
      }));
      setHostNames(names);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const openFlairEdit = (ev) => {
    setFlairEdit({ id: ev.id });
    setFlairText(ev.flair?.text || '');
    setFlairColor(ev.flair?.color || FLAIR_COLORS[0]);
  };

  const handleFlairSave = async (eventId) => {
    if (!flairText.trim()) return;
    setFlairSaving(true);
    try {
      await updateDoc(doc(db, 'events', eventId), { flair: { text: flairText.trim(), color: flairColor } });
      setEvents(prev => prev.map(e => e.id === eventId ? { ...e, flair: { text: flairText.trim(), color: flairColor } } : e));
      setFlairEdit(null);
      showToast('flair saved');
    } catch (e) { console.error(e); showToast('error saving flair'); }
    finally { setFlairSaving(false); }
  };

  const handleFlairRemove = async (eventId) => {
    setFlairSaving(true);
    try {
      await updateDoc(doc(db, 'events', eventId), { flair: null });
      setEvents(prev => prev.map(e => e.id === eventId ? { ...e, flair: null } : e));
      setFlairEdit(null);
      showToast('flair removed');
    } catch (e) { console.error(e); }
    finally { setFlairSaving(false); }
  };

  const handleDelete = async () => {
    if (!confirmDelete) return;
    setDeleting(true);
    const { id } = confirmDelete;
    try {
      const batch = writeBatch(db);

      // Delete all joinRequests for this event
      const jrSnap = await getDocs(
        query(collection(db, 'joinRequests'), where('eventId', '==', id))
      );
      jrSnap.docs.forEach(jr => batch.delete(jr.ref));
      batch.delete(doc(db, 'events', id));

      await batch.commit();
      setEvents(prev => prev.filter(e => e.id !== id));
      setConfirmDelete(null);
      showToast('event deleted');
    } catch (e) {
      console.error(e);
      showToast('error deleting event');
    } finally {
      setDeleting(false);
    }
  };

  const filtered = events.filter(e => {
    const q = search.toLowerCase();
    return (
      (e.title || '').toLowerCase().includes(q) ||
      (hostNames[e.hostUid] || '').toLowerCase().includes(q) ||
      (e.locationName || '').toLowerCase().includes(q)
    );
  });

  if (loading) {
    return <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '2rem 0' }}>loading...</div>;
  }

  return (
    <div>
      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: '50px',
          padding: '0.5rem 1.25rem', fontFamily: mono, fontSize: '0.75rem', color: '#aaa',
          zIndex: 9998, whiteSpace: 'nowrap',
        }}>
          {toast}
        </div>
      )}

      {confirmDelete && (
        <ConfirmModal
          title="delete event"
          message={`delete "${confirmDelete.title}" and all its join requests? this cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setConfirmDelete(null)}
          loading={deleting}
        />
      )}

      <SectionHeader title="all events" count={filtered.length} onRefresh={load} refreshing={refreshing} />

      <input
        style={{ ...inputStyle, width: '100%', marginBottom: '1rem', boxSizing: 'border-box' }}
        placeholder="search by title, host, or location..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="admin-input"
      />

      {filtered.length === 0 ? (
        <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '1.5rem 0' }}>
          {search ? 'no events match your search' : 'no events found'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {filtered.map(ev => {
            const dt = ev.dateTime?.toDate?.() || (ev.datetime?.toDate?.()) || null;
            const isPast = dt && dt < new Date();
            const dateStr = dt ? dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';

            const isFlairOpen = flairEdit?.id === ev.id;
            return (
              <div
                key={ev.id}
                style={{
                  background: '#0a0a0a',
                  border: '1px solid #1a1a1a',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  opacity: isPast ? 0.6 : 1,
                }}
              >
                {/* Main row */}
                <div
                  className="admin-row"
                  style={{
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'background 0.1s',
                  }}
                >
                  {/* Type badge */}
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '8px',
                    background: '#111', border: '1px solid #222',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ev.eventType === 'online' ? '#60a5fa' : '#4ade80'} strokeWidth="2">
                      {ev.eventType === 'online'
                        ? <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>
                        : <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
                      }
                    </svg>
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'grovant, sans-serif', fontSize: '0.88rem', fontWeight: 700,
                      color: '#e5e5e5', textTransform: 'lowercase',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      marginBottom: '0.15rem',
                    }}>
                      {ev.title || '(no title)'}
                    </div>
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontFamily: mono, fontSize: '0.62rem', color: '#444' }}>
                        by {hostNames[ev.hostUid] || '...'}
                      </span>
                      <span style={{ fontFamily: mono, fontSize: '0.62rem', color: '#333' }}>{dateStr}</span>
                      {isPast && <span style={{ fontFamily: mono, fontSize: '0.58rem', color: '#2a2a2a' }}>past</span>}
                      {ev.flair?.text && (
                        <span style={{
                          background: ev.flair.color + '18', border: `1px solid ${ev.flair.color}55`,
                          borderRadius: '50px', padding: '0.1rem 0.45rem',
                          fontFamily: mono, fontSize: '0.58rem', color: ev.flair.color,
                        }}>
                          {ev.flair.text}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Flair button */}
                  <button
                    style={{
                      ...ghostBtn,
                      borderColor: isFlairOpen ? '#FF2D2D' : '#333',
                      color: isFlairOpen ? '#FF2D2D' : '#666',
                      fontSize: '0.65rem',
                    }}
                    onClick={() => isFlairOpen ? setFlairEdit(null) : openFlairEdit(ev)}
                  >
                    {ev.flair?.text ? 'edit flair' : '+ flair'}
                  </button>

                  {/* Delete */}
                  <button
                    style={dangerBtn}
                    onClick={() => setConfirmDelete({ id: ev.id, title: ev.title || 'this event' })}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)'; }}
                  >
                    delete
                  </button>
                </div>

                {/* Inline flair editor */}
                {isFlairOpen && (
                  <div style={{
                    borderTop: '1px solid #1a1a1a',
                    padding: '0.75rem 1rem',
                    background: '#0d0d0d',
                    display: 'flex', flexDirection: 'column', gap: '0.6rem',
                    animation: 'expandIn 0.15s ease',
                  }}>
                    <style>{`@keyframes expandIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`}</style>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input
                        style={{ ...inputStyle, flex: 1, fontSize: '0.8rem', padding: '0.45rem 0.75rem' }}
                        placeholder="flair label (e.g. featured, hot, new)"
                        value={flairText}
                        onChange={e => setFlairText(e.target.value)}
                        className="admin-input"
                        maxLength={24}
                        autoFocus
                        onKeyDown={e => e.key === 'Enter' && handleFlairSave(ev.id)}
                      />
                      <button
                        onClick={() => handleFlairSave(ev.id)}
                        disabled={flairSaving || !flairText.trim()}
                        style={{
                          background: flairColor, border: 'none', borderRadius: '8px',
                          padding: '0.45rem 1rem', color: '#000',
                          fontFamily: mono, fontSize: '0.75rem', fontWeight: 700,
                          cursor: flairSaving || !flairText.trim() ? 'not-allowed' : 'pointer',
                          opacity: flairSaving || !flairText.trim() ? 0.5 : 1,
                          textTransform: 'lowercase', whiteSpace: 'nowrap',
                        }}
                      >
                        {flairSaving ? '...' : 'save'}
                      </button>
                      {ev.flair?.text && (
                        <button
                          onClick={() => handleFlairRemove(ev.id)}
                          disabled={flairSaving}
                          style={{ ...dangerBtn, padding: '0.45rem 0.75rem' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)'; }}
                        >
                          remove
                        </button>
                      )}
                    </div>
                    {/* Color swatches */}
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {FLAIR_COLORS.map(c => (
                        <button
                          key={c}
                          onClick={() => setFlairColor(c)}
                          style={{
                            width: '20px', height: '20px', borderRadius: '50%',
                            background: c, border: flairColor === c ? '2px solid #fff' : '2px solid transparent',
                            cursor: 'pointer', padding: 0, flexShrink: 0,
                            boxShadow: flairColor === c ? `0 0 0 1px ${c}` : 'none',
                          }}
                        />
                      ))}
                      {/* Preview */}
                      {flairText.trim() && (
                        <span style={{
                          marginLeft: '0.5rem',
                          background: flairColor + '18', border: `1px solid ${flairColor}55`,
                          borderRadius: '50px', padding: '0.1rem 0.55rem',
                          fontFamily: mono, fontSize: '0.62rem', color: flairColor,
                          alignSelf: 'center',
                        }}>
                          {flairText.trim()}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Email Suffixes Tab ────────────────────────────────────────────────────────

function EmailSuffixesTab() {
  const [suffixes, setSuffixes] = useState(null); // null = loading
  const [newSuffix, setNewSuffix] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const CONFIG_DOC = doc(db, 'config', 'emailSuffixes');

  const load = async () => {
    try {
      const snap = await getDoc(CONFIG_DOC);
      setSuffixes(snap.exists() ? (snap.data().suffixes || []) : []);
    } catch (e) {
      console.error(e);
      setSuffixes([]);
    }
  };

  useEffect(() => { load(); }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const validateSuffix = (s) => {
    const trimmed = s.trim().toLowerCase();
    if (!trimmed) return 'enter a suffix';
    if (!trimmed.startsWith('@')) return 'suffix must start with @';
    if (!trimmed.includes('.')) return 'suffix must include a domain (e.g. @nyu.edu)';
    if (trimmed.length < 4) return 'suffix too short';
    return null;
  };

  const handleAdd = async () => {
    const trimmed = newSuffix.trim().toLowerCase();
    const err = validateSuffix(trimmed);
    if (err) { setError(err); return; }
    if (suffixes.includes(trimmed)) { setError('already added'); return; }

    setSaving(true);
    setError('');
    try {
      const updated = [...suffixes, trimmed];
      await setDoc(CONFIG_DOC, { suffixes: updated, updatedAt: serverTimestamp() });
      setSuffixes(updated);
      setNewSuffix('');
      showToast(`added ${trimmed}`);
    } catch (e) {
      console.error(e);
      setError('failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleRemove = async (suffix) => {
    setSaving(true);
    try {
      const updated = suffixes.filter(s => s !== suffix);
      await setDoc(CONFIG_DOC, { suffixes: updated, updatedAt: serverTimestamp() });
      setSuffixes(updated);
      showToast(`removed ${suffix}`);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  if (suffixes === null) {
    return <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '2rem 0' }}>loading...</div>;
  }

  return (
    <div>
      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: '50px',
          padding: '0.5rem 1.25rem', fontFamily: mono, fontSize: '0.75rem', color: '#aaa',
          zIndex: 9998, whiteSpace: 'nowrap',
        }}>
          {toast}
        </div>
      )}

      <SectionHeader title="allowed email suffixes" count={suffixes.length} onRefresh={load} refreshing={false} />

      {/* Status notice */}
      <div style={{
        background: suffixes.length === 0 ? 'rgba(245,158,11,0.05)' : 'rgba(74,222,128,0.05)',
        border: `1px solid ${suffixes.length === 0 ? 'rgba(245,158,11,0.15)' : 'rgba(74,222,128,0.15)'}`,
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        marginBottom: '1.25rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.5rem',
      }}>
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: suffixes.length === 0 ? '#f59e0b' : '#4ade80',
          marginTop: '0.35rem', flexShrink: 0,
        }} />
        <p style={{ fontFamily: mono, fontSize: '0.72rem', color: '#666', margin: 0, lineHeight: 1.7 }}>
          {suffixes.length === 0
            ? 'no restrictions set — all email addresses can sign up'
            : `only emails ending with the listed suffixes can create accounts. admin (${ADMIN_EMAIL}) is always allowed.`
          }
        </p>
      </div>

      {/* Add suffix */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: mono, fontSize: '0.68rem', color: '#555', marginBottom: '0.4rem', textTransform: 'lowercase' }}>
          add email suffix
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            style={{ ...inputStyle, flex: 1 }}
            placeholder="@nyu.ac.ae"
            value={newSuffix}
            onChange={e => { setNewSuffix(e.target.value); setError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            className="admin-input"
            disabled={saving}
          />
          <button
            onClick={handleAdd}
            disabled={saving || !newSuffix.trim()}
            style={{
              background: '#FF2D2D', border: 'none', borderRadius: '8px',
              padding: '0.6rem 1.1rem', color: '#000',
              fontFamily: mono, fontSize: '0.78rem', fontWeight: 700,
              cursor: saving || !newSuffix.trim() ? 'not-allowed' : 'pointer',
              opacity: saving || !newSuffix.trim() ? 0.5 : 1,
              textTransform: 'lowercase', whiteSpace: 'nowrap',
              transition: 'opacity 0.15s',
            }}
          >
            {saving ? '...' : '+ add'}
          </button>
        </div>
        {error && (
          <p style={{ fontFamily: mono, fontSize: '0.7rem', color: '#ef4444', margin: '0.35rem 0 0', textTransform: 'lowercase' }}>
            {error}
          </p>
        )}
      </div>

      {/* Suffix list */}
      {suffixes.length === 0 ? (
        <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '1rem 0' }}>
          no suffixes added — open registration
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {suffixes.map(suffix => (
            <div
              key={suffix}
              className="admin-row"
              style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '8px',
                padding: '0.65rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.1s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: mono, fontSize: '0.82rem', color: '#e5e5e5' }}>
                  {suffix}
                </span>
              </div>
              <button
                style={dangerBtn}
                onClick={() => handleRemove(suffix)}
                disabled={saving}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(239,68,68,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)';
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Verified Students Tab ─────────────────────────────────────────────────────

function VerifiedStudentsTab() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const FLAIR_COLORS = { MDX: '#7C3AED', HWUD: '#1D4ED8', UOWD: '#059669' };

  const load = useCallback(async () => {
    setRefreshing(true);
    try {
      const snap = await getDocs(
        query(collection(db, 'users'), where('university_verified', '==', true))
      );
      setStudents(snap.docs.map(d => ({ uid: d.id, ...d.data() })));
    } catch (e) { console.error(e); }
    finally { setLoading(false); setRefreshing(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = students
    .filter(u => {
      const q = search.toLowerCase();
      return (
        (u.displayName || '').toLowerCase().includes(q) ||
        (u.universityEmail || '').toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const ta = a.universityVerifiedAt?.toMillis?.() || 0;
      const tb = b.universityVerifiedAt?.toMillis?.() || 0;
      return sortAsc ? ta - tb : tb - ta;
    });

  if (loading) return <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '2rem 0' }}>loading...</div>;

  return (
    <div>
      <SectionHeader title="verified students" count={filtered.length} onRefresh={load} refreshing={refreshing} />

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
        <input
          style={{ ...inputStyle, flex: 1, boxSizing: 'border-box' }}
          placeholder="search by name or email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="admin-input"
        />
        <button
          onClick={() => setSortAsc(v => !v)}
          style={{ ...ghostBtn, whiteSpace: 'nowrap', fontSize: '0.7rem' }}
        >
          date {sortAsc ? '↑' : '↓'}
        </button>
      </div>

      {filtered.length === 0 ? (
        <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '1.5rem 0' }}>
          {search ? 'no matches' : 'no verified students yet'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {filtered.map(u => {
            const flairColor = FLAIR_COLORS[u.universityFlair] || '#555';
            const verifiedDate = u.universityVerifiedAt?.toDate?.()?.toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric',
            }) || '—';
            return (
              <div
                key={u.uid}
                className="admin-row"
                style={{
                  background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '8px',
                  padding: '0.75rem 1rem', display: 'flex', alignItems: 'center',
                  gap: '0.75rem', transition: 'background 0.1s',
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: '#111', border: '1px solid #222',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {u.avatarUrl ? (
                    <img src={u.avatarUrl} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontFamily: 'grovant, sans-serif', fontSize: '0.85rem', fontWeight: 800, color: '#444' }}>
                      {(u.displayName || u.email || '?')[0].toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: mono, fontSize: '0.82rem', color: '#e5e5e5', textTransform: 'lowercase' }}>
                      {u.displayName || '(no name)'}
                    </span>
                    {/* Verified badge */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    {u.universityFlair && (
                      <span style={{
                        background: flairColor + '22', border: `1px solid ${flairColor}55`,
                        borderRadius: '50px', padding: '0.1rem 0.45rem',
                        fontFamily: mono, fontSize: '0.58rem', color: flairColor,
                      }}>
                        {u.universityFlair}
                      </span>
                    )}
                  </div>
                  <div style={{ fontFamily: mono, fontSize: '0.68rem', color: '#444', marginTop: '0.1rem' }}>
                    {u.universityEmail || '(no email)'}
                  </div>
                </div>

                {/* Date */}
                <span style={{ fontFamily: mono, fontSize: '0.62rem', color: '#333', flexShrink: 0, textAlign: 'right' }}>
                  {verifiedDate}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── University Email Suffixes Tab ─────────────────────────────────────────────

function UniversityEmailSuffixesTab() {
  const [suffixes, setSuffixes] = useState(null);
  const [newSuffix, setNewSuffix] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const CONFIG_DOC = doc(db, 'config', 'universityEmailSuffixes');

  const load = async () => {
    try {
      const snap = await getDoc(CONFIG_DOC);
      setSuffixes(snap.exists() ? (snap.data().suffixes || []) : []);
    } catch (e) { console.error(e); setSuffixes([]); }
  };

  useEffect(() => { load(); }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  const validateSuffix = (s) => {
    const t = s.trim().toLowerCase();
    if (!t) return 'enter a suffix';
    if (!t.startsWith('@')) return 'suffix must start with @';
    if (!t.includes('.')) return 'suffix must include a domain (e.g. @mdx.ac.ae)';
    if (t.length < 4) return 'suffix too short';
    return null;
  };

  const handleAdd = async () => {
    const trimmed = newSuffix.trim().toLowerCase();
    const err = validateSuffix(trimmed);
    if (err) { setError(err); return; }
    if (suffixes.includes(trimmed)) { setError('already added'); return; }
    setSaving(true); setError('');
    try {
      const updated = [...suffixes, trimmed];
      await setDoc(CONFIG_DOC, { suffixes: updated, updatedAt: serverTimestamp() });
      setSuffixes(updated);
      setNewSuffix('');
      showToast(`added ${trimmed}`);
    } catch (e) { console.error(e); setError('failed to save'); }
    finally { setSaving(false); }
  };

  const handleRemove = async (suffix) => {
    setSaving(true);
    try {
      const updated = suffixes.filter(s => s !== suffix);
      await setDoc(CONFIG_DOC, { suffixes: updated, updatedAt: serverTimestamp() });
      setSuffixes(updated);
      showToast(`removed ${suffix}`);
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  };

  if (suffixes === null) return <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '2rem 0' }}>loading...</div>;

  return (
    <div>
      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: '50px',
          padding: '0.5rem 1.25rem', fontFamily: mono, fontSize: '0.75rem', color: '#aaa',
          zIndex: 9998, whiteSpace: 'nowrap',
        }}>
          {toast}
        </div>
      )}

      <SectionHeader title="allowed university email suffixes" count={suffixes.length} onRefresh={load} refreshing={false} />

      <div style={{
        background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.15)',
        borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.25rem',
        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', marginTop: '0.35rem', flexShrink: 0 }} />
        <p style={{ fontFamily: mono, fontSize: '0.72rem', color: '#666', margin: 0, lineHeight: 1.7 }}>
          {suffixes.length === 0
            ? 'no restrictions — any email can be used for university verification'
            : `only these email domains can be used for student verification on the onboarding page.`
          }
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: mono, fontSize: '0.68rem', color: '#555', marginBottom: '0.4rem', textTransform: 'lowercase' }}>
          add university email suffix
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            style={{ ...inputStyle, flex: 1 }}
            placeholder="@mdx.ac.ae"
            value={newSuffix}
            onChange={e => { setNewSuffix(e.target.value); setError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            className="admin-input"
            disabled={saving}
          />
          <button
            onClick={handleAdd}
            disabled={saving || !newSuffix.trim()}
            style={{
              background: '#FF2D2D', border: 'none', borderRadius: '8px',
              padding: '0.6rem 1.1rem', color: '#000',
              fontFamily: mono, fontSize: '0.78rem', fontWeight: 700,
              cursor: saving || !newSuffix.trim() ? 'not-allowed' : 'pointer',
              opacity: saving || !newSuffix.trim() ? 0.5 : 1,
              textTransform: 'lowercase', whiteSpace: 'nowrap', transition: 'opacity 0.15s',
            }}
          >
            {saving ? '...' : '+ add'}
          </button>
        </div>
        {error && <p style={{ fontFamily: mono, fontSize: '0.7rem', color: '#ef4444', margin: '0.35rem 0 0', textTransform: 'lowercase' }}>{error}</p>}
      </div>

      {suffixes.length === 0 ? (
        <div style={{ fontFamily: mono, fontSize: '0.78rem', color: '#333', padding: '1rem 0' }}>no suffixes added</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {suffixes.map(suffix => (
            <div
              key={suffix}
              className="admin-row"
              style={{
                background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '8px',
                padding: '0.65rem 1rem', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', transition: 'background 0.1s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontFamily: mono, fontSize: '0.82rem', color: '#e5e5e5' }}>{suffix}</span>
              </div>
              <button
                style={dangerBtn}
                onClick={() => handleRemove(suffix)}
                disabled={saving}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)'; }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Admin Page ───────────────────────────────────────────────────────────

const TABS = [
  { key: 'users', label: 'users' },
  { key: 'events', label: 'events' },
  { key: 'suffixes', label: 'email access' },
  { key: 'verified', label: 'verified students' },
  { key: 'uniSuffixes', label: 'uni email suffixes' },
];

export default function Admin() {
  const user = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    if (user === null) navigate('/login', { replace: true });
    if (user && user.email !== ADMIN_EMAIL) navigate('/feed', { replace: true });
  }, [user, navigate]);

  if (!user || user.email !== ADMIN_EMAIL) return null;

  return (
    <div style={{ minHeight: '100vh', background: '#000', animation: 'fadeIn 0.2s ease' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .admin-row:hover { background: #0f0f0f !important; }
        .admin-input:focus { border-color: #FF2D2D !important; }
      `}</style>
      <NavBar />
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '1.5rem 1rem 4rem' }}>

        {/* Page header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          marginBottom: '1.75rem', paddingBottom: '1.25rem',
          borderBottom: '1px solid #111',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF2D2D', flexShrink: 0 }} />
          <h1 style={{
            fontFamily: 'grovant, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#FF2D2D',
            textTransform: 'lowercase',
            margin: 0,
          }}>
            admin
          </h1>
          <span style={{
            fontFamily: mono, fontSize: '0.62rem', color: '#2a2a2a',
            marginLeft: 'auto',
          }}>
            {ADMIN_EMAIL}
          </span>
        </div>

        {/* Stats bar */}
        <StatsBar />

        {/* Tab navigation */}
        <div style={{
          display: 'flex', gap: '0.4rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                fontFamily: mono,
                fontSize: '0.78rem',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                border: '1px solid #FF2D2D',
                background: activeTab === tab.key ? '#FF2D2D' : 'transparent',
                color: activeTab === tab.key ? '#000' : '#FF2D2D',
                cursor: 'pointer',
                textTransform: 'lowercase',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'users' && <UsersTab />}
        {activeTab === 'events' && <EventsTab />}
        {activeTab === 'suffixes' && <EmailSuffixesTab />}
        {activeTab === 'verified' && <VerifiedStudentsTab />}
        {activeTab === 'uniSuffixes' && <UniversityEmailSuffixesTab />}
      </div>
    </div>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────

function StatsBar() {
  const [stats, setStats] = useState({ users: '—', events: '—', requests: '—' });
  const [syncing, setSyncing] = useState(false);

  const syncPublicStats = useCallback(async () => {
    setSyncing(true);
    try {
      const [uSnap, foundingSnap, eSnap, rSnap] = await Promise.all([
        getDocs(collection(db, 'users')),
        getDocs(query(collection(db, 'users'), where('foundingMember', '==', true))),
        getDocs(collection(db, 'events')),
        getDocs(query(collection(db, 'joinRequests'), where('status', '==', 'pending'))),
      ]);
      await setDoc(STATS_REF(), {
        totalUsers: uSnap.size,
        foundingUsers: foundingSnap.size,
      });
      setStats({ users: uSnap.size, events: eSnap.size, requests: rSnap.size });
    } catch (e) {
      console.error(e);
    } finally {
      setSyncing(false);
    }
  }, []);

  useEffect(() => { syncPublicStats(); }, [syncPublicStats]);

  const items = [
    { label: 'total users', value: stats.users },
    { label: 'total events', value: stats.events },
    { label: 'pending requests', value: stats.requests },
  ];

  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem', marginBottom: '0.5rem',
      }}>
        {items.map(item => (
          <div key={item.label} style={{
            background: '#0a0a0a', border: '1px solid #1a1a1a',
            borderRadius: '10px', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.25rem',
          }}>
            <span style={{ fontFamily: 'grovant, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#FF2D2D' }}>
              {item.value}
            </span>
            <span style={{ fontFamily: mono, fontSize: '0.65rem', color: '#444', textTransform: 'lowercase' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={syncPublicStats}
        disabled={syncing}
        style={{
          background: 'transparent', border: '1px solid #1a1a1a', borderRadius: '50px',
          padding: '0.3rem 0.85rem', fontFamily: mono, fontSize: '0.65rem',
          color: syncing ? '#444' : '#555', cursor: syncing ? 'not-allowed' : 'pointer',
          textTransform: 'lowercase', transition: 'color 0.15s, border-color 0.15s',
        }}
        onMouseEnter={e => { if (!syncing) { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.borderColor = '#333'; } }}
        onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
      >
        {syncing ? 'syncing...' : '↻ sync public member count'}
      </button>
    </div>
  );
}
