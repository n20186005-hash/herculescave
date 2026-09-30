# Hercules Caves / مغارة هرقل

موقع سياحي غير رسمي لمغارة هرقل في طنجة، متعدد اللغات (العربية افتراضياً في الجذر، مع الإنجليزية والفرنسية والإسبانية في `/en/`,`/fr/`,`/es/`)، مبني بـ Astro + Tailwind CSS + TypeScript ومهيأ لـ Cloudflare Workers. يُخرج كل صفحة `canonical` و`hreflang` (ar/en/fr/es/x-default) وبيانات منظمة TouristAttraction + FAQPage.

## الإعداد

- Node.js: `24.15.0` (مثبت في `.node-version` و`engines`)
- pnpm: `10.34.5` (مثبت في `packageManager`)
- لا توجد قاعدة بيانات أو CMS أو تسجيل دخول.

## التشغيل

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## الدومين

يوجد مصدر واحد فقط للدومين: متغير البيئة `PUBLIC_SITE_URL` الذي يقرأه `astro.config.mjs` ويغذي `site`.

مثال بعد شراء الدومين:

```bash
PUBLIC_SITE_URL=https://your-domain.ma pnpm build
```

إذا لم يتم ضبط المتغير، يستمر البناء بشكل طبيعي، لا يتم تشغيل تكامل sitemap، ولا تُكتب canonical/og:url أو روابط JSON-LD مطلقة وهمية.

## Cloudflare Workers

بعد ربط حساب Cloudflare:

```bash
pnpm build
pnpm deploy
```

راجع `wrangler.jsonc` قبل أول نشر للتأكد من اسم Worker المطلوب.

## Important packaging note

Read `BUILD-NOTICE.md` before production. The lockfile was regenerated against the real npm registry on 2026-09-11 and `pnpm install --frozen-lockfile` now passes. The remaining caveat is the imagery: the packaging sandbox could not download Wikimedia binaries, so the site currently ships local fallback visuals that still need to be replaced with the selected real photos.
