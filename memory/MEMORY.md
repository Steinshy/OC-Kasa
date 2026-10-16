---
name: Kasa Project Memory
description: React SPA component library and state management patterns
type: React SPA
project: Kasa
category: React Application
phase: Active Development
updated: 2026-03-23
tags:
  - React
  - TypeScript
  - Vite
  - Components
  - State Management
  - Testing
  - Performance
  - PWA
---

# Kasa Memory Index

**Last Consolidated:** March 23, 2026

## Quick Reference

| Section | Purpose |
|---------|---------|
| [Component Patterns](component_patterns.md) | Reusable component architecture, container/presentational split |
| [State Management](state_patterns.md) | Props drilling, Context API, custom hooks strategy |
| [API Integration](api_integration.md) | Service layer, mock data, error handling |
| [Code Quality](code_quality.md) | ESLint, Prettier, TypeScript strict mode |
| [Testing Strategy](testing_strategy.md) | Jest, Testing Library, E2E with Playwright |
| [Performance Optimization](performance.md) | Code splitting, PWA, bundle analysis, caching |

## Project Overview

**Kasa** is a React SPA showcasing property rental listings with filtering, search, and responsive design.

- **Tech Stack:** React 19 + TypeScript + Vite
- **State:** Props drilling for shallow components, custom hooks for logic extraction
- **Testing:** Jest + React Testing Library with 70%+ coverage target
- **Build:** Vite with code splitting, PWA service worker for offline support
- **Deployment:** Vercel (automatic on main branch)

## Phase & Status

- **Phase:** Active Development
- **Memory Status:** ✅ Complete (Kasa component patterns fully documented)
- **Next Review:** April 20, 2026

## Key Learnings by Category

### Component Architecture
- **File Structure:** Pages in `src/pages/`, reusable components in `src/components/`
- **Custom Hooks:** `use-collapse-navigation`, `use-gallery-navigation` extracted from components
- **Pattern:** Container/Presentational split reduces testing burden and improves reusability
- **Example:** `PropertyCard` (pure presentational) vs `PropertyList` (data fetching container)

### State Management
- **Strategy:** Props drilling for <5 levels, custom hooks for extracted logic
- **Avoid:** Redux/Context overhead for small to medium apps
- **In Practice:** Navigation state passed as props, gallery state managed in custom hook
- **Future:** Consider Context if property count > 10 and concurrent filters

### API Integration
- **Service Layer:** `src/utils/kasa-api.ts` centralizes all API calls
- **Error Handling:** Try/catch in loader, user-friendly messages in UI
- **Mock Development:** Use environment flag `VITE_USE_MOCK_API` for development
- **Caching:** Browser cache for static property data, SWR pattern for real-time updates

### Testing Focus
- **Unit Tests:** Test components with mocked props and event handlers
- **Integration Tests:** Test property filters with real data flow
- **E2E:** Test user journeys (search → filter → view details)
- **Coverage Target:** 70%+ for critical paths, 50%+ overall

### Performance Patterns
- **Code Splitting:** Route-based splitting with React.lazy()
- **PWA:** Service worker caches property data and images
- **Bundle:** Current size ~150KB gzipped (target <120KB)
- **Images:** WebP with JPG fallback, lazy loading below fold

## Related Files

- **Detailed documentation** in individual markdown files (component_patterns.md, state_patterns.md, etc.)
- **Source code:** `/Users/steinshy/Projects/OpenClassrooms/Kasa/src/`
- **Test suite:** `/Users/steinshy/Projects/OpenClassrooms/Kasa/tests/`
- **Project config:** CLAUDE.md (overview), package.json (dependencies)

## Monthly Review Checklist

- [ ] Review new components added last month
- [ ] Check test coverage for new features
- [ ] Audit bundle size changes
- [ ] Update component patterns if new patterns discovered
- [ ] Tag any architectural decisions in consolidation_status.md

---

**Next Step:** Create detailed component_patterns.md if not already present.
