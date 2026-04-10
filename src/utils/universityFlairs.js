export const DEFAULT_UNIVERSITY_FLAIRS = [
  { key: 'MDX', label: 'MDX', bg: '#7C3AED', color: '#ffffff' },
  { key: 'HWUD', label: 'HWUD', bg: '#1D4ED8', color: '#ffffff' },
  { key: 'MAHE', label: 'MAHE', bg: '#EA580C', color: '#ffffff' },
  { key: 'UOWD', label: 'UOWD', bg: '#059669', color: '#ffffff' },
];

function normalizeHex(value, fallback) {
  const trimmed = String(value || '').trim();
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)) return trimmed;
  return fallback;
}

export function normalizeUniversityFlairs(flairs) {
  if (!Array.isArray(flairs)) return [];

  const seen = new Set();

  return flairs
    .map((flair) => {
      const rawKey = String(flair?.key || flair?.label || '').trim().toUpperCase();
      if (!rawKey) return null;

      const key = rawKey.slice(0, 16);
      const label = String(flair?.label || key).trim().slice(0, 24) || key;

      return {
        key,
        label,
        bg: normalizeHex(flair?.bg, '#555555'),
        color: normalizeHex(flair?.color, '#ffffff'),
      };
    })
    .filter((flair) => {
      if (!flair || seen.has(flair.key)) return false;
      seen.add(flair.key);
      return true;
    });
}

export function buildUniversityFlairColorMap(flairs) {
  return Object.fromEntries(
    normalizeUniversityFlairs(flairs).map(({ key, bg }) => [key, bg])
  );
}

export const UNIVERSITY_FLAIRS = DEFAULT_UNIVERSITY_FLAIRS;
export const UNIVERSITY_FLAIR_COLORS = buildUniversityFlairColorMap(DEFAULT_UNIVERSITY_FLAIRS);
