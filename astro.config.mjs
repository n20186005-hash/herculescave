import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite ? configuredSite.replace(/\/$/, '') : undefined;

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: site
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'ar',
            locales: { ar: 'ar', en: 'en', fr: 'fr', es: 'es' }
          }
        })
      ]
    : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
