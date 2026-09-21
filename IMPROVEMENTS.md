# WIM UI 改善リスト（継続用）

最終更新: 2026-09-21（その 98・**セッションを閉じた状態**）（<br>**■ 引き継ぎ状態**: **開いている PR は 0 件。この回は 11 本が main に着地した**（#653 Dependabot / #654 引き継ぎ / #655 T261① / #656 T261② / #657 T263 / #658 PullToRefresh のメタ / #659 T264 / #660 SKILLS の pre-commit / #661 SKILLS 分割 / #662 prop-api / #663 外来 skill の受け入れ）。**`check:improvements` の未完了は 0 件**（T261 / T262 / T263 / T264 すべて済）。**T207 / T237 は対応予定なし、T201 / T23 は上流・条件待ち。**<br>**■ この回の主役は T261 を ①② とも 0 にしてハードゲートへ移したこと。** ①（JSX で番号を足す形）は **37 → 0**（カタログ 20 箇所を実在の中身にし、`Audit/ListFamily` の 17 箇所は**見比べる道具**なので走査から外した ── #650 で `audit.json` を入れないと決めたのと同一の理由で、**外す単位が locale かストーリーかの違いだけ**）。②（i18n 補間）は **7 → 0**。**7 件は同じ処方では直らず、件数で分けた**（ユーザー判断）── 固定の 3 件は名前に、生成される長い列（`InfiniteScroll` / `ScrollArea` / 1,000 行の `VirtualList`）は**現実に番号で呼ぶもの**（`Episode` / `Row` / `Seat` / `Ticket`）にして allow に足し、a11y の位置ラベル（`Print {{number}}`）はそのまま許した。<br>**■ 測って分かった数字。** ①**`prop-api-snapshot.json` は 18 prop 遅れていた**（2026-08-29 の #551 で停止。`Comment` が**丸ごと未収録**）── このガードは**スナップショットに在る prop の変化しか見ない**ので、**未収録の部品は prop を消しても永久に緑**になる。②**`SKILLS.md` の pre-commit の節は 3 項目と書いていたが実際は 27 パターン・49 コマンド**で、しかも**型チェックはフックに入っていない**（走るのは CI の Lint & Type Check だけ）。③**`SKILLS.md` 578 → 288 行**（見出しの総数は 52 で前後不変）。④**`Dropdown` は開く手段が公開されていなかったので、VRT はメニューを一度も撮っていなかった** ── #655 で項目の文言を直しても**差分がゼロ**だったのがその証拠。⑤**`Carousel` の操作は 42px の円 + 24px のドット**で、88px しかない文字スライドの上に乗る。<br>**■ ガードを 3 本強くし、全部「鳴る／鳴ってはいけない」の両方で実証した。** `check:slop` の ①②（20 ケース）/ `check:prop-api` を**加算でも落とす**ように（`prove:prop-api` を新設・5 ケース）/ `check:skills` に**外来 skill の受け入れルール**（`prove:skills-spec` を 10 → 14 ケース）。**強くした側がその場で実物を拾ったのが 2 件** ── `check:prop-api` はリベース直後に #659 が足した `Dropdown` の 3 prop で鳴り、`check:doc-tokens` は `SKILLS.md` から移した瞬間に**架空の `--wim-color-informative`**（実在は `--wim-color-info`）を拾った。**`SKILLS.md` はどちらのガードの走査対象でもなかった。**<br>**■ 運用で前提が 1 つ変わった（重要）。** **VRT / a11y のコミットバックが作る head は、ラン自体が 0 件になる**（`action_required` で待っているのではない）。**approve する対象が無いので承認 API は使えない** ── **PR を close → reopen** すると `pull_request(reopened)` で全部走る（#657 で 0 → 21 件、#658 で 0 → 42 件、#659 も同様。**4 回連続で同じ挙動**）。従来メモの「`action_required` を approve」は #616 で起きた**別の形**として残した。<br>**■ VRT の churn は毎回バイト差で帯分けし、説明できない枚数を 0 にした。** 4 回の update（128 / 105 / 96 / 119 枚）で、**この PR 起因は 12 / 2 / 2 / 4 枚**。100 バイト超の常連は `audio--with-caption`（画素で測ると **833px・最大チャンネル差 2**）と `otpinput--danger`（**95px・差 1**）で、どちらも知覚できない。**a11y の全量測り直しでも 2 件が毎回動く** ── `aspectratio--embed`（外部 iframe が読み込めた回にだけ出る）と `audio--premium-features`（2 秒後に中身が入れ替わる）で、どちらも `unstable` / `unstableStories` に登録済み。<br>**■ この回の誤り 3 件。** ⓐ**外来 skill を `vendor/` ディレクトリで分ける案は成立しなかった** ── skill の探索は `.agents/skills` の**直下**を見る作りで、中間ディレクトリは「SKILL.md が無い skill」として落ちる。出所は `metadata` で表す形に変えた。ⓑ**`prove:prop-api` の期待文言を間違えた** ── 型宣言から prop を消しても docgen は**分割代入に残った名前**を拾うので、「prop が無くなりました」ではなく「型が boolean → unknown」で鳴る。ⓒ**二重引用符の中でバックティックを使って `node -e` を壊した**（既知の罠を踏んだ。長文は Write でファイルへ）。<br>**■ 次の入り口。** ①**防御用の skill 2 本**（「新規コンポーネントを作るとき」「トークンが足りないとき」）── 汎用の外来 skill に上書きされたくない引き金で、**移設が終わったので指す先が確定した**。既存の `composition-guidelines` と同じ**薄い引き金**（本文は複製しない）にすること。②**prop を足す PR は `check:prop-api:update` を同梱する**（加算でも赤になるようになった）。③Dependabot の週次。④`SKILLS.md` に残った 4 つ（新規部品の手順 / テスト / ビルドと出荷の契約 / pre-commit）は、いまは `AGENTS.md` の索引に載っている。）<br>**その 97 以前の申し送り・済んだ作業の途中メモ・完了ログ**は `docs/history/improvements-archive.md` へ移した（2026-09-21。1 文字も書き換えていない）。
作業再開時はここから。**台帳（T / CI の表）には残っている行だけを置く** ── 状態が「済」になった行は `npm run improvements:archive` で `docs/history/improvements-ledger.md` へ移す（残っていると `check:improvements` が落ちる）。**新しい番号は `npm run check:improvements` が出す**（退避先の番号も数える。2026-09-21 の退避時に CI-11 の重複が見つかり、後の方を CI-12 に改番した）。

---

## 次にやるとよい順

**2026-09-21（その 98・終業時点）の順番**: **行として残っている仕事は 0 件**（`check:improvements` の未完了 0）。次にやるなら**判断が済んでいて着手できるもの**から: ①~~**防御用の skill 2 本**~~ **済（2026-09-21）** ── `new-component` / `missing-token` を `composition-guidelines` と同じ薄い引き金で置いた（本文は複製せず、指す先だけ）。`claude -p` で発火を実測: トークンの依頼は Skill ツールで `missing-token` を読み、新規部品の依頼は `.agents/skills/new-component/SKILL.md` を直接 Read した（どちらも本文まで届いた）。対照の無関係な質問ではどちらも読まれなかった → ②**Dependabot の週次**（終業時点で 0 件）→ ③~~**`SKILLS.md` に残した 4 つ**を割るか~~ **済（2026-09-21）── `SKILLS.md` を廃止した。** 4 つは `docs/rules/` の `new-component.md` / `testing.md` / `build.md` / `pre-commit.md` へ、トークンの節は `tokens.md`、よくあるミスは各規則ファイル、テックスタックは `CONTRIBUTING.md` へ。**残さなかった理由は名前** ── `SKILLS.md` は Agent Skills（`.agents/skills/`）と紛らわしく、実際に置き場の取り違えが起きた。移送は行範囲の切り出しで行い、元の本文 206 行を移動先と突き合わせて欠落は意図した 5 行（旧題・冒頭説明・ファイル題へ上げた見出し 2）だけ。<br>**着手前に読むもの**: prop を足す PR は `npm run check:prop-api:update` を**同梱する**（2026-09-21 から加算でも赤になる）。外来 skill を入れるときは `metadata.origin / source / reviewed` の 3 点（`allowed-tools` を持つなら理由も）。**VRT / a11y のコミットバック後は head のチェックが 0 件になるので、PR を close → reopen して起こしてから**マージする。

**同日の続き（置き場の整理）**: ①~~このファイルの退避~~ **済** ── 過去の申し送り・済んだ作業の途中メモ・完了ログを `docs/history/improvements-archive.md` へ（1,568 → 約 700 行。1 文字も書き換えていない）。②~~公開契約の写し~~ **済** ── 「状態付きメモ」の 5 節は `docs/rules/build.md` / `tokens.md` の写しで、しかもずれていた（規則側へ寄せて写しを廃止）。③~~`MAINTENANCE.md` 末尾の 2 節~~ **済** ── 定期点検ではなく PR をマージするときの手順なので `docs/rules/vrt-baseline-prs.md` へ（その 98 の「ラン 0 件 → close / reopen」の形を書き足した）。**残る判断 3 つ（ユーザー）** ── **3 つとも実施と決まった**: ⓐ~~台帳の**済んだ行 273 件・993 KB** を退避するか（このファイルの容量の 9 割以上。退避すると番号の採番で退避先も見る必要が出る）~~ **済**（268 行 → `docs/history/improvements-ledger.md`。1,059 KB → 84 KB）ⓑ定期点検を**スケジュールで起こす**か（skill は日付では発火しない）ⓒ`README.md` / `README.ja.md` の対訳のずれを見るガードを置くか。

**訂正（2026-09-21）: 「行として残っている仕事は 0 件」は誤りだった。** `check:improvements` は状態列が `P1` / `未着手` で**始まる**行しか未完了に数えておらず、**T250 の ③④（`StatusContent` の `align` / `Stats.Trend` の `intent` 分離。未判断・未実装）と T251 の ⓐ〜ⓓ（判断待ち）が数えから落ちていた**。状態列を「済 / 未完了 / 判断待ち / 保留 / 対応予定なし」のどれかに必ず分類させ、当たらない書き方は落とすようにした。**いま残っている判断はユーザーの 2 件（T250 ③④ / T251 ⓐ〜ⓓ）**。

（それ以前の「次にやるとよい順」は `docs/history/improvements-archive.md`。）

## プローブ残件（T180・2026-08-15）

公開カタログ（`src/data/components.json`）223 件から、残っている `stories/Patterns/**` + `sandbox/**` の JSX タグを突き合わせた。DryDock / CarShare / RoasterService はディスクに無いので母数に入らない。`Button` と `DataGrid` が 0 件なら走査不成立、は通っている。

**載せない（21）**: 単体で足りる `Portal` / `FocusTrap` / `Transition` / `VisuallyHidden`。内側でしか描かれない `Radio` / `InputBase` / `BaseListItem`。internal・docs-only・傘の `Charts`。

**残っているカタログで既にタグがある（143）**: プローブしない。カバー率の消化にも使わない。

**まだ触っていない（0）**。T180 のプローブは尽きた。プローブしたら名前を消す。捨てた画面を数え直さない。

**2026-08-16 に消した 3**: `Affix` / `BackTop` / `NodeGraph`。出た穴は T199。画面は捨てた。カタログに `NodeGraph/Composed` を残す。

**2026-08-16 に消した 8**: `CalendarHeatmap` / `Leaderboard` / `PieChart` / `JsonViewer` / `JsonDiffViewer` / `ChatUI` / `ArtifactsOverlay` / `InteractiveGraph`。穴は無し。画面は捨てた。

**2026-08-16 に消した 10**: `AspectRatio` / `InteractiveArea` / `Masonry` / `SimpleGrid` / `Splitter` / `Calendar` / `Reaction` / `Watermark` / `Loader` / `Span`。出た穴は T198。画面は捨てた。

**2026-08-16 に消した 4**: `ButtonGroup` / `Chip` / `ScheduleView` / `RangeCalendar`。出た穴は T189 / T190。画面は捨てた。

**2026-08-16 に消した 9**: `Navbar` / `Footer` / `Anchor` / `Menu` / `HoverCard` / `Toast` / `Tour` / `KeyboardShortcuts` / `Kbd`。出た穴は T191–T197。画面は捨てた。

**2026-08-15 に消した 3**: `TabNavigation` / `Highlight` / `Pagination`。出た穴は T187 / T188。画面は捨てた。

**2026-08-15 に消した 3**: `FAQSection` / `Spoiler` / `Blockquote`。穴は無し。画面は捨てた。

**2026-08-15 に消した 3**: `ProgressRing` / `Indicator` / `QRCode`。穴は無し（Indicator のドットはストーリーの置き方）。画面は捨てた。

**2026-08-15 に消した 3**: `Banner` / `Notification` / `Accordion`。出た穴は T185 / T186。画面は捨てた。

**2026-08-15 に消した 3**: `MarkdownRenderer` / `Terminal` / `CodeDiffViewer`。穴は無し。画面は捨てた。

**2026-08-15 に消した 3**: `VoiceVisualizer` / `StreamingText` / `SourceCitation`。出た穴は T184。画面は捨てた。

**2026-08-15 に消した 7**: `SpeedDial` / `FloatButton` / `ScrollArea` / `InfiniteScroll` / `ScrollProgress` / `Markdown` / `Marquee`。出た穴は T181–T183。画面は捨てた。

（リストは空。T180 の未検証公開部品は無い。）

**やり方（ユーザー確認、2026-08-16）**:

- 作るのはエージェント、見た目の判定は人間。残件をカタログの見本として量産しない。
- **1 PR = 2〜3 画面（だいたい 6〜10 部品）。** 人間がそのバッチを見る。穴はその同じ PR で直す。
- **残件の公開（ユーザー確認、2026-08-16）**: T180 は尽きた。T199 は 0.23.16 に入った。Version PR のマージ＝publish はユーザー。
- 残件を先に全部書いて、穴を後でまとめて直す、ではない。あとの画面が未修正の既定の上に乗る。
- Affix / BackTop は最後のバッチで触った（T176。本当にスクロールするページ）。
- `stories/Patterns/` には置かない。題材とコピーは雑でよい。部品の置き方は雑にしない（`SpeedDial` なら長いラベルと `intent`、スクロール系なら本当にスクロールする容器）。絵として並べただけだと T176 のような穴は見えない。
- 書いたら a11y の結果を添えて人間のレビューへ。スクリーンショットを見て「問題なし」と言わない。書くあいだ VRT は `probes-` を除外する（新規部品のプローブでも同じ）。ライブラリを直したら Realistic な単体ストーリーに載せる。
- 出た穴を直す。残すのは部品の修正とその単体ストーリー。プローブ画面は捨て、この節から名前を消す。捨てた画面を数え直さない。

**やり方（ユーザー確認、2026-08-15）**: 1 回で数個。上でバッチに更新した。

**2026-08-15（その 22）時点の順番**: ①**未合成はプローブ**（T179。確認が終わったら画面は捨て、部品の修正と Realistic な単体ストーリーだけ残す）。**次の Pattern ページは書かない。** カタログはカバー率から外す。T23 は上流待ち。T68 は記録。

**2026-08-15（その 21）時点の順番**: ①**T176 の判断**（`Affix` の placeholder）→ ②**未合成はプローブ**（T179。確認が終わったら画面は捨て、部品の修正と Realistic な単体ストーリーだけ残す）。**次の Pattern ページは書かない。** カタログはカバー率から外す。T23 は上流待ち。T68 は記録。

**2026-08-14（その 16）時点の順番**: ①**#393 の a11y**（新規 3 ストーリー × 2 テーマ＝6 本。変更起因の赤は直して進めてよい）→ ②**そのブランチへの push が全部終わってから VRT update を 1 回**（新規 6 枚）。**T173 / T174 / T175 は #393。changeset 付き。T23 は上流待ち。T68 は記録。** 13 枚目は、12 枚目が着地してから。

**2026-08-14（その 15）時点の順番**: ①**#393 の a11y**（新規 3 ストーリー × 2 テーマ＝6 本。変更起因の赤は直して進めてよい）→ ②**そのブランチへの push が全部終わってから VRT update を 1 回**（新規 6 枚）。**T173 / T174 は #393。changeset 付き（#391 着地後）。T23 は上流待ち。T68 は記録。** 13 枚目は、12 枚目が着地してから。

**2026-08-14（その 14）時点の順番**: ①**#393 の a11y**（新規 3 ストーリー × 2 テーマ＝6 本。変更起因の赤は直して進めてよい）→ ②**そのブランチへの push が全部終わってから VRT update を 1 回**（新規 6 枚）。**T173 / T174 は #393。changeset 無し（#391 が開いている。T170）。T23 は上流待ち。T68 は記録。** 13 枚目は、12 枚目が着地してから。

**2026-08-14（その 13）時点の順番**: ①**12 枚目（nav-utilities）**（`Affix` / `BackTop` / `FloatButton` / `SpeedDial`。長い文書と現場の主操作でストーリーを分ける。FAB は重ねない）→ ②**13 枚目（utilities の視覚残り）**（`ScrollArea` / `InfiniteScroll` / `ScrollProgress` / `Markdown` / `Marquee`）。そのあと探索は閉じる（`Portal` / `FocusTrap` / `Transition` / `VisuallyHidden` は JSX として書かない）。**#390 は着地。#391 は人間がマージ＝publish。T23 は上流待ち。T68 は記録。**

**2026-08-14（その 12）時点の順番**: ①**#390 の a11y**（新規 4 ストーリー × 2 テーマ＝8 本。変更起因の赤は直して進めてよい）→ ②**そのブランチへの push が全部終わってから VRT update を 1 回**（新規 8 枚＋ Header / Carousel / Gallery / Audio の既存が動く）。**T171 / T172 は #390。T23 は上流待ち。T68 は記録。** 12・13 枚目は、#390 が着地してから。

**2026-08-14（その 11）時点の順番**: ①**11 枚目（`Patterns/AlpineDesk`）を PR にして VRT / a11y に載せる**（新規 4 ストーリー × 2 テーマ＝ベースライン 8 枚。そのブランチへの push が全部終わってから update を 1 回）。**T171 / T172 は手元で完了。T23 は上流待ち。T68 は記録。**

**2026-08-14（その 10）時点の順番**: ①**11 枚目（`Patterns/AlpineDesk`）を PR にして VRT / a11y に載せる**（新規 4 ストーリー × 2 テーマ＝ベースライン 8 枚。そのブランチへの push が全部終わってから update を 1 回）→ ②**T172**（`Lightbox.Gallery` の CSS がサムネイル帯）。**T171 は手元で完了。T23 は上流待ち。T68 は記録。**

**2026-08-14（その 9）時点の順番**: ①**11 枚目（`Patterns/AlpineDesk`）を PR にして VRT / a11y に載せる**（新規 4 ストーリー × 2 テーマ＝ベースライン 8 枚。そのブランチへの push が全部終わってから update を 1 回）→ ②**T171**（`Gallery` が `selectable` のとき `onItemClick` を捨てる）→ ③**T172**（`Lightbox.Gallery` の CSS がサムネイル帯）。**T23 は上流待ち。T68 は記録。**

**2026-08-13（その 6）時点の順番**: ①**#385**（Version Packages）→ ②**#384**（T168）→ ③**T160** → ④**T157**。**#383（T166）は着地済み。** #385 があるあいだ changeset 付き PR はマージしない（T170）。

**2026-08-12 時点の順番**: ①**T152**（dark の系列色 3 つが地に対して 3:1 に届かない。**PCCS の中に代わりの青が無いので選び直しでは解けず**、①現状を受け入れて凡例と直接ラベルで保証する / ②チャート専用の暗いサーフェスを作る / ③青を系列語彙から外す、のどれを採るかは**利用者の判断**） → ②**T149 / T125**（どちらも画面側の判断待ち）→ ③**10 枚目の合成画面**。**T151 は完了**（数値を `src/data/chart-palette.json` へ生成し `Charts.mdx` が読む）。T152 は色を動かす以上 VRT のベースラインが全チャートで動くので、**そのブランチへの push が全部終わってから update を 1 回**。

**この順番は 2026-08-12 の午前で更新した**: ①~~**T154**~~（**完了**。9 件だと思っていたら**翻訳 JSON の中にもあって 12 件**だった）→ ②~~**T153**~~（**完了**。残り 8 本のうち**同じ欠陥だったのは 6 本**で、2 本は選択の資料ですらなかった）→ ③~~**T155**~~（**完了**。`sandbox/recipes/**` は StackBlitz へ生ソースを送る契約なので除外。**VRT のベースライン 2 枚だけ未更新**）→ ④**T152**（利用者の判断待ち）→ ⑤ T149 / T125 → ⑥ 10 枚目。**T153〜T155 は 3 件とも「作業ツリーに未コミットの続きがある／報告だけで消えた」もので、セッションが落ちて記録が飛んだ。**

**2026-08-11（その 2）時点の順番**: ①**T122〜T130 の修正**（8 枚目で出た 9 件。うち T130 は a11y critical で **P1**）→ ②**T110（9 枚目・計測ダッシュボード。P3）**。**T109 は完了。**

**旧: 2026-08-11 時点の順番**: ①**T109（8 枚目の合成画面・form 重量級。P2）** → ②**T110（9 枚目・計測ダッシュボード。P3）**。**この 2 枚で、能動的に着手できるものは尽きる**（残る T23 は上流ブロックで待ち）。T109 を先に置く理由は T95 の行の候補比較のとおり ── 未合成が最も多いカテゴリが form（27 件）で、`recharts` の層に寄る T110 より**このリポジトリ自身の欠陥が出やすい**。**8 枚目を書くときは `MAINTENANCE.md` の項目 7-2（390px / 768px）も同時に通すこと**（7 枚目 = `Patterns/Newsroom` に通した記録が無い）。

**旧: 2026-08-03 深夜時点の順番（決定済み）**: ①T57（`AppShell` の Composition API）→ ②T63 → ③T64 → ④T32 の 4 枚目。**T55 / T59 / T60 / T61 / T62 は同日に完了**。**T59 / T60 / T61 / T62 は同日に完了**。理由は冒頭の「次はここから」を参照。**T59 / T60 は同日に完了**（T59 は 0 件でハードゲート化、T60 は ② を T61 へ移管して閉じた）。**両方とも VRT のベースライン更新だけ未実施。**

1. **運用維持**  
   `PX_BASELINE = 0` / `i18n:check` / `check:api` / `check:imports`。触った SCSS に未注記 px を増やさない。品質ゲートは PR テンプレに従う。
2. **T109（8 枚目・form 重量級）→ T110（9 枚目・計測ダッシュボード）**  
   T32 の「未合成コンポーネントを実アプリ形状で使う」は **2026-08-05 に済**（4 枚目まで）で、以降は 1 枚ごとに T95（7 枚目・済）/ T109 / T110 へ分割してある。**打率は落ちていない** ── 5 枚目 7 件・6 枚目 3 件・7 枚目も新規起票あり、いずれも既存のガード / VRT / a11y に一度も引っかかっていない種類だった。**未合成は 371 件中 139**（2026-08-09 実測。数え直す手順は `MAINTENANCE.md` の項目 7）。起票時の「221 中 176」からの推移はこの節の下と T95 の行に残してある。
3. ~~**T31: docgen の CACHE_VERSION 上げ忘れを機械検知**~~ — **済**（PR #113。②を採用＝キャッシュキーを自動導出し、手動定数を廃止）
3. ~~**T28: コンポジション監査の指摘 20 箇所**~~ — **済**（PR #109）  
   DESIGN.md 必須ルール 8〜11 を新設した際に既存 Patterns を掃いて出たもの。**`check:slop` では捕まらない**（トークンを使っているので px 直書きでも `: 0` リセットでもない）＝判断依存。詳細は下表 T15。
3. ~~**T29: docs の px 直書き 66 件**~~ — **済**（PR #111。残 10 件はトークン非対応の実寸）  
   `check:slop` のスコープを `docs/*.mdx` の `<style>` に広げて可視化された既存負債（`Configure.mdx` / `Colors.mdx` / `AppLayout.mdx` ほか）。ベースライン 109 のうち 66 件がこれ。減らしたら `STYLE_OVERRIDE_BASELINE` を下げる。
4. ~~未着手の改善候補~~ — **T1〜T7 すべて解決済**（2026-07-15。次節参照）

**npm 公開は完了済み**（初回 `wimui@0.2.0`、2026-07-21。`private` 解除済み。**最新は 0.19.0**＝2026-08-10 公開、実物の tarball を確認済み＝冒頭）。以降のバージョン運用は changeset ベース（`.changeset/` 追加 → Version PR → マージで publish、CI-4 で no-op 抑制済み）。エージェントは publish 相当の操作を勝手に進めない。  
破壊なし〜小の文書タスクは一通り済。

---

## 未着手の改善候補（2026-07-15 リポジトリ調査）

CI・テスト・監査体制は堅い（typecheck / coverage 80% / axe-core WCAG 2.1 AA / bundle-size / VRT / changesets 自動リリース、`npm audit` 0 件）。その上で見つかった残件。

### 実害あり（優先）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

### npm 公開とセット（公開済み）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

### 小さい掃除

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

### 運用維持・モダナイズ（2026-07-17 起票）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

### llms.txt / AI 合成可能性（2026-07-23 起票）

`llms.txt` / `llms-full.txt`（`scripts/generate-llms.js`・`npm run llms:build`）は出荷済み（PR #64/#66/#67、npm `0.3.0` に #64 分は反映済み、recipe 分 #66/#67 は changeset 未同梱＝次リリース同乗）。addon-mcp 実測で「個別 API 正当性は addon-mcp が担うが、CSS 契約 + anti-generic 合成は llms.txt でしか埋まらない」と判明済み。以下は未着手の拡張候補。

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T23 | addon-mcp 側の底上げ（合成ルールを届ける・要調査） | addon-mcp 実測で、`get-storybook-story-instructions` は**汎用の Story 作法＋a11y のみ**で WIM の anti-generic 合成ルールや CSS 契約を含まないと判明。エージェントが addon-mcp 経由で作業する場合にもこれらが届くよう、Storybook の instructions/docs に **WIM 合成ルール要約を載せられるか調査**。**addon の設定余地は要調査**（内蔵 instructions テキストの上書き可否が不明。代替: ①合成ルールを docs entry（MDX）化して `list-all-documentation` / `get-documentation` に拾わせる ②preview 側で注入）。llms.txt と内容が重複するため**単一ソースから両方生成**する等で二重管理を避ける方針を推奨 | **保留（上流ブロック）**（2026-07-25 調査。`@storybook/addon-mcp@0.7.0` を解析＋実機検証。**結論: 現行版では addon-mcp 経由の"確実な"配信は不可**。①**ライブ MCP サーバ（`/mcp`）の instructions はハードコード** — `buildServerInstructions()` を返す getter（`dist/preset.js:2010-2019`）で `existingMetadata` を無視＝第三者拡張不可。②`experimental_storybookAi` フック（`joinInstructions(existingMetadata, 内蔵)`）は存在するが**別系統メタデータ用**でライブサーバに反映されず。自前 preset を addon-mcp の前に置いて実機検証→ module は load されるが `/mcp` initialize の instructions に WIM は入らなかった。③**docs ツール（`list-all-documentation`/`get-documentation`）は動作**し MDX を surface（T26 Presets doc も列挙）が、`get-documentation` は **MDX ソースを返す**（`<T>` 未展開）＝リテラル英語が必要で `check-mdx-hardcoded` と衝突、かつ「エージェントが docs ツールを呼べば」の**日和見的**配信。**判断**: 注入は見送り、**llms.txt を主配信チャネルとして維持**（T25 で入口ページ整備済）。**再着手トリガー**: `@storybook/addon-mcp` が server-instructions 拡張 API を提供したら（Dependabot の bump / changelog で検知）。※`docs/feature-watchlist.json` は web-features 専用（非 web 機能の id は `check-feature-watchlist.mjs` がエラー）のため addon-mcp はそこに載せない。調査で作った preset/single-source は機能しないため全て revert 済（ツリーはクリーン））<br><br>**2026-08-07 に再確認。ブロッカーは解消していない。** npm の `latest` は 2026-07-25 の調査時と同じ **0.7.0** のまま。加えて **`10.6.0-alpha.4`（2026-08-03 公開）も中身を確認した**が、ライブサーバの `instructions` getter は `buildServerInstructions({ devEnabled, testEnabled, docsEnabled, changeDetectionEnabled, moduleGraphSupported, reviewEnabled })` と**内部のフラグしか渡しておらず、`existingMetadata` を受ける口が無い**（`dist/preset.js:2238`）。`buildStorybookAiMetadata` 側の `joinInstructions(existingMetadata, …)` は残っているが、これは調査時に「別系統でライブサーバに反映されない」と実機確認済みの経路。<br>**運用の注意が 1 つ増えた**: 版番号が `0.7.0` → `10.6.0-alpha` に切り替わっている（Storybook 10.x の版に揃える**改番**）。再着手トリガーは Dependabot の bump で検知する設計だが、**この改番は major の PR として来る**ので、`0.x → 10.x` を見たときに「破壊的変更」ではなく改番だと分かる必要がある。**見るべきは版番号ではなく `preset.js` の `instructions` getter が外から差せるようになったかどうか。** |

参考メモ: [[llms-txt-ai-composability]]（再フレームの経緯・addon-mcp 実測・recipe 管理方針）

### culti-ui テンプレの代替（2026-07-24 起票）

「Cult UI のテンプレのようなものが欲しい」というフィードバックへの、静的テンプレ集以外の代替案。テンプレ価値を **A. 初速（time-to-first-screen）/ B. 試せる（try-before-adopt）/ C. 見た目の即決（visual identity）** に分解し、既存資産を活かし低メンテな3本を採用。※コピーインCLI（`npx wimui add`）とスターターリポジトリは初速に効くが**ソロ維持コスト大・テンプレ陳腐化リスク**で保留。順序としては T24/T25 でエージェント合成の質を上げた後、その仕組みで少数の"看板テンプレ"を生成するのが合理的。

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

参考メモ: [[llms-txt-ai-composability]]

### デザイン（コンポジション）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

### 使う側の穴の探索（2026-07-26 起票）

**背景**: T27（Playground）で出た穴は、単体テスト 2804 件・VRT・axe が全緑のまま存在していた。どれも「単体を、そのコンポーネント自身の土俵で」検証する仕組みでは**原理的に見えない場所**にあったため。見つかった経路は 3 種類に割れる。

- **A. コンポーネントを隣り合わせた瞬間** — `Card` の `padding` が lg で止まっていた（型は `xl` を受け付けるのに CSS クラスが無かった）／`Card` と `Table` の枠の二重／`elevated` 既定による影の混在／label-left 行でラベルとスイッチが未関連付け（axe critical）
- **B. 別のホストに置いた瞬間** — Storybook docs CSS と自前 `docs-common.scss` の上書き（`sb-unstyled` が必要）
- **C. リポジトリ自身の主張を検証した瞬間** — llms.txt の版落ち／docgen キャッシュの陳腐化／サイズ予算が誰も払わない数字を測っていた

**探索の余地（実測）**: 公開コンポーネント **221** のうち、合成画面（`stories/Patterns/**` + `sandbox/**`）に一度でも登場したのは **45（20%）**。Playground のレシピが触ったのは **21（10%）**。**176（80%）は一度も合成されたことがない。**

**着手順（推奨）**: 原則は **網を張ってから探索する**。T32 は価値としては P1 だが、実行順では 4 番目に置く — 先に自動で拾える種類を機械化しておくほど、T32 の画面が広い網の下を通り、人間のレビュー負荷が下がるため。

| 順 | # | なぜこの位置 | 委任可否 |
|---|---|---|---|
| 1 | **T34** | 純粋な計算で答えが一意。**既知ケース（`neutral`×`subtle` が #109 以前は light で不可視）で検証できる**。VRT では原理的に捕まらない種類を機械化でき、以後すべてのトークン追加に効く | **可** |
| 2 | **T33** | 同じく機械的で、**既知ケース（`Card` の `padding="xl"` が #109 以前は無効）がある**。T32 の前に済ませると「書いたのに効かない prop」でのデバッグを避けられる | **可** |
| 3 | **T35** | ゲートを先に作れば、既存 5 レシピと**今後 T32 が増やすレシピを自動でカバー**できる。既存 tarball スモークの土台を再利用するため比較的安い | **可**（合否がビルド成否で一意） |
| 4 | **T32** | いちばん打率が高いが**視覚判定に人間が要る**（CLAUDE.md「委任時の 2 つの約束」参照）。1〜3 の網が張られた状態で着手するのが最も効率的。画面ごとに story 化 → VRT / a11y / `judge:slop` を通してからレビューに出す | **画面作成は可 / 視覚レビューは不可** |
| 5 | **T36** | T32 が増やす画面をカナリアとして使えるので後。`sb-unstyled` が効いている前提が回帰していないかの見張りでもある | **可**（対象プロパティのリストを人間が決めたら） |
| 6 | **T37** | 実害が確認された llms.txt は `check:llms` で塞ぎ済み。残りは未然防止で緊急度が低い | **可** |

> 時間が限られる場合は **T34 → T32** に短縮してよい（T33 は「効かない prop」を踏んだときに気づけるが、T34 の不可視バグは踏んでも気づけないため）。

| # | 項目 | 優先 | 内容 | 検証方法 |
|---|---|---|---|---|
| T201 | **`@changesets/cli` 3 を単独で上げると、npm publish は成功したままタグと GitHub Release が黙って作られなくなる** | **保留（据え置き・条件確定）**（2026-08-16 調査） | 起票 2026-08-16（依存更新の major 精査）。`changesets/action@v1` は `changeset publish` の**標準出力を正規表現で読んで** publish 済みを判定する（`src/run.ts`: `let newTagRegex = /New tag:/`。単一パッケージなので root 側の分岐）。**cli 3.0.0 の dist にはこの文字列が無い**（`Creating git tags...` / `Created git tags:` に変わった）。よって `releasedPackages` が空になり `published: false`、`git.pushTag` と `createRelease` が丸ごとスキップされる。**ワークフローは緑で終わる**ので気付けない。実際に両方動いている（`v0.23.16` の Release とタグが存在）。 | **保留。** 上げるなら **cli 3 + `changesets/action@v2` + `release.yml` の入力名**を同時に変える必要がある（v2 は NDJSON の構造化イベント `type: "git-tag"` で判定するので cli 3 とセットでしか動かず、v2 自身が cli 2 を検出して v1 へ誘導する。入力は `version` → `version-script` / `publish` → `publish-script` / `commit` → `commit-message` / `title` → `pr-title` に総入れ替え、`cwd` は削除）。**片方だけ上げる道は無い。**<br>検証: 隔離したコピーで 2.31.1 と 3.0.0 に同じ入力を通した（対照を先に落とした）。changeset 1 件のときは**どちらも同じ**（0.23.16 → 0.23.17、CHANGELOG も同形、changeset 消費、exit 0）。差は 2 点だけ ── ①changeset 0 件のとき 2.31.1 は warn + exit 0、**3.0.0 は exit 1**（ただし `release.yml` は `version` / `recover-version` の両方が事前に件数を数えるので、この経路には当たらない）②publish の `New tag:` 出力が消えた（本体）。<br>差し当たり `dependabot.yml` に major の ignore を足し、`MAINTENANCE.md` の保留表に理由と再開の判定材料を書いた。<br>**2026-08-16 追記: 据え置きで確定。ただし「いつ上げるか」は期日ではなく機械の契約で決めた。** `check:release-workflow` に 3 つ目の契約として **CLI と action の組**（v1 ⇔ cli 2 / v2 ⇔ cli 3）を足し、片方だけ動かした変更が着地できないようにした（`auditChangesetsPairing`。vitest 6 件で固定）。**期日を決め打ちしなかった理由**: 外から強制する時計が無い（action v1 / v2 とも runtime は `node24` で、v1 が打ち切られる期限は無い）。一方この変更の本丸である publish 経路は**本番でしか検証できない**ので、上げるのは「人がリリースを見ている日」が最良。<br>**上げる手順（決定事項）**: ①`@changesets/cli` 3 + `changesets/action` v2 + `release.yml` の入力名（`version` → `version-script` / `publish` → `publish-script`）を **1 つの PR** で変える（`check:release-workflow` が組の正しさを見る）②マージ直後に**捨て changeset で patch を 1 本切る**③**タグと GitHub Release が実際に作られたか**を確認する（`gh release list` / `git ls-remote --tags`）④作られなければ即 revert。**リリース予定が無い日に上げない** ── 検証が次のリリースまで宙に浮く。 |
| T207 | **公開している Storybook は、検索エンジンから見ると中身が 1 文字も無い** | **対応予定なし**（2026-09-20 ユーザー判断） | 起票 2026-08-17（ユーザーの「WIM UI が知られていないので検索に載せたい」）。実測: `https://takeshisakuma.github.io/wimui/` の `index.html` は **`<title>` が `storybook - Storybook`**、description も canonical も OGP も無い。**`<body>` は 1,853 バイトで中身は `window['FEATURES']` の JS だけ** ＝ JS を実行しないクローラが読めるテキストは 0。**【2026-08-22 追記】安い半分は着地した**（#500 / #502）── `<title>` / description / canonical / OGP 一式 / `robots.txt` / `sitemap.xml`（288 URL）/ OG 画像（1200×630）。公開 URL で実物を確認済み。**ただしこの行の冒頭にあるとおり、これは効く順の ④ である。** ①知見の記事 ②英語で出す ③比較記事・awesome 系への掲載 が先で、**メタ情報だけで認知は増えない。**<br>**`robots.txt` は `iframe.html` を塞いでいない**（下の計画とは逆）── **静的ページがまだ無いので、いま塞ぐとクローラが読める本文がゼロになる。** 塞ぐのは静的ページを置いて canonical をそちらへ向けたあと。<br>**構造の半分を作る前に、まず効果を測ること** ── **数週間おいて `site:takeshisakuma.github.io/wimui` の索引数を見る。** sitemap も robots.txt も 2026-08-22 に初めて置かれたので、それ以前とは比較にならない。**Googlebot は JS を実行するので `?path=/docs/…` まで辿れる可能性がある**（辿れていれば静的ページの生成は不要）。測る前に作るのは投機。<br>**【2026-09-12 追記】待っても測れないことが分かった。実測は 2 つ。**<br>**① 計測器が無い。** `site:takeshisakuma.github.io/wimui` の索引数はエージェントからは取れない ── WebSearch は `site:` 演算子を無視して無関係な結果を返し、Bing は検索結果ですらないページ（算数サイト 10 件）を返し、DuckDuckGo は CAPTCHA。**どれも「数字が出たように見えて別のものを読んでいる」型**なので数字として採らない。Search Console の検証ファイルも meta もリポジトリに無い＝**正しい計測器が未接続**。数えるなら人がブラウザで 1 回打つか、Search Console を繋ぐ（後者なら「Googlebot が `?path=` を辿れているか」も同時に分かる）。<br>**② そもそも増えようがない（こちらが本題）。** sitemap の URL は **288 → 295 に増えている**が、並んでいる `?path=/docs/…` は**すべて同一の `index.html` を返し、その canonical は `https://takeshisakuma.github.io/wimui/`（ルート）**。`?path=` はクエリ文字列なので配信されるファイルが変わらず、canonical は `.storybook/manager-head.html` に**ルート固定で直書き**、**実行時に書き換える処理はどこにも無い**（grep 済み）。**sitemap と canonical が逆を向いている** ── Google は宣言された canonical に従って重複を統合するので、295 本を送っても索引され得るのは実質ルート 1 ページで、**これは時間の経過では変わらない**。「数週間おいて数える」は、この構造のままだと『増えていない』以外の結果が出ない。**したがって待ちではなく、canonical を直す（＝下の「やるなら中身」＝部品単位の静的ページを置き canonical をそちらへ向ける）か、やらないかの二択。**<br>**なお `<title>` / description / canonical / OGP 一式は Storybook 10.6.0（#594）でも無事**（公開 URL で確認）。本文テキストは 0 文字のままで、読めるのは HTML コメントだけ。<br>本文は `iframe.html?viewMode=docs&id=…` という**別ドキュメント**に描画され、共有される URL（`/?path=/docs/...`）側には存在しない。`robots.txt` も `sitemap.xml` も無く、`?path=` はクエリパラメータなので **1,065 ストーリーが `/` 1 ページに正規化される**。<br>**npm keywords（9 個）・GitHub topics（10 個）・description は既に整っている** ── 足りないのは metadata ではなく**クローラが読める本文と外からの言及**。<br>**2026-09-20 のユーザー判断: 対応予定なし。** 残っているのは「部品単位 約 200 枚の静的ページ生成 + canonical の付け替え + 生成物の鮮度ガード」で、**P3 としては重い**（鮮度ガードまで込みで 1 つの仕事。`check:llms` でリリース PR を構造的に詰まらせた #116 の前科がある）。**効く順の ①知見の記事 ②英語で出す ③比較記事・awesome 系への掲載 が未着手である以上、④ であるここを先にやる理由が無い。**安い半分（`<title>` / description / canonical / OGP / `robots.txt` / `sitemap.xml`）は #500 / #502 で着地済みなので、**ここで止めても後退はしない**。<br>**判断が変わる条件**: ①〜③ を実際にやって外からの言及が増え、**着地先（docs ページ）が検索から読めないことが足かせだと測れたとき**。そのときは上の「やるなら中身」の手順ごと再評価する ── ただし**測る前に作るのは投機**なので、先に Search Console を繋ぐこと（`site:` の索引数はエージェントからは取れないと実測済み）。 | **対応予定なし（2026-09-20）。単体では認知は増えないので、優先順位を間違えないこと。** 効く順は ①**知見の記事**（告知ではなく。素材は既にリポジトリの中にある）②**英語で出す**（読者母数が桁違い。ライブラリも docs も既に英語対応）③**比較記事・awesome 系への掲載**（検索する人はライブラリ名ではなくカテゴリで探す）④ここ。実測: Qiita の告知記事は公開済みで **1 か月 500 PV**（告知 1 本の普通の数字＝形式と回数の問題であって、SEO を足しても桁は変わらない）。<br>**やるなら中身**: `/docs/<component>.html` を**部品単位（約 200 枚。ストーリー単位 1,065 枚にはしない ── 薄いページの量産になる）**で生成し、見出し・説明・Props 表・コード例を静的 HTML で置き、canonical をそこに向ける。`sitemap.xml` も生成し、`iframe.html` は `robots.txt` で塞ぐ。<br>**書く文章はゼロで済む**: `public/llms-full.txt`（223KB の全文）・`src/data/docgen_*.json`・`components.json` を流し込むだけ。<br>**着手条件（重要）**: **生成物の鮮度ガードをセットで作る**こと。同じ内容の 2 つ目のレンダリングは放置すると腐るし、このリポジトリは既に `check:llms` でリリース PR を構造的にマージ不能にした前科がある（#116）。生成 → ガード → リリース手順との噛み合わせまでを 1 つの仕事とする。 |
| T237 | **スクロールし始めた最初の 1px で、固定列が 0.5px だけ左にずれる** | **対応予定なし**（2026-08-30 ユーザー判断） | 起票 2026-08-30（ユーザーの報告「スクロールさせたときに左端がガクッとなる」）。**再現も原因も代償も測ってある。**<br>**再現**: スクロール量を 0 → 40px まで **1px ずつ**進めて sticky 列の左端を記録すると、取る値は **17.5 と 17 の 2 つだけ**で、**動くのは `scrollLeft` 0 → 1 の一度きり**（−0.5px）。以降 40px まで動かない。選択列・左固定列とも同じ。<br>**原因は T234 と同じ半画素。** 止まっているときは `border-collapse: collapse` の外枠の半分ぶん内側にいて 17.5、スクロールが始まると sticky が `left: 0` に貼り付いて 17 になる。**T234（境界に背面が透ける）と同じずれの表と裏。** | **`border-collapse: separate` にすると消える**（左端が 17 で固定・動いた回数 0。実測）。**ただし罫線が 1px → 2px に太る**（隣り合うセルが互いに描いて重ならないため。実測）。**T236 で Table を 1px 側に寄せた直後なので、これを採ると逆行する。**<br>採るなら **separate ＋ セルの罫線を片側だけに減らす**（例: 右と下だけ）まで込みで、Table / DataGrid の全 variant（striped / bordered / fullWidth / sticky / card）を通して確かめること。**VRT のベースラインは大きく動く。**<br>**2026-08-30 のユーザー判断: いまは採らない**（`collapse` のまま）。透けは T234 で塞いであり、ガクッは**スクロール開始時に一度 0.5px ずれるだけで、内容が読めてしまう類ではない**ため。<br>**2026-09-20 に状態列を「対応予定なし」へ移した**（判断は 2026-08-30 に済んでいるのに、`check:improvements` の未完了に数え続けていたため）。**判断が変わる条件**: Table / DataGrid の罫線方針を `separate` 前提で引き直すとき ── つまり **T236 で 1px 側に寄せた判断を見直すとき**。そのときは上の「採るなら」の手順（全 variant の通し確認と VRT ベースラインの更新）ごと再評価する。 |
| T250 | **静かな既定へ（`Badge` / `Card` / `Stats` / `StatusContent`）— 破壊的変更なので判断待ち** | **判断待ち**（ユーザー。①② は済＝#615 / #617。**③④ は未判断・未実装**。2026-09-21 に状態列を実態へ直した ── ② は #617 でマージ済みなのに「判断待ち」のまま、③④ は `check:improvements` が未完了に数えない書き方だったため、引き継ぎの「0 件」に隠れていた） | 起票 2026-09-19（T248 の完成条件）。必須ルール 8・10 の暫定を終わらせる提案。**①`Badge` / `Tag` / `Chip` の既定 `intent` を `neutral` へ**（`IndicatorBase` の 1 箇所。普通の値が既定でアクセント色に塗られるのが slop の主因）**②`Card` / `Stats` の既定 `variant` を `outline` へ**（VRT が大量に動く。minor では足りない可能性）**③`StatusContent` に `align` prop を足し、既定を左揃えへ**（いまは `size="sm"` のときだけ左）**④`Stats.Trend` の `direction` と `intent` を分離**（既存 `direction` は互換で残す）。<br>**受け入れ**: 素の `<Badge>pending</Badge>` が primary 面にならないことと、素の `<Card>` が影を持たないことを**テストで固定**する。既存画面の `variant="elevated"` / `intent="primary"` の明示は機械的に全置換せず、意図を確認してから。VRT は既定が変わったストーリーに限定して理由を書く。<br>**① を実装した（#615・2026-09-19）。** 触ったのは `IndicatorBase`（Badge / Tag が通る）と `Chip`（自前で `styles[intent]` を引くので既定値も独立して書かれていた）の 2 か所。**既定が primary であることを固定していたテストは 1 件も無かった** ── この既定は今まで何にも守られていなかった。3 部品ぶんのテストを足し、故意に primary へ戻すと 3 件とも赤くなることを実証してから戻した。VRT は **20 ストーリー × 2 テーマ = 40 枚**（Badge / Tag / Chip と、それらを内側に持つ Table / BaseListItem / Comment）。<br>**② は #617 に実装済みで、マージはしていない。** ここで見積もりを訂正する ── 単一行 JSX の grep から「`<Card>` 89 箇所中 68 箇所が既定依存」と書いたが、**VRT に出たのは 12 ストーリー**だった。複数行で props を書いて `variant` を明示している箇所を、既定依存として数えすぎている。<br>**途中で踏んだ 2 点（どちらも横断して効く）**: ⓐ**`check:prop-values` は古い docgen を読んでいるあいだ緑を返す** ── docgen は gitignore された生成物なので、再生成して初めて「docs は primary / 実装は neutral」と鳴った。CI はクリーンチェックアウトなので落ちる。ⓑ**prop の JSDoc は `llms-full.txt` にそのまま流れる** ── 日本語で理由を書いたら、npm tarball に入る＝外部 AI に届く英語の prop 一覧に経緯と `@default` タグが漏れた。理由は実装の隣のコメントに置き、生成物の差分を**値の行だけ**に戻した。 | **完成条件は「毎回明示しろ」ではなく「素で置いて静かなこと」。** ①だけでも 8 割は取れる見込み（1 ファイル 1 行）だが、②は VRT の広さゆえ単独の PR にする。 |
| T251 | **フェーズ 3（提案のみ・実装しない）** | **判断待ち**（ユーザー。ⓐ〜ⓓ。**ⓔ は解消**＝skill は `.agents/skills/` に置いて版管理している） | 起票 2026-09-19。ⓐ`Dashboard` の `columns` 既定 3 をやめるかⓑ`FAQSection` / `Marquee` を「マーケ定番部品」として残すか、ドキュメントで用途を絞るかⓒ`judge:slop` の対象を `light-patterns-*` だけでなく**カタログの Default の VRT** にも広げるか（コストが大きい）ⓓ`check-composition-rules.js` を**アンカー文字列一致から意味ドリフト検出へ**広げるか。<br>**ⓔ `.claude/skills/composition-guidelines/SKILL.md` は `.gitignore` の `.claude/` 配下**なので、この PR には入らない（ローカルでは既定レンダーも対象に含める形へ更新済み）。**skill を版管理下に置くかは要判断。** | — |
| T258 | **`update` が撮ったベースラインを、同じ head の `compare` が再現できない（`skeleton--wave-animation`）** | **保留**（再発待ち。ⓐを #627 で採用済み・2026-09-19。根の原因は Playwright の安定化判定で、この repo では消せない。再発したときの手順は本文の末尾） | 起票 2026-09-19（#619 で踏んだ）。RadioGroup のラベルを直しただけの PR で、ベースライン更新が `light-…-skeleton--wave-animation` を書き換え、**同じ head の compare がそれを 64 画素で拒否した**。<br>**ジッタではない。** 再実行しても **2 回とも同じ 64 画素**だった。`vrt/nondeterministic-stories.js` が `video--rounded` で記録しているとおり**値が動くのがジッタの定義**で、ここは動いていない。つまりランダムさではなく、**update 側の撮影だけが再現性のある外れ値**になっている。<br>**除外リストに足すのは誤った処方。** wave は素の CSS アニメーション（`animation: skeleton-wave 2s var(--wim-easing-emphasized) infinite`）で、Playwright の `animations: "disabled"` が止められる側。除外リストの顔ぶれ（動画・キャンバス・JS 駆動）とは種類が違ううえ、足すと**そのストーリーは以後 CI が何も見なくなる**（ベースライン 0 枚の問題）。<br>**当座の処置**: #619 では触っていないベースラインを main 版に戻して緑にした。<br>**次に確かめること**: ①update ジョブと compare ジョブでシャードの割り当てが違い、**直前に撮ったストーリーの状態が残っている**のではないか（同じ絵を撮る順番が違う）②`animations: "disabled"` が `infinite` のアニメーションをどの時点で固めるか③64 画素が画像のどこにあるか（波の帯の位置なのか、縁のアンチエイリアスなのか）を pngjs で出す。**①を先に見ること** ── 順番依存なら他のストーリーにも同じ形が潜んでいる。<br>**2026-09-19 に原因を特定した（Playwright の実装を読んだ）。**<br>**まず自分の説を 1 つ取り下げる**: 「`--update-snapshots=all` は撮り直しが働かず最初の 1 枚が凍結される」は誤り。両モードとも安定化ループを回す。<br>**本当の原因は、安定化の判定にアサーションと同じ許容差が使われていること。** `playwright/lib/matchers/expect.js:12601-12620` が `maxDiffPixels` / `maxDiffPixelRatio` / `threshold` を `expectScreenshotOptions` に載せ、`playwright-core/lib/coreBundle.js:22766-22790` の安定化ループが**その同じ options** で「直前の 1 枚」と比べる（`areEqualScreenshots(actual, previous, previous)`）。つまり**「安定した」は「直前の 1 枚と一致」ではなく「直前の 1 枚と 50 画素以内」**。<br>**これで観測が全部説明できる**（この repo は `threshold: 0.05` / `maxDiffPixels: 50`）: ①update は連続 2 枚が 50 画素以内になった時点で止まり、**その時に手にしていた 1 枚**を書き込む ②絵が 50 画素より広い帯の中を揺れる部品では、update は**帯のどちら側で止まってもよい** ③compare も同じ規則で安定化するので**帯の反対側**に着地しうる ④差が 50 を超えると落ちる。**「2 回とも同じ 64 画素」だったことも説明が付く** ── 各実行の中では安定しており、帯の端の位置は再現するから。ジッタ（値が動く）ともアニメーションの撮り遅れとも違う**第 3 の形**だった。<br>**副産物（compare 側の非対称）**: `const expectation = options.expected && isFirstIteration ? options.expected : previous;` ── **compare は 1 枚目がベースラインと一致したらその場で break し、安定化を 1 度も通らない。** つまり compare が緑のとき、その絵は「安定した絵」とは限らない。update は必ず 2 枚以上撮る。<br>**`will-change` 仮説は外れだった**（#625 で実測）。注入に `will-change: auto !important` を足すと **222 枚（111 ストーリー × 2 テーマ）が動く** ── 部品が書いた `will-change` だけでなく Floating UI がインラインで当てている分まで消えるため、Tooltip / Popover / Dropdown / Drawer / Dialog や Patterns 28 枚に波及する。**直る対象は 1 枚**なので採らない。#625 はマージせず記録として残す。<br>**処方の候補（未判断）**: ⓐ帯の広い部品を**本当に静止させる**（`skeleton--wave-animation` なら `.wave::after` を撮影時に非表示にする等。対象が狭い）ⓑ`maxDiffPixels` を下げる（安定化も厳しくなるが、検知したい信号は 139〜176 画素なので余地はある。ただし全体に効く）ⓒ何もせず、落ちたら触っていないベースラインを戻す運用を続ける（今回 #619 でやったこと）。<br>**処方はⓐ（部品側で 1 行外す）を採った（#627）。** `skeleton.module.scss` の `.wave::after` から `will-change: transform` を外しただけ。update → compare を 1 往復させて実測:<br>**① compare（旧ベースライン）**: 1 枚だけ赤（`light-…-skeleton--wave-animation`・126 画素）。他の Skeleton 6 ストーリーにも他部品にも波及せず。**② update**: ベースライン更新（112 ファイル書き換え。**変更由来は 1 枚**で、残りは雑音の床＝T253 の再現）。**③ 再 compare**: **4/4 緑**。2 回とも同じ 64 画素で拒否していたものが一致するようになった。<br>**仮説と処方を分けて記録する。** `will-change` が効いていたのは正しかったが、#625 で試した**処方**（撮影時に `will-change: auto !important` を全体注入）が誤りで、**222 枚**が動いて直る対象は 1 枚だった（Floating UI がインラインで当てている分まで消えるため）。同じ仮説でも、部品側でやれば **222 → 1**。<br>**根の原因は消えていない。** 安定化判定が `maxDiffPixels` を継ぐのは Playwright 側の性質で、今回やったのは**帯を狭めて 50 の中に収めた**こと。**帯の広い別の部品で同じ形は再発する。**<br>**再発したときの手順**（ⓒを運用の既定として残す）: ①落ちた画素数が実行間で**動くか**を見る ②動かないならこの形 ── **除外リストに入れない**（再現する差に蓋をすることになる） ③その PR が触っていないベースラインなら **main 版に戻す**（#619 でやったこと） ④その部品を本当に静止させられるなら部品側で直す（#627 でやったこと）。<br>**ⓑ（`maxDiffPixels` を下げる）は採らなかった。** 安定化ループは「**連続する 2 枚**が許容差以内」で止まるので、許容差を下げても**1 点に収束させる力は無い** ── 確率は下がるが仕組みは残る。一方でコストは全ストーリーに及ぶ（雑音の床は実測で変化画素 17 まで見えており、50 → 25 だと余裕が 1.5 倍しかない）。**仕組みを消さないのに repo 全体のリスクを上げる**ので割に合わない。 | **「同一コミットで update → compare が落ちる」は、非決定の証拠であると同時に、パイプラインの欠陥の証拠でもある。** 除外リストはランダムなものを外すための道具なので、**再現する差を外すと欠陥に蓋をする**。2 回測って値が動かなかったことが、その 2 つを分けた。 |

（ここにあった作業メモ ── T38 の停止点 / T32・T44 の経過 / フォント自前化 ── は `docs/history/improvements-archive.md` へ移した。）


---

## 緑地視点の改善候補（今の WIM を知ったうえで最初から作るなら）

累積コストが高かった／これから高くなりやすい点。**今すぐ壊すリストではない**。取り入れ可否は次節。

1. **スコープを先に切る** — Core + optional（charts / ai / rhf）を文書・サブパスで切る。物理モノレポ化はしない → **済（見せ方）**
2. **公開 API はバレルだけ** — deep path はフォルダ名を永久契約にする → **済（廃止）**
3. **Form の値・エラー契約を最初に書く** — ClearedValue（`null`）と `error` 分岐 → **済（SKILLS / README）**
4. **トークンは意味の層を薄く** — palette → role → component。近傍別名を増やさない → **済（RULES）**
5. **CSS エントリを1本に寄せる選択** — 必須1ファイル + reset opt-in → **済**
6. **テーマ／密度は Provider を正面に** — 属性は実装詳細 → **済**
7. **i18n 境界** — ランタイム文字列だけ内蔵、ドキュメント文言は分離 → **済（RULES）**
8. **複合 UI はレシピ優先** — primitives 少数 + Patterns → **済（RULES / SKILLS）**
9. **peer 行列を最初に一点集中** — 例: React 19 + zod 4 のみ → **済**
10. **RTL をやらないなら最初から明記** — LTR-only を製品方針に → **済**
11. **命名を業界標準に寄せる** — Selectbox → Select 等（学習コスト） → **済**
12. **品質ゲートを1コンポーネント目から** — Docgen / check:api / PX / asChild → **済（PR テンプレ）**

**今の WIM で残すべき強み**: トークン駆動・CSS 分割契約・peer 分離（`wimui/rhf` / charts）・API スナップショット・密度トークン。

---

## 今から取り入れられるか

### 破壊なし〜小（今やる）

| # | 改善 | やり方 | 状態 |
|---|---|---|---|
| 1 | スコープの「見せ方」を切る | README / Getting Started で Core 推奨と optional（charts / ai / rhf）を先に見せる（モノレポ化はしない前提の DX） | **済** |
| 3 | Form 契約を1枚に固定 | SKILLS / README に ClearedValue / error 分岐の短い規約 | **済** |
| 4 | トークン近傍別名を増やさない | 新規トークンは「既存で足りるか」を必須チェック | **済**（RULES / SKILLS） |
| 7 | i18n の境界を明確化 | ランタイムキーは 3言語、新規ガイド長文は en 優先など RULES に方針 | **済** |
| 8 | 複合はレシピ優先 | 薄いラッパ新規を増やさず Patterns に寄せる | **済**（RULES / SKILLS） |
| 10 | LTR-only を正面に | README 動作要件に1行 | **済** |
| 12 | 品質ゲートを新規必須に | scaffold / PR チェックリストに check:api・PX・asChild | **済**（`.github/pull_request_template.md` + scaffold 案内 + RULES） |

**破壊なし〜小**: 上表は一通り済。残りは運用維持と npm 公開判断。

### 慎重（破壊 or コスト大）

| # | 改善 | 理由 | 状態 |
|---|---|---|---|
| 2 | deep path 廃止 | コンポーネント単位 `exports`（`./form/*` 等）を削除。バレルのみ公開 | **済** |
| 5 | CSS を1本に統合 | 必須は `styles.css`（トークン+コンポーネント）。`reset.css` は任意のまま | **済** |
| 6 | Provider 正面化 | `WimProvider` を追加（属性契約は残す） | **済** |
| 9 | peer を React19+zod4 のみに絞る | `^19` / `zod ^4`。18・zod3 は非対応 | **済** |
| 11 | Selectbox → Select 等の改名 | breaking。alias なしで一本化 | **済** |

### 今はやらない / 対応予定なし

| # | 改善 | 理由 |
|---|---|---|
| — | コア／拡張の物理分割（モノレポ化） | **対応予定なし** — ビルド・CI・changeset・ドキュメント運用コスト増。1 パッケージ + サブパス（`wimui/charts` 等）+ optional peer で代替 |
| — | トークン名の大規模リネーム（総入れ替え） | **済（B）** — role 語彙を `surface*` / `overlay*` / `inverse` 系へ再編。component 色の公開降格も済 |
| 10 関連 | RTL／論理プロパティ一括移行 | **対応予定なし**（方針どおり） |
| T47⑤ | 演出系（Parallax Scrolling / Text Scramble / Spring Animation） | **対応予定なし** — 動きが内容の変化に対応していない演出は採らない。SSOT は `src/data/not-planned.json`、理由は DESIGN.md「採らない演出」節、代替は `ScrollProgress` / `StreamingText` / `--wim-easing-spring` |

---

## 状態付きメモ

| 項目 | 状態 |
|---|---|
| グローバル密度トークン（基盤） | **済**（`data-density` / `setWimDensity`） |
| 密度の適用拡大（field / list / item） | **済** |
| Form 連携（RHF / zod） | **済**（`wimui/rhf`） |
| Form レシピ（DatePicker / Rating / Switch） | **済**（Patterns/ReactHookForm） |
| Form 値型ゆれ（null / undefined） | **済**（DatePicker `value?: Date \| null`。クリアは `null`、省略は非制御） |
| `error` string vs boolean | **意図的**（FieldTemplate 系は `string`、Checkbox / Switch / Radio は `boolean` + `invalid`。`wimui/rhf` の `error` / `invalid` で分岐） |
| トークン名・セマンティクス棚卸し | **済**（誤用修正＋契約文書化） |
| トークン別名刈り込み（A） | **済**（`464ebb67`。`surface*` 正規化） |
| トークン role 大規模リネーム（B） | **済**（`surface-app|subtle|void|inverse`、`overlay*`、`primary-muted|soft|fill`、`white`、`*-inverse`） |
| コンポーネント色の公開降格 | **済**（avatar / heatmap / carousel / chat / terminal / control-default / close-hover / decoration-highlight / overlay-* → `--wim-comp-*`。未使用 `chart-*` / `feedback-*-base` 削除。`skeleton-*` は公開維持） |
| CSS / テーマ契約 | **済**（必須 `styles.css` = トークン+コンポーネント。`reset.css` 任意。`WimProvider` 推奨） |
| peer サポート行列 | **済**（React **19** / zod **4** のみ。README + `package.json` peers） |
| 公開 API サーフェス凍結 | **済**（`check:api` v2。deep path **廃止**・バレルのみ） |
| WimProvider 正面化 | **済**（`WimProvider` / `useWim` / `setWimTheme`。属性は実装詳細として維持） |
| Selectbox → Select | **済**（`Select` / `SelectOption` / `useSelect`。deprecated alias なし） |
| 緑地視点の取り入れ候補 | **破壊なし項目は済**（残りは運用維持 + npm 公開判断。モノレポ/RTL は対応予定なし） |
| エクスポート DX / Docgen Import | **済** |
| Props 説明 i18n（leaf + 複合） | **済**（Missing 0） |
| `PX_BASELINE` | **済**（0。維持のみ） |
| VRT ベースライン | **更新済**（2026-07-16 全量 update `12d09460`。※T12 の a11y 修正 push 後に再更新が必要） |
| npm 公開 | **済**（`wimui@0.2.0` 公開済み、2026-07-21。以降は changeset 運用） |
| asChild 残り | **済** |
| RTL / 論理プロパティ | **対応予定なし** |
| コア／拡張の物理分割（モノレポ化） | **対応予定なし**（1 パッケージ + サブパス + optional peer） |

### RTL（対応予定なし）
- 公式言語 en / ja / pt は LTR。部分適用はしない
- **やらないこと（エージェント）**: RTL 実装・論理プロパティ一括移行・`dir="rtl"` の勝手な着手

### モノレポ／パッケージ物理分割（対応予定なし）
- リポジトリは 1 つ・npm パッケージも `wimui` 1 つのまま
- Core / optional の切り分けはドキュメントとサブパス（`wimui/charts` / `wimui/ai` / `wimui/rhf`）で行う
- **やらないこと（エージェント）**: `packages/*` 分割・複数 npm 名への切り出し・workspace 化の勝手な着手

### 公開契約（Form 値型 / トークン / CSS・テーマ / peer / 公開 API）

**本文は `docs/rules/` にある**（2026-09-21 に写しを廃止）── Form 値型・peer・公開 API は `docs/rules/build.md`、トークン・CSS / テーマ契約は `docs/rules/tokens.md`。ここに写しを持っていた間に両者はずれていた（`reset.css` の見出し行高と UMD の行はこちらにしか無く、こちらは廃止済みの `SKILLS.md` を指していた）。

---

## 運用メモ

```bash
npm run audit:hardcoded   # PX ベースライン
npm run check:api         # 公開 API スナップショット（exports + symbols）
npm run check:imports     # peer のルート import 禁止
npm run i18n:check        # 3言語キー整合
npm run check:aschild     # asChild 必須リスト
```

- Docgen: `src/data/docgen_*.json` は gitignore
- peer マップ: `src/data/peer-imports.json`

### 「潰れ」を直すときは、逆向きも同じ計測で見る（2026-08-03・T59。T61 でそのまま使う）

**下限は「狭すぎ」だけでなく「広すぎ」でも壊す。** T59 では下限を入れた 4 手のうち **3 手が別の場所を壊しており、3 回とも実測だけが見つけた**（詳細は T59 の行）。必要な計測は 2 本で、**両方を毎手ごとに通す**こと。

1. **潰れる側** — Storybook のストーリーをマウントし、対象の根を 610px の flex row へ移し、`flex:0 0 (610-16-N)px` の縮まない兄弟を置いて残りを N px にする。`N=24` で「下限が無ければ 24px になる」。**すでに下限を入れた部品を対照に混ぜる**（T59 では `ModelSelector` が毎回 180px で止まることをもって、ハーネスが効いている証拠にした）。対照経路として 243px の block でも測り、**修正前後で 1px も動かないこと**を確認する。
2. **押し広げる側（はみ出し）** — 全ストーリーを回し、対象要素の実寸が**親の `clientWidth` を超えていないか**を見る。T59 の `ColorPicker` はこれでしか出なかった（`FieldTemplate` が色見本の欄を 120px に絞っているのを、180px の下限が押し広げていた）。
3. **太った側（VRT）** — **2 だけでは足りない。** 親が一緒に広がる場合ははみ出しが起きないので、2 は「0 件」を返しながら実際には全体が太っている。T59 ではこれで `width="xs"`（max-width 120px）が 180px で描画されている回帰を見逃し、**#229 の VRT compare が 4 シャードとも落ちて初めて出た**。**下限を入れたら VRT を必ず通すこと。**

**CSS の原則として**: `min-width` は `max-width` に常に勝つ。**下限は必ず `min(下限, その要素の max-width)` で頭打ちにする** — さもないと `width="xs"` のような明示指定を黙って踏み潰す。ただし `max-width` が `100%` や `--wim-input-width: 100%`（fullWidth）のときは `min()` に % が入って伝播が切れるので、そこだけ素の下限へ戻す。

**T59 で入れた下限を全部この観点で洗った結果**（2026-08-03）: 踏み潰しが起きるのは `--wim-input-width` で `max-width` が動く 3 件（`InputBase` / `Textarea` / `RichTextEditor`。`widthXs` は順に 120 / 120 / 140px）だけで、`Select` と `OtpInput` は `max-width` が 320px ＝ 下限 180px より大きいので起きない。`Menu` と `Transfer` の下限を置いた規則には `max-width` が無い。`Code` と `MarkdownRenderer` は `max-width: 100%` なので**理屈の上では 180px 未満の親ではみ出す**が、995 ストーリーの走査で実例が 1 件も出なかった。**`min(180px, 100%)` にすると祖先への伝播が切れる**（`Label` で実際に踏んだ）という既知のコストがあるので、**実例が出るまで入れない**。

**走査スクリプトは進捗を出すこと。** 最初に書いた版は結果を最後にしか出さず、1 件あたり最大 23 秒（goto 15s + マウント待ち 8s）待つ設計だったので、**1h46m 走らせても現在地が分からず打ち切った**。4 並列・goto 8s・マウント待ち 4s・25 件ごとに「済/全体・件/秒・残り分」を書き出す形にしたら 12 分で終わる。**同時に重い処理（全量テスト等）を走らせないこと** — 一度そうして、読めなかったストーリーが 4 → 64 件に増えた（結果の信頼性がその分落ちる）。

**CSS 側で 2 つ、実測しないと分からなかったこと**:
- **`min-width` に % を使うと祖先の内容サイズに寄与しない。** `min(180px, 100%)` は「狭い親でははみ出さず、flex では効く」という理想的な挙動に見えて（単独実験ではそのとおり）、`InputBase` を内側に持つ `Label` の下限が 180→24px に外れた。**下限は伝播しないと意味がない。**
- **カスタムプロパティの既定値を自分で宣言すると、祖先の上書きが届かない。** 自己宣言が継承値に勝つ。既定は `var(--x, 既定)` のフォールバックで持つこと。

### prefix による VRT の除外は、その部品を**使う側**まで及ばない（2026-08-04）

`vrt.spec.ts` の `NONDETERMINISTIC_STORY_PREFIXES` は**ストーリー ID の prefix** で切るので、
`components-ai-chatui--` を除外しても、**`ChatUI` を内部で使うレシピ**（`patterns-playground--default` 等）は
別 ID なので対象に残る。T63 で `ChatUI` の影の描き方を変えたとき、「ChatUI は除外だから VRT に影響しない」と
PR に書いて **light / dark の 2 枚で落ちた**。

**同じ「除外の範囲を取り違える」型を、同じ週に 3 回踏んでいる**:
1. **T62** — 逆向き。`ChatUI` にストーリーを足して「これで VRT に載る」と書いたが、prefix 除外で**1 枚も撮られない**（a11y は全ストーリーを回すので載る）。
2. **T60** — `ChatUI` の `container-type` が狭幅の原因だという**未検証の見立て**で T60 を閉じ、実測で否定された。
3. **T63** — 今回。

**覚えておくこと**: 除外リストは**ストーリー ID にしか効かない**。コンポーネントを変えたときの影響範囲は「そのコンポーネントのストーリー」ではなく「**そのコンポーネントが描画されるすべてのストーリー**」。判断する前に `grep` で使用箇所を数えること。

### 「VRT が撮るもの」と「VRT が起動する条件」がずれる（2026-08-02・3 度目）

**paths フィルタは、撮影対象の一覧とは別に管理されている。** 片方だけ増やすと、**そのストーリーは撮られる対象なのに、変えても走らない**という状態になる。走らなければベースラインは古いまま残り、**次に別の理由で VRT を起動した PR が、自分と無関係な差分で落ちる**。

実例（#219 → #220）: `sandbox/**` が `vrt.yml` の paths に無かった。`sandbox` は `patterns-playground--default` として VRT の対象に入っているのに、レシピを 1 つ足した #219 では **PR でも main でも VRT が 1 度も走らなかった**。main のベースラインが古いまま残り、`src/**` を触った #220 が `patterns-playground--default` の light / dark 2 枚で落ちた。**落ちた PR は原因を作っていない。**

**同型は 3 度目**:

1. **CI-6**（#189 前後）— `push` 側が `src` / `stories` / `locales` の 3 つしか見ておらず、**VRT の設定そのものを変えた PR がマージ後に main で走らなかった**（#185 が `threshold` を 0.1 → 0.05 にしたとき、main で 1 本も起動していない）。`pull_request` 側と同じ 6 つに揃えて解消
2. **T43** — 「VRT に載っている」は「VRT が見ている」ではない。6 ストーリーが対象に入っていながら、面積・色深度・除外の 3 つの理由で 1 件も検知されていなかった
3. **今回** — 対象に入っているのに、起動条件から漏れていた

**How to apply:**

- **撮影対象を増やしたら、paths フィルタを必ず一緒に見る。** 「どのディレクトリの変更が、どのスナップショットを動かしうるか」を数えること。現在 VRT が撮るのは `stories/**` と `sandbox/**`（Playground ギャラリー経由）の 2 系統。
- **VRT が落ちた PR を見たら、まず「その PR が原因か」を確かめる。** 落ちたスナップショット名を出して、変更した範囲と対応するかを見る。対応しないなら**前の PR がベースラインを更新せずに通っている**疑いが濃い。`gh run list --workflow=vrt.yml --branch main` で直近のマージコミットに対する実行があるかを確認する。
- **paths フィルタは `pull_request` と `push` の両方にある。** 片方だけ直すと「PR では走るが main では走らない」（またはその逆）になる。

### スナップショット方式のガードは、自分の誤りと一致してしまう（2026-08-02・T54 の実地）

**ローカルの緑は「正しい」ではなく「一貫している」しか意味しない。** 生成と検証が同じコードを通る以上、**読み方が間違っていても前後は一致する**ので緑になる。

実例（`check:prop-api` の初回 push、PR #217）: 必須/任意を読む正規表現が値側を `[^;]+` にしていたため、改行をまたいで次の `;` まで伸び、**関数の引数リストを prop 宣言として拾っていた**。

```ts
function collect(
  nodes: TreeViewNode[],   // ← これを TreeViewProps.nodes の宣言と誤読した
  query: string,
) { … }
```

実際の宣言は同ファイル 228 行目の `nodes?: TreeViewNode[];`（任意）。スナップショットも**同じ誤読で生成されていた**ので、ローカルでは前後が一致して緑。CI で `TreeView.nodes: 任意 → 必須` として落ちて初めて発覚した — **TreeView に一切触れていない PR で**。

**分かれた理由は環境差**（`.gitattributes` は LF、Windows のワーキングコピーは CRLF）で、行の形に依存する判定が両者で違う結果を出した。**つまり見つかったのは偶然**。同じ誤読が両環境で一致していたら、そのまま出荷されて「prop の必須化を見張っている」と信じ続けていた。

**そこから来る規則:**

1. **スナップショットを作る前に、抽出そのものを既知の値で検算する。** 「前後が一致する」は検算ではない。`TreeView.nodes` が任意だと**ソースを見て**確かめてから凍結する。
2. **抽出が失敗した箇所は数えて出す。** `check:prop-api` は「必須/任意を判定できなかった 595 件」を毎回出す。0 件に見えるガードより、595 件読めていないと言うガードのほうが信用できる。
3. **行の形に依存する判定は、改行を正規化してから行う。** CRLF/LF で結果が変わる状態は、片方の環境でだけ嘘をつく（`check:llms` が Windows でだけ落ちたのと同型で、向きが逆）。
4. **正規表現の値側で `[^;]+` のように改行を含む否定クラスを使わない。** 意図せず次の文まで伸びる。1 行で閉じるものだけを見て、複数行は「読めなかった」に倒す。

### ローカルの検証は `audit:lib` だけでは足りない ── CI の Lint ジョブは 6 つ走る（2026-08-20・#466 で踏んだ）

`titleLevel` の JSDoc に Markdown の強調記法（`**`）を書いて CI が落ちた。**JSDoc は Docgen 経由で props 表と `llms-full.txt` にそのまま載る**ので、強調記法は生のアスタリスクとして読者に見える（実際 `llms-full.txt` にも入っていた）。ガードは `audit-mdx` にあり、**`audit:lib` では走らない**。

**CI の Lint & Type Check が走らせるのは 6 つ**: `tsc --noEmit` / `lint` / `stylelint` / `check:imports` / `audit:lib` / `audit:docs`。**push 前にこの 6 つを通すこと。**

**docgen はキャッシュを持つ。** JSDoc を直しても `src/data/.docgen-cache.json` を消さないと再生成されず、「`all from cache`」と出て**古い値のまま通る**。消してから `generateDocgenData()` を回し、`generate-llms.js` も回し直す。

**`✗ Hardcoded text detected` の 49 件は既存**（main でも同数）。`check-mdx-hardcoded.js` 単体は exit 0 で、`audit:docs` を落としているのは別の監査なので、**`✗` の行数ではなく `failed.` の行で原因を特定する**こと。

### ベースラインのコミットバックは、**チェックが 1 つも走っていない head** を作ることがある（2026-08-20・#461 で実測）

VRT の `update` が撮り直した PNG をコミットバックすると PR の head は `github-actions[bot]` のコミットになる。**そのときワークフローが `action_required`（承認待ち）で止まったままになることがある。**

止まっている間、**`gh pr checks` は何も出さず、`mergeStateStatus` は `CLEAN` を返す** ── 画面上は「問題なし」に見えるのに、その head では品質ゲートが 1 つも走っていない。**気づかずにマージすると誰も検証していないコミットが main に入る。**

**毎回ではない。** #456（T212）のコミットバック head は承認不要で全部 success だったが、#461（T214）は **8 本すべてが `action_required`・head の check-runs は 0 件**だった。`actor` / `triggering_actor` / `event` はどちらも同一で、**API のメタデータでは区別できない** ── だから原因を当てにせず、**毎回 head の件数を数える**。

**「無いものは赤くならない」という同じ型が 3 回目**（VRT の 6 時間タイムアウト全滅 → CI-8 の `cancelled`（灰色）→ これ）。緑に見えることと、測ったことは別。

手順（検出コマンドと、承認待ち／ラン 0 件それぞれの戻し方）は `docs/rules/vrt-baseline-prs.md`。**そこに書いたコマンドは #461 の実物に対してそのまま実行して確認してある。**

### CI スキップ指示は「言及しただけ」でも発火する（2026-08-18・#446 で実測）

**コミットメッセージの散文に `[` skip ci `]` と書くと、squash 本文経由でそのマージの CI が丸ごと止まる。** 否定文でも同じ ── 実際に踏んだのは **「マージコミット本文にスキップ指示の混入が無いことも確認した」と書いた**コミットで、その一文自体が混入になった。#446 のマージ（`6a336f1b9`）では **run が 0 件**で、deploy / Lint / Vitest / VRT / a11y のすべてが main 上で走っていない。

**既知の経路とは別物**。記録済みだったのは「VRT のコミットバックが付けたスキップ指示が squash 本文に漏れる」＝**機械が書いた文字列**の話で、今回は**人（エージェント）が説明として書いた文字列**。GitHub Actions は本文中のリテラルを見るだけなので、文脈も否定も関係しない。

**回避**: この文字列を散文に書かない。書く必要があるときは「スキップ指示」と言い換えるか、`[` と `skip ci` と `]` を割って書く。**この行と `IMPROVEMENTS.md` 内の言及もそう書き換えてある** ── ここの文章はコミットメッセージへコピーされるため、ドキュメント側に生の形で置いておくと再発する。

**気づき方**: マージ後に `gh run list` でそのコミットの run が 0 件かを見る。**PR 上のチェックが緑でも、マージ後に何も走っていないことがある**（mergeStateStatus も PR のチェックも、マージ後の main の話は何も保証しない）。今回は直後の #445 のマージで全ワークフローが起動したため実害は小さかったが、**最後のマージでこれを踏むと deploy が古いまま残る**。

### リリース手順で毎回引っかかる 2 点（2026-08-02・0.12.0 で実測）

1. **bot が push した head はチェックが「無い」のではなく `action_required`（承認待ち）で止まっている。** `gh pr checks` は「no checks reported」と返し、PR は緑にも赤にもならないまま**マージ可能に見える**。0.12.0 では 2 回起きた: ①機能ブランチの VRT コミットバックで **8 本**、②`changeset-release/main`（Version Packages PR）で **5 本**。②は changesets が毎回ブランチを作り直すので**リリースのたびに必ず起きる**。承認は `gh api -X POST repos/<owner>/<repo>/actions/runs/<id>/approve` を対象ぶん。<br>なお `changeset-release/main` では VRT と a11y は起動しない（Lint / Unit Test / Tarball Smoke / Dependency Audit / Bundle Size の 5 本のみ）。中身がバージョンと CHANGELOG だけなので、実質の担保は直前に main で走ったぶんになる。
2. **`release` Environment の承認は 2 回要る。** 1 回目（changeset を含む main への push）は **publish しない** — 未消化の changeset があるので changesets action は「Version Packages PR を開く」分岐に入る。実際に npm へ出るのは 2 回目（Version Packages PR をマージした後）。承認前にどちらなのかは `.changeset/*.md` が残っているかで判別できる。

**解消が確認できた 2 件**（当座の回避策はもう要らない可能性が高いが、毎回確認はする）: ①VRT コミットバックへの `[` skip ci `]` 混入は起きず、Deploy は機能マージ・リリースの両コミットで成功した ②`check:llms` がリリース PR を構造的にマージ不能にする件は `version:packages` が `changeset version && npm run llms:build` になっているため再発しない（0.12.0 の `llms.txt` が v0.12.0 で出ていることを公開 tarball で確認済み）。

**公開後はパイプラインの緑ではなく tarball を見る。** 0.12.0 では `npm pack wimui@0.12.0` を展開して、バッジの `text-on-danger`・`Timeline` の `text-*`・`reset.css` 側のリンク色・`llms.txt` のバージョンと "Not in scope" 節・レシピの `as const`・README のアイコン例を実物で確認した（`src/base.scss` は `styles.css` ではなく **`reset.css`** に入る点に注意）。

---
