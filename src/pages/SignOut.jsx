import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .catch(() => {})
      .finally(() => navigate('/login', { replace: true }));
  }, [navigate]);

  return null;
}
