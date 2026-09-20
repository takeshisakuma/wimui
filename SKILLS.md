# WIM UI 構築スキルガイド

コーディングルールは `AGENTS.md`（正本）と `docs/rules/` を参照してください。このファイルに残しているのは **①部品を新規に作る順番と置き場 ②テストの書き方 ③ビルドと出荷の契約**（サイズ予算・CJS・peer・密度・Form）**④pre-commit で何が走るか**です。

> **2026-09-21 に 578 → 288 行へ割りました。** 作業ごとの手順（トークンが足りないとき・z-index・ダークモード・i18n・ストーリー・MDX / Docgen・アイコン・複合 UI）は `docs/rules/` の該当ファイルへ移しています ── **規則と手順が別ファイルにあると、規則側から「詳細は SKILLS.md」と飛ばす参照が生まれ、そこが腐る**（実際 4 箇所ありました）。移した先は `AGENTS.md` の索引に載っており、`npm run check:instructions` が「置いたのに辿れない／指しているのに無い」を見張ります。

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
    - チェックリスト本体: `.github/pull_request_template.md` と `AGENTS.md`「品質ゲート・チェックリスト」
8.  **合成（必須）**: カタログの単体ストーリーだけでは出荷しない。T179 のプローブで他の部品と組み、置き方・a11y・狭幅を触る。確認が終わったらプローブ画面は捨て、直した部品と Realistic な単体ストーリーを残す。カバー率のために `stories/Patterns/` へ書かない。詳細は `docs/rules/implementation.md` と `DESIGN.md` のコンポジションガイドライン。

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

## pre-commit フックで自動チェックされる内容

**正本は `package.json` の `lint-staged`。ここに一覧を書き写さないこと。**

以前ここには 3 項目（ESLint / Stylelint / i18n）が書いてありました。2026-09-21 に実際の設定と突き合わせたところ **27 パターン・49 コマンド**で、**写しが腐ったまま誰にも直されていなかった**（読んだ人は「フックは軽い」と誤解する）。`GEMINI.md` を廃止したのと同じ理由で、一覧は持ちません。

いま何が走るかは設定から数えます。

```bash
node -e "console.log(Object.keys(require('./package.json')['lint-staged']).join('\n'))"
```

走るものの**種類**（これは設定を見れば分かるので、ここでは分類だけ）:

- **文法・スタイル** — ESLint（`--max-warnings=0`）/ Stylelint。**型チェック（`tsc --noEmit`）はフックには入っていません** ── 走るのは CI の `Lint & Type Check` ジョブだけ（以前ここには「ESLint + TypeScript 型チェック」と書いてあったが、`lint-staged` に `tsc` は 1 つも無い）
- **トークンと生成物** — `tokens/**` を触ったら再生成し、生成物を自動で stage する（`scripts/stage-generated.js`）。`llms.txt` / `src/i18n/generated` / docgen も同じ扱い
- **i18n** — キーの整合性・別名・品質（PT-BR 語彙、指示形 placeholder）
- **MDX とドキュメント** — 必須セクション・生英語・リンク・コード例
- **規範のガード** — `check:slop`（AI-slop）/ `check:prop-api`（prop シグネチャの変化）/ `check:composition-rules` / `check:skills`（Agent Skills の形式）/ `check:instructions`（AGENTS.md・CLAUDE.md・`.gemini/settings.json` の対応）

**警告が 1 件でもあるとコミットが失敗します**（`--max-warnings=0`）。

> **lint-staged は変更されたファイルだけを渡す。** 合計を凍結するラチェット（`check:slop` の px 直書きなど）は、渡された部分集合で数えると**必ず基準を下回って素通りする**ため、**引数を無視して常に全量を数える**実装にしてあります（2026-07-26 に実際に素通りしていた）。新しくラチェットを足すときは同じ形にすること。

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
