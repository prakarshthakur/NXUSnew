import React, { useState, useRef, useEffect, useCallback } from 'react';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ProfileAvatar from './ProfileAvatar';

export default function UserSearch({ onClose, mobile = false }) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on outside click (desktop only)
  useEffect(() => {
    if (mobile) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose, mobile]);

  const search = useCallback(async (value) => {
    const t = value.trim().toLowerCase();
    if (!t) { setResults([]); return; }
    setSearching(true);
    try {
      const snap = await getDocs(query(
        collection(db, 'users'),
        where('username', '>=', t),
        where('username', '<=', t + '\uf8ff'),
        limit(8)
      ));
      setResults(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch { setResults([]); }
    setSearching(false);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setTerm(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(val), 280);
  };


  return (
    <div
      ref={panelRef}
      style={{
        position: mobile ? 'static' : 'absolute',
        top: mobile ? undefined : 'calc(100% + 8px)',
        right: mobile ? undefined : 0,
        width: mobile ? '100%' : '280px',
        background: '#0d0d0d',
        border: '1px solid #222',
        borderRadius: '10px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        zIndex: 2000,
        overflow: 'hidden',
        animation: 'searchIn 0.15s ease',
      }}
    >
      <style>{`
        @keyframes searchIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Input row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 0.85rem', borderBottom: '1px solid #1a1a1a' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          ref={inputRef}
          value={term}
          onChange={handleChange}
          placeholder="search by username"
          autoComplete="off"
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem',
          }}
        />
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: '0.9rem', lineHeight: 1 }}>×</button>
      </div>

      {/* Results */}
      <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
        {searching && (
          <div style={{ padding: '0.75rem 0.85rem', color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem' }}>
            searching...
          </div>
        )}
        {!searching && term && results.length === 0 && (
          <div style={{ padding: '0.75rem 0.85rem', color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem' }}>
            no users found
          </div>
        )}
        {results.map(u => (
          <a
            key={u.id}
            href={u.username ? `/u/${u.username}` : `/profile/${u.id}`}
            onClick={onClose}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.65rem',
              width: '100%', background: 'transparent',
              padding: '0.55rem 0.85rem', cursor: 'pointer', textAlign: 'left',
              borderBottom: '1px solid #111', transition: 'background 0.1s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <ProfileAvatar userId={u.id} size={28} />
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: '#ccc', textTransform: 'lowercase' }}>
                {u.displayName || 'anonymous'}
              </div>
              {u.username && (
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: '#444' }}>
                  @{u.username}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
