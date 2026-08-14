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

| トークン | 値 | 対象言語 |
|----------|-----|---------|
| `--wim-line-height-tight` | 1.2 | 欧文 |
| `--wim-line-height-normal` | 1.4 | 欧文 |
| `--wim-line-height-loose` | 1.6 | 欧文 |
| `--wim-line-height-tight-jp` | 1.4 | 日本語 |
| `--wim-line-height-normal-jp` | 1.6 | 日本語 |
| `--wim-line-height-loose-jp` | 1.8 | 日本語 |

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

複数のコンポーネントを組み合わせて画面・パターン・デモ・ストーリーを作るときの指針。単体コンポーネントの品質は状態・a11y・トークン準拠（craft）で決まるが、画面の印象は階層・リズム・非対称性・内容の実在感（意図）で決まる。意図を明示しないと構成は「均等・中央揃え・テンプレ」の平均値に収束し、AI が生成した画面に見える。

適用対象: `stories/Patterns/`、MDX 内のデモ、複合レシピ、ドキュメント用のサンプル画面すべて。

### 禁止パターン（AI の署名）

以下は生成 AI が高頻度で出力する定型であり、1 つあるだけで画面全体がテンプレに見える。使用禁止。

> **機械ガード（`npm run check:slop`）**: この表のうち決定的に検出できる部分集合は、合成画面を書く 3 か所 — `stories/Patterns/**`（Pattern デモ）、`sandbox/**`（Playground のギャラリーと StackBlitz へ出るレシピ）、`docs/*.mdx` の `<style>`（ドキュメントページ自身のレイアウト CSS）— ＋ ストーリーデモコピー（`public/locales/{en,ja,pt}/docs_stories_*.json`）に対して自動強制される（`audit:docs` / lint-staged / CI）。**ハードゲート（baseline 0）**: ①`linear-gradient(...135deg...)` ②誇張形容詞・定型フレーズ（`seamless` / `圧倒的` / `Built for the modern team` 等） ③定型プレースホルダ名（`John Doe` 等。入力欄 placeholder の氏名例は正当なのでスコープ外）。**ラチェット**（現状値を凍結し増加をブロック）: ④インライン style の既定値上書き（`padding`/`margin`/`borderRadius: 0`）と px 直書き。残りの判断依存パターン（1 主役・中央揃え多用・rule of three・実在感）は引き続きセルフレビュー／`composition-guidelines` skill／LLM-judge（`npm run judge:slop`）で担保する。辞書は **`scripts/slop-dictionary.json` が単一ソース（SSOT）**で、`check:slop` ガードと `llms.txt` 生成（`generate-llms.js`）の両方がここを読む。増やすときはこの JSON だけを編集し `npm run llms:build` で llms.txt を再生成する（上の例示は代表例で網羅ではない）。辞書の一部は反 AI-slop skill `Nutlope/hallmark` から採掘。

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
| **3 つ横並びの機能カード**（アイコン＋短見出し＋1 行、均等）＝ "rule of three" | 数は内容から決める（2 でも 5 でもよい）。カードの粒度・本文長を不揃いにする |
| 連番・アルファベット順のダミー名（Alice / Bob / Charlie、User 1・User 2） | 文化的に多様で順不同の実在感ある名前。並びを規則的にしない |
| 誇張形容詞（seamless / powerful / effortless / cutting-edge / next-gen / 圧倒的 / 革新的 / 次世代） | 具体的な動作・数値で言う（例: "CSV に 2 秒で書き出し"） |
| タグ／カテゴリごとに色を変える虹色配色 | 色の意味は状態（success / warning / danger）に限定し、他はニュートラル |
| すべてのスロットを埋める（各カードに画像＋バッジ＋複数 CTA） | 余白を残す。要素は必要なものだけ載せる |
| 完全均等グリッド（2×2・3×3 で全要素同寸） | グリッドを崩す（主役セルを span、サイズ差、hero＋sidebar の非対称） |
| 全項目に飾りアイコンを付ける（意味のない装飾） | アイコンは意味のある箇所だけ。無くても伝わるなら付けない |
| 同一 gap をレイアウト全体に一律適用 | 近接でグルーピング（グループ内は密・グループ間は疎）。等間隔スタックは AI 的 |
| 過剰なシャドウ・不要なボーダーで面を区切る（空白を埋める習性） | サーフェス階層トークンで面を分ける。影/枠は操作を誘導する要素だけに |
| 量産型グラスモーフィズム／ネオモルフィズムの「近未来テック」調 | 製品のペルソナに合わせてトーンを一方向へ振り切る（あえてミニマルも可） |

> **絵文字のスコープ（誤解しやすい点）**: 上の禁止は **UI（レンダリングされる画面・コンポーネント）** が対象で、「装飾目的の絵文字」と「アイコンの代用」を禁じるもの。**ドキュメント（README / MDX / コード例）の"機能的マーカー"としての絵文字・記号は許容**する。
> - **許容**: do/don't の `✅` / `❌`（`OK` / `NG` でも可）、サポート表の `✅` / `❌`、フロー約物 `→`（`A → B`）。これらはスキャン性を高める標準的な記法（MDN / React / Tailwind docs 等でも一般的）。
> - **禁止**: セクション見出し等に**装飾目的**で撒く絵文字（`🚀` `✨` `🎉` など＝AI 生成 README の典型）、および UI 内でのアイコン代用。

### 必須ルール

1. **1 画面に視覚的主役は 1 つ** -- すべての要素が同じ声量なら設計ミス。サイズ・ウェイト・色のジャンプで視線の起点を作る。
2. **密度のコントラストをつける** -- 見せ場（ヒーロー等）は疎に、データ領域（テーブル・リスト）は密に。全体が「中くらいの密度」で均一なのは AI 的。
3. **コンポーネントの既定値を `style` で上書きしない** -- `padding: "0"` や `borderRadius: "0"` 等の即興上書きは一貫性を壊す。**値がトークンでも同じ**（`padding: "var(--wim-spacing-3xl)"` も違反）。足りなければコンポーネント側に prop / トークンを追加する。実例: Card の `padding` は lg（16px）までしか実装されておらず、22〜35px が欲しい画面が軒並み style へ逃げていた → 刻みを xl / 2xl / 3xl まで延長して解消した（2026-07-26）。`check:slop` が `Card` / `Stats` / `Box` について**ハードゲート（baseline 0）**で強制する。
4. **gap / padding / サイズのハードコード禁止** -- 必ず `--wim-spacing-*` 等のトークンを使う（`16px` 直書き不可）。
5. **角丸の幾何学スタンスを混在させない** -- `radius.component` / `radius.container` / `radius.overlay` の用途トークンに従い、同一画面で 0 と `lg` を恣意的に混ぜない。狭幅の表カードは隣接する Toolbar / Pagination と同じ角丸トークンに揃える（カードだけ `radius-container`・クロームは `radius-component`、はスタンス割れ）。
6. **アクセントカラーは 1 ビューで限定的に** -- primary の面（solid ボタン・強調背景）は 1 画面 1〜2 箇所まで。多用すると視線の起点が消える。
7. **デモ内容に実在感を持たせる** -- 翻訳キーで管理しつつ、コピーは製品文脈のある具体的な文言にする（`story.*` キー運用は既存規約どおり）。
8. **エレベーションのスタンスも 1 画面 1 つ** -- 5 の角丸と同じ。影で浮かせる面と枠で切る面を同一画面に混ぜない。**`Card` と `Stats` は既定が `elevated`（影あり）** なので、枠で統一したい画面では `variant="outline"` を明示する。外側のコンテナが既に影を持つなら、その中身は枠で十分。管理一覧では `Table` / `DataGrid` のモバイル行カードも Toolbar / Pagination と同じ枠のみにし、行だけ `shadow-sm` で浮かせない。
9. **枠を持つコンポーネントを枠で包まない** -- `<Card><Table card /></Card>` のように「自前で枠と角丸を持つコンポーネント」を Card で包むと、ボーダーが二重になり角丸が入れ子になる（4px の中に 12px）。枠は 1 つの要素だけが持つ。`Table` は `card` prop、`Stats` は自身が Card なので、包まずにそのまま置く。
10. **`intent` は省略せず明示する（Badge / Tag / Chip）** -- この 3 つは **`intent` 未指定の既定が `primary`**（アクセント色）。`pending` / `member` のような「普通の値」を intent なしで置くと、例外値と同じ声量で塗られて色が情報を運ばなくなる。普通の値には `intent="neutral"` を明示する。6 の「アクセントを限定する」は、既定値に任せていると守れない。
11. **色は「方向」ではなく「良し悪し」で選ぶ** -- `Stats.Trend` の `direction` は矢印と色を同時に決めるため、`up` は必ず成功色になる。**「増えると悪い指標」（失敗数・エラー率）に `Trend` を使うと、悪化を good news として描画してしまう**。そういう値は `Stats.Description` など色を持たない表現にする。コンポーネントの API が表現できない意味を、それらしい見た目で代用しない。
12. **クローム（枠回り）は黙らせる** -- パンくず・ページ見出し・補足文・ツールバー・フィルタ帯といった「中身を囲む部分」は、主役より声量を下げる。具体的には ①補足の 1 行を `Alert` / `Banner` に格上げしない（ただの文脈説明が警告と同じ声量になる） ②フィルタ帯を `Card` で囲まない（データ領域の枠と二重の面ができ、視線の起点が 2 つになる） ③クローム側に primary の面を置かない（ページの primary は主たる操作 1 つだけ） ④テーブル画面の見出し上に KPI タイルを並べない（主役が割れる）。1 と 6 の帰結だが、**管理画面・一覧画面で最も破られやすい**（AI が「空白を埋める」習性を最初に発揮するのがこの帯）ため独立させる。判定は「表を見に来た人の目が、最初に表へ行くか」。

13. **実在感は「読み手が知っている世界」の中で作る** -- 7 を追い込むと題材が専門世界へ寄る（造船所の当直規程、トレーディングデスク、臨床のプロトコル）。そこに置くと読み手は**用語の解読を先にやることになり、見せたい部品の話に届かない**。誰でも一度は通った状況（車を借りて返す、荷物を届ける、病院を予約する）を選び、専門語は状態や操作を運ぶ場所に置かない。判定は「何の画面かを、段落で説明せずに言えるか」。実例: 12 枚目を室蘭の乾ドックの当直で書いたところ、状態と次の操作を画面に出して直したあとでも「やっぱり理解できない」で差し戻され、題材ごとカーシェアの「借りて返すまで」に置き換えた（2026-08-14）。**説明に段落が必要なら、画面ではなく題材の失敗。**
14. **画面に無い操作の結果を出さない** -- 合成カバーのために部品を先に置き、その部品が「要る」状態を後から作ると、入力手段が無いのに結果だけが見える。実例: 12 枚目 `PreDrive` に「記録に無い」「写真 1 枚」を出した。どちらも客が点検結果を入れ、写真を上げたあとにしか出ない値なのに、画面上の操作はチェックと電話だけだった（2026-08-14）。**届くのは ①この画面のコントロールを触った結果 ②車・予約・センサーが最初から持っている値**だけ。カバレッジは、届く状態の中で部品を使う。届かない状態を作って部品を正当化しない。判定は「この画面で今できる操作だけを辿って、いま見えている状態に着けるか」。

### 人間らしさを足すルール（意図的な"揺らぎ"）

均一・完璧・対称は AI 的。人間が作った画面には、意味のある不揃いと余白がある。以下は「わざと揃えない」ための指針。

8. **余白で情報を束ねる（近接）** -- gap を全体一律にせず、関連要素は密・グループ間は疎にする。視覚的なまとまりは境界線より余白で作るほうが上品。
9. **均等グリッドを崩す** -- 主役セルを span、カード寸法に差、hero＋sidebar の非対称配置。正方タイルの反復（2×2・3×3 で全部同寸）を避ける。
10. **"不完全な行"を 1〜2 混ぜる** -- データ表示を幸せパスだけにしない。truncate する長い名前、任意項目が欠けた行、極端に大きい/小さい値、部分入力・未読・エラー等の状態を混ぜると一気に実在感が出る。
11. **長さ・粒度・語順を不揃いにする** -- 見出し／カード／機能を全部同じ長さ・同じ並列構造（"Fast. Secure. Reliable." のような 3 連）にしない。長短のリズムを作る。項目数も内容から決める（無理に 3 つに揃えない）。
12. **製品固有の声（voice）で書く** -- 一貫した視点のある文体にし、汎用マーケ調・誇張形容詞を避ける。「何ができるか」より「何をどう解決するか」を具体で言う。
13. **数値・日付・名前を内部整合させ、規則性を消す** -- 複数の統計は互いに矛盾させない（active ≤ total、内訳の和が合計に一致）。日付は「全部 2 時間前」のような等間隔にせず現実的にばらす。名前・ID を連番/アルファベット順にしない。
14. **装飾は引き算で検証する** -- 追加した gradient・shadow・border・アイコンごとに「これはユーザーの操作や理解を助けているか？」を問い、満たさないものは削る。AI は空白を埋める習性があるため、意図の無い装飾が増える。
15. **デモは"生きた状態"を見せる** -- 見た目だけの happy path にせず、hover / active / focus / disabled / error / empty / loading の状態を織り込む。フォームのバリデーションエラーは入力の近くに置くなど、実装可能な挙動を前提に組む（10 がデータの不完全さなら、これは状態の網羅）。
16. **実データを流し込んでからレイアウトを詰める** -- 短い placeholder ではなく現実的な長さ・件数のテキストで確認する。固定幅・短文前提の設計は長文や多件数で破綻する。見出し/本文のジャンプ率（サイズ・ウェイトのメリハリ）もこの状態で調整する。

### セルフレビューチェックリスト

組み上げたら公開前に確認する:

- [ ] スクリーンショットを見て「視線が最初にどこへ行くか」が即答できるか
- [ ] 上の禁止パターンが 1 つも含まれていないか
- [ ] 中央揃えセクションが 1 ページに 2 回以上ないか
- [ ] `style` 属性にハードコード値・既定値上書きがないか
- [ ] Skeleton がローディング表現以外で使われていないか
- [ ] 数値・名前・コピーが「置き換え待ちのプレースホルダ」に見えないか
- [ ] 題材が読み手の知っている世界か（何の画面かを 1 行で言えるか。段落の説明が要るなら題材を変える）
- [ ] 画面に無い操作の結果が出ていないか（今できる操作だけで、見えている状態に着けるか）
- [ ] 機能・カード・見出しが「3 つ均等の並列」になっていないか（数と長さに揺らぎがあるか）
- [ ] ダミー名・日付・数値が規則的（連番・アルファベット順・等間隔）になっていないか
- [ ] グリッドが完全均等でなく、余白で情報が束ねられているか
- [ ] 誇張形容詞（seamless / powerful / effortless 等）を使っていないか
- [ ] "不完全な行"（truncate・欠損・極端値・状態違い）が最低 1 つ含まれているか
- [ ] 影・枠・グラデ・アイコンに「操作/理解を助けない装飾」が混じっていないか
- [ ] インタラクティブな状態（hover / error / empty / loading）を happy path 以外も見せているか
- [ ] 短い placeholder ではなく実データ（長文・多件数）でレイアウトを確認したか
- [ ] 量産型グラスモーフィズム／近未来テック調に逃げず、製品のトーンを選び取っているか
- [ ] 影で浮く面と枠で切る面が混在していないか（`Card` / `Stats` の既定は `elevated`。狭幅の表カードだけ影・上下クロームは枠のみ、も同じ違反）
- [ ] 角丸のスタンスが 1 画面で揃っているか（モバイル行カードと Toolbar / Pagination で `component` / `container` が隣り合っていないか）
- [ ] ボーダーや角丸が二重になっていないか（枠を持つコンポーネントを Card で包んでいないか）
- [ ] `Badge` / `Tag` / `Chip` の `intent` を省略していないか（未指定は `primary` に落ちる）
- [ ] 意味のある色が実態と合っているか（増えると悪い指標に `Stats.Trend` の `up` を使っていないか）
- [ ] クローム（パンくず・見出し・補足文・ツールバー）が主役より目立っていないか（補足文の Alert 化・フィルタ帯の Card 囲み・クローム側の primary 面・表の上の KPI タイル列）
- [ ] **狭い幅（390px / 768px）で見たか** -- ①ページ自体が横スクロールしないこと（`document.scrollWidth > document.documentElement.clientWidth` なら不合格。原因は折り返せない塊＝`Toolbar.Group` のようにボタンを 1 グループへ詰めた箇所が多い） ②テーブルは内部スクロールで済ませず狭幅モードを明示する（`<DataGrid mobileCard>` / `<Table mobileCard>`。未指定だと列が潰れ、`Code` のような要素は 1 文字ずつ折り返る） ③既定の切替点は `container-down(sm)`（576px）。タブレットでも列が溢れる広い表は `mobileCard="md"` を渡す（`container-down(md)`＝768px までカード）
- [ ] **ブラウザで実物を見たか** -- computed style まで確認したか。「意図した CSS が効いているか」はコードを読んでも分からない（レイヤ順・ドキュメントサイトの上書き・alpha 合成で消える色は、実物を見るまで気づけない）

**判定（judge）**: 組み上げた画面が「AI 的か」を採点したいときは、VRT の Pattern スクショ（`vrt/vrt.spec.ts-snapshots/light-patterns-*.png`）を上のチェックリストの観点で pass/warn/fail 採点する。エージェント（Claude Code 等）に「Pattern スクショを judge して」と頼めば API キー無しでこの採点を実行できる（同一ルーブリックのスクリプト版は `npm run judge:slop`＝`@anthropic-ai/sdk` と `ANTHROPIC_API_KEY` が必要）。決定的に検出できる部分は `npm run check:slop`（A 層）が担当。
