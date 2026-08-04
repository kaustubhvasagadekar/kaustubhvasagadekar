## 2024-08-04 - Minimalist Keyboard Arrow Selection
**Learning:** For custom selection cards containing nested radio buttons, keyboard arrow-key navigation only updates the checked state of the radio inputs, leaving custom card container active states and total prices outdated. Simply binding a 'change' listener on the radio to programmatically click the parent option card ('radio.addEventListener("change", () => radio.checked && option.click())') handles keyboard navigation completely without circular event loops.
**Action:** Always link nested radio changes to parent selection actions to maintain parity between keyboard arrow navigation and mouse selection.

## 2024-08-04 - Dynamic Accessibility Injections
**Learning:** When working under strict line limits (e.g., keeping changes under 50 lines), directly editing HTML files to add dozens of structural attributes (like 'aria-label' on size/color dropdowns) can easily exceed the constraint. Dynamically injecting these attributes via vanilla JavaScript in script.js avoids HTML bloat and keeps the Git diff highly surgical.
**Action:** Use programmatic DOM iteration to inject accessibility and localization attributes on repetitive structures dynamically to keep file diffs clean.
