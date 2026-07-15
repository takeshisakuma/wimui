# Contributing to wimui

コントリビュートに興味を持っていただきありがとうございます。このドキュメントは開発参加の最短経路をまとめたものです。詳細な規約は各ドキュメントを参照してください。

- **`RULES.md`** — プロジェクトの基本ルール（トークン・i18n・API 契約）
- **`SKILLS.md`** — 構築に必要な実践知識
- **`CLAUDE.md`** — よく使うコマンド・アーキテクチャ概要・コンポーネント新規作成手順
- **`.github/pull_request_template.md`** — PR 時の品質ゲートチェックリスト

## 動作要件

- Node.js **>= 22**（CI と同一）
- npm（`package-lock.json` を使用。`npm ci` が通ること）

## セットアップ

```bash
git clone https://github.com/takeshisakuma/wimui.git
cd wimui
npm ci
npm run storybook   # ドキュメント + 開発環境（port 6006）
```

## 開発の流れ

1. Issue を立てる（またはコメントで着手を宣言）
2. `main` からブランチを切る
3. 変更を実装（コンポーネント新規作成は `CLAUDE.md` の「最短手順」に従う）
4. 品質ゲートをローカルで通す（下記）
5. ライブラリ本体に影響する変更は changeset を追加: `npx changeset`
6. PR を作成（テンプレートのチェックリストを埋める）

## 品質ゲート

PR 前に最低限これを通してください（CI でも同じものが走ります）。

```bash
npx tsc --noEmit          # 型チェック
npm run lint              # ESLint（--max-warnings=0）
npm run stylelint         # Stylelint（--max-warnings=0）
npm run test              # Vitest（coverage 80% 閾値）
npm run check:api         # 公開 API スナップショット
npm run check:imports     # peer のルート import 禁止
npm run i18n:check        # en/ja/pt 翻訳キー整合
npm run audit:hardcoded   # px ハードコード（ベースライン 0）
```

## 変更時の主な約束

- **公開 API はバレルのみ** — deep path（`wimui/form/Button` 等）を `exports` に追加しない。公開シンボル変更時は `npm run check:api:update` でスナップショットを更新し、PR で差分を説明する
- **スタイルはトークンのみ** — 色・間隔・サイズのハードコード禁止。`tokens/*.json` → `npm run tokens:build` で生成された `--wim-*` を参照する
- **i18n は 3 言語** — ランタイム文字列は `public/locales/en/` にキー追加 → `npm run i18n:sync` で ja/pt へ展開
- **対応予定なし項目に着手しない** — モノレポ分割 / RTL・論理プロパティ移行 / React 18・zod 3 サポート（詳細は `IMPROVEMENTS.md`）

## 質問・提案

バグ報告・機能要望は [Issues](https://github.com/takeshisakuma/wimui/issues) へ。テンプレートに沿って記入してください。
