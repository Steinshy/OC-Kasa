# Kasa Frontend

## Overview
Rental listing web app for Kasa (OpenClassrooms project). Built with React 19, TypeScript, React Router 8, and Vite 8. Uses lucide-react for icons.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Routing**: React Router 8 (`react-router` package)
- **Build**: Vite 8, vite-plugin-pwa, vite-plugin-checker, vite-tsconfig-paths
- **Linting**: ESLint 10 (flat config), Prettier, Stylelint, typescript-eslint
- **Icons**: lucide-react

## Project Structure
```
src/
  components/    # Reusable UI components
    Card/        # Rental listing card
    Collapse/    # Expandable/collapsible section
    Gallery/     # Image slideshow with navigation
    Host/        # Host profile display (name + picture)
    Layout/      # App layout wrapper
    Loader/      # Loading spinner
    Rating/      # Star rating display (1-5)
    Tags/        # Tag badges
  helpers/       # Validation helpers (validator.ts)
  hooks/         # Custom hooks (use-collapse-navigation, use-gallery-navigation)
  pages/         # Route pages
    About/       # About page with collapses
    Home/        # Home page with rental cards
    NotFound/    # 404 page
    Rental/      # Rental detail page
  types/         # TypeScript types (rental.ts)
  utils/         # Config and API (config.ts, kasa-api.ts)
```

## Commands

### Development
- `pnpm run dev` - Start dev server (port 5173, proxy API to `VITE_PUBLIC_API_SERVER`)
- `pnpm run typecheck` - TypeScript type checking
- `pnpm run lint` / `pnpm run lint:fix` - ESLint
- `pnpm run format` / `pnpm run format:check` - Prettier
- `pnpm run stylelint` / `pnpm run stylelint:fix` - Stylelint

### Build & Production
- `pnpm run build` - Production build (outputs to `dist/`, generates manifest)
- `pnpm run preview` - Preview production build locally (port 3000)

### Analysis & Optimization
- `pnpm run analyze` - Bundle analysis (generates `dist/stats.html` with rollup-plugin-visualizer)
- `pnpm run lighthouse` - Run Lighthouse CI audit (requires `.lighthouserc.json`)

### Maintenance
- `pnpm run clean` - Remove `dist/` and `.lighthouseci/` folders
- `pnpm run update:check` - Check for dependency updates (ncu)
- `pnpm run update:interactive` - Interactive update with prompts
- `pnpm run update:all` - Update all dependencies

## Environment Configuration

- `VITE_PUBLIC_API_SERVER` - API server URL (default: `http://localhost:3000`)
- `VITE_BASE_PATH` - Base path for app deployment (default: `/`)
- `VITE_PUBLIC_SITE_URL` - Absolute origin for PWA manifest (e.g. `https://owner.github.io`). When set, manifest uses absolute URLs for start_url, scope, and icons.

Set in `.env`, or export the variable before the command (for example `VITE_PUBLIC_API_SERVER=... ppnpm run dev`).

## Features

### Progressive Web App (PWA)
- Auto-updating service worker
- Runtime caching strategy:
  - **Google Fonts**: Cache-first (365 day expiry)
  - **Images**: Cache-first (30 day expiry)
  - **API responses**: Network-first (5 min cache)
  - **JS/CSS**: Stale-while-revalidate (7 day expiry)
- Max bundle size: 10MB
- Offline-first caching with auto-cleanup

### Build Optimization
- CSS code splitting enabled
- esbuild minification
- Gzip size reporting
- Module preload polyfill
- Chunk size warnings at 500KB

## Architecture Patterns
- **Component convention**: Each component in its own folder with `index.ts` barrel export, component `.tsx`, and optional `style.scss`
- **Data flow**: Rental data fetched via `kasa-api.ts`, validated/transformed by `helpers/validator.ts`, typed with `types/rental.ts`
- **Custom hooks**: Navigation logic extracted into hooks (`use-collapse-navigation`, `use-gallery-navigation`)
- **No HOCs**: components receive data directly; rentals are normalized by `buildRental` in `utils/kasa-api.ts`
- **Loader pattern**: Uses `hydrateFallbackElement` for loading states

## Key Files
- `src/main.tsx` - App entry, route definitions
- `src/utils/kasa-api.ts` - API client with caching
- `src/types/rental.ts` - Rental type definitions
- `src/helpers/validator.ts` - Data validation helpers
- `eslint.config.js` - ESLint flat config with TS support
- `vite.config.ts` - Vite configuration
