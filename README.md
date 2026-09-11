# Hercules Caves / مغارة هرقل

موقع عربي RTL أحادي الصفحة لمغارة هرقل في طنجة، مبني بـ Astro + Tailwind CSS + TypeScript ومهيأ لـ Cloudflare Workers.

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

Read `BUILD-NOTICE.md` before production. The packaging sandbox could not access npm or directly download Wikimedia binaries, so final network-enabled lockfile generation/build validation and replacement with the selected real photos remain required.
