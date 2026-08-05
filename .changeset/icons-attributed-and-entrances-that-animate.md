---
"wimui": minor
---

Attribution the package should have carried from the first release, plus the
icon and animation fixes that came out of establishing it.

**Read this part first: the icons look different**

The icon set is largely derived from Feather (MIT) and Lucide (ISC). Nothing
in the published package said so — there was no `NOTICE`, no mention in the
README, and no dependency to point at. **This release adds `NOTICE` and ships
it in the tarball**, which is what both licences ask for.

Establishing that meant matching every shipped icon against its possible
source by path data rather than by name, and once that was done, a number of
icons were moved onto the upstream shape they were already almost identical
to. **If you have visual snapshots, they will need updating.** What changed:

- **12 icons were replaced with the upstream original** they differed from by
  a few coordinates: `phone`, `home`, `menu`, `document`, `thumb-down`,
  `paperclip`, `columns`, `repeat`, `maximize`, `project`, `send`, `settings`.
  The difference was never a design decision, and an exact match is something
  the notice can actually describe.
- **`align-justify` is now four lines, not three.** It was a byte-for-byte copy
  of `menu` — the name said "justified text", the shape said "hamburger". It is
  used for list and inline-diff toggles, where rows of text is the right idea.
  `MenuIcon` keeps the hamburger.
- **`square` is now an outline, not a filled block**, and moved out of the
  filled group in the docs. The set is line art at `stroke-width: 2`; `circle`,
  `play` and `pause` remain filled on purpose (a media transport reads as
  solid), but a plain square had no such reason.
- **`skip-forward` now points forward.** It was shipped as a copy of
  `skip-back` with only the triangles flipped, so the arc still wound
  backwards. There is now a check that every mirrored pair actually mirrors.
- **`pdf` and `grid` were redrawn** — `pdf` to the same stroke width as the
  rest, `grid` to a shape that is not Feather's `grid`.

**New icons**: `alert-triangle`, `arrow-up`, `arrow-down`, `arrow-left`,
`arrow-right`, `bold`, `italic`, `underline`, `strikethrough`, `link`,
`unlink`, `list`, `list-ordered`, `eraser`. Most were previously drawn inline
inside `RichTextEditor`, where nothing could see or reuse them.

**`CloseSmallIcon` is deprecated.** It was identical to `CloseIcon` at every
size the library uses, and the components that were supposed to distinguish
them did not. It still exports the same glyph; it will be removed in the next
major. `Terminal`, `Dashboard`, `Gallery` and `Popover` now use `CloseIcon`.

**Two things that were carrying meaning in colour or in text**

- **`warning` and `danger` now use different glyphs.** Both were a circle with
  an exclamation mark, separated only by colour — so in greyscale, in mono
  print, or for someone with a colour vision deficiency, they were the same
  state. `warning` is now a triangle. Affects anything built on the shared
  feedback icon: `Alert`, `Toast`, `Notification`, `Result` and friends.
- **`Stats.Trend` draws an icon instead of the characters `↑ ↓ →`.** Typed
  arrows change shape and optical weight with the font and never matched the
  rest of the set. **The DOM changed**: the trend span now contains an `<svg>`
  and is `aria-hidden`, where it used to contain a text node. If you assert on
  its text content, that assertion will fail.

**Enter animations now actually animate**

`Transition` was applying its `enterTo` classes for the whole of the enter
phase, so the browser had no before-change style to interpolate from and every
entrance was instant. `Drawer` and anything else built on `Transition` snapped
into place; `BottomSheet` appeared to work only because it carried its own
`@keyframes` alongside. **Overlays that appeared instantly will now slide and
fade in.** If you disable animations in tests, keep doing so; if you did not
need to before, you may now.

`BottomSheet` also no longer jumps sideways just after opening. On viewports
at `sm` and up it was centred with `left: 50%` plus a transform, which the
slide transform then overwrote for one frame — measured at 224px of lateral
travel. It is centred with auto margins now.

**Components that are narrow because their container is narrow**

`CodeBlock` and `ChatUI` decided how to wrap from the **viewport** width, so
inside a device-width frame, a split pane or a preview panel — narrow element,
wide window — the narrow-width handling never applied. `CodeBlock` measured
216px wide with 270px of content hidden in a scroll. Both now use container
queries against their own width. `CodeBlock` also takes `--wim-width-sm` as a
floor so it cannot collapse.

**`TabBar`**

`fixed` still defaults to `true` and still pins to the viewport — that is
correct for the phone-shaped screens it is for, and `AppShell.withNavbar`
reserves room for it. It is now documented that the pin leaves any container
you put it in, which nothing warns you about, because `position: fixed` does
not widen the document and so no overflow check ever notices. Pass
`fixed={false}` for a bar that belongs to a container.

Items are also taller (the previous padding was tight enough that labels
crowded the top edge), the bar uses `min-height` rather than a fixed height so
it grows with its content, and the width cap is now its own token,
`--wim-tab-nav-max-width`, instead of borrowing the one meant for status
description text.

**`Lightbox.Trigger` has an accessible name that does not depend on loading**

Its name came only from the `alt` of the nested image — but `Image` does not
render an `<img>` until it intersects the viewport, so before that the trigger
was a button with no name at all. The name now resolves from data: your
`aria-label` / `aria-labelledby`, then the new `alt` prop, then the gallery
item's `alt`, then a generic "Open image". **Note that an `aria-label` beats
child text**, so if you put your own text inside the trigger, pass
`aria-label` explicitly.

**Bare `<code>`, `<kbd>`, `<samp>` and `<pre>`**

These fell through to the UA stylesheet's generic `monospace` keyword, which
browsers render at their own default size — measured at 13px against 16px body
text, and in a different typeface from every `Code` component on the same
page. They now take the library's mono token and `font-size: 1em`. This is in
`@layer base`, so it does not touch any component's own styling.

**Provenance is checked, not asserted**

`npm run check:icons:provenance` matches every shipped icon against Feather,
Lucide, Heroicons, Bootstrap Icons and Tabler and fails if an icon is added or
changed so that `NOTICE` no longer describes it — including SVG written inline
inside a component, which is how four Feather icons had been sitting in
`RichTextEditor` unattributed. The six icons that match nothing were checked
once against the whole of Iconify (236 sets, 328,420 icons) as well.
