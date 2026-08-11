# wimui

## 0.21.0

### Minor Changes

- 76d6b00: Charts let you set the axis range, and `Dashboard` lets you set the widget heading level.

  **追加のみ**（既定は変わりません）。

  - **`yDomain` / `xDomain`** — `AreaChart` / `BarChart` / `LineChart` / `ScatterChart`。既定は据え置きです（棒は長さが値そのものなので、軸を切ると棒どうしの比が嘘になります。折れ線と面も 0 起点を期待する使い方があります）。値の幅が狭くて動きが潰れる図では `["auto", "auto"]` を渡してください。散布図だけは既定を data 依存にしてあります — 2 つの実測値の関係を見る図で 0 に意味はないためです。

    ```tsx
    <LineChart
      data={rows}
      keys={["yield"]}
      indexKey="week"
      yDomain={["auto", "auto"]}
    />
    ```

  - **`Dashboard` の `titleLevel`（2〜6、既定 3）** — ウィジェットの見出しは `h3` 固定でした。`h1` の直後に置くと段が飛び、axe の `heading-order` が鳴ります。ページ側の構造に合わせてください。見た目はクラスが持っているので、段を変えても描画は変わりません。

    ```tsx
    <h1>Roastery floor</h1>
    <Dashboard titleLevel={2} widgets={widgets} />
    ```

- 76d6b00: Chart series get a palette you can actually tell apart, and large fills stop shouting.

  **色が変わります**（API は変わりません。0.x のため minor）。チャートを使っている画面は、見た目が確実に動きます。

  - **系列の 5 色相を選び直しました。** 以前の組は隣り合う系列の分離が足りず、色覚特性のある読み手には並んだ 2 本が同じ色に見える組み合わせがありました。新しい値は light が `#1aa28e` / `#396bb0` / `#307a25` / `#d97610` / `#9a0f50`、dark は danger を `#ed3b6b`、中立を `#b6b6b6` に振り分けています。手で選んだのではなく、このライブラリ自身の PCCS ランプの中から、明度帯・彩度の下限・色覚特性下の分離・地に対する 3:1 を満たす組を探索して決めました。条件は `npm run check:chart-palette` が見張ります。
  - **塗りの上に載る文字色を測り直しました。** light の success と danger は黒から白へ変わります。以前は塗りだけ差し替えて文字色を据え置いていたため、読みにくい組が残っていました。
  - **大きな面には、細いマーク用の彩度を使わなくなりました。** 5 色相は「2px の線・8px の点が地に対して 3:1 出る」ことを条件に選んであります。大面積にはこの要求が逆に働くので、`Treemap` は 1 色相の濃淡になりました。ツリーマップのタイルは面の上に自分の名前が書いてあり、折れ線と違って「マークから凡例へ戻る道が色しかない」わけではありません。面積が表しているのは量なので、色も量を表します。
  - **`CalendarHeatmap` が族の色相に揃いました。** ここだけ手で選んだ緑 5 段で、しかも **dark では濃さの順が壊れていました** — level3 が `#7fc97e`（輝度 .483）、level4 が `#32a65d`（.288）で、いちばん多い日が 2 番目より暗く出ていました。`chart-primary` の混ぜ率にしたので、順序は式が保証し、明暗の反転は surface が引き受けます。level0（データ無し）は中立のままです。
  - **接する面の間に 2px あきました。** `PieChart` の扇、積み上げ `BarChart` の段、`Treemap` のタイル。目が「境目」として読むのはこの隙間で、無いと隣り合う色が混ざって別の色に見えます。`PieChart` の `paddingAngle` はやめました — 角度で開けると donut と円で開き方が変わり、内周と外周でも食い違うためです。
  - **面グラフとスパークラインの縦グラデーションをやめました。** フェードは値と無関係で、積み上げでは帯の中で値が変わって見え、下の帯の濃い上端と上の帯の薄い下端が隣り合って境目が紛れていました。塗りは 1 段階（積み上げ 0.9 / 重ね 0.18 / `Sparkline` 0.15）になり、形は 2px の線が持ちます。

  `--wim-color-chart-*` はトークンなので、自分の色に差し替えられます。差し替えても残す必要がある条件は Storybook の Components → Visualization → Charts の「系列の色」に書きました。

- 76d6b00: `Dashboard` stops offering an edit mode it cannot deliver, and four charts start using the space they were given.

  **既定の挙動が 1 つ変わります**（0.x のため minor）。

  - **`Dashboard` の編集トグルは、渡された機能から決まるようになりました。** `showEditToggle` の既定は `true` で、読み取り専用の画面にも「Edit」が出ていました — 押しても `onRemove` が無ければ何も起きないボタンです。これからは、編集状態を渡しているか（`editable` / `defaultEditable`）、消す・足す手立てがあるとき（`onRemove` / `onAdd`）だけ出ます。**どれも渡していない `Dashboard` からはトグルが消えます。** 以前の挙動が必要なら `showEditToggle` を明示してください。

    ```diff
    - <Dashboard widgets={widgets} />                    {/* Edit が出ていた */}
    + <Dashboard widgets={widgets} showEditToggle />     {/* 出したいなら明示 */}
    ```

  - **`Sparkline` の既定幅が `"100%"` になりました。** 100px 固定だったので、タイルに置くと左端しか使いませんでした。数値を渡していた場合の挙動は変わりません。
  - **`RadarChart` の塗りが 0.6 から 0.18 に、輪郭線が 2px になりました。** 0.6 では 2 系列目が 1 系列目を覆って後ろが読めませんでした。レーダーは軸ごとの形を線で比べる図です。半径軸の目盛りは中央付近で回転して重なり読めなかったので、既定で消しました（絶対値は Tooltip が出します）。
  - **`BarChart` が棒の名前を間引かなくなりました。** 幅 279px の枠で 4 本中 2 本が無名になっていました。棒の名前は凡例で代替できません。
  - **`FunnelChart` の段が 1 色相の濃淡になりました。** 1 つの量が減っていく図で段ごとに色相が変わると、別のものに見えます。左右の余白も広げ、段のラベルの見切れを直しました。
  - **軸の目盛りとプロット領域の間の無駄な余白を詰めました。** `AreaChart` / `BarChart` / `LineChart` / `ScatterChart` で、左の軸の数値のぶんグラフが右へ寄って見えていました。

## 0.20.0

### Minor Changes

- 789f403: Chips stop shouting, the header stops hiding what does not fit, and three small alignment fixes land.

  **見た目が変わります**（API は変わりません。0.x のため minor）。

  - **`TagInput` / `MultiSelect` chips are `neutral` by default.** They were pinned to
    `intent="primary"` with no way to change them, so a field with three tags put
    three accent surfaces on the page — against this library's own rule that an
    accent belongs in one or two places per screen, and that ordinary values are
    `neutral`. What goes into these two components is an ordinary value: a word you
    typed, an option you picked.
  - **`Header` grows instead of overflowing.** Its `height` is now a `min-height`. The
    default still measures 64px, but content that does not fit used to escape the
    header rather than wrap or clip — measured at 12px past the edge at 768px and
    29px at 390px. **If your header has been overflowing without you noticing, it will
    now be taller at narrow widths**, which is the state you were already in.
  - **Right-hand icons sit where the left ones do.** The icon slot inside `InputBase`
    read a different token than the text padding (6.4px against 10px) and ignored
    density; both sides now follow `--wim-field-padding-x`.
  - **`SmartSearchInput`'s leading icon aligns to the first line.** It was centred on
    the box, so once the field grew past one line the icon drifted down with it.
  - **Editable surfaces stop hyphenating.** `hyphens: auto` for `en` and `pt` reached
    inputs, textareas and rich-text editors, so text you typed came back to you as
    `fol-lowing`. Prose keeps its automatic hyphenation.
  - **Destructive ghost buttons get a red hover instead of a red fill with a blue
    border.** New tokens `--wim-color-danger-surface-hover` and
    `--wim-color-danger-border-hover` mirror the existing primary-based pair, and
    `Button` applies them for `intent="danger"` `variant="ghost"`.

- 789f403: `QueryBuilder` operators are typed, and `ColorInput` becomes what its name says.

  **破壊的変更**（0.x のため minor）。

  ```diff
    <QueryBuilder
      fields={fields}
      defaultQuery={{
        id: "root", combinator: "and", not: false,
        rules: [
  -       { id: "r-1", field: "years", operator: "greater_equal", value: 2 },
  +       { id: "r-1", field: "years", operator: ">=", value: 2 },
        ],
      }}
    />
  ```

  `QueryRule.operator` was `string`, while the implementation only understood the
  `value` side of its operator table — symbols (`=`, `!=`, `>`, `<`, `>=`, `<=`) plus
  a few words (`contains`, `starts_with`, `ends_with`, `is_null`, `is_not_null`).
  Neither the type nor the documentation said so, and **an operator outside that set
  rendered an empty select with no error, no warning and no console output**. The
  type is now derived from the table itself (`QueryOperator`, exported), so adding a
  value to the table extends the type, and a value that slips past the type — plain
  JS, an `as` cast, a query loaded from a server — logs once in development naming
  the values that field type accepts. The MDX now lists them.

  `ColorInput` rendered `<Input type="color">`: a swatch, nothing else. Its
  documentation said it was the one for _entering_ an exact colour as text, while
  `ColorPicker` was the one for finding a colour visually — but both produced the
  same control, differing by two pixels of height. `ColorInput` is now a hex text
  field with a swatch beside it. The text you type is kept as you type it and only
  commits once it reads as a colour, so `#7a1f` on the way to `#7a1f1f` no longer
  fires `onChange`. `value` / `defaultValue` / `onChange` keep their shapes.
  `ColorPicker` is unchanged.

### Patch Changes

- 789f403: `DateRangePicker` gives its two inputs an accessible name, and stops throwing away `startProps` / `endProps`.

  The component rendered `<DatePicker {...startProps} label={undefined} error={undefined}>`.
  The type accepts `label` — `startProps` is `React.ComponentProps<typeof DatePicker>` —
  and the implementation then overwrote it. The outer `label` only reaches the
  `role="group"` wrapper through `aria-labelledby`, so **both inputs shipped with no
  accessible name at all** (axe `label`, critical, in light and dark).

  Anything you pass through `startProps` / `endProps` now reaches the inner picker.
  If you were passing `label` and wondering why nothing appeared, it appears now.

  When you pass no visible label, each input falls back to a built-in name
  (`Start date` / `開始日` / `Data inicial`), so the default spelling is no longer an
  a11y violation and no `aria-label` workaround is needed:

  ```jsx
  <DateRangePicker
    label="Applications open"
    startProps={{ defaultValue: opensAt }}
    endProps={{ defaultValue: closesAt }}
  />
  ```

  An explicit `aria-label` still wins over the built-in name, and a visible `label`
  suppresses it — a field carrying both ends up with `aria-label` and
  `aria-labelledby` at once, where the accessible name comes from the latter while
  the former lingers in the DOM.

## 0.19.0

### Minor Changes

- 7960c1b: `ScrollProgress` and `TimelinePoint` take `intent`, matching their siblings.

  **破壊的変更**（0.x のため minor）。

  ```diff
  - <ScrollProgress color="success" />
  + <ScrollProgress intent="success" />

  - <TimelinePoint variant="danger" />
  + <TimelinePoint intent="danger" />
  ```

  Both props were painting the intent colours — `.primary` resolved to
  `--wim-color-primary`, `.success` to `--wim-color-success`, and so on — under a
  different name. `Progress` and `ProgressRing` already call this `intent`, so
  `ScrollProgress` was the odd one among its own siblings, and `TimelinePoint`
  was carrying meaning on a prop that `Foundation/Variants` defines as loudness.

  **`secondary` is gone from both**, since it was removed from the intent
  vocabulary in 0.18.0. Use `neutral`:

  ```diff
  - <TimelinePoint variant="secondary" />
  + <TimelinePoint intent="neutral" />
  ```

  That word had survived here precisely because these props were not typed as
  intents, so the 0.18.0 removal never reached them. `ThoughtProcess` was still
  producing it internally for pending steps; it now uses `neutral`.

  **Both gain `warning`, `info` and `neutral`**, which they could not express
  before. Their colours now come from `tokens/intents.json` rather than
  hand-written rules, so the two stay in step with the intent vocabulary.

- 032b951: Three props stop borrowing vocabulary that is not theirs.

  **破壊的変更**（0.x のため minor）。

  ```diff
  - <ChatAvatar color="s5" />
  + <ChatAvatar tone="s5" />
  ```

  `ChatAvatar`'s scale is PCCS tone — steps of lightness and saturation, not
  colours — so it shared a prop name with a different axis. `LoadingOverlay`'s
  `loaderColor` now takes `"currentColor" | WimColor`, the same type as the
  `Spinner` and `Loader` it hands the value to; it had its own closed set, so the
  same value passed through three different types on the way down.

  `FeedbackIcon` is internal, so this affects no one's code: its `color` is now
  `tinted?: boolean`. It used to take the intent vocabulary, which made
  `intent="success" color="danger"` expressible. Both places that passed it were
  passing the intent's own value.

- dd660f6: `Drawer.Trigger` / `Drawer.Close` require `asChild`, and `EmptyState` drops `variant`.

  **破壊的変更**（0.x のため minor）。

  ```diff
  - <Drawer.Trigger>開く</Drawer.Trigger>
  + <Drawer.Trigger asChild>
  +   <Button>開く</Button>
  + </Drawer.Trigger>

  - <Drawer.Close>閉じる</Drawer.Close>
  + <Drawer.Close asChild>
  +   <Button variant="outline">閉じる</Button>
  + </Drawer.Close>

  - <EmptyState variant="simple" title="…" />
  + <EmptyState title="…" />
  ```

  Both components referenced class names their stylesheet never exported.
  `styles.foo` is `undefined` when `.foo` is missing, and `classNames` drops
  `undefined` without a word — so the type checker passed, the linter stayed
  quiet, and VRT recorded the unstyled result as correct.

  `Drawer.Trigger` and `Drawer.Close` pointed at empty placeholder rules, so
  without `asChild` they shipped a bare `<button>` carrying the browser's default
  chrome. Giving those rules real declarations was not an option: every real
  usage passes `asChild`, and `Slot` merges `className` onto the caller's own
  element, where our styling would fight theirs. `asChild` is now required, and
  the caller supplies the button.

  `EmptyState.variant` accepted `"default" | "simple"` and did nothing at all —
  `empty-state.module.scss` exported no classes whatsoever. The documentation
  described `simple` as "a simpler design that eliminates borders and background
  colors"; that appearance never existed. The prop, its story, its docs section
  and its translations are gone.

  `check:class-references` now asks Vite what each `.module.scss` actually
  exports and fails on references that resolve to nothing. It runs in
  `audit:lib`.

- d38e073: `Drawer` gains `DrawerBody`, and `VirtualList` rows get the list padding tokens.

  `DrawerHeader` and `DrawerFooter` both carry `spacing-lg`, but there was nothing
  for the content between them, so anything placed there sat against the drawer
  edges. The only way out was a wrapper with hardcoded padding — which is what
  Drawer's own six stories were doing, in px.

  ```diff
    <DrawerHeader>…</DrawerHeader>
  - <div style={{ padding: "20px" }}>…</div>
  + <DrawerBody>…</DrawerBody>
    <DrawerFooter>…</DrawerFooter>
  ```

  `DrawerBody` also takes the remaining height and scrolls, so long content no
  longer pushes the footer off the panel.

  `VirtualList` had the same gap: rows had no horizontal padding, so their content
  touched the edges and the right side ran into the scrollbar. Its own three
  stories worked around it with `padding: "0 16px"`. Rows now use
  `--wim-list-item-padding-y` / `-x`, the same tokens `List` and list items
  already use, so **rows gain inset padding**; drop any wrapper that was adding it.

  Rows also clip their overflow now. They are absolutely positioned at a fixed
  `itemHeight`, so content that wrapped used to bleed into the row below and the
  text overlapped — visible at 320px.

- d99bde7: `FloatButton`: `variant` and `position` say what they do.

  **破壊的変更**（0.x のため minor）。

  ```diff
  - <FloatButton variant="primary" />
  + <FloatButton />                      // 同じ見た目。variant は不要だった

  - <FloatButton variant="default" />
  + <FloatButton variant="outline" />    // 枠線のある見た目

  - <FloatButton position="static" />
  + <FloatButton position="inline" />
  ```

  `variant` had three values and all three were wrong. `primary` fell through to
  the same rule as no variant at all, so it never did anything. `default` was not
  the default look — it produced the outlined one, while omitting `variant`
  produces the intent fill. And the stylesheet still carried a `.default_intent`
  class that nothing applied, left behind under a comment reading "temporary name".

  `variant` is now `"outline" | "glass"`, which is the loudness axis
  `Foundation/Variants` describes, with the intent word gone from it.

  `position="static"` applied `position: relative`, so it was a CSS keyword that
  did not mean what that keyword means. It is `inline` now — the button sits in
  the normal flow instead of floating.

- ed45a1e: `ChatMessage`, `Header` and `Footer`: values renamed to say what they do.

  **破壊的変更**（0.x のため minor）。

  ```diff
  - <ChatMessage variant="primary" />   // 送信側
  + <ChatMessage variant="sent" />
  - <ChatMessage variant="secondary" /> // 受信側
  + <ChatMessage variant="received" />

  - <Header background="primary" />
  + <Header background="surface" />
  - <Header background="secondary" />
  + <Header background="surface-variant" />

  - <Footer background="dark" />
  + <Footer background="inverse" />
  ```

  None of these were intent values, despite reading like them. `ChatMessage`'s
  `primary` and `secondary` resolved to `--wim-comp-chat-bubble-sent` and
  `-received`; the `background` values on `Header` and `Footer` resolved to
  `--wim-color-surface`, `-variant` and `-inverse`. The names now match the
  tokens they reach.

  `ChatMessage.variant` overrides the colour that `position` already implies —
  `left` is the received colour and `right` the sent one — so it is only needed
  for the exception, such as a right-aligned bubble in the received colour. That
  is easier to see now that the values are not borrowing the intent vocabulary.

### Patch Changes

- b50fff2: Fix `color` values that never became a colour, and guard the class of mistake.

  `color="tertiary"` appeared in 15 places and painted nothing in any of them.
  There is no `--wim-color-tertiary` token — the text colours are `text-primary`,
  `text-secondary` and `text-tertiary` — and `getColorValue` returns an unknown
  string unchanged, so the element received `color: tertiary`, which the browser
  drops. The text kept whatever colour it inherited, which is why it looked
  merely a little off rather than broken.

  `color="text-accent"` failed the same way for the opposite reason: the token
  exists, but the key was missing from the hand-written list in `getColorValue`.
  It is there now.

  Nothing could have caught this. The type is `WimColor`, which allows any string
  so that raw CSS colours work; VRT recorded the uncoloured render as correct; and
  axe does not read colour names. `check:color-values` now resolves every literal
  against both paths a colour can take — the `mappedColors` class and
  `getColorValue` — and fails when neither would produce a colour.

- 1c4910d: `Kanban`: make the scrollable board reachable by keyboard.

  The board root is `role="region"` with `overflow-x: auto`, but it could not take
  focus. When the columns are wide enough to scroll and the cards contain nothing
  focusable, a keyboard user had no way to reach the columns off-screen — axe
  reports this as `scrollable-region-focusable` at serious impact.

  It never showed up in the component's own stories, because those do not scroll
  far enough and focusable card content makes the rule inapplicable. It surfaced
  in the seventh composed screen (`Patterns/Newsroom`), where four columns sit
  inside an `AppShell`.

  The board now carries `tabIndex={0}`, which adds one tab stop per board.

- e08736f: `Carousel`: the slide indicators are large enough to see and to press.

  The dots were 4.8×4.8, well under the 24×24 that WCAG 2.5.8 (AA) asks for and
  small enough to be awkward with a thumb. They are 24×24 now, and the active
  indicator widens to match.

  **The dots are visibly larger.** Extending only the hit area was considered and
  does not work here: adjacent dots sit 4.8px apart, so 24px targets would overlap
  each other.

- e8d20d0: `Checkbox` and `Radio` meet the WCAG minimum tap target when they carry no label.

  Both render a `<label>` around their input, so the label is what you click. With
  text beside the box the label is already at least 24px tall from its line
  height; without text — a row-selection checkbox in a table, a bare radio in a
  list — it collapsed to the 18×18 of the box itself, below the 24×24 that WCAG
  2.5.8 (AA) asks for.

  The minimum now sits on the label, so the painted box stays 18px and centred.
  Bare checkboxes and radios claim a little more room; labelled ones are
  unchanged.

- ad3a2ea: More controls reach the WCAG minimum tap target, including under `compact`.

  `Pagination` buttons, `ThemeToggle` segments and `JsonViewer` node actions were
  under 24×24 at every density. `Calendar` day cells and `Switch` were only under
  it in `compact`, because both sized themselves from `--wim-height-xs`, which
  drops from 24px to 20px there.

  Most of these keep their appearance — the minimum sits on a transparent box or,
  for `Switch`, on the `<label>` that wraps the input, so the track stays the size
  it was. Two change: `TreeView`'s checkbox grows from 16px, and `Calendar` rows
  get taller under `compact`.

  `TreeView`'s checkbox carried a comment calling 16px "the minimum operable size
  for a native checkbox". It is not; WCAG 2.5.8 asks for 24.

- 88aacbf: Give icon-only controls the WCAG minimum tap target.

  Four controls were smaller than the 24×24 CSS pixels WCAG 2.5.8 (AA) asks for:
  the clear button inside inputs (20×20), Snackbar's close button (14.2×14.2),
  TreeView's expand toggle (22.4×22.4) and Notification's close button
  (23.8×23.8). All four are transparent buttons whose paint is the icon inside,
  so `min-width` and `min-height` raise the hit area without changing how they
  look at rest.

  The minimum comes from a new `--wim-tap-target-min` token, fixed at 24px and
  deliberately **not** density-aware: `--wim-height-xs` drops to 20px under
  `compact`, which is below the floor it would be enforcing.

  Nothing was measuring this. axe does not implement the rule, and a smaller
  button screenshots fine.

- e08736f: `Carousel`, `Slider`, `RangeSlider` and `Rating`: controls you press are large
  enough to press.

  Four controls painted themselves smaller than the 24×24 WCAG 2.5.8 (AA) asks
  for: carousel dots at 4.8×4.8, both slider thumbs at 18×18, and rating stars at
  16×16 on `size="sm"`. **All four now look bigger** — the paint is the target
  here, so the hit area cannot grow on its own.

  Growing only the hit area was the alternative and it does not survive contact
  with the carousel: its dots sit 4.8px apart, so 24px targets would overlap and
  make mis-taps more likely.

  **`Rating`'s whole scale moves up**, from 16/24/32 to 24/32/42. Its bottom two
  steps were under the floor — `sm` at 16px, and `md` at 20px under `compact` —
  and raising only those would have made `sm` and `md` render identically, leaving
  a size value that changes nothing. Under `compact` the three stay distinct at
  24/28/36.

  `RangeSlider`'s thumb had a documented 3:1 ratio to its 6px track. The ratio
  loses to the floor: a thumb you cannot grab is not improved by being
  proportionate.

## 0.18.0

### Minor Changes

- 212be0e: Remove the `secondary` intent — use `neutral` instead

  **破壊的変更**（0.x のため minor）。`Badge` / `Chip` / `Tag` / `Progress` などの
  `intent="secondary"` が使えなくなります。

  ```diff
  - <Badge intent="secondary">Draft</Badge>
  + <Badge intent="neutral">Draft</Badge>
  ```

  `WimIntent` と `IndicatorIntent` から `secondary` を削除しました（`ButtonIntent` /
  `FeedbackIntent` / `FieldIntent` には元から含まれていません）。TypeScript を使っていれば
  コンパイルエラーで検出できます。

  **理由**: `secondary` と `neutral` はライトテーマで**まったく同じ色**でした（どちらも
  `{pccs.gy7-5}` = `#b6b6b6`、文字も同じ `#000`）。`solid` と `outline` では**背景・文字・枠
  すべてが一致**し、2 つの intent が同じものを描いていました。

  加えて WIM の intent 語彙は `success` / `warning` / `danger` / `info` という**意味**の軸ですが、
  `secondary` だけが**階層**の語で軸が異なります。バリアント（`solid` / `outline` / `subtle`）
  という別軸が既にあるため、intent 側に階層語を置くと概念が二重になっていました。

  **`variant="secondary"` は影響を受けません。** これは intent とは別の語彙で、
  `ChatMessage` と `TimelinePoint` の `variant` では `secondary` が**今も有効**です
  （それぞれチャットバブルの受信色と `--wim-color-line` を指しています）。
  この変更が影響するのは **`intent="secondary"` だけ**です。

  **トークン `--wim-color-secondary` も残ります。** ただし**正式名は
  `--wim-color-line` になりました**（線・マーク用の灰色。枠・スピナー・トラック・
  ドットで 31 箇所が参照しています）。`--wim-color-secondary` は同じ値を指す
  **エイリアスとして残す**ので、テーマをカスタマイズしている場合もこれまでどおり
  動きます。新しく書くときは `--wim-color-line` を使ってください。
  `--wim-color-neutral-fill` とはダークテーマで値が分岐するため、統合はしていません。

### Patch Changes

- 265408b: `AppShell`: warn in development when the `sidebar` prop is mixed with the Composition API.

  With structural children (`AppShell.Main`, `AppShell.Sidebar`, …), only the props-API branch renders `sidebar`, so the prop was dropped with no signal. Development builds now warn once and point at `<AppShell.Sidebar>` inside `<AppShell.Body>`.

- 2111453: Make `Button` の `variant="ghost"` fully transparent at rest

  `ghost` は「静止時は透明、ホバーで背景」という変種ですが、`Button` だけが静止時から
  薄い塗り（黒 3%）と枠（黒 8%）を持っていました。同じ `ghost` でも `FieldVariant` の側は
  背景・枠とも `transparent` で、**同じ名前が 2 つの別物を指していた**状態です。

  `Field` と一般的な定義に揃えました。ホバー時の背景は従来どおりです。

  **ツールバーやリスト行など、静止時のボタンが薄く見えていた箇所の見た目が変わります。**

- cc27263: Fix `Calendar` showing Japanese weekday headers regardless of locale

  `Calendar`（および `RangeCalendar` / `DatePicker` など内部で使う全て）の曜日ヘッダが
  **UI の言語に関係なく `日 月 火 水 木 金 土`** と表示されていました。

  原因は実装内のローカル定数で、prop も i18n も経由しないため**消費者側から差し替える
  手段がありませんでした**。英語のアプリを作ると、カレンダーの曜日だけ日本語になります。

  `Intl.DateTimeFormat` で現在のロケールから導くようにしました。**内蔵リソースの
  3 言語（en / ja / pt）に限らず**、`setWimLocale("de")` ならドイツ語の曜日が出ます。

  ```
  locale=ja: 日 月 火 水 木 金 土
  locale=en: Sun Mon Tue Wed Thu Fri Sat
  locale=pt: dom. seg. ter. qua. qui. sex. sáb.
  ```

  **曜日ヘッダの文字数が言語で変わります**（`日` の 1 文字に対し `Sun` は 3 文字）。
  カレンダーの列幅を独自に狭めている場合は確認してください。

- a0392dd: `CommandPalette`: the dialog now has an accessible name.

  `CommandPaletteContent` rendered `role="dialog" aria-modal="true"` with nothing to name it, which axe reports as `aria-dialog-name` (serious) for every consumer — the palette has no heading to borrow a name from. It now defaults to the built-in translation (`command_palette.label`, en/ja/pt) and accepts `aria-label` to override.

- a0392dd: `ContextMenu`: `asChild` no longer merges the container's `display: inline-block` onto the child element.

  Wrapping a `<Table.Row>` needs `asChild` so the trigger becomes the `<tr>` instead of putting a `<div>` under `<tbody>`. Before this change `asChild` fixed the markup but not the rendering — the container class carried `display: inline-block`, so the rows flowed inline and the header no longer lined up with any column. The disabled styles moved out of `.container` so they still apply in both modes.

- 6c75d36: Align the icon with the first line of text in `Banner`, `Notification` and `Snackbar`

  アイコンが**テキストの 1 行目ではなく、テキスト塊の中央**に置かれていました。内容が
  1 行に収まるうちは 1 行目とほぼ一致するので気付きにくく、**折り返すほどアイコンが
  下へ落ちます**。`Alert` は既に修正済みで（0.16.x）、今回は残りへの横展開です。

  実測（アイコンの top − 1 行目の top）:

  - `Banner` の長文: 1280px で 13.2px、390px で **45.2px** → **-1.0px**
  - `Notification`: title + description が常に 2 段のため**短文でも 20.7px** → **0.0px**
  - `Snackbar` の長文: 1280px で 12.8px、390px で 22.8px → **0.0px**

  短い内容でも悪化しません。

  **アイコンの位置が変わるため、これらを含む画面の見た目が変わります。**
  `Banner` / `Notification` / `Snackbar` を独自にレイアウトしている場合は確認してください。

- bce97c7: Table: drop the outer `card` frame when rows become mobile cards; Patterns narrow follow-ups; GanttChart timeline scrolls as one.

  `container-type` and the card border lived on the same wrapper, so the border could not be cleared by the mobileCard container query (same reason DataGrid splits root/container). IntakeQueue uses `mobileCard="md"`; ComparisonTable stacks below 768; composition docs match the sm-default break; Dashboard / Starter copy polish. GanttChart puts header + body in one `overflow: auto` scrollport so narrow timelines are reachable (sticky header on vertical scroll). SortableList demo uses `min(100%, 400px)` so the story no longer forces page horizontal scroll. Story demo copy drops Bento/Doe hype; `check:slop` hype scan covers all `docs_stories_*` locales. Audit table samples use real names (placeholder keys keep `John Doe`). `elevated` (Card/Stats variant) is a hype false-positive for `elevate`.

- 3e8ffea: Give `intent="neutral"` a real `subtle` surface instead of reusing its solid fill

  `Badge` / `Tag` / `Chip` で `variant="subtle"` と `intent="neutral"` を組み合わせると、
  **`variant="solid"` とまったく同じ面**が塗られていました（文字色だけが違う状態）。
  `subtle` の役割は「`solid` より淡い面」なので、これでは変種として機能していません。

  原因は intents SSOT で `neutral` の `subtle` が `neutral-fill`（＝ `solid` と同じ値）を
  指していたことです。専用トークン `--wim-color-neutral-fill-subtle` を追加して、そちらを
  指すようにしました。

  値は総当たりの実測で選んでいます。`neutral` は base 自体がサーフェス寄りの灰色なので、
  他 intent と同じ「base の 13%」では **dark の `surface-variant` 上で消えます**（知覚距離
  0.0038、基準 0.015）。既存トークンにも条件を満たすものは無く、`surface-void` の
  ヴェールに落ち着きました。

  **アルファはテーマで逆向きに効く**ため、light 0.06 / dark 0.30 と分けています。light は
  面が白いので薄いほど `solid` から離れ、dark は面が暗いので濃いほど離れます。結果、素の面の上で
  `solid` との知覚距離は light 0.1780 / dark 0.1803 と両テーマで揃います。

  **見た目が変わるのは `neutral` の `subtle` だけ**で、他の intent と他の variant は変わりません。

- c87eb05: Playground: stack Billing / Members tables as cards on narrow widths.

  Both recipes used `Table` without `mobileCard` and Cell `label`s, so four-column tables were clipped inside the Playground cards. Same shape as the Captions fix (T97).

- 6ef9ecf: Add `--wim-color-line` as the name for the border/mark grey (`--wim-color-secondary` stays as an alias)

  `--wim-color-secondary` は枠・区切り線・トラック・ドットに使う灰色ですが、
  `secondary` intent の廃止によって**語彙の中に参照先を失った名前**になっていました。
  実態に合わせて `--wim-color-line` を追加し、ライブラリ内部の参照 36 箇所を移しました。

  **旧名 `--wim-color-secondary` はそのまま残ります。** `--wim-color-line` を指すエイリアスで、
  値は従来と同一です。独自にテーマを組んでいる場合、これまでどおり `--wim-color-secondary` を
  上書きすれば同じように効きます。

  **`--wim-color-neutral-fill` とは統合していません。** dark で値が分岐しており
  （line は `#b6b6b6` のまま / neutral-fill は `#575757`）、`surface-variant` 上の知覚距離は
  0.3487 対 0.0292 です。1px の枠やスピナーの線を後者で描くとダークでほぼ消えます。

  あわせて、`secondary` intent の廃止時に残っていた到達不能な CSS（`Avatar` / `Progress` /
  `ProgressRing` の `.secondary`）を削除しました。型から消えているためクラスは生成されず、
  見た目に影響はありません。

- 56df4f4: Fix text contrast on avatars, leaderboard medals and short-label controls

  **1 文字のテキストは axe が色コントラストを測りません**（`Element content is too short to
determine if it is actual text content`）。そのため、以下の違反が検出されないまま出荷されていました。

  - **`ChatUI` のアバター**: 全 13 色で白文字固定。**light 3 色・dark 9 色**が WCAG AA を割っており、
    ダークの `s7` は **1.52**（基準 4.5）。スウォッチごとに文字色を対にし、白／黒のうち
    コントラストが高い側を機械的に選びました（全 26 通りで最小 4.60）
  - **`Leaderboard` のメダル**: 2 位 2.88 / 3 位 3.76。メダル色は変えず文字を暗くして
    7.28 / 5.59（1 位は元からその形）

  **アバターとメダルの文字色が変わります。**

- 0e463ec: Redraw `subtle` as a fill without a ring, so it stops colliding with `outline`

  `Badge` / `Tag` / `Chip` の `variant="subtle"` を **面のみ**（塗り＋透明枠）に戻し、
  `outline` を **輪郭のみ**（透明背景＋枠）のままにして、2 つを補集合にしました。

  直前の実装（濃い色の 2px 枠＋太字）は `outline` とほぼ同じ見た目になっていたうえ、
  **枠 2px・太字で 3 変種のうち最も目立つ**という逆転を起こしていました
  （`outline` は枠 1px）。`subtle` を名乗る変種が一番強く出るのは意味が破綻しています。

  その前の実装（塗り＋同色の薄いリング）に単純に戻したわけではありません。**リングは
  落としました** — 塗りと同色の枠を添える形は Tailwind の `bg-x-100 text-x-800
border-x-200` と同じ定型で、`outline` へ先祖返りする原因そのものだったためです。

  塗りのアルファは `check:contrast`（189 組 × light/dark）の実測で **13%** に決めました。
  通る範囲は 0.12〜0.15 しかありません: これより薄いと塗りが面と見分けられなくなり
  （0.10 で 0.0133 < 基準 0.015）、濃いと文字が AA を割ります（0.16 で 4.46 < 4.5）。

  外寸は変わりません（枠は 1px のまま透明にしただけ）。`font-weight` の上書きも外したので、
  `Tag` / `Chip` は `medium`、`Badge` は `normal` という各コンポーネントの既定に戻ります。

- 5cf9631: Tokens: make every `--wim-color-*-subtle` fill land at a consistent, visible tint, and stop using fill tokens as borders.

  The alphas were uniform (0.1, with `primary` at 0.04), but a fixed alpha does not produce a fixed appearance — how far a tint moves a surface depends on its hue and on how light the surface is. Measured against `surface` and `surface-app`, the perceived tint varied 5× across intents: `info-subtle` sat at 0.0188 while `warning-subtle` reached 0.0955, so a `danger` panel read as clearly stronger than an `info` one, and five combinations fell below the project's own visibility floor of 0.015 — in dark, `primary-subtle` was 0.0063, barely a third of it.

  Because light and dark respond to alpha in opposite directions, one value cannot serve both. Each intent now carries a per-theme alpha chosen so the perceived tint lands near 0.022; all 24 theme × intent × surface combinations now fall between 0.0222 and 0.0388. **Subtle fills change appearance slightly in both themes** — most visibly `primary-subtle` and `info-subtle` in dark, which were previously close to invisible.

  Four places used a fill token for `border-color`. `SortableList` (hover) and `Dashboard` (edit mode) now use border tokens. `Gallery`'s toolbar drew its border in its own background colour, so it only made the toolbar look 1px larger; it now has a real edge. `Dashboard`'s add-button hover was erasing the visible dashed outline it starts with, and now strengthens it instead.

  `check:subtle-tokens` keeps this from drifting, checking the floor, an upper bound, and the spread between intents.

- a0392dd: `Table card`: horizontal overflow is reachable again.

  The card variant set `overflow: hidden` to clip the rounded corners, which also made the overhang unreachable — measured at 390px with a 5-column table, the container was 364px against a 443px table, so the last column sat outside with no scrollbar, wheel or touch panning (only scripts could move `scrollLeft`). It is now `overflow-x: auto` with `overflow-y: hidden`; the 12px radius clipping is unchanged.

  This does not give `Table` a narrow-width mode — that is still `DataGrid mobileCard` only.

- bf52514: Table mobile cards: border-only elevation and `radius-component` to match toolbar/pagination chrome.

  Also wire `one_elevation_stance` / `one_radius_stance` into `judge:slop` (they were DESIGN rules without a `judge` rubric).

- b1b5491: `Tag` / `Chip`: `asChild` actually works (and `check:aschild` now renders to prove it).

  Both advertised `asChild` but always threw: `Tag` passed a children array into `IndicatorBase`'s `Slottable`, and `Chip` wrapped `Slottable` inside a label `<span>` so `Slot` never found it. `asChild` + `onDelete` is rejected with an explicit error. The static `check:aschild` gate now also runs a render smoke test so this class of failure cannot go green again.

## 0.17.0

### Minor Changes

- eda8789: `subtle` を淡い塗りから濃い輪郭に描き直した（`Badge` / `Tag` / `Chip`）。**見た目が変わる変更**。

  背景色を外し、文字と 2px の枠を同じ濃い色（AA 可読の text ロール）に揃えた。15% の淡い塗りは意味を運ばないわりに、同じ画面に複数並ぶと全部同じ薄さでぼやけるため。

  **外寸はほぼ据え置き**: 枠が 1px 太くなる分をパディングから返しているので、実測で高さは変わらない（Tag 24.2px / Badge 21.2px のまま）。幅は太字のぶん 1.8〜2.7px 増える。

- eda8789: `DataGridColumn` に `maxWidth` を追加した。

  `width` は従来どおり**列幅の下限**（表は `table-layout: auto` なので、内容や余りに応じて広がる）。**中身を止めたいときは `maxWidth`** を使う ── これを宣言した列でだけ、セルの内側が頭打ちになり、`Text truncate` がグリッドの中で初めて省略記号を出す。

  `maxWidth` は**中身の上限であって列幅の上限ではない**（表は余った幅を配り続けるので、`maxWidth: 200` の列が 523px で描かれ、テキストだけ早く止まることがある）。JSDoc に実測値付きで記載した。

### Patch Changes

- eda8789: `Card` に `position: relative` を持たせた。

  `LoadingOverlay` は既定（`fixed={false}`）が `position: absolute` なので、覆うのは「包んだ要素」ではなく**位置を持つ最も近い祖先**。`Card` が `static` だったため、`<Card><LoadingOverlay /></Card>` と素直に書くと**画面全体が覆われていた**（実測 1280x800 に対しカードは 1248x75）。

  `z-index` を伴わない `relative` は重ね合わせコンテキストを作らないので、影響は「カード内の絶対配置要素が何を基準にするか」に限られる。**カード内に絶対配置した要素をカードの外へはみ出させていた場合は、位置が変わる。**

- eda8789: `HoverCard` が、ポインタがカードへ向かっている間は閉じなくなった（セーフトライアングル）。

  トリガーからカードへは斜めに移動するのが自然だが、従来は**トリガーを外れた瞬間**に閉じていたため、カードに着く前に消えていた。Floating UI の `safePolygon()` に載せ替え、ポインタとカードを結ぶ三角形の中にいる間は閉じない。カードから離れる向きでは従来どおり閉じる。

  自前の開閉タイマー 2 本は削除。`openDelay` / `closeDelay` の意味は変わらない。

- eda8789: 複数行のとき、`Alert` と `Toast` のアイコンが 1 行目に揃うようになった。

  どちらも `.root` が「1 行目に揃える」と宣言しているのに、アイコン側の `align-self: center` がそれを打ち消しており、**内容が伸びるほどアイコンが下へ落ちていた**（Alert: 塊 68px で 24px ずれ / Toast: 塊 100px で 43px ずれ）。

  あわせて `CodeBlock` / `Terminal` / `Code` で `hyphens: manual` を指定し、コードが単語の途中でハイフン分割されないようにした（en / pt で `hyphens: auto` を継承していた）。散文側の設定は変えていない。

- eda8789: - `LoadingOverlay` の `loaderSize="xl"` が `lg` に潰れていたのを修正（内部の対応表が `xl` を `lg` に落としていた）
  - `ErrorBoundary` の既定フォールバックが生の色（`rgba(0, 0, 0, 0.05)`）を直書きしていたのをサーフェストークンへ。固定の黒 5% だったため dark テーマで意図どおり沈まなかった

## 0.16.0

### Minor Changes

- ac26732: Attribution the package should have carried from the first release, plus the
  icon and animation fixes that came out of establishing it.

  **Read this part first: the icons look different**

  The icon set is largely derived from Feather (MIT) and Lucide (ISC). Nothing
  in the published package said so — there was no `NOTICE`, no mention in the
  README, and no dependency to point at. **This release adds `NOTICE` and ships
  it in the tarball**, which is what both licences ask for.

  Establishing that meant matching every shipped icon against its possible
  source by path data rather than by name, and once that was done, a number of
  icons were moved onto the upstream shape they were already almost identical
  to. **If you have visual snapshots, they will need updating.** What changed:

  - **12 icons were replaced with the upstream original** they differed from by
    a few coordinates: `phone`, `home`, `menu`, `document`, `thumb-down`,
    `paperclip`, `columns`, `repeat`, `maximize`, `project`, `send`, `settings`.
    The difference was never a design decision, and an exact match is something
    the notice can actually describe.
  - **`align-justify` is now four lines, not three.** It was a byte-for-byte copy
    of `menu` — the name said "justified text", the shape said "hamburger". It is
    used for list and inline-diff toggles, where rows of text is the right idea.
    `MenuIcon` keeps the hamburger.
  - **`square` is now an outline, not a filled block**, and moved out of the
    filled group in the docs. The set is line art at `stroke-width: 2`; `circle`,
    `play` and `pause` remain filled on purpose (a media transport reads as
    solid), but a plain square had no such reason.
  - **`skip-forward` now points forward.** It was shipped as a copy of
    `skip-back` with only the triangles flipped, so the arc still wound
    backwards. There is now a check that every mirrored pair actually mirrors.
  - **`pdf` and `grid` were redrawn** — `pdf` to the same stroke width as the
    rest, `grid` to a shape that is not Feather's `grid`.

  **New icons**: `alert-triangle`, `arrow-up`, `arrow-down`, `arrow-left`,
  `arrow-right`, `bold`, `italic`, `underline`, `strikethrough`, `link`,
  `unlink`, `list`, `list-ordered`, `eraser`. Most were previously drawn inline
  inside `RichTextEditor`, where nothing could see or reuse them.

  **`CloseSmallIcon` is deprecated.** It was identical to `CloseIcon` at every
  size the library uses, and the components that were supposed to distinguish
  them did not. It still exports the same glyph; it will be removed in the next
  major. `Terminal`, `Dashboard`, `Gallery` and `Popover` now use `CloseIcon`.

  **Two things that were carrying meaning in colour or in text**

  - **`warning` and `danger` now use different glyphs.** Both were a circle with
    an exclamation mark, separated only by colour — so in greyscale, in mono
    print, or for someone with a colour vision deficiency, they were the same
    state. `warning` is now a triangle. Affects anything built on the shared
    feedback icon: `Alert`, `Toast`, `Notification`, `Result` and friends.
  - **`Stats.Trend` draws an icon instead of the characters `↑ ↓ →`.** Typed
    arrows change shape and optical weight with the font and never matched the
    rest of the set. **The DOM changed**: the trend span now contains an `<svg>`
    and is `aria-hidden`, where it used to contain a text node. If you assert on
    its text content, that assertion will fail.

  **Enter animations now actually animate**

  `Transition` was applying its `enterTo` classes for the whole of the enter
  phase, so the browser had no before-change style to interpolate from and every
  entrance was instant. `Drawer` and anything else built on `Transition` snapped
  into place; `BottomSheet` appeared to work only because it carried its own
  `@keyframes` alongside. **Overlays that appeared instantly will now slide and
  fade in.** If you disable animations in tests, keep doing so; if you did not
  need to before, you may now.

  `BottomSheet` also no longer jumps sideways just after opening. On viewports
  at `sm` and up it was centred with `left: 50%` plus a transform, which the
  slide transform then overwrote for one frame — measured at 224px of lateral
  travel. It is centred with auto margins now.

  **Components that are narrow because their container is narrow**

  `CodeBlock` and `ChatUI` decided how to wrap from the **viewport** width, so
  inside a device-width frame, a split pane or a preview panel — narrow element,
  wide window — the narrow-width handling never applied. `CodeBlock` measured
  216px wide with 270px of content hidden in a scroll. Both now use container
  queries against their own width. `CodeBlock` also takes `--wim-width-sm` as a
  floor so it cannot collapse.

  **`TabBar`**

  `fixed` still defaults to `true` and still pins to the viewport — that is
  correct for the phone-shaped screens it is for, and `AppShell.withNavbar`
  reserves room for it. It is now documented that the pin leaves any container
  you put it in, which nothing warns you about, because `position: fixed` does
  not widen the document and so no overflow check ever notices. Pass
  `fixed={false}` for a bar that belongs to a container.

  Items are also taller (the previous padding was tight enough that labels
  crowded the top edge), the bar uses `min-height` rather than a fixed height so
  it grows with its content, and the width cap is now its own token,
  `--wim-tab-nav-max-width`, instead of borrowing the one meant for status
  description text.

  **`Lightbox.Trigger` has an accessible name that does not depend on loading**

  Its name came only from the `alt` of the nested image — but `Image` does not
  render an `<img>` until it intersects the viewport, so before that the trigger
  was a button with no name at all. The name now resolves from data: your
  `aria-label` / `aria-labelledby`, then the new `alt` prop, then the gallery
  item's `alt`, then a generic "Open image". **Note that an `aria-label` beats
  child text**, so if you put your own text inside the trigger, pass
  `aria-label` explicitly.

  **Bare `<code>`, `<kbd>`, `<samp>` and `<pre>`**

  These fell through to the UA stylesheet's generic `monospace` keyword, which
  browsers render at their own default size — measured at 13px against 16px body
  text, and in a different typeface from every `Code` component on the same
  page. They now take the library's mono token and `font-size: 1em`. This is in
  `@layer base`, so it does not touch any component's own styling.

  **Provenance is checked, not asserted**

  `npm run check:icons:provenance` matches every shipped icon against Feather,
  Lucide, Heroicons, Bootstrap Icons and Tabler and fails if an icon is added or
  changed so that `NOTICE` no longer describes it — including SVG written inline
  inside a component, which is how four Feather icons had been sitting in
  `RichTextEditor` unattributed. The six icons that match nothing were checked
  once against the whole of Iconify (236 sets, 328,420 icons) as well.

## 0.15.0

### Minor Changes

- 17f1f4b: `ChatMessage`'s actions are now visible without hovering.

  **What changes**: `actionsVisible` defaults to `true` instead of `false`. If you
  pass `actions` to a `ChatMessage`, those controls are now drawn at full opacity
  from the start on pointer devices, not revealed on hover. Touch devices already
  behaved this way and are unaffected.

  **Why**: hover-reveal does not hide a control, it hides the fact that the control
  exists. Someone reading a reply with a mouse has no way to learn that they can
  rate it until they happen to point at it, and the tooltips added alongside do not
  help — they wait for the same hover, so they only reach people who already found
  the buttons.

  **If you want the old behaviour**, pass `actionsVisible={false}`. That still
  reveals on hover and on `:focus-within`, and still shows the actions
  unconditionally on touch (`@media (hover: none)`), because `opacity: 0` does not
  disable a control — a hidden thumbs-down remains tappable.

  Storybook's `IconGallery` blocks in the icon documentation also render correctly
  in dark mode now; they were drawing white icons on a white specimen tile.

## 0.14.0

### Minor Changes

- 1e0a4a5: Eight fixes that mostly show up as things no longer collapsing, plus one bundle
  that got bigger on purpose.

  **Read this part first: what looks different, and what to check**

  - **Components no longer shrink below a readable width.** Placed side by side in
    a flex row, form fields, tables, grids and navigation used to collapse to a
    sliver — measured at 24px, and 0px for `Gallery` and `Dashboard`, with text
    wrapping one character per line. `MarkdownRenderer` went from 1160px tall to
    6950px. They now stop at `--wim-width-sm` (180px). **If you place any of these
    in a container narrower than 180px, it will now overflow rather than shrink.**
    Affected: `InputBase`, `Textarea`, `Select`, `RichTextEditor`, `OtpInput`,
    `Transfer`, `Label`, `Code`, `Menu`, `MarkdownRenderer`, `Tabs`, `Stepper`,
    `Pagination`, `Gallery`, `Grid`, `SimpleGrid`, `BentoGrid`, `Dashboard`,
    `Table`, `DataGrid`, `DescriptionList`, `GanttChart`, `TreeSelect`,
    `DateRangePicker`, `QueryBuilder`, `Banner`, `ThreadList`, `ThoughtProcess`,
    `ChatUI`.

  - **`AppShell`'s composition API produces a different DOM.** Passing
    `AppShell.Header`, `.Sidebar` or `.Main` as children used to place all of them
    inside an implicit `<main>`, giving you two `<main>` elements nested. Children
    carrying a structural part are now rendered as given. The props API
    (`header={…} sidebar={…}`) is unchanged.

  - **Hover-only controls now appear on touch devices.** `ChatUI`'s message
    actions, `Gallery`'s selection checkbox and `FloatButton`'s description were
    revealed on `:hover`, which never fires on a phone — so they were invisible,
    and `opacity` does not stop a control being tapped. They now show whenever
    there is no hover, and on keyboard focus.

  - **`wimui/ai` grew from 25.6 kB to 45.0 kB gzipped.** The feedback buttons got
    tooltips, which pulls in `@floating-ui/react`. If your app already renders a
    `Dropdown`, `Popover`, `ContextMenu` or `Tooltip` the module is shared and the
    real cost is close to zero; if you import `wimui/ai` and nothing else, this is
    a genuine increase.

  **New**

  - `ChatMessage` takes `actionsVisible` to keep its actions on screen instead of
    waiting for hover — useful on the latest reply. Touch devices show them either
    way.
  - `AIResponseFeedback`'s three buttons carry tooltips whose text matches their
    `aria-label`, so sighted mouse users get what screen readers already had. They
    appear on focus as well as hover.
  - `--wim-drop-shadow-xs`: the same shadow as `--wim-shadow-xs` expressed for
    `filter`, so an element and its pseudo-element fall as one shape.

  **Fixed**

  - The speech bubble's tail no longer shows a seam against the bubble on displays
    with fractional device pixel ratios, which is most Android phones. Two causes:
    the triangle abutted the bubble instead of overlapping it, and the bubble's
    `box-shadow` was drawn across the tail's root.
  - `Select`'s `width` prop works again in narrow layouts — the readable floor is
    now capped by the width you asked for, so `width="xs"` renders at 120px rather
    than being overridden to 180px.

## 0.13.0

### Minor Changes

- aeacad7: `Card` no longer accepts `padding` and `radius` values it never styled. This is
  the only change in this release, on purpose: it is the one that stops
  compiling, and mixing it with anything visual would leave you unable to tell
  which change caused what.

  **What breaks**

  `padding="4xl"`, `padding="5xl"`, `radius="xs"`, `radius="3xl"`, `radius="4xl"`
  and `radius="5xl"` no longer type-check:

  ```
  Type '"5xl"' is not assignable to type '"none" | "sm" | "md" | "lg" | "xl" | "2xl"'.
  ```

  Nothing changes at runtime. Those six values never had a CSS class behind them,
  so a `Card` written with one rendered exactly as if the prop had been omitted —
  `radius="5xl"` gave you the default radius, silently. If your code stops
  compiling, it was already not doing what it said; delete the prop or pick a
  value from the union the error prints.

  There is no `--wim-radius-xs`, `-3xl`, `-4xl` or `-5xl` token, so those four
  were never going to mean anything without inventing a new radius scale first.

  **Why it will not come back**

  The prop types are now derived from the same list the component checks at
  runtime, and a test reads `card.module.scss` off disk and fails if that list
  stops matching the stylesheet. Adding a size to the union without adding the
  class is now a failing test rather than a value that quietly does nothing.

  The development-time warning stays. Types only exist at compile time, so
  JavaScript consumers and anyone reaching for `as any` can still pass a value
  with no styles, and they still get told why nothing happened.

## 0.12.0

### Minor Changes

- 0cd93f1: Four contrast fixes you will see in dark mode, and the documentation now has to
  compile before it ships.

  **What looks different**

  - **Notification badges on `TabBar` and `FloatButton` take their text colour
    from the surface they sit on.** They painted a `danger` background and then
    asked `--wim-color-text-on-primary` for the text. In light both happen to be
    white, so it looked correct; in dark, `danger` is `#fb7482` and white on it
    measures 2.65:1. The text is now `--wim-color-text-on-danger`, which inverts
    to black in dark.

  - **`Timeline` dot glyphs use text-weight intent colours.** `.primary` already
    used `--wim-color-text-accent`; the other three used the fill colours, which
    do not adapt to the theme. Measured: `secondary` 2.03:1 in light, `success`
    2.48:1 and `danger` 4.36:1 in dark. The dot borders keep the fill colours — an
    outline is not a surface.

  - **Links inside `.wim-docs-container` are `--wim-color-text-accent`.**
    `--wim-color-primary` is `#055d87` in both themes, so it never moved with the
    dark surface underneath it: 2.11:1.

  **For agents reading `llms.txt`**

  - **Three recipes did not compile.** They indexed a literal-keyed intent map
    with a `string`, which is a `TS7053` error under `noImplicitAny` — at the
    exact line the recipe exists to demonstrate. The row data is now `as const`.
    The generator claimed these were verified against the real API by hand; that
    claim is now checked by `tsc` over every example in the READMEs and both
    `llms` files.

  - **`llms.txt` has a "Not in scope" section.** Parallax scrolling, text scramble
    and spring physics are absent by decision, not by omission, and an agent
    reading a catalogue cannot tell those apart — so it builds them by hand. Each
    entry carries the reason and the supported alternative (`ScrollProgress`,
    `StreamingText`, `--wim-easing-spring`).

  Nothing about the public API changes, and no CSS custom property was added,
  renamed or removed.

## 0.11.0

### Minor Changes

- 2173663: Two new components, four new props and tokens, and a handful of changes you will
  see without going looking for them.

  **Read this part first: what breaks, and what looks different**

  - **`Progress` and `ProgressRing` now require an accessible name.** `<Progress
value={40} />` no longer type-checks; pass one of `label`, `aria-label` or
    `aria-labelledby`. Nothing changes at runtime. The type now refuses what axe
    was already reporting as a `serious` violation — a progressbar with no name —
    which the docs told you to avoid but the API happily let you write. This is
    the only breaking change.

  - **`subtle` badges, tags and chips have a border.** They were a translucent
    fill with no edge, so on any surface close to their own tint they read as a
    smudge rather than a shape. The border is `--wim-color-border-secondary` where
    the intent has a `subtle` pair, and otherwise the intent colour at 30%. To get
    the old look back, set `border: none` on the element.

  - **`Alert`, `Calendar` and `TreeView` no longer cast a shadow.** `DESIGN.md`
    reserves shadows for things that sit _above_ the page; these sit _in_ it, and
    now separate by fill and outline like every other in-page surface.
    `Notification` keeps its shadow — it moved to the toast container, which is
    the thing that actually floats.

  - **Hairlines follow whatever is behind them.** `--wim-color-border-secondary`
    changes from an opaque grey to black at 10%. The opaque value had become the
    page colour in 0.10.0, so dividers in `DescriptionList`, `ErrorBoundary` and
    `KeyboardShortcuts` vanished whenever those sat directly on the page. On a
    white card it looks the same as it did.

  - **Monospace now reaches the elements inside it.** Setting a mono family on a
    container used to stop at `code`, `pre`, `kbd` and `samp`, because the UA
    stylesheet gives each of them their own `monospace` and that beat inheritance.
    Those four now inherit wherever the library sets a mono family.

  **New**

  - **`ProgressRing`** — the circular case `Progress` could not cover. Deliberately
    the same prop vocabulary as `Progress` (`value` / `max` / `intent` / `size` /
    `label` / `showValue` / `indeterminate`), a separate component because the
    linear and circular DOM have nothing in common.

  - **`SplitButton`** — a default action with its own menu beside it. `toggleLabel`
    is required, because the toggle half draws only an arrow and would otherwise
    ship as a nameless button. The two halves share `variant`, `intent` and `size`
    by design: let them diverge and they stop reading as one control.

  - **`Text` `lineClamp`** — stop after N lines. Multi-line truncation previously
    meant `Spoiler`, which always draws an expand toggle. `truncate` still wins if
    you set both.

  - **`Result` `iconSurface`** — sits the icon on a tinted disc. Off by default,
    and it does not change the component's outer size.

  - **Four tokens**: `--wim-color-info-subtle`, `--wim-color-success-subtle`,
    `--wim-color-warning-subtle` and `--wim-color-neutral-subtle`. `primary` and
    `danger` already had theirs, so screens reaching for a soft `info` or
    `success` fill were mixing colours by hand.

  **Fixed**

  - **`Tabs` and `TabNavigation` sized their indicator against the wrong font.**
    The slider takes its width from the active item, but the `ResizeObserver`
    watched the container — which is `width: 100%` and therefore never resizes
    when the web font swaps in and the item underneath it grows. The slider kept
    whatever it measured against the fallback face. It was consistently wrong
    rather than intermittently wrong, which is why screenshots never caught it.

  - **`PullToRefresh` no longer updates state after it has been unmounted.** When
    `onRefresh` resolved it started a 50ms timer to settle back to idle, and never
    cancelled it. Unmount inside that window — navigate away while the spinner is
    showing — and the timer still fired.

## 0.10.0

### Minor Changes

- d828101: The page gets a surface of its own. `DESIGN.md` asks components to separate
  surfaces by fill and to keep shadows for things you can operate, but in the light
  theme there was nothing to separate them with: every surface you could put on the
  page landed within 1.1–1.2:1 of it, so a card's outline was in practice being
  carried by its shadow.

  **Read this part first: things that look different**

  - **The page is darker.** `--wim-color-surface-app` moves from `#f5f5f5` to
    `#e5e5e5`, so a white card now reads 1.26:1 against it instead of 1.09:1.
    `Alert`, `Card` and friends separate from the background on fill alone.
  - **The step inside a card moved up, not down.** `--wim-color-surface-variant`
    goes from `#e5e5e5` to `#f5f5f5`. It has to, or it would be the page colour.
  - **`neutral` badges, tags and chips are a distinctly darker grey.** They used to
    borrow the disabled colour (`#e5e5e5`); they now have their own token,
    `--wim-color-neutral-fill` (`#b6b6b6`), which is the one value that stays
    visible on the page, on white and on `surface-subtle`.
  - **Disabled controls are slightly lighter** — `--wim-color-disabled` goes from
    `#e5e5e5` to `#f5f5f5`. It could not stay where it was, because that is now
    exactly the page colour and a disabled input sitting outside a card vanished
    into it.
  - **Muted and accent text are a step darker.** `--wim-color-text-tertiary`
    (`#646464` → `#4f4f4f`) and `--wim-color-text-accent` (`#055d87` → `#04436e`).
    Both were failing WCAG AA once the page darkened underneath the translucent
    tints they sit on — `primary`+`subtle` badges were at 4.38:1. `text-accent` now
    follows the same rule its peers already did: `text-danger`, `text-success` and
    `text-warning` are each a step darker than the fill they name.

  **The dark theme is untouched.** It already separated its surfaces (1.85:1) and
  overrides every one of these tokens itself.

  **If you want the previous look**, set the tokens back:

  ```css
  :root {
    --wim-color-surface-app: #f5f5f5;
    --wim-color-surface-variant: #e5e5e5;
    --wim-color-disabled: #e5e5e5;
    --wim-color-neutral-fill: #e5e5e5;
    --wim-color-text-tertiary: #646464;
    --wim-color-text-accent: #055d87;
  }
  ```

  Note that restoring `surface-app` alone brings back the flat page; restoring
  `disabled` and `neutral-fill` to `#e5e5e5` on top of the new page colour will
  make disabled controls and neutral indicators disappear into it.

  `--wim-color-border-secondary` and `--wim-color-scrollbar-track` deliberately
  still sit at `#e5e5e5`. Against the old page they were already at 1.16:1 — close
  to invisible — and this release takes that to 1.00:1 where they are drawn
  directly on the background. Borders inside cards are unaffected.

- d828101: Two icons the set was missing: `menu` (three equal-length bars) and `grid`
  (a 3×3 arrangement). Both are exported from `wimui/icon` like the rest.

  Components that answer to more than one name now say so in `llms.txt`, starting
  with `Dropdown`, `HamburgerMenu` and `BentoGrid` — an agent or a reader arriving
  with "overflow menu", "kebab menu" or "waffle menu" in hand can find the
  component that actually implements it. The aliases are drawn from vocabulary in
  use elsewhere (Apple HIG, Material, ARIA APG), not invented.

### Patch Changes

- d828101: `Stats.Trend` is legible on its own. It used to tint its text with the trend
  colour and leave the background alone, which put coloured text on the card's
  surface at a contrast you had to squint at. It now paints a filled chip and puts
  the surface colour on the text, so the direction reads at a glance instead of
  depending on how the tint landed.

  `EmptyState`'s `+` is the size the rest of the set is — it was hardcoding a 48px
  inline size rather than taking it from the icon scale.

## 0.9.0

### Minor Changes

- 3c7eff0: The monospace token becomes real. `--wim-font-family-mono` has always named
  `"Noto Sans Mono"` first, but five separate defects meant the token never
  reached the text it was supposed to style — so code in this library rendered in
  whatever monospace face the reader's OS happened to pick.

  **Read this part first: things that look different**

  - **`Code` follows the token now.** It used to hardcode its own stack
    (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
"Courier New"`), which does not include Noto Sans Mono and disagreed with
    every other code component. If you have not loaded a web font, the practical
    effect is that the head and tail of the stack change: `ui-monospace` no longer
    wins on macOS (so SF Mono gives way to Monaco/Menlo), `Cascadia Code` is now
    consulted before `Consolas` on Windows, and `Liberation Mono` / `Courier New`
    are no longer named on Linux.
  - **`CodeBlock`, and `ErrorBoundary`'s stack trace, follow it too.** Both styled
    their outer element with the token, but the element actually holding the text
    is an inner `<code>` — and the UA stylesheet's `code { font-family: monospace }`
    keeps a parent's family from reaching a child whenever the author declares
    none. So the bodies were painting the generic face while the computed style on
    the wrapper said `"Noto Sans Mono"`. They inherit now.
  - **`ErrorBoundary` read the wrong custom property** — `var(--font-family-mono)`,
    missing the `wim-` prefix — so its details panel never consulted the token at
    all.

  The upshot: inline `Code`, `CodeBlock`, `Markdown`, `Terminal`, `JsonViewer` and
  the rest now agree on one family instead of two, and overriding
  `--wim-font-family-mono` actually changes all of them.

  **If you want the previous rendering**, set the token to the old stack:

  ```css
  :root {
    --wim-font-family-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  }
  ```

  **Fonts are still not bundled**, and `styles.css` still requests none. That is
  deliberate, and the READMEs now say so out loud: each typography token names a
  preferred family and then falls back to system faces, so omitting the fonts is a
  supported choice. If you want the documentation site's exact rendering, the
  Fonts section shows the `@fontsource` opt-in — `npm i @fontsource/noto-sans
@fontsource/noto-sans-mono`, then import the weights you need before
  `wimui/styles.css`. The same fact is in `llms.txt` so agents stop inventing a
  `wimui/fonts.css` that has never existed.

## 0.8.0

### Minor Changes

- 591a637: Four fixes that came out of taking the workarounds back out of the second T32
  screen. The screen had four of them; every one pointed at something the library
  should have handled.

  **Read this part first: things that look different**

  - `SegmentedControl` no longer truncates its options. It used to clip them to
    equal columns and add an ellipsis, so `A cada duas semanas` showed as
    `A cada d…` at 390px — and the English default was clipped too, at 768px, in
    the shipped 0.7.0. Truncating is the wrong trade for this control: you pick a
    segment by reading all of them, so a label you cannot read is not an option
    you can choose. Segments now keep their content width when space runs short
    and the track scrolls horizontally instead, with the last segment cut at the
    edge to show there is more. **Equal width is unchanged whenever the options
    fit** — every existing story measures the same at 1280px, including the two
    that broke the last time this was touched (`QueryBuilder`, `Token/Density`)
    and `with-icons` at 101.6px × 3. No new prop, no extra element.
  - `<Legend label="…" />` now renders at the same weight as `<Legend>…</Legend>`.
    The two paths disagreed — 700 through children, 500 through `label`, because
    the shared field-label style forced medium. Legends are section titles, so
    both are bold now. Other field labels (`Input`, `NumberInput`,
    `CounterTextarea`) are untouched at 500.

  **Legend accepts children on their own**

  `label` is now optional. It was required, which made the component's own
  documented usage — `<Legend>Group title</Legend>` — fail to typecheck, even
  though the stories rendered exactly that. Passing children only also drops the
  wrapper the label slot needs, so the legend can hold a heading directly:
  `<legend><h2>…</h2></legend>` is valid HTML, while a heading inside the label
  slot lands in a `<span>`, which is not.

  `requiredLabel` and `optionalLabel` now reach the badge. They were accepted by
  the type and then dropped, so the badge kept its default wording and the value
  leaked into the markup as `<legend requiredlabel="…">`.

  **Fieldset**

  `variant="plain"` now also clears the legend's inline padding. That padding
  exists to cut a notch in the frame; with no frame it only pushed the section
  heading 4.8px to the right of the fields it labels.

## 0.7.0

### Minor Changes

- e76c4db: The release where defaults change. Everything here came out of building a
  multi-step form with the library — a wholesale trade application — and then
  fixing what that screen ran into.

  **Read this part first: things that look different**

  - The required marker was a filled `danger` badge. On a form where most fields
    are required, that painted the page in error colour before anyone had done
    anything wrong, in the same colour the real errors use — so the real ones
    stopped standing out. It is now `subtle`. The word and the intent are
    unchanged, only the fill: 5.97:1 in light and 6.33:1 in dark, measured after
    compositing, both clear of AA.
  - `Alert`'s title is no longer a heading. It was an `h4`, so an alert under an
    `h2` skipped `h3` and failed `heading-order`. An alert is a notice, not a
    section of the document. The default is now `div`, and `titleTag` accepts
    `div`, `p`, `strong` and `span` alongside the headings. Nothing moves: the
    title's size, weight, line-height and box are identical either way.
  - Inline `<Code>` is no longer red. It took `--wim-color-text-danger`, so a lot
    number in a table or a reference number on a success screen came out looking
    like a failure. It now uses `text-primary`, like the block variant. It also
    no longer breaks mid-token — `KR-2026-0143` used to go vertical in a narrow
    column.
  - `Icon color="secondary"` was the only Icon colour resolving to a fill token,
    and on the light canvas it measured 1.86:1 — under the 3:1 that WCAG 1.4.11
    asks of a meaningful graphic. It now resolves to `text-secondary`, matching
    what `Text` means by the same word. `Result`'s large status glyph and
    `Image`'s fallback move to `tertiary`, which stays quiet at 5.43:1.

  **New**

  - `Text` takes `nowrap` and `truncate`. A short value like `1.2 MB` split
    across two lines in a narrow column and inline styles were the only way out.
  - `Fieldset` takes `variant="plain"`, which keeps the grouping and its
    `<legend>` and drops the frame — a framed fieldset inside a `Card` draws a
    box inside a box, and the alternative was losing the grouping entirely.
  - `Input` and `NumberInput` take `suffix`, for units like `kg`, `%` or `円`.
    It sits in the flow rather than floating over the field, so a long number
    never slides underneath it, and it is announced with the field.
  - `FileUpload` and `Dropzone` take `value: string[]`. Neither could be told
    that a file already existed, so a field holding last week's upload said
    "no file selected" indefinitely and the application had to draw the list
    itself.

  **Fixed**

  - `SegmentedControl` shrinks instead of pushing the page sideways. Its tracks
    could not go below their content, so the ellipsis it already had never
    fired: at 320px the control stayed 367px wide and the page picked up 79px of
    horizontal scroll. Label length is decided by translation, so fitting in
    English proved nothing.
  - `OtpInput`'s `digitAriaLabel` receives a 1-based position. It always did;
    nothing said so, and reading it as an index produced "Digit 2" on the first
    box.
  - `Card` warns in development when given a `padding` or `radius` value that
    type-checks but has no styles behind it. Narrowing those types is a breaking
    change and waits for the release that does those.

## 0.6.1

### Patch Changes

- 3f54363: Three defects 0.6.0 shipped, found by building the second screen with it — a
  multi-step wholesale application form.

  **Accessibility**

  - `FileUpload required` put `aria-required="true"` on its trigger. The trigger is a
    `role="button"`, and that role does not permit the attribute, so axe reported a
    critical `aria-allowed-attr` violation on every required upload in the library.
    The requirement is carried by the field's description instead.

  **Correctness**

  - `OtpInput` ignored the value it was mounted with. Its derived-state sync seeded the
    previous value from the current one, so the first render always compared equal and
    the sync never ran — `<OtpInput value="418203" />` drew six empty boxes. Re-showing
    a saved code, or remounting the step that holds one, dropped it silently.
  - `Alert`, `Banner`, `Notification`, `Snackbar`, `Toast` and `Result` drew the same
    filled circle for every intent but success. `danger`, `warning` and `info` all fell
    through to it, leaving colour alone to carry the intent — while `alert-circle` and
    `info-circle` sat unused in the icon set, and the docs claimed each intent had an
    icon of its own. They now do. `warning` shares `danger`'s glyph, since the set has
    no triangle, and colour still separates the two.

  The icon change is visible: anything showing a `danger`, `warning` or `info` feedback
  component gets a different glyph in the same position and colour.

## 0.6.0

### Minor Changes

- 1785eb1: Fixes the library found by building a real screen with it — an admin table with bulk
  selection, inline editing and row menus — and two defaults that screen showed to be wrong.

  **Accessibility**

  - `Button variant="outline"` and `variant="ghost"` took their text colour from the fill
    tokens, which the design guide reserves for fills. In dark theme `intent="success"` read
    at 2.48:1 and `intent="danger"` at 4.35:1, both under the WCAG AA floor. They now use the
    `text-*` roles: 8.07:1 and 6.06:1. Borders keep the intent colour.
  - `DataGrid` printed its pager in English regardless of locale (`Displaying 8 of 34 records`,
    `(3 row(s) selected)`, `Loading more...`). Eight screen-reader labels were hardcoded too —
    `Tag`'s close button, `Kanban`'s board and card-move controls, `Calendar`'s grid and month
    arrows, `ChatUI`'s attach button, and the alt text on `Audio` cover art and `ImageCropper`.
  - `InlineEdit`'s trigger could not be named. `aria-label` landed on the wrapper, so a screen
    reader announced only the value — "A-14, button". It now reaches the trigger and the input.

  **Narrow screens**

  - `Container` had no gutter at all, so any viewport narrower than its max-width pressed the
    content against the edge. It now carries a 16px `padding-inline`. **Layouts using
    `Container` will shift by 16px per side.**
  - The card layout below the breakpoint was half-finished: the grid stayed a framed white
    panel behind the cards, the selection cell kept its desktop 60px column and sticky borders,
    rows holding a control stood taller than rows holding text, cards had no top corners
    (`border-collapse: collapse` never paints a row's radius), and the inner padding came from
    the table's compact density. All fixed.
  - Cards now start under 576px rather than 768px, so tablets keep the table. `mobileCard="md"`
    restores the old threshold.
  - A `<code>` in a table cell no longer breaks one character per line.
  - `Toolbar.Group` can wrap; a group of buttons no longer forces the page to scroll sideways.

  **Overlays**

  - `Dropdown` menus render through a portal. Opening a row menu inside a `DataGrid` used to
    extend the grid's scroll area, and inside a card it was clipped away entirely. Menus also
    gain `flip` and `shift`, so one near a viewport edge stays on screen.

  **New**

  - `DataGrid`'s `loading` accepts `"blocking"` (what `true` has always meant) or `"refresh"`,
    which announces `aria-busy` while leaving the rows readable and usable. `refresh`
    deliberately does not dim: fading drops secondary text below AA.
  - `EmptyState` icons default to a muted colour instead of full-strength text black.

## 0.5.3

### Patch Changes

- 4ac5797: Patch release after 0.5.2. `Card` now honours `padding="xs"` and `radius="xl"` / `"2xl"` — the prop types already accepted them but no CSS class existed, so they silently did nothing. This is additive: values that previously had no effect now apply `--wim-spacing-sm`, `--wim-radius-xl` and `--wim-radius-2xl` respectively. Heads-up for the next minor: the remaining values with no matching token (`Card` `radius="xs" | "3xl" | "4xl" | "5xl"` and `padding="4xl" | "5xl"`) will be narrowed out of the prop types in 0.6.0 rather than implemented, since the radius scale stops at `2xl` and the spacing scale at `5xl` — implementing the padding pair would make two distinct values render identically.

## 0.5.2

### Patch Changes

- caa3770: Patch release after 0.5.1. Card `padding` now works at `xl` / `2xl` / `3xl` — the prop type accepted them but no CSS class existed, so they silently did nothing and call sites had to reach for inline style. Badge / Tag / Chip with `intent="neutral"` and `variant="subtle"` were invisible on light surfaces (the `disabled` token painted at 15% alpha resolves to roughly `#fbfbfb` on white); the token is now painted opaque, so **that combination changes appearance** — light `#e5e5e5` with `#393939` text (8.5:1), dark `#4f4f4f` with `#e5e5e5` (6.5:1). `llms.txt` / `llms-full.txt` regenerated: the published copies had been stale since v0.3.0, listing wrong `FeedbackIntent` defaults and missing props.

## 0.5.1

### Patch Changes

- c44e30e: `ChatUI` の配色を刷新（ライトモード）

  PCCS の淡いトーンで配色し直した。背景を淡い水色（PCCS p18）、受信吹き出しを白、送信吹き出しを淡緑（PCCS lt11）に変更。あわせて、背景が淡青になったことで本文背景の上に載る `.timestamp` が text-tertiary では AA を満たさなくなるため text-secondary に一段濃くした（sender/timestamp とも背景に対して十分なコントラストを確保）。吹き出し内の文字は従来どおり text-primary で高コントラスト。ダークモードは据え置き。

- bfce64b: Patch release after 0.5.0: success fill uses Strong `s12` with white `text-on-success` (solid Button/Badge labels); a11y text-* on PasswordStrength/Icon; Calendar day padding; Title fluid display sizes; InteractiveGraph mobile controls; field/TagInput horizontal padding; Dropzone/InteractiveArea padding stack; Snackbar warning contrast.

## 0.5.0

### Minor Changes

- 7ad0ee3: `BentoGrid` に `rowHeight` prop を追加

  各行の高さ（`grid-auto-rows`）を指定できる `rowHeight` prop を追加（任意の CSS length、既定 `18rem`）。コンパクトな内容のタイルで余白が空きすぎて「ほぼ空パネル」に見えるのを防ぐ。既定は従来どおりのため非破壊。

### Patch Changes

- 7ad0ee3: `DataGrid` の loading 状態の a11y を改善

  `loading` 中はグリッド内容全体を半透明（`opacity`）にしていたが、a11y ツリーには残っていたため、フェードした内容（例: セル内の `Badge`）を支援技術/axe が過渡的に評価し、合成後の低コントラストが color-contrast 違反として検出されていた。root に `aria-busy` を付けて読み込み中を告知し、フェードする内容（テーブル本体・フッター）を `inert` にしてタブ順と a11y ツリーから外す。表示上の変更はない。

- 7ad0ee3: `Chip` / `Tag` / `Badge` の CJK テキストの縦位置を修正

  - `Chip` / `Tag`: `line-height` を `1` に固定し、`token-base` の `line-height: normal` に起因して CJK 字形が下寄りに見える問題を解消（`Badge` と同じ対処）。
  - `Badge`: 固定 `height` を `min-height` に変更し上下 padding を一段増やして、`box-sizing: border-box` で CJK テキストがはみ出すのを防止（dot 表示の `iconOnly` は従来の固定寸法を維持）。

  見た目のみの修正で、公開 API・ラテン文字の表示に変更はない。

- 7ad0ee3: `wimui/rhf` の `zod` peer 範囲を `^3.25.0 || ^4.0.0` に拡大

  `@hookform/resolvers` 自身の zod peer 範囲に合わせ、zod 3 系を含むツリー（`@hookform/resolvers` 5.x が推移的に引く `@typeschema/zod` は zod `^3.23.8` を要求）でも `npm install` が `ERESOLVE` で失敗しないようにする。`wimui` は `@hookform/resolvers/zod` の `zodResolver` を再エクスポートするのみで zod v4 固有 API は未使用。開発・テストは引き続き zod 4 を対象。

## 0.4.0

### Minor Changes

- e4d4042: `Navbar` に `fluid` prop を追加

  - `fluid` を指定すると、内部コンテンツの中央寄せ `max-width`（1200px）コンテナを無効化し、コンテンツを全幅に広げる（`Header` / `Footer` の `fluid` と同じ意味）。
  - 用途: グラス調ヒーローやサイドバー付きレイアウト等で、Navbar の内容幅を full-bleed な下部コンテンツ（main）と揃える。既定は従来どおり 1200px 中央寄せのため、既存の見た目に影響はない（非破壊）。

- 1b8b41b: テーマプリセット（ブランドキット）を追加

  1 つの属性で画面の「形（角丸）とアクセント」を切り替えられるプリセット機構を追加。`styles.css` に重なるレイヤーで、テーマ（light/dark）・密度と直交して合成し、サブツリー単位でも適用できる。

  - **公開 API**: `WimProvider` に `preset` prop を追加。命令型の `setWimPreset` / `getWimPreset`、型 `WimPreset` / `WimPresetName`、カタログ `WIM_PRESETS` を公開。
  - **属性契約**: `data-wim-preset`（`data-theme` / `data-density` と同格）。値は `minimal` / `soft` / `bold`（未指定＝既定）。
  - **内蔵プリセット**: minimal（角丸を詰めた最小限・既定アクセント維持）/ soft（丸みのある形＋periwinkle アクセント）/ bold（中程度の角丸＋赤アクセント）。アクセントはライト/ダーク両テーマで WCAG AA を満たす値のみ採用。
  - `styles.css` に `[data-wim-preset]` レイヤーを同梱（新しい基底トークンは追加せず、role トークンの上書きのみ）。

  非破壊（追加のみ・既定の見た目は不変）。

## 0.3.0

### Minor Changes

- 3882df1: `Header` / `Footer` に `fluid` prop を追加

  - `fluid` を指定すると、内部コンテンツの中央寄せ `max-width`（1200px）コンテナを無効化し、コンテンツを全幅に広げる（`Container` の `fluid` と同じ意味）。
  - 用途: AppShell のサイドバー付きレイアウト等で、ヘッダー/フッターの内容幅を full-bleed な main と揃える。既定は従来どおり 1200px 中央寄せのため、既存の見た目に影響はない（非破壊）。

- eaabe5d: LLM コーディングエージェント向けガイド `llms.txt` / `llms-full.txt` を追加

  - 新しい export を2つ追加: `wimui/llms.txt`（概要・必須セットアップ・import 規約・コンポーネント一覧・コンポジションルール）と `wimui/llms-full.txt`（＋全コンポーネントの Props / 型 / デフォルト）。`dist` に同梱し、GitHub Pages でも公開される。
  - Cursor / Claude Code 等のエージェントが、正しい import パス・`--wim-*` トークン・CSS 契約（`styles.css`）・AI っぽさを避けるコンポジション指針に沿って画面を組めるようにするための機械可読な地図。ランタイム API・既存コンポーネントの挙動には一切変更なし（追加のみ・非破壊）。
  - 生成物は既存の SSOT（`components.json` / docgen / 翻訳 / `DESIGN.md`）から `npm run llms:build` で自動生成される。

## 0.2.0

### Minor Changes

- 3868a20: Navbar / Sidebar のレイアウト崩れを修正し、未定義だった `--wim-height-xl` トークンを追加

  - `--wim-height-xl`（comfortable 64px / compact 56px）を新規定義。Navbar のバー高さ・Sidebar の折りたたみ幅がこの未定義トークンを参照しており、height/width が auto に潰れる不具合を修正（Navbar のボタンが天地に密着、Sidebar collapsed のラベルが縦潰れ）。
  - Sidebar collapsed のアイコンを中央揃え＋ラベル非表示にし、ホバー領域の上下パディングを左右と揃えた。

## 0.1.0

### Minor Changes

- f36f5f0: Initial public release
