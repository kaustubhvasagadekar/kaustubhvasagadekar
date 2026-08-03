## 2026-08-03 - Nested Selection Double Focus Polish
**Learning:** To avoid overlapping, double focus outline indicators on choice-based product selection cards when nested dropdowns are focused, use the modern CSS pseudo-class combination `.parent:focus-within:not(:has(select:focus))` to hide the parent outline while maintaining its active border state, ensuring visual clarity for keyboard users.
**Action:** Apply this focus-within state exception on all nested selection cards in the design system to prevent focus outline stacking next time.

## 2025-08-01 - BOGO-UI Micro-UX and Accessibility Polish
**Learning:** Solid colors (like #757575) instead of opacity adjustments on original strike-through prices ensure a WCAG AA compliant contrast ratio (>= 4.5:1) on light backgrounds. Using HTML semantic `<del>` tags with explicit `aria-label`s provides screen readers with proper pricing context. Adding interactive disabled feedback and animated transition states to primary call-to-action buttons significantly enhances the user's confidence during state transitions.
**Action:** Always favor semantic tags (`<del>`), verify contrast ratios programmatically/visually, and build delightful async button states using robust transition effects next time.
