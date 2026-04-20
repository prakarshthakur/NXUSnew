import { Component } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ComingSoon from './pages/ComingSoon';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import InstallPopup from './components/InstallPopup';
import SiteFooter from './components/SiteFooter';
import EventDetail from './pages/EventDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const ADMIN_EMAIL = 'prakarshthakur1@gmail.com';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.error('[NXUS] ErrorBoundary caught:', error);
    // Unregister stale service workers then hard-reload
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(regs => {
        regs.forEach(r => r.unregister());
        setTimeout(() => window.location.reload(true), 300);
      });
    } else {
      setTimeout(() => window.location.reload(true), 300);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0A0A0A', color: '#F0EDE8', fontFamily: 'monospace' }}>
          Reloading…
        </div>
      );
    }
    return this.props.children;
  }
}

function hasEarlyAccess() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.sessionStorage.getItem('earlyAccess') === 'true';
}

function ProtectedSignupRoute() {
  if (!hasEarlyAccess()) {
    return <Navigate to="/" replace />;
  }

  if (window.sessionStorage.getItem('redirectAfterLogin')) {
    return <Navigate to="/login" replace />;
  }

  return <Signup />;
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.email !== ADMIN_EMAIL) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

function EventRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user) {
    return children;
  }

  window.sessionStorage.setItem('redirectAfterLogin', window.location.pathname);

  if (hasEarlyAccess()) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/" replace />;
}

function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0A0A0A',
    }}>
      <div style={{
        color: 'rgba(240, 237, 232, 0.42)',
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.78rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        animation: 'pulse 1.5s ease-in-out infinite',
      }}>
        Loading...
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <InstallPopup />
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/signup" element={<ProtectedSignupRoute />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
            <Route
              path="/event/:eventId"
              element={
                <EventRoute>
                  <EventDetail />
                </EventRoute>
              }
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <SiteFooter />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
