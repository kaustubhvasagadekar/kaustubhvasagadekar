## 2025-05-14 - [Keyboard Navigation Parity for Expandable Widgets]
**Learning:** Expanding/collapsing sections in a choice-based UI must be tied to the radio button 'change' event, not just the container 'click' event. This ensures that users navigating with keyboard arrow keys see the same UI state changes as mouse users.
**Action:** Always ensure UI state updates (like expansion or active borders) are triggered by semantic state changes (like radio 'change') rather than just click events.

## 2025-05-14 - [Smooth UI Transitions for Expanding Content]
**Learning:** Using 'display: none/block' for expanding content creates a jarring UX. 'max-height' combined with 'opacity' and 'overflow: hidden' provides a much smoother experience.
**Action:** Use CSS transitions on 'max-height' and 'opacity' for expanding/collapsing elements to improve perceived quality.
