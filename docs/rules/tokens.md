# デザイントークンと CSS クラス名の規則

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# CSS クラス名とスタイリング

- 新規コンポーネントでは CSS Modules（`*.module.scss`）を使用してください。
- クラス名は JS から参照しやすい標準的なケバブケースまたはキャメルケースを使用します（`wim-` プレフィックスは不要です）。
- ルート要素には `.root`、内部パーツには `.icon`, `.label` などの名称を使用してください。
- Anatomy: `.scss`（または `.module.scss`）ファイル内のクラス名から構成要素を抽出します。CSS Modules の場合、`.root` や共通のサイズ・色修飾子（`.sm`, `.primary` 等）を除いたユニークなクラス名が自動的に抽出されます。
- **すべての公開コンポーネントはルート要素に安定したグローバルフック `wim-<kebab名>` を付与します**（例: `Button`→`wim-button`, `DateRangePicker`→`wim-date-range-picker`）。CSS Modules のクラス名はハッシュ化され不安定なため、これが利用者向けの**唯一の安定した class 上書きポイント**であり公開契約です。スタイルのカスタマイズは原則 CSS Variables（`--wim-*` トークン）で行い、要素単位の上書きが必要な場合のみこのフックを使います。`classNames("wim-<kebab名>", styles.root, className)` のようにルート要素へ付与してください（scaffold が自動生成、`npm run check:hooks` で検証）。DOM ルートを持たない振る舞い専用（`Portal` / `Transition`）は例外です。
- 共通ベースコンポーネント（`IndicatorBase` 等）を使用する場合は、`prefixClass` の代わりに `styles` prop を渡してください。

# デザイントークン（CSS カスタムプロパティ）

## 新規トークン追加ルール（近傍別名を増やさない）

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

手順の詳細はこのファイル末尾の「既存トークンが不足している場合のフロー」。

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

## 角丸（Radius）の設計指針

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

## シャドウ（Shadow）の設計指針

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

---

## 既存トークンが不足している場合のフロー

**先に既存で足りるか確認**（`docs/rules/tokens.md`「新規トークン追加ルール」）。近傍別名の追加は禁止に近い。

1. 既存 role / spacing / radius を `token-snapshot.json`・Colors ガイド・`DESIGN.md` で探す。
2. 足りない場合だけ層を選ぶ:
   - 生色 → `tokens/color/base.json`（palette）
   - 意味色（公開） → `tokens/color/semantic.json` + 必要なら `tokens/themes/dark.json`（role）
   - 1 コンポーネント専用色 → `src/styles/_component-colors.scss` の `--wim-comp-*`（公開 semantic に載せない）
   - Spacing / Radius → `tokens/spacing.json`
   - Shadow / Opacity / Z-Index / Motion → `tokens/effects.json`
3. `npm run tokens:build`（JSON を触った場合）。
4. 公開トークン面が変わったら `npm run check:tokens:update` をコミットに含める。
5. コンポーネントでは `var(--wim-color-*)` または `var(--wim-comp-*)` を参照する。

---

## z-index トークンの使い分け基準

スタッキングコンテキストをまたいで競合しうる要素には、必ず以下の `--wim-z-*` トークンを使用してください。

| トークン | 値 | 主な用途 |
|---|---|---|
| `--wim-z-sidebar` | 900 | 非オーバーレイ時のサイドバー。メインコンテンツより上に表示。 |
| `--wim-z-header` | 1000 | 固定ヘッダー。 |
| `--wim-z-overlay` | 1000 | Dialog, Dropdown, Popover, Tooltip 等の一般的なオーバーレイ。 |
| `--wim-z-overlay-panel` | 1001 | オーバーレイの上にさらに重なるパネル類。 |
| `--wim-z-overlay-step` | 1002 | Tour（ガイド）のステップバブル。 |
| `--wim-z-navbar` | 1020 | モバイル用ボトムナビゲーション等。 |
| `--wim-z-mask` | 1500 | ローディングマスク、背景のクリック遮断用。 |
| `--wim-z-drawer` | 2000 | Drawer（サイドからスライドするパネル）。Dialog より優先される場合に使用。 |
| `--wim-z-toast` | 9999 | Toast, Notification など、常に最前面に表示すべき通知。 |

注意： コンポーネント内部（Slider のサムブ、Table の固定列など）での相対的な順序指定には、生値（`z-index: 10` 等）を使用して構いません。

### 新しいカテゴリ自体が必要な場合

既存カテゴリに収まらない場合は `docs/rules/tokens.md` のデザイントークンカテゴリ表に追記し、適切な `_*.scss` ファイルを作成または既存ファイルに追加してください。

---

## コンポーネントからの参照と、近い名前のトークン

> この節は `SKILLS.md`（2026-09-21 に廃止）から移したものです。

`src/tokens/generated/_tokens.scss` または `_css-vars.scss` の変数を使用します。

```scss
// 色はセマンティックカラートークンを使う（ダークモード自動対応）
color: var(--wim-color-text-primary);
background: var(--wim-color-surface);
border-color: var(--wim-color-border);

// 間隔・サイズはスペーシングトークンを使う
padding: var(--wim-spacing-md);
```

### 重要なルール
- ハードコードされた CSS 色名（`gray`, `#333` など）は使用禁止です。
- 色以外の CSS 値（`padding`, `border-radius`, `font-size`, `font-weight`, `box-shadow`, `opacity`, `transition`, `z-index`, `motion` 等）もすべてトークンを使用してください。
- `stories/` 配下の TSX では `--wim-color-*` プレフィックス付きトークンを推奨します。

### 公開 CSS / テーマ契約（改名禁止）

| パス / 属性 | 役割 |
|---|---|
| `wimui/styles.css` | **必須** — `:root` `--wim-*`（ダーク・密度含む）+ コンポーネント CSS |
| `wimui/reset.css` | **任意** — 意見の強いリセット/base。**素の `h1`〜`h6` の `line-height` を含む**（T208。`snug` / `[lang="ja"]` は `snug-jp`。入れなければ見出しは本文の比率＝間延びしたまま） |
| `WimProvider` | **推奨** — `theme` / `density` / `locale` を React から設定（内部で属性を書く） |
| `data-theme` | CSS 契約。`<html>` に載せる。値 `light` \| `dark`。省略で OS 追従 |
| `data-density` | CSS 契約。`<html>`（または祖先）。`comfortable` \| `compact` |
| UMD | `wimui.umd.css` に styles（トークン+コンポーネント）と reset を同梱 |

`setWimTheme` / `setWimDensity` / `setWimLocale` は属性・ロケールの命令型 API。コンポーネント SCSS に `[data-theme="dark"]` を書かない。詳細は `DESIGN.md` / Token → Theme・Density。

### disabled / 近い名前のトークン

| トークン | 用途 |
|---|---|
| `--wim-color-disabled` | 無効時の**塗り**のみ。文字色に使わない |
| `--wim-color-text-on-disabled` | その塗り（disabled フィル）の上の文字・アイコン |
| `--wim-color-text-disabled` | 通常サーフェス上の無効・非活性テキスト |

`surface-subtle` と `surface-subtle-alpha` は別物。サーフェスは `surface*`、反転面は `surface-inverse` / `text-on-inverse`。詳細は `DESIGN.md`。新規トークンを増やさず、既存の意味に合わせて選ぶ。

公開 role の一覧（名前は `--wim-color-` を省いて書く）:

- サーフェス: `surface-app` / `surface` / `surface-variant` / `surface-hover` / `surface-subtle` / `surface-subtle-alpha` / `surface-void` / `surface-inverse`
- 反転: `text-on-inverse` / `text-muted-on-inverse` / `border-inverse`
- Overlay: `overlay` / `overlay-soft` / `overlay-strong` / `overlay-medium` / `overlay-sidebar`
- Intent 状態: `primary-muted` / `primary-soft` / `primary-subtle` / `primary-fill`
- 絶対白: `white`（旧 `text-white` / `bg-white`）
- Avatar の default が disabled のパレットを流用しているのは**意図的**（ニュートラル用の新規トークンは増やさない）

### intent の `subtle` 変種は「base を 15% で敷く」が既定

`Badge` / `Tag` / `Chip` の `variant="subtle"` は `_token-common.scss` が `oklch(from <base> l c h / 0.15)` を敷きます。**base 自体がサーフェス寄りの淡色だと 15% では消えます** — `neutral` の base は `--wim-color-disabled`（light `#e5e5e5`）で、15% を白背景に敷くと `#fbfbfb` 相当になり、見えませんでした。

そのため `tokens/intents.json` の `surface` は **`subtle` ロール（任意）** を持ちます。指定するとその色をそのまま subtle の背景に使い、未指定なら従来どおり 15% を導出します。淡色 base の intent を足すときは `subtle` も併せて指定すること。

> この種の「薄すぎて見えない」は **VRT では捕まりません**。`vrt.spec.ts` の `threshold: 0.1` はピクセル単位の色差の許容値で、`#fbfbfb` → `#e5e5e5`（差 ≈ 0.086）はしきい値を下回るため差分ゼロ扱いになります。実際 neutral の修正で更新されたベースラインは dark 側だけでした。

**`npm run check:contrast` がこれを機械強制します**（`audit:lib` / CI / lint-staged で自動実行）。intent × variant × サーフェスの全組み合わせ（現在 126 組）について、`_token-common.scss` の導出規則を再現した実効色で 2 つを見ます:

| 観点 | 基準 | 根拠 |
|---|---|---|
| 文字の可読性 | WCAG コントラスト比 ≥ 4.5 | Badge 等は小さい文字なので large text の 3:1 ではなく通常テキスト基準 |
| 塗りの可視性 | サーフェスとの OKLab 距離 ≥ 0.015 | **WCAG 由来ではなく実測から決めた値**。壊れていた neutral × subtle が 0.0072〜0.0116、現存する最小の正常値（dark info × subtle）が 0.0217 で、その間 |

コントラスト比は明度差しか見ないため「色相だけ違う面」を区別できず、塗りの可視性判定には使えません。**`outline` の枠線は意図的に対象外**です（WCAG 1.4.11 の 3:1 を当てると `neutral`/`secondary` の枠が軒並み落ち、システム全体の枠色見直しになるため）。

subtle のアルファ値はスクリプトに直書きせず `_token-common.scss` の `subtle-bg()` から読みます。読めなければ「導出規則が変わった」とみなして落とすので、SCSS 側だけ変えて検査が黙ってズレることはありません。
