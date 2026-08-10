---
"wimui": patch
---

`Carousel`: the slide indicators are large enough to see and to press.

The dots were 4.8×4.8, well under the 24×24 that WCAG 2.5.8 (AA) asks for and
small enough to be awkward with a thumb. They are 24×24 now, and the active
indicator widens to match.

**The dots are visibly larger.** Extending only the hit area was considered and
does not work here: adjacent dots sit 4.8px apart, so 24px targets would overlap
each other.
