## 2026-09-28 - Dynamic total price screen reader announcement
**Learning:** Screen reader users navigating BOGO option cards via radio buttons or clicking cards receive visual price updates in the total section, but without an `aria-live` region, the updated total amount is not announced.
**Action:** Add an `aria-live="polite"` element associated with total updates so total price changes are announced automatically when switching offer options.

## 2026-09-29 - Select dropdown placeholder disablement and selection styling
**Learning:** For product dropdowns acting as placeholders (e.g. 'Colour'), marking placeholder options as disabled once loaded prevents invalid re-selection, and toggling a `.has-value` class gives users clear visual confirmation of configured selections.
**Action:** Dynamically disable placeholder options and add `.has-value` styling on select change events.
