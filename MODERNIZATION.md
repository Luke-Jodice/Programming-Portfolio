# Portfolio Modernization

A summary of the modernization work done on the codebase.

## What changed

### Architecture migration

- `src/pages/` → `src/app/` (App Router, React Server Components)
- Data fetched server-side in RSC; removed every `useEffect` + `useState` for data loading
- `getGithubRepos` and `getArticles` now get proper `next.revalidate: 3600` (1-hour ISR) — the comment in the old code noted this was silently broken in Pages Router
- New `loading.tsx`, `error.tsx`, `not-found.tsx` boundaries
- Per-page `Metadata` (titles, descriptions, OpenGraph, Twitter, viewport, robots) — site was previously unindexable

### File reorg

- Components moved from `src/pages/components/` to flat `src/components/` (consistent PascalCase)
- Server data fetchers moved to `src/server/data/` (with `server-only` import guard)
- Static JSON moved from `src/pages/*.json` to `src/data/`
- Deleted unused files:
  - `interfaces.tsx` (empty)
  - `Contact-Form.tsx` (never imported)
  - `ItemCard.tsx` (never imported)
  - `ContentHeader.tsx` (never imported)
  - `combined_article.json` (never imported)
  - `github_endpoint.json` (never imported)
  - `checklist.txt` (stale lint log)
  - `tailwind.config.ts` (Tailwind 4 uses CSS `@theme`)
  - `postcss.config.cjs` (duplicate of `.mjs`)
  - `card.css` (dead classes)

### Tooling / security

- Next.js `16.2.3` → **`16.2.9`** (closes 13 security advisories, including high-severity DoS)
- `@t3-oss/env-nextjs` `0.3.1` → **`0.13.11`**
- Removed `autoprefixer` (Tailwind 4 ships its own) and `@types/prettier` (prettier 3 has built-in types)
- TS target `es2017` → **`es2022`**, added Next.js TS plugin
- `next lint` was removed in Next 16 — switched to direct `eslint`
- Added `npm run typecheck` and `format` scripts
- Cleaned conflicting `:root` overrides in `globals.css`, removed IE-era `progid:DXImageTransform` filter, removed unused `lef`/`rig` invalid selectors

### Accessibility / UX

- Header: GitHub/LinkedIn anchors got `aria-label`, `target="_blank"`, decorative icons marked `aria-hidden`
- Navbar: fixed invalid `<button><Link>` nesting, added `aria-current` for active page, mobile-friendly flex layout
- All decorative SVGs marked `aria-hidden`
- `<time dateTime>` retained where appropriate

### Stay-up-to-date

- `.github/workflows/ci.yml`: install + Prisma generate + lint + typecheck + build on every push/PR
- `.github/dependabot.yml`: weekly grouped updates (Next+React, Tailwind, TS+ESLint, Prisma) plus monthly Actions

## Verified

- `tsc --noEmit` ✓
- `eslint . --max-warnings=0` ✓
- `next build` ✓ — all 6 routes prerendered, ISR active on `/projects` and `/articles`
- `next dev` ✓ — all 4 routes return 200, metadata and data rendered correctly

## Worth knowing

- The Header's GitHub link now points to `github.com/luke-jodice` to match the API call (was inconsistently `ljodiceendicott` before)
- The Tailwind theme color conflict is resolved — primary is green (`#4f7942`); the old `:root` override that silently made it gray is gone, so primary buttons/links will now actually look green
- 2 npm audit warnings remain (transitive postcss in Next's bundle) — known Next packaging false-positive; `npm audit fix --force` would downgrade Next to v9, so ignore those
- Vercel will pick up App Router automatically on next deploy

## New project layout

```
src/
├── app/                      # App Router
│   ├── layout.tsx            # Root layout + global metadata
│   ├── page.tsx              # Home
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── projects/page.tsx     # ISR (revalidate=3600)
│   ├── experience/page.tsx
│   └── articles/page.tsx     # ISR (revalidate=3600)
├── components/               # Flat, PascalCase
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx            # 'use client' (uses usePathname)
│   ├── EmploymentCard.tsx
│   ├── ProgramCard.tsx
│   ├── PreviewCard.tsx
│   ├── ArticleCard.tsx
│   ├── CurrentJob.tsx
│   └── ProjectShowcase.tsx
├── data/                     # Static JSON
│   ├── resume.json
│   └── articles-static.json
├── server/
│   ├── db.ts                 # Prisma singleton
│   └── data/                 # 'server-only' fetchers
│       ├── articles.ts
│       ├── experience.ts
│       └── projects.ts
├── lib/types.ts
├── photos/
├── styles/globals.css
└── env.mjs
```

## NPM scripts

```bash
npm run dev         # next dev
npm run build       # next build
npm run start       # next start
npm run lint        # eslint . --max-warnings=0
npm run typecheck   # tsc --noEmit
npm run format      # prettier --write src/**/*.{ts,tsx,css,json}
npm run format:check
```
