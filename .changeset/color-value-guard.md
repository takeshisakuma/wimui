---
"wimui": patch
---

Fix `color` values that never became a colour, and guard the class of mistake.

`color="tertiary"` appeared in 15 places and painted nothing in any of them.
There is no `--wim-color-tertiary` token — the text colours are `text-primary`,
`text-secondary` and `text-tertiary` — and `getColorValue` returns an unknown
string unchanged, so the element received `color: tertiary`, which the browser
drops. The text kept whatever colour it inherited, which is why it looked
merely a little off rather than broken.

`color="text-accent"` failed the same way for the opposite reason: the token
exists, but the key was missing from the hand-written list in `getColorValue`.
It is there now.

Nothing could have caught this. The type is `WimColor`, which allows any string
so that raw CSS colours work; VRT recorded the uncoloured render as correct; and
axe does not read colour names. `check:color-values` now resolves every literal
against both paths a colour can take — the `mappedColors` class and
`getColorValue` — and fails when neither would produce a colour.
