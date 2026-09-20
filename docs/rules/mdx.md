# MDX の規則

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# mdxの記述形式

- 表はMarkdownテーブル記法ではなく `<table>` タグで記述してください。
- リストは `- 項目` ではなく `<ul><li>` タグで記述してください。

# mdxに記載すること

Storybookのmdxは以下のセクション構成で記載してください。必須セクションは15（見出しなし概要 1 + 見出しあり 14）で、うち4つは `<Docgen />` による自動挿入です。

必須セクション（この順序で記載）:

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

任意セクション（コンポーネントの特性に応じて挿入）:

Best Practices と Props の間、または Props の後に必要なセクションを追加できます。

| セクション | 用途 | 例 |
|---|---|---|
| Usage（使い方） | 基本的な使い方を示す | `## <T k="doc.usage" />` |
| Example（実装例） | サンプルコード・Canvas を掲載 | `## <T k="doc.example" />` |
| Variations（バリエーション） | 見た目・動作のバリエーション一覧 | `## <T k="doc.variations" />` |
| コンポーネント固有のセクション | 特殊な注意事項など | 例: Dialog の「Why not modal?」|

---

## ストーリー掲載時の注意点（重複排除）

- `## <T k="doc.variations" />` などのセクションで、各ストーリーを `<Canvas of={...} />` を使って個別に紹介している場合、ページ末尾に `<Stories />` タグを置かないでください。
- `<Stories />` は**そのコンポーネントの全ストーリーを表示**します（`includePrimary` の既定は `true`。`addon-docs` の実装で確認）。「紹介されなかった残り」だけを出すわけではないので、個別紹介と併用すると同じ内容が 2 回表示され、ドキュメントの可読性を損ないます。
- 基本的には、重要なバリエーションを個別に解説付きで掲載し、最後に `<Stories />` は置かない構成を推奨します。

**docs ページに出ないストーリーがあるのは正常です**（T224・2026-08-28 に方針決定）。ストーリーはサイドバーに独立エントリとして必ず出るので、**docs ページは「重要なバリエーションを選んで見せる場所」**であって、全ストーリーの一覧ではありません。

- **欠陥なのは「そのページに例が 1 つも無い」場合だけ**です。`<Primary />` か `<Canvas of={...} />` を最低 1 つ置いてください（2026-08-28 に `Blockquote` / `CreditCardInput` / `CalendarHeatmap` / `CounterTextarea` の 4 件がこの状態でした）。
- 掲載していないストーリーの数は `npm run check:story-docs` が数えて凍結しています。**意図せず増えたときだけ落ちる**ので、意図して載せないものは `scripts/story-docs-baseline.json` へ足してください。

---

---

## Storybook MDX docs の構成

```
- コンポーネントの概要
- Props (自動抽出)
- Design Intent（デザイン意図）
- Choice Matrix（使い分け基準）
- Anatomy（構成要素、自動抽出可能）
- Content Guidelines（コンテンツ指針）
- Motion Spec（モーション仕様）
- A11y Spec（アクセシビリティ仕様）
- Real World Scenarios（ユースケース）
- Best Practices（ベストプラクティス）
- デザイントークンを使用している箇所 (自動抽出)
- レスポンシブデザインへの対応
- キーボードナビゲーション
- テストの実行方法 (自動生成)
- 多言語化の対応

> [!IMPORTANT]
> ストーリーの重複に注意してください。
> 各バリエーションを `<Canvas of={...} />` で個別に紹介している場合、ページ末尾に `<Stories />` タグを記述しないでください。記述すると、すでに紹介済みのストーリーがページ下部で再度一括表示されてしまいます。


表は `<table>` タグ、リストは `<ul><li>` タグで記述します（Markdown 記法は使用禁止）。

### MDX ページでライブラリのコンポーネントを素で描画するときは `sb-unstyled`

MDX の本文に `<Table>` や `<Card>` などを直接置くと、**Storybook の docs スタイルシートと `.storybook/docs-common.scss` の上書きがコンポーネントに当たります**。どちらもレイヤ外の（`docs-common.scss` は `!important` 付きの）ルールなので、ライブラリの `@layer component` より強く、次のような症状が出ます。

- `span` が wim のフォントを失って 16px に固定される（親の見出しサイズを継承しない）
- 見出しに罫線と重いウェイトが付く
- テーブルに `border` / `border-radius: 4px` / `border-collapse: separate` が強制され、**コンポーネント自身の枠と二重になる**
- テーブルセルが 14px に縮む

対処は Storybook 公式の opt-out である **`sb-unstyled` をラッパーに付ける**こと（`docs/Playground.mdx` が実例）。Storybook のルールは全て `:where(tag:not(.sb-anchor, .sb-unstyled, .sb-unstyled tag))` の形で書かれており、このリポジトリの `docs-common.scss` / `docs-dark-mode.scss` も同じ規約に揃えてあります。**Canvas（ストーリープレビュー）は Storybook が自動で `sb-unstyled` で包むので元から対象外**です。素の MDX 本文に置くときだけ必要になります。

> `all: revert-layer` で消そうとしないこと。レイヤ外の宣言からの `revert-layer` は `@layer component` には着地せず**その下まで転がり落ちる**ため、Storybook の CSS と一緒にコンポーネント自身のスタイル（padding・セル罫線・文字色）まで消えます。

---

## MDX ドキュメントの自動化 (Docgen)

コンポーネントの Props、デザイントークン、Anatomy（構成要素）は自動抽出されます。MDX 内で `<Docgen />` コンポーネントを使用してください。

### 基本的な使い方

```tsx
import { Docgen } from "../../Docgen";

// すべての情報（Tokens, Anatomy, Props）をまとめて表示
<Docgen componentName="Button" />

// 特定のセクションのみ表示（見出し込みで出力されます）
<Docgen componentName="Button" section="tokens" />
<Docgen componentName="Button" section="anatomy" />
<Docgen componentName="Button" section="props" />
<Docgen componentName="Button" section="test" />
<Docgen componentName="Button" section="i18n" />
<Docgen componentName="Button" section="import" />
```

- `section="import"` は正しいパッケージパス（peer 依存時は `wimui/charts` 等）と `npm install` コメントを自動表示します。マップは `src/data/peer-imports.json`（charts カテゴリは一律 `recharts`）。

### 自動抽出の仕組み
- Props: `react-docgen` を使用して TypeScript の型定義から抽出します。
- Tokens: `.scss` ファイル内から `--wim-` で始まるデザイントークンを抽出します。
- Anatomy: `.scss`（または `.module.scss`）ファイル内のクラス名から構成要素を抽出します。CSS Modules では、`.root` や共通修飾子を除いたクラス名が自動抽出されます。
- Import: コンポーネント名とカテゴリから canonical import パスを解決します（optional peer は subpath + requires コメント）。
- Test: コンポーネントに対応するテストファイルの実行コマンド（`npm run test -- path/to/Test.tsx`）を自動生成します。
- 更新タイミング: Vite プラグインによって、ビルド開始時およびコンポーネント/SCSS の保存時に `src/data/docgen_*.json` が自動更新されます。大規模なプロジェクトでもパフォーマンスを維持するため、データはコンポーネントのカテゴリ（form, layout等）ごとに分割して生成されます。

### docgen キャッシュ（`src/data/.docgen-cache.json`）

エントリのキーは**コンポーネントファイルの content hash** なので、コンポーネントを編集すればそのエントリだけが無効化されます。一方、**`scripts/docgen-plugin.js`（パース／描画ロジック）を変えてもどのコンポーネントの hash も変わりません**。

そのためキャッシュ全体のキーは、**`docgen-plugin.js` 自身の content hash + `react-docgen` のバージョン**から自動導出しています（手で上げる `CACHE_VERSION` 定数は廃止）。ロジックを変えれば次回実行時に自動で全無効化されるので、上げ忘れは起きません。

> 以前は手動定数で、実際に上げ忘れが起きていました（2026-07-26 発見）。**CI はクリーンチェックアウトでキャッシュを持たないため常に正しく、ローカルの暖かいキャッシュだけが古い出力を返す**という気づきにくい壊れ方をします。`<Docgen>` が読むデータそのものなので、Props の表示が古いまま気づけない状態でした。
>
> `docgen-plugin.js` にローカルモジュールの import を足す場合は、この前提（ロジックは全部このファイルに現れる）が崩れるので見直してください。
