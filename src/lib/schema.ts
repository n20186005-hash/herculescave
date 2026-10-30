import type { Locale } from '../i18n';
import {
  names,
  plusCode,
  geo,
  mapsUrl
} from '../data/site';

export function buildAttractionSchema(opts: {
  locale: Locale;
  canonical: string;
  heroImage: string;
  description: string;
}) {
  const { locale, canonical, description } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: names[locale],
    alternateName: Object.values(names),
    description,
    ...(canonical ? { url: canonical } : {}),

    address: {
      '@type': 'PostalAddress',
      streetAddress: plusCode,
      addressLocality: 'Tangier',
      addressRegion: 'Tangier-Tetouan-Al Hoceima',
      addressCountry: 'MA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    sameAs: [mapsUrl]
  };
}

export function buildFaqSchema(faqs: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };
}
