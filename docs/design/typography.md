# タイポグラフィ

> この文書は `DESIGN.md` から切り出したもの（T252・2026-09-20）。
> フォント・サイズ・行高・字間・言語別の出し分けを触るときに読む。
> 値の正本は `tokens/*.json`。
>
> 機械側の担当: `check:mono` / `check:heading-lh` / `check:token-types` /
> `check:scss-refs`。**見出しの行高がどの層で決まるか**（T208）は公開契約なので、
> 変える前に必ずこの文書の該当節を読むこと。

### フォントファミリー

言語ごとに最適なフォントスタックを定義。

| 言語 | トークン | フォントスタック |
|------|----------|----------------|
| デフォルト / EN / PT | `--wim-font-family-default` | Noto Sans, Segoe UI, Roboto, Helvetica Neue, arial, sans-serif |
| 日本語 | `--wim-font-family-ja` | Noto Sans JP, 游ゴシック体, YuGothic, Hiragino Kaku Gothic ProN, メイリオ, sans-serif |

すべてのフォントスタックに絵文字フォント（Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji）を含む。

### フォントサイズ

Major Second (1.125) に近い Type Scale を採用。

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-font-size-3xs` | 0.625rem | 極小注釈 |
| `--wim-font-size-2xs` | 0.702rem | 最小注釈、バッジ内テキスト |
| `--wim-font-size-xs` | 0.79rem | キャプション、ヒント |
| `--wim-font-size-sm` | 0.889rem | 小さめの本文、ラベル |
| `--wim-font-size-md` | 1rem (16px) | 本文テキスト |
| `--wim-font-size-lg` | 1.125rem | やや強調されたテキスト |
| `--wim-font-size-xl` | 1.266rem | サブ見出し |
| `--wim-font-size-2xl` | 1.602rem | セクション見出し |
| `--wim-font-size-3xl` | 2.027rem | ページ見出し |
| `--wim-font-size-4xl` | 2.566rem | ヒーロー見出し |
| `--wim-font-size-5xl` | 3.247rem | ディスプレイ |
| `--wim-font-size-6xl` | 4.11rem | 大型ディスプレイ |
| `--wim-font-size-7xl` | 5.202rem | 特大ディスプレイ |

### フォントウェイト

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-font-weight-normal` | 400 | 本文 |
| `--wim-font-weight-medium` | 500 | 操作のラベル（Button、SegmentedControl、Tabs の未選択、入力系のラベル）、Badge / Tag / Chip |
| `--wim-font-weight-semibold` | 600 | 面の見出し（Dialog、Drawer、Toast、Alert、Banner、Accordion の開いた見出し）、表の見出し、Menu のグループ見出し |
| `--wim-font-weight-bold` | 700 | 文書の見出し（Title）、数値の主役（Stats の値、Countdown）、選択中の TabNavigation（Tabs は選択中も `medium`）、Label / Legend |

ボタンのラベルは medium です（bold ではありません）。semibold は「面の中の見出し」、bold は「ページや数値の主役」という使い分けです。

### 行高

日本語と欧文で異なる行高を提供。日本語は文字が正方形に近いため、欧文よりゆったりとした行高が必要。

| トークン | 値 | 対象言語 | 主な用途 |
|----------|-----|---------|---------|
| `--wim-line-height-tight` | 1.2 | 欧文 | 1 行で詰めて置く短い文字と数字（Countdown の数字・Stats の説明・Tooltip・TabBar の札・Notification の説明・Barcode の値・NodeGraph / TreeDiagram の節点・Markdown の見出し）。Title は使わない（下の「段ごとの比率」） |
| `--wim-line-height-snug` | 1.33 | 欧文 | **素の `h1`〜`h6` の既定**（`reset.css`）と、見出しの役の部品（Alert / Toast の題・ThoughtProcess の見出し・Stats の値）。Title は段を指定しないときの受け皿だけ |
| `--wim-line-height-normal` | 1.4 | 欧文 | 本文 |
| `--wim-line-height-loose` | 1.6 | 欧文 | 長文・入力欄の本文 |
| `--wim-line-height-tight-jp` | 1.4 | 日本語 | 既定で使う部品は無い。利用者が選んだときだけ効く（`Text` の行間の指定・`reset.css` の行間のクラス）。Title の和文の大きい段は、段ごとの比率（1.26〜1.18）を持つ |
| `--wim-line-height-snug-jp` | 1.5 | 日本語 | **素の `h1`〜`h6` の既定**（`reset.css`）と、見出しの役の部品・短い説明（Alert / Toast の題と説明・Drawer / BottomSheet の題など）。Title は段を指定しないときの受け皿だけ |
| `--wim-line-height-normal-jp` | 1.6 | 日本語 | 本文 |
| `--wim-line-height-loose-jp` | 1.8 | 日本語 | 長文 |

### 字間（letter-spacing）

見出しの主張を強めるためのトラッキング。**欧文は大きいサイズほど字面が空いて間延びするため負トラッキングで締める**。一方、**和文（かな・漢字）は仮想ボディが詰まって見えるため詰めない**（`normal` = 0）。行高と同じく `:lang(ja)` で出し分ける（規約3）。本文サイズ相当の小見出し（Title `xs`/`sm`）は詰めると可読性が落ちるため `normal`。

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-letter-spacing-normal` | 0 | 本文・小見出し・和文すべて |
| `--wim-letter-spacing-tight` | -0.01em | 欧文の中〜大見出し（Title 既定） |
| `--wim-letter-spacing-tighter` | -0.02em | 欧文のディスプレイ見出し（Title `xl`〜`xl4`） |

### 言語による行高・フォントファミリーの出し分け規約

「いつ欧文用トークン（`--wim-line-height-normal`）を使い、いつ日本語用（`-jp`）を使うか」は次の優先順位で判断する。**コンポーネント SCSS 内に `i18next` の言語判定ロジックを書かないこと。**

1. **コンポーネントが行高を選べる API を持つ場合は prop に委ねる。**
   例: `Text` は `lineHeight` prop（`normal` / `normal-jp` など）を受け取り、`getLineHeightValue()` が対応するトークンへ解決する。利用側が言語に応じて値を指定する。

2. **本文・複数行テキストを内包するコンポーネントは、既定で `-jp`（広いほう）を採用する。**
   日本語は字形が正方形に近く詰まって見えるため、CJK・欧文混在のテキストでは広い行高のほうが安全。`List`, `status-content` の `.description` 等はこの方針で `--wim-line-height-normal-jp` を直接使用している。

3. **`lang` 属性に連動して自動で切り替えたい場合**は、`:lang(ja)` で拾う。`:lang()` は**一番近い `lang`** を見るので、ja のページの中に置いた `lang="en"` の区画では欧文の値に戻り、`lang="ja-JP"` も拾う。祖先セレクタ（`:global([lang="ja"]) &`）は祖先のどこかに `lang="ja"` があれば当たるため、入れ子の区画で誤る（T348）。

   ```scss
   .text {
     font-family: var(--wim-font-family-default);
     line-height: var(--wim-line-height-normal);

     &:lang(ja) {
       font-family: var(--wim-font-family-ja);
       line-height: var(--wim-line-height-normal-jp);
     }
   }
   ```

### 見出しの行高はどの層で決まるか（T208・公開契約）

`line-height` は単位なし＝比率なので、宣言が無ければ子孫が自分の font-size に掛ける。`lang.scss` は `body` に `--wim-line-height-normal`（1.4 / ja は 1.6）を配るため、**何もしない見出しは本文の比率のまま間延びする** ── 実測で素の `<h1>`（UA 既定 2em＝32px）は行送り 44.8px / ja 51.2px だった。

解く層は要素で決まる。

| 見出しの書き方 | 行高を決める場所 | コンポーネント側ですること |
|---|---|---|
| 素の `<h1>`〜`<h6>` | `@layer base`（`src/base.scss`）が `snug` / `:lang(ja)` は `snug-jp` を当てる。**`reset.css` に入る＝利用者の素マークアップにも効く** | **何も宣言しない**（宣言すると `component` 層のクラスが base に勝ち、base が届かなくなる） |
| `Title` コンポーネント | `title.module.scss` の `$line-heights` が、段ごとに単位のない比率を当てる（下の表）。トークンは使わない | `Title` に任せる |
| `role="heading"` を載せた `div` / `button` | **base のセレクタは要素名なので構造的に届かない** | 自分で `snug` / `snug-jp` を宣言する |

**`Title` は段ごとの比率を持つ**（2026-10-30・ユーザー判断）。比率を固定すると、字が大きいほど行の間の空きも比例して開き、間延びして見える。そこで大きい段ほど比率を下げる。

| 段 | xs | sm | md | lg | xl | 2xl | 3xl | 4xl |
|---|---|---|---|---|---|---|---|---|
| 欧文 | 1.35 | 1.29 | 1.24 | 1.20 | 1.17 | 1.14 | 1.12 | 1.11 |
| 和文 | 1.50 | 1.42 | 1.35 | 1.30 | 1.26 | 1.22 | 1.20 | 1.18 |

- 値は「1.05em + 0.3rem」（和文は「1.1em + 0.4rem」）を各段の最大の font-size で評価し、小数 2 桁に丸めたもの。**式（`calc()`）のまま当てない** ── 長さになり、子孫へ px で受け継がれる
- `xl`〜 は font-size が viewport で縮むが、比率は最大の端で決めている（小さい端ではやや緩くなる側にずれる）
- 公開トークンにはしない（`Title` だけの値。テーマで上書きしたい要望が出たら、そのときにトークンへ上げる。逆向きは破壊的変更になる）

**素の `<h1>`〜`<h6>` は段ごとにしない。** base の規則は要素名で当たり、実際の font-size を知らない（`Dialog` の題は `<h2>` でも 18px 前後で描かれる）。UA 既定の大きさで決め打ちすると、ずれた値が当たる。`snug`（1.33 / ja 1.5）は `Title` の小さい段（xs / sm）とほぼ同じなので、そのまま置く。

和文の出し分けを `lang.scss` に書かないこと。**あのファイルはレイヤー外**で、レイヤー外の宣言は全レイヤーより強いため、`body[lang] h1:lang(ja)` に行高を足すと `@layer component` の `Title` まで上書きしてしまう。base 層に置く。

機械強制: `npm run check:heading-lh`（`audit:lib` と lint-staged に配線済み）。

### テキスト装飾

| トークン | 値 |
|----------|-----|
| `--wim-decoration-underline` | underline |
| `--wim-decoration-line-through` | line-through |

---
