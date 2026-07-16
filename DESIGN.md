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
| Vivid | `v` | 最高彩度、鮮やか | アクセント、ダークモードのプライマリ |
| Bright | `b` | 明るく鮮やか | ダークモード Accent、Avatar |
| Strong | `s` | やや暗く力強い | ライトモードのプライマリ・セマンティック色 |
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
| Primary | `--wim-color-primary` | `s16` (#205b85) | `v16` (#055d87) |
| Danger | `--wim-color-danger` | `s1` (#b01040) | `v2` (#ee0026) |
| Success | `--wim-color-success` | `s12` (#28853f) | `v12` (#33a23d) |
| Warning | `--wim-color-warning` | `s8` (#ccb914) | `v7` (#ffcc00) |
| Info | `--wim-color-info` | `s18` (#243b8b) | `v17` (#093f86) |

ダークモードでは彩度を上げたトーン（Vivid / Bright）に切り替えることで、暗い背景上でもコントラストを確保しています。

#### テキストカラー

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| 主要テキスト | `--wim-color-text-primary` | `bk` (#000) | `w` (#fff) |
| 補助テキスト | `--wim-color-text-secondary` | `gy3-5` (#393939) | `gy8-5` (#e5e5e5) |
| 三次テキスト | `--wim-color-text-tertiary` | `gy5-5` (#646464) | `gy7-5` (#b6b6b6) |
| 無効テキスト（通常面） | `--wim-color-text-disabled` | `gy6-5` (#8a8a8a) | `gy6-5` (#8a8a8a) |
| 無効フィル上の文字 | `--wim-color-text-on-disabled` | `gy3-5` (#393939) | `gy7-5` (#b6b6b6) |
| エラーテキスト | `--wim-color-text-danger` | `s2` (#ca1028) | #ff8c8c |
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

| トークン | 値 | 対象言語 |
|----------|-----|---------|
| `--wim-line-height-tight` | 1.2 | 欧文 |
| `--wim-line-height-normal` | 1.4 | 欧文 |
| `--wim-line-height-loose` | 1.6 | 欧文 |
| `--wim-line-height-tight-jp` | 1.4 | 日本語 |
| `--wim-line-height-normal-jp` | 1.6 | 日本語 |
| `--wim-line-height-loose-jp` | 1.8 | 日本語 |

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
| Button 系 | `ButtonVariant` | `solid`, `outline`, `ghost` |
| Button 意図 | `ButtonIntent` | `default`, `destructive`, `positive` |
| フィールド系 | `FieldVariant` | `outline`, `ghost` |
| インジケータ系 | `IndicatorVariant` | `solid`, `outline`, `subtle` |
| インジケータ状態 | `IndicatorStatus` | `primary`, `secondary`, `success`, `warning`, `error`, `info`, `neutral` |
| フィードバック状態 | `FeedbackStatus` | `info`, `success`, `warning`, `error` |
| フィールド状態 | `FieldStatus` | `default`, `error` |

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

複数のコンポーネントを組み合わせて画面・パターン・デモ・ストーリーを作るときの指針。単体コンポーネントの品質は状態・a11y・トークン準拠（craft）で決まるが、画面の印象は階層・リズム・非対称性・内容の実在感（意図）で決まる。意図を明示しないと構成は「均等・中央揃え・テンプレ」の平均値に収束し、AI が生成した画面に見える。

適用対象: `stories/Patterns/`、MDX 内のデモ、複合レシピ、ドキュメント用のサンプル画面すべて。

### 禁止パターン（AI の署名）

以下は生成 AI が高頻度で出力する定型であり、1 つあるだけで画面全体がテンプレに見える。使用禁止。

| 禁止 | 代わりに |
|------|----------|
| `linear-gradient(135deg, ...)` のヒーロー背景 | サーフェス階層トークン（`surface` / `surface-raised` 等）による面の切り替え |
| バッジ → 大見出し → サブテキスト → solid/outline ボタン 2 個、の定型ヒーロー構成 | 主役を 1 つ決めた非対称構成（見出し偏重、ビジュアル偏重など画面ごとに変える） |
| AvatarGroup + 「1,000+ developers」型のソーシャルプルーフ | 実在感のある具体的な内容（固有名詞・現実的な数値） |
| 3 カラム料金カード（中央ハイライト） | 構成を内容から導く（プラン数・差別化軸に合わせる） |
| 絵文字のアイコン代用（☰ ★ ✓ 等） | `src/icon/` のアイコンコンポーネント |
| Skeleton をローディング以外（偽スクリーンショット等）に使う | 実データ風のコンテンツ、または実際のコンポーネントで組んだミニ UI |
| 全セクション中央揃えの反復 | 基本は左揃え。中央揃えセクションは 1 ページ 1 回まで |
| 丸すぎる数値（"1000+"・"99%"）とジェネリックコピー（"Get started" 等） | ギザギザした現実的な数値（例: 4,281）と製品文脈のあるコピー |

### 必須ルール

1. **1 画面に視覚的主役は 1 つ** -- すべての要素が同じ声量なら設計ミス。サイズ・ウェイト・色のジャンプで視線の起点を作る。
2. **密度のコントラストをつける** -- 見せ場（ヒーロー等）は疎に、データ領域（テーブル・リスト）は密に。全体が「中くらいの密度」で均一なのは AI 的。
3. **コンポーネントの既定値を `style` で上書きしない** -- `padding: "0"` や `borderRadius: "0"` 等の即興上書きは一貫性を壊す。足りなければコンポーネント側に prop / トークンを追加する。
4. **gap / padding / サイズのハードコード禁止** -- 必ず `--wim-spacing-*` 等のトークンを使う（`16px` 直書き不可）。
5. **角丸の幾何学スタンスを混在させない** -- `radius.component` / `radius.container` / `radius.overlay` の用途トークンに従い、同一画面で 0 と `lg` を恣意的に混ぜない。
6. **アクセントカラーは 1 ビューで限定的に** -- primary の面（solid ボタン・強調背景）は 1 画面 1〜2 箇所まで。多用すると視線の起点が消える。
7. **デモ内容に実在感を持たせる** -- 翻訳キーで管理しつつ、コピーは製品文脈のある具体的な文言にする（`story.*` キー運用は既存規約どおり）。

### セルフレビューチェックリスト

組み上げたら公開前に確認する:

- [ ] スクリーンショットを見て「視線が最初にどこへ行くか」が即答できるか
- [ ] 上の禁止パターンが 1 つも含まれていないか
- [ ] 中央揃えセクションが 1 ページに 2 回以上ないか
- [ ] `style` 属性にハードコード値・既定値上書きがないか
- [ ] Skeleton がローディング表現以外で使われていないか
- [ ] 数値・名前・コピーが「置き換え待ちのプレースホルダ」に見えないか
