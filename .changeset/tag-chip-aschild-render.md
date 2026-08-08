---
"wimui": patch
---

`Tag` / `Chip`: `asChild` actually works (and `check:aschild` now renders to prove it).

Both advertised `asChild` but always threw: `Tag` passed a children array into `IndicatorBase`'s `Slottable`, and `Chip` wrapped `Slottable` inside a label `<span>` so `Slot` never found it. `asChild` + `onDelete` is rejected with an explicit error. The static `check:aschild` gate now also runs a render smoke test so this class of failure cannot go green again.
