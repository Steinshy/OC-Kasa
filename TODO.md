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
- [ ] Integrate Gallery component (pictures array)
- [x] Add title and location display
- [ ] Add host profile section (name + picture)
- [x] Integrate Rating component
- [x] Add Tags list
- [ ] Add Description in Collapse
- [ ] Add Equipment list in Collapse
- [ ] Style complete layout per Figma mockups
- [ ] Implement responsive design

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
- [ ] Add responsive sizing

### 6. Responsive Design
- [x] Implement mobile layout (<768px) - 1 column grid
- [x] Implement tablet layout (768px-1024px) - 2 column grid
- [x] Implement desktop layout (>1024px) - 3 column grid
- [ ] Test Gallery on all screen sizes
- [ ] Test Rental Detail on all screen sizes
- [ ] Test navigation on mobile
- [ ] Test all interactions on touch devices

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
- [ ] Improve NotFound page design
- [ ] Add loading states for async operations
- [ ] Audit keyboard navigation across all components
- [ ] Test screen reader compatibility
- [ ] Check color contrast (WCAG AA compliance)
- [ ] Add focus indicators
- [ ] Test with accessibility tools

### 10. Performance Optimization
- [x] Analyze bundle size
- [ ] Implement code splitting if needed
- [ ] Optimize images (lazy loading)
- [ ] Test with Lighthouse (target >90 on all scores)
- [ ] Optimize CSS delivery
- [ ] Test performance on slow connections

---
