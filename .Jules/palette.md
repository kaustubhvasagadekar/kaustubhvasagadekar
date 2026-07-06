## 2024-07-06 - Accessible Radio Selection with Dynamic Content
**Learning:** In choice-based widgets where selection triggers major UI updates (like expanding sections or price changes), relying solely on `click` events on a container causes a desync during keyboard navigation. Keyboard users use arrow keys to change radio selection, which triggers the `change` event on the input but not a `click` on the parent container.
**Action:** Always listen for the `change` event on the radio inputs to drive UI state updates, ensuring parity between mouse and keyboard interaction.
