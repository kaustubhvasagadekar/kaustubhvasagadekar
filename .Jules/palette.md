## 2024-07-25 - Choice-Based Widget Keyboard Accessibility and Contrast Polish
**Learning:** For interactive, choice-based selection widgets (such as BOGO offers with nested item configuration), updating visual states and pricing updates solely on card 'click' events leaves keyboard-only navigators in the dark. Arrow-key navigation naturally changes radio button state without triggering container click handlers. Binding a native 'change' event listener to the radio buttons and bridging it to trigger the container's interactive behaviors maintains parity between mouse clicks and keyboard navigation with minimal code footprint.
**Action:** Always ensure nested radio button groups have direct change event handlers to propagate state updates to parent component containers, and use :focus-within styles for visible focus indication on custom cards.

## 2024-08-31 - Tab Navigation on Collapsed Accordions and Cards
**Learning:** Collapsing expandable content using CSS `max-height: 0` and `opacity: 0` without `visibility: hidden` leaves nested form controls (e.g. `<select>`) focusable via keyboard Tab navigation. Keyboard users will tab into invisible, hidden inputs, causing confusion and focus traps.
**Action:** Apply `visibility: hidden` to collapsed option containers and transition `visibility` alongside opacity/height to cleanly remove hidden form controls from keyboard focus order without breaking CSS animations.

## 2024-09-08 - Keyboard Focus Retention During Async Action States
**Learning:** Setting native `disabled` on a focused button (such as 'Add to Cart') during temporary loading/success states causes browsers to immediately blur the element and reset focus to `<body>`, disorienting keyboard and screen reader users.
**Action:** Use `aria-disabled="true"` with CSS `pointer-events: none` and JS state checks instead of native `disabled` to preserve keyboard focus location on interactive action buttons during asynchronous updates.
