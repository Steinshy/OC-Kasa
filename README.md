# Kasa - Rental Listing Platform

**Languages:** [English](README.md) | [Français](README.fr.md)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.13-CA4245?logo=react-router&logoColor=white&style=flat-square)](https://reactrouter.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC3?logo=pwa&logoColor=white&style=flat-square)](https://web.dev/progressive-web-apps/)
[![Node](https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Steinshy%2FKasa-181717?logo=github&style=flat-square)](https://github.com/Steinshy/Kasa)

Modern web platform for peer-to-peer apartment rentals. Discover quality rental properties with detailed descriptions, photo galleries, and comprehensive information to make informed decisions.

## Quick Links

- **Live Demo:** [https://steinshy.github.io/OC-Kasa/](https://steinshy.github.io/OC-Kasa/)
- **Repository:** [https://github.com/Steinshy/Kasa](https://github.com/Steinshy/Kasa)

## Features

- Comprehensive rental listings with detailed descriptions
- Individual property pages with image galleries
- Smooth navigation with React Router 7
- Fully responsive design (mobile, tablet, desktop)
- Progressive Web App with offline support
- Advanced caching strategies (Google Fonts, API, images)
- Comprehensive error handling with 404 pages
- TypeScript for type safety
- Modern build pipeline with Vite

## Project Structure

```text
Kasa/
├── public/                     # Static assets
│   ├── favicon.*              # Favicon files
│   ├── apple-touch-icon.png   # iOS home screen icon
│   ├── site.webmanifest       # PWA manifest
│   ├── pwa-*.png              # PWA icons
│   └── web-app-manifest-*.png # Web app icons
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Card/             # Rental listing card
│   │   ├── Collapse/         # Expandable sections
│   │   ├── Gallery/          # Image slideshow
│   │   ├── Host/             # Host profile
│   │   ├── Layout/           # Main layout wrapper
│   │   ├── Loader/           # Loading spinner
│   │   ├── Rating/           # Star rating
│   │   └── Tags/             # Tag badges
│   ├── helpers/              # Utility functions
│   │   └── validator.tsx     # Data validation
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Route pages
│   │   ├── Home/            # Listings page
│   │   ├── Rental/          # Detail page
│   │   ├── About/           # About page
│   │   └── NotFound/        # 404 page
│   ├── types/               # TypeScript types
│   ├── utils/               # Configuration & API
│   └── main.tsx             # Application entry point
├── .lighthouserc.json        # Lighthouse CI config
├── eslint.config.js          # ESLint configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
└── README.md                 # This file
```

## Tech Stack

| Category      | Technology              | Version |
| ------------- | ----------------------- | ------- |
| Framework     | React                   | 19.2+   |
| Language      | TypeScript              | 5.9+    |
| Build Tool    | Vite                    | 7.3+    |
| Routing       | React Router            | 7.13+   |
| Icons         | lucide-react            | 0.575+  |
| Linting       | ESLint                  | 9.39+   |
| Formatting    | Prettier                | 3.8+    |
| CSS Linting   | Stylelint               | 17.4+   |
| PWA           | Workbox/vite-plugin-pwa | 7.0+    |
| Type Checking | TypeScript Compiler     | 5.9+    |

## Responsive Design

| Device  | Breakpoint   | Layout    |
| ------- | ------------ | --------- |
| Mobile  | < 768px      | 1 column  |
| Tablet  | 768px–1024px | 2 columns |
| Desktop | > 1024px     | 3 columns |

## Core Features

### Navigation

- Home page with rental listings
- Individual property detail pages
- About page with collapsible sections
- 404 error page
- React Router v7 with SSR support
- Shared Layout with header navigation

### Component Architecture

- Modular, reusable components
- Clear separation between pages and components
- SCSS-based styling per component
- Barrel exports with index files
- Custom hooks for navigation logic
- No HOCs (replaced with data handling)

## Browser Support

| Browser         | Version         |
| --------------- | --------------- |
| Chrome          | 90+             |
| Firefox         | 88+             |
| Safari          | 14+             |
| Edge            | 90+             |
| Mobile Browsers | Latest versions |

## Accessibility

- Semantic HTML structure
- Full keyboard navigation
- Visible focus indicators
- WCAG AA contrast compliance
- Alternative text for images
- Proper ARIA attributes
- Accessible color usage

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/Steinshy/Kasa.git
cd Kasa
npm install
```

### Development

```bash
npm run dev
```

Application runs on `http://localhost:5173` with hot module reloading.

### Production Build

```bash
npm run build
```

Production-optimized files are generated in `dist/` folder.

```bash
npm run preview
```

Preview the production build locally on port 3000.

### Available Commands

| Command                 | Purpose                                          |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Start development server on port 5173            |
| `npm run build`         | Create optimized production build                |
| `npm run start`         | Serve production build (requires build first)    |
| `npm run preview`       | Preview production build on port 3000            |
| `npm run lint`          | Check code with ESLint                           |
| `npm run lint:fix`      | Auto-fix ESLint violations                       |
| `npm run format`        | Format code with Prettier                        |
| `npm run format:check`  | Verify formatting without changes                |
| `npm run stylelint`     | Lint CSS files                                   |
| `npm run stylelint:fix` | Auto-fix CSS issues                              |
| `npm run typecheck`     | Verify TypeScript types                          |
| `npm run analyze`       | Bundle size analysis (generates dist/stats.html) |
| `npm run lighthouse`    | Run Lighthouse CI audit                          |
| `npm run clean`         | Remove dist/ and .lighthouseci/ folders          |
| `npm run update:check`  | Check for outdated dependencies                  |

## Code Quality

The project enforces code quality through multiple tools:

| Tool           | Purpose                       | Command              |
| -------------- | ----------------------------- | -------------------- |
| **ESLint**     | JavaScript/TypeScript linting | `npm run lint`       |
| **Prettier**   | Code formatting               | `npm run format`     |
| **Stylelint**  | CSS linting                   | `npm run stylelint`  |
| **TypeScript** | Type safety                   | `npm run typecheck`  |
| **Lighthouse** | Performance audits            | `npm run lighthouse` |

Strict configuration ensures consistent, maintainable code across the project.

## Performance Features

- CSS code splitting with separate bundles per component
- Image lazy loading and optimization
- Service Worker with offline-first caching
- Gzip compression for network transfers
- Code minification with esbuild
- Tree-shaking for unused code removal

## Key Configuration Files

- `eslint.config.js` - Flat ESLint configuration
- `vite.config.ts` - Build tool setup with PWA support
- `tsconfig.json` - TypeScript compiler options
- `.lighthouserc.json` - Lighthouse CI settings

## Resources

- [React Documentation](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web.dev PWA Guide](https://web.dev/progressive-web-apps/)

## License

Educational project for OpenClassrooms curriculum.

Copyright 2026 Kasa. All rights reserved.

This project is provided "as is" without any warranty, express or implied.
