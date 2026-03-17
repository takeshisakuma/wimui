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

## コード整形

```
npm run format   # プロジェクト全体をPrettierで整形
```

## 国際化 (i18n)

```
npm run i18n:check   # en/ja/pt の翻訳キー欠落をチェック（CIでも実行）
npm run i18n:sync    # enを基準にja/ptへGoogle AIで自動翻訳・追記（要: GOOGLE_GENERATIVE_AI_API_KEY）
```

## ユーティリティ

### コンポーネント階層確認

```
node check_hierarchy.js                     # コンポーネントの階層を表示
node check_hierarchy.js > check_result.txt  # 結果をファイルに保存
```

### 翻訳キーの確認

```
node check_stories_keys.js   # 生キーが表示されていないか確認
node find_missing_keys.js    # 英語にあって他言語に未翻訳のキーを確認
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

- CSSクラス名：`wim-` プレフィックスを付けたkebab-case（例: `wim-button`, `wim-button--primary`）
