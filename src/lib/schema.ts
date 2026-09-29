import type { Locale } from '../i18n';
import {
  names,
  telephone,
  plusCode,
  geo,
  openingHours,
  priceRange,
  rating,
  mapsUrl
} from '../data/site';

export function buildAttractionSchema(opts: {
  locale: Locale;
  canonical: string;
  heroImage: string;
  description: string;
}) {
  const { locale, canonical, heroImage, description } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    name: names[locale],
    alternateName: Object.values(names),
    description,
    ...(canonical ? { url: canonical } : {}),
    image: [heroImage],
    telephone,
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
    openingHoursSpecification: openingHours,
    priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.value,
      reviewCount: rating.reviewCount,
      bestRating: rating.best,
      worstRating: rating.worst
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
