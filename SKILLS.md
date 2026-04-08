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
  tokens/              # デザイントークンソース（JSON）
    color/
      base.json
      semantic.json
    spacing.json
    effects.json
  src/
    tokens/
      generated/       # 自動生成された SCSS/CSS 変数
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

1. `src/components/ComponentName/` を作成し `ComponentName.tsx` と `component-name.module.scss` を配置
2. `ComponentName.tsx` 内で `import styles from "./component-name.module.scss"` を記述
3. `src/index.ts` にエクスポートを追加
4. `ComponentName.test.tsx` を作成し `npm run test` で通過を確認
5. `stories/ComponentName/ComponentName.stories.tsx` を作成
6. `stories/ComponentName/ComponentName.mdx` を作成（後述の構成に従う）
7. 翻訳キーを追加（後述の i18n 手順に従う）
8. `npm run lint` / `npm run stylelint` で問題がないことを確認

---

`src/tokens/generated/_tokens.scss` または `_css-vars.scss` の変数を使用します。

```scss
// 色はセマンティックカラートークンを使う（ダークモード自動対応）
color: var(--wim-color-text-primary);
background: var(--wim-color-surface);
border-color: var(--wim-color-border);

// 間隔・サイズはスペーシングトークンを使う
padding: var(--wim-spacing-md);
```

### 重要なルール
- ハードコードされた CSS 色名（`gray`, `#333` など）は使用禁止です。
- 色以外の CSS 値（`padding`, `border-radius`, `font-size`, `font-weight`, `box-shadow`, `opacity`, `transition`, `z-index`, `motion` 等）もすべてトークンを使用してください。
- `stories/` 配下の TSX では `--wim-color-*` プレフィックス付きトークンを推奨します。

---

## 既存トークンが不足している場合のフロー

1. `tokens/` 配下の適切な JSON ファイルにトークンを追記します。
   - 生色（Palette） → `color/base.json`
   - セマンティックカラー → `color/semantic.json`
   - Spacing / Radius → `spacing.json`
   - Shadow / Opacity / Z-Index / Motion → `effects.json`
2. `npm run tokens:build` を実行します。
3. `src/tokens/generated/` および `src/types/generated-tokens.ts` が自動更新されたことを確認します。
4. コンポーネントで `var(--wim-[カテゴリ]-[意味])` を使用します。

### 新しいカテゴリ自体が必要な場合

既存カテゴリに収まらない場合は `RULES.md` のデザイントークンカテゴリ表に追記し、適切な `_*.scss` ファイルを作成または既存ファイルに追加してください。

---

## ダークモード対応

セマンティックカラートークンを使っていれば自動対応されるため、コンポーネントSCSSに `[data-theme="dark"]` や `@media (prefers-color-scheme: dark)` を書く必要はありません。

```scss
// トークンを使うだけでライト/ダーク両対応（個別のダークモード記述は不要）
.wim-component {
  color: var(--wim-color-text-primary);
  background: var(--wim-color-surface-glass);     // 半透明ガラス効果
  border-color: var(--wim-color-glass-border);     // ガラスボーダー
}

// ゴーストスタイルのコントロール
.wim-component--ghost {
  background: var(--wim-color-ghost-bg);
  border-color: var(--wim-color-ghost-border);
}

// フィードバックコンポーネントのバリアント色
.wim-component--info {
  color: color-mix(in srgb, var(--wim-color-informative) 65%, var(--wim-color-feedback-text-base));
  background: color-mix(in srgb, var(--wim-color-informative) 10%, var(--wim-color-feedback-bg-base));
  border-color: color-mix(in srgb, var(--wim-color-informative) var(--wim-color-feedback-border-strength), transparent);
}
```

新しい暗色/明色切替が必要な場合は、`src/tokens/_semantic-colors.scss` の `:root` と `@mixin dark-theme` の両方にトークンを追加してください。

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

`public/locales/en/` に JSON ファイルを作成すると、Vite のプラグインによって `stories/i18nConstants.ts` に自動的に登録されます。
Storybook や開発サーバーが起動していれば、ファイル作成後すぐに反映されます。

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

### argTypes の書き方

control の型指定は**オブジェクト形式でなく文字列の短縮形**を使用してください。

```tsx
// NG
control: { type: "select" }
control: { type: "boolean" }

// OK
control: "select"
control: "boolean"
```

選択肢の数が少ない（2〜4個程度）場合は `"radio"` を使用してください。`size` prop はコンポーネントを問わず常に `"radio"` にしてください。

```tsx
size: {
  control: "radio",
  options: ["sm", "md", "lg"],
},
status: {
  control: "select",
  options: ["primary", "secondary", "success", "warning", "error", "info", "neutral"],
},
```

`options` の内容はコンポーネントの prop 型と一致させてください。型を変更した場合はストーリーの `options` も合わせて更新してください。

```tsx
// MDX
<Canvas of={MyComponentStories.Default} />   // ← エクスポート名と一致させる
<Controls of={MyComponentStories.Default} />
```

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
```

表は `<table>` タグ、リストは `<ul><li>` タグで記述します（Markdown 記法は使用禁止）。

---

## MDX ドキュメントの自動化 (Docgen)

コンポーネントの Props、デザイントークン、Anatomy（構成要素）は自動抽出されます。MDX 内で `<Docgen />` コンポーネントを使用してください。

### 基本的な使い方

```tsx
import { Docgen } from "../../Docgen";

// すべての情報（Tokens, Anatomy, Props）をまとめて表示
<Docgen componentName="Button" />

// 特定のセクションのみ表示
<Docgen componentName="Button" section="tokens" />
<Docgen componentName="Button" section="anatomy" />
<Docgen componentName="Button" section="props" />
```

### 自動抽出の仕組み
- **Props**: `react-docgen` を使用して TypeScript の型定義から抽出します。
- **Tokens**: `.scss` ファイル内から `--wim-` で始まるデザイントークンを抽出します。
- **Anatomy**: `.scss`（または `.module.scss`）ファイル内のクラス名から構成要素を抽出します。CSS Modules では、`.root` や共通修飾子を除いたクラス名が自動抽出されます。
- **更新タイミング**: Vite プラグインによって、ビルド開始時およびコンポーネント/SCSS の保存時に `src/data/docgen.json` が自動更新されます。

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

## ビルドの安定化と最適化

### 開発サーバーの起動高速化
Vite の設定（`vite.config.ts`, `.storybook/main.ts`）で以下の最適化を行っています。

- **imagemin の限定実行**: 重い画像圧縮処理（`vite-plugin-imagemin`）は `mode === "production"` の時のみ実行されます。開発時はスキップされ、起動時間が短縮されます。
- **optimizeDeps の活用**: 頻繁に使用する巨大なライブラリ（`react`, `recharts` 等）を `optimizeDeps.include` に明示することで、初動の依存解決を高速化しています。

### 依存関係のトラブルシューティング（jsmediatags 等）
Node.js 向けの古いパッケージ（`jsmediatags` 等）は、ブラウザビルドで `fs` や `path` のエラーを引き起こすことがあります。

1. **Vite での define**: `optimizeDeps.esbuildOptions.define` で `global: "globalThis"` を定義し、Node.js 固有のグローバル変数参照を解決します。
2. **Storybook での Alias**: `jsmediatags` は Storybook の `viteFinal` で `dist/jsmediatags.min.js` を直接参照するようにエイリアスを貼っています。これにより、内部で外部モジュールを require しようとする挙動を防ぎます。
3. **External 指定**: ライブラリビルド（`vite.config.ts` の `rollupOptions.external`）では、利用側で解決してもらうためにこれらを external に含めています。

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
| SCSS をインポートしていない | `ComponentName.tsx` で `import styles from "./component-name.module.scss"` を記述 |
| MDX でストーリー名が一致しない | ストーリーのエクスポート名（PascalCase）と `<Canvas of={...}>` の参照名を一致させる |
| 翻訳キーが一部のロケールだけに存在する | `npm run i18n:sync` → `npm run i18n:check` で確認 |
| `ALL_NAMESPACES` に追加されていない | ファイル名が `.json` か、`public/locales/en/` に配置されているか確認 |
| `--wim-color-*` 以外の色変数を stories/ で使う | `--wim-color-*` プレフィックス付きトークンに統一 |
| `src/index.ts` へのエクスポート漏れ | 新規コンポーネントは必ず追加 |
