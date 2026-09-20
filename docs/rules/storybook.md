# Storybook 階層ルール（Sidebar Hierarchy）

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# 2. Storybook 階層ルール (Sidebar Hierarchy)

コンポーネント数が増大しても目的のパーツを見つけやすくするため、以下の階層構造に従ってください。

- 形式: `Components/[Category]/[ComponentName]`
- トップレベルカテゴリ (Approved Categories):
  - `Advanced Inputs`: 複雑な入力 (Cascader, TreeSelect, Dropzone等)
  - `Alerts & Notifications`: 通知・警告 (Alert, Notification, Snackbar等)
  - `Application Shell`: アプリ外枠 (AppShell, Header, Sidebar等)
  - `Basic Inputs`: 基本入力 (Input, NumberInput, Textarea等)
  - `Buttons`: ボタン類 (Button, IconButton, CopyButton等)
  - `Data Containers`: 器となる要素 (Card, Accordion等)
  - `Data Indicators`: 状態・データの視覚化 (Badge, Avatar, Tag等)
  - `Data Structures`: 構造化データ (Table, DataGrid, TreeView, List等)
  - `Form Layout`: フォームの構造 (Label, Fieldset, InputGroup等)
  - `Layout`: 基本レイアウト要素 (Flex, Grid, Stack, Container等)
  - `Loading States`: 読み込み中表示 (Loader, Progress, Skeleton等)
  - `Media`: 画像・動画・カルーセル (Image, Video, Carousel等)
  - `Navigation Elements`: 主要ナビゲーション (Tabs, Pagination, Breadcrumb等)
  - `Navigation Utilities`: 補助的なナビ (Affix, BackTop, FloatButton等)
  - `Overlays`: 重ね合わせ要素 (Dialog, Tooltip, Popover, Menu等)
  - `Pickers & Sliders`: 選択・スライダー (DatePicker, ColorPicker, Slider等)
  - `Selection Controls`: 選択コントロール (Checkbox, Radio, Switch, SegmentedControl等)
  - `Typography & Icons`: 文字・アイコン (Text, Link, Icon等)
  - `Utilities`: その他便利要素 (Divider, InfiniteScroll, Marquee等)
  - `Visualization`: グラフ・チャート (Charts, GanttChart, NodeGraph, ScheduleView等)
  - `AI`: AI向けUI (PromptInput, StreamingText等)
  - `Internal`: 内部共用パーツ (IndicatorBase, OverlayBase, StatusContent, FieldCharacterCount等)。アプリからの直接利用は非推奨

- 注意点:
  - `stories/*.stories.tsx` の `title` プロパティでこれを定義します。
  - ディスク上のディレクトリ名（`src/components/form/` 等）よりも、この Storybook 上のカテゴリ名を優先して整理してください。
  - 新しいカテゴリを追加する場合は、必ずこの文書を更新し、`src/data/components.json` との整合性を取ってください。

---

## Storybook ストーリーの書き方

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyComponent } from "@/components/MyComponent/MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "Components/カテゴリ/MyComponent",
  component: MyComponent,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

// エクスポート名は PascalCase にする（MDX から参照するため）
export const Default: Story = { args: { ... } };
export const WithIcon: Story = { args: { ... } };
```

MDX から参照する際はエクスポート名と完全一致が必要です。

### Layout demo chrome（色付きセル）

Flex / Grid / Stack / SimpleGrid / Masonry など、**子はレイアウト構造を見せるためだけ**にあるストーリーでは、共有ヘルパー `stories/layout/_helpers/DemoCell.tsx` を使う。

- intent 淡色塗り + `text-*` 文字色 + **中立** `border`（intent 色の枠は使わない）
- padding / radius はトークン（既定 `md`）。生 HSL・px 直書きの角丸は避ける
- 複数子は `demoCellIntent(i)` で cycle。ホスト枠（幅デモの外側）は `surface-variant` / `surface` + 中立 border

使わないケース: Box 自身の props デモ、実コンポーネントを載せるデモ（Group+Button、AppShell、Patterns）、製品 UI 風の合成画面。

### argTypes の書き方

control の型指定はオブジェクト形式でなく文字列の短縮形を使用してください。

```tsx
// NG
control: { type: "select" }
control: { type: "boolean" }

// OK
control: "select"
control: "boolean"
```

選択肢の数が少ない（2〜4個程度）場合は `"radio"` を使用してください。`size` prop はコンポーネントを問わず常に `"radio"` にしてください。

```tsx
size: {
  control: "radio",
  options: ["sm", "md", "lg"],
},
intent: {
  control: "select",
  options: ["primary", "secondary", "success", "warning", "error", "info", "neutral"],
},
```

`options` の内容はコンポーネントの prop 型と一致させてください。型を変更した場合はストーリーの `options` も合わせて更新してください。

```tsx
// MDX
<Canvas of={MyComponentStories.Default} />   // ← エクスポート名と一致させる
<Controls of={MyComponentStories.Default} />
```
