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
| `--wim-font-weight-medium` | 500 | ラベル、強調 |
| `--wim-font-weight-bold` | 700 | 見出し、ボタン |

### 行高

日本語と欧文で異なる行高を提供。日本語は文字が正方形に近いため、欧文よりゆったりとした行高が必要。

| トークン | 値 | 対象言語 | 主な用途 |
|----------|-----|---------|---------|
| `--wim-line-height-tight` | 1.2 | 欧文 | ディスプレイ見出し（Title `xl`〜） |
| `--wim-line-height-snug` | 1.33 | 欧文 | **見出しの既定**（Title・素の `h1`〜`h6`） |
| `--wim-line-height-normal` | 1.4 | 欧文 | 本文 |
| `--wim-line-height-loose` | 1.6 | 欧文 | 長文・入力欄の本文 |
| `--wim-line-height-tight-jp` | 1.4 | 日本語 | ディスプレイ見出し |
| `--wim-line-height-snug-jp` | 1.5 | 日本語 | **見出しの既定** |
| `--wim-line-height-normal-jp` | 1.6 | 日本語 | 本文 |
| `--wim-line-height-loose-jp` | 1.8 | 日本語 | 長文 |

### 字間（letter-spacing）

見出しの主張を強めるためのトラッキング。**欧文は大きいサイズほど字面が空いて間延びするため負トラッキングで締める**。一方、**和文（かな・漢字）は仮想ボディが詰まって見えるため詰めない**（`normal` = 0）。行高と同じく `[lang="ja"]` で出し分ける（規約3）。本文サイズ相当の小見出し（Title `xs`/`sm`）は詰めると可読性が落ちるため `normal`。

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

3. **`lang` 属性に連動して自動で切り替えたい場合**は、最上層の `<html lang="…">` から伝播する `lang` 属性をセレクタで拾う。グローバルな `:root[lang="ja"]` ではなく、コンポーネントのルートに付く `lang` を起点にする。

   ```scss
   .text {
     font-family: var(--wim-font-family-default);
     line-height: var(--wim-line-height-normal);

     &:global([lang="ja"]),
     :global([lang="ja"]) & {
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
| 素の `<h1>`〜`<h6>` | `@layer base`（`src/base.scss`）が `snug` / `[lang="ja"]` は `snug-jp` を当てる。**`reset.css` に入る＝利用者の素マークアップにも効く** | **何も宣言しない**（宣言すると `component` 層のクラスが base に勝ち、base が届かなくなる） |
| `Title` コンポーネント | `title.module.scss` が `snug` / `snug-jp`、ディスプレイ段（`xl`〜）だけ `tight` / `tight-jp` | `Title` に任せる |
| `role="heading"` を載せた `div` / `button` | **base のセレクタは要素名なので構造的に届かない** | 自分で `snug` / `snug-jp` を宣言する |

`tight` 系を使う境目は `Title` の判断に合わせる ── ディスプレイ段（`.xl`＝max 2.6rem ≒ 41.6px）から。**素の見出しの UA 既定は h1 の 32px が最大で `Title` の `.lg`（2rem）と同じ帯**なので、素の h1 も `snug` 側に置く。

和文の出し分けを `lang.scss` に書かないこと。**あのファイルはレイヤー外**で、レイヤー外の宣言は全レイヤーより強いため、`body[lang="ja"] h1` に行高を足すと `@layer component` の `Title` まで上書きしてしまう。base 層に置く。

機械強制: `npm run check:heading-lh`（`audit:lib` と lint-staged に配線済み）。

### テキスト装飾

| トークン | 値 |
|----------|-----|
| `--wim-decoration-underline` | underline |
| `--wim-decoration-line-through` | line-through |

---
