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

npm run test // コンポーネント単体テスト (\*.test.tsx) の実行

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

### github pagesへのデプロイ

npm run deploy

## コーディングルール

CSSのクラス名　kebab-case
