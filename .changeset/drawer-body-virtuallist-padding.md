---
"wimui": minor
---

`Drawer` gains `DrawerBody`, and `VirtualList` rows get the list padding tokens.

`DrawerHeader` and `DrawerFooter` both carry `spacing-lg`, but there was nothing
for the content between them, so anything placed there sat against the drawer
edges. The only way out was a wrapper with hardcoded padding — which is what
Drawer's own six stories were doing, in px.

```diff
  <DrawerHeader>…</DrawerHeader>
- <div style={{ padding: "20px" }}>…</div>
+ <DrawerBody>…</DrawerBody>
  <DrawerFooter>…</DrawerFooter>
```

`DrawerBody` also takes the remaining height and scrolls, so long content no
longer pushes the footer off the panel.

`VirtualList` had the same gap: rows had no horizontal padding, so their content
touched the edges and the right side ran into the scrollbar. Its own three
stories worked around it with `padding: "0 16px"`. Rows now use
`--wim-list-item-padding-y` / `-x`, the same tokens `List` and list items
already use, so **rows gain inset padding**; drop any wrapper that was adding it.

Rows also clip their overflow now. They are absolutely positioned at a fixed
`itemHeight`, so content that wrapped used to bleed into the row below and the
text overlapped — visible at 320px.
