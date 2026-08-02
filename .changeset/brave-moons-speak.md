---
"wimui": minor
---

`Card` no longer accepts `padding` and `radius` values it never styled. This is
the only change in this release, on purpose: it is the one that stops
compiling, and mixing it with anything visual would leave you unable to tell
which change caused what.

**What breaks**

`padding="4xl"`, `padding="5xl"`, `radius="xs"`, `radius="3xl"`, `radius="4xl"`
and `radius="5xl"` no longer type-check:

```
Type '"5xl"' is not assignable to type '"none" | "sm" | "md" | "lg" | "xl" | "2xl"'.
```

Nothing changes at runtime. Those six values never had a CSS class behind them,
so a `Card` written with one rendered exactly as if the prop had been omitted —
`radius="5xl"` gave you the default radius, silently. If your code stops
compiling, it was already not doing what it said; delete the prop or pick a
value from the union the error prints.

There is no `--wim-radius-xs`, `-3xl`, `-4xl` or `-5xl` token, so those four
were never going to mean anything without inventing a new radius scale first.

**Why it will not come back**

The prop types are now derived from the same list the component checks at
runtime, and a test reads `card.module.scss` off disk and fails if that list
stops matching the stylesheet. Adding a size to the union without adding the
class is now a failing test rather than a value that quietly does nothing.

The development-time warning stays. Types only exist at compile time, so
JavaScript consumers and anyone reaching for `as any` can still pass a value
with no styles, and they still get told why nothing happened.
