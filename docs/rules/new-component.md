# 部品の新規作成の手順と置き場

> この文書は `SKILLS.md`（2026-09-21 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**手順です。

## コンポーネント新規作成の手順

1.  スキャフォールディングの実行: `npm run scaffold -- <ComponentName> <category>` を実行します。
    -   例: `npm run scaffold -- MyButton form`
    -   これにより `src/components/form/MyButton/` 配下の TSX/SCSS/Test と `stories/MyButton/` 配下の Stories/MDX が自動生成され、`src/form.ts`（カテゴリバレル）にエクスポートが追加されます。ルート `src/index.ts` はカテゴリバレル / `*-core` を re-export するため、通常は `src/index.ts` を直接編集しません。
    -   **peer 依存あり**（eager に optional peer を import するコンポーネント）の場合は、`*-core.ts` やルートではなくフルカテゴリバレル（`src/charts.ts` / `src/data-display.ts` / `src/ai.ts`）へ追加し、利用側は `wimui/charts` 等の subpath から import します。
2.  ロジックの実装: 生成された `ComponentName.tsx` と `*.module.scss` に機能を実装します。
3.  テストの修正・実行: `npm run test` で生成されたテストが通過することを確認します。
4.  MDX の執筆: `ComponentName.mdx` の各セクション（Design Intent 等）を埋めます。
5.  コンポーネントリストの更新: `src/data/components.json` に新規コンポーネントを追記します。
6.  翻訳キーの追加: `public/locales/en/` に翻訳キーを追加し、`npm run i18n:sync` を実行します。
7.  品質ゲート（PR 前・scaffold 完了後の案内と同じ）:
    - `npm run check:api` — 公開 API スナップショット
    - `npm run check:aschild` — `asChild` 必須リスト
    - `npm run audit:hardcoded` — 色ハードコード / 未注記 px（`PX_BASELINE = 0`）
    - `npm run i18n:check` — 3言語キー整合
    - `npm run check:imports` — peer コンポーネントの import 境界
    - `npm run audit-mdx` — MDX 必須セクション
    - `npm run lint` / `npm run stylelint`
    - チェックリスト本体: `.github/pull_request_template.md` と `AGENTS.md`「品質ゲート・チェックリスト」
8.  **合成（必須）**: カタログの単体ストーリーだけでは出荷しない。T179 のプローブで他の部品と組み、置き方・a11y・狭幅を触る。確認が終わったらプローブ画面は捨て、直した部品と Realistic な単体ストーリーを残す。カバー率のために `stories/Patterns/` へ書かない。詳細は `docs/rules/implementation.md` と `DESIGN.md` のコンポジションガイドライン。


## ディレクトリ構成

```
  tokens/              # デザイントークンソース（JSON）
    color/
      base.json
      semantic.json
    spacing.json
    effects.json
  src/
    tokens/
      generated/       # 自動生成された SCSS/CSS 変数
    icon/              # SVGアイコンソース (*.svg)
      index.ts         # 自動生成されたエクスポート定義
    logo/              # ロゴ等のSVGアセット
    index.ts           # 公開エクスポート一覧

stories/
  ComponentName/
    ComponentName.mdx        # Storybook docs ページ
    ComponentName.stories.tsx # ストーリー定義
  T.tsx                # 翻訳コンポーネント（MDX用）
  i18nConstants.ts     # ALL_NAMESPACES

public/
  locales/
    en/  # 翻訳JSONファイル
    ja/
    pt/
```

## よくあるミスと対策

| ミス | 対策 |
|---|---|
| SCSS をインポートしていない | `ComponentName.tsx` で `import styles from "./component-name.module.scss"` を記述 |
| カテゴリバレルへのエクスポート漏れ | 通常は `src/<category>.ts` に追加（scaffold が実施）。ルート `src/index.ts` はカテゴリ / `*-core` を re-export するだけ。peer 依存コンポーネントは `*-core.ts`・ルートではなくフルバレル（`src/charts.ts` 等）へ追加し、利用側は `wimui/charts` / `wimui/data-display` / `wimui/ai` から import |

## 置き場と命名

> この節は `AGENTS.md` から 2026-09-21 に移したものです（本文は書き換えていません）。`AGENTS.md` は毎セッション丸ごと読み込まれるので、作業のときだけ要る規則はこちらに置きます。

### ディレクトリ配置

- **`src/components/<category>/<Name>/`** — コンポーネント本体（`.tsx` + `.module.scss` + `.test.tsx`）
- **`src/components/_internal/`** — 複数コンポーネントが共用する内部パーツ
- **`stories/<Name>/`** — Storybook ドキュメント（`.mdx`）+ ストーリー（`.stories.tsx`）
- **`src/tokens/generated/`** — `tokens/*.json` から自動生成された SCSS/CSS 変数（手動編集禁止）
- **`src/icon/`** — SVG アイコン（保存時に `index.ts` へ自動エクスポート）
- **`public/locales/<en|ja|pt>/`** — i18next 翻訳 JSON

### ファイル・エクスポート

- コンポーネントは `src/components/<カテゴリ>/<コンポーネント名>/` ディレクトリに配置してください（例: `src/components/form/Button/`）。カテゴリは `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai` のいずれかです。
- ディレクトリ名・コンポーネントファイル名はPascalCaseにしてください（例: `Button/Button.tsx`）。
- SCSSファイルはkebab-caseの CSS Modules にしてください（例: `button.module.scss`）。
- SCSSファイルは必ずコンポーネントのTSXファイル内でインポートしてください（例: `import styles from "./button.module.scss"`）。インポートがないとブラウザでスタイルが一切適用されません。テストやlintでは検出できないため注意してください。
- 新規コンポーネントは `src/<カテゴリ>.ts`（例: `src/form.ts`）にexportを追加してください。`src/index.ts` は各カテゴリファイルを re-export しているため、直接編集は不要です。
