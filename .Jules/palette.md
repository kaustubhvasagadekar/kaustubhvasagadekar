## 2026-10-17 - Dynamic CTA Announcements & Disability Guards
**Learning:** Setting `aria-live="polite"` on dynamic CTAs ensures screen reader announcements, while guarding `aria-disabled="true"` in handlers and CSS prevents double-submits.
**Action:** Always set `aria-live="polite"` on dynamic CTA buttons and check `aria-disabled` in click listeners.
