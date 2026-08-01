---
"wimui": minor
---

Two new components, four new props and tokens, and a handful of changes you will
see without going looking for them.

**Read this part first: what breaks, and what looks different**

- **`Progress` and `ProgressRing` now require an accessible name.** `<Progress
  value={40} />` no longer type-checks; pass one of `label`, `aria-label` or
  `aria-labelledby`. Nothing changes at runtime. The type now refuses what axe
  was already reporting as a `serious` violation — a progressbar with no name —
  which the docs told you to avoid but the API happily let you write. This is
  the only breaking change.

- **`subtle` badges, tags and chips have a border.** They were a translucent
  fill with no edge, so on any surface close to their own tint they read as a
  smudge rather than a shape. The border is `--wim-color-border-secondary` where
  the intent has a `subtle` pair, and otherwise the intent colour at 30%. To get
  the old look back, set `border: none` on the element.

- **`Alert`, `Calendar` and `TreeView` no longer cast a shadow.** `DESIGN.md`
  reserves shadows for things that sit *above* the page; these sit *in* it, and
  now separate by fill and outline like every other in-page surface.
  `Notification` keeps its shadow — it moved to the toast container, which is
  the thing that actually floats.

- **Hairlines follow whatever is behind them.** `--wim-color-border-secondary`
  changes from an opaque grey to black at 10%. The opaque value had become the
  page colour in 0.10.0, so dividers in `DescriptionList`, `ErrorBoundary` and
  `KeyboardShortcuts` vanished whenever those sat directly on the page. On a
  white card it looks the same as it did.

- **Monospace now reaches the elements inside it.** Setting a mono family on a
  container used to stop at `code`, `pre`, `kbd` and `samp`, because the UA
  stylesheet gives each of them their own `monospace` and that beat inheritance.
  Those four now inherit wherever the library sets a mono family.

**New**

- **`ProgressRing`** — the circular case `Progress` could not cover. Deliberately
  the same prop vocabulary as `Progress` (`value` / `max` / `intent` / `size` /
  `label` / `showValue` / `indeterminate`), a separate component because the
  linear and circular DOM have nothing in common.

- **`SplitButton`** — a default action with its own menu beside it. `toggleLabel`
  is required, because the toggle half draws only an arrow and would otherwise
  ship as a nameless button. The two halves share `variant`, `intent` and `size`
  by design: let them diverge and they stop reading as one control.

- **`Text` `lineClamp`** — stop after N lines. Multi-line truncation previously
  meant `Spoiler`, which always draws an expand toggle. `truncate` still wins if
  you set both.

- **`Result` `iconSurface`** — sits the icon on a tinted disc. Off by default,
  and it does not change the component's outer size.

- **Four tokens**: `--wim-color-info-subtle`, `--wim-color-success-subtle`,
  `--wim-color-warning-subtle` and `--wim-color-neutral-subtle`. `primary` and
  `danger` already had theirs, so screens reaching for a soft `info` or
  `success` fill were mixing colours by hand.

**Fixed**

- **`Tabs` and `TabNavigation` sized their indicator against the wrong font.**
  The slider takes its width from the active item, but the `ResizeObserver`
  watched the container — which is `width: 100%` and therefore never resizes
  when the web font swaps in and the item underneath it grows. The slider kept
  whatever it measured against the fallback face. It was consistently wrong
  rather than intermittently wrong, which is why screenshots never caught it.
