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
npm run lint // storiesフォルダ内のjs,tsの品質確認
npm run lint:fix // storiesフォルダ内のjs,tsのコードを修正

#### コンポーネント単体テスト
npm run test // コンポーネント単体テスト (*.test.tsx) の実行

#### Visual Regression Testing
npm run test:vrt:update //vrt/vrt.spec.ts-snapshots/ ディレクトリの画像を更新(ビルド済みデータと比較)
$env:FILTER='Calendar'; npm run test:vrt:update // Calendarコンポーネントのスナップショットのみ更新


npm run test:vrt //vrt/vrt.spec.ts-snapshots/ //ディレクトリの画像と比較(ビルド済みデータと比較)
npm run test:vrt:report //どこが違うのかを「スライダー形式（画像比較）」で確認



$env:THEME='light'; npm run test:vrt //ライトモードのみ実行
$env:THEME='dark'; npm run test:vrt //ダークモードのみ実行
$env:FILTER='Button'; npm run test:vrt // Buttonコンポーネントに関連するテストのみ実行
$env:FILTER='Calendar'; npm run test:vrt // Calendarコンポーネントのみ実行
$env:THEME='light'; $env:FILTER='Button'; npm run test:vrt // Buttonコンポーネントのライトモードのみ実行
$env:THEME='dark'; $env:FILTER='Calendar'; npm run test:vrt // Calendarコンポーネントのダークモードのみ実行

$env:THEME=$null; $env:FILTER=$null; npm run test:vrt // 環境変数をクリアして全テスト実行(同じターミナルウィンドウで続けて全テストを実行したい場合)


### コード整形
npm run format // storiesフォルダ内のコードを確認
npm run format:fix // storiesフォルダ内のコードを整形




### github pagesへのデプロイ

npm run deploy

## コーディングルール

CSSのクラス名　kebab-case
