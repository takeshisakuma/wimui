# WIM UI 構築スキルガイド

コーディングルールは `RULES.md` を参照してください。このファイルは「何を・どの順番で・どこに作るか」の実践知識をまとめています。

---

## テックスタック

| 役割 | ツール |
|---|---|
| UIフレームワーク | React 19 + TypeScript |
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
7.  品質ゲート（PR 前・scaffold 完了後の案内と同じ）:
    - `npm run check:api` — 公開 API スナップショット
    - `npm run check:aschild` — `asChild` 必須リスト
    - `npm run audit:hardcoded` — 色ハードコード / 未注記 px（`PX_BASELINE = 0`）
    - `npm run i18n:check` — 3言語キー整合
    - `npm run check:imports` — peer コンポーネントの import 境界
    - `npm run audit-mdx` — MDX 必須セクション
    - `npm run lint` / `npm run stylelint`
    - チェックリスト本体: `.github/pull_request_template.md` と `RULES.md`「品質ゲート・チェックリスト」
8.  **合成（必須）**: カタログの単体ストーリーだけでは出荷しない。T179 のプローブで他の部品と組み、置き方・a11y・狭幅を触る。確認が終わったらプローブ画面は捨て、直した部品と Realistic な単体ストーリーを残す。カバー率のために `stories/Patterns/` へ書かない。詳細は `RULES.md` と `DESIGN.md` のコンポジションガイドライン。

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

### 公開 CSS / テーマ契約（改名禁止）

| パス / 属性 | 役割 |
|---|---|
| `wimui/styles.css` | **必須** — `:root` `--wim-*`（ダーク・密度含む）+ コンポーネント CSS |
| `wimui/reset.css` | **任意** — 意見の強いリセット/base |
| `WimProvider` | **推奨** — `theme` / `density` / `locale` を React から設定（内部で属性を書く） |
| `data-theme` | CSS 契約。`<html>` に載せる。値 `light` \| `dark`。省略で OS 追従 |
| `data-density` | CSS 契約。`<html>`（または祖先）。`comfortable` \| `compact` |

`setWimTheme` / `setWimDensity` / `setWimLocale` は属性・ロケールの命令型 API。コンポーネント SCSS に `[data-theme="dark"]` を書かない。詳細は `DESIGN.md` / Token → Theme・Density。

### disabled / 近い名前のトークン

| トークン | 用途 |
|---|---|
| `--wim-color-disabled` | 無効時の**塗り**のみ。文字色に使わない |
| `--wim-color-text-on-disabled` | その塗り（disabled フィル）の上の文字・アイコン |
| `--wim-color-text-disabled` | 通常サーフェス上の無効・非活性テキスト |

`surface-subtle` と `surface-subtle-alpha` は別物。サーフェスは `surface*`、反転面は `surface-inverse` / `text-on-inverse`。詳細は `DESIGN.md`。新規トークンを増やさず、既存の意味に合わせて選ぶ。

### intent の `subtle` 変種は「base を 15% で敷く」が既定

`Badge` / `Tag` / `Chip` の `variant="subtle"` は `_token-common.scss` が `oklch(from <base> l c h / 0.15)` を敷きます。**base 自体がサーフェス寄りの淡色だと 15% では消えます** — `neutral` の base は `--wim-color-disabled`（light `#e5e5e5`）で、15% を白背景に敷くと `#fbfbfb` 相当になり、見えませんでした。

そのため `tokens/intents.json` の `surface` は **`subtle` ロール（任意）** を持ちます。指定するとその色をそのまま subtle の背景に使い、未指定なら従来どおり 15% を導出します。淡色 base の intent を足すときは `subtle` も併せて指定すること。

> この種の「薄すぎて見えない」は **VRT では捕まりません**。`vrt.spec.ts` の `threshold: 0.1` はピクセル単位の色差の許容値で、`#fbfbfb` → `#e5e5e5`（差 ≈ 0.086）はしきい値を下回るため差分ゼロ扱いになります。実際 neutral の修正で更新されたベースラインは dark 側だけでした。

**`npm run check:contrast` がこれを機械強制します**（`audit:lib` / CI / lint-staged で自動実行）。intent × variant × サーフェスの全組み合わせ（現在 126 組）について、`_token-common.scss` の導出規則を再現した実効色で 2 つを見ます:

| 観点 | 基準 | 根拠 |
|---|---|---|
| 文字の可読性 | WCAG コントラスト比 ≥ 4.5 | Badge 等は小さい文字なので large text の 3:1 ではなく通常テキスト基準 |
| 塗りの可視性 | サーフェスとの OKLab 距離 ≥ 0.015 | **WCAG 由来ではなく実測から決めた値**。壊れていた neutral × subtle が 0.0072〜0.0116、現存する最小の正常値（dark info × subtle）が 0.0217 で、その間 |

コントラスト比は明度差しか見ないため「色相だけ違う面」を区別できず、塗りの可視性判定には使えません。**`outline` の枠線は意図的に対象外**です（WCAG 1.4.11 の 3:1 を当てると `neutral`/`secondary` の枠が軒並み落ち、システム全体の枠色見直しになるため）。

subtle のアルファ値はスクリプトに直書きせず `_token-common.scss` の `subtle-bg()` から読みます。読めなければ「導出規則が変わった」とみなして落とすので、SCSS 側だけ変えて検査が黙ってズレることはありません。

---

## 既存トークンが不足している場合のフロー

**先に既存で足りるか確認**（`RULES.md`「新規トークン追加ルール」）。近傍別名の追加は禁止に近い。

1. 既存 role / spacing / radius を `token-snapshot.json`・Colors ガイド・`DESIGN.md` で探す。
2. 足りない場合だけ層を選ぶ:
   - 生色 → `tokens/color/base.json`（palette）
   - 意味色（公開） → `tokens/color/semantic.json` + 必要なら `tokens/themes/dark.json`（role）
   - 1 コンポーネント専用色 → `src/styles/_component-colors.scss` の `--wim-comp-*`（公開 semantic に載せない）
   - Spacing / Radius → `tokens/spacing.json`
   - Shadow / Opacity / Z-Index / Motion → `tokens/effects.json`
3. `npm run tokens:build`（JSON を触った場合）。
4. 公開トークン面が変わったら `npm run check:tokens:update` をコミットに含める。
5. コンポーネントでは `var(--wim-color-*)` または `var(--wim-comp-*)` を参照する。

---

## 複合 UI / レシピ優先

画面パターンや「よくある組み合わせ」は、まず **Patterns レシピ**（`stories/Patterns/`）に書く。

| やる | やらない |
|---|---|
| 既存 Button / Input / Field / Dialog 等を Stories で合成して示す | 同じ合成を薄い公開ラッパコンポーネントとして量産する |
| 本当に必要な共通配線だけ薄いエントリにする（例: `wimui/rhf`） | Form 全体を包む巨大ラッパをライブラリ本体に増やす |
| レシピが増えたら Patterns 配下にカテゴリを足す | primitives 不足を理由に、説明用だけのコンポーネントを `src/components` に増やす |

判断: 利用者が **props API として依存する状態・a11y・焦点管理**が必要なら公開コンポーネント。単なる配置・配線の見本ならレシピ。

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
  background: var(--wim-color-glass-bg);     // 半透明ガラス効果
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

### Layout demo chrome（色付きセル）

Flex / Grid / Stack / SimpleGrid / Masonry など、**子はレイアウト構造を見せるためだけ**にあるストーリーでは、共有ヘルパー `stories/layout/_helpers/DemoCell.tsx` を使う。

- intent 淡色塗り + `text-*` 文字色 + **中立** `border`（intent 色の枠は使わない）
- padding / radius はトークン（既定 `md`）。生 HSL・px 直書きの角丸は避ける
- 複数子は `demoCellIntent(i)` で cycle。ホスト枠（幅デモの外側）は `surface-variant` / `surface` + 中立 border

使わないケース: Box 自身の props デモ、実コンポーネントを載せるデモ（Group+Button、AppShell、Patterns）、製品 UI 風の合成画面。

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

### バンドルサイズ予算（size-limit）の形

`package.json` の `"size-limit"` が Bundle Size Check ワークフローの実体。**予算は「利用者が実際に払うバイト数」で切っている**（2026-07-26 に組み替え）。

以前は `dist/**/*.js` の合計（380 kB）と `dist/components/form/**` の合計（88 kB）で測っていたが、**この数字を払う利用者は存在しない**。`sideEffects` は CSS とアイコンだけに絞られ subpath exports が 28 本あるので、`import { Button } from "wimui"` の実コストは **11 kB**（合計は 371 kB）。合計指標は無関係なコンポーネント追加でも上限に当たるため、上限の 2.4% しか余裕が無い状態になっていた。

現在の 3 分類:

1. **tree-shaking 後の実コスト** — `import` を書いて esbuild で実際にバンドルさせる（`@size-limit/esbuild`）。単体（`{ Button }`）／小さな画面／フォーム画面／ルートバレル全部／subpath 別（form / layout / data-display / charts / ai）。`ignore` で React を外部化する。
2. **配信単位そのもの** — UMD / `styles.css` / `reset.css`。tree-shaking が効かないので生のファイルサイズが実コスト。
3. **依存の巻き込み検知** — `dist/node_modules/**/*.js`（5 kB）。暴走した依存はここで落ちる。

> **落とし穴**: `@size-limit/esbuild` を入れると、`import` を書いていないエントリまで**再バンドル**される。ビルド済みの UMD を測ると 134.84 kB → 174.06 kB に化ける。2 と 3 のエントリには **`"disablePlugins": ["@size-limit/esbuild"]`** を付けてファイル計測に固定すること（プラグイン名は**パッケージ名フルで書く**。`["esbuild"]` では効かない）。

上限は実測 +15% 目安。上限に当たったら、まず「どの分類が増えたか」を見る — 1 が増えたなら利用者のコスト増、3 が増えたなら依存の巻き込み。

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

### peer サポート行列（一点集中）

| peer | サポート | レンジ |
|---|---|---|
| `react` / `react-dom` | 19 のみ | `^19.0.0` |
| `zod`（rhf） | 4 のみ | `^4.0.0` |
| `@hookform/resolvers` | 5.1+ | `^5.1.0` |
| `react-hook-form` | 7.43+ | `^7.43.0` |

React 18 / zod 3 は非対応。詳細は README。

### 公開 API（凍結・deep path なし）

- 公開 import: `wimui` または `wimui/<category>`（バレル）、`wimui/rhf` / `wimui/tokens` / `wimui/icons`
- **deep path は廃止**（`wimui/form/Button` 等は `exports` に無い。フォルダ移動を破壊的変更にしない）
- `_internal` や hooks 単体も `exports` に無い（非公開）
- `npm run check:api` が `exports` マップ + バレルシンボルを `api-snapshot.json` で検証。変更時は `check:api:update`

### UI 密度（`data-density`）
コントロール高さ・余白を `comfortable` / `compact` で切り替える。実装は `src/styles/_ui-patterns.scss` と `src/density.ts`。
- `setWimDensity("compact")` または `<html data-density="compact">`
- 追従: `--wim-height-*` / `--wim-control-padding-*` / `--wim-field-padding-*` / `--wim-control-item-padding-*` / `--wim-list-item-padding-*` / `--wim-table-cell-padding-*` / switch・checkbox など
- 非追従: `--wim-spacing-*`（レイアウト）、`--wim-avatar-size-*`
- 新規コントロール余白は生の `--wim-spacing-*` ではなく上記密度エイリアスを使う
- Storybook ツールバーの Density、Token → Density

### Form 値・エラー契約（公開）

コア form の値／エラーの約束。RHF 利用時も同じ。詳細の作業メモは `IMPROVEMENTS.md` と同内容。

| 項目 | 契約 |
|---|---|
| クリア可能スカラー（ClearedValue） | 制御時の空は **`null`**。`undefined` は「非制御 / prop 未指定」のみ |
| 例: DatePicker | `value?: Date \| null` / `onChange?: (date: Date \| null) => void` |
| `error`（メッセージ付き） | `Input` / `Select` / `DatePicker` / `Textarea` 等 → `error?: string` |
| `error`（葉トグル） | `Checkbox` / `Switch` / `Radio` → `error?: boolean`（見た目用）。RHF では `invalid` を渡す |
| 空文字・空配列 | 文字列フィールドの UI 空はコンポーネント慣例に従う（多くは `""`）。クリア可能スカラーを `""` で表さない |

新規のクリア可能コントロールを足すときも、制御時クリア = `null` に揃える（`undefined` をクリア値に使わない）。

### Form 連携（`wimui/rhf`）
コア form コンポーネントを書き換えず、薄いアダプタを `src/rhf.ts`（公開エントリ `wimui/rhf`）に置きます。
- `FormField` — RHF `Controller` + WIM 向け `error`（string）/ `invalid`（boolean）
- `valueFieldProps` / `checkedFieldProps` — 値コールバック型・checked 型へのマッピング（ClearedValue の `null` とそのまま噛み合う）
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
