# WIM UI デザインガイド

このドキュメントは WIM UI のデザインに関する意思決定と仕様をまとめたものです。コーディングルールは `RULES.md`、実装手順は `SKILLS.md` を参照してください。

---

## デザイン原則

1. 一貫性 -- すべての UI 要素はデザイントークンを通じて統一されたビジュアル言語を共有する
2. アクセシビリティ -- WCAG AA 準拠のコントラスト比と WAI-ARIA パターンを前提とする
3. テーマ適応性 -- ライトモード/ダークモードの切り替えはセマンティックトークンのみで完結する
4. 多言語対応 -- 日本語・英語・ポルトガル語の 3 言語を基本とし、言語ごとのタイポグラフィ特性を考慮する
5. レスポンシブ -- デスクトップ/モバイルの両方で最適な体験を提供する

---

## カラーシステム

### PCCS カラーパレット

WIM UI のカラー基盤は PCCS（Practical Color Co-ordinate System） に基づいています。24 色相を軸に 12 トーン（明度・彩度の組み合わせ）を展開し、合計 約 300 色 のパレットを保持しています。

| トーン | 略称 | 特徴 | 用途例 |
|--------|------|------|--------|
| Vivid | `v` | 最高彩度、鮮やか | ライトの primary / danger / warning / info 塗り、ダークの primary など |
| Bright | `b` | 明るく鮮やか | ダークモード Accent、Avatar |
| Strong | `s` | やや暗く力強い | success 塗り（白文字 AA 用）。テキスト用の一段暗いトーンにも使う |
| Deep | `dp` | 深く落ち着いた色 | 強調背景 |
| Light | `lt` | 明るく柔らか | ホバー状態、淡いアクセント |
| Soft | `sf` | くすんだ柔らかさ | 控えめな装飾 |
| Dull | `d` | 渋い落ち着き | 重厚な UI |
| Dark | `dk` | 暗いトーン | ダークモード背景 |
| Pale | `p` | パステル調 | チャットバブル、薄い背景 |
| Light Grayish | `ltg` | 明るいグレー寄り | 微細な差別化 |
| Grayish | `g` | グレー寄り | ニュートラル要素 |
| Achromatic | `w`, `gy*`, `bk` | 無彩色 | テキスト、背景、ボーダー |

### セマンティックカラー

生色（Palette）をそのまま使用せず、意味に基づくセマンティックトークンに変換して使用します。

#### インテントカラー

| 意味 | トークン | ライトモード | ダークモード |
|------|----------|-------------|-------------|
| Primary | `--wim-color-primary` | `v16` (#055d87) | `v16` (#055d87) |
| Danger | `--wim-color-danger` | `v1` (#d40045) | `lt2` (#fb7482) |
| Success | `--wim-color-success` | `s12` (#28853f) | `s12` (#28853f) |
| Warning | `--wim-color-warning` | `v6` (#ff7f00) | `v7` (#ffcc00) |
| Info | `--wim-color-info` | `v18` (#0f218b) | `v17` (#093f86) |

ライトの intent 塗りは原則 Vivid。success だけ Strong（`s12`）で、solid 上の白文字 AA を確保する。ダークは背景との差のため Light / Vivid へ切り替える（danger は `lt2`、warning は `v7`）。

**インテント色は塗り専用。** テキストに使うと WCAG AA を満たさない組合せが多い
（例: warning `#ff7f00` は白背景でも約 2.5:1）。テキストには次の `text-*` トークンを使う。
outline/subtle バリアントの文字色も intents SSOT の `text` ロール経由でこれらに解決される。

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| アクセントテキスト（primary 系） | `--wim-color-text-accent` | = primary | #97cbe0 |
| 成功テキスト | `--wim-color-text-success` | `dp12` (#306f42) | `lt12` (#7fc97e) |
| 警告テキスト | `--wim-color-text-warning` | `dk8` (#6a5b18) | `lt7` (#fcd474) |
| 情報テキスト | `--wim-color-text-info` | = info | `p18` (#b3cee3) |

#### テキストカラー

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| 主要テキスト | `--wim-color-text-primary` | `bk` (#000) | `w` (#fff) |
| 補助テキスト | `--wim-color-text-secondary` | `gy3-5` (#393939) | `gy8-5` (#e5e5e5) |
| 三次テキスト | `--wim-color-text-tertiary` | `gy5-5` (#646464) | #c4c4c4 |
| 無効テキスト（通常面） | `--wim-color-text-disabled` | `gy6-5` (#8a8a8a) | `gy6-5` (#8a8a8a) |
| 無効フィル上の文字 | `--wim-color-text-on-disabled` | `gy3-5` (#393939) | `gy8-5` (#e5e5e5) |
| エラーテキスト | `--wim-color-text-danger` | `dp2` (#9d002b) | #ff8c8c |
| プレースホルダー | `--wim-color-text-placeholder` | = text-tertiary | = text-tertiary |

**disabled テキストの使い分け（公開契約）**

| トークン | いつ使うか |
|----------|------------|
| `--wim-color-text-on-disabled` | 背景が `--wim-color-disabled` のとき（solid Button / Input 系の disabled フィル上）。`text-on-*` ファミリー |
| `--wim-color-text-disabled` | 通常サーフェス上の無効・非活性テキスト（outline/ghost Button、Chip/Tag、Tabs、Pagination、Icon `color="disabled"` など） |

`--wim-color-disabled` 自体は**塗り**用。テキスト色に使わない。

Avatar の default は意図的に disabled フィル＋`text-on-disabled` を流用（中立クローム）。新規の「ニュートラル」トークンは増やさない。

#### サーフェスカラー

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| アプリ背景 | `--wim-color-surface-app` | `gy9-5` (#f5f5f5) | `gy2-5` (#262626) |
| コンポーネント背景 | `--wim-color-surface` | `w` (#fff) | `gy3-5` (#393939) |
| セカンダリ背景 | `--wim-color-surface-variant` | `gy8-5` (#e5e5e5) | `gy4-5` (#4f4f4f) |
| ホバー背景 | `--wim-color-surface-hover` | primary 8% | primary 12% |
| ボーダー | `--wim-color-border` | `gy7-5` (#b6b6b6) | `gy5-5` (#646464) |

ライトテーマは「灰のキャンバス（`surface-app`）+ 白のカード（`surface`）」で階層を作る。かつては両者とも `#fff` で階層が視覚的に存在せず、パターン側がグラデーション等を即興する原因になっていた（2026-07-16 に `surface-app` を `w` → `gy9-5` へ変更。ダークは従来から `#262626` / `#393939` で階層あり）。

#### サーフェス語彙（正規名）

公開サーフェスは `surface*` に統一（旧 `bg-app` / `bg-subtle` / `bg-void` / `bg-inverted` 等は廃止）。

| 用途 | トークン |
|------|----------|
| アプリ面 | `--wim-color-surface-app` |
| コンポーネント面 | `--wim-color-surface` |
| セカンダリ面 | `--wim-color-surface-variant` |
| 三次面 | `--wim-color-surface-tertiary` |
| ホバー面 | `--wim-color-surface-hover` |
| 薄いソリッド面 | `--wim-color-surface-subtle` |
| 薄い半透明面 | `--wim-color-surface-subtle-alpha` |
| 反転面 | `--wim-color-surface-inverse` |
| ヴォイド（黒アンカー） | `--wim-color-surface-void` |
| インセット面 | `--wim-color-surface-inset` |
| ガラス面 | `--wim-color-glass-bg` |
| 絶対白 | `--wim-color-white` |
| 反転面上の文字 | `--wim-color-text-on-inverse` / `--wim-color-text-muted-on-inverse` |

Intent 状態: `primary-hover` / `primary-active` / `primary-muted` / `primary-soft` / `primary-subtle` / `primary-fill`（ダークで面寄りに変わる塗り）。  
Overlay: `overlay` / `overlay-soft` / `overlay-strong` / `overlay-medium` / `overlay-sidebar`。

### 不透明度の扱い（RGB トークン）

上記のセマンティックカラーは HEX で定義されていますが、**不透明度（アルファ）を伴う色を作る場合は HEX をハードコードせず、自動生成される RGB トークンを使用すること。** `tokens:build` は各色について `R, G, B` のカンマ区切り値を持つ `*-rgb` トークン（`src/tokens/generated/_css-vars-rgb.scss`）を生成します。

```scss
// ✅ rgba() で不透明度を付与する場合は RGB トークンを使う
background: rgba(var(--wim-color-primary-rgb), 0.12);

// ✅ color-mix() で透明・他色と混ぜる場合はセマンティックトークンをそのまま渡す
background: color-mix(in srgb, var(--wim-color-primary) 12%, transparent);

// ❌ HEX をハードコードしない（テーマ切替・トークン変更に追従できない）
background: rgba(32, 91, 133, 0.12);
```

`*-rgb` トークンはライト/ダーク双方（`_css-vars-rgb.scss` / `_css-vars-rgb-dark.scss`）で生成されるため、`rgba(var(--wim-color-primary-rgb), …)` だけでテーマ追従も自動的に成立します。

### 特殊なカラーカテゴリ

#### Ghost（ゴースト）

透明に近い背景とボーダーで控えめな存在感を示すスタイル。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-ghost-bg` | rgba(0,0,0, 0.03) | rgba(255,255,255, 0.06) |
| `--wim-color-ghost-border` | rgba(0,0,0, 0.08) | rgba(255,255,255, 0.15) |
| `--wim-color-ghost-bg-hover` | rgba(0,0,0, 0.05) | rgba(255,255,255, 0.08) |
| `--wim-color-ghost-bg-active` | rgba(0,0,0, 0.12) | rgba(255,255,255, 0.12) |

#### Glass（ガラス）

半透明のすりガラス効果。`backdrop-filter: blur()` と組み合わせて使用。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-glass-bg` | rgba(255,255,255, 0.7) | rgba(20,20,20, 0.75) |
| `--wim-color-glass-border` | rgba(0,0,0, 0.12) | rgba(255,255,255, 0.15) |
| `--wim-color-shadow-glass` | `--wim-shadow-md` | 独自の深い影 |

#### Skeleton

ローディング中のスケルトン表示用。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-skeleton-shine` | rgba(255,255,255, 0.3) | rgba(255,255,255, 0.08) |

#### Overlay

モーダルやドロワーの背景オーバーレイ。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-overlay` | rgba(0,0,0, 0.5) | rgba(0,0,0, 0.7) |
| `--wim-color-overlay-soft` | rgba(255,255,255, 0.8) | rgba(255,255,255, 0.2) |
| `--wim-color-frosted-bg` | overlay-soft | surface 60% |

#### Feedback / コンポーネント固有色

Alert / Banner / Toast 等のバリアント色は、公開 role トークン（`info` / `success` / `danger` 等）と `color-mix()` で組み立てる。avatar / heatmap / carousel / chat-bubble / terminal / overlay-control などコンポーネント固有色は公開契約外（`--wim-comp-*`、テーマ上書き対象外）。

---

## テーマシステム

### 公開契約（名前を変えない）

| 項目 | 契約 |
|------|------|
| React 正面 API | `WimProvider`（`theme` / `density` / `locale`）。`useWim` で参照 |
| 命令型 API | `setWimTheme` / `setWimDensity` / `setWimLocale` |
| CSS エントリ | `wimui/styles.css`（必須・トークン+コンポーネント）・`wimui/reset.css`（任意） |
| テーマ属性 | `data-theme`（別名不可）。正規の載せる先は `<html>` / `document.documentElement` |
| 密度属性 | `data-density`（`comfortable` \| `compact`） |
| UMD | `wimui.umd.css` は上記 3 CSS を同梱 |

属性契約は変えない。React アプリでは Provider を推奨。

### 切り替えメカニズム

| 方式 | 適用条件 |
|------|----------|
| `:root` | ライトモードのデフォルト値 |
| `[data-theme="dark"]` | 明示的にダークモードを指定した場合（`<html>` または子孫のダーク島） |
| `@media (prefers-color-scheme: dark)` + `:root:not([data-theme="light"])` | OS設定に連動する自動ダークモード |

`data-theme` 未指定 → OS 追従。`ThemeToggle`（`applyToDocument`）は `light`/`dark` で属性を書き、`system` で外す。

詳細ドキュメント: Storybook **Token → Theme** / **Token → Density**、Getting Started → Installation。

### テーマ切替トランジション

`:root` に定義された `--wim-theme-transition` で、テーマ切り替え時のやわらかなアニメーションを実現。

```css
--wim-theme-transition: background-color 0.2s ease, border-color 0.2s ease, color 0.15s ease;
```

### コンポーネントでの対応

コンポーネントの SCSS に `[data-theme="dark"]` や `@media (prefers-color-scheme: dark)` を書かない。セマンティックトークンを使用するだけでライト/ダーク両モードに自動で対応する。

### テーマプリセット（ブランドキット）

`data-wim-preset`（`WimProvider` の `preset` prop / `setWimPreset`）で、画面の**形（角丸）とアクセント**を1属性で切り替える。`styles.css` に**重ねる**レイヤーで、テーマ・密度と直交して合成し、サブツリー単位でも適用できる（マーケ区画だけ別の雰囲気、など）。

- **公開契約**: `data-wim-preset` の値は `minimal` / `soft` / `bold`（+ 未指定＝既定）。属性契約は `data-theme` / `data-density` と同格。`styles.css` 必須は不変（プリセット CSS はその中に同梱）。
- **単一ソース生成**: `tokens/presets/*.json`（角丸 + PCCS 参照のアクセント）→ `npm run tokens:build`（`scripts/generate-presets.js`）で `src/tokens/generated/_presets.scss`（`[data-wim-preset]` レイヤー）と `presets.ts`（`WIM_PRESETS` / `WimPresetName`）を生成。**新しい基底トークンは足さない**（role トークンの上書きのみ）。
- **上書き対象**: `--wim-radius-component|container|overlay`、アクセントを持つプリセットは `--wim-color-primary`（+ `-rgb`。hover/active・primary-soft 等の派生は自動追従）。アクセントは**ライト/ダーク共通の単一値**（テーマ別分岐なし）。
- **a11y 契約**: アクセントは PCCS の中トーンから、**4 条件すべてが AA** を満たす値のみ採用＝①塗り上の白文字（両テーマ）②リンク文字（`color-mix(primary 50%, text-primary)`）が白カード上 ③同・ダークカード（`#393939`）上。1 値で両テーマを満たすため `text-accent` の上書きや `data-theme` 別セレクタは不要。※Link の hover（`l*0.9`）は axe 非対象かつ既定テーマと同特性のため対象外。
- **VRT**: プリセット CSS は `[data-wim-preset]` 配下でのみ発火するため、属性を持たない既存ストーリーのスナップショットは不変（差分ゼロ）。可視化は `Token/Presets` ストーリー1本に集約（＝VRT/a11y の増分はこの1ストーリーのみ）。

---

## タイポグラフィ

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

## スペーシングシステム

### 間隔

Major Second (1.125) に近い比率に基づく、意図的にコンパクトなスケール。8px グリッドに沿う段（`md` = 8px、`2xl` = 16px）と、それを補間する非整数の段（`xs` = 4.8px、`sm` = 6.4px 等）が混在する。`3xs` / `2xs` はそれぞれ `fine` / `quarter` のエイリアス。

> **制約:** 余白（`margin` / `padding` / `gap` 等）は必ずこれらのトークンを使用し、`8px` や `12px` のような数値を手動でハードコードしてはならない。「8px ベースで」のような口頭指示を受けても、最も近い spacing トークンに置き換えること（例: 8px → `--wim-spacing-md`、16px → `--wim-spacing-2xl`）。

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-spacing-hairline` | 0.0625rem (1px) | 極細境界線、ヘアライン |
| `--wim-spacing-3xs` | 0.125rem (2px) | 最小マイクロ間隔 |
| `--wim-spacing-2xs` | 0.25rem (4px) | アイコン間隔 |
| `--wim-spacing-xs` | 0.3rem (4.8px) | インライン要素間 |
| `--wim-spacing-sm` | 0.4rem (6.4px) | タイトなパディング |
| `--wim-spacing-md` | 0.5rem (8px) | 標準パディング |
| `--wim-spacing-lg` | 0.625rem (10px) | ゆったりとしたパディング |
| `--wim-spacing-xl` | 0.75rem (12px) | セクション内間隔 |
| `--wim-spacing-2xl` | 1rem (16px) | カード内余白 |
| `--wim-spacing-3xl` | 1.4rem (22.4px) | セクション間隔 |
| `--wim-spacing-4xl` | 1.8rem (28.8px) | 大きな区切り |
| `--wim-spacing-5xl` | 2.2rem (35.2px) | ページレベルの余白 |

### 角丸

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-radius-sm` | 2px | 微小な角丸（Badge, Chip） |
| `--wim-radius-md` | 4px | 標準角丸（Input, Card） |
| `--wim-radius-lg` | 8px | 目立つ角丸（Dialog, Toast） |
| `--wim-radius-xl` | 12px | 大きな角丸（Card, Modal 等） |
| `--wim-radius-2xl` | 16px | より大きな角丸（モバイルカード等） |
| `--wim-radius-full` | 9999px | 完全な丸（Avatar, Pill） |

値ベースのトークンを直接使わず、役割ベースのセマンティックエイリアスを優先する。

| エイリアス | 参照先 | 用途 |
|-----------|--------|------|
| `--wim-radius-component` | `--wim-radius-md` (4px) | Button, Input, Tag など |
| `--wim-radius-overlay` | `--wim-radius-lg` (8px) | Tooltip, Popover など浮遊要素 |
| `--wim-radius-container` | `--wim-radius-xl` (12px) | Card, Modal など大きな親要素 |

### ボーダー幅

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-border-width-thin` | 1px | 標準ボーダー |
| `--wim-border-width-thick` | 2px | アクティブ状態、区切り線 |

### フォーカスリング

| トークン | 値 |
|----------|-----|
| `--wim-focus-outline-width` | 2px |
| `--wim-focus-outline-offset` | 2px |

---

## エフェクト

### シャドウ

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-shadow-none` | none | フラット |
| `--wim-shadow-xs` | 0 1px 2px rgba(0,0,0,0.05) | 微小な浮き（Badge, Chip） |
| `--wim-shadow-sm` | 0 2px 4px rgba(0,0,0,0.08) | カード、ドロップダウン |
| `--wim-shadow-md` | 0 4px 12px rgba(0,0,0,0.12) | モーダル、ポップオーバー |
| `--wim-shadow-lg` | 0 12px 24px rgba(0,0,0,0.16) | ドロワー、全画面オーバーレイ |
| `--wim-shadow-inset` | inset 0 2px 4px rgba(0,0,0,0.06) | 押し込み効果 |
| `--wim-shadow-focus` | 0 0 0 2px #fff, 0 0 0 4px var(--wim-color-primary-alpha) | フォーカス外枠 |

### 透明度

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-opacity-disabled` | 0.6 | 無効状態のコンポーネント |
| `--wim-opacity-ghost` | 0.5 | ゴーストバリアント |
| `--wim-opacity-secondary` | 0.7 | セカンダリ要素 |

---

## モーション

### デュレーション

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-duration-ultra-fast` | 83ms | マイクロインタラクション |
| `--wim-duration-fast` | 167ms | ボタンフィードバック |
| `--wim-duration-base` | 250ms | 標準アニメーション |
| `--wim-duration-slow` | 333ms | モーダル開閉 |

### イージング

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-easing-standard` | cubic-bezier(0.55, 0, 0.1, 1) | 汎用トランジション |
| `--wim-easing-entrance` | cubic-bezier(0, 0, 0, 1) | 画面に入る |
| `--wim-easing-exit` | cubic-bezier(1, 0, 1, 1) | 画面から出る |
| `--wim-easing-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | バウンス効果 |

### Lift（浮き上がり）

ホバー時に要素を微妙に浮かせる `translateY` 値。

| トークン | 値 |
|----------|-----|
| `--wim-lift-sm` | -1px |
| `--wim-lift-md` | -1.5px |
| `--wim-lift-lg` | -2px |
| `--wim-lift-none` | 0 |

### Scale（縮小）

押下時のフィードバック用。

| トークン | 値 |
|----------|-----|
| `--wim-scale-active` | 0.98 |

### 採らない演出（対応予定なし）

**動かすのは状態が変わったときだけ。** 動きが内容の変化に対応していない演出は、他所の体系に定番として存在していても採らない。これは実装の遅れではなく決定なので、「無い」ではなく「採らない」と書く。

| 呼び名 | 採らない理由 | 代わりに |
|--------|-------------|---------|
| Parallax Scrolling | 背景と前景をスクロール速度差で動かす。動きが内容の変化に対応していない。スクロール位置を伝えたいなら位置そのものを出す | `ScrollProgress` |
| Text Scramble | 確定するまで文字をランダムに入れ替える。読み手は同じ文を 2 度読むことになり、可読性を落とした分の見返りが無い | `StreamingText` |
| Spring Animation | 質量・剛性・減衰を prop で受ける物理アニメーション基盤。バウンスの曲線自体は既にトークンにあり、押下やスワイプの戻りはこれで足りる。基盤を持つと物理パラメータが公開契約に増え、CSS で完結していたモーションが JS 依存になる | `--wim-easing-spring` |

単体では非対応でも、**組み合わせで再現しようとするのも同じく対象外**。SSOT は `src/data/not-planned.json` で、`llms.txt` の "Not in scope" 節と `check:aliases` がここから導かれる（別名が既存コンポーネントと衝突しないこと・理由と代替が空でないことを検証する）。

**やらないこと（エージェント）**: 上記 3 つの実装・自作での代替（rAF ループでの物理計算、文字の入れ替えアニメーション、スクロール連動の背景移動）の勝手な着手。

---

## Z-Index レイヤー

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-z-sidebar` | 900 | サイドバー（非オーバーレイ時） |
| `--wim-z-overlay` | 1000 | Dialog, Drawer, Dropdown, Tooltip, Popover |
| `--wim-z-overlay-panel` | 1001 | オーバーレイ上に重なるパネル |
| `--wim-z-overlay-step` | 1002 | Tour ステップバブル |
| `--wim-z-toast` | 9999 | Toast, Snackbar, Notification（常に最前面） |

---

## レスポンシブデザイン

### ブレークポイント

| トークン | 値 |
|----------|-----|
| `--wim-breakpoint-sm` | 576px |
| `--wim-breakpoint-md` | 768px |
| `--wim-breakpoint-lg` | 992px |
| `--wim-breakpoint-xl` | 1200px |

### クエリの使い分け

| 用途 | クエリ種別 | SCSS mixin |
|------|-----------|------------|
| ビューポート全体に依存するレイアウト | メディアクエリ | `@include up()` / `@include down()` |
| ページ内に配置される UI コンポーネント | コンテナクエリ | `@include container-up()` / `@include container-down()` |

---

## コンポーネント設計原則

### コンポーネントサイズ

| 用途 | 値 | 型 |
|------|-----|-----|
| UI コンポーネント | `sm`, `md`, `lg` | `ComponentSize` |
| レイアウト | `xs`, `sm`, `md`, `lg`, `xl` | - |

### バリアント体系

| 対象 | 型名 | 値 |
|------|------|-----|
値は `src/types/generated-intents.ts`（`tokens/intents.json` から生成）と `src/types/tokens.ts` の実物。

| 対象 | 型名 | 値 |
|------|------|-----|
| Button 系 | `ButtonVariant` | `solid`, `outline`, `ghost` |
| Button 意図 | `ButtonIntent` | `default`, `danger`, `success` |
| フィールド系 | `FieldVariant` | `outline`, `ghost` |
| フィールド意図 | `FieldIntent` | `default`, `danger` |
| インジケータ系 | `IndicatorVariant` | `solid`, `outline`, `subtle` |
| インジケータ意図 | `IndicatorIntent` | `primary`, `success`, `warning`, `danger`, `info`, `neutral` |
| フィードバック意図 | `FeedbackIntent` | `default`, `info`, `success`, `warning`, `danger` |
| 横断（全体語彙） | `WimIntent` | `primary`, `success`, `warning`, `danger`, `info`, `neutral`, `default` |

**この表は 2026-08-09 まで 5 箇所ずれていた。** `IndicatorStatus` / `FeedbackStatus` / `FieldStatus` という型は存在せず（実物は `*Intent`）、`ButtonIntent` の値は `destructive` / `positive` ではなく `danger` / `success`、状態系の `error` は全て `danger`。`secondary` intent の廃止（T101 ②）で表を触った際に、隣の行も全部間違っていることに気付いた。**型名が実在しないので、読者が grep しても何も出てこない状態だった。**

### ポリモーフィズム

`asChild` prop と `@radix-ui/react-slot` による Slot パターンを採用。

### コンポーネントの使い分けガイドライン

#### Tag vs Chip
両者は似ていますが、以下のセマンティクスに基づき使い分けます。

| 特徴 | Tag | Chip |
| :--- | :--- | :--- |
| **役割** | 分類・属性の表示 (Labeling) | 選択・操作の対象 (Token) |
| **形状** | 角丸が小さい (`radius-sm`) | 完全な丸 / ピル型 (`radius-full`) |
| **主な用途** | 記事のタグ、ステータスラベル | フィルタ、参加者、複数選択肢 |
| **インタラクション** | 削除のみをサポート | 選択状態、クリック、アバターをサポート |

---

## コンポーネントカタログ

> **注意（実装状況とインポートの扱い）:** ここに列挙するコンポーネントは WIM UI が最終的に内包する**標準ターゲットの仕様一覧**であり、すべてが実装済みであることを意味しない。存在を推測して未実装コンポーネントを勝手にインポートしない（例: `import { CopyButton } from '...'`）。目的のコンポーネントが未実装の場合は、新規に作成するか、既存の最小部品（`InputBase`, `Button` 等）を組み合わせて構築すること。実装済みかどうかは `src/<category>.ts` のエクスポートおよび `src/data/components.json` を正とする。

### Form（フォーム）-- 47 コンポーネント

Button, ButtonGroup, Cascader, Checkbox, CheckboxGroup, ColorInput, ColorPicker, Combobox, CopyButton, DatePicker, DateRangePicker, Dropzone, FieldError, FieldTemplate, Fieldset, FileUpload, FloatButton, IconButton, Input, InputBase, InputGroup, InputMask, LinkButton, Mentions, MultiSelect, NumberInput, OtpInput, PasswordInput, PhoneInput, QueryBuilder, Radio, RadioGroup, RangeSlider, Rating, RichTextEditor, SearchInput, SegmentedControl, Select, SignaturePad, Slider, Switch, SwitchGroup, Textarea, TimePicker, ToggleGroup, Transfer, TreeSelect

### Data Display（データ表示）-- 25 コンポーネント

Accordion, Avatar, AvatarGroup, Badge, Calendar, Card, Carousel, ChatUI, Chip, DataGrid, DescriptionList, EmptyState, FAQSection, InfiniteScroll, Kanban, List, Markdown, Marquee, QRCode, RangeCalendar, Stats, Table, Tag, Timeline, TreeView, VirtualList

### Feedback（フィードバック）-- 15 コンポーネント

Alert, Banner, ErrorBoundary, Indicator, Loader, LoadingOverlay, Notification, Progress, Result, ScrollProgress, Skeleton, Snackbar, Spinner, Toast, Tour

### Layout（レイアウト）-- 23 コンポーネント

AppShell, AspectRatio, BentoGrid, Box, Center, Container, Divider, Flex, Footer, Grid, Group, Header, InteractiveArea, Masonry, Navbar, ScrollArea, Sidebar, SimpleGrid, Splitter, Stack, Transition, VisuallyHidden, Watermark

### Navigation（ナビゲーション）-- 12 コンポーネント

Affix, Anchor, BackTop, Breadcrumb, CommandPalette, HamburgerMenu, Link, Pagination, Stepper, TabBar, TabNavigation, Tabs

### Overlay（オーバーレイ）-- 12 コンポーネント

BottomSheet, ContextMenu, Dialog, Drawer, Dropdown, FocusTrap, HoverCard, Menu, Popconfirm, Popover, Portal, Tooltip

### Typography（タイポグラフィ）-- 9 コンポーネント

Blockquote, Code, Highlight, Kbd, Label, Legend, Span, Text, Title

### Media（メディア）-- 4 コンポーネント

Audio, Icon, Image, Video

### Charts（チャート）-- 11 コンポーネント

AreaChart, BarChart, FunnelChart, GanttChart, GaugeChart, Heatmap, LineChart, PieChart, RadarChart, ScatterChart, Treemap

**色は系列を指す唯一の手がかりにしてはならない。** 実装で持っている手がかりは 3 通りある。

1. **凡例** ── 色相で系列を区別するチャートは、凡例を無条件で描く（`AreaChart` / `BarChart` / `LineChart` / `PieChart` / `RadarChart`）。**消す prop を足してはならない** ── 消せるようにした時点で `check:chart-palette` が落ちる。
2. **マークの上の名前** ── `Treemap` はタイルの上に、`FunnelChart` は段の右に名前を出す。1 色相の濃淡なので凡例では区別が付かず、**名前が唯一の手がかり**になる。狭くて名前が入らないなら、そのチャート種はその枠に合っていない（`Treemap` は入らないぶんを省略して見せる）。
3. **軸・行のラベル** ── `Heatmap` は X / Y の目盛りラベル、`GanttChart` は左の行ラベル列で引く。**マークの上には名前が無い**が、位置がラベルと対応しているので色に頼らない。

**この 3 つ以外の手がかりは実装していない。** 特に、1 のチャートで**マークの上に系列名を書くこと（on-mark label）は行っていない**（2026-08-12・T156）。折れ線や面が重なると衝突し、置き場所もチャートごとに違うため。**1 の識別は凡例 1 本で成り立っている。**

なお **dark では `chart-info` / `chart-success` / `chart-danger` が地に対して 3:1 に届かない**。これは選び直しでは解けないと実測したうえで**承知で受け入れている**（T152・案①）。**凡例が保証するのは「どれがどれか」であって「マークが見えるか」ではない**ので、暗い地の上で細いマークを使う画面では、線を太くする・点を大きくするなど**寸法の側で補うこと**。

---

## トークンパイプライン

### アーキテクチャ

```
tokens/                 (JSON: Single Source of Truth)
  color/base.json       生色パレット (PCCS)
  color/semantic.json   セマンティックカラー (ライトモード)
  themes/dark.json      ダークモードオーバーライド
  spacing.json          Spacing / Radius / Border / Focus
  effects.json          Shadow / Opacity / Z-Index / Motion
  typography.json       Font Family / Size / Weight / Line Height
  breakpoints.json      ブレークポイント

      |  npm run tokens:build (Style Dictionary)
      v

src/tokens/generated/       (自動生成)
  _tokens.scss              SCSS 変数（ライト）
  _tokens-dark.scss         SCSS 変数（ダーク）
  _css-vars.scss            :root に展開される CSS カスタムプロパティ
  _css-vars-dark.scss       [data-theme="dark"] + @media 用
  _css-vars-rgb.scss        RGB 値変数（ライト）
  _css-vars-rgb-dark.scss   RGB 値変数（ダーク）

src/types/generated-tokens.ts  TypeScript 型定義（自動生成）
```

### トークン追加の流れ

1. `tokens/` 配下の適切な JSON ファイルにトークンを追記
2. `npm run tokens:build` を実行
3. `src/tokens/generated/` と `src/types/generated-tokens.ts` が自動更新
4. コンポーネントで `var(--wim-[カテゴリ]-[意味])` として使用

---

## CSS アーキテクチャ

### スタイリング方式

新規コンポーネントは CSS Modules（`*.module.scss`）を使用。

### クラス名規約

| 要素 | クラス名 |
|------|---------|
| ルート要素 | `.root` |
| 内部パーツ | `.icon`, `.label`, `.content` 等 |
| 外部オーバーライドポイント | `:global(.wim-component-name)` をルート要素に付与 |

### カスケードレイヤー

| コンポーネント種別 | @layer |
|-------------------|--------|
| 汎用部品（Button, Icon, InputBase 等） | `@layer component` |
| 複合コンポーネント（Snackbar, List 等） | 非レイヤー |

非レイヤーのスタイルは `@layer component` 内のスタイルに常に優先するため、`!important` なしで上書きが可能。

---

## アクセシビリティ

### 基準

- WCAG AA 準拠（通常テキスト: 4.5:1 以上、大テキスト: 3:1 以上）
- セマンティックカラートークン使用時、コントラスト比は自動的に確保
- `eslint-plugin-jsx-a11y` + `axe-core (Playwright)` による自動チェック

### フォーカス管理

- フォーカス色: `--wim-color-focus-outline` = Primary カラー
- フォーカスリング: `--wim-shadow-focus` (2px white + 4px primary 50%)
- フォーカスオフセット: `--wim-focus-outline-offset` = 2px
- モーダル/ドロップダウンではフォーカストラップを実装

### キーボードナビゲーション

- 矢印キーによるスムーズなフォーカス移動（WAI-ARIA パターン準拠）
- 複雑なコンポーネント（RadioGroup, Tabs, DataGrid 等）では roving tabindex を使用

### モーション配慮

`prefers-reduced-motion` メディアクエリに対応し、アニメーションを無効化可能。

---

## コンポジションガイドライン（AI 的な画面を避ける）

**本文は [`docs/design/composition.md`](./docs/design/composition.md) に移した**（T252・2026-09-19）。

複数のコンポーネントを組み合わせて画面・パターン・デモ・ストーリーを作るとき、**および部品の既定値やカタログの `Default` ストーリーを書くとき**は、そちらに従うこと。禁止パターン・必須ルール 15 件・人間らしさを足すルール・セルフレビューチェックリストはすべて移動先にある。

切り出した理由は、この文書が 832 行あり、**部品 1 つを直す作業でも無関係な長文が毎回コンテキストに混ざる**ため。コンポジション節は 121 行あり、`composition-rules.json` の `designAnchor` 27 件のうち **26 件がこの節に集中**していたので、1 ファイルの移動で済む。

機械側の担当は変わらない ── SSOT は `scripts/composition-rules.json`、生成物は `llms.txt` と `judge-slop.mjs`、検証は `npm run check:composition-rules`（DESIGN.md と `docs/design/**` の両方を読む）。
