# wimui

React コンポーネントライブラリ。200+ のコンポーネントを収録し、デザイントークン・ダークモード・多言語化（en / ja / pt＝ポルトガル語・ブラジル）・WAI-ARIA 準拠のアクセシビリティを備えています。

- ドキュメント（Storybook）: https://takeshisakuma.github.io/wimui/
- 動作要件: Node.js >= 18 / React >= 18 / react-dom >= 18

## インストール

現在 npm には未公開です（`package.json` の `private: true`）。利用するにはこのリポジトリからパッケージを生成してください。

```bash
# このリポジトリ側
git clone https://github.com/takeshisakuma/wimui.git
cd wimui
npm install
npm run build
npm pack    # wimui-0.1.0.tgz が生成される

# 利用するアプリ側
npm install /path/to/wimui-0.1.0.tgz
```

`i18next` / `react-i18next` などの i18n ライブラリは不要です。翻訳リソースを内蔵し、特定の i18n ライブラリに依存しません（後述の「多言語化」を参照）。

## クイックスタート

アプリのエントリポイントでスタイルを一度だけ読み込みます。CSS はトークン・リセット・
コンポーネントの 3 つに分割されており、目的に応じて組み合わせられます。

**Core（追加依存なし）** — ほとんどのコンポーネントはルートから import できます。

```tsx
import "wimui/tokens.css"; // 必須: デザイントークン（:root の --wim-* 変数）
import "wimui/styles.css"; // 必須: 全コンポーネントのスタイル
import "wimui/reset.css";  // 任意: 意見の強いリセット/base 要素スタイル

import { Button } from "wimui";

export const App = () => <Button>保存</Button>;
```

- `tokens.css` と `styles.css` は必須です（コンポーネントは `var(--wim-*)` を参照するため）。
- `reset.css` は任意です。`button` / `a` / `ul` / `table` などをリセットする意見の強い
  グローバルスタイルを含むため、アプリ側の既存スタイルと衝突する場合は省略できます。

i18next の初期化やテーマ設定は不要です。

**Charts / peer 依存コンポーネント** — optional peer を使うコンポーネントはルート `wimui` から export されません。カテゴリ subpath から import し、下表の peer をインストールしてください。

```tsx
import { BarChart } from "wimui/charts";
import { Markdown } from "wimui/data-display";
import { StreamingText } from "wimui/ai";
```

```bash
# 例: チャートを使う場合
npm install recharts
```

> `<script>` タグで読み込む UMD 版（`dist/wimui.umd.js` + `dist/wimui.umd.css`）は、
> 上記 3 つを 1 ファイルに同梱しています。

## アイコン

アイコンの指定方法は2通りあります。

**1. コンポーネントを直接渡す（推奨・tree-shaking が効く）**

```tsx
import { Button, Icon, CheckIcon } from "wimui";

<Button icon={<Icon component={CheckIcon} />}>保存</Button>
<Icon component={CheckIcon} size="sm" />
```

**2. 文字列で指定する**

`icon="CheckIcon"` のような文字列ベースの指定を使う場合は、エントリポイントで一度だけアイコンを登録してください（未登録のまま文字列指定すると開発時に警告が出ます）。

```tsx
import "wimui/icons"; // 全アイコン（約 30KB minify / 5KB gzip）を登録

<Button icon="CheckIcon">保存</Button>
```

文字列指定を使わなければ `wimui/icons` の読み込みは不要で、アイコンはバンドルに含まれません。

## 多言語化（i18n）

セットアップなしで英語表示で動作します（コンポーネントが使用する翻訳キーのみを en / ja / pt で内蔵）。**i18next / react-i18next などの依存は不要**です。表示言語を切り替えるには:

```tsx
import { setWimLocale, getWimLocale } from "wimui";

setWimLocale("ja"); // "en" | "ja" | "pt"
getWimLocale();     // 現在のロケール（例: "ja"）
```

アプリ自体が i18next などで言語を管理している場合は、言語切替時に `setWimLocale` を呼んで同期してください。wimui は特定の i18n ライブラリに依存しないため、任意の仕組みと組み合わせられます。

```ts
// 例: アプリの i18next と同期する
i18n.on("languageChanged", (lng) => setWimLocale(lng));
```

## ダークモード

`<html>` の `data-theme` 属性で制御します。未指定の場合は OS の `prefers-color-scheme` に追従します。

```html
<html data-theme="dark">  <!-- ダーク固定 -->
<html data-theme="light"> <!-- ライト固定 -->
<html>                    <!-- OS 設定に追従 -->
```

## バンドルサイズと import 方法

ルートからの named import で未使用コンポーネントはバンドルに含まれません（`sideEffects` 設定済み）。カテゴリ別のサブパスも利用できます。

```tsx
import { Button } from "wimui";        // tree-shaking が効く
import { Button } from "wimui/form";   // カテゴリ別サブパス
```

カテゴリ: `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai` / `tokens`

> **optional peer 依存コンポーネントはルート `wimui` から export されません。** クイックスタートの subpath 例と下表を参照してください。

## オプショナルな peerDependencies

以下のコンポーネントを使う場合のみ、対応するパッケージを追加インストールしてください。使わない場合は不要です。

| コンポーネント | 必要なパッケージ |
|---|---|
| `charts/*`（AreaChart, BarChart 等） | `recharts` |
| ScheduleView | `@fullcalendar/core` `@fullcalendar/react` `@fullcalendar/daygrid` `@fullcalendar/timegrid` `@fullcalendar/interaction` |
| NodeGraph, InteractiveGraph | `@xyflow/react` |
| Markdown, MarkdownRenderer, StreamingText | `react-markdown` `remark-gfm` |
| QRCode | `qrcode.react` |
| CodeDiffViewer, JsonDiffViewer | `diff` |
| Audio（`showMetadata` を有効にする場合のみ） | `music-metadata` |

## Next.js App Router（RSC）対応

ビルド成果物の各モジュール先頭には `"use client"` ディレクティブが自動付与されています。App Router のサーバーコンポーネントから追加のラップなしで直接 import できます（各コンポーネントは client boundary として扱われます）。

例外として `wimui/tokens` は型定義のみのモジュールのため `"use client"` を持たず、サーバーコンポーネントからも参照できます。

## npm 公開について

`private: true` のため現在は公開されません。公開する場合は `package.json` から `"private": true` を削除してください（パッケージ名 `wimui` は npm で未取得であることを確認済み・2026年6月時点）。

リリースは [changesets](https://github.com/changesets/changesets) 経由です。

```bash
npm run changeset   # 変更内容・semver を記録（.changeset/ にファイル生成）
npm run version     # changeset を取り込み、package.json のバージョンを更新
npm run release     # build 後に npm publish
```

---

## 開発

### 開発サーバー

```
npm run dev         # Vite 開発サーバー（アイコン生成・i18n bundle を含む）
npm run storybook   # Storybook（ドキュメント・コンポーネント確認）
```

### コンポーネント雛形

```
npm run scaffold -- <Name> <category> [categoryId]
# 例: npm run scaffold -- MyInput form basic-inputs
```

`src/components/<category>/<Name>/` と `stories/<category>/<Name>/` のボイラープレートを生成します。続けて `src/<category>.ts` への export 追加、翻訳キー、MDX 記述が必要です（詳細は `CLAUDE.md` / `SKILLS.md`）。

### パッケージバージョン確認

```
npm outdated
```

## 品質チェック

### SCSS

```
npm run stylelint       # src・storiesフォルダ内のCSS/SCSSの品質確認
npm run stylelint:fix   # src・storiesフォルダ内のCSS/SCSSを自動修正
```

### JavaScript / TypeScript

```
npm run lint            # src・stories 内の JS/TS/MDX の品質確認（警告ゼロが必須）
npm run lint:fix        # src・stories 内の JS/TS/MDX を自動修正
```

### 単体テスト

```
npm run test            # コンポーネント単体テスト (*.test.tsx) を実行
```

### テストカバレッジ

```
npm run test:coverage   # カバレッジ測定（行・分岐・関数・文いずれも 80% 未満で失敗）＋ coverage/ に HTML レポート
```

### 未テストコンポーネント

```
npm run test:check      # 未テストコンポーネントのリスト (stories/missing_tests.txt) を更新
npm run test:report     # カバレッジ測定と未テストチェックを同時に実行
```

### VRT (Visual Regression Testing)

事前に Storybook の静的ビルドが必要です（`storybook-static/` は gitignore）。

```
npm run build-storybook                                 # 初回・ストーリー変更後に必須
npm run test:vrt                                        # vrt/ 配下の Playwright テスト一式（VRT・a11y・e2e）
npm run test:vrt:update                                 # スナップショットを更新
npm run test:vrt:report                                 # 差分をスライダー形式で確認
$env:FILTER='Calendar'; npm run test:vrt:update         # Calendarのスナップショットのみ更新
```

> CI の Visual Regression Test ワークフローは `vrt/vrt.spec.ts` のみを実行します。ローカルの `npm run test:vrt` は a11y / e2e も含みます。
> Playwright のバージョンを更新した後は `npx playwright install` でブラウザを再取得してください。

#### 環境変数

```
$env:THEME='light'                               # ライトモードのみ実行
$env:THEME='dark'                                # ダークモードのみ実行
$env:FILTER='Button'                             # Buttonコンポーネントのみ実行
$env:THEME='light'; $env:FILTER='Button'         # ButtonのライトモードのみVRT
$env:THEME='dark'; $env:FILTER='Calendar'        # CalendarのダークモードのみVRT
$env:THEME=$null; $env:FILTER=$null              # 環境変数をリセット
```

#### CI (GitHub Actions) での VRT 運用

VRT は `src/`・`stories/` に変更があるPRで自動実行されます。

UIを意図的に変更した場合の手順：

1. UIを変更してPRを作成する
2. VRTワークフローが自動実行され、既存のlinuxスナップショットと比較する
3. 差分が検出されるとテストが失敗する
4. Actions タブ → 該当ワークフロー → `vrt-diffs` アーティファクトをダウンロードして差分画像を確認する
5. 変更が意図的なものであれば、Actions タブ → Visual Regression Test → Run workflow → `Update baseline snapshots: true` でベースラインを更新する

> 初回セットアップ: linuxスナップショットがまだ存在しない状態では比較対象がないため失敗します。  
> 上記の Run workflow → `Update baseline snapshots: true` を一度実行してlinux用ベースラインを生成してください。

### a11y

VRT と同様に、事前に `npm run build-storybook` が必要です。

```
npx playwright test vrt/a11y.spec.ts                                        # 全ストーリーのa11yチェック
$env:FILTER='Button'; npx playwright test vrt/a11y.spec.ts                  # Buttonのみ
npx playwright test vrt/a11y.spec.ts --grep "DataGrid"                     # DataGridのみ
```

### バンドルサイズ

```
npm run size   # ESモジュール全チャンク(gzip)とUMDバンドル(gzip)が閾値内かチェック
```

閾値はCI（`bundle-size.yml`）でも自動確認されます。

### Storybook docs エラー検知

MDX ファイルで参照しているストーリー名が実際のエクスポートと一致しない場合、Storybook のビルド時にエラーが出力されます。

```
npm run build-storybook   # ビルドエラーとしてエラーのあるページを検知
```

エラーが出た場合は標準エラー出力に `error` が含まれる行として表示されます。

よくある原因：

- MDX の `<Canvas of={Stories.ExportName} />` で `ExportName` がストーリーファイルに存在しない
- MDX の `<Controls of={Stories.ExportName} />` で同上
- `<Markdown>` コンポーネントに文字列ではなく JSX を渡している

## コード整形

```
npm run format   # プロジェクト全体をPrettierで整形
```

## メンテナンス・監査 (Maintenance & Audit)

大量のコンポーネント追加や大規模なリファクタリングの前後で実行することを推奨します。

```bash
npm run audit:all               # 全監査を一括実行（docs + lib）
npm run audit:lib               # ライブラリ構造ガードのみ
npm run audit:docs              # Storybook/MDX・i18n 系のみ
npm run audit-mdx               # ドキュメントの必須セクション漏れをチェック
npm run i18n:check              # 3言語の整合性をチェック
npm run check:aschild           # asChild（Slotパターン）の適用漏れをチェック
```

監査内容（`audit:all`）:
- **docs**: MDX 必須セクション / i18n 整合・行数 / MDX・Stories のハードコード文言 / ストーリー階層
- **lib**: asChild / ハードコード値（色・px） / 公開 API サーフェス / root hooks / トークン・intent 整合 / SCSS トークン参照

## 国際化 (i18n)

```bash
npm run i18n:check              # ロケールファイル間の翻訳キー欠落とファイル行数(1000行)をチェック
npm run i18n:check:components   # コンポーネントソースで使われているキーが翻訳ファイルに存在するかチェック
npm run i18n:sync               # enを基準にja/ptへGoogle AIで自動翻訳・追記（要: GOOGLE_GENERATIVE_AI_API_KEY）
```

| スクリプト | 検出できるケース |
|---|---|
| `i18n:check` | ロケール間の欠落、ファイル肥大化（1000行制限） |
| `i18n:check:components` | コード上で `t("key")` を使い始めたが登録を忘れているケース |

推奨フロー：
1. `npm run i18n:check:components` で未登録キーを検出
2. EN の翻訳ファイルにキーを追加
3. `npm run i18n:sync` で ja/pt へ自動翻訳
4. `npm run i18n:check` で最終的な整合性を確認

## ユーティリティ・整合性

```bash
npm run check:consistency   # src・src/data/components.json・stories・mdx の構造的矛盾を確認
npm run check:hierarchy     # コンポーネントリスト(MDX)の掲載漏れを確認
npm run check:aschild       # コンポーネントが Slot パターンを正しく実装しているか確認
npm run check:stories       # 翻訳キーの漏れ（生キー表示）を確認
npm run i18n:missing        # enにあって他言語に未翻訳のキーを確認
```

## デプロイ

```
npm run deploy   # GitHub Pagesへデプロイ
```

`main` ブランチへの push でも `.github/workflows/deploy.yml` 経由で Storybook が GitHub Pages に自動デプロイされます。手動の `npm run deploy` はローカルからの緊急デプロイや検証用です。

## Git

### Huskyのスキップ

やむを得ずコミット時のHuskyをスキップする場合：

```
git commit -m "commit message" --no-verify
```

## コーディングルール

- スタイリング：新規コンポーネントは CSS Modules（`*.module.scss`）を推奨
- CSSクラス名：従来のグローバルクラスは `wim-` プレフィックスを使用（詳細は `RULES.md` を参照）


## ドキュメントの自動抽出 (Docgen)

WIM UI では、コンポーネントの仕様（Props、デザイントークン、構成要素）を自動抽出し、MDX に埋め込む仕組みを構築しています。
Vite の開発サーバー起動時やファイル保存時に `src/data/docgen_*.json` が自動更新されるため、手動でスクリプトを実行する必要はありません（生成物は gitignore され、Storybook の Vite プラグインが出力します）。
MDX の記述方法の詳細は `SKILLS.md` を参照してください。

## デザイントークン

WIM UI は、Style Dictionary を使用してデザイントークンを一元管理（Single Source of Truth）しています。

### 基本構成

- ソース: `tokens/color/*.json`・`tokens/*.json`・`tokens/themes/dark.json`・`tokens/intents.json`
- 生成物（自動生成）:
    - `src/tokens/generated/`（SCSS 変数・CSS カスタムプロパティ・`_intents.scss`）
    - `src/types/generated-tokens.ts` / `src/types/generated-intents.ts`

### ビルドコマンド

トークン（JSON）を編集した後は、必ず以下のコマンドを実行してコードに反映させてください。

```bash
npm run tokens:build   # Style Dictionary + intent 生成（SCSS / TypeScript）
```

このコマンドにより、コンポーネント開発時に最新のトークンが型補完として利用可能になります。





## ワークフロー

git add .
git commit -m "..."
git pull --rebase origin main
git push origin main