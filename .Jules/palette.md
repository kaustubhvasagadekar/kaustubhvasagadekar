## 2026-09-28 - Dynamic total price screen reader announcement
**Learning:** Screen reader users navigating BOGO option cards via radio buttons or clicking cards receive visual price updates in the total section, but without an `aria-live` region, the updated total amount is not announced.
**Action:** Add an `aria-live="polite"` element associated with total updates so total price changes are announced automatically when switching offer options.
