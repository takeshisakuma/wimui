# tarball スモークゲート

**公開される tarball を、隔離した消費者環境に install して実際に動かす**ゲート。
`import` できない / `render` が null になる / CSS・locale が解決しない、といった
「消費者が `npm install` した瞬間に初めて分かる」クラスの障害を、公開前（毎 PR）に検出する。

VRT / a11y は **内部の開発品質**ツールで、`src` を alias でビルドして見るだけなので、
公開物の import 可否や本番ビルド固有の欠落（過去の Icon `name` null 化など）は捕まえられない。
このゲートはそれらとは独立した「**公開して動くか**」の signal。

## 実行

```bash
npm run smoke            # build → bare プロファイル（react/react-dom のみ）
npm run smoke:full       # build → full プロファイル（全 optional peer 導入）
npm run smoke:pnpm       # build → bare を pnpm(strict) で install（peer 宣言漏れを露呈）
npm run smoke:treeshake  # build → bare + tree-shaking 検証（下記）
npm run smoke:nobuild    # 既存 dist で bare（ローカル反復用）
SMOKE_KEEP=1 npm run smoke:nobuild   # 失敗調査用に一時ディレクトリを残す

# オプション（run.mjs 直叩き）
node scripts/smoke/run.mjs --pm pnpm --full   # full を pnpm strict で
node scripts/smoke/run.mjs --treeshake        # tree-shaking 検証を追加
```

## tree-shaking 検証（`--treeshake`）

`import { Button } from "wimui"` だけを **react/react-dom のみ external** で esbuild バンドルし、
**未使用の optional-peer 依存コード（recharts / react-markdown / fullcalendar 等）が落ちる**ことを検証する。
tree-shaking が効いていれば未 install の optional peer を解決しにいかないので bundle が成功し、
出力に optional-peer マーカー（`recharts` / `AreaChart` / `MarkdownRenderer` 等）が含まれない。
効いていなければ未解決 import で bundle が失敗する＝「Button だけ欲しいのに recharts が入る」事故を検出。

## パッケージマネージャ（`--pm npm|pnpm|yarn`）

既定は npm。**pnpm** は strict な node_modules（phantom deps 禁止）で `peerDependencies` の宣言漏れを
露呈させるため、install→import が通るかを別マネージャでも検査する（pnpm/yarn はローカル未導入でも
`npx` 経由で取得して実行）。

## 仕組み

1. `npm pack` で公開 tarball を生成（`files:["dist"]` を尊重）
2. **リポジトリ外**の使い捨てディレクトリに install（repo の `node_modules` / Vite alias を一切混ぜない）
3. `assert.cjs`（require）と `assert.mjs`（import）を**両方**実行し、ESM/CJS 双方の解決を検査

## 検査内容（`checks.cjs`）

- 公開サブパスの import（ESM+CJS）
- ルートバレルの主要 value export 存在
- `<Button>` / `<Title>` を `renderToStaticMarkup` して**非空**であること
- **Icon `name` 指定の回帰ガード**: `import "wimui/icons"` の副作用登録後に
  `<Icon name=…>` が `<svg>` を返すこと（過去の null 化を直接ガード）
- `styles.css` / `reset.css` が解決・非空・トークンマーカー（`--wim-`）を含む
- `locales/en/common.json` が解決・parse 可能

## 契約（`manifest.json`）

| 分類 | サブパス | 意味 |
|------|----------|------|
| `bareRequired` | `.` / `tokens` / `icons` / `typography` / `layout` / `form` / `feedback` / `navigation` / `overlay` / `media` / **`data-display`** / **`ai`** | **react/react-dom のみで import 可能でなければならない**。`.`（ルートバレル）が bare-safe であることが最重要の公開ガード |
| `typesOnly` | `tokens` | 型専用エントリ。runtime export 0 が正しい（読込成功のみ検査） |
| `peerDependent` | `charts` / `rhf` / `data-display/{markdown,qr-code,node-graph,schedule-view,json-diff-viewer}` / `ai/{streaming-text,markdown-renderer,code-diff-viewer,interactive-graph}` | import 時に optional peer を要する。**full プロファイルでのみ必須**、bare では報告（WARN）のみ |

### 実態（2026-07-18、T17 後）

- **ルートバレル `.` は bare-safe**（peer 不要で import 可）。
- **`data-display` / `ai`（カテゴリバレル）も peer-free**（T17 で peer 依存分を専用サブパスへ分離）。
- peer 依存コンポーネントは `data-display/markdown` などの**コンポーネント別サブパス**にあり、
  そのサブパスを import したときだけ対応 peer が要る（サブパス名＝必要 peer が自明）。
