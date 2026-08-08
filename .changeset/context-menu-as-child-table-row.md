---
"wimui": patch
---

`ContextMenu`: `asChild` no longer merges the container's `display: inline-block` onto the child element.

Wrapping a `<Table.Row>` needs `asChild` so the trigger becomes the `<tr>` instead of putting a `<div>` under `<tbody>`. Before this change `asChild` fixed the markup but not the rendering — the container class carried `display: inline-block`, so the rows flowed inline and the header no longer lined up with any column. The disabled styles moved out of `.container` so they still apply in both modes.
