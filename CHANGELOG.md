# wimui

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
