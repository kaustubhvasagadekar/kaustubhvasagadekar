## 2024-07-23 - Micro-UX and Keyboard-friendly Radio Card Selection
**Learning:** For interactive e-commerce card groups where cards act as radio wrappers, tying the card active/expand classes strictly to radio button 'change' events enables seamless keyboard navigation. Adding high-contrast visual outline indicators with an offset on :focus-within of the card container ensures clear visual tracking during keyboard navigation.
**Action:** Always link nested radio changes to the click event of the parent option card to preserve all UI updates while keeping the lines of code extremely low.
