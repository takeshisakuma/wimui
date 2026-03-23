# WIM UI 構築スキルガイド

コーディングルールは `RULES.md` を参照してください。このファイルは「何を・どの順番で・どこに作るか」の実践知識をまとめています。

---

## テックスタック

| 役割 | ツール |
|---|---|
| UIフレームワーク | React 18 + TypeScript |
| スタイル | SCSS (Sass) |
| ビルド | Vite |
| ドキュメント | Storybook 10 (MDX) |
| テスト (単体) | Vitest + Testing Library |
| テスト (VRT) | Playwright |
| a11y チェック | axe-core (Playwright) + eslint-plugin-jsx-a11y |
| 国際化 | i18next + react-i18next (en / ja / pt) |
| ポジショニング | @floating-ui/react |
| チャート | Recharts |
| リント | ESLint + Stylelint |
| フォーマット | Prettier |
| Git フック | Husky + lint-staged |
| デプロイ | GitHub Pages (gh-pages) |

---

## ディレクトリ構成

```
src/
  components/          # 公開コンポーネント（PascalCase ディレクトリ）
    Button/
      Button.tsx
      button.scss
      Button.test.tsx
  components/_internal/ # 内部コンポーネント（外部非公開）
  tokens/              # デザイントークン（SCSS変数・カスタムプロパティ）
    _semantic-colors.scss
  icon/                # SVGアイコンコンポーネント
  svg/                 # SVGアセット
  index.ts             # 公開エクスポート一覧

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

---

## コンポーネント新規作成の手順

1. `src/components/ComponentName/` を作成し `ComponentName.tsx` と `component-name.scss` を配置
2. `ComponentName.tsx` 内で `import "./component-name.scss"` を必ず記述
3. `src/index.ts` にエクスポートを追加
4. `ComponentName.test.tsx` を作成し `npm run test` で通過を確認
5. `stories/ComponentName/ComponentName.stories.tsx` を作成
6. `stories/ComponentName/ComponentName.mdx` を作成（後述の構成に従う）
7. 翻訳キーを追加（後述の i18n 手順に従う）
8. `npm run lint` / `npm run stylelint` で問題がないことを確認

---

## デザイントークンの使い方

`src/tokens/` の SCSS 変数・カスタムプロパティを使用します。

```scss
// 色はセマンティックカラートークンを使う（ダークモード自動対応）
color: var(--wim-color-text-primary);
background: var(--wim-color-surface);
border-color: var(--wim-color-border);

// 間隔・サイズはスペーシングトークンを使う
padding: var(--wim-spacing-md);
```

ハードコードされた CSS 色名（`gray`, `#333` など）は使用禁止です。
`stories/` 配下の TSX では `--wim-color-*` プレフィックス付きトークンのみ使用可（内部ショートエイリアス `--bg-component` 等は不可）。

---

## ダークモード対応

新規コンポーネントの SCSS には以下の両方を記述します。

```scss
[data-theme="dark"] .wim-component {
  // ダークモード用スタイル
}

@media (prefers-color-scheme: dark) {
  .wim-component {
    // システム設定連動用
  }
}
```

セマンティックカラートークンを使っていれば自動対応されるため、個別のダークモード記述は不要になる場合が多いです。

---

## 国際化 (i18n) の手順

### 翻訳キーの命名規則

```
コンポーネント名.用途
例: button.label, dialog.close_button
```

### 翻訳ファイルの場所

```
public/locales/en/namespace.json
public/locales/ja/namespace.json
public/locales/pt/namespace.json
```

### 新しいキーを追加するとき

1. `public/locales/en/` の対象 JSON にキーを追加
2. `npm run i18n:sync` で ja / pt へ自動翻訳（要: `GOOGLE_GENERATIVE_AI_API_KEY`）
3. `npm run i18n:check` でロケール間の整合性を確認

### 新しいネームスペース（JSONファイル）を追加するとき

`stories/i18nConstants.ts` の `ALL_NAMESPACES` 配列にも必ず追加してください。
追加しないと Storybook 上で翻訳キーがそのまま表示されます（テスト・lint では検出不可）。

### MDX での翻訳表示

```tsx
import { T } from "../T";

// MDX 内でテキストを翻訳して表示
<T k="button.label" />
```

`<Markdown>` コンポーネントに `<T />` を渡さないでください（`<Markdown>` は文字列のみ受け付けます）。

---

## Storybook ストーリーの書き方

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyComponent } from "@/components/MyComponent/MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "Components/カテゴリ/MyComponent",
  component: MyComponent,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

// エクスポート名は PascalCase にする（MDX から参照するため）
export const Default: Story = { args: { ... } };
export const WithIcon: Story = { args: { ... } };
```

MDX から参照する際はエクスポート名と完全一致が必要です。

```tsx
// MDX
<Canvas of={MyComponentStories.Default} />   // ← エクスポート名と一致させる
<Controls of={MyComponentStories.Default} />
```

---

## Storybook MDX docs の構成

```
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
```

表は `<table>` タグ、リストは `<ul><li>` タグで記述します（Markdown 記法は使用禁止）。

---

## テストの書き方

```tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

// useTranslation は必ずモックする
vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

---

## pre-commit フックで自動チェックされる内容

`git commit` 時に lint-staged が以下を自動実行します。

- `src/**/*.{ts,tsx}`: ESLint (--max-warnings=0) + TypeScript 型チェック
- `src/**/*.{css,scss}`: Stylelint (--max-warnings=0)
- `public/locales/**/*.json`: i18n キー整合性チェック

警告が1件でもあるとコミットが失敗します。

---

## よくあるミスと対策

| ミス | 対策 |
|---|---|
| SCSS をインポートしていない | `ComponentName.tsx` で `import "./component-name.scss"` を必ず記述 |
| MDX でストーリー名が一致しない | ストーリーのエクスポート名（PascalCase）と `<Canvas of={...}>` の参照名を一致させる |
| 翻訳キーが一部のロケールだけに存在する | `npm run i18n:sync` → `npm run i18n:check` で確認 |
| `ALL_NAMESPACES` に追加していない | 新規 JSON ファイル作成時は `stories/i18nConstants.ts` も更新 |
| `--wim-color-*` 以外の色変数を stories/ で使う | `--wim-color-*` プレフィックス付きトークンに統一 |
| `src/index.ts` へのエクスポート漏れ | 新規コンポーネントは必ず追加 |
