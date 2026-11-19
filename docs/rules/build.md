# ビルドと出荷の契約

> この文書は `SKILLS.md`（2026-09-21 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**手順です。

## ビルドの安定化と最適化

### バンドルサイズ予算（size-limit）の形

`package.json` の `"size-limit"` が Bundle Size Check ワークフローの実体。**予算は「利用者が実際に払うバイト数」で切っている**（2026-07-26 に組み替え）。

以前は `dist/**/*.js` の合計（380 kB）と `dist/components/form/**` の合計（88 kB）で測っていたが、**この数字を払う利用者は存在しない**。`sideEffects` は CSS とアイコンだけに絞られ subpath exports が 28 本あるので、`import { Button } from "wimui"` の実コストは **11 kB**（合計は 371 kB）。合計指標は無関係なコンポーネント追加でも上限に当たるため、上限の 2.4% しか余裕が無い状態になっていた。

現在の 3 分類:

1. **tree-shaking 後の実コスト** — `import` を書いて esbuild で実際にバンドルさせる（`@size-limit/esbuild`）。単体（`{ Button }`）／小さな画面／フォーム画面／ルートバレル全部／subpath 別（form / layout / data-display / charts / ai）。`ignore` で React を外部化する。
2. **配信単位そのもの** — UMD / `styles.css` / `reset.css`。tree-shaking が効かないので生のファイルサイズが実コスト。
3. **依存の巻き込み検知** — `dist/node_modules/**/*.js`（5 kB）。暴走した依存はここで落ちる。

> **落とし穴**: `@size-limit/esbuild` を入れると、`import` を書いていないエントリまで**再バンドル**される。ビルド済みの UMD を測ると 134.84 kB → 174.06 kB に化ける。2 と 3 のエントリには **`"disablePlugins": ["@size-limit/esbuild"]`** を付けてファイル計測に固定すること（プラグイン名は**パッケージ名フルで書く**。`["esbuild"]` では効かない）。

上限は実測 +15% 目安。上限に当たったら、まず「どの分類が増えたか」を見る — 1 が増えたなら利用者のコスト増、3 が増えたなら依存の巻き込み。

> **2026-09-30 の見直し（#747・T277 `TreeDiagram` の追加で UMD が 422 B 超過）**: 増分は UMD +2.23 kB / `wimui/data-display` 全部 +2.45 kB / ルートバレル全部 +2.43 kB で、部品の実体（配置の関数・描画・キー操作・3 言語の文言）。3（依存の巻き込み）は動いていない。UMD の 145 kB は 7 月（`1e848a24`）に決めた値で、以後の部品追加で実測との差が 0.3% まで詰まっていた（`data-display` も 76 kB に対し 75.97 kB）。**+15% までは上げず、部品 1〜2 個分の余裕だけ持たせた**: UMD 145 → 150 kB、`data-display` 76 → 80 kB（ユーザー判断）。+15%（167 kB / 87 kB）にすると、部品を 10 個足しても鳴らなくなり、1 個ずつ中身を見る機会がなくなるため。次に当たったら、また増分の中身を見てから決める。
>
> **2026-10-04 の見直し（#832・英語で固定だった既定の文言を翻訳キーへ移した）**: 内蔵の翻訳は使うキーだけを 1 つの塊にして同梱するので、**文言を足すと、翻訳を読む入口が全部増える**（`{ Button }` 単体も払う）。今回は QueryBuilder の演算子 15・PhoneInput の国名 10・Carousel の 4 文言 × 3 言語で、増分は `{ Button }` 単体 +0.8 kB / 小さな画面 +0.6 kB / `rich-text-editor` +0.5 kB / `wimui/ai` +0.2 kB。4 つが超えたので、実測に 1 kB 前後の余裕で上げた: 13 → 14.5 kB / 19 → 20.5 kB / 26 → 27.5 kB / 50 → 51 kB（ユーザー判断）。**`wimui/charts` は上げていない** ── charts はそれまで翻訳を 1 つも読んでおらず、GanttChart に読ませると塊が丸ごと入って 12.5 → 21.84 kB（+9.34 kB）になった。charts を翻訳なしに保つため、GanttChart の既定の名前は英語のまま戻した（ユーザー判断。変えたい利用者は `labels`）。**charts の部品に `useWimTranslation` を足すときは、この +9 kB を払うかどうかを先に決めること。**
>
> **2026-10-05 の見直し（T312・英語で固定だった既定の文言を 11 部品で翻訳キーへ移した）**: ChatUI / ThreadList / ModelSelector / Carousel / NodeGraph / ScheduleView / RangeSlider / ThemeToggle / Transfer / Audio / ImageCompare / Video。内蔵の翻訳は 230 → 279 キー（新しいキー 35 と、それまで同梱されていなかった既存のキー）× 3 言語で、**翻訳を読む入口が一律に約 1.3 kB 増えた**: `{ Button }` 単体 13.81 → 15.15 kB / 小さな画面 19.65 → 21.02 kB / フォーム画面 22.96 → 24.24 kB / `rich-text-editor` 26.61 → 27.92 kB / `wimui/layout` 29.56 → 30.86 kB / `wimui/ai` 50.29 → 51.58 kB。6 つが超えたので、#832 と同じく実測に 1 kB 前後の余裕で上げた: 14.5 → 16 / 20.5 → 22 / 23 → 25 / 27.5 → 29 / 30 → 32 / 51 → 52.5 kB（ユーザー判断）。`wimui/charts` は動いていない（11.42 kB。翻訳を読んでいない）。**メディア系の文言を使わない利用者も、`{ Button }` 1 個で全部の文言を払っている** ── 塊を入口ごとに分ければ戻せる増分で、2 回続けて予算を上げたので、次に文言を足す前に分け方を検討する（T318）。

> **2026-10-05 の見直し（T318・内蔵の翻訳を名前空間ごとに分けた）**: 1 つの塊（279 キー × 3 言語・約 10.4 kB）を、名前空間ごとの 4 ファイルに分け、部品が使う分だけを import する形にした。**翻訳を少ししか使わない入口が減った**: `{ Button }` 単体 15.15 → 9.51 kB / 小さな画面 21.02 → 17.58 / フォーム画面 24.24 → 20.94 / `wimui/layout` 31.36 → 29.09 / `wimui/ai` 51.58 → 48.9。**全部を読む入口は 0.1〜0.6 kB 増えた**: ルートバレル全部 200.59 → 200.97 / `wimui/form` 87.37 → 87.68 / `wimui/data-display` 83.57 → 84.14 / UMD 149.95 → 150.42（生のサイズは UMD で 577 B 減っている。4 つのファイルがバンドルの中で離れて置かれ、言語どうし・名前空間どうしの繰り返しを gzip が拾えなくなる分）。減った 5 つは、10/04 と同じ「実測に 1 kB 前後の余裕」へ**下げた**（下げないと、塊が戻っても気づけない）: 16 → 10.5 kB / 22 → 18.5 / 25 → 22 / 32 → 30 / 52.5 → 50。`wimui/data-display` は 136 B 超えたので 84 → 85 kB。**今後は、文言を足しても、その名前空間を使わない入口は増えない。**
>
> **2026-10-05 の見直し（UMD が 150 kB に張り付いた）**: #859（FloatButton の警告・Toolbar の roving tabindex・HamburgerMenu の `onOpenChange`）で UMD が 57 B 超えた。ref の束ね方を既存の `useMergedRef` に寄せて 149.96 kB に収めたが、余裕は約 50 B で、次に `src/` へ足す PR は必ず当たる。UMD は 1 ファイルの配布物で tree-shaking が効かず、翻訳の塊を入口ごとに分けても（T318）減らない ── 削って収める手が無い。9/30 と同じ考え方で、**部品 1〜2 個分の余裕だけ持たせて UMD 150 → 155 kB にした**（ユーザー判断）。+15% の目安（172 kB）までは上げていない。
>
> **2026-10-11 の見直し（T342・引き金の隣に描く面の、向きと横のずれ）**: Select など 8 部品に、面が画面の端で外へ出ないようにする計算を足した。増分は、フォーム画面 21.3 → 21.94 kB（+0.64）/ `wimui/form` 全部 89.66 → 90.5 kB（+0.84）/ `wimui/data-display` 全部 84.72 → 85.27 kB（+0.55）/ `wimui/ai` 全部 49.37 → 50.07 kB（+0.70）/ UMD 153 → 153.8 kB（+0.8）/ `styles.css` 73.1 → 73.36 kB（+0.26）。**最初の実装は、ポータルへ出す部品と同じ floating-ui を入力系から読む形で、フォーム画面が 29.92 kB になった（+8.62 kB。上限 22 kB）。** 向きと横のずれは矩形を 2 つ測れば決まるので、ライブラリを読まない実装（`_internal/useInlineFloating.ts`）に替えた ── 入力系は、今も floating-ui を読まない。残った増分は部品の実体なので、当たった 3 つの上限を上げた: フォーム画面 22 → 22.5 kB / `wimui/data-display` 全部 85 → 87 kB / `wimui/ai` 全部 50 → 51 kB。**入力系の部品に `@floating-ui/react` の import を足すときは、先に `npm run build && npm run size` でフォーム画面の値を見ること**（8 kB 級で増える）。
>
> **2026-10-11 の見直し（ルートバレル全部が 205 kB に張り付いた）**: `ScrollProgress` が、スクロールしなくても進み具合を計算し直すようにした変更（`ResizeObserver` と `MutationObserver` の配線・約 110 B）で、ルートバレル全部が 94 B 超えた（204.98 → 205.09 kB）。直前の 3 本（Menubar / HoverCard の面の位置・名前の属性の 4 部品・CommandPalette）で 204.87 → 204.98 kB まで詰まっていて、残りは 0.02 kB だった。中身は部品の実体で、3（依存の巻き込み）は動いていない。205 kB は 7 月に決めた値で、10/1 の時点では 195.24 kB だった ── 10 日あまりの部品の修正と追加で、余裕を使い切った。9/30・10/5 と同じ考え方で、**部品 1〜2 個分の余裕だけ持たせて 205 → 210 kB にした**（ユーザー判断）。**UMD も、同じ回に 155 → 160 kB にした**（ユーザー判断）: 154.28 kB で、残りは 0.72 kB だった。UMD は 1 ファイルの配布物で tree-shaking が効かず、削って収める手が無い（10/5 の見直しと同じ事情）。当たってから上げると、その PR が 1 回止まるので、先に上げた。
>
> **2026-10-22 の見直し（`rich-text-editor` が 29 kB に張り付いた）**: #1023（見えている文字を読み上げの名前にも含める。RichTextEditor の見出しボタンの名前・Button の読み込み中の文字）のあと 28.99 kB で、残りは 10 B だった。続く Dependabot の #1030（`@radix-ui/react-slot` 1.4 → 1.5 など 42 件）で 29.02 kB になり、25 B 超えた。10/5 の見直し（27.5 → 29 kB）からの増分は、部品の修正と、同梱する依存の patch / minor 更新。削って収める手を探すほどの量ではないので、**実測に 1 kB 前後の余裕で 29 → 30 kB にした**（ユーザー判断）。
>
> **2026-10-31 の見直し（#1058・フォーム画面が 22.5 kB を 7 B 超えた）**: 大文字で見せる見出しを、支援技術には元の大小のまま渡す変更で、Select のグループ見出しが内部の `VisualUppercase`（大文字の写しを `aria-hidden` にし、元の文字を `VisuallyHidden` で読ませる）を読むようになった。増分は約 110 B で、部品の実体（依存の巻き込みではない）。使っていない口とテスト用の属性を外して手元では 22.49 kB に収めたが、**CI では 22.51 kB と出た**（手元より約 20 B 大きい。余裕 10 B のつもりで出して当たった）。10/11 の見直し（22 → 22.5 kB）からの増分は部品の修正だけなので、**実測に 1 kB 前後の余裕で 22.5 → 23.5 kB にした**（ユーザー判断）。**手元の size は CI より小さく出ることがあるので、余裕が数十 B のときは CI の値で判断すること。**
>
> **2026-11-09 の見直し（T363・ChatUI にツールの呼び出しとシステムメッセージを足した）**: `ChatToolCall` / `ChatSystemMessage` と `ChatMessage` の `metadata` で、`wimui/ai` 全部が 50.45 → 51.33 kB（+0.88 kB。上限 51 kB）。増分は部品の実体（minify 後の `ChatUI.js` と CSS Modules のクラス名の表）と、ai の部品では初めて使う `alert-triangle` のアイコンで、依存の巻き込みではない。状態の文言は `AgentStatus` と同じ form の名前空間を読むので、翻訳の塊は増えていない（足したキーは common の 2 つ）。ほかの入口は予算内。**実測に 1 kB 前後の余裕で 51 → 52 kB にした**（ユーザー判断）
>
> **2026-11-10 の見直し（T366・並んだボタンの矢印キーの計算を `_internal/rovingIndex` にまとめた）**: 6 部品（Tabs / TabNavigation / Toolbar / Stepper / SegmentedControl / ToggleGroup）が同じ計算をそれぞれ書いていたのを 1 つにした。layout の入口でこれを読むのは Toolbar だけで、無効の項目を飛ばす・向きを選ぶ汎用の関数が、Toolbar に書いていた短い計算より大きいぶん、`wimui/layout` 全部が 29.81 → 29.98 kB（+0.17 kB。関数を縮めたあとの値。最初は 30.03 kB）。手元で 20 B しか余らず、CI は手元より約 20 B 大きく出るので、**実測に 1 kB 前後の余裕で 30 → 31 kB にした**（ユーザー判断）
>
> **2026-11-10 の見直し（T361・`OverflowList` を足した）**: 新しい部品 1 つで、ルートバレル全部が 209.21 → 210.06 kB（+0.85 kB。上限 210 kB を 64 B 超えた）、`wimui/layout` 全部が 30.04 → 30.96 kB（+0.92 kB。残り 40 B）、UMD が 158.05 → 158.87 kB（+0.82 kB。残り 1.13 kB）。増分は部品の実体（幅を測る・畳む数を数える・隠れた組が変わったら知らせる処理と、測る層の描画。minify 後 3.1 kB）で、同梱する依存（Bundled third-party code 3.08 kB）は動いていない。9/30 からと同じ考え方で、**部品 1〜2 個分の余裕だけ持たせた**: ルートバレル全部 210 → 213 kB、`wimui/layout` 31 → 33 kB、UMD 160 → 163 kB（当たってから上げると PR が 1 回止まるので、残り 1.13 kB の UMD も同じ回に上げた。ユーザー判断）
>
> **2026-11-11 の見直し（T361・AvatarGroup を幅で畳めるようにした）**: `wimui/data-display` 全部が 86.53 → 88.34 kB（+1.81 kB。上限 87 kB）。AvatarGroup が、これまで data-display の束に入っていなかった `OverflowList`・開く面（`_internal/InlineDisclosure` と `useInlineFloating`）・`VisuallyHidden` を読むようになった分で、同梱する依存は動いていない。ルートバレル全部は +0.35 kB（どれも既に入っていた）。文言は data-display の名前空間（825 B）に 1 キー置いたので、`common` を読む入口は増えていない。**部品 1〜2 個分の余裕で 87 → 90 kB にした**（ユーザー判断）
>
> **2026-11-12 の見直し（T362・`SelectionBar` を足した）**: `wimui/data-display` 全部が 88.41 → 90.81 kB（+2.40 kB。上限 90 kB を 812 B 超えた）。うち約 1.6 kB は土台にした `Toolbar` で、これまで data-display の束に入っていなかった `Toolbar` と、その畳む形が読む `OverflowList`・開く面が乗った分。同梱する依存は動いていない。ルートバレル全部は +0.83 kB（212.83 / 213 kB。`Toolbar` は既に入っていた）。文言は data-display の名前空間に 4 キー置いた。`Toolbar` を使わず普通のボタンの並びにすれば約 89.2 kB で収まったが、矢印キーでの移動と、ほかの画面の `Toolbar` とそろった振る舞いを残すほうを取り、**90 → 92 kB にした**（ユーザー判断）
>
> **2026-11-12 の見直し 2（T367・読み上げの告知を `useAnnounce` にまとめた・#1116 の選択の列の計測）**: ルートバレル全部が 212.83 → 213.11 kB（+0.28 kB。上限 213 kB を 107 B 超えた）。内訳は、#1116 で `DataGrid` が選択の列の幅を `ResizeObserver` で測るようにした分（約 +0.08 kB）と、9 部品が自前で書いていた告知を `_internal/useAnnounce` にまとめた分（同じ文の入れ直し・待ち・アンマウントでの取り消しをフックが引き受けるようになった）。同梱する依存は動いていない。今後、告知を足す部品はこのフックを使うので、部品ごとの増え方は小さくなる。**213 → 214 kB にした**（ユーザー判断）
>
> **2026-11-13 の見直し（T370・リスト系の部品に先頭一致を足した）**: `wimui/ai` 全部が 52.04 kB（上限 52 kB を 42 B 超えた）。ModelSelector に、矢印キーの共通の計算（`_internal/rovingIndex`）と先頭一致（`_internal/typeahead`）を入れた分。どちらも複数の部品が使う共通の部品なので、ルートバレル全部（213.88 / 214 kB）では重複していない。**52 → 53 kB にした**（ユーザー判断）
>
> **2026-11-14 の見直し（T353・条件で差し込む表示を、先に在る領域で告げる）**: ルートバレル全部が 214.27 kB（上限 214 kB を 267 B 超えた）、`wimui/data-display` 全部が 92.27 kB（上限 92 kB を 265 B 超えた）。内訳は、差し込みを先在の status 領域で告げる `useAnnounceAppearance`（`_internal/useAnnounce` に同居）、`InfiniteScroll` の既定の loader（これまでは既定が無く、空の `role="status"` だけを描いていた）と、その文の data-display の翻訳キー。同梱する依存は動いていない。**ルートバレル 214 → 215 kB・data-display 92 → 93 kB にした**（ユーザー判断）
>
> **2026-11-14 の見直し 2（T379・Kanban のカードをキーボードで動かせるようにした）**: UMD が 163.28 kB で、上限 163 kB を 282 B 超えた。増分は部品の実体: 移動先の一覧を盤のスクロール領域で切れないよう `position: fixed` で置く floating-ui の呼び出し（`@floating-ui/react` は CalendarHeatmap の Tooltip で既に同梱されているので、依存は増えていない）・Escape と外側の押下で閉じる処理・動いた先へフォーカスを戻す処理・移動先の告知と 3 言語の文言。`wimui/data-display` 全部は 92.8 / 93 kB で収まっている。UMD は 1 ファイルの配布物で tree-shaking が効かず、削って収める手が無い（10/5 の見直しと同じ事情）。**UMD 163 → 164 kB にした**（ユーザー判断）
>
> **2026-11-15 の見直し（T381・Calendar / DatePicker に月と年の一覧を足した）**: 予算を 4 つ超えた: ルートバレル全部 215.92 / 215 kB、`wimui/data-display` 全部 94.11 / 93 kB、`wimui/form` 全部 95.07 / 95 kB（DatePicker が Calendar を読む）、UMD 164.34 / 164 kB。増分は部品の実体（月と年の一覧の描画・矢印キーと Escape の処理・3 言語の文言 8 つ）で、同梱する依存は動いていない。9/30 からと同じ考え方で、**部品 1〜2 個分の余裕だけ持たせた**: ルートバレル全部 215 → 217 kB、`wimui/data-display` 全部 93 → 95 kB、`wimui/form` 全部 95 → 96 kB、UMD 164 → 165 kB（ユーザー判断）

> **2026-11-15 の見直し 2（T388・Calendar の週の始まりをロケールから決めた）**: 小さな画面が 18.50 → 18.51 kB（+9 B）で、予算 18.5 kB を超えた（変更前で残りちょうど 0）。増えたのは、ロケールのストア（`src/i18n/instance.ts`）に「丸める前のロケール」（`setWimLocale("en-GB")` の `en-GB`）を 1 つ持たせた分 ── 全部品が読むストアなので、暦を使わない入口も払う。最初は翻訳のフック（`useWimTranslation`）にも足していて +54 B だった。購読と `Intl` の検証を Calendar の側へ移して +9 B まで減らした（**暦を使う部品の都合は、その部品の側で持つ**）。18.5 → 18.6 kB に上げた（ユーザー判断）。

> **2026-11-15 の見直し 3（T393・`Toast` のタイマーを、ホバー中とフォーカス中は止める）**: UMD が 164.99 → 165.12 kB（+約 130 B）で、上限 165 kB を 123 B 超えた（変更前で残り 10 B ── src を触る次の変更は、どれでも越える状態だった）。増えたのは、止める・残り時間から再開する処理と、4 つのイベントの口。短く書き直す版も測ったが 165.14 kB で、かえって増えた。部品の実体なので、UMD の上限を 165 → **166 kB** に上げた（ユーザー判断）。ほかの予算は収まっている。
>
> **2026-11-15 の見直し 4（T392・閉じるボタンが消えるとき、フォーカスを前の要素へ渡す）**: ルートバレル全部が 216.99 → 217.25 kB で、217 kB を 254 B 超えた。増分は、閉じるボタンの共通部品（Alert・Notification・Banner・Toast・Snackbar）に足した受け渡しの処理（文書の中の停止点を集め、部品の外で 1 つ前のものを選ぶ）で、同梱する依存は動いていない。同じ日の T392 の 2 本（入力欄の消去ボタン・QueryBuilder と JsonViewer の削除ボタン）で、残りが 10 B まで詰まっていた。**217 → 218 kB**（ユーザー判断）。UMD は 165.65 / 166 kB で収まっているので動かしていない ── 残りは 0.35 kB で、次に部品の実体を足すと当たる。
>
> **2026-11-15 の見直し 5（T395・オーバーレイを開いてもページがずれない）**: `wimui/form` 全部が 96.09 kB で、上限 96 kB を 94 B 超えた。`ImageCropper` が `Dialog` を読むので、スクロールを止めて消えた幅を埋める処理が form の束に入る。同梱する依存は動いていない。削って収まる量ではないので、実測に 1 kB の余裕で **96 → 97 kB** にした。UMD は 165.88 / 166 kB で収まっている。
>
> **2026-11-15 の見直し 6（T398・名前と同じ Tooltip の文を説明にしない）**: この変更を T395 の前の main で測ると、`wimui/form` 全部が 96.23 kB（上限 96 kB を 229 B 超過）、UMD が 166.01 kB（上限 166 kB を 11 B 超過）。`CopyButton` が `Tooltip` を読むので、名前と文を比べて説明を外す処理が form の束と UMD に入る。同梱する依存は動いていない。form の 96 → 97 kB は T395 で既に上がっている。UMD は削って収まる量ではないので **166 → 167 kB** にした。
>
> **2026-11-15 の見直し 7（T402・消した項目のあとにフォーカスを残す）**: `wimui/layout` 全部が 33.09 kB で、上限 33 kB を 93 B 超えた。`Dashboard` が、消えるカードの外へフォーカスを渡す処理を読む分。同梱する依存は動いていない。削って収まる量ではないので、実測に 1 kB の余裕で **33 → 34 kB** にした。T398 と T391 の 4 本目を取り込んだあとの CI では、同じ処理がルートバレル全部を 218.05 kB（上限 218 kB を 51 B 超過）、`wimui/data-display` 全部を 95.06 kB（上限 95 kB を 61 B 超過。`SwipeAction` が読む）にした。どちらも **218 → 219 kB、95 → 96 kB** にした。UMD は 166.32 / 167 kB で収まっている。

> **2026-11-18 の見直し（T387 の `ConfirmProvider` / `useConfirm` と、T384 の部位名 `data-part`）**: 2 本はそれぞれ単独では予算内だったが、両方が main に入ったあと、UMD が 167.13 kB で上限 167 kB を 126 B 超えた（Version PR #1213 と main の Check bundle size が赤）。増分は部品の実体（確認のダイアログの順番待ちとフォーカスの戻し・3 部品に付けた 32 個の部位名の文字列）で、同梱する依存は動いていない。UMD は 1 ファイルの配布物で tree-shaking が効かず、削って収める手が無い（10/5 の見直しと同じ事情）。**167 → 168 kB** にした（ユーザー判断）。ルートバレル全部は 218.91 / 219 kB で収まっているが、残りは 0.09 kB ── 次に部品の実体を足すと当たる。

> **2026-11-18 の見直し 2（T408・重ねた面の Escape は一番上だけが受ける）**: 予想どおり、ルートバレル全部が 219.02 kB（上限 219 kB を 22 B 超過）、`wimui/ai` 全部が 53.003 kB（上限 53 kB を 3 B 超過。ModelSelector などが Dropdown を読む）になった。増分は、Escape を一番上の面だけに渡す共通の仕組み（`_internal/escapeStack.ts`）と、Combobox・DatePicker・Select の `preventDefault`。同梱する依存は動いていない。**219 → 220 kB、53 → 54 kB** にした（ユーザー判断）。UMD は 167.19 / 168 kB で収まっている。

> **2026-11-19 の見直し（T412・開いたまま引き金が見えなくなったら Popover と Dropdown を閉じる）**: `wimui/form` 全部が 97.11 kB で、上限 97 kB を 112 B 超えた（T410・T411 が main に入ったあとの姿で測った値）。form の部品（Select など）が Popover と Dropdown の仕組みを読むので、引き金を見張る処理（`_internal/useCloseWhenReferenceGone.ts`）がそこに入る。同梱する依存は動いていない。**97 → 98 kB** にした（ユーザー判断）。
>
> **2026-11-19 の見直し 2（T416・AILabel を足した）**: AI が作った値に付ける印で、押すと説明が Popover で開く。`wimui/ai` 全部が 54 → 57.82 kB（+3.82 kB）。増分の大半は、ai の部品では初めて読む Popover（`FloatingFocusManager`・`FloatingPortal`・`Transition`）で、Escape の順番（T408）と、フォーカスを引き金へ戻す振る舞いを Popover と共有するため、自前の軽い面は作らなかった（ユーザー判断）。文言は、AILabel だけが読む名前空間 `ai` に置いた ── 最初は ai の部品が読む `form` に置き、Input も同じ名前空間を読むので、小さな画面が 18.62 kB（上限 18.6 kB）になった。分けたあとは 18.57 kB。**54 → 58 kB にした**（ユーザー判断）。ほかの入口は予算内（`import { AILabel }` だけの利用者は ai 全部を払わない）。
>
> **2026-11-19 の見直し 3（T415・PageHeader を足した）**: ページの頭をまとめる部品。`wimui/layout` 全部が 34.12 kB（上限 34 kB・121 B 超え）。増分は部品の実体と、題に使う `Title`（typography の部品で、layout の入口では初めて読む）。素の `h1` に同じトークンを当てれば収まる見込みだったが、`Title` は大きさごとの行の高さや和文と欧文の字間を持っていて、写すと見出しの決まりを 2 か所で持つことになるので、`Title` を使い続けた。**34 → 35 kB にした**（ユーザー判断）。ほかの入口は予算内（翻訳は読まない）。
>
> **2026-10-01 の見直し（#776・T279 `PivotTable` の 4 本目で `wimui/data-display` が 169 B 超過）**: 4 本の増分は `wimui/data-display` 全部で **+3.62 kB**（76.55 → 78.20 → 78.47 → 78.97 → 80.17 kB。順に 静的な描画 +1.65 / 行の折りたたみ +0.27 / 見出しの固定 +0.50 / 行の仮想化 +1.20）、ルートバレル全部 191.48 → 195.24 kB（上限 205）、UMD 141.66 → 144.96 kB（上限 150）。中身は部品の実体で、3（依存の巻き込み）は 2.96 kB のまま動いていない。9/30 に持たせた余裕（4 kB）を PivotTable 1 個で使い切ったので、**同じ考え方で `data-display` を 80 → 84 kB にした**（ユーザー判断。実測 80.17 kB に対して余裕 3.83 kB ＝ 部品 1〜2 個分）。UMD とルートバレルは余裕が残っているので触っていない。**次に当たりそうなのは UMD**（余裕 5.04 kB）。

### 開発サーバーの起動高速化
Vite の設定（`vite.config.ts`, `.storybook/main.ts`）で以下の最適化を行っています。

- imagemin の限定実行: 重い画像圧縮処理（`vite-plugin-imagemin`）は `mode === "production"` の時のみ実行されます。開発時はスキップされ、起動時間が短縮されます。
- optimizeDeps の活用: 頻繁に使用する巨大なライブラリ（`react`, `recharts` 等）を `optimizeDeps.include` に明示することで、初動の依存解決を高速化しています。

### CJS 出力の後処理（fix-cjs-empty-css）
rolldown ベースの Vite 8 には、エントリモジュール直下の CSS import を CJS/UMD 出力で `/* empty css */` コメントへ置換する際にカンマ演算子が残り、`dist/index.cjs` が構文エラーになるバグがあります（`src/index.ts` がグローバル SCSS を import しているため発生）。`npm run build` の最後に `scripts/fix-cjs-empty-css.js` が実行され、該当パターンを自動修正します。Vite 側でバグが修正されれば何もしなくなる（no-op）ため、そのまま残して問題ありません。

### 重量級依存の扱い（optional peerDependencies）
特定のコンポーネントでしか使わない重量級ライブラリは、利用者のインストールサイズを抑えるため `dependencies` に入れず、optional な `peerDependencies` として宣言しています（`peerDependenciesMeta` で `"optional": true`）。

- 対象: `recharts`（charts）、`react-markdown` / `remark-gfm`（Markdown）、`diff`（CodeDiffViewer）、`qrcode.react`（QRCode）、`@xyflow/react`（NodeGraph / InteractiveGraph）、`@tiptap/*`（RichTextEditor・`wimui/form/rich-text-editor`）、`@fullcalendar/*`（ScheduleView）、`react-hook-form` / `@hookform/resolvers` / `zod`（`wimui/rhf`）
- 該当コンポーネントを使う利用者は、対応するライブラリを自分でインストールする必要があります。
- 新しい重量級ライブラリを追加する場合は、(1) `peerDependencies` + `peerDependenciesMeta`（optional）に追加、(2) リポジトリ内の開発用に `devDependencies` にも追加、(3) `vite.config.ts` の `rollupOptions.external` と UMD の `globals` に追加、の3点をセットで行ってください。
- `music-metadata`（Audio のタグ読み取り）も optional の peer です。`showMetadata` を渡したときだけ、動的 `import()` で読み込みます。レンジは、実際に動かして確かめた major だけを並べます（`^11.0.0 || ^12.0.0`。12 は 2026-10-07 に、タグ付きの mp3 を Node と Chromium で読んで確かめた）。上限の無いレンジにすると、次の major が出たときに `npm run check:peer-majors` が落ちます。
- peer の下限は、**ほかの peer と一緒に入れられる版**まで上げます。peer どうしにも peer の関係があり（`@hookform/resolvers` は `react-hook-form` を、`@tiptap/markdown` は `@tiptap/core` を要求する）、こちらが許す B のどの版も受け付けない A の版を A の範囲に含めると、その版は宣言しているのに入れられません。`npm run check:peer-floors` が、レジストリの全版を読んで落とします（PR と週次。実証は `npm run prove:peer-floors`）。実例は #1043（react-hook-form `^7.43.0` → `^7.55.0`）と、このガードで見つかった tiptap（`^3.0.0` → `^3.7.0`。`@tiptap/markdown` の最初の stable が 3.7.0）。

### peer サポート行列（一点集中）

| peer | サポート | レンジ |
|---|---|---|
| `react` / `react-dom` | 19 のみ | `^19.0.0` |
| `zod`（rhf） | 4 のみ | `^4.0.0` |
| `@hookform/resolvers` | 5.1+ / 6 / 7 | `^5.1.0 \|\| ^6.0.0 \|\| ^7.0.0` |
| `react-hook-form` | 7.55+ | `^7.55.0` |

React 18 / zod 3 は非対応。詳細は README。

### 公開 API（凍結・deep path なし）

- 公開 import: `wimui` または `wimui/<category>`（バレル）、`wimui/rhf` / `wimui/tokens` / `wimui/icons`
- **deep path は廃止**（`wimui/form/Button` 等は `exports` に無い。フォルダ移動を破壊的変更にしない）
- `_internal` や hooks 単体も `exports` に無い（非公開）
- CSS / locales も公開面: `styles.css` / `reset.css` / `locales/*`
- **やらないこと**: コンポーネントの deep path（`./form/*` 等）を `exports` に再追加しない
- `npm run check:api` が `exports` マップ + バレルシンボルを `api-snapshot.json` で検証。変更時は `check:api:update`

### UI 密度（`data-density`）
コントロール高さ・余白を `comfortable` / `compact` で切り替える。実装は `src/styles/_ui-patterns.scss` と `src/density.ts`。
- `setWimDensity("compact")` または `<html data-density="compact">`
- 追従: `--wim-height-*` / `--wim-control-padding-*` / `--wim-field-padding-*` / `--wim-control-item-padding-*` / `--wim-list-item-padding-*` / `--wim-table-cell-padding-*` / switch・checkbox など
- 非追従: `--wim-spacing-*`（レイアウト）、`--wim-avatar-size-*`
- 新規コントロール余白は生の `--wim-spacing-*` ではなく上記密度エイリアスを使う
- Storybook ツールバーの Density、Token → Density

### Form 値・エラー契約（公開）

コア form の値／エラーの約束。RHF 利用時も同じ。

| 項目 | 契約 |
|---|---|
| クリア可能スカラー（ClearedValue） | 制御時の空は **`null`**。`undefined` は「非制御 / prop 未指定」のみ |
| 例: DatePicker | `value?: Date \| null` / `onChange?: (date: Date \| null) => void` |
| `error`（メッセージ付き） | `Input` / `Select` / `DatePicker` / `Textarea` 等 → `error?: string` |
| `error`（葉トグル） | `Checkbox` / `Switch` / `Radio` → `error?: boolean`（見た目用）。RHF では `invalid` を渡す |
| 空文字・空配列 | 文字列フィールドの UI 空はコンポーネント慣例に従う（多くは `""`）。クリア可能スカラーを `""` で表さない |

新規のクリア可能コントロールを足すときも、制御時クリア = `null` に揃える（`undefined` をクリア値に使わない）。

### Form 連携（`wimui/rhf`）
コア form コンポーネントを書き換えず、薄いアダプタを `src/rhf.ts`（公開エントリ `wimui/rhf`）に置きます。
- `FormField` — RHF `Controller` + WIM 向け `error`（string）/ `invalid`（boolean）
- `valueFieldProps` / `checkedFieldProps` — 値コールバック型・checked 型へのマッピング（ClearedValue の `null` とそのまま噛み合う）
- `zodResolver` — `@hookform/resolvers/zod` の再エクスポート
- ルート `wimui` / `wimui/form` からは export しない（peer 未導入でもコアが壊れないようにする）
- 例: `stories/Patterns/Form/ReactHookForm.stories.tsx`（基本＋ DatePicker / Rating / Switch レシピ）
