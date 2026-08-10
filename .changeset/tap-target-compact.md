---
"wimui": patch
---

More controls reach the WCAG minimum tap target, including under `compact`.

`Pagination` buttons, `ThemeToggle` segments and `JsonViewer` node actions were
under 24×24 at every density. `Calendar` day cells and `Switch` were only under
it in `compact`, because both sized themselves from `--wim-height-xs`, which
drops from 24px to 20px there.

Most of these keep their appearance — the minimum sits on a transparent box or,
for `Switch`, on the `<label>` that wraps the input, so the track stays the size
it was. Two change: `TreeView`'s checkbox grows from 16px, and `Calendar` rows
get taller under `compact`.

`TreeView`'s checkbox carried a comment calling 16px "the minimum operable size
for a native checkbox". It is not; WCAG 2.5.8 asks for 24.
