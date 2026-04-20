import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function UsernamePage() {
  const { username } = useParams();
  const [uid, setUid] = useState(undefined); // undefined=loading, null=not found

  useEffect(() => {
    if (!username) { setUid(null); return; }
    getDoc(doc(db, 'usernames', username.toLowerCase()))
      .then(snap => setUid(snap.exists() ? snap.data().uid : null))
      .catch(() => setUid(null));
  }, [username]);

  if (uid === undefined) {
    return (
      <div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#333', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>loading...</div>
      </div>
    );
  }

  if (uid === null) {
    return (
      <div style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <div style={{ color: '#FF2D2D', fontFamily: "grovant, sans-serif", fontSize: '1.5rem', fontWeight: 800, textTransform: 'lowercase' }}>
          user not found
        </div>
        <div style={{ color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem' }}>
          @{username} doesn't exist on nxus
        </div>
      </div>
    );
  }

  return <Navigate to={`/profile/${uid}`} replace />;
}
