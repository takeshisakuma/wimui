---
"wimui": patch
---

`Carousel`, `Slider`, `RangeSlider` and `Rating`: controls you press are large
enough to press.

Four controls painted themselves smaller than the 24×24 WCAG 2.5.8 (AA) asks
for: carousel dots at 4.8×4.8, both slider thumbs at 18×18, and rating stars at
16×16 on `size="sm"`. **All four now look bigger** — the paint is the target
here, so the hit area cannot grow on its own.

Growing only the hit area was the alternative and it does not survive contact
with the carousel: its dots sit 4.8px apart, so 24px targets would overlap and
make mis-taps more likely.

**`Rating`'s whole scale moves up**, from 16/24/32 to 24/32/42. Its bottom two
steps were under the floor — `sm` at 16px, and `md` at 20px under `compact` —
and raising only those would have made `sm` and `md` render identically, leaving
a size value that changes nothing. Under `compact` the three stay distinct at
24/28/36.

`RangeSlider`'s thumb had a documented 3:1 ratio to its 6px track. The ratio
loses to the floor: a thumb you cannot grab is not improved by being
proportionate.
