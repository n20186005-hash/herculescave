# Build notice

## Lockfile status: RESOLVED (2026-09-11)

The previously committed `pnpm-lock.yaml` was a hand-written stub: it listed the
importer (direct) dependencies but had no `packages:` / `snapshots:` section, so
CI failed with:

```
ERR_PNPM_LOCKFILE_MISSING_DEPENDENCY  Broken lockfile: no entry for '@astrojs/cloudflare@14.3.1' in pnpm-lock.yaml
```

That stub has been deleted and regenerated against the real npm registry with
`pnpm install --lockfile-only` (pnpm 10.34.5), so it now contains the full
transitive resolution graph (`packages:` + `snapshots:`).

Verified locally:

```bash
rm -f pnpm-lock.yaml
pnpm install --lockfile-only      # full resolution
pnpm install --frozen-lockfile    # passes, node_modules created
```

Re-run the two commands above only if `package.json` changes.

## Remaining caveat: photos

The sandbox that assembled this package could not download Wikimedia image
binaries directly into the filesystem. The project therefore ships local
AI-generated fallback visuals so the package is not visually broken, plus exact
Wikimedia Commons real-photo source links in `IMAGE-SOURCES.md` and
`docs/REAL-PHOTO-REPLACEMENT.md`. Replace them with the real photos when the
licence/attribution review is done.

## Final validation checklist

Run with Node 24.15.0:

```bash
corepack enable
corepack prepare pnpm@10.34.5 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Then verify:

```bash
! grep -RniE 'example\.com|localhost|chrome-extension://' dist
```

If `PUBLIC_SITE_URL` is unset, `@astrojs/sitemap` is intentionally disabled and no placeholder domain is emitted. If it is set, inspect the generated sitemap and ensure it contains only the configured real domain.
