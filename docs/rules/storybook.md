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
