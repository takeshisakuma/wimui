# wimui

## npm

### 作業時

npm run storybook

### npmのパッケージのバージョン確認

npm outdated

### 品質確認

#### SCSS

npm run stylelint // storiesフォルダ内のscssの品質確認
npm run stylelint:fix // storiesフォルダ内のscssのコードを修正

#### JavaScript, TypeScript

npm run lint // src・storiesフォルダ内のjs,tsの品質確認（.mdxを除く、警告ゼロが必須）
npm run lint:fix // src・storiesフォルダ内のjs,tsのコードを修正


#### コンポーネント単体テスト

npm run test // コンポーネント単体テスト (\*.test.tsx) の実行

#### テストカバレッジ

npm run test:coverage // coverage ディレクトリにブラウザで確認可能なHTMLレポートが生成されます。

#### 未テストコンポーネントのリスト

npm run test:check // 未テストコンポーネントのリスト (stories/missing_tests.txt) を更新します。

#### テストカバレッジと未テストチェックを同時に実行

npm run test:report // カバレッジ測定と未テストチェックを同時に実行します。


#### Visual Regression Testing

npm run test:vrt:update //vrt/vrt.spec.ts-snapshots/ ディレクトリの画像を更新(ビルド済みデータと比較)
$env:FILTER='Calendar'; npm run test:vrt:update // Calendarコンポーネントのスナップショットのみ更新

npm run test:vrt //vrt/vrt.spec.ts-snapshots/ //ディレクトリの画像と比較(ビルド済みデータと比較)
npm run test:vrt:report //どこが違うのかを「スライダー形式（画像比較）」で確認

#### VRTの環境変数設定

$env:THEME='light'; //ライトモードのみ実行
$env:THEME='dark'; //ダークモードのみ実行
$env:FILTER='Button'; // Buttonコンポーネントのみ実行
$env:FILTER='Calendar'; // Calendarコンポーネントのみ実行
$env:THEME='light'; $env:FILTER='Button'; // Buttonコンポーネントのライトモードのみ実行
$env:THEME='dark'; $env:FILTER='Calendar'; // Calendarコンポーネントのダークモードのみ実行

$env:THEME=$null; $env:FILTER=$null; // 環境変数をリセット



### コード整形

npm run format // storiesフォルダ内のコードを確認
npm run format:fix // storiesフォルダ内のコードを整形



npm run i18n:sync //翻訳がen, ja, pt すべてのリソースファイルで漏れなく定義されているかを確認

### コンポーネントの階層を確認(Hierarchy & Composition更新用)
node check_hierarchy.js //コンポーネントの階層を確認
node check_hierarchy.js > check_result.txt //コンポーネントの階層を確認し、結果をcheck_result.txtに保存

### git commit時のhuskyのスキップ

commit時にhuskyのスキップをしたい場合は、--no-verifyをつける
git commit -m "commit message" --no-verify

### github pagesへのデプロイ

npm run deploy

## コーディングルール

CSSのクラス名　kebab-case



### 生キーが表示されてしまった時の確認

node check_stories_keys.js

#### 「英語にあるけど日本語にはまだ翻訳がない項目」をまとめて確認したい時の確認

node find_missing_keys.js


#### 全ストーリーのa11yチェック
npx playwright test vrt/a11y.spec.ts

#### 特定コンポーネントだけ（例: Button）
FILTER=Button npx playwright test vrt/a11y.spec.ts