# wimui

[English](./README.md) · [日本語](./README.ja.md)

[![npm version](https://img.shields.io/npm/v/wimui.svg)](https://www.npmjs.com/package/wimui) [![license](https://img.shields.io/npm/l/wimui.svg)](./LICENSE)

A React component library with 200+ components, design tokens, dark mode, internationalization (en / ja / pt-BR), and WAI-ARIA compliant accessibility.

- Documentation (Storybook): https://takeshisakuma.github.io/wimui/
- Requirements: Node.js >= 22 / **React 19** (`react` / `react-dom`) / **LTR only** (en / ja / pt)

## Scope (Core / optional)

The npm package is **a single `wimui`** (not a split monorepo of packages). You only split how you *use* it. **Start with Core**, and reach for optional subpaths only when you need them.

| Scope | import | Extra peers |
|---|---|---|
| **Core** | `wimui` / `wimui/form` / `wimui/layout`, etc. | None (React 19 only) |
| Optional — Charts | `wimui/charts` | `recharts` |
| Optional — Peer components | dedicated subpath per component, e.g. `wimui/ai/markdown-renderer`, `wimui/data-display/qr-code` | that component's peer (see table below) |
| Optional — RHF | `wimui/rhf` | `react-hook-form` + `zod` (3.25+ / 4) (+ resolvers) |

**Why subpaths are separated:** optional components pull in heavy peers (recharts, etc.). By not exporting them from the root `wimui`, a Core-only app is far less likely to drag those peers into type resolution or bundle analysis without installing them. Import only the subpath for the feature you use, and install only that peer.

```tsx
// ✅
import { Button } from "wimui";
import { BarChart } from "wimui/charts";

// ❌ not on the root (type error / unresolved)
// import { BarChart } from "wimui";
```

The category barrels **`wimui/data-display` and `wimui/ai` are peer-free** — importing them never pulls an optional peer. Each peer-dependent component lives on its **own subpath** whose name documents its peer (e.g. `wimui/data-display/markdown` → `react-markdown`). This is the one deliberate exception to "no deep paths": these subpaths are curated peer-isolation boundaries, not folder-mirrored component paths. See the table below.

## Support matrix (peers)

Supported version ranges for public peers. Wider ranges are unsupported.

| Package | Supported | Peer range | Notes |
|---|---|---|---|
| `react` / `react-dom` | **19** | `^19.0.0` | Development, tests, and published types target React 19. React 18 is unsupported |
| `zod` (when using `wimui/rhf`) | **3.25+ / 4** | `^3.25.0 \|\| ^4.0.0` | Range mirrors `@hookform/resolvers` so a zod-3 ecosystem resolves without `ERESOLVE`. Development and tests target zod 4 |
| `@hookform/resolvers` | **5.1+** | `^5.1.0` | When using `wimui/rhf` |
| `react-hook-form` | **7.43+** | `^7.43.0` | Only when using `wimui/rhf` |

Core (the root `wimui`) needs neither zod nor RHF. For optional peers such as charts, see the table below.

## Installation

```bash
npm install wimui
# peers (React 19):
npm install react@^19 react-dom@^19
```

Optional features need their own peer (see "Optional peerDependencies"): e.g. `npm install recharts` for `wimui/charts`.

You do **not** need `i18next` / `react-i18next` or any other i18n library. Translation resources are bundled and do not depend on a specific i18n library (see "Internationalization" below).

## Quick start

Load the styles once at your app entry point. The required CSS is a single file, `styles.css` (tokens + components). `reset.css` is optional.

**Start from Core** — no extra peers. Most UI can be imported from the root.

```tsx
import "wimui/styles.css"; // required: :root --wim-* + all component styles
import "wimui/reset.css";  // optional: opinionated reset / base element styles

import { Button } from "wimui";

export const App = () => <Button>Save</Button>;
```

- `styles.css` is required (bundles the design tokens and component CSS).
- `reset.css` is optional. It contains opinionated global styles that reset `button` / `a` / `ul` / `table`, so you can omit it if it conflicts with your app's existing styles.

No `i18next` initialization is required. To manage theme, density, and locale together, `WimProvider` is recommended (see below).

## Fonts (optional, not bundled)

**The package ships no font binaries** (`files: ["dist"]`), and `styles.css` makes no request to a font host. The typography tokens name a preferred family first and then fall back to system faces:

| Token | Stack |
|---|---|
| `--wim-font-family-default` / `-en` / `-pt` | `"Noto Sans"` → Segoe UI → Roboto → Helvetica Neue → Arial |
| `--wim-font-family-ja` | `"Noto Sans JP"` → Yu Gothic → Hiragino Kaku Gothic ProN → Meiryo |
| `--wim-font-family-mono` | `"Noto Sans Mono"` → Cascadia Code → Fira Code → Consolas → Monaco → Menlo |

So out of the box you get your users' system fonts, and everything still works. To reproduce the reference look of the documentation site, install the faces yourself — the design tokens already point at them, so nothing else changes:

```bash
npm install @fontsource/noto-sans @fontsource/noto-sans-mono
# add only if you render Japanese:
npm install @fontsource/noto-sans-jp
```

```tsx
// at the same entry point as wimui/styles.css, before it
import "@fontsource/noto-sans/latin-400.css";
import "@fontsource/noto-sans/latin-500.css";
import "@fontsource/noto-sans/latin-700.css";
import "@fontsource/noto-sans-mono/latin-400.css";
// Japanese only:
import "@fontsource/noto-sans-jp/japanese-400.css";

import "wimui/styles.css";
```

Weights 400 / 500 / 700 are the ones the components use. Add `latin-ext-*` for Central/Eastern European coverage; Portuguese diacritics (ã ç õ) are already in `latin`. Any other loading mechanism works too (self-hosted `@font-face`, a font host, `next/font`) — the tokens only need the family names `Noto Sans`, `Noto Sans JP`, and `Noto Sans Mono` to resolve. To use entirely different fonts, override the tokens instead (see "Design tokens").

### Commonly used public types / APIs

```tsx
import {
  WimProvider,
  useWim,
  setWimTheme,
  setWimDensity,
  setWimLocale,
  type WimDensity,
  type WimColor,
  type WimColorKey,
} from "wimui";
// If you only want token types, you can also import from `wimui/tokens`
```

| API / type | Purpose |
|---|---|
| `WimProvider` / `useWim` | Set `theme` / `density` / `locale` from React |
| `setWimTheme` / `setWimDensity` / `setWimLocale` | Imperative APIs for attributes and locale |
| `WimDensity` | `"comfortable" \| "compact"` |
| `WimColor` / `WimColorKey` | Color prop / token keys (public roles; does not include `--wim-comp-*`) |

**Only when you need optional features** — import from `wimui/charts` / a peer-component subpath / `wimui/rhf`, and install the peers in the table below.

```tsx
import { BarChart } from "wimui/charts";
import { Markdown } from "wimui/data-display/markdown";
import { StreamingText } from "wimui/ai/streaming-text";
import { FormField } from "wimui/rhf";
```

```bash
# e.g. when using charts
npm install recharts
```

> The UMD build (`dist/wimui.umd.js` + `dist/wimui.umd.css`) loaded via a `<script>` tag
> bundles the required styles (tokens + components) and reset into a single file.

## Icons

There are two ways to specify an icon.

**1. Pass the component directly (recommended; tree-shakeable)**

```tsx
import { Button, Icon, CheckIcon } from "wimui";

<Button icon={<Icon component={CheckIcon} />}>Save</Button>;
<Icon component={CheckIcon} size="sm" />;
```

**2. Specify by string**

If you want string-based usage like `icon="CheckIcon"`, register the icons once at your entry point (specifying a string without registering triggers a development-time warning).

```tsx
import "wimui/icons"; // registers all icons (~30KB minified / 5KB gzip)

<Button icon="CheckIcon">Save</Button>
```

If you never use string-based specification, you don't need to import `wimui/icons`, and the icons are not included in your bundle.

## Internationalization (i18n)

Works out of the box in English with no setup (only the translation keys used by components are bundled for en / ja / pt). **No dependency on `i18next` / `react-i18next`** is required. To switch the display language:

```tsx
import { setWimLocale, getWimLocale } from "wimui";

setWimLocale("ja"); // "en" | "ja" | "pt"
getWimLocale();     // current locale (e.g. "ja")
```

If your app already manages language with i18next or similar, call `setWimLocale` on language change to keep them in sync. wimui does not depend on a specific i18n library, so it works with any mechanism.

```ts
// e.g. sync with your app's i18next
i18n.on("languageChanged", (lng) => setWimLocale(lng));
```

**Writing direction**: officially LTR only (en / ja / pt). RTL (Arabic, Hebrew, etc.) and a full migration to logical properties are **not planned** (see `IMPROVEMENTS.md` "Out of scope").

## Dark mode

`WimProvider` is recommended. Internally it writes `data-theme` on `<html>` (the attribute name and target remain the public contract). When unspecified (`system`), it follows the OS `prefers-color-scheme`.

```tsx
import { WimProvider } from "wimui";

<WimProvider theme="dark" density="compact" locale="ja">
  <App />
</WimProvider>
```

You can also set the attribute directly (`ThemeToggle` / `setWimTheme` share the same contract).

```html
<html data-theme="dark">  <!-- force dark -->
<html data-theme="light"> <!-- force light -->
<html>                    <!-- follow OS setting -->
```

If you drive the same document theme with both `ThemeToggle` and `WimProvider`, lift the state to a parent and set `applyToDocument={false}` on the toggle side.

## Overriding the brand color (primary)

Override the public role tokens via CSS. Load it **after** `wimui/styles.css`. Only touch the role layer (do not touch `--wim-comp-*` or raw palette colors).

Many derivatives (`primary-hover` / `primary-active` / `primary-muted` / `primary-soft`, etc.) are computed from `primary` / `primary-rgb`, so **the two of those plus `text-on-primary` for contrast** are usually enough.

```css
/* app.css — after import "wimui/styles.css" */
:root {
  --wim-color-primary: #0b6e4f;
  --wim-color-primary-rgb: 11, 110, 79; /* for rgba(var(--wim-color-primary-rgb), a). comma-separated */
  --wim-color-text-on-primary: #ffffff;
}

/* only if you want a different color in dark mode */
[data-theme="dark"] {
  --wim-color-primary: #3dd68c;
  --wim-color-primary-rgb: 61, 214, 140;
  --wim-color-text-on-primary: #06281a;
}
```

- Do not wrap `primary-rgb` in `rgb(...)` (use the `11, 110, 79` form).
- If you customize `primary-fill` (e.g. for dark-mode fills), override it too if needed.
- For the full token list, see Storybook **Token → Colors** / `DESIGN.md`.

## UI density

Switches control heights and paddings globally. Layout spacing (`--wim-spacing-*`) is unchanged; `--wim-height-*`, `--wim-control-padding-*`, table cell paddings, etc. follow along. The attribute name is `data-density` (public contract). Set it via `WimProvider`'s `density` or `setWimDensity`.

```ts
import { setWimDensity, getWimDensity } from "wimui";

setWimDensity("compact");     // for dashboards (documentElement)
setWimDensity("comfortable"); // default
getWimDensity();              // "comfortable" | "compact"
```

```html
<html data-density="compact">
```

In Storybook, check it via the toolbar **Density**, or Token → Density / Theme.

## Bundle size and import style

Named imports from the root exclude unused components from the bundle (`sideEffects` is configured). Per-category subpaths are also available.

<!-- code-example: skip — 同じ名前を 2 つの経路から import する「どちらでも書ける」の例示。1 ファイルとしては重複識別子になるのが正しい -->

```tsx
import { Button } from "wimui";      // tree-shakeable (recommended)
import { Button } from "wimui/form"; // per-category subpath
```

Categories: `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai` / `tokens` / `rhf`

**Deep paths are not public.** Per-component paths like `wimui/form/Button` are not in `exports` (so folder names don't become a consumer contract).

### Public API surface (frozen)

The `exports` map in `package.json` and the barrels' named exports are the public contract. `npm run check:api` verifies both against `api-snapshot.json`.

| Layer | Example | Note |
|---|---|---|
| Root / category barrels | `wimui`, `wimui/form`, `wimui/rhf` | Public. Adding/removing symbols requires updating the snapshot |
| CSS / locales | `wimui/styles.css`, `wimui/locales/*` | Per the theme / i18n contract |
| Non-public | `wimui/form/Button`, `_internal`, etc. | Not in `exports`, so not importable |

Only for intentional API changes, update the snapshot with `npm run check:api:update` and commit it.

> **Optional-peer-dependent components are not exported from the root `wimui`.** See the subpath examples in Quick start and the table below.

## Optional peerDependencies

Only when you use the components below, import from the corresponding subpath and add the peer. If you don't use them, you don't need them.

Each peer-dependent component has its **own subpath** whose name documents its peer, so the category barrels (`wimui/data-display`, `wimui/ai`) stay peer-free.

| Component | import | Required packages |
|---|---|---|
| AreaChart, BarChart, etc. | `wimui/charts` | `recharts` |
| Markdown | `wimui/data-display/markdown` | `react-markdown` `remark-gfm` |
| QRCode | `wimui/data-display/qr-code` | `qrcode.react` |
| NodeGraph | `wimui/data-display/node-graph` | `@xyflow/react` |
| ScheduleView | `wimui/data-display/schedule-view` | `@fullcalendar/core` `@fullcalendar/react` `@fullcalendar/daygrid` `@fullcalendar/timegrid` `@fullcalendar/interaction` |
| JsonDiffViewer | `wimui/data-display/json-diff-viewer` | `diff` |
| StreamingText | `wimui/ai/streaming-text` | `react-markdown` `remark-gfm` |
| MarkdownRenderer | `wimui/ai/markdown-renderer` | `react-markdown` `remark-gfm` |
| CodeDiffViewer | `wimui/ai/code-diff-viewer` | `diff` |
| InteractiveGraph | `wimui/ai/interactive-graph` | `@xyflow/react` |
| Audio (only when `showMetadata`) | `wimui` or `wimui/media` | `music-metadata` |
| FormField / zodResolver | `wimui/rhf` | `react-hook-form` `^7.43` / `@hookform/resolvers` `^5.1` / `zod` `^3.25 \|\| ^4` |

Source of truth: `src/data/peer-imports.json` (CI's `check:imports` also reads this). Audio's metadata peer is a dynamic optional import, so it also lives at the root.

## Form value / error contract

The public contract for core form components (same when using RHF).

| Item | Contract |
|---|---|
| Clearable scalar (ClearedValue) | Controlled empty is **`null`**. `undefined` means "uncontrolled / prop unspecified" only |
| e.g. `DatePicker` | `value?: Date \| null` / `onChange?: (date: Date \| null) => void` |
| `error` (with message) | `Input` / `Select` / `DatePicker` / `Textarea`, etc. → `error?: string` |
| `error` (leaf toggles) | `Checkbox` / `Switch` / `Radio` → `error?: boolean` (visual only) |

The UI-empty state of string fields is usually `""`. Do not treat a clearable scalar like DatePicker as "cleared" with `""` or `undefined`.

## Form integration (react-hook-form / zod)

The core form components stay framework-agnostic. To wire them to RHF, use the optional entry `wimui/rhf`. Matching the ClearedValue / `error` split in the table above, `FormField` passes both `error` (string) and `invalid` (boolean).

```bash
npm i react-hook-form@^7.43 @hookform/resolvers@^5.1 zod@^4
```

```tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, Select, Checkbox, DatePicker } from "wimui";
import { FormField, valueFieldProps, checkedFieldProps, zodResolver } from "wimui/rhf";

const schema = z.object({
  email: z.string().email(),
  role: z.string().min(1),
  accept: z.boolean().refine(Boolean),
  due: z.date().nullable(),
});

function Example() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", role: "", accept: false, due: null },
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormField
        control={control}
        name="email"
        render={({ field, error }) => <Input {...field} label="Email" error={error} />}
      />
      <FormField
        control={control}
        name="role"
        render={({ field, error }) => (
          <Select {...valueFieldProps(field)} label="Role" error={error} options={[]} />
        )}
      />
      <FormField
        control={control}
        name="due"
        render={({ field, error }) => (
          <DatePicker {...valueFieldProps(field)} label="Due" error={error} />
        )}
      />
      <FormField
        control={control}
        name="accept"
        render={({ field, invalid }) => (
          <Checkbox {...checkedFieldProps(field)} error={invalid}>
            Accept
          </Checkbox>
        )}
      />
    </form>
  );
}
```

- Native-ish inputs (`Input` / `Textarea`, etc.): pass `{...field}` directly
- Value-callback types (`Select` / `DatePicker` / `RadioGroup`, etc.): `valueFieldProps(field)` (clear is `null`)
- `checked` types (`Checkbox` / `Switch`): `checkedFieldProps(field)` + `error={invalid}` (`error?: boolean`)

Storybook: **Patterns → Form → React Hook Form**

## Next.js App Router (RSC) support

Each built module has a `"use client"` directive prepended automatically. You can import directly from App Router server components with no extra wrapper (each component is treated as a client boundary).

As an exception, `wimui/tokens` is a types-only module, so it has no `"use client"` and can be referenced from server components too.

## Releasing

Published to npm via [changesets](https://github.com/changesets/changesets) + GitHub Actions. Add a changeset with `npm run changeset`; merging the auto-generated "Version Packages" PR publishes the release (with provenance). See [`RELEASING.md`](./RELEASING.md) for the full runbook.

---

## Development

### Dev servers

```
npm run dev         # Vite dev server (includes icon generation and i18n bundle)
npm run storybook   # Storybook (documentation and component review)
```

### Component scaffold

```
npm run scaffold -- <Name> <category> [categoryId]
# e.g. npm run scaffold -- MyInput form basic-inputs
```

Generates boilerplate under `src/components/<category>/<Name>/` and `stories/<category>/<Name>/`. You then need to add the export to `src/<category>.ts`, add translation keys, and write the MDX (see `CLAUDE.md` / `SKILLS.md`).

### Check package versions

```
npm outdated
```

## Quality checks

### SCSS

```
npm run stylelint       # lint CSS/SCSS under src and stories
npm run stylelint:fix   # auto-fix CSS/SCSS under src and stories
```

### JavaScript / TypeScript

```
npm run lint            # lint JS/TS/MDX under src and stories (zero warnings required)
npm run lint:fix        # auto-fix JS/TS/MDX under src and stories
```

### Unit tests

```
npm run test            # run component unit tests (*.test.tsx)
```

### Test coverage

```
npm run test:coverage   # measure coverage (fails below 80% for lines/branches/functions/statements) + HTML report in coverage/
```

### Untested components

```
npm run test:check      # update the list of untested components (stories/missing_tests.txt)
npm run test:report     # run coverage and the untested check together
```

### VRT (Visual Regression Testing)

Requires a static Storybook build first (`storybook-static/` is gitignored).

```
npm run build-storybook                                 # required initially and after story changes
npm run test:vrt                                        # the full Playwright suite under vrt/ (VRT, a11y, e2e)
npm run test:vrt:update                                 # update snapshots
npm run test:vrt:report                                 # review diffs in a slider view
$env:FILTER='Calendar'; npm run test:vrt:update         # update Calendar snapshots only
```

> The CI Visual Regression Test workflow runs only `vrt/vrt.spec.ts`. Local `npm run test:vrt` also includes a11y / e2e.
> After updating the Playwright version, re-fetch browsers with `npx playwright install`.

#### Environment variables

```
$env:THEME='light'                               # run light mode only
$env:THEME='dark'                                # run dark mode only
$env:FILTER='Button'                             # run the Button component only
$env:THEME='light'; $env:FILTER='Button'         # VRT for Button, light mode only
$env:THEME='dark'; $env:FILTER='Calendar'        # VRT for Calendar, dark mode only
$env:THEME=$null; $env:FILTER=$null              # reset the environment variables
```

#### Running VRT in CI (GitHub Actions)

VRT runs automatically on PRs that change `src/` or `stories/`.

Procedure when you intentionally change the UI:

1. Change the UI and open a PR
2. The VRT workflow runs automatically and compares against the existing linux snapshots
3. If a diff is detected, the test fails
4. Actions tab → the workflow → download the `vrt-diffs` artifact to review the diff images
5. If the change is intentional, Actions tab → Visual Regression Test → Run workflow → `Update baseline snapshots: true` to update the baseline

> First-time setup: with no linux snapshots yet, there is nothing to compare against, so it fails.
> Run the above Run workflow → `Update baseline snapshots: true` once to generate the linux baseline.

### a11y

Like VRT, requires `npm run build-storybook` first.

```
npx playwright test vrt/a11y.spec.ts                                        # a11y check for all stories
$env:FILTER='Button'; npx playwright test vrt/a11y.spec.ts                  # Button only
npx playwright test vrt/a11y.spec.ts --grep "DataGrid"                     # DataGrid only
```

### Bundle size

```
npm run size   # check that all ES module chunks (gzip) and the UMD bundle (gzip) are within thresholds
```

The thresholds are also verified automatically in CI (`bundle-size.yml`).

### Storybook docs error detection

If a story name referenced in an MDX file doesn't match the actual export, an error is emitted at Storybook build time.

```
npm run build-storybook   # detects pages with errors as build errors
```

When an error occurs, it appears on stderr as a line containing `error`.

Common causes:

- `<Canvas of={Stories.ExportName} />` in MDX where `ExportName` doesn't exist in the story file
- `<Controls of={Stories.ExportName} />` in MDX, same as above
- Passing JSX rather than a string to the `<Markdown>` component

## Code formatting

```
npm run format   # format the whole project with Prettier
```

## Maintenance & Audit

Recommended to run before and after adding many components or doing large refactors.

```bash
npm run audit:all               # run all audits (docs + lib)
npm run audit:lib               # library structural guards only
npm run audit:docs              # Storybook/MDX and i18n only
npm run audit-mdx               # check for missing required documentation sections
npm run i18n:check              # check consistency across the 3 languages
npm run check:aschild           # check for missing asChild (Slot pattern) support
```

Audit scope (`audit:all`):
- **docs**: MDX required sections / i18n consistency and line counts / hardcoded text in MDX and stories / story hierarchy
- **lib**: asChild / hardcoded values (colors, px) / public API surface / root hooks / token & intent consistency / SCSS token references

## Internationalization (i18n) scripts

```bash
npm run i18n:check              # check for missing translation keys across locale files and file line count (1000 lines)
npm run i18n:check:components   # check that keys used in component sources exist in the translation files
npm run i18n:sync              # auto-translate/append from en to ja/pt via Google AI (requires GOOGLE_GENERATIVE_AI_API_KEY)
```

| Script | What it catches |
|---|---|
| `i18n:check` | Missing keys across locales, file bloat (1000-line limit) |
| `i18n:check:components` | Cases where you started using `t("key")` in code but forgot to register it |

Recommended flow:
1. Detect unregistered keys with `npm run i18n:check:components`
2. Add the keys to the EN translation file
3. Auto-translate to ja/pt with `npm run i18n:sync`
4. Verify final consistency with `npm run i18n:check`

## Utilities & consistency

```bash
npm run check:consistency   # check structural mismatches across src, src/data/components.json, stories, mdx
npm run check:hierarchy     # check for components missing from the component list (MDX)
npm run check:aschild       # check that components implement the Slot pattern correctly
npm run check:stories       # check for missing translation keys (raw keys shown)
npm run i18n:missing        # check for keys present in en but not translated in other languages
```

## Deployment

```
npm run deploy   # deploy to GitHub Pages
```

Storybook is also deployed to GitHub Pages automatically on push to `main` via `.github/workflows/deploy.yml`. Manual `npm run deploy` is for emergency deploys or verification from local.

## Git

### Skipping Husky

If you must skip Husky on commit:

```
git commit -m "commit message" --no-verify
```

## Coding rules

- Styling: new components should use CSS Modules (`*.module.scss`)
- CSS class names: legacy global classes use the `wim-` prefix (see `RULES.md` for details)

## Automatic documentation extraction (Docgen)

WIM UI extracts component specs (Props, design tokens, anatomy) automatically and embeds them into MDX.
`src/data/docgen_*.json` is refreshed automatically when the Vite dev server starts or on file save, so you don't need to run a script manually (the output is gitignored and produced by Storybook's Vite plugin).
For details on writing MDX, see `SKILLS.md`.

## Design tokens

WIM UI manages design tokens as a single source of truth using Style Dictionary.

### Structure

- Source: `tokens/color/*.json` / `tokens/*.json` / `tokens/themes/dark.json` / `tokens/intents.json`
- Generated (auto):
    - `src/tokens/generated/` (SCSS variables, CSS custom properties, `_intents.scss`)
    - `src/types/generated-tokens.ts` / `src/types/generated-intents.ts`

### Build command

After editing tokens (JSON), always run the following to reflect them in code.

```bash
npm run tokens:build   # Style Dictionary + intent generation (SCSS / TypeScript)
```

This makes the latest tokens available as type completions during component development.

## Workflow

```bash
git add .
git commit -m "..."
git pull --rebase origin main
git push origin main
```
