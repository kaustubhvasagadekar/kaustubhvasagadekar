## 2026-09-16 - Keyboard radio parity and live region updates
**Learning:** Selecting custom radio cards using radio change events ensures both mouse clicks and keyboard arrow key navigation update UI state consistently without double triggers.
**Action:** Always listen to `change` on radio inputs and dispatch manual change events on card click.
