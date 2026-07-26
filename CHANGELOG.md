# wimui

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
