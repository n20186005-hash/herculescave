export type Locale = 'ar' | 'en' | 'fr' | 'es';

export const locales: Locale[] = ['ar', 'en', 'fr', 'es'];
export const defaultLocale: Locale = 'ar';

export const htmlLang: Record<Locale, string> = {
  ar: 'ar',
  en: 'en',
  fr: 'fr',
  es: 'es'
};

export const ogLocale: Record<Locale, string> = {
  ar: 'ar_MA',
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES'
};

export const dir: Record<Locale, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
  fr: 'ltr',
  es: 'ltr'
};

export const langLabel: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

// Map locale -> URL base path. Arabic is the default and lives at the root.
export function basePath(locale: Locale): string {
  return locale === 'ar' ? '/' : `/${locale}/`;
}

// Build hreflang alternate links for a given locale.
export function buildAlternates(siteUrl: string, locale: Locale) {
  const out = locales.map((l) => ({ hreflang: l, href: `${siteUrl}${basePath(l)}` }));
  out.push({ hreflang: 'x-default', href: `${siteUrl}/` });
  return out;
}
