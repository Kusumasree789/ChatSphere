const palette = [
  ['#2563eb', '#bfdbfe'],
  ['#7c3aed', '#ddd6fe'],
  ['#0891b2', '#a7f3d0'],
  ['#dc2626', '#fecaca'],
  ['#ea580c', '#fed7aa'],
  ['#16a34a', '#bbf7d0'],
  ['#ca8a04', '#fde68a'],
  ['#db2777', '#fbcfe8'],
];

const generateAvatar = (seed = 'User', gender = 'male') => {
  const safeSeed = String(seed || 'User').trim() || 'User';
  const initials = safeSeed
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || '')
    .join('') || 'U';

  const [bgColor, accentColor] = palette[Math.abs(safeSeed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % palette.length];
  const genderAccent = gender === 'female' ? '#f43f5e' : '#0f766e';
  const finalAccent = accentColor || genderAccent;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="32" fill="${bgColor}" />
      <circle cx="100" cy="82" r="38" fill="${finalAccent}" opacity="0.95" />
      <path d="M56 172c10-38 36-56 44-56s34 18 44 56" fill="${finalAccent}" opacity="0.9" />
      <text x="100" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#ffffff">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default generateAvatar;
