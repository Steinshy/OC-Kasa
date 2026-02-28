# Kasa Project - TODO

---

## Phase 1: Core Functionality

### 1. Gallery Component
- [x] Create `src/components/Gallery/Gallery.jsx`
- [x] Create `src/components/Gallery/style.css`
- [x] Implement state management for current image index
- [x] Add Previous/Next navigation buttons
- [x] Implement circular navigation (first <-> last image)
- [x] Add image counter display (e.g., "1/5")
- [x] Hide controls when only 1 image
- [x] Style with fixed height and image cropping
- [x] Add responsive design

### 2. Interactive Collapse Component
- [x] Refactor `src/components/Dropdown/Dropdown.jsx` to `Collapse.jsx`
- [x] Add `useState` for open/closed state
- [x] Implement click toggle functionality
- [x] Add CSS transitions/animations
- [x] Support both string and JSX children
- [x] Add keyboard accessibility (Enter/Space)
- [x] Add ARIA attributes (`aria-expanded`)
- [x] Default state: closed on page load

### 3. Enhanced Rental Detail Page
- [x] Integrate Gallery component (pictures array)
- [x] Add title and location display
- [x] Add host profile section (name + picture)
- [x] Integrate Rating component
- [x] Add Tags list
- [x] Add Description in Collapse
- [x] Add Equipment list in Collapse
- [x] Style complete layout per Figma mockups
- [x] Implement responsive design

---

## Phase 2: UI Components & Polish

### 4. Rating Component
- [x] Create `src/components/Rating/Rating.jsx`
- [x] Create `src/components/Rating/style.css`
- [x] Implement star rendering logic (filled/empty, 1-5)
- [x] Add ARIA labels for accessibility

### 5. Tag Component
- [x] Create `src/components/Tag/Tag.jsx`
- [x] Create `src/components/Tag/style.css`
- [x] Style as badges/chips (#ff6060 background)
- [x] Ensure proper row wrapping behavior
- [x] Add responsive sizing

### 6. Responsive Design
- [x] Implement mobile layout (<768px) - 1 column grid
- [x] Implement tablet layout (768px-1024px) - 2 column grid
- [x] Implement desktop layout (>1024px) - 3 column grid
- [x] Test Gallery on all screen sizes
- [x] Test Rental Detail on all screen sizes
- [x] Test navigation on mobile and all screen sizes
- [x] Test all interactions on touch devices

### 7. About Page Content
- [x] Add company information sections with Collapse components
- [x] Style page layout per Figma mockups
- [x] Add responsive design

---

## Phase 3: Quality & Performance

### 8. CI Pipeline Fixes
- [x] Remove `continue-on-error: true` from all jobs in `ci.yml`
- [x] Remove `|| true` from all commands
- [x] Consolidate duplicate security jobs (security-scan + dependency-audit)
- [x] Adjust performance budgets (JS: 300->400KB, CSS: 30->50KB, Total: 500->600KB)
- [x] Add caching optimization for node_modules and build output

### 9. Error Handling & Accessibility
- [x] Improve NotFound page design
- [x] Add loading states for async operations
- [x] Audit keyboard navigation across all components
- [x] Test screen reader compatibility
- [x] Check color contrast (WCAG AA compliance)
- [x] Add focus indicators
- [x] Test with accessibility tools

### 10. Performance Optimization
- [x] Analyze bundle size
- [x] Implement code splitting if needed
- [x] Optimize images (lazy loading)
- [x] Test with Lighthouse (target >90 on all scores)
- [x] Optimize CSS delivery
- [x] Test performance on slow connections

---
