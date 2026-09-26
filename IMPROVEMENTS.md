# WIM UI 改善リスト（継続用）

最終更新: 2026-09-23（その 101・**セッションを閉じた状態**）（<br>**■ 引き継ぎ状態**: **開いている PR は 0 件。0.32.0 と 0.32.1 を公開した。** この回に main へ着地したのは 7 本（#687 / #688 Dependabot / #689 T250 の指摘の残り / #690 Version Packages / #691 T266 / #692 Version Packages / #694 ラチェット 2 つとこの引き継ぎ）。**台帳の内訳は 未完了 0 / 判断待ち 0 / 保留 3 / 対応予定なし 2** ── こちらから進められる行は無い（T23 / T201 は上流待ち、T258 は再発待ち、T207 / T237 は対応予定なし）。<br>**■ この回の入り口は「WIM UI が AI 作成っぽく見える」という外部 AI の指摘**（ユーザーが持ち込み）。**1 件ずつ実物で確かめたら、大半は T250 / T251 / #674 / #675 で着地済み**だった（`Badge` / `Tag` / `Chip` の既定 intent、`Card` / `Stats` の既定 variant、`EmptyState` の揃え、`Stats.Trend` の色、`BentoGrid` の斜めグラデ、`Dashboard` の `columns` の選び方）。**残っていたのは 3 点**で、#689 で直した ── ①`BentoGrid` の列数が CSS に焼き付いていた（`columns` prop を足し、列数を超える `span` は丸める）②`InteractiveArea` に揃えの prop が無かった（`align` を足し、既定は `center` のまま）③**`Group` の `gap` / `Masonry` と `SimpleGrid` の `spacing` の既定が `16` の px 直書き**（トークン `"2xl"` へ）。**指摘そのものより、指摘を確かめる過程で出た穴のほうが大きかった**（次項）。<br>**■ 見つけた穴 1 件（T266・#691 で塞いだ）。** 上の③はどのガードにも映っていなかった。`check-hardcoded-values.js` は TSX も走査しているが、**TSX 側で見ているのは生の色だけ**で、px は SCSS 側でしか見ていない。しかもその px 検出は `\d+px` という**綴り**を探す作りなので、`gap = 16` のように**単位が後から付く**書き方には構造的に届かない。「Unannotated px hardcodes: 0」は、測っていないことの表示でもあった。`scripts/check-numeric-length-defaults.js` を足した ── 綴りではなく**値の流れ先**を見る（`` `${x}px` `` / `getSpacingValue()` / style の長さプロパティ / 間隔の prop へ転送）。**件数のベースラインを持たず 1 件ずつ同一行に注記させる**方式にした（件数で凍結すると lint-staged が部分集合しか渡さない経路で判定がぶれる＝`check:slop` のラチェットが素通りしていた穴と同じ形）。見つかった 6 件のうち `Divider` の `thickness = 1` は本物のトークン漏れで、SCSS のフォールバックを `var(--wim-border-width-thin)` にして直した（0.32.1 で出荷）。<br>**■ ラチェットを 2 つ締めた。** どちらもガード自身が「下げてコミットしてください」と出していた分で、緩いまま放置すると**その差分ぶんだけ新規の混入が隠れる**。MDX の生英語 43 → 42（外れたのは `Carousel.mdx` の 1 件だけと突き合わせで確認。母数は 294 ファイル全量で 8/28 の 287 から増えている）/ 選択の指針の同語反復 146 → 141（141 / 263 件。**母数もコメントに書いた**）。**両方とも故意に 1 件増やして赤になることを確認**してから下げた。<br>**■ 定期点検の本番経路を実証した（入り口 ① は片付いた）。** `workflow_dispatch` を `dry_run=false` で回し、**issue #693 が `maintenance` ラベル付きで立つ**ことを確かめた。**「月曜の cron が発火していない」ではなかった** ── ワークフローが main に着地したのは 2026-09-21 05:13 UTC（月）で、その週の枠（月 00:00 UTC）は**着地の 5 時間前に過ぎていた**。最初の自然発火は **2026-09-28 00:00 UTC**。次の回はそこで自動で立つことを確かめること（立たなければ、そのとき初めて cron を疑う）。<br>**■ この回の誤り 4 件。** ⓐ**「scheduled 実行が 1 件も無い＝おかしい」と報告した**が、曜日を数えていなかっただけだった（上記）。**日付の話は、曜日を実際に計算してから言う。** ⓑ**npm の `latest` が上がっていないと報告しかけた** ── 版指定は 200 なのに packument だけ古い。**別のキャッシュ層**なので `Cache-Control: no-cache` で取り直す必要がある（0.32.0 で実測）。ⓒ**新しいガードの最初の版が、検出したかった 3 件のうち 2 件を取りこぼしていた**（`Masonry` は 1 行にまとめた分解代入、`Group` は `<Flex gap={gap}>` へ渡すだけで file 内に単位が現れない）。`--probe` で過去のコミットに当てるまで気づかなかった。ⓓ`git commit -m "…"` の中のバッククォートがコマンド置換で食われ、識別子が 1 つ message から消えた（3 回目）。**そのうえ 4 回目を、この誤りを記録する作業そのものでやった** ── 「バッククォートが消える」「`replace()` の置換パターンが展開される」と書いてある memory を更新しにいって、両方とも踏んでファイルを壊した（値を掴む正規表現がエスケープされた引用符で止まり、description が途中で切れた）。**知識として持っていても、その場で文字列を組み立てるかぎり同じ形で踏む。長文は Write でファイルへ、既存ファイルの書き換えは Edit ツールで。**<br>**■ 次の入り口。** ①**2026-09-28（月）の定期点検 issue が自動で立つか**（本番経路は #693 で実証済みなので、見るのは cron だけ）②**定期点検 #693 の中身を回す**（Dependabot・ブロック中の依存）③**changeset の警告の様子見**（誤検出が出たら記録し、落とす形に上げるかをユーザーに諮る）。（<br>**その 100 以前の申し送り**は `docs/history/improvements-archive.md`。）
作業再開時はここから。**台帳（T / CI の表）には残っている行だけを置く** ── 状態が「済」になった行は `npm run improvements:archive` で `docs/history/improvements-ledger.md` へ移す（残っていると `check:improvements` が落ちる）。**新しい番号は `npm run check:improvements` が出す**（退避先の番号も数える。2026-09-21 の退避時に CI-11 の重複が見つかり、後の方を CI-12 に改番した）。

---

## 次にやるとよい順

**2026-09-23（その 101・終業時点）の順番**: ①**9/28（月）の定期点検 issue が自動で立つかを見る** → ②**#693 の中身を回す**（Dependabot・ブロック中の依存）→ ③**changeset の警告の様子見**（数週間。誤検出を記録する）。0.32.1 まで公開済み。台帳にこちらから進められる行は無い。

**着手前に読むもの**: タスクを済にしたら同じ PR で `npm run improvements:archive`。起票の番号は `npm run check:improvements` の「次に振る番号」（いま T267 / CI-13）。**docs を触ったら `npm run audit:docs` を丸ごと流す**（部分のガードだけでは乖離検査を通せない）。**VRT の撮り直しは `node scripts/vrt-diff-report.js <SHA>` で画素で仕分ける**。**出荷物（`src/` / `tokens/`）を変える PR には changeset を同梱する**（版を上げない変更は `npx changeset --empty`。無いと `changeset-reminder` がコメントする）。

（それ以前の「次にやるとよい順」は `docs/history/improvements-archive.md`。）

## 未着手の改善候補（2026-07-15 リポジトリ調査）

CI・テスト・監査体制は堅い（typecheck / coverage 80% / axe-core WCAG 2.1 AA / bundle-size / VRT / changesets 自動リリース、`npm audit` 0 件）。その上で見つかった残件。

### 実害あり（優先）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T270 | **キーボードのフォーカス表示が、light / dark のどちらかでほぼ見えない部品がある**（仕組み全体の問題） | 起票 2026-09-26（「見た目の AI slop は他にあるか」の調査で、生成 UI に多い「primary 15% の淡い 3px のにじみ」`--wim-shadow-focus-ring` を追って見つけた）。リポジトリの `scripts/lib/color.js` で面とのコントラストを測った: ① `--wim-shadow-focus-ring`（primary 15%）は **light 1.27 / dark 1.05**。これだけで合図していた箇所（ThreadList の会話項目・削除ボタン、ThemeToggle の segmented）は ① の PR で既定に戻した ② 既定の `--wim-shadow-focus`（白 2px ＋ primary 50%）は dark では内側の白が 11.55 で見えるが、**light では白い面に白の内輪が溶け、外側の primary 50% が 2.39**（フォーカス表示に求める 3:1 に届かない）③ ① のリングは入力欄など **12 部品**が使っていて、多くは「枠を primary に変える」合図と組み合わせている（全部品の組み合わせ方は 1 つずつは確かめていない）。対象（Input / InputBase / Textarea / OtpInput / PhoneInput / PromptInput / ChatUI / ModelSelector / SortableList / ImageCompare / ThreadList の新規ボタン / ThemeToggle のアイコンボタン）。この型は light では枠の色で見えるが、**dark は primary #055d87 と面 #393939 の比が 1.61** でほぼ見えない。④ 部品側が `box-shadow` を持つと base.scss の `:focus-visible` に**レイヤーで**負ける（ThemeToggle の選択中の項目はフォーカスしても何も出なかった。① の PR で直した）。**決めること**: フォーカス専用の色（`--wim-color-focus-outline` は今 primary と同じ）を dark で明るい色にするか、既定を `outline` 方式（2px 実線・offset 2px）へ寄せるか。直すと VRT のフォーカス状態と a11y の結果が動く **方針（ユーザー決定・2026-09-26）: 両方** ── dark のフォーカス色を明るくし、既定を outline 方式に寄せる。進め方は ②トークンと既定 → ③ガード → ④自前でフォーカスを書いている部品をカテゴリごとに寄せる。**② の実測**: 全 1075 ストーリーで Tab を最大 6 回当て、フォーカス中とフォーカスを外したときの見た目（要素・親 3 段・子孫 40）を変更前後で比べた（測れた停止点 2645）。outline に替えたことで消えたのは TreeView のルートだけで、`outline: none` を外して直した。前後とも表示が無い箇所は**以前からの欠陥**として ④ で直す: Audio / Video の要素そのもの（29）、NodeGraph / InteractiveGraph のノード（4）とエッジ（16。SVG の `<g>` なので box-shadow は元から描かれていなかった）。**計測の失敗 2 回**（記録）: 1 回目はストーリーの描画前に Tab を押していて 86% のストーリーが 0 件だった。2 回目は子孫を見ておらず、TreeView の項目（フォーカスは中のラベルに出る）を「表示なし」と数えた  **③ と ④ の色（2026-09-27）**: 部品が :focus / :focus-visible で自前に書く表示のうち、**42 ブロックが primary を直書き**していた（dark で 1.61:1）。`--wim-color-focus-outline` に機械的に置き換えた（light はフォーカス色 = primary なので見た目は同じ、dark だけ text-accent になる）。ガード `check:focus-indicator`（primary 直書き・消すだけ・淡い色だけ）を入れ、既存の違反は 0。消すだけの 5 件（Dialog / Drawer / BottomSheet のパネル・RichTextEditor の本文・Cascader のトリガー）は、表示を別の要素が持つことを確かめて注記した。**計測の注意**: Cascader は最初、フォーカス直後に透明で大きさ 0 の影（`rgba(0,0,0,0) 0 0 0 0`）しか変わらず「表示なし」に見えたが、トランジションの途中の値だった。止めて測ると InputBase の :focus-within が 2px の実線を出していた | **P2**（① #705 / ② #707 / ③ と ④ の色は PR 作成 / ④ の残り（Audio・Video の要素そのもの、NodeGraph のノードとエッジ、Checkbox・Switch の枠と輪の二重）は未着手） |

### npm 公開とセット（公開済み）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|

### 小さい掃除

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T269 | **`transition` が全プロパティを動かしている 65 箇所**（`transition: all` 31 / プロパティ名なし 34） | 起票 2026-09-26（T267 の調査の残り。最初は「Snackbar と Badge の 2 箇所」と書いたが、数えると 31 箇所、プロパティ名を書かない形（CSS の仕様で `all` と同じ）も含めると 65 箇所だった）。テーマや密度を切り替えたときに色・余白・幅までふわっと動く。生成された CSS によく出る書き方で、**静止画の VRT には映らない**。**方針（ユーザー選択）: ガードを先に入れ、既存分は `T269 で直す` の注記で凍結し、書き換えはカテゴリごとに小分けの PR にする**（書き漏らしたプロパティはアニメーションが消えるだけで VRT では拾えないため、1 本あたりの確認を小さく保つ）。① ガード: `check:component-slop` に `transition-all` を追加（1 行の宣言だけを見る）。`Transition` 部品の 2 件は汎用の遷移部品なので理由つきで残す。② 以降: 63 件をカテゴリごとに、動かすプロパティを列挙して書き換える。PR には書き換えたプロパティを一覧で載せる  **② の進め方（2026-09-27）**: 書き換えは「塗りのプロパティを一律に列挙」（color / background-color / border-color / box-shadow / outline-color / opacity。状態で transform / fill が変わる箇所は足す）。**状態で変わるものだけに絞らない理由**: トランジションは戻るときに静止状態の側の指定が使われ、状態の指定が別のブロック（Button の variant 側や親の状態）にあると拾い漏らす ── 絞ると「ホバーを外したときに色がパッと戻る」になる。余分に書いたものは動かないだけで害は無い。**レイアウト系（width / padding / height）は入れない**のが目的の本体。実測: Button は密度を切り替えると左の余白が 22.4px → 16px へ補間されていた（40ms 後に 22.08px）のが、書き換え後はすぐ 16px になる。テーマを切り替えたときに色がふわっと変わるのは、色を transition する以上残る。**form（18）を PR 作成**。残りは data-display 13 / navigation 11 / layout 8 / feedback・media・typography・_internal 13 | **P3**（① #704 / ② form は PR 作成・残り 45 は未着手） |

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
| T272 | **T267〜T270 で変えた挙動を説明している文書・翻訳が古いまま残っていた**＋**solid ボタンのホバーの差が小さい** | 起票 2026-09-26（ユーザーが AestheticsFamily の Audit ページで「浮き上がり、ガラス効果が強調されます」「Ambient Glow」に気付いた）。**古くなっていた説明（直した）**: Audit の `aesthetics_hover_me_desc`（浮き上がりはもう無い。light ではホバーでガラスがかえって透ける）/ `aesthetics_ambient_glow_*`（dark の影が primary の光彩になる、という**実装に無い機能**の説明。節ごと削除）/ `card_elevated_desc`（浮く）/ `chip_clickable_desc`（ジャンプする）/ `card_prop_interactive` と Card の JSDoc（ホバーのアニメーション）/ Effects ガイドの `effects_motion_out_back_desc`（ボタンのホバーに使え）・`effects_motion_spring_desc`（Accordion / Drawer に使え）・`effects_common_vars_guideline`（spring を勧め、変数名も `--wim-` 無しで誤り）/ `treeview_features_7`（すりガラス）/ `focus_ring_desc`（既定は `--wim-shadow-focus`）/ DESIGN.md の Lift・spring。**読み手に表示されない古いキー**（`alert_token_overlay_bg` / `alert_token_shadow`。どこからも参照されていない）は触っていない。**ホバーの差**: 静止とホバーの面どうしの比が約 1.2（l*0.9）で見分けにくかったので l*0.85（約 1.3）に。WCAG はホバーの見た目を求めていないので基準違反ではなく、使い勝手の調整。あわせて `check-contrast-scene` の実測台帳の鍵に**暗くする割合**を入れた（以前は 「地の色と文字色」 だけで、割合を変えても古い実測値 6.00 のまま緑を返した。l*0.85 の dark / danger の黒文字は Chromium の実測で 5.18） | **P3**（PR 作成） |
| T271 | **`Terminal` が既定で偽の Mac のウィンドウ飾り（赤・黄・緑の 3 つの丸）と、枠＋影の二重を持っていた** | 起票 2026-09-26（「ほかに AI slop のスタイルは無いか」の調査で、静止時の影を持つ部品 38 箇所を洗って見つけた）。押しても何も起きない macOS の信号ボタンの模倣が props で消せず常に出ていて、ページ内に置く部品なのに `border` と `shadow-md` を両方持っていた（composition.md「影で浮かせる面と枠で切る面を混ぜない」）。信号の丸は `showWindowControls`（既定 `false`）の opt-in にし、影を外して枠だけにした。見出しの帯（タイトル・コピー・クリア）は機能なので残す。あわせて form の `no_data` の en（"No Data"）を他の既定の文言（"No data"）に揃えた。**同じ調査で問題なしと判断したもの**: 文字の影（Lightbox のキャプションのみ）、字間を詰めた太字（0 件）、静止時の影の残り（浮く面か opt-in の variant）、Audio / Video の再生つまみの光彩（白いつまみを明るい地で見せるため）、既定の文言の定型文（利用者が文言を渡さないときの受け皿で、ライブラリは何が無いかを知らない） | **P3**（PR 作成） |
| T268 | **solid ボタンの静止時の光沢**（上から白 8% のグラデーション＋上辺 1px のハイライト） | 起票 2026-09-26（T267 の調査の残り。ユーザーの「進める」から）。T267 はホバーの動きと既定のすりガラスを外したが、solid の `Button` は**静止時にも** `background-image: var(--wim-glass-gradient)` と `var(--wim-inner-highlight)` を敷いていた ── 生成 UI の定番の質感で、面の色に意味を足していない。外すと `check-contrast-scene.js`（T214）が**もう乗っていない白を合成して測り続ける**（緑のまま、測っている対象が実物とずれる）ので、ガードは「Button が実際に敷いているか」を読み、敷いていなければ素の地で測るように直す（ホバーの実測台帳も素 6.00 / シーン込み 6.62 の両方を持つ）。両方の経路で鳴ることを差し込みで確認した。トークン（`--wim-glass-gradient` / `--wim-inner-highlight`）は公開面なので残す | **P2**（PR 作成） |

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

**`docs/rules/ci-and-guards.md` へ移した**（2026-09-21。CI・VRT・ガードで踏んだこと 6 節）。コマンド一覧は `AGENTS.md` の品質ゲート表、ベースライン PR の着地は `docs/rules/vrt-baseline-prs.md`、リリースは `RELEASING.md` が正本。

---
