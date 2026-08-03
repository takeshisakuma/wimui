---
"wimui": minor
---

Eight fixes that mostly show up as things no longer collapsing, plus one bundle
that got bigger on purpose.

**Read this part first: what looks different, and what to check**

- **Components no longer shrink below a readable width.** Placed side by side in
  a flex row, form fields, tables, grids and navigation used to collapse to a
  sliver — measured at 24px, and 0px for `Gallery` and `Dashboard`, with text
  wrapping one character per line. `MarkdownRenderer` went from 1160px tall to
  6950px. They now stop at `--wim-width-sm` (180px). **If you place any of these
  in a container narrower than 180px, it will now overflow rather than shrink.**
  Affected: `InputBase`, `Textarea`, `Select`, `RichTextEditor`, `OtpInput`,
  `Transfer`, `Label`, `Code`, `Menu`, `MarkdownRenderer`, `Tabs`, `Stepper`,
  `Pagination`, `Gallery`, `Grid`, `SimpleGrid`, `BentoGrid`, `Dashboard`,
  `Table`, `DataGrid`, `DescriptionList`, `GanttChart`, `TreeSelect`,
  `DateRangePicker`, `QueryBuilder`, `Banner`, `ThreadList`, `ThoughtProcess`,
  `ChatUI`.

- **`AppShell`'s composition API produces a different DOM.** Passing
  `AppShell.Header`, `.Sidebar` or `.Main` as children used to place all of them
  inside an implicit `<main>`, giving you two `<main>` elements nested. Children
  carrying a structural part are now rendered as given. The props API
  (`header={…} sidebar={…}`) is unchanged.

- **Hover-only controls now appear on touch devices.** `ChatUI`'s message
  actions, `Gallery`'s selection checkbox and `FloatButton`'s description were
  revealed on `:hover`, which never fires on a phone — so they were invisible,
  and `opacity` does not stop a control being tapped. They now show whenever
  there is no hover, and on keyboard focus.

- **`wimui/ai` grew from 25.6 kB to 45.0 kB gzipped.** The feedback buttons got
  tooltips, which pulls in `@floating-ui/react`. If your app already renders a
  `Dropdown`, `Popover`, `ContextMenu` or `Tooltip` the module is shared and the
  real cost is close to zero; if you import `wimui/ai` and nothing else, this is
  a genuine increase.

**New**

- `ChatMessage` takes `actionsVisible` to keep its actions on screen instead of
  waiting for hover — useful on the latest reply. Touch devices show them either
  way.
- `AIResponseFeedback`'s three buttons carry tooltips whose text matches their
  `aria-label`, so sighted mouse users get what screen readers already had. They
  appear on focus as well as hover.
- `--wim-drop-shadow-xs`: the same shadow as `--wim-shadow-xs` expressed for
  `filter`, so an element and its pseudo-element fall as one shape.

**Fixed**

- The speech bubble's tail no longer shows a seam against the bubble on displays
  with fractional device pixel ratios, which is most Android phones. Two causes:
  the triangle abutted the bubble instead of overlapping it, and the bubble's
  `box-shadow` was drawn across the tail's root.
- `Select`'s `width` prop works again in narrow layouts — the readable floor is
  now capped by the width you asked for, so `width="xs"` renders at 120px rather
  than being overridden to 180px.
