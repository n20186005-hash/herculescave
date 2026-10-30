# Hercules Caves · visitor guide

Independent non-profit tourism and cultural guide in Arabic, English, French and Spanish. The existing Astro SSR/Cloudflare architecture is retained; the four homepages and translated information pages are prerendered. Error pages use the runtime. The site does not represent cave management or sell tickets.

## Exact environment

Node 24.15.0 and pnpm 10.34.5; dependency versions and lockfile unchanged. Normal installation uses `pnpm install --frozen-lockfile`, then `pnpm check`, `pnpm build`, and `npx wrangler deploy --dry-run`. `pnpm-workspace.yaml` permits only the reviewed locked esbuild and workerd versions to install their platform binaries; it does not allow arbitrary dependency scripts.

The default canonical site is https://herculescave.com. `PUBLIC_SITE_URL` remains an optional override; sitemap generation no longer depends on an otherwise undocumented build variable. Both home and information families have four translated alternatives.

The confirmed existing Worker is `herculescave`; the adapter explicitly reads `wrangler.jsonc`, produces `dist/server/wrangler.json` and `.wrangler/deploy/config.json`, and uses `src/worker.js` before Assets. The wrapper consolidates HTTP/www, preserves path/query, handles index/legacy legal aliases, and returns real localized 404/noindex responses including HEAD. No domain bindings are changed. Existing adapter session/image bindings are retained.

## Visitor information

The page links the ministry ticket platform with its four admission categories, published hours and eligibility qualifications. Maps hours are a dated third-party snapshot and differ from the platform; neither becomes an unconditional schedule in structured data. Maps ratings are attributed and dated, without AggregateRating or a LocalBusiness claim. Duration is a guide suggestion; unverified parking, restaurant or step-free claims are removed or qualified.

All five synthetic photo fallbacks were removed. The original vector motif is clearly labelled in all locales as a non-documentary illustration; it is not a photo or site plan. See IMAGE-SOURCES.md. The guide discloses actual GA/Maps loading and independent Cloudflare hosting/possible analytics in translated information pages. It does not promise a consent control or legal compliance.

Local checks do not establish publication or production acceptance. See BUILD-NOTICE.md.
