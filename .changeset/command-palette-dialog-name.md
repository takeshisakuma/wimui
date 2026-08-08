---
"wimui": patch
---

`CommandPalette`: the dialog now has an accessible name.

`CommandPaletteContent` rendered `role="dialog" aria-modal="true"` with nothing to name it, which axe reports as `aria-dialog-name` (serious) for every consumer — the palette has no heading to borrow a name from. It now defaults to the built-in translation (`command_palette.label`, en/ja/pt) and accepts `aria-label` to override.
