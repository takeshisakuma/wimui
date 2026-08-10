---
"wimui": minor
---

`Drawer.Trigger` / `Drawer.Close` require `asChild`, and `EmptyState` drops `variant`.

**破壊的変更**（0.x のため minor）。

```diff
- <Drawer.Trigger>開く</Drawer.Trigger>
+ <Drawer.Trigger asChild>
+   <Button>開く</Button>
+ </Drawer.Trigger>

- <Drawer.Close>閉じる</Drawer.Close>
+ <Drawer.Close asChild>
+   <Button variant="outline">閉じる</Button>
+ </Drawer.Close>

- <EmptyState variant="simple" title="…" />
+ <EmptyState title="…" />
```

Both components referenced class names their stylesheet never exported.
`styles.foo` is `undefined` when `.foo` is missing, and `classNames` drops
`undefined` without a word — so the type checker passed, the linter stayed
quiet, and VRT recorded the unstyled result as correct.

`Drawer.Trigger` and `Drawer.Close` pointed at empty placeholder rules, so
without `asChild` they shipped a bare `<button>` carrying the browser's default
chrome. Giving those rules real declarations was not an option: every real
usage passes `asChild`, and `Slot` merges `className` onto the caller's own
element, where our styling would fight theirs. `asChild` is now required, and
the caller supplies the button.

`EmptyState.variant` accepted `"default" | "simple"` and did nothing at all —
`empty-state.module.scss` exported no classes whatsoever. The documentation
described `simple` as "a simpler design that eliminates borders and background
colors"; that appearance never existed. The prop, its story, its docs section
and its translations are gone.

`check:class-references` now asks Vite what each `.module.scss` actually
exports and fails on references that resolve to nothing. It runs in
`audit:lib`.
