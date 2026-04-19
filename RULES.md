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
- **ファイルの分割**: 単一の JSON ファイルが 1000 行を超える前に、カテゴリー単位（`form.json`, `data-display.json` 等）でファイルを分割してください。新しいファイルを追加した場合は `stories/i18nConstants.ts` に自動で反映されます。
- **ドキュメントの自動化（Docgen）**: コンポーネントの Props、使用デザイントークン、Anatomy（構成要素）、テスト実行方法は、Vite プラグインによって `src/data/docgen_index.json` およびカテゴリ別の `docgen_<category>.json` へ自動的に分割抽出されます。MDX では `<Docgen />` コンポーネントを使用することで、**見出し（H2）を含めて**これらの情報を自動的に差し込むことができます。詳細は `SKILLS.md` を参照してください。
- MDXや TSX/Stories で `<T k="..." />` や `t("...")` を使うキーを新規追加・変更した場合は、必ず en / ja / pt の**すべて**のロケールファイルに同じキーを追加してください。1言語だけ追加して他を忘れると翻訳キーがそのまま表示されます。
- 既存の汎用キー（`doc.scenario.*` など）を MDX で使う場合は、**事前にロケールファイルに存在するか検索して確認**してください。存在しなければ追加してください。`doc.scenario.filter_title` は存在するが `doc.scenario.faq_title` は存在しない、といった漏れが起きやすいです。

---

# コンポーネント新規作成・修正、ストーリーの新規作成・修正時の共通ルール

## 実装

- 可能な限り既存コンポーネント（`src/components/_internal/` の内部コンポーネントを含む）を活用し、独自実装しないようにしてください。
  - 内部コンポーネントを設計・修正する際は、JSDoc に **「Composition Contract（合成契約）」** を明記してください。これにより、上位コンポーネントとの責任分界点（Portalの管理、スクロールロックの要否、イベントの伝搬制御など）を明確にし、暗黙的な挙動によるバグを防ぎます。
- `any` の使用は禁止です。Props は `interface` または `type` で明示的に型定義してください。
- HTML要素を拡張するコンポーネントでは `React.ComponentPropsWithoutRef<"element">` を使って HTML属性を継承してください。不要な属性は `Omit` で除外してください。
- コンポーネントAPIの整合性（Prop名の統一）を保ってください。以下のルールに従ってください。
  - **無効化には `disabled` prop（HTML ネイティブ属性）のみを使用してください。** `status="disabled"` や `state="disabled"` のような形でインタラクション状態を `status` / `state` に混在させないでください。
  - **`intent` prop は視覚・意味的状態のみを表します。** 値は `"default" | "error"` などに限定し、`"disabled"` を含めないでください。
    - **例外（Resultコンポーネント）**: 意味的な状態（success, error等）は `intent` プロパティ、HTTPステータスコード（404, 500等）は `status` プロパティとして使い分けます。
  - **`size`, `radius`, `intensity` 等の prop の値は `"sm" | "md" | "lg"` に統一してください。** レイアウト用の幅指定など別用途では `"xs" | "sm" | "md" | "lg" | "xl"` を使用してかまいません。
  - **ポリモーフィズムには `asChild` prop（Slot パターン）を導入してください。** 従来の `as` prop によるタグ切り替えよりも、複雑なコンポーネント（React Router の Link 等）との統合が容易になります。実装には `@radix-ui/react-slot` を使用し、内部構造を維持する場合は `Slottable` を併用してください。現在、以下のコンポーネントで実装済みです。
    - **Typography**: Title, Text, Span, Legend, Label, Highlight, Kbd, Code, Blockquote
    - **Overlay**: Tooltip, Popover, Dropdown, HoverCard, Drawer, Dialog, BottomSheet
    - **Navigation**: Link, CommandPalette
    - **Form**: Button, Input, Selectbox, Checkbox, CheckboxGroup, Radio, RadioGroup, Slider, NumberInput, Mentions, OtpInput, FloatButton, FieldTemplate, DatePicker
    - **Layout**: Box, Flex, Stack, Group
    - **Data Display**: Badge, Chip, Tag, Card, Table, List, Kanban
  - **共通 prop 型は `src/types/tokens.ts` の型を使用してください。** インラインのユニオン型を重複定義しないでください。定義済みの型は以下の通りです。
    - `ComponentSize` — `"sm" | "md" | "lg"`（`size` prop 共通）
    - `ButtonVariant` — `"solid" | "outline" | "ghost"`（Button・ButtonGroup・LinkButton）
    - `ButtonIntent` — `"default" | "destructive" | "positive"`（Button の意味的意図）
    - `FieldVariant` — `"outline" | "ghost"`（Input・Textarea・DatePicker など）
    - `IndicatorVariant` — `"solid" | "outline" | "subtle"`（Badge・Chip・Tag）
    - `IndicatorIntent` — `"primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral"`（Badge・Chip・Tag・Progress など）
    - `FeedbackIntent` — `"info" | "success" | "warning" | "error"`（Alert・Banner・Toast・Notification など）
    - `FieldIntent` — `"default" | "error"`（Input・Textarea・DatePicker・RichTextEditor など）
    - `FieldWidth` — `"xs" | "sm" | "md" | "lg" | "xl"`（Input・Selectbox・DatePicker などの幅指定）
    - `WimIntent` — 上記すべてを含む全意図値のユニオン（汎用）
  - **新しい共通 prop 型が必要になった場合は、インラインで定義せず `src/types/tokens.ts` に追加してください。**
- 最新のセマンティックHTMLを使用してください。
- コンポーネントではデザイントークン（`src/tokens/`）の値を使用してください。**CSS値のハードコードはカラーに限らずすべて禁止です。** `padding`, `border-radius`, `font-size`, `font-weight`, `box-shadow`, `opacity`, `transition`, `animation-duration` なども対応する `--wim-*` トークンを使用してください。
- **トークン化の例外（ハードコードの許容要件）**: 以下の特殊なケースに限り、トークンを使用しない「意図的なハードコード」が認められます。詳細は `docs/TOKENIZATION_EXCEPTIONS.md` を参照してください。
  - **幾何学的整合性**: 黄金比やパーツ間の厳密なアスペクト比計算が必要な場合。
  - **描画補正**: ブラウザのサブピクセルレンダリングに伴う微調整（1.5pxなど）。
  - **構造上の固定寸法**: グローバルの余白設定から切り離すべき死守すべき寸法。
  - **インタラクションの物理挙動**: 感覚的なフィードバック（scale等）。
- **暫定的なハードコード**: トークン化が必要だが時間がかかる、あるいは適切なトークンが未定義で追加の議論が必要な場合は、必ずソースコード内に **`// TODO: tokenization`** というコメントを記述してください。このコメントがない未承認のハードコードは技術負債として却下されます。
- 既存トークンで対応できない値が必要な場合は独自値を直接書かず、先に `src/tokens/` にトークンを追加してから使用してください（追加手順は `SKILLS.md` を参照）。ストーリーやdocsのユーティリティコンポーネント（`stories/` 配下のTSX）でインラインスタイルを使う場合も、`color: 'gray'` のようなハードコードされたCSS色名は使わず、`var(--wim-color-text-secondary)` などのCSSカスタムプロパティを使用してください。ダークモードで背景色と同化して読めなくなります。
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

- アイコンは `src/icon/` に SVG ファイルを配置してください。配置されたファイルは、Vite ビルド時および保存時に **自動的に React コンポーネントおよびマッピング定義として `src/icon/index.ts` へエクスポートされます。**
- **開発者が手動で `Icon.tsx` のインポートや型定義を更新する必要はありません。**
- コンポーネント内でアイコンを使用する場合は、`Icon` コンポーネントの `name` prop にアイコン名（例: `name="CheckIcon"`）を渡すか、`src/icon/` から直接コンポーネントをインポートして `component` prop（例: `component={CheckIcon}`）に渡してください。後者は Tree-shaking に最適です。

## CSS クラス名とスタイリング

- 新規コンポーネントでは **CSS Modules**（`*.module.scss`）を使用してください。
- クラス名は JS から参照しやすい標準的なケバブケースまたはキャメルケースを使用します（`wim-` プレフィックスは不要です）。
- ルート要素には `.root`、内部パーツには `.icon`, `.label` などの名称を使用してください。
- **Anatomy**: `.scss`（または `.module.scss`）ファイル内のクラス名から構成要素を抽出します。CSS Modules の場合、`.root` や共通のサイズ・色修飾子（`.sm`, `.primary` 等）を除いたユニークなクラス名が自動的に抽出されます。
- 外部からの上書きが必要な場合は、CSS Variables（デザイントークン）を使用するか、ルート要素にのみ `:global(.wim-component-name)` を付与して安定したオーバーライドポイントを提供してください。
- 共通ベースコンポーネント（`IndicatorBase` 等）を使用する場合は、`prefixClass` の代わりに `styles` prop を渡してください。
- 既存のグローバルクラス形式（`wim-` プレフィックス付き）は段階的に履行しますが、新規開発は CSS Modules を優先します。

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
- デザイントークンの追加・変更は `tokens/` ディレクトリの JSON ファイルを編集し、`npm run tokens:build` を実行してください。これにより SCSS 変数と TypeScript 型定義が自動更新されます。手動での SCSS 編集や `src/types/tokens.ts` の型追加は原則不要です。
  - **カラー**: `tokens/color/base.json` (生色), `tokens/color/semantic.json` (意味的定義)
  - **サイズ・間隔**: `tokens/spacing.json`
  - **効果（影・透明度・Z-Index・モーション）**: `tokens/effects.json`

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

- **[推奨パターン] 角丸やパディングの動的な上書き**: 子要素の角丸やパディングの一部を親（InputGroup など）がリセットしたい場合は、以下のように「4角個別の変数」や「パディング変数」を用意してください。

  ```scss
  // 子要素（Button, Input など）側の定義
  .root {
    border-radius:
      var(--wim-field-radius-tl, var(--wim-field-radius, var(--wim-radius-md)))
      var(--wim-field-radius-tr, var(--wim-field-radius, var(--wim-radius-md)))
      var(--wim-field-radius-br, var(--wim-field-radius, var(--wim-radius-md)))
      var(--wim-field-radius-bl, var(--wim-field-radius, var(--wim-radius-md)));
  }

  // 親要素（InputGroup など）側の定義
  .root > *:not(:first-child) {
    --wim-field-radius-tl: 0;
    --wim-field-radius-bl: 0;
  }
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

- コンポーネントのSCSSに `[data-theme="dark"]` セレクターや `@media (prefers-color-scheme: dark)` を**書かないでください。** カラーやサーフェス・影・ゴースト・フィードバック等の値はすべて `tokens/` 配下の JSON で定義されており、Style Dictionary によって `src/tokens/generated/` にライト/ダーク切り替え可能な変数として出力されます。
- コンポーネントSCSSでは**トークン（生成された変数）を参照するだけ**でダークモード対応は完了します。
- 新しいダークモード固有の値が必要な場合は、`tokens/color/semantic.json` や `tokens/themes/dark.json` を編集し、`npm run tokens:build` を実行してください。
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

Storybookのmdxは以下のセクション構成で記載してください。**必須セクションは15**（見出しなし概要 1 + 見出しあり 14）で、うち4つは `<Docgen />` による自動挿入です。

**必須セクション（この順序で記載）:**

| # | セクション | 備考 |
|---|---|---|
| 1 | コンポーネントの概要 | 見出しなし。ページ冒頭の説明文 |
| 2 | Design Intent（デザイン意図） | `## <T k="doc.design_intent_title" />` |
| 3 | Choice Matrix（使い分け基準） | `## <T k="doc.choice_matrix_title" />` |
| 4 | Anatomy（構成要素） | `<Docgen section="anatomy" />` により見出し込みで自動挿入 |
| 5 | Content Guidelines（コンテンツ指針） | `## <T k="doc.content_guidelines_title" />` |
| 6 | Motion Spec（モーション仕様） | `## <T k="doc.motion_spec_title" />` |
| 7 | A11y Spec（アクセシビリティ仕様） | `## <T k="doc.a11y_spec_title" />` |
| 8 | Real World Scenarios（ユースケース） | `## <T k="doc.real_world_scenarios_title" />` |
| 9 | Best Practices（ベストプラクティス） | `## <T k="doc.best_practices_title" />` |
| 10 | Props（プロパティ一覧） | `<Docgen section="props" />` により見出し込みで自動挿入 |
| 11 | デザイントークンの活用 | `<Docgen section="tokens" />` により見出し込みで自動挿入 |
| 12 | レスポンシブデザインへの対応 | `## <T k="doc.responsive_title" />` |
| 13 | キーボードナビゲーション | `## <T k="doc.keyboard_nav_title" />` |
| 14 | 多言語化の対応 | `## <T k="doc.i18n_title" />` |
| 15 | テストの実行方法 | `<Docgen section="test" />` により見出し込みで自動生成 |

**任意セクション（コンポーネントの特性に応じて挿入）:**

Best Practices と Props の間、または Props の後に必要なセクションを追加できます。

| セクション | 用途 | 例 |
|---|---|---|
| Usage（使い方） | 基本的な使い方を示す | `## <T k="doc.usage" />` |
| Example（実装例） | サンプルコード・Canvas を掲載 | `## <T k="doc.example" />` |
| Variations（バリエーション） | 見た目・動作のバリエーション一覧 | `## <T k="doc.variations" />` |
| コンポーネント固有のセクション | 特殊な注意事項など | 例: Dialog の「Why not modal?」|

---

### ストーリー掲載時の注意点（重複排除）

- `## <T k="doc.variations" />` などのセクションで、各ストーリーを `<Canvas of={...} />` を使って**個別に紹介している場合、ページ末尾に `<Stories />` タグを置かないでください。**
- `<Stories />` はページ内で紹介されなかった残りのストーリーを自動的に一括表示するコンポーネントであるため、個別紹介と併用すると同じ内容が2回表示され、ドキュメントの可読性を損ないます。
- 基本的には、重要なバリエーションを個別に解説付きで掲載し、最後に `<Stories />` は置かない構成を推奨します。

---

# 大量コンポーネント追加時の特別ルール

短期間に多くのコンポーネントを追加（または一気にリファクタリング）する場合は、以下の **「プレフライト・チェックリスト」** を必ずパスするようにしてください。

## 1. プレフライト・チェックリスト

新規コンポーネントをコミットする前に、以下のコマンドですべてチェックしてください。

| チェック項目 | コマンド | 目的 |
|---|---|---|
| **MDX 全数監査** | `npm run audit-mdx` | 必須 15 セクションが揃っているか確認。 |
| **ポリモーフィック監査** | `node scripts/check-aschild.js` | `asChild` が正しく実装されているか確認。 |
| **i18n 整合性** | `npm run i18n:check` | 3言語すべてにキーが存在するか確認。 |
| **型・スタイル** | `npm run lint` / `npm run stylelint` | 基本的な構文エラーがないか確認。 |
| **トークン漏れチェック** | (目視または `Docgen`) | ハードコードされた色やサイズがないか。 |

### 1. Storybook 階層ルール (Sidebar Hierarchy)

コンポーネント数が増大しても目的のパーツを見つけやすくするため、以下の階層構造に従ってください。

- **形式**: `Components/[Category]/[ComponentName]`
- **トップレベルカテゴリ (Approved Categories)**:
  - `Advanced Inputs`: 複雑な入力 (Cascader, TreeSelect, Dropzone等)
  - `Alerts & Notifications`: 通知・警告 (Alert, Notification, Snackbar等)
  - `Application Shell`: アプリ外枠 (AppShell, Header, Sidebar等)
  - `Basic Inputs`: 基本入力 (Input, NumberInput, Textarea等)
  - `Buttons`: ボタン類 (Button, IconButton, CopyButton等)
  - `Data Containers`: 器となる要素 (Card, Accordion等)
  - `Data Indicators`: 状態・データの視覚化 (Badge, Avatar, Tag等)
  - `Data Structures`: 構造化データ (Table, DataGrid, TreeView, List等)
  - `Form Layout`: フォームの構造 (Label, Fieldset, InputGroup等)
  - `Layout`: 基本レイアウト要素 (Flex, Grid, Stack, Container等)
  - `Loading States`: 読み込み中表示 (Loader, Progress, Skeleton等)
  - `Media`: 画像・動画・カルーセル (Image, Video, Carousel等)
  - `Navigation Elements`: 主要ナビゲーション (Tabs, Pagination, Breadcrumb等)
  - `Navigation Utilities`: 補助的なナビ (Affix, BackTop, FloatButton等)
  - `Overlays`: 重ね合わせ要素 (Dialog, Tooltip, Popover, Menu等)
  - `Pickers & Sliders`: 選択・スライダー (DatePicker, ColorPicker, Slider等)
  - `Selection Controls`: 選択コントロール (Checkbox, Radio, Switch, SegmentedControl等)
  - `Typography & Icons`: 文字・アイコン (Text, Link, Icon等)
  - `Utilities`: その他便利要素 (Divider, InfiniteScroll, Marquee等)
  - `Visualization`: グラフ・チャート (Charts, GanttChart等)

- **注意点**:
  - `stories/*.stories.tsx` の `title` プロパティでこれを定義します。
  - ディスク上のディレクトリ名（`src/components/form/` 等）よりも、この Storybook 上のカテゴリ名を優先して整理してください。
  - 新しいカテゴリを追加する場合は、必ず `RULES.md` を更新し、`src/data/components.json` との整合性を取ってください。



## 3. i18n ファイルの分割（Governance）

`public/locales/` 配下の単一 JSON ファイルが 1000 行（または 50KB）を超えそうな場合：
1. `common.json` に何でも入れないでください。
2. カテゴリ別のファイル（`form.json`, `overlay.json` 等）を新設してください。
3. `stories/i18nConstants.ts` に自動登録されるので、MDX では `<T k="form.submit" />` のようにネームスペース付きで参照してください。

## 4. 自動化スクリプトの活用

手動でファイルを作成ぜず、必ず `npm run scaffold -- <Name> <Category>` を使用してください。
これにより以下のボイラープレートが自動適用されます：
- `forwardRef` + `asChild` (Radix Slot)
- `@layer component` による SCSS ラップ
- 15 セクション構成の MDX テンプレート
- `vi.mock("react-i18next")` 済みのテストファイル
