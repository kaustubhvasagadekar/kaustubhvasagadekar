## 2026-09-16 - Keyboard radio parity and live region updates
**Learning:** Selecting custom radio cards using radio change events ensures both mouse clicks and keyboard arrow key navigation update UI state consistently without double triggers.
**Action:** Always listen to `change` on radio inputs and dispatch manual change events on card click.

## 2026-09-20 - Custom card focus visible indicator pattern
**Learning:** Using `.card:has(input[type="radio"]:focus-visible)` provides explicit high-contrast visual focus indicators for complex radio card components during keyboard navigation without overlapping nested interactive controls.
**Action:** Apply `:has(:focus-visible)` on custom input container cards to ensure clear visual focus states for keyboard users.

## 2026-09-22 - Dropdown validation focus and selection state feedback
**Learning:** Validating required dropdown selections before processing primary actions by focusing the first unselected field and setting `aria-invalid="true"` alongside `.select-error` guides users directly to missing options.
**Action:** Always focus missing required fields and clear error states on user selection or option change.
