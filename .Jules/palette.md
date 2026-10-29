## 2026-10-28 - Synchronize Radio Change for Option Card Expansion
**Learning:** In custom selection cards with nested radio buttons, keyboard arrow-key navigation fires `change` events on `<input type="radio">` directly, bypassing card click listeners and leaving detailed options collapsed unless explicitly synchronized.
**Action:** Always bind a `change` event listener to nested radio inputs that delegates to the parent card container (`option.click()`) to ensure keyboard navigation smoothly expands options and updates total price feedback.
