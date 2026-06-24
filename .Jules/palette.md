## 2024-06-21 - Improving BOGO-UI Accessibility and Interaction
**Learning:** Toggling 'display: none' to 'display: flex' prevents CSS transitions from executing as the change is instantaneous. For smooth expansion, it's better to use 'max-height', 'opacity', and 'overflow: hidden'. Also, secondary text (like original price) needs specific hex colors instead of opacity on black to maintain WCAG contrast.
**Action:** Use 'max-height' transitions for collapsible UI elements and avoid 'display' toggling in the same transition sequence. Always check contrast ratios for struck-through pricing.
