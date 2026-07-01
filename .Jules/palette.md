## 2025-05-14 - Accessible Color Selection for Design Systems
**Learning:** Using brand colors like pink (`#FF6B82`) for UI elements with white text often fails WCAG AA contrast requirements (reaching only ~2.9:1). A more accessible alternative within the same hue, such as `#C2185B`, provides a compliant 4.5:1 ratio while maintaining brand identity.
**Action:** Always verify color contrast ratios for text-on-background combinations during the design phase, and prioritize accessible variants of brand colors for interactive elements.

## 2025-05-14 - Keyboard Parity in Choice-based Selection
**Learning:** UI state updates (like expanding sections or active borders) in radio-based selection widgets must be triggered by the 'change' event rather than just 'click'. This ensures that users navigating with keyboard arrow keys receive the same visual feedback and interface updates as mouse users.
**Action:** Use 'change' event listeners for radio buttons to manage associated UI state transitions, and manually dispatch 'change' events when programmatically updating radio states.
