import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const spinnerStyle = {
  display: 'inline-block',
  width: '10px',
  height: '10px',
  border: '1.5px solid rgba(239,68,68,0.3)',
  borderTopColor: '#ef4444',
  borderRadius: '50%',
  animation: 'logoutSpin 0.6s linear infinite',
  marginRight: '6px',
  verticalAlign: 'middle',
};

export default function LogoutButton({ style }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    setLoading(true);
    try {
      // 1. Sign out from Firebase
      await signOut(auth);

      // 2. Clear any locally stored tokens / cached state
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');

      // 3. Reset navigation — replace prevents back-navigating into protected routes
      navigate('/login', { replace: true });
    } catch (err) {
      alert('Failed to sign out. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        @keyframes logoutSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <button
        onClick={handleLogout}
        disabled={loading}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: '0.6rem 0.85rem',
          background: 'none',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          color: loading ? 'rgba(239,68,68,0.45)' : '#ef4444',
          textTransform: 'lowercase',
          textAlign: 'left',
          transition: 'background 0.15s',
          opacity: loading ? 0.7 : 1,
          ...style,
        }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        {loading && <span style={spinnerStyle} />}
        {loading ? 'signing out…' : 'log out'}
      </button>
    </>
  );
}
