import { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useVerification } from './VerificationContext';

const UserDocContext = createContext({ userDoc: undefined, setUserDoc: () => {} });

export function UserDocProvider({ children }) {
  const user = useAuth();
  const { verifiedEmailDoc } = useVerification();
  const [userDoc, setUserDoc] = useState(undefined); // undefined=loading, null=not found

  useEffect(() => {
    if (user === undefined) return; // still loading auth
    if (user === null) { setUserDoc(null); return; }
    if (verifiedEmailDoc === undefined) return;
    if (verifiedEmailDoc === null) { setUserDoc(null); return; }
    let cancelled = false;
    getDoc(doc(db, 'users', user.uid)).then(snap => {
      if (!cancelled) setUserDoc(snap.exists() ? snap.data() : null);
    }).catch(() => { if (!cancelled) setUserDoc(null); });
    return () => { cancelled = true; };
  }, [user?.uid, verifiedEmailDoc]);

  return (
    <UserDocContext.Provider value={{ userDoc, setUserDoc }}>
      {children}
    </UserDocContext.Provider>
  );
}

export function useUserDoc() {
  return useContext(UserDocContext);
}
