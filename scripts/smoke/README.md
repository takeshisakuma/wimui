# tarball スモークゲート

**公開される tarball を、隔離した消費者環境に install して実際に動かす**ゲート。
`import` できない / `render` が null になる / CSS・locale が解決しない、といった
「消費者が `npm install` した瞬間に初めて分かる」クラスの障害を、公開前（毎 PR）に検出する。

VRT / a11y は **内部の開発品質**ツールで、`src` を alias でビルドして見るだけなので、
公開物の import 可否や本番ビルド固有の欠落（過去の Icon `name` null 化など）は捕まえられない。
このゲートはそれらとは独立した「**公開して動くか**」の signal。

## 実行

```bash
npm run smoke          # build → bare プロファイル（react/react-dom のみ）
npm run smoke:full     # build → full プロファイル（全 optional peer 導入）
npm run smoke:nobuild  # 既存 dist で bare（ローカル反復用）
SMOKE_KEEP=1 npm run smoke:nobuild   # 失敗調査用に一時ディレクトリを残す
```

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
| `bareRequired` | `.` / `tokens` / `icons` / `typography` / `layout` / `form` / `feedback` / `navigation` / `overlay` / `media` | **react/react-dom のみで import 可能でなければならない**。`.`（ルートバレル）が bare-safe であることが最重要の公開ガード |
| `typesOnly` | `tokens` | 型専用エントリ。runtime export 0 が正しい（読込成功のみ検査） |
| `peerDependent` | `data-display` / `charts` / `ai` / `rhf` | import 時に optional peer を要する。**full プロファイルでのみ必須**、bare では報告（WARN）のみ |

### 既知の実態（初回実測 2026-07-18）

- **ルートバレル `.` は bare-safe**（406 exports、peer 不要で import 可）。
- `data-display` / `ai` は peer-free コンポーネント（Accordion / Avatar 等）と
  peer 依存コンポーネント（Markdown→`react-markdown`、CodeDiffViewer→`diff`）が**混在**するため、
  カテゴリサブパスを import すると optional peer を要求する。
  peer-free コンポーネントだけ使いたい場合は**ルートバレル**からの import を推奨。
  （将来的に peer 依存コンポーネントを遅延化 or 分離するかは別途検討）
