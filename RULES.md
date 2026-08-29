# 基本ルール

- 回答は日本語で行ってください。
- 絵文字を使わないでください。

---

# ドキュメント管理

コンポーネントを新規作成・削除した場合は、以下をすべて更新してください。

- `docs/componentList.mdx`（データ実体は `src/data/components.json`）
- コンポーネント個別のmdx
- カテゴリーのmdx

---

# 多言語化（i18n）

## 境界（ランタイム vs ドキュメント）

`public/locales/` は置き場が共通だが、**利用者アプリに同梱される文字列**と **Storybook / ガイド専用の文言**は別物として扱う。

| 層 | 対象 | 置き場の目安 | 同梱 | 言語 |
|---|---|---|---|---|
| **ランタイム** | コンポーネント UI（aria-label、空状態、ボタン文言など） | `docs_` / `audit` **以外**の namespace（`form.json`, `components.json` 等）。`src/components` から `t(...)` / `useWimTranslation` で参照 | `npm run i18n:bundle` → `src/i18n/generated/` に**使用キーのみ**抽出して npm パッケージへ | **en / ja / pt 必須** |
| **ドキュメント** | Storybook MDX・ガイド長文・Props 説明・ストーリー文言 | `docs_*.json`（および `audit`）。`<T k="..." />` 等 | **ライブラリ利用側には同梱しない**（Storybook / 開発ドキュメント用） | キー集合は en / ja / pt で揃える（`i18n:check`）。**長文ガイドは en を正本**として書き、`npm run i18n:sync` で ja / pt へ展開 |

方針:

- ランタイムキーは短く・UI 向けに保つ。ガイドの長文や設計論をコンポーネント用 namespaceへ入れない。
- 新規の長いガイド（`docs_guide_*` 等）は **まず `public/locales/en/` に書く**。ja / pt は sync 後に必要なら人手で整える。en だけ先行コミットして他言語を空けたままにしない（`i18n:check` が落ちる）。
- ソースの JSDoc（IDE ホバー）は英語。Storybook Props 表の多言語は `doc.*_prop_*` キー側で行う（下記）。
- ライブラリ利用者は i18next 不要。表示言語は `setWimLocale` / `WimProvider` の `locale`。

## 共通ルール

- `public/locales/` 配下のJSONファイルは1000行を超えないようにしてください。超える場合は分割してください。
- en / ja / pt すべてのリソースファイルで漏れなく定義されているか、`npm run i18n:check` でチェックしてください（`npm run i18n:sync` はチェックではなく en → ja/pt への自動翻訳・同期コマンドです）。
- i18nキーは ネスト構造 で命名してください（例: `a11y.close`, `button.clear`, `fileupload.button`）。JSONファイルはネストオブジェクト形式で管理し、コード側は `.` 区切りのドット記法を使用します。新規キーは同じ prefix グループに追加してください。
- 資料の列見出し「コンポーネント」は `doc.std_column_component` を正本とする（T157）。`table.header_component` は出荷物に別名として残してあるので**消さない**。新しい表では正本を使う。値が割れていないことは `npm run i18n:aliases` が見る。
- ファイルの分割: 単一の JSON ファイルが 1000 行を超える前に、カテゴリー単位（`form.json`, `data-display.json` 等）でファイルを分割してください。新しいファイルを追加した場合は `stories/i18nConstants.ts` に自動で反映されます。
- ドキュメントの自動化（Docgen）: コンポーネントの Props、使用デザイントークン、Anatomy（構成要素）、テスト実行方法は、Vite プラグインによって `src/data/docgen_index.json` およびカテゴリ別の `docgen_<category>.json` へ自動的に分割抽出されます。MDX では `<Docgen />` コンポーネントを使用することで、見出し（H2）を含めてこれらの情報を自動的に差し込むことができます。詳細は `SKILLS.md` を参照してください。
- Props 説明文の多言語化: Props 表の Description は `doc.<component>_prop_<propName>` キー（コンポーネント名は `relativeTime_title` 等と同じ lowerCamelCase。例: `doc.spoiler_prop_lines`）を en / ja / pt の3言語に定義してください。複合サブコンポーネントはドットを除去してから lowerCamelCase にする（例: `Table.Header` → `doc.tableHeader_prop_asChild`）。`<Docgen section="props" />` はこのキーを優先して表示し、キーが未定義の場合はソースコードの JSDoc にフォールバックします。JSDoc 自体は IDE の型ホバーにも表示されるため英語で記述してください（新規コンポーネントでは JSDoc（英語）+ 3言語のキーの両方を用意する）。既存コンポーネントのキーは段階的に整備します。
- MDXや TSX/Stories で `<T k="..." />` や `t("...")` を使うキーを新規追加・変更した場合は、必ず en / ja / pt のすべてのロケールファイルに同じキーを追加してください。1言語だけ追加して他を忘れると翻訳キーがそのまま表示されます。
- **`pt` ロケールはブラジルポルトガル語（PT-BR）に統一してください。** 欧州ポルトガル語（PT-PT）の語彙は使用禁止です。判断に迷う場合は下表を参照してください。

| PT-PT（禁止） | PT-BR（使用する） |
|---|---|
| utilizador / utilizadores | usuário / usuários |
| ficheiro / ficheiros | arquivo / arquivos |
| ecrã | tela |
| contentor / contentores | contêiner / contêineres |
| arrastar e largar | arrastar e soltar |
| por defeito | por padrão |
| detetar / detetado / deteção | detectar / detectado / detecção |
| submissão（フォーム送信の意味で） | envio |
| inquérito / inquéritos | pesquisa / pesquisas |
- **RTL（Right-to-Left）は対応予定なし。** 公式言語 en / ja / pt はいずれも LTR。論理プロパティへの一括移行や `dir="rtl"` 対応は着手しない（方針変更時は `IMPROVEMENTS.md`「対象外」を更新してから）。
- 既存の汎用キー（`doc.scenario.*` など）を MDX で使う場合は、事前にロケールファイルに存在するか検索して確認してください。存在しなければ追加してください。`doc.scenario.filter_title` は存在するが `doc.scenario.faq_title` は存在しない、といった漏れが起きやすいです。

---

# コンポーネント新規作成・修正、ストーリーの新規作成・修正時の共通ルール

## 実装

- 可能な限り既存コンポーネント（`src/components/_internal/` の内部コンポーネントを含む）を活用し、独自実装しないようにしてください。
  - 内部コンポーネントを設計・修正する際は、JSDoc に 「Composition Contract（合成契約）」 を明記してください。これにより、上位コンポーネントとの責任分界点（Portalの管理、スクロールロックの要否、イベントの伝搬制御など）を明確にし、暗黙的な挙動によるバグを防ぎます。
- **複合 UI はレシピ優先。** 既存 primitives の組み合わせで足りる画面パターンは、薄いラッパコンポーネントを新規公開せず `stories/Patterns/` にレシピ（Stories）として書く。公開コンポーネント化するのは、再利用 API・アクセシビリティ・状態機械が primitives 合成だけでは保てないときに限る。例: Form + RHF は `wimui/rhf`（薄いアダプタ）+ Patterns → Form → React Hook Form。詳細は `SKILLS.md`「複合 UI / レシピ優先」。
- **新規の公開コンポーネントは、カタログの単体ストーリーだけでは出荷しない。** 必ず一度合成する（T179 のプローブ）。他の部品と組んで置き方・a11y・狭幅を触り、確認が終わったらプローブ画面は捨てる。残すのは部品の修正と Realistic な単体ストーリー。カバー率のために `stories/Patterns/` へ書かない。単体で足りると既に決めてあるもの（`Portal` / `FocusTrap` / `Transition` / `VisuallyHidden`）と、内側でしか描かれない部品は除く。書き方は `DESIGN.md` のコンポジションガイドライン。**プローブの器は 2 種類以上通すこと** ── ①幅が決まっている器（表のセル・固定幅のカード）と ②幅が中身で決まる器（`layout: "centered"` のような shrink-to-fit）。同じ 390px を測っても、器が違えば別の話になる。2026-08-29 の `Barcode` は ① だけで通したため、② で `max-width: 100%` が効かずページが横スクロールする欠陥をプローブで再現できず、CI の narrow-overflow が 3 件で拾った。
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
- 既存トークンで対応できない値が必要な場合は独自値を直接書かず、先に `src/tokens/` にトークンを追加してから使用してください（追加手順は `SKILLS.md` を参照）。ストーリーやdocsのユーティリティコンポーネント（`stories/` 配下のTSX）でインラインスタイルを使う場合も、`color: 'gray'` のようなハードコードされたCSS色名は使わず、`var(--wim-color-text-secondary)` などのCSSカスタムプロパティを使用してください。ダークモードで背景色と同化して読めなくなります。
- `stories/` 配下のTSXでは、`var(--bg-component)`・`var(--text-primary)`・`var(--text-secondary)` などの内部ショートエイリアスを使用しないでください。ストーリーを持たない純粋なMDXページ（`<Meta title="..." />` のみのページ）ではデコレーターが動作しないため `data-theme` が設定されず、これらの変数が意図した色に解決されないケースがあります。代わりに必ず `var(--wim-color-surface)`・`var(--wim-color-text-primary)`・`var(--wim-color-text-secondary)` などの `--wim-color-*` プレフィックス付きトークンを使用してください。
- レスポンシブデザインに対応してください。ブレークポイントの使い分けは以下のルールに従ってください。

### メディアクエリ vs コンテナクエリ

| 用途 | 使用するクエリ | mixin |
|------|--------------|-------|
| ビューポート全体に依存するレイアウト（AppShell、Dialog、グローバル余白など） | メディアクエリ | `@include up()` / `@include down()` |
| ページ内に配置されるUIコンポーネント（サイドバーの有無で表示サイズが変わりうるもの） | コンテナクエリ | `@include container-up()` / `@include container-down()` |

判断基準： コンポーネントがサイドバーや他のレイアウト要素と並んで配置されたとき、ビューポート幅ではなくコンポーネント自身の幅でレイアウトを切り替えるべき場合はコンテナクエリを使用してください。

コンテナクエリを使う場合の注意： `container-type: inline-size` を付与した要素は `contain: inline-size` が暗黙的に適用されます。`display: flex` のコンテナに付与すると子要素のパーセンテージ幅計算が壊れることがあります。その場合はメディアクエリに留めてください（例: ButtonGroup）。
- 複雑なコンポーネントでは、矢印キーによるスムーズなフォーカス移動など、WAI-ARIAの仕様に基づいたキーボードナビゲーションを実装してください。
- `input` や `textarea` など、ユーザーが入力・選択する部分のplaceholderは、説明・指示・制限事項ではなく、実際にユーザーが入力するような内容にしてください。
  - 例外: `type="password"` の入力には placeholder を付けないでください。平文で表示される placeholder はパスワードの入力例として機能せず、伏字風の文字列（`••••••••`）は入力済みと誤認されるためです。文字数などの制約はヘルパーテキストで伝えてください。

## アクセシビリティ

- `eslint-plugin-jsx-a11y` のチェックを通過してください（lint時に自動チェックされます）。
- インタラクティブ要素には適切な `role` 属性を付与してください。
- 視覚的なラベルがない要素には `aria-label` または `aria-labelledby` を必ず付与してください。
- 補足説明が必要な要素には `aria-describedby` を使用してください。
- モーダルやドロップダウンなどフォーカスを閉じ込める必要がある場合は、フォーカストラップを実装してください。
- カラーコントラスト比はWCAG AA基準を満たしてください（通常テキスト: 4.5:1以上、大テキスト: 3:1以上）。
- セマンティックカラートークンを使用していればコントラスト比は自動的に確保されます。

## アイコン

- アイコンは `src/icon/` に SVG ファイルを配置してください。配置されたファイルは、Vite ビルド時および保存時に 自動的に React コンポーネントおよびマッピング定義として `src/icon/index.ts` へエクスポートされます。
- 開発者が手動で `Icon.tsx` のインポートや型定義を更新する必要はありません。
- コンポーネント内でアイコンを使用する場合は、`Icon` コンポーネントの `name` prop にアイコン名（例: `name="CheckIcon"`）を渡すか、`src/icon/` から直接コンポーネントをインポートして `component` prop（例: `component={CheckIcon}`）に渡してください。後者は Tree-shaking に最適です。

### SVG の描き方（`npm run check:icons` で強制）

出荷アイコンは **1 つの線画ファミリー**です。以下は好みではなく契約で、外れると同じ画面に置いたときに**線幅が揃っていても重さが揃いません**（塗りのアイコンは線画の 2〜4 倍のインク量になります）。新規追加はこの形で描いてください。

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12" />
</svg>
```

| 項目 | 値 | 理由 |
|---|---|---|
| `viewBox` | `0 0 24 24` | 座標系を 1 つに保つ。`Icon` は `1em` に追従させるので、ここが違うと同じ `size` でも実寸が変わる |
| `stroke-width` | **`2` 単一値** | ファイル内で 2 種類使わない（太さが混ざると同じ画面で別ファミリーに見える） |
| `stroke-linecap` / `stroke-linejoin` | `round` | 角丸のスタンスをセット全体で揃える |
| `fill` | `none`（線画） | **塗りのアイコンを混ぜない。** 例外は「点」を意味する `circle` のような形だけで、その場合も理由をファイル冒頭のコメントに書く |
| 色 | `currentColor` | 色は必ず継承させる。`#000` 等の直書き禁止 |
| `width` / `height` 属性 | **付けない** | `Icon` が `1em` を当てるので無意味。あると出所の違いが差分に残る |

- **アイコンを足したら `npm run check:icons:provenance` を通してください（`audit:lib` にも入っています）。** 出荷アイコンの中身を Feather / Lucide と突き合わせ、`scripts/icon-provenance.json` の記録とずれたら止まります。**「自分で描いた」という記憶は出所の証拠になりません** ── 2026-08-05 に、契約に沿って描いたつもりの 2 個（`loading` / `square`）が Lucide とバイト一致でした。上流と一致していれば `NOTICE` にその表示が必要になります。記録の更新は `node scripts/check-icon-provenance.js --update` で、**`NOTICE` も必ず一緒に直します**。
- **描き足す前に、代用が起きていないか確認してください。** 記号（`↑` `→`）や自前 SVG で代わりをしているなら、それは「アイコンが足りない」というより「セットに語彙が無い」問題です（`IMPROVEMENTS.md` の T78）。
- **形が同じで名前だけ違うものを増やさないこと。** 既に `align-justify` == `menu`、ホットドッグ == `minus` の重複が出荷されています（T65）。
- 見た目の重さを数値で確かめたいときは、24px 相当で描画して不透明ピクセルの平均濃度（インク量）を測り、**セットの中央値の 0.5〜1.5 倍**に収まるかを見ます。

## CSS クラス名とスタイリング

- 新規コンポーネントでは CSS Modules（`*.module.scss`）を使用してください。
- クラス名は JS から参照しやすい標準的なケバブケースまたはキャメルケースを使用します（`wim-` プレフィックスは不要です）。
- ルート要素には `.root`、内部パーツには `.icon`, `.label` などの名称を使用してください。
- Anatomy: `.scss`（または `.module.scss`）ファイル内のクラス名から構成要素を抽出します。CSS Modules の場合、`.root` や共通のサイズ・色修飾子（`.sm`, `.primary` 等）を除いたユニークなクラス名が自動的に抽出されます。
- **すべての公開コンポーネントはルート要素に安定したグローバルフック `wim-<kebab名>` を付与します**（例: `Button`→`wim-button`, `DateRangePicker`→`wim-date-range-picker`）。CSS Modules のクラス名はハッシュ化され不安定なため、これが利用者向けの**唯一の安定した class 上書きポイント**であり公開契約です。スタイルのカスタマイズは原則 CSS Variables（`--wim-*` トークン）で行い、要素単位の上書きが必要な場合のみこのフックを使います。`classNames("wim-<kebab名>", styles.root, className)` のようにルート要素へ付与してください（scaffold が自動生成、`npm run check:hooks` で検証）。DOM ルートを持たない振る舞い専用（`Portal` / `Transition`）は例外です。
- 共通ベースコンポーネント（`IndicatorBase` 等）を使用する場合は、`prefixClass` の代わりに `styles` prop を渡してください。

## デザイントークン（CSS カスタムプロパティ）

### 新規トークン追加ルール（近傍別名を増やさない）

トークンを足す前に、**既存で足りるか**を必ず確認する。公開契約（`--wim-color-*` 等）に載った名前は後から消しにくい。

| 層 | 置き場 | 公開 | いつ使う |
|---|---|---|---|
| **palette** | `tokens/color/base.json` | 間接参照用 | 生色。アプリが直接テーマ上書きする前提にしない |
| **role** | `tokens/color/semantic.json` + dark | **公開**（`WimColor` / snapshot） | 意味のある色（`surface*` / `text-*` / `primary*` / `overlay*` 等）。アプリのテーマ上書き対象 |
| **component** | `src/styles/_component-colors.scss`（`--wim-comp-*`） | **非公開** | 1〜少数コンポーネント専用（avatar / carousel 等）。テーマ契約に載せない |

追加前チェック:

1. 既存 role（特に `surface*` / `text-*` / intent）で表現できないか
2. 近い別名になっていないか（例: `bg-component` ≈ `surface` を再追加しない）
3. 複数コンポーネント・アプリテーマで本当に必要か → 必要なら role。1 コンポーネントだけなら `--wim-comp-*`
4. 足りないときだけ `tokens/` を編集 → `npm run tokens:build` → 公開面が変わるなら `check:tokens:update` / 必要なら `check:api` 周りも確認

手順の詳細は `SKILLS.md`「既存トークンが不足している場合のフロー」。

- グローバルデザイントークンはすべて `--wim-[カテゴリ]-[意味]-[修飾]` の構造で命名してください。
  - カテゴリは下表の既存カテゴリから選択してください。新しいカテゴリを追加する場合は下表に追記してください。
  - 意味・修飾はkebab-caseで記述してください（例: `text-on-primary`, `surface-app`）。

| カテゴリ | 用途 | 例 |
|---|---|---|
| `color` | セマンティックカラー全般 | `--wim-color-primary`, `--wim-color-text-secondary` |
| `spacing` | 余白・間隔 | `--wim-spacing-md` |
| `radius` | 角丸 | `--wim-radius-component`, `--wim-radius-container`, `--wim-radius-overlay` |
| `shadow` | 影・elevation | `--wim-shadow-overlay`, `--wim-shadow-modal` |
| `font-size` | フォントサイズ | `--wim-font-size-xl` |
| `font-weight` | フォントウェイト | `--wim-font-weight-bold` |
| `font-family` | フォントファミリー | `--wim-font-family-ja` |
| `line-height` | 行高 | `--wim-line-height-normal` |
| `opacity` | 透明度 | `--wim-opacity-disabled` |
| `border` | ボーダー幅など | `--wim-border-width-thin` |
| `focus` | フォーカスリング | `--wim-focus-outline-width` |
| `duration` | アニメーション時間 | `--wim-duration-fast` |
| `easing` | イージング関数 | `--wim-easing-standard` |
| `transition` | transition ショートハンド | `--wim-transition-base` |
| `lift` | translate-Y 値 | `--wim-lift-sm` |
| `scale` | scale 値 | `--wim-scale-active` |
| `decoration` | テキスト装飾 | `--wim-decoration-underline` |
| `blur` | ぼかし（backdrop 等） | `--wim-blur-md`, `--wim-blur-glass` |
| `glass` | グラスモーフィズム | `--wim-glass-bg-opacity`, `--wim-glass-border-opacity` |
| `breakpoint` | ブレークポイント | `--wim-breakpoint-md` |
| `z` | Z-index 階層 | `--wim-z-overlay` |

- コンポーネント内部でのみ使用するローカル変数（例: `--bg-tooltip`）は `--wim-` プレフィックス不要です。

### 角丸（Radius）の設計指針

`border-radius` には値ベースのトークン（`--wim-radius-md/lg/xl`）を直接使用しないでください。役割ベースのエイリアストークンを使用してください。`--wim-radius-sm` と `--wim-radius-full` はサブ要素や円形など意味的な代替トークンがないケースに限り引き続き使用できます。

例外: コンポーネントが `radius` prop で値スケールのキー（`"sm" | "md" | "lg" | "full"` 等）をそのまま受け取る設計の場合（Image・Video・Audio の `radius` prop）、prop キーに対応するクラス内では値トークン（`--wim-radius-lg` 等）の参照を許容します。prop の契約（キー名 = 値スケール）を役割エイリアスに読み替えると API と実装が食い違うためです。該当箇所にはその旨のコメントを残してください。

| トークン | 値 | 対象 |
|---|---|---|
| `--wim-radius-component` | 4px | Button, Input, Tag, Badge など小〜中要素 |
| `--wim-radius-container` | 12px | Card, Table, Modal など大きな親要素 |
| `--wim-radius-overlay` | 8px | Tooltip, Popover など浮遊要素 |

**親子ルール（Nested Radius）:** 要素を別の要素の内側に配置する場合、外側の角丸（R_outer）は内側の角丸（R_inner）に両者の間隔（S）を加えた値を目安にしてください。

```
R_outer ≈ R_inner + S
```

例: Card（`--wim-radius-container` = 12px）の内側に Button（`--wim-radius-component` = 4px）を配置し、間隔が 8px の場合 → 12 ≈ 4 + 8 で整合している。

逆に外側と内側が同じ角丸（例: 外枠 4px の中に 4px のボタン）だと角が視覚的に衝突して見えるため、外側を大きくするか内側を小さくして差をつけてください。

この計算は厳密な強制ではなく、設計判断の拠り所として使用してください。lint では検出されません。

### シャドウ（Shadow）の設計指針

浮遊・モーダル面には役割ベースのエイリアストークンを使用してください。静的な浮き上がり（カード、パネル、Terminal 等）や軽いインタラクションのシャドウには値ベース（`--wim-shadow-xs/sm/md/lg`）を直接使用してかまいません。

| トークン | 値 | 対象 |
|---|---|---|
| `--wim-shadow-overlay` | `shadow-md` | Dropdown, Popover, Menu, Tooltip など浮遊小要素 |
| `--wim-shadow-modal` | `shadow-lg` | Dialog, Drawer, Notification, Snackbar など重いモーダル |

`--wim-shadow-xs / sm` はボタンやカードの hover/active など軽いインタラクションに、`--wim-shadow-md / lg` はカードや Terminal など静的に浮き上がって見せる面に使用します。

- `z-index` の使用ルール： z-index はスタッキングコンテキスト内でしか比較されません（`position` + `z-index` / `transform` / `opacity < 1` 等を持つ要素は新しいスタッキングコンテキストを作成し、その内側の値は外と競合しません）。そのため、コンポーネント自身がスタッキングコンテキストを作成している場合、その内部での相対的な上下順は生値のままで構いません（例: トラックの上にサムブを重ねる Slider 内の `z-index: 1` / `2`、固定列を浮かせる Table 内の `z-index: 100` / `110` など）。それに対して、スタッキングコンテキストをまたいで他のコンポーネントと競合しうる値（画面全体を覆うオーバーレイ、サイドバー、トースト等）は必ず `var(--wim-z-*)` トークンを使用してください。利用可能なキーは `WimZIndexKey`（`src/types/tokens.ts`）を参照してください。
  - `--wim-z-sidebar: 900` — サイドバー（非オーバーレイ時）
  - `--wim-z-overlay: 1000` — Dialog・Drawer・Dropdown・Tooltip・Popover 等
  - `--wim-z-overlay-panel: 1001` — オーバーレイ上に重なるパネル
  - `--wim-z-overlay-step: 1002` — Tour ステップバブル
  - `--wim-z-toast: 9999` — Toast・Snackbar・Notification（常に最前面）
- トークンは `src/tokens/` 以下の SCSS ファイルで定義し、`:root` に CSS カスタムプロパティとして公開してください。
- サーフェスは `surface` / `surface-variant` / `surface-hover` を正規名とする（`bg-component` / `bg-secondary` / `bg-hover` は使わない）。自己参照になる循環エイリアスは作成しないでください。
- デザイントークンの追加・変更は `tokens/` ディレクトリの JSON ファイルを編集し、`npm run tokens:build` を実行してください。これにより SCSS 変数と TypeScript 型定義が自動更新されます。手動での SCSS 編集や `src/types/tokens.ts` の型追加は原則不要です。
  - カラー: `tokens/color/base.json` (生色), `tokens/color/semantic.json` (意味的定義)
  - サイズ・間隔: `tokens/spacing.json`
  - 効果（影・透明度・Z-Index・モーション）: `tokens/effects.json`

## インタラクション状態（`:hover` / `:active`）の背景色変更

- `:hover` や `:active` でボタン・タイルなどの 背景色を変化 させる場合は、`opacity` や `filter: brightness()` を使わず、CSS Color Level 4 の oklch 相対色構文 を使ってください。

  ```scss
  // NG — ダークモードで知覚的な変化量がバラつく
  &:hover { filter: brightness(0.9); }
  &:hover { opacity: 0.85; }

  // OK — oklch 空間で L（明度）のみ調整。ダーク・ライト共に均一な変化
  &:hover { background-color: oklch(from var(--wim-color-primary) calc(l * 0.9) c h); }
  ```

- **原則**: 明度の調整（暗くする・明るくする）を伴うすべての色指定において、`color-mix(in srgb, ...)` よりも `oklch(from ...)` を優先してください。SRGB空間での混色は知覚的に不均一な結果を招くため、新規実装での使用は非推奨です。

- 背景色がバリアント（カラー種別）によって異なる場合は、ローカル CSS 変数 `--_bg` に現在の背景色を保持し、`:hover` / `:active` でそれを参照してください。

  ```scss
  .action {
    --_bg: var(--wim-color-neutral-subtle);
    background: var(--_bg);
    &.primary { --_bg: var(--wim-color-primary); }
    &:hover { background: oklch(from var(--_bg) calc(l * 1.1) c h); }
  }
  ```

- `opacity` は 表示/非表示の切り替え（`opacity: 0 → 1`）にのみ使用してください。`disabled` 状態への `opacity` トークン適用は引き続き許可します。

## `!important` の使用

新規コードで `!important` を使用する場合は以下の方針に従ってください。

使用してよいケース（意図的な使用）:
- `prefers-reduced-motion` など、アクセシビリティのためにすべてのアニメーションを無効化する場合
- Box / Stack のようにインラインスタイル（CSS カスタムプロパティ）より優先させる必要があるレスポンシブユーティリティ

使用してはいけないケース（代替手段を使うこと）:
- 親コンポーネントが子コンポーネントのスタイルを上書きしたい場合 → 親クラスを前置してセレクターの特異性を上げてください

  ```scss
  // NG
  .wim-child-input { width: 100% !important; }

  // OK: 親クラスを前置して特異性で勝つ
  .wim-parent .wim-parent__row .wim-child-input { width: 100%; }
  ```

- サイズ・色・間隔などコンポーネント固有の値を上書きしたい場合 → CSS カスタムプロパティで上書き可能な設計にしてください

  ```scss
  // NG
  .wim-parent .wim-child { color: red !important; }

  // OK: カスタムプロパティで上書き可能にする
  .wim-child { color: var(--wim-child-color, var(--color-default)); }
  .wim-parent { --wim-child-color: red; }
  ```

- [推奨パターン] 角丸やパディングの動的な上書き: 子要素の角丸やパディングの一部を親（InputGroup など）がリセットしたい場合は、以下のように「4角個別の変数」や「パディング変数」を用意してください。

  ```scss
  // 子要素（Button, Input など）側の定義
  .root {
    border-radius:
      var(--wim-field-radius-tl, var(--wim-field-radius, var(--wim-radius-component)))
      var(--wim-field-radius-tr, var(--wim-field-radius, var(--wim-radius-component)))
      var(--wim-field-radius-br, var(--wim-field-radius, var(--wim-radius-component)))
      var(--wim-field-radius-bl, var(--wim-field-radius, var(--wim-radius-component)));
  }

  // 親要素（InputGroup など）側の定義
  .root > *:not(:first-child) {
    --wim-field-radius-tl: 0;
    --wim-field-radius-bl: 0;
  }
  ```

## CSS カスケードレイヤー（@layer）

### 方針

コンポーネントの SCSS は原則としてすべて `@layer component` でラップします（`npm run scaffold` が自動適用します）。そのうえで、CSS カスケードの「非レイヤーのルールは @layer 内のルールより常に優先される」という性質を利用し、**子コンポーネントのスタイルを上書きする必要があるルールに限り**非レイヤーに置くことで、`!important` なしに自然な上書き関係を実現しています。

```scss
// Button のスタイルは @layer component 内
// Snackbar のアクションボタン上書きルールだけを非レイヤーに置く → !important 不要で勝つ
@layer component {
  .wrapper { /* Snackbar 自身のスタイル */ }
}

/* Unlayered: beats @layer component button rules */
.actionButton {
  color: var(--wim-snackbar-action);
}
```

### 子コンポーネントを上書きする場合の優先順位

1. **CSS カスタムプロパティ**: 子が公開している変数（`--wim-field-radius-*` 等）を親から設定する。レイヤーの有無に関係なく機能するため最優先で検討する（例: ButtonGroup の角丸リセット）。
2. **ハイブリッド（推奨）**: ファイルのベースは `@layer component` に置いたまま、上書きが必要なルールだけを非レイヤーのブロックに出す（例: Snackbar の `.actionButton`。非レイヤー部分には `/* Unlayered: ... */` のように理由をコメントする）。
3. **ファイル全体を非レイヤー**: 上書きルールが大半を占める複合コンポーネント（ButtonGroup・Transfer・TagInput・QueryBuilder・DataGrid など）や、インラインスタイル・ユーティリティと連携するレイアウトプリミティブ（Box・Flex・Center・Divider など）に限り、ファイル全体を非レイヤーのままにできます。

全コンポーネントを同じ `@layer component` に入れたまま上書き合戦をすると、ソース順・特異性による衝突が再発するため、上記のいずれかの手段を使ってください。

### `!important` の使用基準との関係

非レイヤーから `@layer component` 内のスタイルを上書きするときは `!important` 不要です。`@layer component` から非レイヤーのスタイルを上書きする必要がある場合のみ `!important` を使用してください（例: AppShell が Sidebar の幅をリセットする場合）。

---

## ダークモード

- コンポーネントのSCSSに `[data-theme="dark"]` セレクターや `@media (prefers-color-scheme: dark)` を書かないでください。 カラーやサーフェス・影・ゴースト・フィードバック等の値はすべて `tokens/` 配下の JSON で定義されており、Style Dictionary によって `src/tokens/generated/` にライト/ダーク切り替え可能な変数として出力されます。
- コンポーネントSCSSではトークン（生成された変数）を参照するだけでダークモード対応は完了します。
- 新しいダークモード固有の値が必要な場合は、`tokens/color/semantic.json` や `tokens/themes/dark.json` を編集し、`npm run tokens:build` を実行してください。
- 利用可能なトークンカテゴリ: Ghost/Subtle Surface、Glass/Frosted Surface、Skeleton、Control、Feedback variant、Utility（詳細は `_semantic-colors.scss` を参照）。

## ファイル・エクスポート

- コンポーネントは `src/components/<カテゴリ>/<コンポーネント名>/` ディレクトリに配置してください（例: `src/components/form/Button/`）。カテゴリは `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai` のいずれかです。
- ディレクトリ名・コンポーネントファイル名はPascalCaseにしてください（例: `Button/Button.tsx`）。
- SCSSファイルはkebab-caseの CSS Modules にしてください（例: `button.module.scss`）。
- SCSSファイルは必ずコンポーネントのTSXファイル内でインポートしてください（例: `import styles from "./button.module.scss"`）。インポートがないとブラウザでスタイルが一切適用されません。テストやlintでは検出できないため注意してください。
- 新規コンポーネントは `src/<カテゴリ>.ts`（例: `src/form.ts`）にexportを追加してください。`src/index.ts` は各カテゴリファイルを re-export しているため、直接編集は不要です。

## テスト

- `describe` / `it` パターンで記述してください。
- `useTranslation` は必ず `vi.mock("react-i18next", ...)` でモックしてください。
- テストを作成し、通過することを確認してください（`npm run test`）。
- UIに影響する変更を行った場合は、VRTも実行してください（`npm run test:vrt`）。

## 品質チェック

- ESLintおよびStylelintで問題がないか確認してください（`npm run lint` / `npm run stylelint`）。
- pre-commitフックでは警告も0でないとコミットできません（`--max-warnings=0`）。
- 多言語化の対応をしてください。

## mdxの記述形式

- 表はMarkdownテーブル記法ではなく `<table>` タグで記述してください。
- リストは `- 項目` ではなく `<ul><li>` タグで記述してください。

## mdxに記載すること

Storybookのmdxは以下のセクション構成で記載してください。必須セクションは15（見出しなし概要 1 + 見出しあり 14）で、うち4つは `<Docgen />` による自動挿入です。

必須セクション（この順序で記載）:

| # | セクション | 備考 |
|---|---|---|
| 1 | コンポーネントの概要 | 見出しなし。ページ冒頭の説明文 |
| 2 | Design Intent（デザイン意図） | `## <T k="doc.design_intent_title" />` |
| 3 | Choice Matrix（使い分け基準） | `## <T k="doc.choice_matrix_title" />` |
| 4 | Anatomy（構成要素） | `<Docgen section="anatomy" />` により見出し込みで自動挿入 |
| 5 | Content Guidelines（コンテンツ指針） | `## <T k="doc.content_guidelines_title" />` |
| 6 | Motion Spec（モーション仕様） | `## <T k="doc.motion_spec_title" />` |
| 7 | A11y Spec（アクセシビリティ仕様） | `## <T k="doc.a11y_spec_title" />` |
| 8 | Real World Scenarios（ユースケース） | `## <T k="doc.real_world_scenarios_title" />` |
| 9 | Best Practices（ベストプラクティス） | `## <T k="doc.best_practices_title" />` |
| 10 | Props（プロパティ一覧） | `<Docgen section="props" />` により見出し込みで自動挿入 |
| 11 | デザイントークンの活用 | `<Docgen section="tokens" />` により見出し込みで自動挿入 |
| 12 | レスポンシブデザインへの対応 | `## <T k="doc.responsive_title" />` |
| 13 | キーボードナビゲーション | `## <T k="doc.keyboard_nav_title" />` |
| 14 | 多言語化の対応 | `## <T k="doc.i18n_title" />` |
| 15 | テストの実行方法 | `<Docgen section="test" />` により見出し込みで自動生成 |

任意セクション（コンポーネントの特性に応じて挿入）:

Best Practices と Props の間、または Props の後に必要なセクションを追加できます。

| セクション | 用途 | 例 |
|---|---|---|
| Usage（使い方） | 基本的な使い方を示す | `## <T k="doc.usage" />` |
| Example（実装例） | サンプルコード・Canvas を掲載 | `## <T k="doc.example" />` |
| Variations（バリエーション） | 見た目・動作のバリエーション一覧 | `## <T k="doc.variations" />` |
| コンポーネント固有のセクション | 特殊な注意事項など | 例: Dialog の「Why not modal?」|

---

### ストーリー掲載時の注意点（重複排除）

- `## <T k="doc.variations" />` などのセクションで、各ストーリーを `<Canvas of={...} />` を使って個別に紹介している場合、ページ末尾に `<Stories />` タグを置かないでください。
- `<Stories />` は**そのコンポーネントの全ストーリーを表示**します（`includePrimary` の既定は `true`。`addon-docs` の実装で確認）。「紹介されなかった残り」だけを出すわけではないので、個別紹介と併用すると同じ内容が 2 回表示され、ドキュメントの可読性を損ないます。
- 基本的には、重要なバリエーションを個別に解説付きで掲載し、最後に `<Stories />` は置かない構成を推奨します。

**docs ページに出ないストーリーがあるのは正常です**（T224・2026-08-28 に方針決定）。ストーリーはサイドバーに独立エントリとして必ず出るので、**docs ページは「重要なバリエーションを選んで見せる場所」**であって、全ストーリーの一覧ではありません。

- **欠陥なのは「そのページに例が 1 つも無い」場合だけ**です。`<Primary />` か `<Canvas of={...} />` を最低 1 つ置いてください（2026-08-28 に `Blockquote` / `CreditCardInput` / `CalendarHeatmap` / `CounterTextarea` の 4 件がこの状態でした）。
- 掲載していないストーリーの数は `npm run check:story-docs` が数えて凍結しています。**意図せず増えたときだけ落ちる**ので、意図して載せないものは `scripts/story-docs-baseline.json` へ足してください。

---

# 品質ゲート・チェックリスト

PR 作成時は `.github/pull_request_template.md` の Quality gates に沿ってチェックする。  
`npm run scaffold` 完了時にも同じゲート一覧がコンソールに出る。

## 1. 必須ゲート（新規コンポーネント / 公開面変更）

コミット・PR 前に、変更に該当するものをパスすること。

| チェック項目 | コマンド | 目的 |
|---|---|---|
| 公開 API 表面 | `npm run check:api` | `exports` + バレルシンボル（`api-snapshot.json` v2）。意図的変更時のみ `check:api:update` |
| ポリモーフィック監査 | `npm run check:aschild` | `asChild` 実装と本ファイルの必須リスト同期 |
| トークン漏れ（PX） | `npm run audit:hardcoded` | 色のハードコード禁止・未注記 px を増やさない（`PX_BASELINE = 0`）。詳細は `docs/TOKENIZATION_EXCEPTIONS.md` |
| i18n 整合性 | `npm run i18n:check` | en / ja / pt のキー一致 |
| peer import 境界 | `npm run check:imports` | charts / ai / peer 依存をルート `wimui` から引いていないか |
| 型・スタイル | `npm run lint` / `npm run stylelint` | 構文・スタイル |
| MDX 全数監査 | `npm run audit-mdx` | 新規コンポーネントの必須セクション |
| a11y の `incomplete` | `npm run check:a11y-incomplete` | 「axe が**人に確かめろ**と言った指摘」の許可リスト（`vrt/a11y-incomplete.json`）の形・理由・孤児。**新しいストーリーで増えても減っても a11y の CI が落ちる** ── 直すか、理由を書いて許す（更新手順は `MAINTENANCE.md` 12-2） |
| 合成（新規公開） | T179 のプローブ | カタログ単体では出荷しない。他部品と組んで置き方・a11y・狭幅を触り、確認後に画面は捨てる。`stories/Patterns/` にカバー率のために書かない |

まとめて: `npm run audit:lib`（範囲が広いとき）。

短期間に多くのコンポーネントを追加（または一気にリファクタリング）する場合も、上表をすべてパスすること。

## 2. Storybook 階層ルール (Sidebar Hierarchy)

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
  - 新しいカテゴリを追加する場合は、必ず `RULES.md` を更新し、`src/data/components.json` との整合性を取ってください。



## 3. i18n ファイルの分割（Governance）

`public/locales/` 配下の単一 JSON ファイルが 1000 行（または 50KB）を超えそうな場合：
1. `common.json` に何でも入れないでください。
2. カテゴリ別のファイル（`form.json`, `overlay.json` 等）を新設してください。
3. `stories/i18nConstants.ts` に自動登録されるので、MDX では `<T k="form.submit" />` のようにネームスペース付きで参照してください。

## 4. 自動化スクリプトの活用

手動でファイルを作成ぜず、必ず `npm run scaffold -- <Name> <Category>` を使用してください。
これにより以下のボイラープレートが自動適用されます：
- `forwardRef` + `asChild` (Radix Slot)
- `@layer component` による SCSS ラップ
- 15 セクション構成の MDX テンプレート
- `vi.mock("react-i18next")` 済みのテストファイル
