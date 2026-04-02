import React, { useState, useEffect, useRef } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

export default function ProfileAvatar({ userId, size = 40, editable = false, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!userId) return;
    getDoc(doc(db, 'users', userId)).then(snap => {
      if (snap.exists()) {
        const data = snap.data();
        setAvatarUrl(data.avatarUrl || null);
        setDisplayName(data.displayName || '');
      }
    }).catch(() => {});
  }, [userId]);

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setUploadProgress(0);
    const storageRef = ref(storage, `users/${userId}/avatar`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(pct);
      },
      (error) => {
        console.error('Upload error:', error);
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setAvatarUrl(url);
        await updateDoc(doc(db, 'users', userId), { avatarUrl: url });
        setUploading(false);
        setUploadProgress(0);
        if (onUpload) onUpload(url);
      }
    );
  };

  const circumference = 2 * Math.PI * (size / 2 - 3);
  const strokeDashoffset = circumference - (uploadProgress / 100) * circumference;

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', cursor: editable ? 'pointer' : 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => editable && !uploading && fileInputRef.current?.click()}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={displayName || 'avatar'}
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #FF2D2D',
            display: 'block',
          }}
        />
      ) : (
        <div style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: '#1a1a1a',
          border: '1px solid #FF2D2D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF2D2D',
          fontSize: size * 0.35,
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
        }}>
          {getInitials(displayName)}
        </div>
      )}

      {uploading && (
        <svg
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 3}
            fill="none"
            stroke="#FF2D2D"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
      )}

      {editable && hovered && !uploading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      )}

      {editable && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      )}
    </div>
  );
}
