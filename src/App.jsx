import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import Signup from './pages/Signup';

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

  return <Signup />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/signup" element={<ProtectedSignupRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
