import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ADJECTIVES = [
  'swift', 'bold', 'dark', 'cool', 'wild', 'calm', 'rare', 'keen',
  'free', 'vast', 'grey', 'deep', 'lone', 'raw', 'slick', 'sharp',
  'neon', 'void', 'lost', 'pure',
];
const NOUNS = [
  'fox', 'wolf', 'hawk', 'bear', 'lynx', 'puma', 'kite', 'crow',
  'deer', 'hare', 'seal', 'ibis', 'wren', 'lark', 'viper', 'raven',
  'storm', 'drift', 'blaze', 'echo',
];

function makeUsername() {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const num = Math.floor(Math.random() * 9999) + 1;
  return `${adj}_${noun}_${num}`;
}

export function isValidUsername(u) {
  return /^[a-z0-9_]{3,20}$/.test(u);
}

/** Generate a username guaranteed unique in Firestore. */
export async function generateUniqueUsername() {
  for (let i = 0; i < 8; i++) {
    const candidate = makeUsername();
    const snap = await getDoc(doc(db, 'usernames', candidate));
    if (!snap.exists()) return candidate;
  }
  // Fallback: base36 timestamp is effectively unique
  return `user_${Date.now().toString(36)}`;
}

/** Claim a username. Returns true on success, false if taken. */
export async function claimUsername(uid, username) {
  const ref = doc(db, 'usernames', username);
  const snap = await getDoc(ref);
  if (snap.exists()) return false;
  await setDoc(ref, { uid });
  return true;
}

/** Release a username (on change or delete). */
export async function releaseUsername(username) {
  if (!username) return;
  await deleteDoc(doc(db, 'usernames', username)).catch(() => {});
}
