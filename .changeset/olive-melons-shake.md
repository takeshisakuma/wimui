---
"wimui": minor
---

The page gets a surface of its own. `DESIGN.md` asks components to separate
surfaces by fill and to keep shadows for things you can operate, but in the light
theme there was nothing to separate them with: every surface you could put on the
page landed within 1.1–1.2:1 of it, so a card's outline was in practice being
carried by its shadow.

**Read this part first: things that look different**

- **The page is darker.** `--wim-color-surface-app` moves from `#f5f5f5` to
  `#e5e5e5`, so a white card now reads 1.26:1 against it instead of 1.09:1.
  `Alert`, `Card` and friends separate from the background on fill alone.
- **The step inside a card moved up, not down.** `--wim-color-surface-variant`
  goes from `#e5e5e5` to `#f5f5f5`. It has to, or it would be the page colour.
- **`neutral` badges, tags and chips are a distinctly darker grey.** They used to
  borrow the disabled colour (`#e5e5e5`); they now have their own token,
  `--wim-color-neutral-fill` (`#b6b6b6`), which is the one value that stays
  visible on the page, on white and on `surface-subtle`.
- **Disabled controls are slightly lighter** — `--wim-color-disabled` goes from
  `#e5e5e5` to `#f5f5f5`. It could not stay where it was, because that is now
  exactly the page colour and a disabled input sitting outside a card vanished
  into it.
- **Muted and accent text are a step darker.** `--wim-color-text-tertiary`
  (`#646464` → `#4f4f4f`) and `--wim-color-text-accent` (`#055d87` → `#04436e`).
  Both were failing WCAG AA once the page darkened underneath the translucent
  tints they sit on — `primary`+`subtle` badges were at 4.38:1. `text-accent` now
  follows the same rule its peers already did: `text-danger`, `text-success` and
  `text-warning` are each a step darker than the fill they name.

**The dark theme is untouched.** It already separated its surfaces (1.85:1) and
overrides every one of these tokens itself.

**If you want the previous look**, set the tokens back:

```css
:root {
  --wim-color-surface-app: #f5f5f5;
  --wim-color-surface-variant: #e5e5e5;
  --wim-color-disabled: #e5e5e5;
  --wim-color-neutral-fill: #e5e5e5;
  --wim-color-text-tertiary: #646464;
  --wim-color-text-accent: #055d87;
}
```

Note that restoring `surface-app` alone brings back the flat page; restoring
`disabled` and `neutral-fill` to `#e5e5e5` on top of the new page colour will
make disabled controls and neutral indicators disappear into it.

`--wim-color-border-secondary` and `--wim-color-scrollbar-track` deliberately
still sit at `#e5e5e5`. Against the old page they were already at 1.16:1 — close
to invisible — and this release takes that to 1.00:1 where they are drawn
directly on the background. Borders inside cards are unaffected.
