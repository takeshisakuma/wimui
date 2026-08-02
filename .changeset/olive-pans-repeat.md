---
"wimui": minor
---

Four contrast fixes you will see in dark mode, and the documentation now has to
compile before it ships.

**What looks different**

- **Notification badges on `TabBar` and `FloatButton` take their text colour
  from the surface they sit on.** They painted a `danger` background and then
  asked `--wim-color-text-on-primary` for the text. In light both happen to be
  white, so it looked correct; in dark, `danger` is `#fb7482` and white on it
  measures 2.65:1. The text is now `--wim-color-text-on-danger`, which inverts
  to black in dark.

- **`Timeline` dot glyphs use text-weight intent colours.** `.primary` already
  used `--wim-color-text-accent`; the other three used the fill colours, which
  do not adapt to the theme. Measured: `secondary` 2.03:1 in light, `success`
  2.48:1 and `danger` 4.36:1 in dark. The dot borders keep the fill colours — an
  outline is not a surface.

- **Links inside `.wim-docs-container` are `--wim-color-text-accent`.**
  `--wim-color-primary` is `#055d87` in both themes, so it never moved with the
  dark surface underneath it: 2.11:1.

**For agents reading `llms.txt`**

- **Three recipes did not compile.** They indexed a literal-keyed intent map
  with a `string`, which is a `TS7053` error under `noImplicitAny` — at the
  exact line the recipe exists to demonstrate. The row data is now `as const`.
  The generator claimed these were verified against the real API by hand; that
  claim is now checked by `tsc` over every example in the READMEs and both
  `llms` files.

- **`llms.txt` has a "Not in scope" section.** Parallax scrolling, text scramble
  and spring physics are absent by decision, not by omission, and an agent
  reading a catalogue cannot tell those apart — so it builds them by hand. Each
  entry carries the reason and the supported alternative (`ScrollProgress`,
  `StreamingText`, `--wim-easing-spring`).

Nothing about the public API changes, and no CSS custom property was added,
renamed or removed.
