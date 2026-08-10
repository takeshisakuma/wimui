---
"wimui": minor
---

Three props stop borrowing vocabulary that is not theirs.

**破壊的変更**（0.x のため minor）。

```diff
- <ChatAvatar color="s5" />
+ <ChatAvatar tone="s5" />
```

`ChatAvatar`'s scale is PCCS tone — steps of lightness and saturation, not
colours — so it shared a prop name with a different axis. `LoadingOverlay`'s
`loaderColor` now takes `"currentColor" | WimColor`, the same type as the
`Spinner` and `Loader` it hands the value to; it had its own closed set, so the
same value passed through three different types on the way down.

`FeedbackIcon` is internal, so this affects no one's code: its `color` is now
`tinted?: boolean`. It used to take the intent vocabulary, which made
`intent="success" color="danger"` expressible. Both places that passed it were
passing the intent's own value.
