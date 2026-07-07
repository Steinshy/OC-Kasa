# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Kasa — a French apartment-rental SPA (OpenClassrooms front-end project).
React 19 + TypeScript + Vite 7 + React Router 7 (data routers, SPA mode — no SSR).
Deployed to GitHub Pages at `/OC-Kasa/` via `.github/workflows/deploy.yml`.

## Commands (pnpm only — no npm/yarn)

| Command          | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| `pnpm dev`       | Dev server on port 5173                        |
| `pnpm build`     | Production build to `dist/`                    |
| `pnpm preview`   | Serve the build on port 3000                   |
| `pnpm lint`      | ESLint (flat config, `eslint.config.js`)       |
| `pnpm typecheck` | `tsc --noEmit` (strict mode)                   |
| `pnpm stylelint` | SCSS lint (alphabetical property order)        |
| `pnpm format`    | Prettier                                       |
| `pnpm analyze`   | Build + bundle visualizer (`dist/stats.html`)  |

Run `pnpm lint && pnpm typecheck && pnpm stylelint && pnpm build` before committing.

## Architecture

- `src/main.tsx` — entry point; defines all routes with `createBrowserRouter`.
  Route loaders fetch data (`fetchRentals` / `fetchRentalById`); pages read it
  with `useLoaderData`. Pages are lazy-loaded.
- `src/utils/kasa-api.ts` — data layer. Fetches `public/data/logements.json`
  (with retry + module-level cache) and normalizes raw records into
  `NormalizedRental` via `buildRental`.
- `src/helpers/validator.ts` — runtime type guards / sanitizers used by
  `buildRental` (data is untrusted).
- `src/types/rental.ts` — `Rental` (raw, all optional) and `NormalizedRental`
  (validated, with computed fields like `images`, `ratingValue`).
- `src/components/<Name>/` — one folder per component: `<Name>.tsx`,
  `index.ts` barrel re-export, `style.scss`. Same pattern in `src/pages/`.
- `src/hooks/` — kebab-case hook files (`use-gallery-navigation.ts`).
- `src/styles/` — `_variables.scss` (colors, spacing, breakpoints) and
  `_mixins.scss` (breakpoint mixins, `hero-base`, `hero-overlay`).
- `src/utils/toast.ts` — imperative DOM toast used by route loaders for
  network errors (styles live in `src/index.scss`).

## Conventions

- Path alias `@/*` → `src/*` (tsconfig + vite-tsconfig-paths).
- Components/pages: PascalCase folder + file; everything else kebab-case
  (enforced by `unicorn/filename-case`).
- Import order is enforced (`import/order`, alphabetized, `@/**` as internal).
- SCSS: `@use '../../styles/mixins' as *;` at the top of component styles;
  stylelint enforces alphabetical property order.
- Responsive: desktop-first with `@include small-desktop / tablet / mobile`
  max-width mixins (1024 / 768 / 480 px).
- UI copy is French; keep `aria-label`s French too.
- Base path: never hardcode `/OC-Kasa/`. Use `import.meta.env.BASE_URL`
  (see `src/utils/config.ts`); CSS/public URLs are rebased by Vite at build.

## Gotchas

- `public/assets` hero images ship as JPEG + WebP pairs consumed by the
  `hero-base($name)` mixin — keep both files when replacing them.
- The PWA (vite-plugin-pwa/Workbox) precaches the whole build; keep hero
  images small or the precache balloons.
- `pnpm.onlyBuiltDependencies` allows esbuild/@parcel/watcher install
  scripts — new native deps may need to be added there.
- Deploy workflow sets `VITE_BASE_PATH` and copies `index.html` → `404.html`
  for SPA routing on GitHub Pages.
