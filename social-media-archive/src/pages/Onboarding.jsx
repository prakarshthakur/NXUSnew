import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useUserDoc } from '../contexts/UserDocContext';
import { useUniversityFlairs } from '../contexts/UniversityFlairsContext';

const mono = "'IBM Plex Mono', monospace";

const inputStyle = {
  background: '#0d0d0d',
  border: '1px solid #1a1a1a',
  color: '#ffffff',
  fontFamily: mono,
  fontSize: '0.9rem',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

export default function Onboarding() {
  const authUser = useAuth();
  const { userDoc, setUserDoc } = useUserDoc();
  const { universityFlairs } = useUniversityFlairs();
  const navigate = useNavigate();

  // If already completed onboarding, go to feed
  useEffect(() => {
    if (userDoc?.onboardingComplete) navigate('/feed', { replace: true });
  }, [userDoc]);

  // Form state
  const [displayName, setDisplayName] = useState('');
  const [selectedFlair, setSelectedFlair] = useState(null);
  const [instagram, setInstagram] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Info tooltip state
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  // Prefill display name from auth
  useEffect(() => {
    if (authUser?.displayName && !displayName) {
      setDisplayName(authUser.displayName);
    }
  }, [authUser]);

  useEffect(() => {
    if (!userDoc) return;
    if (userDoc.displayName && !displayName) setDisplayName(userDoc.displayName);
    if ((userDoc.university || userDoc.universityFlair) && !selectedFlair) {
      setSelectedFlair(userDoc.university || userDoc.universityFlair);
    }
    if (userDoc.instagram && !instagram) setInstagram(userDoc.instagram);
  }, [userDoc]);

  // Close tooltip on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSave = async () => {
    if (!displayName.trim()) { setSaveError('please enter a display name'); return; }
    setSaving(true);
    setSaveError('');
    try {
      const instagramHandle = instagram.trim().replace(/^@+/, '');
      const updates = {
        displayName: displayName.trim(),
        instagram: instagramHandle,
        onboardingComplete: true,
      };
      if (selectedFlair) updates.university = selectedFlair;
      await setDoc(doc(db, 'users', authUser.uid), updates, { merge: true });
      setUserDoc(prev => ({ ...prev, ...updates }));
      navigate('/feed', { replace: true });
    } catch (e) {
      console.error('failed to save onboarding', e?.code);
      setSaveError('something went wrong — try again');
    } finally {
      setSaving(false);
    }
  };

  if (!authUser || userDoc === undefined) {
    return (
      <div style={{
        minHeight: '100vh', background: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#FF2D2D',
          animation: 'pulse 1s ease-in-out infinite',
        }} />
        <style>{`@keyframes pulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .onb-input:focus { border-color: #FF2D2D !important; }
        .onb-btn-save:hover:not(:disabled) { opacity: 0.88 !important; }
        .flair-chip:hover { opacity: 0.9; }
      `}</style>

      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        padding: '3rem 1.25rem 5rem',
        animation: 'fadeIn 0.3s ease',
      }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF2D2D' }} />
            <span style={{ fontFamily: mono, fontSize: '0.65rem', color: '#555', textTransform: 'lowercase', letterSpacing: '0.08em' }}>
              nxus
            </span>
          </div>
          <h1 style={{
            fontFamily: 'grovant, sans-serif',
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#FF2D2D',
            textTransform: 'lowercase',
            margin: 0,
            lineHeight: 1.1,
          }}>
            set up your profile
          </h1>
          <p style={{
            fontFamily: mono,
            fontSize: '0.8rem',
            color: '#555',
            marginTop: '0.6rem',
            textTransform: 'lowercase',
          }}>
            let's get you set up. you can always update this later.
          </p>
        </div>

        {/* ── Display name ── */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontFamily: mono,
            fontSize: '0.7rem',
            color: '#888',
            textTransform: 'lowercase',
            marginBottom: '0.45rem',
            letterSpacing: '0.04em',
          }}>
            display name <span style={{ color: '#FF2D2D' }}>*</span>
          </label>
          <input
            className="onb-input"
            style={inputStyle}
            placeholder="how you'll appear sitewide"
            value={displayName}
            onChange={e => { setDisplayName(e.target.value); setSaveError(''); }}
            maxLength={50}
          />
        </div>

        {/* ── University flair ── */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontFamily: mono,
            fontSize: '0.7rem',
            color: '#888',
            textTransform: 'lowercase',
            marginBottom: '0.6rem',
            letterSpacing: '0.04em',
          }}>
            university
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {universityFlairs.map(f => {
              const isSelected = selectedFlair === f.key;
              return (
                <button
                  key={f.key}
                  className="flair-chip"
                  onClick={() => setSelectedFlair(isSelected ? null : f.key)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '50px',
                    border: `1px solid ${isSelected ? f.bg : f.bg + '55'}`,
                    background: isSelected ? f.bg : 'transparent',
                    color: isSelected ? f.color : f.bg,
                    fontFamily: mono,
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textTransform: 'lowercase',
                    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
                  }}
                >
                  {isSelected && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {f.label}
                </button>
              );
            })}

            {/* Info button */}
            <div ref={tooltipRef} style={{ position: 'relative', display: 'inline-flex' }}>
              <button
                onClick={() => setShowTooltip(v => !v)}
                title="more campuses"
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: '1px solid #333',
                  background: 'transparent',
                  color: '#555',
                  fontFamily: mono,
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#aaa'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#555'; }}
              >
                i
              </button>
              {showTooltip && (
                <div style={{
                  position: 'absolute',
                  bottom: '130%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  fontFamily: mono,
                  fontSize: '0.7rem',
                  color: '#aaa',
                  whiteSpace: 'nowrap',
                  textTransform: 'lowercase',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}>
                  more campuses coming soon
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '5px solid transparent',
                    borderRight: '5px solid transparent',
                    borderTop: '5px solid #2a2a2a',
                  }} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Instagram ── */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            fontFamily: mono,
            fontSize: '0.7rem',
            color: '#888',
            textTransform: 'lowercase',
            marginBottom: '0.45rem',
            letterSpacing: '0.04em',
          }}>
            instagram
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: mono,
              fontSize: '0.9rem',
              color: '#555',
              pointerEvents: 'none',
            }}>
              @
            </span>
            <input
              className="onb-input"
              style={{ ...inputStyle, paddingLeft: '1.9rem' }}
              placeholder="yourhandle"
              value={instagram}
              onChange={e => setInstagram(e.target.value.replace(/^@+/, ''))}
              maxLength={30}
              autoComplete="off"
            />
          </div>
        </div>

        {/* ── Save button ── */}
        {saveError && (
          <p style={{
            fontFamily: mono,
            fontSize: '0.75rem',
            color: '#ef4444',
            marginBottom: '0.75rem',
            textTransform: 'lowercase',
          }}>
            {saveError}
          </p>
        )}

        <button
          className="onb-btn-save"
          onClick={handleSave}
          disabled={saving || !displayName.trim()}
          style={{
            width: '100%',
            background: '#FF2D2D',
            border: 'none',
            borderRadius: '50px',
            padding: '0.85rem 1.5rem',
            color: '#000',
            fontFamily: mono,
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: (saving || !displayName.trim()) ? 'not-allowed' : 'pointer',
            opacity: (saving || !displayName.trim()) ? 0.5 : 1,
            textTransform: 'lowercase',
            transition: 'opacity 0.15s',
            letterSpacing: '0.02em',
          }}
        >
          {saving ? 'saving...' : 'save & continue →'}
        </button>

        <p style={{
          fontFamily: mono,
          fontSize: '0.68rem',
          color: '#333',
          textAlign: 'center',
          marginTop: '1rem',
          textTransform: 'lowercase',
        }}>
          you can update the rest of your profile later
        </p>
      </div>
    </div>
  );
}
