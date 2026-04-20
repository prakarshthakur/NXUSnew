import { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import {
  DEFAULT_UNIVERSITY_FLAIRS,
  buildUniversityFlairColorMap,
  normalizeUniversityFlairs,
} from '../utils/universityFlairs';

const CONFIG_DOC = doc(db, 'config', 'universityFlairs');

const UniversityFlairsContext = createContext({
  universityFlairs: DEFAULT_UNIVERSITY_FLAIRS,
  universityFlairColors: buildUniversityFlairColorMap(DEFAULT_UNIVERSITY_FLAIRS),
  loadingUniversityFlairs: true,
  setUniversityFlairs: () => {},
  reloadUniversityFlairs: async () => {},
});

export function UniversityFlairsProvider({ children }) {
  const [universityFlairs, setUniversityFlairsState] = useState(DEFAULT_UNIVERSITY_FLAIRS);
  const [loadingUniversityFlairs, setLoadingUniversityFlairs] = useState(true);

  const setUniversityFlairs = (flairs) => {
    setUniversityFlairsState(normalizeUniversityFlairs(flairs));
  };

  const loadUniversityFlairs = async () => {
    setLoadingUniversityFlairs(true);
    try {
      const snap = await getDoc(CONFIG_DOC);
      if (!snap.exists()) {
        setUniversityFlairsState(DEFAULT_UNIVERSITY_FLAIRS);
      } else {
        setUniversityFlairsState(normalizeUniversityFlairs(snap.data().flairs || []));
      }
    } catch (e) {
      console.error('failed to load university flairs:', e);
      setUniversityFlairsState(DEFAULT_UNIVERSITY_FLAIRS);
    } finally {
      setLoadingUniversityFlairs(false);
    }
  };

  useEffect(() => {
    loadUniversityFlairs();
  }, []);

  return (
    <UniversityFlairsContext.Provider
      value={{
        universityFlairs,
        universityFlairColors: buildUniversityFlairColorMap(universityFlairs),
        loadingUniversityFlairs,
        setUniversityFlairs,
        reloadUniversityFlairs: loadUniversityFlairs,
      }}
    >
      {children}
    </UniversityFlairsContext.Provider>
  );
}

export function useUniversityFlairs() {
  return useContext(UniversityFlairsContext);
}
