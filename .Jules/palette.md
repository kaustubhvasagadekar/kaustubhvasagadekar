## 2026-06-16 - [Interactive Feedback & Focus Indicators]
**Learning:** Adding immediate visual feedback for asynchronous-like actions (like "Add to Cart") and clear focus indicators significantly improves the perceived speed and accessibility of the interface. Using `aria-live` ensures these state changes are communicated to assistive technologies.
**Action:** Always include loading and success states for primary call-to-action buttons and ensure `:focus-visible` or `:focus-within` is styled for all interactive elements.
