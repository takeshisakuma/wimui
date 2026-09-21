# ビルドと出荷の契約

> この文書は `SKILLS.md`（2026-09-21 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**手順です。

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
