import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const FILLER_EVENTS = [
  {
    title: 'Desert Stargazing Night',
    shortDescription: 'Watch the stars over Dubai\'s desert with fellow students.',
    fullDescription:
      'Join us for a magical night in the Dubai desert. Bring a blanket, we\'ll handle the telescope. Open to all university students.',
    date: 'May 10, 2025',
    location: 'Al Qudra Desert, Dubai',
    formLink: 'https://forms.google.com',
  },
  {
    title: 'Rooftop Movie Night',
    shortDescription: 'Outdoor cinema with snacks and good company.',
    fullDescription:
      'We\'re screening a fan-favourite film on a rooftop in JLT. Snacks provided. Come alone or bring a friend.',
    date: 'May 17, 2025',
    location: 'JLT Rooftop, Dubai',
    formLink: 'https://forms.google.com',
  },
  {
    title: 'Startup Pitch Café',
    shortDescription: 'Pitch your idea in 2 minutes. No slides needed.',
    fullDescription:
      'An informal gathering for student founders and idea-havers. Pitch in 2 minutes, get feedback, meet co-founders.',
    date: 'May 24, 2025',
    location: 'Nightjar Coffee, Dubai',
    formLink: 'https://forms.google.com',
  },
  {
    title: 'Beach Volleyball Meetup',
    shortDescription: 'Casual volleyball on JBR beach. All levels welcome.',
    fullDescription:
      'No experience needed. Show up, meet people, play. We\'ll split into teams on the spot.',
    date: 'June 1, 2025',
    location: 'JBR Beach, Dubai',
    formLink: 'https://forms.google.com',
  },
  {
    title: 'Study & Chill at Business Bay',
    shortDescription: 'Productive co-working session with a view.',
    fullDescription:
      'Bring your laptop and assignments. We\'ll book a table at a café in Business Bay, work together, and take breaks together.',
    date: 'June 7, 2025',
    location: 'Business Bay Café, Dubai',
    formLink: 'https://forms.google.com',
  },
];

let seeded = false;

export async function seedEventsIfEmpty(userId) {
  if (seeded || !userId) return;
  seeded = true;

  try {
    const eventsRef = collection(db, 'events');
    const snapshot = await getDocs(eventsRef);

    if (snapshot.empty) {
      const promises = FILLER_EVENTS.map(event =>
        addDoc(eventsRef, { ...event, hostUid: userId })
      );
      await Promise.all(promises);
    }
  } catch (error) {
    console.error('Failed to seed events:', error);
    seeded = false;
  }
}
