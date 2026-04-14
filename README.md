# wimui

## 開発

### Storybook 起動

```
npm run storybook
```

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
npm run lint            # src・storiesフォルダ内のJS/TSの品質確認（.mdxを除く、警告ゼロが必須）
npm run lint:fix        # src・storiesフォルダ内のJS/TSを自動修正
```

### 単体テスト

```
npm run test            # コンポーネント単体テスト (*.test.tsx) を実行
```

### テストカバレッジ

```
npm run test:coverage   # coverage/ にブラウザで確認可能なHTMLレポートを生成
```

### 未テストコンポーネント

```
npm run test:check      # 未テストコンポーネントのリスト (stories/missing_tests.txt) を更新
npm run test:report     # カバレッジ測定と未テストチェックを同時に実行
```

### VRT (Visual Regression Testing)

```
npm run test:vrt                                        # スナップショットと比較
npm run test:vrt:update                                 # スナップショットを更新
npm run test:vrt:report                                 # 差分をスライダー形式で確認
$env:FILTER='Calendar'; npm run test:vrt:update         # Calendarのスナップショットのみ更新
```

#### 環境変数

```
$env:THEME='light'                               # ライトモードのみ実行
$env:THEME='dark'                                # ダークモードのみ実行
$env:FILTER='Button'                             # Buttonコンポーネントのみ実行
$env:THEME='light'; $env:FILTER='Button'         # ButtonのライトモードのみVRT
$env:THEME='dark'; $env:FILTER='Calendar'        # CalendarのダークモードのみVRT
$env:THEME=$null; $env:FILTER=$null              # 環境変数をリセット
```

### a11y

```
npx playwright test vrt/a11y.spec.ts                                        # 全ストーリーのa11yチェック
$env:FILTER='Button'; npx playwright test vrt/a11y.spec.ts                  # Buttonのみ
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

## 国際化 (i18n)

```
npm run i18n:check              # ロケールファイル間の翻訳キー欠落をチェック（en にあって ja/pt にない、など）
npm run i18n:check:components   # コンポーネントソースで使われているキーが翻訳ファイルに存在するかチェック
npm run i18n:sync               # enを基準にja/ptへGoogle AIで自動翻訳・追記（要: GOOGLE_GENERATIVE_AI_API_KEY）
```

### 2つのチェックスクリプトの使い分け

| スクリプト | 検出できるケース |
|---|---|
| `i18n:check` | ロケール間の欠落（en に翻訳があるが ja/pt に未追加） |
| `i18n:check:components` | コードで `t("key")` を使い始めたがどのロケールにも未登録 |

**Namespace の自動登録：**
`public/locales/en/` に 新しい JSON ファイルを追加すると、Vite のビルド時に `stories/i18nConstants.ts` へ自動的に登録されます。手動での更新は不要です。

**推奨フロー：**
1. `npm run i18n:check:components` でコード上の未登録キーを検出
2. EN の翻訳ファイルにキーを追加
3. `npm run i18n:sync` で ja/pt へ自動翻訳
4. `npm run i18n:check` でロケール間の整合性を確認

## ユーティリティ

### 整合性チェック

```
npm run check:consistency   # src・components.json・stories・mdxの不整合を確認
```

### コンポーネント階層確認

```
npm run check:hierarchy     # コンポーネントの階層を表示
```

### 翻訳キーの確認

```
npm run check:stories       # 翻訳キーの漏れ（生キー表示）を確認
npm run i18n:missing        # enにあって他言語に未翻訳のキーを確認
```

## デプロイ

```
npm run deploy   # GitHub Pagesへデプロイ
```

## Git

### Huskyのスキップ

やむを得ずコミット時のHuskyをスキップする場合：

```
git commit -m "commit message" --no-verify
```

## コーディングルール

- スタイリング：新規コンポーネントは **CSS Modules**（`*.module.scss`）を推奨
- CSSクラス名：従来のグローバルクラスは `wim-` プレフィックスを使用（詳細は `RULES.md` を参照）


## ドキュメントの自動抽出 (Docgen)

WIM UI では、コンポーネントの仕様（Props、デザイントークン、構成要素）を自動抽出し、MDX に埋め込む仕組みを構築しています。
Vite の開発サーバー起動時やファイル保存時に `src/data/docgen.json` が自動更新されるため、手動でスクリプトを実行する必要はありません。
MDX の記述方法の詳細は `SKILLS.md` を参照してください。

## ドキュメントの欠落確認
node scripts/audit-mdx.js

## デザイントークン

WIM UI は、**Style Dictionary** を使用してデザイントークンを一元管理（Single Source of Truth）しています。

### 基本構成

- **ソース**: `tokens/**/*.json`
- **生成物（自動生成）**:
    - `src/tokens/generated/` (SCSS変数, CSSカスタムプロパティ)
    - `src/types/generated-tokens.ts` (TypeScript 型定義)

### ビルドコマンド

トークン（JSON）を編集した後は、必ず以下のコマンドを実行してコードに反映させてください。

```bash
npm run tokens:build   # JSONからSCSS/TypeScript定義を自動生成
```

このコマンドにより、コンポーネント開発時に最新のトークンが型補完として利用可能になります。