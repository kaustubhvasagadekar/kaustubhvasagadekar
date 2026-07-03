## 2026-07-03 - [Micro-UX & Accessibility Refinement for BOGO UI]
**Learning:** Standard pink brand colors (like #FF6B82) often fail WCAG AA contrast requirements (4.5:1) against white backgrounds. Moving to a deeper shade like #C2185B ensures accessibility without sacrificing brand identity. Additionally, semantic HTML like <del> for strikethrough prices and aria-live for dynamic totals significantly improves the screen reader experience.
**Action:** Always verify color contrast ratios during the design phase and prefer semantic tags (<del>, <main>, aria-live) over purely visual styling.
