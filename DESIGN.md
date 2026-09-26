# WIM UI デザインガイド

このドキュメントは WIM UI のデザインに関する意思決定と仕様をまとめたものです。コーディングルールは `AGENTS.md` と `docs/rules/`、実装手順は `docs/rules/new-component.md` を参照してください。

---

## デザイン原則

1. 一貫性 -- すべての UI 要素はデザイントークンを通じて統一されたビジュアル言語を共有する
2. アクセシビリティ -- WCAG AA 準拠のコントラスト比と WAI-ARIA パターンを前提とする
3. テーマ適応性 -- ライトモード/ダークモードの切り替えはセマンティックトークンのみで完結する
4. 多言語対応 -- 日本語・英語・ポルトガル語の 3 言語を基本とし、言語ごとのタイポグラフィ特性を考慮する
5. レスポンシブ -- デスクトップ/モバイルの両方で最適な体験を提供する

---

## カラーシステム

**本文は [`docs/design/color.md`](./docs/design/color.md) に移した**（T252・2026-09-20）。

PCCS パレット・セマンティックカラー・不透明度（RGB トークン）・特殊なカラーカテゴリはすべて移動先にある。色を足すとき、`intent` を足すとき、コントラストの赤を直すときに読むこと。

切り出した理由は、この文書が 719 行あり、**自分たちが公開した基準（200〜500 行）を超えていた**こと。色は「色を触る作業」でだけ要る節で、実務の見張りは移動先の冒頭に挙げた機械ガード（`check:contrast` ほか）が持っている。

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

**本文は [`docs/design/typography.md`](./docs/design/typography.md) に移した**（T252・2026-09-20）。

フォントファミリー・サイズ・ウェイト・行高・字間・言語による出し分け・**見出しの行高はどの層で決まるか（T208・公開契約）**・テキスト装飾はすべて移動先にある。

切り出した理由はカラー節と同じで、タイポグラフィは「文字を触る作業」でだけ要るため。

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
| `--wim-shadow-xs` | 0 1px 2px oklch(0 0 0 / 0.08), 0 1px 1px oklch(0 0 0 / 0.05) | 微小な浮き（Badge, Chip） |
| `--wim-shadow-sm` | 0 2px 4px oklch(0 0 0 / 0.08), 0 1px 2px oklch(0 0 0 / 0.12) | カード、ドロップダウン |
| `--wim-shadow-md` | 0 4px 12px oklch(0 0 0 / 0.08), 0 2px 4px oklch(0 0 0 / 0.12) | モーダル、ポップオーバー |
| `--wim-shadow-lg` | 0 12px 24px oklch(0 0 0 / 0.12), 0 8px 16px oklch(0 0 0 / 0.18) | ドロワー、全画面オーバーレイ |
| `--wim-shadow-inset` | inset 0 2px 4px oklch(0 0 0 / 0.1) | 押し込み効果 |
| `--wim-shadow-focus` | 0 0 0 var(--wim-focus-outline-width) var(--wim-color-focus-outline) | 影でフォーカスを出す部品用（既定は outline。T270） |

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
| `--wim-easing-standard` | cubic-bezier(0.4, 0, 0.2, 1) | 汎用トランジション |
| `--wim-easing-entrance` | cubic-bezier(0, 0, 0.2, 1) | 画面に入る |
| `--wim-easing-exit` | cubic-bezier(0.4, 0, 1, 1) | 画面から出る |
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

- 既定のフォーカス表示: `outline: var(--wim-focus-outline-width) solid var(--wim-color-focus-outline)`（`base.scss` の `:focus-visible`）。`box-shadow` の輪は Windows のハイコントラスト表示で消え、部品自身の影にも負けるので既定にしない（T270）
- フォーカス色: `--wim-color-focus-outline` = light は Primary、dark は `--wim-color-text-accent`（light の Primary は dark の面の上で 1.61:1 しかない）。どちらも面に対して 3:1 以上
- 影でフォーカスを出す部品: `--wim-shadow-focus`（フォーカス色の 2px 実線）
- フォーカスオフセット: `--wim-focus-outline-offset` = 2px
- 部品側で `outline: none` を書くと既定のフォーカス表示も消える。書くなら同じ要素か子孫に代わりの表示を必ず用意する
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
