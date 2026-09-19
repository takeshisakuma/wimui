# カラーシステム

> この文書は `DESIGN.md` から切り出したもの（T252・2026-09-20）。
> 色を足す・`intent` を足す・コントラストを直すときに読む。値の正本は
> `tokens/*.json` と `scripts/intents.json` で、`src/tokens/generated/` と
> `src/styles/_intents.scss` はそこから生成される。ここは**なぜその値なのか**の側。
>
> 機械側の担当: `check:contrast` / `check:contrast:scss` / `check:contrast:scene` /
> `check:intents` / `check:intents:scss` / `check:subtle-tokens` / `check:color-values` /
> `check:intent-text` / `check:chart-palette` / `check:graph-edge`。

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
| 成功テキスト | `--wim-color-text-success` | `dk12` (#355935) | #b7e3b6 |
| 警告テキスト | `--wim-color-text-warning` | `dk6` (#6b4919) | #ffda7a |
| 情報テキスト | `--wim-color-text-info` | = info | `p18` (#b3cee3) |

#### テキストカラー

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| 主要テキスト | `--wim-color-text-primary` | `bk` (#000) | `w` (#fff) |
| 補助テキスト | `--wim-color-text-secondary` | `gy3-5` (#393939) | `gy8-5` (#e5e5e5) |
| 三次テキスト | `--wim-color-text-tertiary` | `gy4-5` (#4f4f4f) | #c4c4c4 |
| 無効テキスト（通常面） | `--wim-color-text-disabled` | `gy6-5` (#8a8a8a) | `gy6-5` (#8a8a8a) |
| 無効フィル上の文字 | `--wim-color-text-on-disabled` | `gy3-5` (#393939) | `gy8-5` (#e5e5e5) |
| エラーテキスト | `--wim-color-text-danger` | `dp2` (#9d002b) | #ffc1c1 |
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
| アプリ背景 | `--wim-color-surface-app` | `gy8-5` (#e5e5e5) | `gy2-5` (#262626) |
| コンポーネント背景 | `--wim-color-surface` | `w` (#fff) | `gy3-5` (#393939) |
| セカンダリ背景 | `--wim-color-surface-variant` | `gy9-5` (#f5f5f5) | `gy4-5` (#4f4f4f) |
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
| `--wim-color-ghost-bg` | oklch(from var(--wim-color-surface-void) l c h / 0.03) | oklch(from var(--wim-color-white) l c h / 0.06) |
| `--wim-color-ghost-border` | oklch(from var(--wim-color-surface-void) l c h / 0.08) | oklch(from var(--wim-color-white) l c h / 0.15) |
| `--wim-color-ghost-bg-hover` | oklch(from var(--wim-color-surface-void) l c h / 0.05) | oklch(from var(--wim-color-white) l c h / 0.08) |
| `--wim-color-ghost-bg-active` | oklch(from var(--wim-color-surface-void) l c h / 0.12) | oklch(from var(--wim-color-white) l c h / 0.12) |

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
| `--wim-color-skeleton-shine` | rgba(255, 255, 255, 0.4) | rgba(255, 255, 255, 0.06) |

#### Overlay

モーダルやドロワーの背景オーバーレイ。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-overlay` | oklch(from var(--wim-color-surface-void) l c h / 0.5) | rgba(0,0,0, 0.7) |
| `--wim-color-overlay-soft` | oklch(from var(--wim-color-white) l c h / 0.8) | rgba(255,255,255, 0.2) |
| `--wim-color-frosted-bg` | overlay-soft | surface 60% |

#### Feedback / コンポーネント固有色

Alert / Banner / Toast 等のバリアント色は、公開 role トークン（`info` / `success` / `danger` 等）と `color-mix()` で組み立てる。avatar / heatmap / carousel / chat-bubble / terminal / overlay-control などコンポーネント固有色は公開契約外（`--wim-comp-*`、テーマ上書き対象外）。

---
