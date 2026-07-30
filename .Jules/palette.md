## 2025-02-18 - WCAG AA Contrast Compliance on Discounted Prices
**Learning:** Using `opacity: 0.3` on dark text (such as original line-through prices) fails the WCAG AA minimum contrast ratio of 4.5:1 on a white background, resulting in extremely poor readability.
**Action:** Always use solid hex colors (e.g., `#757575`) instead of high opacity values for secondary text to ensure compliant contrast.
