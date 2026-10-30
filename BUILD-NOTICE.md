# Candidate validation

Local review dated 29 October 2026. Keep Node 24.15.0, pnpm 10.34.5 and the locked dependency graph. A fresh normal frozen installation, source check, variable-free build, generated Worker configuration and default deployment dry-run must be checked. The default site now ensures the sitemap exists without PUBLIC_SITE_URL.

The output remains SSR with prerendered home/information pages. Native Worker checks must cover all four locales, aliases, genuine localized error status/noindex/HEAD, static assets, sitemap, canonical and language alternatives. The source wrapper is included in the generated entry.

Independent visual acceptance remains necessary for mobile/desktop, Arabic RTL, translated information pages, language controls, mobile navigation, map bounds and explicitly non-documentary illustration labels. A source/VM check is not browser evidence. Publication, exact-commit CI and production version/routing acceptance are separate gates; these notes do not claim a release.
