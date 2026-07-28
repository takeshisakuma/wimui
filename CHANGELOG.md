# wimui

## 0.7.0

### Minor Changes

- e76c4db: The release where defaults change. Everything here came out of building a
  multi-step form with the library — a wholesale trade application — and then
  fixing what that screen ran into.

  **Read this part first: things that look different**

  - The required marker was a filled `danger` badge. On a form where most fields
    are required, that painted the page in error colour before anyone had done
    anything wrong, in the same colour the real errors use — so the real ones
    stopped standing out. It is now `subtle`. The word and the intent are
    unchanged, only the fill: 5.97:1 in light and 6.33:1 in dark, measured after
    compositing, both clear of AA.
  - `Alert`'s title is no longer a heading. It was an `h4`, so an alert under an
    `h2` skipped `h3` and failed `heading-order`. An alert is a notice, not a
    section of the document. The default is now `div`, and `titleTag` accepts
    `div`, `p`, `strong` and `span` alongside the headings. Nothing moves: the
    title's size, weight, line-height and box are identical either way.
  - Inline `<Code>` is no longer red. It took `--wim-color-text-danger`, so a lot
    number in a table or a reference number on a success screen came out looking
    like a failure. It now uses `text-primary`, like the block variant. It also
    no longer breaks mid-token — `KR-2026-0143` used to go vertical in a narrow
    column.
  - `Icon color="secondary"` was the only Icon colour resolving to a fill token,
    and on the light canvas it measured 1.86:1 — under the 3:1 that WCAG 1.4.11
    asks of a meaningful graphic. It now resolves to `text-secondary`, matching
    what `Text` means by the same word. `Result`'s large status glyph and
    `Image`'s fallback move to `tertiary`, which stays quiet at 5.43:1.

  **New**

  - `Text` takes `nowrap` and `truncate`. A short value like `1.2 MB` split
    across two lines in a narrow column and inline styles were the only way out.
  - `Fieldset` takes `variant="plain"`, which keeps the grouping and its
    `<legend>` and drops the frame — a framed fieldset inside a `Card` draws a
    box inside a box, and the alternative was losing the grouping entirely.
  - `Input` and `NumberInput` take `suffix`, for units like `kg`, `%` or `円`.
    It sits in the flow rather than floating over the field, so a long number
    never slides underneath it, and it is announced with the field.
  - `FileUpload` and `Dropzone` take `value: string[]`. Neither could be told
    that a file already existed, so a field holding last week's upload said
    "no file selected" indefinitely and the application had to draw the list
    itself.

  **Fixed**

  - `SegmentedControl` shrinks instead of pushing the page sideways. Its tracks
    could not go below their content, so the ellipsis it already had never
    fired: at 320px the control stayed 367px wide and the page picked up 79px of
    horizontal scroll. Label length is decided by translation, so fitting in
    English proved nothing.
  - `OtpInput`'s `digitAriaLabel` receives a 1-based position. It always did;
    nothing said so, and reading it as an index produced "Digit 2" on the first
    box.
  - `Card` warns in development when given a `padding` or `radius` value that
    type-checks but has no styles behind it. Narrowing those types is a breaking
    change and waits for the release that does those.

## 0.6.1

### Patch Changes

- 3f54363: Three defects 0.6.0 shipped, found by building the second screen with it — a
  multi-step wholesale application form.

  **Accessibility**

  - `FileUpload required` put `aria-required="true"` on its trigger. The trigger is a
    `role="button"`, and that role does not permit the attribute, so axe reported a
    critical `aria-allowed-attr` violation on every required upload in the library.
    The requirement is carried by the field's description instead.

  **Correctness**

  - `OtpInput` ignored the value it was mounted with. Its derived-state sync seeded the
    previous value from the current one, so the first render always compared equal and
    the sync never ran — `<OtpInput value="418203" />` drew six empty boxes. Re-showing
    a saved code, or remounting the step that holds one, dropped it silently.
  - `Alert`, `Banner`, `Notification`, `Snackbar`, `Toast` and `Result` drew the same
    filled circle for every intent but success. `danger`, `warning` and `info` all fell
    through to it, leaving colour alone to carry the intent — while `alert-circle` and
    `info-circle` sat unused in the icon set, and the docs claimed each intent had an
    icon of its own. They now do. `warning` shares `danger`'s glyph, since the set has
    no triangle, and colour still separates the two.

  The icon change is visible: anything showing a `danger`, `warning` or `info` feedback
  component gets a different glyph in the same position and colour.

## 0.6.0

### Minor Changes

- 1785eb1: Fixes the library found by building a real screen with it — an admin table with bulk
  selection, inline editing and row menus — and two defaults that screen showed to be wrong.

  **Accessibility**

  - `Button variant="outline"` and `variant="ghost"` took their text colour from the fill
    tokens, which the design guide reserves for fills. In dark theme `intent="success"` read
    at 2.48:1 and `intent="danger"` at 4.35:1, both under the WCAG AA floor. They now use the
    `text-*` roles: 8.07:1 and 6.06:1. Borders keep the intent colour.
  - `DataGrid` printed its pager in English regardless of locale (`Displaying 8 of 34 records`,
    `(3 row(s) selected)`, `Loading more...`). Eight screen-reader labels were hardcoded too —
    `Tag`'s close button, `Kanban`'s board and card-move controls, `Calendar`'s grid and month
    arrows, `ChatUI`'s attach button, and the alt text on `Audio` cover art and `ImageCropper`.
  - `InlineEdit`'s trigger could not be named. `aria-label` landed on the wrapper, so a screen
    reader announced only the value — "A-14, button". It now reaches the trigger and the input.

  **Narrow screens**

  - `Container` had no gutter at all, so any viewport narrower than its max-width pressed the
    content against the edge. It now carries a 16px `padding-inline`. **Layouts using
    `Container` will shift by 16px per side.**
  - The card layout below the breakpoint was half-finished: the grid stayed a framed white
    panel behind the cards, the selection cell kept its desktop 60px column and sticky borders,
    rows holding a control stood taller than rows holding text, cards had no top corners
    (`border-collapse: collapse` never paints a row's radius), and the inner padding came from
    the table's compact density. All fixed.
  - Cards now start under 576px rather than 768px, so tablets keep the table. `mobileCard="md"`
    restores the old threshold.
  - A `<code>` in a table cell no longer breaks one character per line.
  - `Toolbar.Group` can wrap; a group of buttons no longer forces the page to scroll sideways.

  **Overlays**

  - `Dropdown` menus render through a portal. Opening a row menu inside a `DataGrid` used to
    extend the grid's scroll area, and inside a card it was clipped away entirely. Menus also
    gain `flip` and `shift`, so one near a viewport edge stays on screen.

  **New**

  - `DataGrid`'s `loading` accepts `"blocking"` (what `true` has always meant) or `"refresh"`,
    which announces `aria-busy` while leaving the rows readable and usable. `refresh`
    deliberately does not dim: fading drops secondary text below AA.
  - `EmptyState` icons default to a muted colour instead of full-strength text black.

## 0.5.3

### Patch Changes

- 4ac5797: Patch release after 0.5.2. `Card` now honours `padding="xs"` and `radius="xl"` / `"2xl"` — the prop types already accepted them but no CSS class existed, so they silently did nothing. This is additive: values that previously had no effect now apply `--wim-spacing-sm`, `--wim-radius-xl` and `--wim-radius-2xl` respectively. Heads-up for the next minor: the remaining values with no matching token (`Card` `radius="xs" | "3xl" | "4xl" | "5xl"` and `padding="4xl" | "5xl"`) will be narrowed out of the prop types in 0.6.0 rather than implemented, since the radius scale stops at `2xl` and the spacing scale at `5xl` — implementing the padding pair would make two distinct values render identically.

## 0.5.2

### Patch Changes

- caa3770: Patch release after 0.5.1. Card `padding` now works at `xl` / `2xl` / `3xl` — the prop type accepted them but no CSS class existed, so they silently did nothing and call sites had to reach for inline style. Badge / Tag / Chip with `intent="neutral"` and `variant="subtle"` were invisible on light surfaces (the `disabled` token painted at 15% alpha resolves to roughly `#fbfbfb` on white); the token is now painted opaque, so **that combination changes appearance** — light `#e5e5e5` with `#393939` text (8.5:1), dark `#4f4f4f` with `#e5e5e5` (6.5:1). `llms.txt` / `llms-full.txt` regenerated: the published copies had been stale since v0.3.0, listing wrong `FeedbackIntent` defaults and missing props.

## 0.5.1

### Patch Changes

- c44e30e: `ChatUI` の配色を刷新（ライトモード）

  PCCS の淡いトーンで配色し直した。背景を淡い水色（PCCS p18）、受信吹き出しを白、送信吹き出しを淡緑（PCCS lt11）に変更。あわせて、背景が淡青になったことで本文背景の上に載る `.timestamp` が text-tertiary では AA を満たさなくなるため text-secondary に一段濃くした（sender/timestamp とも背景に対して十分なコントラストを確保）。吹き出し内の文字は従来どおり text-primary で高コントラスト。ダークモードは据え置き。

- bfce64b: Patch release after 0.5.0: success fill uses Strong `s12` with white `text-on-success` (solid Button/Badge labels); a11y text-* on PasswordStrength/Icon; Calendar day padding; Title fluid display sizes; InteractiveGraph mobile controls; field/TagInput horizontal padding; Dropzone/InteractiveArea padding stack; Snackbar warning contrast.

## 0.5.0

### Minor Changes

- 7ad0ee3: `BentoGrid` に `rowHeight` prop を追加

  各行の高さ（`grid-auto-rows`）を指定できる `rowHeight` prop を追加（任意の CSS length、既定 `18rem`）。コンパクトな内容のタイルで余白が空きすぎて「ほぼ空パネル」に見えるのを防ぐ。既定は従来どおりのため非破壊。

### Patch Changes

- 7ad0ee3: `DataGrid` の loading 状態の a11y を改善

  `loading` 中はグリッド内容全体を半透明（`opacity`）にしていたが、a11y ツリーには残っていたため、フェードした内容（例: セル内の `Badge`）を支援技術/axe が過渡的に評価し、合成後の低コントラストが color-contrast 違反として検出されていた。root に `aria-busy` を付けて読み込み中を告知し、フェードする内容（テーブル本体・フッター）を `inert` にしてタブ順と a11y ツリーから外す。表示上の変更はない。

- 7ad0ee3: `Chip` / `Tag` / `Badge` の CJK テキストの縦位置を修正

  - `Chip` / `Tag`: `line-height` を `1` に固定し、`token-base` の `line-height: normal` に起因して CJK 字形が下寄りに見える問題を解消（`Badge` と同じ対処）。
  - `Badge`: 固定 `height` を `min-height` に変更し上下 padding を一段増やして、`box-sizing: border-box` で CJK テキストがはみ出すのを防止（dot 表示の `iconOnly` は従来の固定寸法を維持）。

  見た目のみの修正で、公開 API・ラテン文字の表示に変更はない。

- 7ad0ee3: `wimui/rhf` の `zod` peer 範囲を `^3.25.0 || ^4.0.0` に拡大

  `@hookform/resolvers` 自身の zod peer 範囲に合わせ、zod 3 系を含むツリー（`@hookform/resolvers` 5.x が推移的に引く `@typeschema/zod` は zod `^3.23.8` を要求）でも `npm install` が `ERESOLVE` で失敗しないようにする。`wimui` は `@hookform/resolvers/zod` の `zodResolver` を再エクスポートするのみで zod v4 固有 API は未使用。開発・テストは引き続き zod 4 を対象。

## 0.4.0

### Minor Changes

- e4d4042: `Navbar` に `fluid` prop を追加

  - `fluid` を指定すると、内部コンテンツの中央寄せ `max-width`（1200px）コンテナを無効化し、コンテンツを全幅に広げる（`Header` / `Footer` の `fluid` と同じ意味）。
  - 用途: グラス調ヒーローやサイドバー付きレイアウト等で、Navbar の内容幅を full-bleed な下部コンテンツ（main）と揃える。既定は従来どおり 1200px 中央寄せのため、既存の見た目に影響はない（非破壊）。

- 1b8b41b: テーマプリセット（ブランドキット）を追加

  1 つの属性で画面の「形（角丸）とアクセント」を切り替えられるプリセット機構を追加。`styles.css` に重なるレイヤーで、テーマ（light/dark）・密度と直交して合成し、サブツリー単位でも適用できる。

  - **公開 API**: `WimProvider` に `preset` prop を追加。命令型の `setWimPreset` / `getWimPreset`、型 `WimPreset` / `WimPresetName`、カタログ `WIM_PRESETS` を公開。
  - **属性契約**: `data-wim-preset`（`data-theme` / `data-density` と同格）。値は `minimal` / `soft` / `bold`（未指定＝既定）。
  - **内蔵プリセット**: minimal（角丸を詰めた最小限・既定アクセント維持）/ soft（丸みのある形＋periwinkle アクセント）/ bold（中程度の角丸＋赤アクセント）。アクセントはライト/ダーク両テーマで WCAG AA を満たす値のみ採用。
  - `styles.css` に `[data-wim-preset]` レイヤーを同梱（新しい基底トークンは追加せず、role トークンの上書きのみ）。

  非破壊（追加のみ・既定の見た目は不変）。

## 0.3.0

### Minor Changes

- 3882df1: `Header` / `Footer` に `fluid` prop を追加

  - `fluid` を指定すると、内部コンテンツの中央寄せ `max-width`（1200px）コンテナを無効化し、コンテンツを全幅に広げる（`Container` の `fluid` と同じ意味）。
  - 用途: AppShell のサイドバー付きレイアウト等で、ヘッダー/フッターの内容幅を full-bleed な main と揃える。既定は従来どおり 1200px 中央寄せのため、既存の見た目に影響はない（非破壊）。

- eaabe5d: LLM コーディングエージェント向けガイド `llms.txt` / `llms-full.txt` を追加

  - 新しい export を2つ追加: `wimui/llms.txt`（概要・必須セットアップ・import 規約・コンポーネント一覧・コンポジションルール）と `wimui/llms-full.txt`（＋全コンポーネントの Props / 型 / デフォルト）。`dist` に同梱し、GitHub Pages でも公開される。
  - Cursor / Claude Code 等のエージェントが、正しい import パス・`--wim-*` トークン・CSS 契約（`styles.css`）・AI っぽさを避けるコンポジション指針に沿って画面を組めるようにするための機械可読な地図。ランタイム API・既存コンポーネントの挙動には一切変更なし（追加のみ・非破壊）。
  - 生成物は既存の SSOT（`components.json` / docgen / 翻訳 / `DESIGN.md`）から `npm run llms:build` で自動生成される。

## 0.2.0

### Minor Changes

- 3868a20: Navbar / Sidebar のレイアウト崩れを修正し、未定義だった `--wim-height-xl` トークンを追加

  - `--wim-height-xl`（comfortable 64px / compact 56px）を新規定義。Navbar のバー高さ・Sidebar の折りたたみ幅がこの未定義トークンを参照しており、height/width が auto に潰れる不具合を修正（Navbar のボタンが天地に密着、Sidebar collapsed のラベルが縦潰れ）。
  - Sidebar collapsed のアイコンを中央揃え＋ラベル非表示にし、ホバー領域の上下パディングを左右と揃えた。

## 0.1.0

### Minor Changes

- f36f5f0: Initial public release
