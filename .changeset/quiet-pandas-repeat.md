---
"wimui": minor
---

The release where defaults change. Everything here came out of building a
multi-step form with the library — a wholesale trade application — and then
fixing what that screen ran into.

**Read this part first: things that look different**

- The required marker was a filled `danger` badge. On a form where most fields
  are required, that painted the page in error colour before anyone had done
  anything wrong, in the same colour the real errors use — so the real ones
  stopped standing out. It is now `subtle`. The word and the intent are
  unchanged, only the fill: 5.97:1 in light and 6.33:1 in dark, measured after
  compositing, both clear of AA.
- `Alert`'s title is no longer a heading. It was an `h4`, so an alert under an
  `h2` skipped `h3` and failed `heading-order`. An alert is a notice, not a
  section of the document. The default is now `div`, and `titleTag` accepts
  `div`, `p`, `strong` and `span` alongside the headings. Nothing moves: the
  title's size, weight, line-height and box are identical either way.
- Inline `<Code>` is no longer red. It took `--wim-color-text-danger`, so a lot
  number in a table or a reference number on a success screen came out looking
  like a failure. It now uses `text-primary`, like the block variant. It also
  no longer breaks mid-token — `KR-2026-0143` used to go vertical in a narrow
  column.
- `Icon color="secondary"` was the only Icon colour resolving to a fill token,
  and on the light canvas it measured 1.86:1 — under the 3:1 that WCAG 1.4.11
  asks of a meaningful graphic. It now resolves to `text-secondary`, matching
  what `Text` means by the same word. `Result`'s large status glyph and
  `Image`'s fallback move to `tertiary`, which stays quiet at 5.43:1.

**New**

- `Text` takes `nowrap` and `truncate`. A short value like `1.2 MB` split
  across two lines in a narrow column and inline styles were the only way out.
- `Fieldset` takes `variant="plain"`, which keeps the grouping and its
  `<legend>` and drops the frame — a framed fieldset inside a `Card` draws a
  box inside a box, and the alternative was losing the grouping entirely.
- `Input` and `NumberInput` take `suffix`, for units like `kg`, `%` or `円`.
  It sits in the flow rather than floating over the field, so a long number
  never slides underneath it, and it is announced with the field.
- `FileUpload` and `Dropzone` take `value: string[]`. Neither could be told
  that a file already existed, so a field holding last week's upload said
  "no file selected" indefinitely and the application had to draw the list
  itself.

**Fixed**

- `SegmentedControl` shrinks instead of pushing the page sideways. Its tracks
  could not go below their content, so the ellipsis it already had never
  fired: at 320px the control stayed 367px wide and the page picked up 79px of
  horizontal scroll. Label length is decided by translation, so fitting in
  English proved nothing.
- `OtpInput`'s `digitAriaLabel` receives a 1-based position. It always did;
  nothing said so, and reading it as an index produced "Digit 2" on the first
  box.
- `Card` warns in development when given a `padding` or `radius` value that
  type-checks but has no styles behind it. Narrowing those types is a breaking
  change and waits for the release that does those.
