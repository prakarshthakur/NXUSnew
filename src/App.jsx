import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { UserDocProvider, useUserDoc } from './contexts/UserDocContext';
import { VerificationProvider, useVerification } from './contexts/VerificationContext';
import { UniversityFlairsProvider } from './contexts/UniversityFlairsContext';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Host from './pages/Host';
import MyEvents from './pages/MyEvents';
import MyFun from './pages/MyFun';
import Profile from './pages/Profile';
import EventPage from './pages/EventPage';
import SignOut from './pages/SignOut';
import Admin from './pages/Admin';
import Onboarding from './pages/Onboarding';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import UsernamePage from './pages/UsernamePage';

const ADMIN_EMAIL = 'prakarshthakur1@gmail.com';

function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: '#FF2D2D',
        animation: 'loadPulse 1s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes loadPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

function AdminRoute({ children }) {
  const user = useAuth();
  const { verifiedEmailDoc } = useVerification();
  if (user === undefined) return <LoadingScreen />;
  if (verifiedEmailDoc === undefined) return <LoadingScreen />;
  if (user === null) return <Navigate to="/login" replace />;
  if (verifiedEmailDoc === null) return <Navigate to="/login" replace />;
  if (user.email !== ADMIN_EMAIL) return <Navigate to="/feed" replace />;
  return children;
}

// Requires auth + completed onboarding
function ProtectedRoute({ children }) {
  const user = useAuth();
  const { userDoc } = useUserDoc();
  const { verifiedEmailDoc } = useVerification();

  if (user === undefined || userDoc === undefined || verifiedEmailDoc === undefined) return <LoadingScreen />;
  if (user === null) return <Navigate to="/login" replace />;
  if (verifiedEmailDoc === null) return <Navigate to="/login" replace />;
  // Admin bypasses onboarding gate
  if (user.email === ADMIN_EMAIL) return children;
  if (!userDoc?.onboardingComplete) return <Navigate to="/onboarding" replace />;
  return children;
}

// Requires auth only (used for onboarding page itself)
function AuthRoute({ children }) {
  const user = useAuth();
  const { userDoc } = useUserDoc();
  const { verifiedEmailDoc } = useVerification();

  if (user === undefined || userDoc === undefined || verifiedEmailDoc === undefined) return <LoadingScreen />;
  if (user === null) return <Navigate to="/login" replace />;
  if (verifiedEmailDoc === null) return <Navigate to="/login" replace />;
  // Already done onboarding — go to feed
  if (userDoc?.onboardingComplete) return <Navigate to="/feed" replace />;
  return children;
}

function RootRedirect() {
  const user = useAuth();
  const { userDoc } = useUserDoc();
  const { verifiedEmailDoc } = useVerification();

  if (user === undefined || verifiedEmailDoc === undefined || (verifiedEmailDoc && userDoc === undefined)) {
    return <LoadingScreen />;
  }
  if (user === null) return <ComingSoon />;
  if (verifiedEmailDoc === null) return <Navigate to="/login" replace />;
  if (user.email === ADMIN_EMAIL) return <Navigate to="/feed" replace />;
  if (!userDoc?.onboardingComplete) return <Navigate to="/onboarding" replace />;
  return <Navigate to="/feed" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <UniversityFlairsProvider>
        <VerificationProvider>
          <UserDocProvider>
            <Routes>
              <Route path="/" element={<RootRedirect />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/onboarding"
                element={
                  <AuthRoute>
                    <Onboarding />
                  </AuthRoute>
                }
              />
              <Route
                path="/feed"
                element={
                  <ProtectedRoute>
                    <Feed />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/host"
                element={
                  <ProtectedRoute>
                    <Host />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-events"
                element={
                  <ProtectedRoute>
                    <MyEvents />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-fun"
                element={
                  <ProtectedRoute>
                    <MyFun />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile/:userId"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/event/:eventId" element={<EventPage />} />
              <Route path="/u/:username" element={<UsernamePage />} />
              <Route path="/signout" element={<SignOut />} />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </UserDocProvider>
        </VerificationProvider>
      </UniversityFlairsProvider>
    </BrowserRouter>
  );
}
