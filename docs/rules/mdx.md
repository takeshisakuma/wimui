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
