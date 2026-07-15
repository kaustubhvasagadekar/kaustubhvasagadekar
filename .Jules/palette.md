## 2025-05-15 - [Keyboard Selection Parity]
**Learning:** In choice-based widgets (like BOGO offers), relying on 'click' events on parent containers prevents keyboard users (using arrow keys) from seeing immediate UI updates like price changes or expanded details.
**Action:** Use the 'change' event on radio buttons to trigger UI state updates, ensuring mouse and keyboard interactions are identical.
