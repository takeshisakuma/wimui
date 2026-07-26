---
"wimui": patch
---

Patch release after 0.5.2. `Card` now honours `padding="xs"` and `radius="xl"` / `"2xl"` — the prop types already accepted them but no CSS class existed, so they silently did nothing. This is additive: values that previously had no effect now apply `--wim-spacing-sm`, `--wim-radius-xl` and `--wim-radius-2xl` respectively. Heads-up for the next minor: the remaining values with no matching token (`Card` `radius="xs" | "3xl" | "4xl" | "5xl"` and `padding="4xl" | "5xl"`) will be narrowed out of the prop types in 0.6.0 rather than implemented, since the radius scale stops at `2xl` and the spacing scale at `5xl` — implementing the padding pair would make two distinct values render identically.
