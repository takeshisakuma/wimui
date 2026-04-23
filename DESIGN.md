# WIM UI デザインガイド

このドキュメントは WIM UI のデザインに関する意思決定と仕様をまとめたものです。コーディングルールは `RULES.md`、実装手順は `SKILLS.md` を参照してください。

---

## デザイン原則

1. **一貫性** -- すべての UI 要素はデザイントークンを通じて統一されたビジュアル言語を共有する
2. **アクセシビリティ** -- WCAG AA 準拠のコントラスト比と WAI-ARIA パターンを前提とする
3. **テーマ適応性** -- ライトモード/ダークモードの切り替えはセマンティックトークンのみで完結する
4. **多言語対応** -- 日本語・英語・ポルトガル語の 3 言語を基本とし、言語ごとのタイポグラフィ特性を考慮する
5. **レスポンシブ** -- デスクトップ/モバイルの両方で最適な体験を提供する

---

## カラーシステム

### PCCS カラーパレット

WIM UI のカラー基盤は **PCCS（Practical Color Co-ordinate System）** に基づいています。24 色相を軸に 12 トーン（明度・彩度の組み合わせ）を展開し、合計 **約 300 色** のパレットを保持しています。

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
| Destructive | `--wim-color-destructive` | `s1` (#b01040) | `v2` (#ee0026) |
| Positive | `--wim-color-positive` | `s12` (#28853f) | `v12` (#33a23d) |
| Caution | `--wim-color-caution` | `s8` (#ccb914) | `v7` (#ffcc00) |
| Informative | `--wim-color-informative` | `s18` (#243b8b) | `v17` (#093f86) |

ダークモードでは彩度を上げたトーン（Vivid / Bright）に切り替えることで、暗い背景上でもコントラストを確保しています。

#### テキストカラー

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| 主要テキスト | `--wim-color-text-primary` | `bk` (#000) | `w` (#fff) |
| 補助テキスト | `--wim-color-text-secondary` | `gy3-5` (#393939) | `gy8-5` (#e5e5e5) |
| 三次テキスト | `--wim-color-text-tertiary` | `gy5-5` (#646464) | `gy7-5` (#b6b6b6) |
| 無効テキスト | `--wim-color-text-disabled` | `gy7-5` (#b6b6b6) | `gy6-5` (#8a8a8a) |
| エラーテキスト | `--wim-color-text-error` | `s2` (#ca1028) | #ff8c8c |
| プレースホルダー | `--wim-color-text-placeholder` | = text-tertiary | = text-tertiary |

#### サーフェスカラー

| 用途 | トークン | ライト | ダーク |
|------|----------|--------|--------|
| アプリ背景 | `--wim-color-bg-app` | `w` (#fff) | `gy2-5` (#262626) |
| コンポーネント背景 | `--wim-color-bg-component` | `w` (#fff) | `gy3-5` (#393939) |
| セカンダリ背景 | `--wim-color-bg-secondary` | `gy8-5` (#e5e5e5) | `gy4-5` (#4f4f4f) |
| ホバー背景 | `--wim-color-bg-hover` | primary 8% | primary 12% |
| ボーダー | `--wim-color-border` | `gy7-5` (#b6b6b6) | `gy5-5` (#646464) |

#### エイリアス

よく使うトークンにはエイリアスが設定されています。

| エイリアス | 参照先 |
|-----------|--------|
| `--wim-color-surface` | `--wim-color-bg-component` |
| `--wim-color-surface-variant` | `--wim-color-bg-secondary` |
| `--wim-color-surface-hover` | `--wim-color-bg-hover` |
| `--wim-color-surface-glass` | `--wim-color-glass-bg` |
| `--wim-color-surface-inset` | `--wim-color-bg-app` |
| `--wim-color-surface-inverse` | `--wim-color-bg-inverted` |

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
| `--wim-color-skeleton-bg` | rgba(0,0,0, 0.11) | rgba(255,255,255, 0.13) |
| `--wim-color-skeleton-shine` | rgba(255,255,255, 0.3) | rgba(255,255,255, 0.08) |

#### Overlay

モーダルやドロワーの背景オーバーレイ。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-overlay-bg` | rgba(0,0,0, 0.5) | rgba(0,0,0, 0.7) |
| `--wim-color-overlay-bg-light` | rgba(255,255,255, 0.8) | rgba(255,255,255, 0.2) |
| `--wim-color-frosted-bg` | overlay-bg-light | bg-component 60% |

#### Feedback

Feedback コンポーネント（Alert, Banner, Toast 等）のバリアント色生成基盤。`color-mix()` で各インテント色と混合して使用。

| トークン | ライト | ダーク |
|----------|--------|--------|
| `--wim-color-feedback-text-base` | black | white |
| `--wim-color-feedback-bg-base` | white | black |
| `--wim-color-feedback-border-strength` | 30% | 40% |

使い方の例:

```scss
// Info バリアント
color: color-mix(in srgb, var(--wim-color-informative) 65%, var(--wim-color-feedback-text-base));
background: color-mix(in srgb, var(--wim-color-informative) 10%, var(--wim-color-feedback-bg-base));
border-color: color-mix(in srgb, var(--wim-color-informative) var(--wim-color-feedback-border-strength), transparent);
```

---

## テーマシステム

### 切り替えメカニズム

| 方式 | 適用条件 |
|------|----------|
| `:root` | ライトモードのデフォルト値 |
| `[data-theme="dark"]` | 明示的にダークモードを指定した場合 |
| `@media (prefers-color-scheme: dark)` + `:root:not([data-theme="light"])` | OS設定に連動する自動ダークモード |

### テーマ切替トランジション

`:root` に定義された `--wim-theme-transition` で、テーマ切り替え時のやわらかなアニメーションを実現。

```css
--wim-theme-transition: background-color 0.2s ease, border-color 0.2s ease, color 0.15s ease;
```

### コンポーネントでの対応

コンポーネントの SCSS に `[data-theme="dark"]` や `@media (prefers-color-scheme: dark)` を**書かない**。セマンティックトークンを使用するだけでライト/ダーク両モードに自動で対応する。

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
| `--wim-font-size-display` | 1.5rem | 特殊ディスプレイ見出し |
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

### テキスト装飾

| トークン | 値 |
|----------|-----|
| `--wim-decoration-underline` | underline |
| `--wim-decoration-line-through` | line-through |

---

## スペーシングシステム

### 間隔

コンパクトな 11 段階のスケール。

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-spacing-hairline` | 1px | 極細境界線、ヘアライン |
| `--wim-spacing-fine` | 2px | 微細な間隔 |
| `--wim-spacing-3xs` | 0.1rem (1.6px) | 最小マイクロ間隔 |
| `--wim-spacing-2xs` | 0.2rem (3.2px) | アイコン間隔 |
| `--wim-spacing-xs` | 0.3rem (4.8px) | インライン要素間 |
| `--wim-spacing-sm` | 0.4rem (6.4px) | タイトなパディング |
| `--wim-spacing-md` | 0.5rem (8px) | 標準パディング |
| `--wim-spacing-lg` | 0.6rem (9.6px) | ゆったりとしたパディング |
| `--wim-spacing-xl` | 0.7rem (11.2px) | セクション内間隔 |
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
| `--wim-radius-xl` | 1rem | 大きな角丸（モバイルカード等） |
| `--wim-radius-full` | 9999px | 完全な丸（Avatar, Pill） |

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
| `--wim-shadow-xs` | 0 1px 2px ... | 微小な浮き（Badge, Chip） |
| `--wim-shadow-sm` | 0 2px 4px ... | カード、ドロップダウン |
| `--wim-shadow-md` | 0 4px 12px ... | モーダル、ポップオーバー |
| `--wim-shadow-lg` | 0 12px 24px ... | ドロワー、全画面オーバーレイ |
| `--wim-shadow-inset` | inset 0 2px 4px ... | 押し込み効果 |
| `--wim-shadow-focus` | 0 0 0 2px #fff, 0 0 0 4px rgba(...) | フォーカス外枠 |
| `--wim-shadow-focus-ring` | 0 0 0 3px rgba(...) | 入力要素のフォーカスリング |
| `--wim-shadow-error-ring` | 0 0 0 3px rgba(...) | エラー状態のリング |
| `--wim-shadow-field-focus` | 0 0 0 2px rgba(...) | 入力フィールドのフォーカス |

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
| `--wim-duration-instant` | 83ms | マイクロインタラクション（ホバー色変更） |
| `--wim-duration-fast` | 167ms | ボタンフィードバック、トグル |
| `--wim-duration-base` | 250ms | 標準アニメーション |
| `--wim-duration-slow` | 333ms | モーダル開閉、パネル遷移 |

### イージング

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-easing-standard` | cubic-bezier(0.55, 0, 0.1, 1) | 汎用トランジション |
| `--wim-easing-entrance` | cubic-bezier(0, 0, 0, 1) | 画面に入るアニメーション |
| `--wim-easing-exit` | cubic-bezier(1, 0, 1, 1) | 画面から出るアニメーション |
| `--wim-easing-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | バウンス効果 |
| `--wim-easing-out-back` | cubic-bezier(0.175, 0.885, 0.32, 1.275) | オーバーシュート効果 |

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

グローバルなスタッキングコンテキスト管理。

| トークン | 値 | 用途 |
|----------|-----|------|
| `--wim-z-sidebar` | 900 | サイドバー（非オーバーレイ時） |
| `--wim-z-overlay` | 1000 | Dialog, Drawer, Dropdown, Tooltip, Popover |
| `--wim-z-overlay-panel` | 1001 | オーバーレイ上に重なるパネル |
| `--wim-z-overlay-step` | 1002 | Tour ステップバブル |
| `--wim-z-toast` | 9999 | Toast, Snackbar, Notification（常に最前面） |

コンポーネント内部でスタッキングコンテキストが閉じている場合（Slider のトラック/サム等）は生値を使用可。

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

3 段階のサイズを標準とする（Layout用途では 5 段階）。

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

---

## コンポーネントカタログ

### Form（フォーム）-- 46 コンポーネント

Button, ButtonGroup, Cascader, Checkbox, CheckboxGroup, ColorInput, ColorPicker, Combobox, CopyButton, DatePicker, DateRangePicker, Dropzone, FieldError, FieldTemplate, Fieldset, FileUpload, FloatButton, IconButton, Input, InputBase, InputGroup, InputMask, LinkButton, Mentions, MultiSelect, NumberInput, OtpInput, PasswordInput, PhoneInput, Radio, RadioGroup, RangeSlider, Rating, RichTextEditor, SearchInput, SegmentedControl, Selectbox, SignaturePad, Slider, Switch, SwitchGroup, Textarea, TimePicker, ToggleGroup, Transfer, TreeSelect

### Data Display（データ表示）-- 26 コンポーネント

Accordion, Avatar, AvatarGroup, Badge, BaseListItem, Calendar, Card, Carousel, ChatUI, Chip, DataGrid, DescriptionList, EmptyState, FAQSection, Indicator, Kanban, List, QRCode, QueryBuilder, RangeCalendar, Stats, Table, Tag, Timeline, TreeView, VirtualList

### Feedback（フィードバック）-- 15 コンポーネント

Alert, Banner, ErrorBoundary, Loader, LoadingOverlay, Notification, Popconfirm, Progress, Result, ScrollProgress, Skeleton, Snackbar, Spinner, Toast, Tour

### Layout（レイアウト）-- 23 コンポーネント

AppShell, AspectRatio, BentoGrid, Box, Center, Container, Divider, Flex, Footer, Grid, Group, Header, InteractiveArea, Masonry, Navbar, ScrollArea, Sidebar, SimpleGrid, Splitter, Stack, Transition, VisuallyHidden, Watermark

### Navigation（ナビゲーション）-- 12 コンポーネント

Affix, Anchor, BackTop, Breadcrumb, CommandPalette, HamburgerMenu, Link, Pagination, Stepper, TabBar, TabNavigation, Tabs

### Overlay（オーバーレイ）-- 11 コンポーネント

BottomSheet, ContextMenu, Dialog, Drawer, Dropdown, FocusTrap, HoverCard, Menu, Popover, Portal, Tooltip

### Typography（タイポグラフィ）-- 9 コンポーネント

Blockquote, Code, Highlight, Kbd, Label, Legend, Span, Text, Title

### Media（メディア）-- 4 コンポーネント

Audio, Icon, Image, Video

### Charts（チャート）-- 12 コンポーネント

AreaChart, BarChart, Charts, FunnelChart, GanttChart, GaugeChart, Heatmap, LineChart, PieChart, RadarChart, ScatterChart, Treemap


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

新規コンポーネントは **CSS Modules**（`*.module.scss`）を使用。

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
