---
"wimui": minor
---

The monospace token becomes real. `--wim-font-family-mono` has always named
`"Noto Sans Mono"` first, but five separate defects meant the token never
reached the text it was supposed to style — so code in this library rendered in
whatever monospace face the reader's OS happened to pick.

**Read this part first: things that look different**

- **`Code` follows the token now.** It used to hardcode its own stack
  (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
  "Courier New"`), which does not include Noto Sans Mono and disagreed with
  every other code component. If you have not loaded a web font, the practical
  effect is that the head and tail of the stack change: `ui-monospace` no longer
  wins on macOS (so SF Mono gives way to Monaco/Menlo), `Cascadia Code` is now
  consulted before `Consolas` on Windows, and `Liberation Mono` / `Courier New`
  are no longer named on Linux.
- **`CodeBlock`, and `ErrorBoundary`'s stack trace, follow it too.** Both styled
  their outer element with the token, but the element actually holding the text
  is an inner `<code>` — and the UA stylesheet's `code { font-family: monospace }`
  keeps a parent's family from reaching a child whenever the author declares
  none. So the bodies were painting the generic face while the computed style on
  the wrapper said `"Noto Sans Mono"`. They inherit now.
- **`ErrorBoundary` read the wrong custom property** — `var(--font-family-mono)`,
  missing the `wim-` prefix — so its details panel never consulted the token at
  all.

The upshot: inline `Code`, `CodeBlock`, `Markdown`, `Terminal`, `JsonViewer` and
the rest now agree on one family instead of two, and overriding
`--wim-font-family-mono` actually changes all of them.

**If you want the previous rendering**, set the token to the old stack:

```css
:root {
  --wim-font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
```

**Fonts are still not bundled**, and `styles.css` still requests none. That is
deliberate, and the READMEs now say so out loud: each typography token names a
preferred family and then falls back to system faces, so omitting the fonts is a
supported choice. If you want the documentation site's exact rendering, the
Fonts section shows the `@fontsource` opt-in — `npm i @fontsource/noto-sans
@fontsource/noto-sans-mono`, then import the weights you need before
`wimui/styles.css`. The same fact is in `llms.txt` so agents stop inventing a
`wimui/fonts.css` that has never existed.
