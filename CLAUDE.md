# Kasa

OpenClassrooms rental-listing app: React 19, TypeScript, `react-router` 8, Vite 8 (+ vite-plugin-pwa), SCSS, lucide-react.

## Commands

- `pnpm run dev` (:5173), `build`, `preview` (:3000), `typecheck`.
- `lint` / `lint:fix` (ESLint), `format` / `format:check` (Prettier), `stylelint` / `stylelint:fix` (SCSS).
- `analyze` writes `dist/stats.html`; `lighthouse` builds, serves a preview and runs LHCI; `clean` removes `dist/` and `.lighthouseci/`.
- Env (in `.env` or exported): `VITE_PUBLIC_API_SERVER` (default `http://localhost:3000`), `VITE_BASE_PATH` (default `/`), `VITE_PUBLIC_SITE_URL` (absolute origin; makes the PWA manifest use absolute URLs).

## Layout

- `src/main.tsx` holds the entry and routes (Home, Rental, About, NotFound); `src/utils/kasa-api.ts` is the cached API client (`buildRental` normalizes rentals); `src/helpers/validator.ts` validates; `src/types/rental.ts` types.
- `src/components/<Name>/` is a folder with `index.ts` barrel, the `.tsx`, and an optional `style.scss`.
- `src/hooks/` has `use-collapse-navigation` and `use-gallery-navigation`.

## Rules

- Components receive data as props (no HOCs); data flows fetch (`kasa-api.ts`) → validate (`validator.ts`) → typed `Rental`.
- Loading state uses the router's `hydrateFallbackElement`.
- PWA: auto-updating service worker with runtime caching (fonts and images cache-first, API network-first, JS/CSS stale-while-revalidate).
