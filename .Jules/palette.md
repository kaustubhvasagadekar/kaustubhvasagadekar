## 2026-10-06 - Radio Group Keyboard Navigation Event Synchronization
**Learning:** For custom selection cards containing radio inputs, binding card update logic solely to container `click` events breaks keyboard navigation because arrow key navigation fires `change` events on the `<input type="radio">` without triggering `click` on the container element.
**Action:** Always listen to `change` events on nested radio inputs for UI state updates (card active class, total price, details expansion), and have container click events dispatch a `change` event on the input.
