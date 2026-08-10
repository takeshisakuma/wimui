---
"wimui": minor
---

`FloatButton`: `variant` and `position` say what they do.

**破壊的変更**（0.x のため minor）。

```diff
- <FloatButton variant="primary" />
+ <FloatButton />                      // 同じ見た目。variant は不要だった

- <FloatButton variant="default" />
+ <FloatButton variant="outline" />    // 枠線のある見た目

- <FloatButton position="static" />
+ <FloatButton position="inline" />
```

`variant` had three values and all three were wrong. `primary` fell through to
the same rule as no variant at all, so it never did anything. `default` was not
the default look — it produced the outlined one, while omitting `variant`
produces the intent fill. And the stylesheet still carried a `.default_intent`
class that nothing applied, left behind under a comment reading "temporary name".

`variant` is now `"outline" | "glass"`, which is the loudness axis
`Foundation/Variants` describes, with the intent word gone from it.

`position="static"` applied `position: relative`, so it was a CSS keyword that
did not mean what that keyword means. It is `inline` now — the button sits in
the normal flow instead of floating.
