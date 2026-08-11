---
"wimui": patch
---

`DateRangePicker` gives its two inputs an accessible name, and stops throwing away `startProps` / `endProps`.

The component rendered `<DatePicker {...startProps} label={undefined} error={undefined}>`.
The type accepts `label` — `startProps` is `React.ComponentProps<typeof DatePicker>` —
and the implementation then overwrote it. The outer `label` only reaches the
`role="group"` wrapper through `aria-labelledby`, so **both inputs shipped with no
accessible name at all** (axe `label`, critical, in light and dark).

Anything you pass through `startProps` / `endProps` now reaches the inner picker.
If you were passing `label` and wondering why nothing appeared, it appears now.

When you pass no visible label, each input falls back to a built-in name
(`Start date` / `開始日` / `Data inicial`), so the default spelling is no longer an
a11y violation and no `aria-label` workaround is needed:

```jsx
<DateRangePicker
  label="Applications open"
  startProps={{ defaultValue: opensAt }}
  endProps={{ defaultValue: closesAt }}
/>
```

An explicit `aria-label` still wins over the built-in name, and a visible `label`
suppresses it — a field carrying both ends up with `aria-label` and
`aria-labelledby` at once, where the accessible name comes from the latter while
the former lingers in the DOM.
