## 2024-06-21 - Accessible Color Contrast and Keyboard Parity

**Learning:** Visual contrast is critical; the previous pink (#FF6B82) failed WCAG AA for small text on white. Using a deeper shade (#C2185B) ensures accessibility. Also, keyboard navigation with radio buttons requires listening to the 'change' event specifically, as users navigating with arrow keys do not trigger 'click' events on the container.

**Action:** Always verify color contrast ratios using tools or guidelines (AA >= 4.5:1). Ensure UI state updates are bound to semantic events (like 'change' for radios) to maintain parity between mouse and keyboard users.
