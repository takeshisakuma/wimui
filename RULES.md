# 基本ルール

- 回答は日本語で行ってください。
- 絵文字を使わないでください。

---

# ドキュメント管理

コンポーネントを新規作成・削除した場合は、以下をすべて更新してください。

- `docs/componentList.mdx`（データ実体は `src/data/components.json`）
- コンポーネント個別のmdx
- カテゴリーのmdx

---

# 多言語化（i18n）

- `public/locales/` 配下のJSONファイルは1000行を超えないようにしてください。超える場合は分割してください。
- en / ja / pt すべてのリソースファイルで漏れなく定義されているか、`npm run i18n:sync` でチェックしてください。
- i18nキーは **ネスト構造** で命名してください（例: `a11y.close`, `button.clear`, `fileupload.button`）。JSONファイルはネストオブジェクト形式で管理し、コード側は `.` 区切りのドット記法を使用します。新規キーは同じ prefix グループに追加してください。
- 新しいネームスペース（新しいJSONファイル）を追加した場合は、`stories/i18nConstants.ts` の `ALL_NAMESPACES` にも追加してください。追加しないとStorybook上で翻訳キーがそのまま表示されます。テストでは検出できないため注意してください。
- MDXや TSX/Stories で `<T k="..." />` や `t("...")` を使うキーを新規追加・変更した場合は、必ず en / ja / pt の**すべて**のロケールファイルに同じキーを追加してください。1言語だけ追加して他を忘れると翻訳キーがそのまま表示されます。
- 既存の汎用キー（`doc.scenario.*` など）を MDX で使う場合は、**事前にロケールファイルに存在するか検索して確認**してください。存在しなければ追加してください。`doc.scenario.filter_title` は存在するが `doc.scenario.faq_title` は存在しない、といった漏れが起きやすいです。

---

# コンポーネント新規作成・修正、ストーリーの新規作成・修正時の共通ルール

## 実装

- 可能な限り既存コンポーネント（`src/components/_internal/` の内部コンポーネントを含む）を活用し、独自実装しないようにしてください。
- `any` の使用は禁止です。Props は `interface` または `type` で明示的に型定義してください。
- HTML要素を拡張するコンポーネントでは `React.ComponentPropsWithoutRef<"element">` を使って HTML属性を継承してください。不要な属性は `Omit` で除外してください。
- コンポーネントAPIの整合性（Prop名の統一）を保ってください。以下のルールに従ってください。
  - **無効化には `disabled` prop（HTML ネイティブ属性）のみを使用してください。** `status="disabled"` や `state="disabled"` のような形でインタラクション状態を `status` / `state` に混在させないでください。
  - **`status` prop は視覚・意味的状態のみを表します。** 値は `"default" | "error"` などに限定し、`"disabled"` を含めないでください。
  - **`size`, `radius`, `intensity` 等の prop の値は `"sm" | "md" | "lg"` に統一してください。** レイアウト用の幅指定など別用途では `"xs" | "sm" | "md" | "lg" | "xl"` を使用してかまいません。
  - **共通 prop 型は `src/types/tokens.ts` の型を使用してください。** インラインのユニオン型を重複定義しないでください。定義済みの型は以下の通りです。
    - `ComponentSize` — `"sm" | "md" | "lg"`（`size` prop 共通）
    - `ButtonVariant` — `"solid" | "outline" | "ghost"`（Button・ButtonGroup・LinkButton）
    - `ButtonIntent` — `"default" | "destructive" | "positive"`（Button の意味的意図）
    - `FieldVariant` — `"outline" | "ghost"`（Input・Textarea・DatePicker など）
    - `IndicatorVariant` — `"solid" | "outline" | "subtle"`（Badge・Chip・Tag）
    - `IndicatorStatus` — `"primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral"`（Badge・Chip・Tag・Progress など）
    - `FeedbackStatus` — `"info" | "success" | "warning" | "error"`（Alert・Banner・Toast・Notification など）
    - `FieldStatus` — `"default" | "error"`（Input・Textarea・DatePicker・RichTextEditor など）
    - `WimIntent` — 上記すべてを含む全意図値のユニオン（汎用）
  - **新しい共通 prop 型が必要になった場合は、インラインで定義せず `src/types/tokens.ts` に追加してください。** 追加後は `npm run tokens:check` で整合性を確認してください。
- 最新のセマンティックHTMLを使用してください。
- コンポーネントではデザイントークン（`src/tokens/`）の値を使用してください。**CSS値のハードコードはカラーに限らずすべて禁止です。** `padding`, `border-radius`, `font-size`, `font-weight`, `box-shadow`, `opacity`, `transition`, `animation-duration` なども対応する `--wim-*` トークンを使用してください。既存トークンで対応できない値が必要な場合は独自値を直接書かず、先に `src/tokens/` にトークンを追加してから使用してください（追加手順は `SKILLS.md` を参照）。ストーリーやdocsのユーティリティコンポーネント（`stories/` 配下のTSX）でインラインスタイルを使う場合も、`color: 'gray'` のようなハードコードされたCSS色名は使わず、`var(--wim-color-text-secondary)` などのCSSカスタムプロパティを使用してください。ダークモードで背景色と同化して読めなくなります。
- `stories/` 配下のTSXでは、`var(--bg-component)`・`var(--text-primary)`・`var(--text-secondary)` などの内部ショートエイリアスを使用しないでください。ストーリーを持たない純粋なMDXページ（`<Meta title="..." />` のみのページ）ではデコレーターが動作しないため `data-theme` が設定されず、これらの変数が意図した色に解決されないケースがあります。代わりに必ず `var(--wim-color-surface)`・`var(--wim-color-text-primary)`・`var(--wim-color-text-secondary)` などの `--wim-color-*` プレフィックス付きトークンを使用してください。
- レスポンシブデザインに対応してください。ブレークポイントの使い分けは以下のルールに従ってください。

### メディアクエリ vs コンテナクエリ

| 用途 | 使用するクエリ | mixin |
|------|--------------|-------|
| ビューポート全体に依存するレイアウト（AppShell、Dialog、グローバル余白など） | メディアクエリ | `@include up()` / `@include down()` |
| ページ内に配置されるUIコンポーネント（サイドバーの有無で表示サイズが変わりうるもの） | コンテナクエリ | `@include container-up()` / `@include container-down()` |

**判断基準：** コンポーネントがサイドバーや他のレイアウト要素と並んで配置されたとき、ビューポート幅ではなくコンポーネント自身の幅でレイアウトを切り替えるべき場合はコンテナクエリを使用してください。

**コンテナクエリを使う場合の注意：** `container-type: inline-size` を付与した要素は `contain: inline-size` が暗黙的に適用されます。`display: flex` のコンテナに付与すると子要素のパーセンテージ幅計算が壊れることがあります。その場合はメディアクエリに留めてください（例: ButtonGroup）。
- 複雑なコンポーネントでは、矢印キーによるスムーズなフォーカス移動など、WAI-ARIAの仕様に基づいたキーボードナビゲーションを実装してください。
- `input` や `textarea` など、ユーザーが入力・選択する部分のplaceholderは、説明・指示・制限事項ではなく、実際にユーザーが入力するような内容にしてください。

## アクセシビリティ

- `eslint-plugin-jsx-a11y` のチェックを通過してください（lint時に自動チェックされます）。
- インタラクティブ要素には適切な `role` 属性を付与してください。
- 視覚的なラベルがない要素には `aria-label` または `aria-labelledby` を必ず付与してください。
- 補足説明が必要な要素には `aria-describedby` を使用してください。
- モーダルやドロップダウンなどフォーカスを閉じ込める必要がある場合は、フォーカストラップを実装してください。
- カラーコントラスト比はWCAG AA基準を満たしてください（通常テキスト: 4.5:1以上、大テキスト: 3:1以上）。
- セマンティックカラートークンを使用していればコントラスト比は自動的に確保されます。

## アイコン

- アイコンは個別のコンポーネントやストーリーに持たせず、共通で使えるように `src/icon/` または `src/svg/` に配置してください。

## CSSクラス名

- クラス名は `wim-` プレフィックスを付けたkebab-caseにしてください（例: `wim-button`, `wim-button--primary`）。
- Stylelintで `^[a-z][a-zA-Z0-9-_]+$` パターンが強制されています。

## デザイントークン（CSS カスタムプロパティ）

- グローバルデザイントークンはすべて `--wim-[カテゴリ]-[意味]-[修飾]` の構造で命名してください。
  - **カテゴリ**は下表の既存カテゴリから選択してください。新しいカテゴリを追加する場合は下表に追記してください。
  - **意味**・**修飾**はkebab-caseで記述してください（例: `text-on-primary`, `bg-app`）。

| カテゴリ | 用途 | 例 |
|---|---|---|
| `color` | セマンティックカラー全般 | `--wim-color-primary`, `--wim-color-text-secondary` |
| `spacing` | 余白・間隔 | `--wim-spacing-md` |
| `radius` | 角丸 | `--wim-radius-lg` |
| `shadow` | 影・elevation | `--wim-shadow-sm` |
| `font-size` | フォントサイズ | `--wim-font-size-xl` |
| `font-weight` | フォントウェイト | `--wim-font-weight-bold` |
| `font-family` | フォントファミリー | `--wim-font-family-ja` |
| `line-height` | 行高 | `--wim-line-height-normal` |
| `opacity` | 透明度 | `--wim-opacity-disabled` |
| `border` | ボーダー幅など | `--wim-border-width-thin` |
| `focus` | フォーカスリング | `--wim-focus-outline-width` |
| `duration` | アニメーション時間 | `--wim-duration-fast` |
| `easing` | イージング関数 | `--wim-easing-standard` |
| `transition` | transition ショートハンド | `--wim-transition-base` |
| `lift` | translate-Y 値 | `--wim-lift-sm` |
| `scale` | scale 値 | `--wim-scale-active` |
| `decoration` | テキスト装飾 | `--wim-decoration-underline` |
| `gradient` | グラデーション | `--wim-gradient-glass` |
| `z` | Z-index 階層 | `--wim-z-overlay` |

- コンポーネント内部でのみ使用するローカル変数（例: `--bg-tooltip`）は `--wim-` プレフィックス不要です。
- **`z-index` の使用ルール：** z-index はスタッキングコンテキスト内でしか比較されません（`position` + `z-index` / `transform` / `opacity < 1` 等を持つ要素は新しいスタッキングコンテキストを作成し、その内側の値は外と競合しません）。そのため、**コンポーネント自身がスタッキングコンテキストを作成している場合、その内部での相対的な上下順は生値のままで構いません**（例: トラックの上にサムブを重ねる Slider 内の `z-index: 1` / `2`、固定列を浮かせる Table 内の `z-index: 100` / `110` など）。それに対して、**スタッキングコンテキストをまたいで他のコンポーネントと競合しうる値**（画面全体を覆うオーバーレイ、サイドバー、トースト等）は必ず `var(--wim-z-*)` トークンを使用してください。利用可能なキーは `WimZIndexKey`（`src/types/tokens.ts`）を参照してください。
  - `--wim-z-sidebar: 900` — サイドバー（非オーバーレイ時）
  - `--wim-z-overlay: 1000` — Dialog・Drawer・Dropdown・Tooltip・Popover 等
  - `--wim-z-overlay-panel: 1001` — オーバーレイ上に重なるパネル
  - `--wim-z-overlay-step: 1002` — Tour ステップバブル
  - `--wim-z-toast: 9999` — Toast・Snackbar・Notification（常に最前面）
- トークンは `src/tokens/` 以下の SCSS ファイルで定義し、`:root` に CSS カスタムプロパティとして公開してください。
- 既存のエイリアス（`--wim-color-surface: var(--wim-color-bg-component)` など）は維持しますが、自己参照になる循環エイリアスは作成しないでください。
- `src/tokens/` の SCSS トークンを追加・変更・削除した場合は、`npm run tokens:check` を実行して `src/types/tokens.ts` との整合性を確認してください。型に不整合がある場合は `src/types/tokens.ts` を手動で更新してください。
  - `WimColorKey` → `src/tokens/_semantic-colors.scss` の `--wim-color-*`
  - `WimSpacingKey` → `src/tokens/_spacings.scss` の `--wim-spacing-*`
  - `WimRadiusKey` → `src/tokens/_spacings.scss` の `--wim-radius-*`
  - `WimShadowKey` → `src/tokens/_effects.scss` の `--wim-shadow-*`（`color`・`ambient`・`elevation` は内部専用のため型に含めない）
  - `WimZIndexKey` → `src/tokens/_effects.scss` の `--wim-z-*`（`tokens:check` スクリプトの対象外のため手動で整合性を確認してください）

## `!important` の使用

新規コードで `!important` を使用する場合は以下の方針に従ってください。

**使用してよいケース（意図的な使用）:**
- `prefers-reduced-motion` など、アクセシビリティのためにすべてのアニメーションを無効化する場合
- スクロールバーの非表示・スタイリングなど、ブラウザのデフォルトを確実に上書きするユーティリティクラス
- Box / Stack のようにインラインスタイル（CSS カスタムプロパティ）より優先させる必要があるレスポンシブユーティリティ
- ダークモードでテーマカラーを強制する場合

**使用してはいけないケース（代替手段を使うこと）:**
- 親コンポーネントが子コンポーネントのスタイルを上書きしたい場合 → 親クラスを前置してセレクターの特異性を上げてください

  ```scss
  // NG
  .wim-child-input { width: 100% !important; }

  // OK: 親クラスを前置して特異性で勝つ
  .wim-parent .wim-parent__row .wim-child-input { width: 100%; }
  ```

- サイズ・色・間隔などコンポーネント固有の値を上書きしたい場合 → CSS カスタムプロパティで上書き可能な設計にしてください

  ```scss
  // NG
  .wim-parent .wim-child { color: red !important; }

  // OK: カスタムプロパティで上書き可能にする
  .wim-child { color: var(--wim-child-color, var(--color-default)); }
  .wim-parent { --wim-child-color: red; }
  ```

## CSS カスケードレイヤー（@layer）

### 方針

コンポーネントの「使われる側」と「使う側」で @layer の有無を分けることで、`!important` なしに自然な上書き関係を実現しています。

| コンポーネントの種類 | @layer の扱い |
|---|---|
| 他コンポーネントに**使われる側**（Button・Icon・InputBase など `src/components/_internal/` 含む） | `@layer component` でラップする |
| 他コンポーネントを**使う側**（Snackbar・List・Rating など） | 非レイヤーのまま |

### 理由

CSS カスケードでは「非レイヤーのルール」が「@layer 内のルール」よりも常に優先されます。この性質を利用することで、使う側のコンポーネントは `!important` なしに使われる側のスタイルを上書きできます。

```scss
// Button は @layer component 内
// Snackbar は非レイヤー → Snackbar の Button 上書きが !important 不要で機能する
.wim-snackbar .wim-button {
  color: #fff; // !important 不要
}
```

全コンポーネントを同じ `@layer component` に入れると、ソース順・特異性による衝突が再発するため推奨しません。

### 新規コンポーネント作成時の判断フロー

新しいコンポーネントの SCSS を書く際は、以下の問いで判断してください。

```
Q1. このコンポーネントは他のコンポーネントから内部に組み込まれて使われることがある？
    （例: Button をラップした複合コンポーネント内で Button のスタイルを上書きしたい）
    → Yes: 非レイヤーにする
    → No: 次へ

Q2. このコンポーネント自身が他の多くのコンポーネントから利用される汎用部品？
    （例: アイコン・入力枠・リストアイテムのベースなど）
    → Yes: @layer component にする
    → No: どちらでもよいが、非レイヤーを推奨（将来の上書しやすさを確保）
```

### `!important` の使用基準との関係

非レイヤーから `@layer component` 内のスタイルを上書きするときは `!important` 不要です。`@layer component` から非レイヤーのスタイルを上書きする必要がある場合のみ `!important` を使用してください（例: AppShell が Sidebar の幅をリセットする場合）。

---

## ダークモード

- コンポーネントのSCSSに `[data-theme="dark"]` セレクターや `@media (prefers-color-scheme: dark)` を**書かないでください。** カラーやサーフェス・影・ゴースト・フィードバック等の値はすべて `src/tokens/_semantic-colors.scss` のセマンティックトークンとして定義されており、`:root` レベルで自動的にライト/ダークが切り替わります。
- コンポーネントSCSSでは**トークンを参照するだけ**でダークモード対応は完了します。
- 新しいダークモード固有の値が必要な場合は、`_semantic-colors.scss` の `:root` ブロックと `@mixin dark-theme` ブロックの両方にトークンを追加してください。
- 利用可能なトークンカテゴリ: Ghost/Subtle Surface、Glass/Frosted Surface、Skeleton、Control、Feedback variant、Utility（詳細は `_semantic-colors.scss` を参照）。

## ファイル・エクスポート

- コンポーネントは `src/components/コンポーネント名/` ディレクトリに配置してください。
- ディレクトリ名・コンポーネントファイル名はPascalCaseにしてください（例: `Button/Button.tsx`）。
- SCSSファイルはkebab-caseにしてください（例: `button.scss`）。
- SCSSファイルは必ずコンポーネントのTSXファイル内でインポートしてください（例: `import "./button.scss"`）。インポートがないとブラウザでスタイルが一切適用されません。テストやlintでは検出できないため注意してください。
- 新規コンポーネントは `src/index.ts` にexportを追加してください。

## テスト

- `describe` / `it` パターンで記述してください。
- `useTranslation` は必ず `vi.mock("react-i18next", ...)` でモックしてください。
- テストを作成し、通過することを確認してください（`npm run test`）。
- UIに影響する変更を行った場合は、VRTも実行してください（`npm run test:vrt`）。

## 品質チェック

- ESLintおよびStylelintで問題がないか確認してください（`npm run lint` / `npm run stylelint`）。
- pre-commitフックでは警告も0でないとコミットできません（`--max-warnings=0`）。
- 多言語化の対応をしてください。

## mdxの記述形式

- 表はMarkdownテーブル記法ではなく `<table>` タグで記述してください。
- リストは `- 項目` ではなく `<ul><li>` タグで記述してください。

## mdxに記載すること

Storybookのmdxは以下のセクション構成で記載してください。

- コンポーネントの概要
- Design Intent（デザイン意図）
- Choice Matrix（使い分け基準）
- Anatomy（構成要素）
- Content Guidelines（コンテンツ指針）
- Motion Spec（モーション仕様）
- A11y Spec（アクセシビリティ仕様）
- Real World Scenarios（ユースケース）
- Best Practices（ベストプラクティス）
- デザイントークンを使用している箇所
- レスポンシブデザインへの対応
- キーボードナビゲーション
- テストの実行方法
- 多言語化の対応
