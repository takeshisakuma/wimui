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

> **2026-09-30 の見直し（#747・T277 `TreeDiagram` の追加で UMD が 422 B 超過）**: 増分は UMD +2.23 kB / `wimui/data-display` 全部 +2.45 kB / ルートバレル全部 +2.43 kB で、部品の実体（配置の関数・描画・キー操作・3 言語の文言）。3（依存の巻き込み）は動いていない。UMD の 145 kB は 7 月（`1e848a24`）に決めた値で、以後の部品追加で実測との差が 0.3% まで詰まっていた（`data-display` も 76 kB に対し 75.97 kB）。**+15% までは上げず、部品 1〜2 個分の余裕だけ持たせた**: UMD 145 → 150 kB、`data-display` 76 → 80 kB（ユーザー判断）。+15%（167 kB / 87 kB）にすると、部品を 10 個足しても鳴らなくなり、1 個ずつ中身を見る機会がなくなるため。次に当たったら、また増分の中身を見てから決める。
>
> **2026-10-04 の見直し（#832・英語で固定だった既定の文言を翻訳キーへ移した）**: 内蔵の翻訳は使うキーだけを 1 つの塊にして同梱するので、**文言を足すと、翻訳を読む入口が全部増える**（`{ Button }` 単体も払う）。今回は QueryBuilder の演算子 15・PhoneInput の国名 10・Carousel の 4 文言 × 3 言語で、増分は `{ Button }` 単体 +0.8 kB / 小さな画面 +0.6 kB / `rich-text-editor` +0.5 kB / `wimui/ai` +0.2 kB。4 つが超えたので、実測に 1 kB 前後の余裕で上げた: 13 → 14.5 kB / 19 → 20.5 kB / 26 → 27.5 kB / 50 → 51 kB（ユーザー判断）。**`wimui/charts` は上げていない** ── charts はそれまで翻訳を 1 つも読んでおらず、GanttChart に読ませると塊が丸ごと入って 12.5 → 21.84 kB（+9.34 kB）になった。charts を翻訳なしに保つため、GanttChart の既定の名前は英語のまま戻した（ユーザー判断。変えたい利用者は `labels`）。**charts の部品に `useWimTranslation` を足すときは、この +9 kB を払うかどうかを先に決めること。**

> **2026-10-01 の見直し（#776・T279 `PivotTable` の 4 本目で `wimui/data-display` が 169 B 超過）**: 4 本の増分は `wimui/data-display` 全部で **+3.62 kB**（76.55 → 78.20 → 78.47 → 78.97 → 80.17 kB。順に 静的な描画 +1.65 / 行の折りたたみ +0.27 / 見出しの固定 +0.50 / 行の仮想化 +1.20）、ルートバレル全部 191.48 → 195.24 kB（上限 205）、UMD 141.66 → 144.96 kB（上限 150）。中身は部品の実体で、3（依存の巻き込み）は 2.96 kB のまま動いていない。9/30 に持たせた余裕（4 kB）を PivotTable 1 個で使い切ったので、**同じ考え方で `data-display` を 80 → 84 kB にした**（ユーザー判断。実測 80.17 kB に対して余裕 3.83 kB ＝ 部品 1〜2 個分）。UMD とルートバレルは余裕が残っているので触っていない。**次に当たりそうなのは UMD**（余裕 5.04 kB）。

### 開発サーバーの起動高速化
Vite の設定（`vite.config.ts`, `.storybook/main.ts`）で以下の最適化を行っています。

- imagemin の限定実行: 重い画像圧縮処理（`vite-plugin-imagemin`）は `mode === "production"` の時のみ実行されます。開発時はスキップされ、起動時間が短縮されます。
- optimizeDeps の活用: 頻繁に使用する巨大なライブラリ（`react`, `recharts` 等）を `optimizeDeps.include` に明示することで、初動の依存解決を高速化しています。

### CJS 出力の後処理（fix-cjs-empty-css）
rolldown ベースの Vite 8 には、エントリモジュール直下の CSS import を CJS/UMD 出力で `/* empty css */` コメントへ置換する際にカンマ演算子が残り、`dist/index.cjs` が構文エラーになるバグがあります（`src/index.ts` がグローバル SCSS を import しているため発生）。`npm run build` の最後に `scripts/fix-cjs-empty-css.js` が実行され、該当パターンを自動修正します。Vite 側でバグが修正されれば何もしなくなる（no-op）ため、そのまま残して問題ありません。

### 重量級依存の扱い（optional peerDependencies）
特定のコンポーネントでしか使わない重量級ライブラリは、利用者のインストールサイズを抑えるため `dependencies` に入れず、optional な `peerDependencies` として宣言しています（`peerDependenciesMeta` で `"optional": true`）。

- 対象: `recharts`（charts）、`react-markdown` / `remark-gfm`（Markdown）、`diff`（CodeDiffViewer）、`qrcode.react`（QRCode）、`@xyflow/react`（NodeGraph / InteractiveGraph）、`@tiptap/*`（RichTextEditor・`wimui/form/rich-text-editor`）、`@fullcalendar/*`（ScheduleView）、`react-hook-form` / `@hookform/resolvers` / `zod`（`wimui/rhf`）
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
- CSS / locales も公開面: `styles.css` / `reset.css` / `locales/*`
- **やらないこと**: コンポーネントの deep path（`./form/*` 等）を `exports` に再追加しない
- `npm run check:api` が `exports` マップ + バレルシンボルを `api-snapshot.json` で検証。変更時は `check:api:update`

### UI 密度（`data-density`）
コントロール高さ・余白を `comfortable` / `compact` で切り替える。実装は `src/styles/_ui-patterns.scss` と `src/density.ts`。
- `setWimDensity("compact")` または `<html data-density="compact">`
- 追従: `--wim-height-*` / `--wim-control-padding-*` / `--wim-field-padding-*` / `--wim-control-item-padding-*` / `--wim-list-item-padding-*` / `--wim-table-cell-padding-*` / switch・checkbox など
- 非追従: `--wim-spacing-*`（レイアウト）、`--wim-avatar-size-*`
- 新規コントロール余白は生の `--wim-spacing-*` ではなく上記密度エイリアスを使う
- Storybook ツールバーの Density、Token → Density

### Form 値・エラー契約（公開）

コア form の値／エラーの約束。RHF 利用時も同じ。

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
