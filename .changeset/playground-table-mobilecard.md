---
"wimui": patch
---

Playground: stack Billing / Members tables as cards on narrow widths.

Both recipes used `Table` without `mobileCard` and Cell `label`s, so four-column tables were clipped inside the Playground cards. Same shape as the Captions fix (T97).
