// Language-neutral facts for Hercules Caves (مغارة هرقل), Tangier, Morocco.
// Single source of truth — keep the rating snapshot in sync with Google Maps.

export const rating = {
  value: '4.0',
  reviewCount: '16829',
  best: '5',
  worst: '1'
};

export const telephone = '+212606703374';
export const plusCode = 'Q356+X8C';
export const geo = { latitude: 35.7603, longitude: -5.9392 };
export const mapsUrl = 'https://maps.app.goo.gl/vPP3S3mZ3VG9v59P9';
export const priceRange = '10–80 MAD';

// Published visiting hours (Moroccan Ministry of Culture platform).
export const openingHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '17:00'
  }
];

// Per-locale attraction names.
export const names = {
  ar: 'مغارة هرقل',
  en: 'Hercules Caves',
  fr: 'Grottes d’Hercule',
  es: 'Cuevas de Hércules'
};

// SEO site name format: attraction + city + "visitor guide".
export const siteNames = {
  ar: 'مغارة هرقل طنجة — دليل الزيارة',
  en: 'Hercules Caves Tangier — Visitor Guide',
  fr: 'Grottes d’Hercule Tanger — Guide de visite',
  es: 'Cuevas de Hércules Tánger — Guía de visita'
};
