---
"wimui": patch
---

Tokens: make every `--wim-color-*-subtle` fill land at a consistent, visible tint, and stop using fill tokens as borders.

The alphas were uniform (0.1, with `primary` at 0.04), but a fixed alpha does not produce a fixed appearance — how far a tint moves a surface depends on its hue and on how light the surface is. Measured against `surface` and `surface-app`, the perceived tint varied 5× across intents: `info-subtle` sat at 0.0188 while `warning-subtle` reached 0.0955, so a `danger` panel read as clearly stronger than an `info` one, and five combinations fell below the project's own visibility floor of 0.015 — in dark, `primary-subtle` was 0.0063, barely a third of it.

Because light and dark respond to alpha in opposite directions, one value cannot serve both. Each intent now carries a per-theme alpha chosen so the perceived tint lands near 0.022; all 24 theme × intent × surface combinations now fall between 0.0222 and 0.0388. **Subtle fills change appearance slightly in both themes** — most visibly `primary-subtle` and `info-subtle` in dark, which were previously close to invisible.

Four places used a fill token for `border-color`. `SortableList` (hover) and `Dashboard` (edit mode) now use border tokens. `Gallery`'s toolbar drew its border in its own background colour, so it only made the toolbar look 1px larger; it now has a real edge. `Dashboard`'s add-button hover was erasing the visible dashed outline it starts with, and now strengthens it instead.

`check:subtle-tokens` keeps this from drifting, checking the floor, an upper bound, and the spread between intents.
