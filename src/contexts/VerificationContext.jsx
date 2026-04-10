import { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';

const VerificationContext = createContext({
  verifiedEmailDoc: undefined,
  isVerified: false,
  refreshVerification: async () => {},
});

export function VerificationProvider({ children }) {
  const user = useAuth();
  const [verifiedEmailDoc, setVerifiedEmailDoc] = useState(undefined);

  const loadVerification = async (uid) => {
    if (!uid) {
      setVerifiedEmailDoc(null);
      return;
    }

    try {
      const snap = await getDoc(doc(db, 'verifiedEmails', uid));
      setVerifiedEmailDoc(snap.exists() ? snap.data() : null);
    } catch {
      setVerifiedEmailDoc(null);
    }
  };

  useEffect(() => {
    if (user === undefined) return;
    if (user === null) {
      setVerifiedEmailDoc(null);
      return;
    }

    loadVerification(user.uid);
  }, [user?.uid]);

  return (
    <VerificationContext.Provider
      value={{
        verifiedEmailDoc,
        isVerified: !!verifiedEmailDoc,
        refreshVerification: async () => loadVerification(user?.uid),
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
}

export function useVerification() {
  return useContext(VerificationContext);
}
