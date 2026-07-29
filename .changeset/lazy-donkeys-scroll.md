---
"wimui": minor
---

Four fixes that came out of taking the workarounds back out of the second T32
screen. The screen had four of them; every one pointed at something the library
should have handled.

**Read this part first: things that look different**

- `SegmentedControl` no longer truncates its options. It used to clip them to
  equal columns and add an ellipsis, so `A cada duas semanas` showed as
  `A cada d…` at 390px — and the English default was clipped too, at 768px, in
  the shipped 0.7.0. Truncating is the wrong trade for this control: you pick a
  segment by reading all of them, so a label you cannot read is not an option
  you can choose. Segments now keep their content width when space runs short
  and the track scrolls horizontally instead, with the last segment cut at the
  edge to show there is more. **Equal width is unchanged whenever the options
  fit** — every existing story measures the same at 1280px, including the two
  that broke the last time this was touched (`QueryBuilder`, `Token/Density`)
  and `with-icons` at 101.6px × 3. No new prop, no extra element.
- `<Legend label="…" />` now renders at the same weight as `<Legend>…</Legend>`.
  The two paths disagreed — 700 through children, 500 through `label`, because
  the shared field-label style forced medium. Legends are section titles, so
  both are bold now. Other field labels (`Input`, `NumberInput`,
  `CounterTextarea`) are untouched at 500.

**Legend accepts children on their own**

`label` is now optional. It was required, which made the component's own
documented usage — `<Legend>Group title</Legend>` — fail to typecheck, even
though the stories rendered exactly that. Passing children only also drops the
wrapper the label slot needs, so the legend can hold a heading directly:
`<legend><h2>…</h2></legend>` is valid HTML, while a heading inside the label
slot lands in a `<span>`, which is not.

`requiredLabel` and `optionalLabel` now reach the badge. They were accepted by
the type and then dropped, so the badge kept its default wording and the value
leaked into the markup as `<legend requiredlabel="…">`.

**Fieldset**

`variant="plain"` now also clears the legend's inline padding. That padding
exists to cut a notch in the frame; with no frame it only pushed the section
heading 4.8px to the right of the fields it labels.
