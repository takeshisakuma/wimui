---
"wimui": minor
---

Fixes the library found by building a real screen with it — an admin table with bulk
selection, inline editing and row menus — and two defaults that screen showed to be wrong.

**Accessibility**

- `Button variant="outline"` and `variant="ghost"` took their text colour from the fill
  tokens, which the design guide reserves for fills. In dark theme `intent="success"` read
  at 2.48:1 and `intent="danger"` at 4.35:1, both under the WCAG AA floor. They now use the
  `text-*` roles: 8.07:1 and 6.06:1. Borders keep the intent colour.
- `DataGrid` printed its pager in English regardless of locale (`Displaying 8 of 34 records`,
  `(3 row(s) selected)`, `Loading more...`). Eight screen-reader labels were hardcoded too —
  `Tag`'s close button, `Kanban`'s board and card-move controls, `Calendar`'s grid and month
  arrows, `ChatUI`'s attach button, and the alt text on `Audio` cover art and `ImageCropper`.
- `InlineEdit`'s trigger could not be named. `aria-label` landed on the wrapper, so a screen
  reader announced only the value — "A-14, button". It now reaches the trigger and the input.

**Narrow screens**

- `Container` had no gutter at all, so any viewport narrower than its max-width pressed the
  content against the edge. It now carries a 16px `padding-inline`. **Layouts using
  `Container` will shift by 16px per side.**
- The card layout below the breakpoint was half-finished: the grid stayed a framed white
  panel behind the cards, the selection cell kept its desktop 60px column and sticky borders,
  rows holding a control stood taller than rows holding text, cards had no top corners
  (`border-collapse: collapse` never paints a row's radius), and the inner padding came from
  the table's compact density. All fixed.
- Cards now start under 576px rather than 768px, so tablets keep the table. `mobileCard="md"`
  restores the old threshold.
- A `<code>` in a table cell no longer breaks one character per line.
- `Toolbar.Group` can wrap; a group of buttons no longer forces the page to scroll sideways.

**Overlays**

- `Dropdown` menus render through a portal. Opening a row menu inside a `DataGrid` used to
  extend the grid's scroll area, and inside a card it was clipped away entirely. Menus also
  gain `flip` and `shift`, so one near a viewport edge stays on screen.

**New**

- `DataGrid`'s `loading` accepts `"blocking"` (what `true` has always meant) or `"refresh"`,
  which announces `aria-busy` while leaving the rows readable and usable. `refresh`
  deliberately does not dim: fading drops secondary text below AA.
- `EmptyState` icons default to a muted colour instead of full-strength text black.
