# Palette's Journal

This journal documents critical, non-routine UX and accessibility learnings and patterns discovered during development.

## 2024-07-27 - Restore Focus Indicators & Keyboard Radio Support
**Learning:** Overwriting the default focus outline using CSS rules like `select { outline: none; }` without providing a customized focus indicator style creates a major keyboard navigation hurdle, making it impossible for sighted keyboard users to see which dropdown is currently focused.
**Action:** Always pair custom component styles with explicit `:focus-visible` or `:focus-within` outlines, and use arrow-key change listeners on nested radios to seamlessly update card-container selection logic.
