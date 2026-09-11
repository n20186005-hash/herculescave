# Build notice

This project was assembled in a restricted execution sandbox. Two important validation steps could not be honestly completed inside that sandbox:

1. The sandbox cannot connect to the npm registry, so it could not resolve the complete transitive dependency graph, install pnpm packages, or run `pnpm check` / `pnpm build`.
2. The sandbox cannot download Wikimedia image binaries directly into the filesystem. The project therefore includes local AI-generated fallback visuals so the package is not visually broken, plus exact Wikimedia Commons real-photo source links in `IMAGE-SOURCES.md` and `docs/REAL-PHOTO-REPLACEMENT.md`.

Do **not** treat this package as having passed the requested frozen-lockfile CI gate yet.

## Required network-enabled final validation

Run with Node 24.15.0:

```bash
rm -rf node_modules pnpm-lock.yaml
corepack enable
corepack prepare pnpm@10.34.5 --activate
pnpm install
pnpm check
pnpm build
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Then verify:

```bash
! grep -RniE 'example\.com|localhost|chrome-extension://' dist
```

If `PUBLIC_SITE_URL` is unset, `@astrojs/sitemap` is intentionally disabled and no placeholder domain is emitted. If it is set, inspect the generated sitemap and ensure it contains only the configured real domain.
