# Kasa Project - TODO

---

## Phase 1: Core Functionality

### 1. Gallery Component
- [ ] Create `src/components/Gallery/Gallery.jsx`
- [ ] Create `src/components/Gallery/style.css`
- [ ] Implement state management for current image index
- [ ] Add Previous/Next navigation buttons
- [ ] Implement circular navigation (first <-> last image)
- [ ] Add image counter display (e.g., "1/5")
- [ ] Hide controls when only 1 image
- [ ] Style with fixed height and image cropping
- [ ] Add responsive design
- [ ] Test with various image arrays

### 2. Interactive Collapse Component
- [ ] Refactor `src/components/Dropdown/Dropdown.jsx` to `Collapse.jsx`
- [ ] Add `useState` for open/closed state
- [ ] Implement click toggle functionality
- [ ] Add CSS transitions/animations
- [ ] Support both string and JSX children
- [ ] Add keyboard accessibility (Enter/Space)
- [ ] Add ARIA attributes (`aria-expanded`)
- [ ] Default state: closed on page load

### 3. Enhanced Rental Detail Page
- [ ] Integrate Gallery component (pictures array)
- [ ] Add title and location display
- [ ] Add host profile section (name + picture)
- [ ] Integrate Rating component
- [ ] Add Tags list
- [ ] Add Description in Collapse
- [ ] Add Equipment list in Collapse
- [ ] Style complete layout per Figma mockups
- [ ] Implement responsive design

---

## Phase 2: UI Components & Polish

### 4. Rating Component
- [ ] Create `src/components/Rating/Rating.jsx`
- [ ] Create `src/components/Rating/style.css`
- [ ] Implement star rendering logic (filled/empty, 1-5)
- [ ] Add ARIA labels for accessibility
- [ ] Test with different rating values

### 5. Tag Component
- [ ] Create `src/components/Tag/Tag.jsx`
- [ ] Create `src/components/Tag/style.css`
- [ ] Style as badges/chips (#ff6060 background)
- [ ] Ensure proper row wrapping behavior
- [ ] Add responsive sizing

### 6. Responsive Design
- [ ] Implement mobile layout (<768px) - 1 column grid
- [ ] Implement tablet layout (768px-1024px) - 2 column grid
- [ ] Implement desktop layout (>1024px) - 3 column grid
- [ ] Test Gallery on all screen sizes
- [ ] Test Rental Detail on all screen sizes
- [ ] Test navigation on mobile
- [ ] Test all interactions on touch devices

### 7. About Page Content
- [ ] Add company information sections with Collapse components
- [ ] Style page layout per Figma mockups
- [ ] Add responsive design

---

## Phase 3: Quality & Performance

### 8. CI Pipeline Fixes
- [ ] Remove `continue-on-error: true` from all jobs in `ci.yml`
- [ ] Remove `|| true` from all commands
- [ ] Consolidate duplicate security jobs (security-scan + dependency-audit)
- [ ] Adjust performance budgets (JS: 300->400KB, CSS: 30->50KB, Total: 500->600KB)
- [ ] Add caching optimization for node_modules and build output

### 9. Error Handling & Accessibility
- [ ] Improve NotFound page design
- [ ] Add loading states for async operations
- [ ] Audit keyboard navigation across all components
- [ ] Test screen reader compatibility
- [ ] Check color contrast (WCAG AA compliance)
- [ ] Add focus indicators
- [ ] Test with accessibility tools

### 10. Performance Optimization
- [ ] Analyze bundle size
- [ ] Implement code splitting if needed
- [ ] Optimize images (lazy loading)
- [ ] Test with Lighthouse (target >90 on all scores)
- [ ] Optimize CSS delivery
- [ ] Test performance on slow connections

---
