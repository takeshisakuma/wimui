# 実装の規則（コンポーネント API・レスポンシブ・a11y）

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# 実装

- 可能な限り既存コンポーネント（`src/components/_internal/` の内部コンポーネントを含む）を活用し、独自実装しないようにしてください。
  - 内部コンポーネントを設計・修正する際は、JSDoc に 「Composition Contract（合成契約）」 を明記してください。これにより、上位コンポーネントとの責任分界点（Portalの管理、スクロールロックの要否、イベントの伝搬制御など）を明確にし、暗黙的な挙動によるバグを防ぎます。
- **複合 UI はレシピ優先。** 既存 primitives の組み合わせで足りる画面パターンは、薄いラッパコンポーネントを新規公開せず `stories/Patterns/` にレシピ（Stories）として書く。公開コンポーネント化するのは、再利用 API・アクセシビリティ・状態機械が primitives 合成だけでは保てないときに限る。例: Form + RHF は `wimui/rhf`（薄いアダプタ）+ Patterns → Form → React Hook Form。判断の基準はこのファイル末尾の「複合 UI / レシピ優先」。
- **新規の公開コンポーネントは、カタログの単体ストーリーだけでは出荷しない。** 必ず一度合成する（T179 のプローブ）。他の部品と組んで置き方・a11y・狭幅を触り、確認が終わったらプローブ画面は捨てる。残すのは部品の修正と Realistic な単体ストーリー。カバー率のために `stories/Patterns/` へ書かない。単体で足りると既に決めてあるもの（`Portal` / `FocusTrap` / `Transition` / `VisuallyHidden`）と、内側でしか描かれない部品は除く。書き方は `docs/design/composition.md`（コンポジションガイドライン）。**プローブの器は 2 種類以上通すこと** ── ①幅が決まっている器（表のセル・固定幅のカード）と ②幅が中身で決まる器（`layout: "centered"` のような shrink-to-fit）。同じ 390px を測っても、器が違えば別の話になる。2026-08-29 の `Barcode` は ① だけで通したため、② で `max-width: 100%` が効かずページが横スクロールする欠陥をプローブで再現できず、CI の narrow-overflow が 3 件で拾った。
- `any` の使用は禁止です。Props は `interface` または `type` で明示的に型定義してください。
- HTML要素を拡張するコンポーネントでは `React.ComponentPropsWithoutRef<"element">` を使って HTML属性を継承してください。不要な属性は `Omit` で除外してください。
- コンポーネントAPIの整合性（Prop名の統一）を保ってください。以下のルールに従ってください。
  - 無効化には `disabled` prop（HTML ネイティブ属性）のみを使用してください。 `status="disabled"` や `state="disabled"` のような形でインタラクション状態を `status` / `state` に混在させないでください。
  - `intent` prop は視覚・意味的状態のみを表します。 値は `"default" | "error"` などに限定し、`"disabled"` を含めないでください。
    - 例外（Resultコンポーネント）: 意味的な状態（success, error等）は `intent` プロパティ、HTTPステータスコード（404, 500等）は `status` プロパティとして使い分けます。
  - `size`, `radius`, `intensity` 等の prop の値は `"sm" | "md" | "lg"`（`ComponentSizeBasic`）に統一してください。 レイアウト用の幅指定など別用途では `"xs" | "sm" | "md" | "lg" | "xl"` を使用してかまいません。タイポグラフィ・アイコンなど広いスケールが必要な場合のみ、下記の拡張サイズ型（`ComponentSizeExtended` / `ComponentSizeText` / `ComponentSize`）を使用してください。**SCSS にスタイルを実装していないサイズ値を型に含めないでください**（Docgen 経由で Props 表に「指定できるが何も起きない値」が公開されてしまいます）。
  - ポリモーフィズムには `asChild` prop（Slot パターン）を導入してください。 従来の `as` prop によるタグ切り替えよりも、複雑なコンポーネント（React Router の Link 等）との統合が容易になります。実装には `@radix-ui/react-slot` を使用し、内部構造を維持する場合は `Slottable` を併用してください。現在、以下のコンポーネントで実装済みです。
    - Typography: Title, Text, Span, Legend, Label, Highlight, Kbd, Code, Blockquote
    - Overlay: Tooltip, Popover, Dropdown, HoverCard, Drawer, Dialog, BottomSheet, Menu, ContextMenu
    - Navigation: Link, CommandPalette, Breadcrumb, Stepper, Menubar, Tabs, TabNavigation, TabBar, Pagination, HamburgerMenu, BackTop
    - Form: Button, IconButton, Input, Select, Checkbox, CheckboxGroup, Radio, RadioGroup, Slider, NumberInput, Mentions, OtpInput, FloatButton, FieldTemplate, DatePicker, CreditCardInput, Switch, SwitchGroup, LinkButton, Textarea, SegmentedControl, ToggleGroup, TreeSelect, ButtonGroup, ThemeToggle, RangeSlider, Rating, CopyButton
    - Layout: Box, Flex, Stack, Group, Grid, Toolbar
    - Data Display: Badge, Chip, Tag, Card, Table, List, Kanban, Accordion, Timeline, Carousel, SwipeAction, SortableList, PullToRefresh, CalendarHeatmap, RelativeTime, Countdown
    - Media: Lightbox
    - このリストは `scripts/check-aschild.js` の必須リスト（`requiredComponents`）と同期しています。実装を追加・削除した場合は両方を更新してください。現状の実装一覧は `node scripts/check-aschild.js --list` で確認できます。
    - 注意: チェッカーが検出できるのは「リストにあるのに実装がない」ケースのみです。逆方向（実装したのにリストへ追加し忘れた）は自動検出されないため、新規に `asChild` を実装した際は必ず `--list` の出力と本リストを突き合わせてください。
  - 共通 prop 型は `src/types/tokens.ts` の型を使用してください。 インラインのユニオン型を重複定義しないでください。定義済みの型は以下の通りです。
    - `ComponentSizeBasic` — `"sm" | "md" | "lg"`（`size` prop の標準。大多数のコンポーネントはこれを使用）
    - `ComponentSizeExtended` — `"sm" | "md" | "lg" | "xl"`（Loader・Spinner・LoadingOverlay）
    - `ComponentSizeText` — `"xs" | "sm" | "md" | "lg" | "xl"`（Text・Span）
    - `ComponentSize` — `"xs"`〜`"5xl"` の9値フルスケール（Icon など全サイズを実装しているコンポーネント専用）
    - `ButtonVariant` — `"solid" | "outline" | "ghost"`（Button・ButtonGroup・LinkButton）
    - `ButtonIntent` — `"default" | "destructive" | "positive"`（Button の意味的意図）
    - `FieldVariant` — `"outline" | "ghost"`（Input・Textarea・DatePicker など）
    - `IndicatorVariant` — `"solid" | "outline" | "subtle"`（Badge・Chip・Tag）
    - `IndicatorIntent` — `"primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral"`（Badge・Chip・Tag・Progress など）
    - `FeedbackIntent` — `"info" | "success" | "warning" | "error"`（Alert・Banner・Toast・Notification など）
    - `FieldIntent` — `"default" | "error"`（Input・Textarea・DatePicker・RichTextEditor など）
    - `FieldWidth` — `"xs" | "sm" | "md" | "lg" | "xl"`（Input・Select・DatePicker などの幅指定）
    - `WimIntent` — 上記すべてを含む全意図値のユニオン（汎用）
  - 新しい共通 prop 型が必要になった場合は、インラインで定義せず `src/types/tokens.ts` に追加してください。
- 最新のセマンティックHTMLを使用してください。
- コンポーネントではデザイントークン（`src/tokens/`）の値を使用してください。CSS値のハードコードはカラーに限らずすべて禁止です。 `padding`, `border-radius`, `font-size`, `font-weight`, `box-shadow`, `opacity`, `transition`, `animation-duration` なども対応する `--wim-*` トークンを使用してください。
- トークン化の例外（ハードコードの許容要件）: 以下の特殊なケースに限り、トークンを使用しない「意図的なハードコード」が認められます。詳細は `docs/TOKENIZATION_EXCEPTIONS.md` を参照してください。
  - 幾何学的整合性: 黄金比やパーツ間の厳密なアスペクト比計算が必要な場合。
  - 描画補正: ブラウザのサブピクセルレンダリングに伴う微調整（1.5pxなど）。
  - 構造上の固定寸法: グローバルの余白設定から切り離すべき死守すべき寸法。
  - インタラクションの物理挙動: 感覚的なフィードバック（scale等）。
- 暫定的なハードコード: トークン化が必要だが時間がかかる、あるいは適切なトークンが未定義で追加の議論が必要な場合は、必ずソースコード内に `// TODO: tokenization` というコメントを記述してください。このコメントがない未承認のハードコードは技術負債として却下されます。
- 既存トークンで対応できない値が必要な場合は独自値を直接書かず、先に `src/tokens/` にトークンを追加してから使用してください（追加手順は `docs/rules/tokens.md`「既存トークンが不足している場合のフロー」）。ストーリーやdocsのユーティリティコンポーネント（`stories/` 配下のTSX）でインラインスタイルを使う場合も、`color: 'gray'` のようなハードコードされたCSS色名は使わず、`var(--wim-color-text-secondary)` などのCSSカスタムプロパティを使用してください。ダークモードで背景色と同化して読めなくなります。
- `stories/` 配下のTSXでは、`var(--bg-component)`・`var(--text-primary)`・`var(--text-secondary)` などの内部ショートエイリアスを使用しないでください。ストーリーを持たない純粋なMDXページ（`<Meta title="..." />` のみのページ）ではデコレーターが動作しないため `data-theme` が設定されず、これらの変数が意図した色に解決されないケースがあります。代わりに必ず `var(--wim-color-surface)`・`var(--wim-color-text-primary)`・`var(--wim-color-text-secondary)` などの `--wim-color-*` プレフィックス付きトークンを使用してください。
- レスポンシブデザインに対応してください。ブレークポイントの使い分けは以下のルールに従ってください。

## メディアクエリ vs コンテナクエリ

| 用途 | 使用するクエリ | mixin |
|------|--------------|-------|
| ビューポート全体に依存するレイアウト（AppShell、Dialog、グローバル余白など） | メディアクエリ | `@include up()` / `@include down()` |
| ページ内に配置されるUIコンポーネント（サイドバーの有無で表示サイズが変わりうるもの） | コンテナクエリ | `@include container-up()` / `@include container-down()` |

判断基準： コンポーネントがサイドバーや他のレイアウト要素と並んで配置されたとき、ビューポート幅ではなくコンポーネント自身の幅でレイアウトを切り替えるべき場合はコンテナクエリを使用してください。

コンテナクエリを使う場合の注意： `container-type: inline-size` を付与した要素は `contain: inline-size` が暗黙的に適用されます。`display: flex` のコンテナに付与すると子要素のパーセンテージ幅計算が壊れることがあります。その場合はメディアクエリに留めてください（例: ButtonGroup）。
- 複雑なコンポーネントでは、矢印キーによるスムーズなフォーカス移動など、WAI-ARIAの仕様に基づいたキーボードナビゲーションを実装してください。
- `input` や `textarea` など、ユーザーが入力・選択する部分のplaceholderは、説明・指示・制限事項ではなく、実際にユーザーが入力するような内容にしてください。
  - 例外: `type="password"` の入力には placeholder を付けないでください。平文で表示される placeholder はパスワードの入力例として機能せず、伏字風の文字列（`••••••••`）は入力済みと誤認されるためです。文字数などの制約はヘルパーテキストで伝えてください。

# アクセシビリティ

- `eslint-plugin-jsx-a11y` のチェックを通過してください（lint時に自動チェックされます）。
- インタラクティブ要素には適切な `role` 属性を付与してください。
- 視覚的なラベルがない要素には `aria-label` または `aria-labelledby` を必ず付与してください。
- 補足説明が必要な要素には `aria-describedby` を使用してください。
- モーダルやドロップダウンなどフォーカスを閉じ込める必要がある場合は、フォーカストラップを実装してください。
- カラーコントラスト比はWCAG AA基準を満たしてください（通常テキスト: 4.5:1以上、大テキスト: 3:1以上）。
- セマンティックカラートークンを使用していればコントラスト比は自動的に確保されます。

---

## 複合 UI / レシピ優先

画面パターンや「よくある組み合わせ」は、まず **Patterns レシピ**（`stories/Patterns/`）に書く。

| やる | やらない |
|---|---|
| 既存 Button / Input / Field / Dialog 等を Stories で合成して示す | 同じ合成を薄い公開ラッパコンポーネントとして量産する |
| 本当に必要な共通配線だけ薄いエントリにする（例: `wimui/rhf`） | Form 全体を包む巨大ラッパをライブラリ本体に増やす |
| レシピが増えたら Patterns 配下にカテゴリを足す | primitives 不足を理由に、説明用だけのコンポーネントを `src/components` に増やす |

判断: 利用者が **props API として依存する状態・a11y・焦点管理**が必要なら公開コンポーネント。単なる配置・配線の見本ならレシピ。
