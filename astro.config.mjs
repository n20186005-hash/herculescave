import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = (configuredSite || 'https://herculescave.com').replace(/\/$/, '');

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({ configPath: "./wrangler.jsonc" }),
  integrations: [sitemap({ filter: url => !/\/404(?:\/|\.html)?$/.test(new URL(url).pathname), i18n: { defaultLocale:'ar', locales:{ar:'ar',en:'en',fr:'fr',es:'es'} } })],
  vite: {
    plugins: [tailwindcss()]
  }
});
