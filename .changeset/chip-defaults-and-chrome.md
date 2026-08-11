---
"wimui": minor
---

Chips stop shouting, the header stops hiding what does not fit, and three small alignment fixes land.

**見た目が変わります**（API は変わりません。0.x のため minor）。

- **`TagInput` / `MultiSelect` chips are `neutral` by default.** They were pinned to
  `intent="primary"` with no way to change them, so a field with three tags put
  three accent surfaces on the page — against this library's own rule that an
  accent belongs in one or two places per screen, and that ordinary values are
  `neutral`. What goes into these two components is an ordinary value: a word you
  typed, an option you picked.
- **`Header` grows instead of overflowing.** Its `height` is now a `min-height`. The
  default still measures 64px, but content that does not fit used to escape the
  header rather than wrap or clip — measured at 12px past the edge at 768px and
  29px at 390px. **If your header has been overflowing without you noticing, it will
  now be taller at narrow widths**, which is the state you were already in.
- **Right-hand icons sit where the left ones do.** The icon slot inside `InputBase`
  read a different token than the text padding (6.4px against 10px) and ignored
  density; both sides now follow `--wim-field-padding-x`.
- **`SmartSearchInput`'s leading icon aligns to the first line.** It was centred on
  the box, so once the field grew past one line the icon drifted down with it.
- **Editable surfaces stop hyphenating.** `hyphens: auto` for `en` and `pt` reached
  inputs, textareas and rich-text editors, so text you typed came back to you as
  `fol-lowing`. Prose keeps its automatic hyphenation.
- **Destructive ghost buttons get a red hover instead of a red fill with a blue
  border.** New tokens `--wim-color-danger-surface-hover` and
  `--wim-color-danger-border-hover` mirror the existing primary-based pair, and
  `Button` applies them for `intent="danger"` `variant="ghost"`.
