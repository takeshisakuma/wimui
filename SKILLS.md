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

---

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
7.  品質監査の実行: 
    - `npm run audit-mdx`: MDX セクションの欠落チェック
    - `node scripts/check-aschild.js`: `asChild` 実装漏れのチェック
    - `npm run i18n:check`: 翻訳ファイルの整合性チェック

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

---

## z-index トークンの使い分け基準

スタッキングコンテキストをまたいで競合しうる要素には、必ず以下の `--wim-z-*` トークンを使用してください。

| トークン | 値 | 主な用途 |
|---|---|---|
| `--wim-z-sidebar` | 900 | 非オーバーレイ時のサイドバー。メインコンテンツより上に表示。 |
| `--wim-z-header` | 1000 | 固定ヘッダー。 |
| `--wim-z-overlay` | 1000 | Dialog, Dropdown, Popover, Tooltip 等の一般的なオーバーレイ。 |
| `--wim-z-overlay-panel` | 1001 | オーバーレイの上にさらに重なるパネル類。 |
| `--wim-z-overlay-step` | 1002 | Tour（ガイド）のステップバブル。 |
| `--wim-z-navbar` | 1020 | モバイル用ボトムナビゲーション等。 |
| `--wim-z-mask` | 1500 | ローディングマスク、背景のクリック遮断用。 |
| `--wim-z-drawer` | 2000 | Drawer（サイドからスライドするパネル）。Dialog より優先される場合に使用。 |
| `--wim-z-toast` | 9999 | Toast, Notification など、常に最前面に表示すべき通知。 |

注意： コンポーネント内部（Slider のサムブ、Table の固定列など）での相対的な順序指定には、生値（`z-index: 10` 等）を使用して構いません。

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

// フィードバックコンポーネントのバリアント色（OKLCHによる知覚的な明度調整）
.wim-component--info {
  color: oklch(from var(--wim-color-informative) calc(l * 0.7) c h);
  background: oklch(from var(--wim-color-informative) l c h / 0.1);
  border-color: oklch(from var(--wim-color-informative) l c h / 0.2);
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

control の型指定はオブジェクト形式でなく文字列の短縮形を使用してください。

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
intent: {
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

> [!IMPORTANT]
> ストーリーの重複に注意してください。
> 各バリエーションを `<Canvas of={...} />` で個別に紹介している場合、ページ末尾に `<Stories />` タグを記述しないでください。記述すると、すでに紹介済みのストーリーがページ下部で再度一括表示されてしまいます。


表は `<table>` タグ、リストは `<ul><li>` タグで記述します（Markdown 記法は使用禁止）。

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

- imagemin の限定実行: 重い画像圧縮処理（`vite-plugin-imagemin`）は `mode === "production"` の時のみ実行されます。開発時はスキップされ、起動時間が短縮されます。
- optimizeDeps の活用: 頻繁に使用する巨大なライブラリ（`react`, `recharts` 等）を `optimizeDeps.include` に明示することで、初動の依存解決を高速化しています。

### CJS 出力の後処理（fix-cjs-empty-css）
rolldown ベースの Vite 8 には、エントリモジュール直下の CSS import を CJS/UMD 出力で `/* empty css */` コメントへ置換する際にカンマ演算子が残り、`dist/index.cjs` が構文エラーになるバグがあります（`src/index.ts` がグローバル SCSS を import しているため発生）。`npm run build` の最後に `scripts/fix-cjs-empty-css.js` が実行され、該当パターンを自動修正します。Vite 側でバグが修正されれば何もしなくなる（no-op）ため、そのまま残して問題ありません。

### 重量級依存の扱い（optional peerDependencies）
特定のコンポーネントでしか使わない重量級ライブラリは、利用者のインストールサイズを抑えるため `dependencies` に入れず、optional な `peerDependencies` として宣言しています（`peerDependenciesMeta` で `"optional": true`）。

- 対象: `recharts`（charts）、`react-markdown` / `remark-gfm`（Markdown）、`diff`（CodeDiffViewer）、`qrcode.react`（QRCode）、`@xyflow/react`（NodeGraph / InteractiveGraph）、`@fullcalendar/*`（ScheduleView）、`react-hook-form` / `@hookform/resolvers` / `zod`（`wimui/rhf`）
- 該当コンポーネントを使う利用者は、対応するライブラリを自分でインストールする必要があります。
- 新しい重量級ライブラリを追加する場合は、(1) `peerDependencies` + `peerDependenciesMeta`（optional）に追加、(2) リポジトリ内の開発用に `devDependencies` にも追加、(3) `vite.config.ts` の `rollupOptions.external` と UMD の `globals` に追加、の3点をセットで行ってください。
- 例外: `music-metadata`（Audio のタグ読み取り）は動的 `import()` で遅延読み込みしているため、利用側ビルドでの未解決エラーを避けるべく通常の `dependencies` に置いています。

### UI 密度（`data-density`）
コントロール高さ・余白を `comfortable` / `compact` で切り替える。実装は `src/styles/_ui-patterns.scss` と `src/density.ts`。
- `setWimDensity("compact")` または `<html data-density="compact">`
- 追従: `--wim-height-*` / `--wim-control-padding-*` / `--wim-field-padding-*` / `--wim-control-item-padding-*` / `--wim-list-item-padding-*` / `--wim-table-cell-padding-*` / switch・checkbox など
- 非追従: `--wim-spacing-*`（レイアウト）、`--wim-avatar-size-*`
- 新規コントロール余白は生の `--wim-spacing-*` ではなく上記密度エイリアスを使う
- Storybook ツールバーの Density、Token → Density

### Form 連携（`wimui/rhf`）
コア form コンポーネントを書き換えず、薄いアダプタを `src/rhf.ts`（公開エントリ `wimui/rhf`）に置きます。
- `FormField` — RHF `Controller` + WIM 向け `error` / `invalid`
- `valueFieldProps` / `checkedFieldProps` — 値コールバック型・checked 型へのマッピング
- `zodResolver` — `@hookform/resolvers/zod` の再エクスポート
- ルート `wimui` / `wimui/form` からは export しない（peer 未導入でもコアが壊れないようにする）
- 例: `stories/Patterns/Form/ReactHookForm.stories.tsx`（基本＋ DatePicker / Rating / Switch レシピ）

---

## アイコン・パイプライン (SVGR Integration)

`src/icon/` に SVG を追加するだけで React コンポーネントとして利用可能になる自動化パイプラインが導入されています。

### 使用方法

1.  SVG を追加: `src/icon/` ディレクトリに新しい `.svg` ファイルを置きます（例: `my-icon.svg`）。
2.  自動生成: 保存時またはビルド時に `src/icon/index.ts` が自動更新され、`MyIconIcon` としてエクスポートされます。
3.  コンポーネントで使う:
    -   動的指定 (Name-based Lookup):
        ```tsx
        <Icon name="MyIconIcon" />
        ```
    -   静的インポート (Tree-shaking 向け):
        ```tsx
        import { MyIconIcon } from "@/icon";
        <Icon component={MyIconIcon} />
        ```

### メリット
-   手動更新の排除: `Icon.tsx` の巨大な `switch` 文やマッピングオブジェクトを手動で管理する必要がなくなります。
-   Tree-shaking: 個別のエクスポート形式を提供しているため、使用していないアイコンは最終ビルドから削除されます。
-   TypeScript サポート: `IconName` 型が自動的に更新され、無効なアイコン名を指定するとコンパイルエラーになります。

---

## pre-commit フックで自動チェックされる内容

`git commit` 時に lint-staged が以下を自動実行します。

- `src//*.{ts,tsx}`: ESLint (--max-warnings=0) + TypeScript 型チェック
- `src//*.{css,scss}`: Stylelint (--max-warnings=0)
- `public/locales//*.json`: i18n キー整合性チェック

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
| カテゴリバレルへのエクスポート漏れ | 通常は `src/<category>.ts` に追加（scaffold が実施）。ルート `src/index.ts` はカテゴリ / `*-core` を re-export するだけ。peer 依存コンポーネントは `*-core.ts`・ルートではなくフルバレル（`src/charts.ts` 等）へ追加し、利用側は `wimui/charts` / `wimui/data-display` / `wimui/ai` から import |
