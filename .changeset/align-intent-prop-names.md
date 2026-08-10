---
"wimui": minor
---

`ScrollProgress` and `TimelinePoint` take `intent`, matching their siblings.

**破壊的変更**（0.x のため minor）。

```diff
- <ScrollProgress color="success" />
+ <ScrollProgress intent="success" />

- <TimelinePoint variant="danger" />
+ <TimelinePoint intent="danger" />
```

Both props were painting the intent colours — `.primary` resolved to
`--wim-color-primary`, `.success` to `--wim-color-success`, and so on — under a
different name. `Progress` and `ProgressRing` already call this `intent`, so
`ScrollProgress` was the odd one among its own siblings, and `TimelinePoint`
was carrying meaning on a prop that `Foundation/Variants` defines as loudness.

**`secondary` is gone from both**, since it was removed from the intent
vocabulary in 0.18.0. Use `neutral`:

```diff
- <TimelinePoint variant="secondary" />
+ <TimelinePoint intent="neutral" />
```

That word had survived here precisely because these props were not typed as
intents, so the 0.18.0 removal never reached them. `ThoughtProcess` was still
producing it internally for pending steps; it now uses `neutral`.

**Both gain `warning`, `info` and `neutral`**, which they could not express
before. Their colours now come from `tokens/intents.json` rather than
hand-written rules, so the two stay in step with the intent vocabulary.
