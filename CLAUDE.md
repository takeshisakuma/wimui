# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

プロジェクトの基本ルールは `RULES.md` を参照してください。
構築に必要な実践知識は `SKILLS.md` を参照してください。

---

## よく使うコマンド

```bash
npm run dev               # 開発サーバー起動 (Vite)
npm run storybook         # Storybook 起動
npm run build             # ライブラリビルド
npm run test              # Vitest 単体テスト
npm run test:vrt          # Playwright VRT
npm run lint              # ESLint (--max-warnings=0)
npm run stylelint         # Stylelint (--max-warnings=0)
npm run tokens:build      # デザイントークン再生成
npm run i18n:sync         # 翻訳キーを en→ja/pt へ自動翻訳
npm run i18n:check        # 3言語間の翻訳キー整合性チェック
npm run audit-mdx         # MDX 必須セクション欠落チェック
npm run scaffold -- <Name> <category>  # コンポーネント雛形生成
```

テストを1ファイルのみ実行する場合:
```bash
npm run test -- src/components/form/Button/Button.test.tsx
```

---

## アーキテクチャ概要

### ディレクトリ配置

- **`src/components/<category>/<Name>/`** — コンポーネント本体（`.tsx` + `.module.scss` + `.test.tsx`）
- **`src/components/_internal/`** — 複数コンポーネントが共用する内部パーツ
- **`stories/<Name>/`** — Storybook ドキュメント（`.mdx`）+ ストーリー（`.stories.tsx`）
- **`src/tokens/generated/`** — `tokens/*.json` から自動生成された SCSS/CSS 変数（手動編集禁止）
- **`src/icon/`** — SVG アイコン（保存時に `index.ts` へ自動エクスポート）
- **`public/locales/<en|ja|pt>/`** — i18next 翻訳 JSON

### エクスポート構成

`src/index.ts` は各カテゴリの `src/<category>.ts` を re-export する。新規コンポーネントは `src/<category>.ts` に追加する。

カテゴリ対応ファイル: `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai`

### トークンシステム

`tokens/*.json` → `npm run tokens:build` → `src/tokens/generated/_tokens.scss` の CSS カスタムプロパティ (`--wim-*`) として出力。コンポーネント SCSS はこれらのみ参照する（色・間隔・サイズのハードコード禁止）。

### Docgen 自動化

Vite プラグインが `.tsx` と `.module.scss` を解析し、Props / Tokens / Anatomy / テストコマンドを `src/data/docgen_*.json` に抽出。MDX 内で `<Docgen componentName="Foo" section="props" />` などで参照できる。

### コンポーネント新規作成の最短手順

1. `npm run scaffold -- <Name> <category>` でボイラープレート生成
2. `.tsx` にロジック実装、`.module.scss` にスタイル実装
3. `src/<category>.ts` にエクスポート追加
4. `src/data/components.json` にエントリ追加
5. `public/locales/en/` に翻訳キー追加 → `npm run i18n:sync`
6. MDX の各セクションを記述
7. `npm run audit-mdx` / `npm run i18n:check` / `npm run lint` でチェック
