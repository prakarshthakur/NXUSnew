import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  doc, getDoc, updateDoc, setDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useUserDoc } from '../contexts/UserDocContext';

const EMAILJS_SERVICE  = 'service_bxm5d9s';
const EMAILJS_TEMPLATE = 'template_imic976';
const EMAILJS_KEY      = '0PpBz8KikvlE81sVG';
const OTP_EXPIRY_MS    = 10 * 60 * 1000;
const RESEND_COOLDOWN  = 60;

const UNIVERSITY_FLAIRS = [
  { key: 'MDX',  label: 'MDX',  bg: '#7C3AED', color: '#ffffff' },
  { key: 'HWUD', label: 'HWUD', bg: '#1D4ED8', color: '#ffffff' },
  { key: 'UOWD', label: 'UOWD', bg: '#059669', color: '#ffffff' },
];

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

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function checkUniversityEmailAllowed(email) {
  try {
    const snap = await getDoc(doc(db, 'config', 'universityEmailSuffixes'));
    if (!snap.exists()) return true;
    const suffixes = snap.data().suffixes || [];
    if (suffixes.length === 0) return true;
    return suffixes.some(s => email.toLowerCase().endsWith(s.toLowerCase()));
  } catch (e) {
    console.error('checkUniversityEmailAllowed failed:', e);
    return false;
  }
}

export default function Onboarding() {
  const authUser = useAuth();
  const { userDoc, setUserDoc } = useUserDoc();
  const navigate = useNavigate();

  // If already completed onboarding, go to feed
  useEffect(() => {
    if (userDoc?.onboardingComplete) navigate('/feed', { replace: true });
  }, [userDoc]);

  // Form state
  const [displayName, setDisplayName] = useState('');
  const [selectedFlair, setSelectedFlair] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Info tooltip state
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  // Verification state
  const [uniEmail, setUniEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [pendingOtp, setPendingOtp] = useState('');
  const [otpExpiry, setOtpExpiry] = useState(null);
  const [otpInput, setOtpInput] = useState('');
  const [verified, setVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Prefill display name from auth
  useEffect(() => {
    if (authUser?.displayName && !displayName) {
      setDisplayName(authUser.displayName);
    }
  }, [authUser]);

  // Cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

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

  const handleSendOtp = async () => {
    setOtpError('');
    const email = uniEmail.trim().toLowerCase();
    if (!email || !email.includes('@')) {
      setOtpError('enter a valid university email address');
      return;
    }
    setOtpLoading(true);
    try {
      const allowed = await checkUniversityEmailAllowed(email);
      if (!allowed) {
        setOtpError("this email domain isn't on the verified list yet.");
        return;
      }
      const code = generateOtp();
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          to_email: email,
          email,               // covers templates with recipient field set to {{email}}
          otp_code: code,
          passcode: code,      // covers templates using {{passcode}}
          user_name: displayName || authUser?.displayName || 'student',
        },
        { publicKey: EMAILJS_KEY }
      );
      setPendingOtp(code);
      setOtpExpiry(Date.now() + OTP_EXPIRY_MS);
      setOtpSent(true);
      setOtpInput('');
      setCooldown(RESEND_COOLDOWN);
    } catch (e) {
      console.error('EmailJS error:', e);
      setOtpError('failed to send code — try again');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setOtpError('');
    if (!otpInput.trim()) { setOtpError('enter the 6-digit code'); return; }
    if (Date.now() > otpExpiry) {
      setOtpError('code expired — request a new one');
      setOtpSent(false);
      return;
    }
    if (otpInput.trim() !== pendingOtp) {
      setOtpError('incorrect code — try again');
      return;
    }
    setVerifyLoading(true);
    try {
      // Mark verified in Firestore immediately
      await updateDoc(doc(db, 'users', authUser.uid), {
        university_verified: true,
        universityEmail: uniEmail.trim().toLowerCase(),
        universityVerifiedAt: serverTimestamp(),
      });
      setVerified(true);
      setPendingOtp(''); // invalidate OTP
      setOtpError('');
      setUserDoc(prev => ({
        ...prev,
        university_verified: true,
        universityEmail: uniEmail.trim().toLowerCase(),
      }));
    } catch (e) {
      console.error(e);
      setOtpError('verification failed — try again');
    } finally {
      setVerifyLoading(false);
    }
  };

  const handleSave = async () => {
    if (!displayName.trim()) { setSaveError('please enter a display name'); return; }
    setSaving(true);
    setSaveError('');
    try {
      const updates = {
        displayName: displayName.trim(),
        onboardingComplete: true,
      };
      if (selectedFlair) updates.universityFlair = selectedFlair;
      await updateDoc(doc(db, 'users', authUser.uid), updates);
      setUserDoc(prev => ({ ...prev, ...updates }));
      navigate('/feed', { replace: true });
    } catch (e) {
      console.error(e);
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
            {UNIVERSITY_FLAIRS.map(f => {
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

        {/* ── University email verification ── */}
        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.9rem',
          }}>
            {verified ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            )}
            <span style={{
              fontFamily: mono,
              fontSize: '0.72rem',
              color: verified ? '#4ade80' : '#888',
              textTransform: 'lowercase',
              fontWeight: verified ? 700 : 400,
            }}>
              {verified ? 'student status verified ✓' : 'verify your student status'}
            </span>
            <span style={{
              fontFamily: mono,
              fontSize: '0.62rem',
              color: '#2a2a2a',
              marginLeft: 'auto',
              textTransform: 'lowercase',
            }}>
              optional
            </span>
          </div>

          {!verified && (
            <>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: otpSent ? '0.75rem' : '0' }}>
                <input
                  className="onb-input"
                  style={{ ...inputStyle, flex: 1, fontSize: '0.85rem', padding: '0.6rem 0.9rem' }}
                  type="email"
                  placeholder="your university email"
                  value={uniEmail}
                  onChange={e => { setUniEmail(e.target.value); setOtpError(''); }}
                  disabled={otpSent && !otpError.includes('expired')}
                />
                <button
                  onClick={handleSendOtp}
                  disabled={otpLoading || cooldown > 0 || !uniEmail.trim()}
                  style={{
                    background: '#FF2D2D',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.6rem 1rem',
                    color: '#000',
                    fontFamily: mono,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: (otpLoading || cooldown > 0 || !uniEmail.trim()) ? 'not-allowed' : 'pointer',
                    opacity: (otpLoading || cooldown > 0 || !uniEmail.trim()) ? 0.5 : 1,
                    textTransform: 'lowercase',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.15s',
                  }}
                >
                  {otpLoading ? '...' : cooldown > 0 ? `${cooldown}s` : otpSent ? 'resend' : 'send otp'}
                </button>
              </div>

              {otpSent && (
                <div style={{ animation: 'fadeIn 0.2s ease' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      className="onb-input"
                      style={{ ...inputStyle, flex: 1, fontSize: '0.85rem', padding: '0.6rem 0.9rem', letterSpacing: '0.15em' }}
                      placeholder="6-digit code"
                      value={otpInput}
                      onChange={e => { setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 6)); setOtpError(''); }}
                      maxLength={6}
                    />
                    <button
                      onClick={handleVerifyOtp}
                      disabled={verifyLoading || otpInput.length < 6}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(74,222,128,0.4)',
                        borderRadius: '8px',
                        padding: '0.6rem 1rem',
                        color: '#4ade80',
                        fontFamily: mono,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: (verifyLoading || otpInput.length < 6) ? 'not-allowed' : 'pointer',
                        opacity: (verifyLoading || otpInput.length < 6) ? 0.5 : 1,
                        textTransform: 'lowercase',
                        whiteSpace: 'nowrap',
                        transition: 'opacity 0.15s, background 0.15s',
                      }}
                      onMouseEnter={e => { if (otpInput.length === 6 && !verifyLoading) e.currentTarget.style.background = 'rgba(74,222,128,0.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      {verifyLoading ? '...' : 'verify'}
                    </button>
                  </div>
                </div>
              )}

              {otpError && (
                <p style={{
                  fontFamily: mono,
                  fontSize: '0.72rem',
                  color: '#ef4444',
                  margin: '0.5rem 0 0',
                  textTransform: 'lowercase',
                }}>
                  {otpError}
                </p>
              )}
            </>
          )}

          {verified && (
            <div style={{
              fontFamily: mono,
              fontSize: '0.75rem',
              color: '#4ade80',
              textTransform: 'lowercase',
            }}>
              verified: {uniEmail}
            </div>
          )}
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
          you can verify your student email later from your profile
        </p>
      </div>
    </div>
  );
}
