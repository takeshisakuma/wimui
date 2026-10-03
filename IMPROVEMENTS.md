# WIM UI 改善リスト（継続用）

最終更新: 2026-10-04（その 105）（<br>**■ その 105（2026-10-03〜04）**: **外部の AI によるデザイン診断 2 回を、実装と実測で突き合わせて処理した**（#793〜#813、0.47.2〜0.47.8 を公開）。直したもの: 強制カラーで消えるフォーカス表示（1499 の停止点のうち 361 が消える・弱い → 0。#793 / #810）、プリセットで動かない角丸（#796）、選択・通知・Drawer・無効・押下の不揃い（#804）、ホバーの量（#806）、Link の下線（#807）、Blockquote の intent の色（dark で 1.01〜3.81。#801 / #811）、Tooltip（VRT に吹き出しが写っていなかった。#809 / #813）。**揃えないと決めた差は `DESIGN.md` の「揃えていない差（意図したもの）」に書いた**（#799 / #803）。E2E の flaky の正体（遅い runner でストーリーが作り直される）は #794 で止めた。足した道具: `measure:focus-forced-colors`（`--system` で実機）/ `check:radius-tokens` / `vrt/play-functions.e2e.spec.ts` / `vrt/story-remount.e2e.spec.ts`。**残りは下の「デザイン診断と a11y の実測の残り」（T293〜T298・CI-14）**。<br>**■ その 104（2026-10-02）**: **T291（PivotTable の列の折りたたみ）が main に入り（#781）、0.47.0 を公開した**（#782。タグ・GitHub の Release・npm の `latest` まで実物で確認。npm の反映は約 3 分）。**行の開閉の prop を改名した**（`expandedValues` → `expandedRowValues` ほか 2 つ。破壊的変更）。**T258 の頻度を測った**（何も変えない update を 5 回。compare が落ちる絵は 0 枚。記録は T258 の行の末尾）。**台帳の内訳は 未完了 0 / 保留 2（T258・T23）/ 対応予定なし 2**（CI-13 は同日の終わりに起票し、翌日に済んだ）。**この回の誤り 3 件**: ⓐローカルの a11y が古いビルド（`storybook-static/index.json`）の一覧を読み、新しいストーリーを見ないまま「12 通り緑」と出た（ビルドし直して 14 通り）ⓑ**ランの完了を待つループが、一覧が空で返った瞬間を「全部終わった」と数えた**。5 本の update が実行中のまま集計して「書き換え 0 枚」と出た（0 を信用せずランを見直して気づいた。待つときはラン ID を名指しし、件数も数える）ⓒ**「閾値を超えた」という言い方が 2 つの閾値を混ぜていた**（仕分けスクリプトのノイズの定義と、compare が落ちる 50 画素。超えていたのは前者だけ）。**次の入り口（同日のうちに 3 つとも済んだ）**: ①PivotTable の見た目の判断 → **ユーザーが OK とした**（T279 の 5 点 ＋ #781 の 4 点）②T23 の実測 → 済み・保留のまま（T23 の行の末尾）③`anchor--default` の印の原因 → 済み（#784。下の「2026-10-02 の続き」）。**CI-13 は 2026-10-03 に済んだ**（#787 でワークフロー、続く PR で `E2E` の必須化。main の必須チェックは 3 つ）。**changeset の警告の様子見は 2026-10-03 に締めた**（12 日・78 本を振り返り、誤検出 1 件の判定を直した。T292: ユーザー判断で、ジョブを落とす形に上げた。必須チェックにはしていない）。**0.47.1（Anchor の修正）は公開済み**（タグ・GitHub の Release・npm の `latest` まで実物で確認。反映は約 3 分）。<br>**■ その 103 の時点の引き継ぎ状態**: **開いている PR は、この引き継ぎの PR だけ。T279（PivotTable）の 4 本が全部 main に入った**（#769 静的な描画 / #771 行の折りたたみ / #772 見出しの固定 / #776 行の仮想化）。ほかに #773（T290・Video のタイマー）・#775 / #777（T258 の切り分けの記録と訂正）・#770 / #774 / #778（Version Packages）。**0.44.0 / 0.45.0 / 0.46.0 の 3 版を公開した**（0.44.0: PivotTable の静的な描画 / 0.45.0: 行の折りたたみ・見出しの固定・Video の修正 / 0.46.0: 行の仮想化）。**台帳の内訳は 未完了 1（T291）/ 保留 2 / 対応予定なし 2**。<br>**■ 公開の確認（3 版とも実物で確認済み）**: タグ・GitHub の Release・npm の `latest` まで見た。**npm の `latest` は 0.46.0**（2026-10-01 16:35 UTC・packument と `dist-tags` の両方で確認）。**この日の npm は反映が遅かった**: 0.44.0 は約 3 分だったが、**0.45.0 は公開ジョブの成功（15:43 UTC）から約 33 分**（registry の記録で 16:15）、**0.46.0 は約 24 分**（16:08 → 16:31）。`latest` が動いたのは 0.46.0 が取れるようになったあと（0.45.0 が取れても `latest` は 0.44.0 のままだった）。npm の障害情報は出ていなかった。**これまでの最長は 8 分だったので、404 が 10 分続いても壊れたとは限らない。**<br>**■ PivotTable で、設計の記録から変えたこと（どれも実物で測って決めた）。** ①`scope="colgroup"` は最上位の列グループだけ（`colgroup` は入れ子にできない）②**外側の器は Table のものを使わない** ── `container-type: inline-size` のせいで、幅が中身で決まる置き場で 848px の表が 180px に潰れた。1 列の grid（`minmax(0, 1fr)`）にした ③開閉ボタンは山形と見出しの文字を 1 つのボタンに包む（山形だけだと、ボタンの名前が `headers` で読まれる見出しに混ざる）④**罫線は `border-collapse: separate`**（collapse のまま固定すると、線が固定したセルと一緒に動かない）⑤行見出しの列の固定は、列が見えている幅の半分以下のときだけ（閾値は決め打ち）⑥仮想化は prop で明示・祖先の名前は行見出しの中に隠して入れる・列幅は広がる方向にだけ動かす・フォーカスの行は描いたまま（4 点ともユーザー判断）。詳しい経緯と実測は退避先（`docs/history/improvements-ledger.md` の T279）。<br>**■ 見つけた穴。** ⓐ**T290**: Video のフックがアンマウント後もタイマーを残し、テストが全部通っているのに Unit Test が exit 1 になった（時間次第で出たり出なかったり）。#773 で直した ⓑ**`release` の承認待ちが、この日 2 回、後ろの Release を止めた**（0.44.0 で 1 時間 20 分・0.45.0 で 1 時間 40 分。どちらも、止まっていることに気づいて承認した）ⓒ**ベースラインを触る PR の update は、毎回 48〜85 枚の無関係の絵を書き換える**（うち 3〜5 枚は閾値超え）。4 本とも、仕分けて PR が持つ絵だけを残し、ほかは main 版へ戻した ⓓ`wimui/data-display` の予算を 80 → 84 kB に上げた（PivotTable で +3.62 kB。次に当たりそうなのは UMD・余裕 5.04 kB）ⓔ**`vrt/*.e2e.spec.ts` は CI で走らない**（ワークフローが無い。`pivottable.e2e.spec.ts` もローカルでしか走っていない）。<br>**■ この回の誤り 7 件。** ⓐ**axe の指摘の原因を、測る前に決めて直した**（見出し行の `tr` の地色だと思って消したが変わらず、SCSS のコメントに「実測」と書いたあとで外れと分かった）。axe に CSS を 4 通り当てて測り直した ⓑ**「4 回続けて同じ」を「毎回同じ」と報告した**。無関係の 3 枚が 4 回同じ画素数で動いたので「確定」と書いたが、5 回目で崩れた。**しかもその言い過ぎが #775 で main に入り、訂正は別の PR（#777）になった** ── マージ済みの PR のブランチへ訂正を push し、main に入っていないことをユーザーに指摘された ⓒ**PR の状態を確かめずに「マージ待ち」と報告した**（既にマージ済みだった）ⓓ**`audit:docs` が落ちているのに、コマンドを連結していて push まで進んだ**（原因はローカルの docgen が古かっただけで中身は無事だったが、手順としては誤り）ⓔ**描画時間の測り方**: 全行を描く版が 15 秒と出たが、13 秒は Storybook の a11y アドオン（axe）だった ⓕ**列幅を切り捨てて覚え、1px 未満ずつ縮ませた**（122 回のスクロールで 8 回）ⓖ**シェル経由の書き換えで正規表現のバックスラッシュが 2 回落ちた**。片方は `\s*` が `s*` になり、0 文字に一致してテストが通り続けていた。<br>**■ 次の入り口。** 冒頭の「次にやるとよい順」（10/01 夜）を見ること ── ①PivotTable の見た目の判断（ユーザーの判断。4 本とも保留のまま着地させた）②無関係の絵が動く頻度を数える（何も変えない update を数回流す）③T291（列の軸の折りたたみ。着手前に決めることが 4 つ）④T23 の実測（`experimental_storybookAi`）。（<br>**その 102 以前の申し送り**は `docs/history/improvements-archive.md`。）
作業再開時はここから。**台帳（T / CI の表）には残っている行だけを置く** ── 状態が「済」になった行は `npm run improvements:archive` で `docs/history/improvements-ledger.md` へ移す（残っていると `check:improvements` が落ちる）。**新しい番号は `npm run check:improvements` が出す**（退避先の番号も数える。2026-09-21 の退避時に CI-11 の重複が見つかり、後の方を CI-12 に改番した）。

---

## 次にやるとよい順

**2026-10-02**: **T291（PivotTable の列の軸の折りたたみ）を実装した**（行の prop の改名を含む。記録は退避先の T291）。下の ③ は済み。**PivotTable の見た目の判断に 3 点が加わった**（ユーザーの判断）: 畳んだ見出しの右揃え・列を畳むと残りの列が器の幅まで広がって見出しが動くこと（幅 1280px で 115px）・見出しの段が 1.6px ずつ高くなったこと。残る順番は ①見た目の判断 → ②T258 と同じ形の絵の頻度 → ④changeset の警告の様子見。**②の 6 回目の標本**（この PR の update・71 枚書き換え、うち PivotTable 以外が 57 枚）: 閾値を超えた無関係の絵は `audio--with-caption` 833 画素 / `interactivegraph--default` 116 / `patterns-hiring--default` 18 / `stepper--custom-icons`（dark）2。`audio` の 833 と `stepper` の 2 は 1〜4 回目と同じ値、`interactivegraph` の 116 は 5 回目と同じ値。57 枚は main 版へ戻した。**同日のうちに ② を測り終えた**（何も変えない update を 5 回。T258 の行の末尾）。**0.47.0 を公開した**（T291 と改名を含む）。残る順番は ①見た目の判断 → T23 の実測 → `anchor--default` の印の原因 → changeset の警告の様子見。

**2026-10-01 夜の順番**: この日に **T279（PivotTable）の 4 本（#769 静的な描画 / #771 行の折りたたみ / #772 見出しの固定 / 4 本目＝行の仮想化）** と T290（Video のタイマー・#773）が済み、**0.44.0 を公開した**（PivotTable の 1 本目まで。タグ・GitHub の Release・npm の `latest` まで実物で確認。README の ScheduleView の行（T289）もこの版で npm のページに出た）。①**PivotTable の見た目の判断**（4 本とも、まとめた見出しの中央揃え・グループの境目の縦線・小計の行の太さ・山形の位置と色・行見出しの列の固定をやめる閾値を、判断を保留したまま着地させた。**ユーザーの判断**）→ ②**T258 と同じ形の 3 枚**（`audio--with-caption` / `interactivegraph--default` / `stepper--custom-icons`。何も変えない update を含む 4 回は同じ画素数で動いたが、5 回目（#776）では顔ぶれも画素数も違った ── 「毎回同じ」ではない。まず、何も変えない update を数回流して、どの絵がどれだけの頻度で閾値を超えるかを数える）→ ③**T291**（PivotTable の列の軸の折りたたみ・P3）→ ④changeset の警告の様子見。待ち: T23（上流待ち）。**運用**: Version PR が出てこないときは、`release` 環境の承認待ち（`status=waiting`）の Release のランが concurrency の枠を塞いでいないかを先に見る（0.42.0 で 5 時間、**0.44.0 でも 1 時間 20 分**残って後ろを止めた）。**ベースラインを触る PR は、update のあとに無関係の絵を main 版へ戻す**（この日の 3 本とも、撮り直しの 50〜85 枚が PR と無関係だった。`node scripts/vrt-diff-report.js <SHA>` で仕分け、PR が持つ絵だけを残す）。

**2026-10-04**: 次にやるなら **T293（開いた姿の点検の残り）** が先。13 部品に足したら 4 部品で serious の違反が出たので、Dialog や CommandPalette にも同じ割合で出ると見ている。次が T295（小さい）と T297（ガード）。T294 と T298 は判断待ち。強制カラーの実機確認（Windows のコントラスト テーマで Tab を押して見る）は人の手が要る ── 道具の `--system` で測れるのは「outline の線種が出ているか」までで、色が枠と同じかどうかは画像を見ないと分からない。

**着手前に読むもの**: タスクを済にしたら同じ PR で `npm run improvements:archive`。起票の番号は `npm run check:improvements` の「次に振る番号」（いま T293 / CI-14）。**docs を触ったら `npm run audit:docs` を丸ごと流す**（部分のガードだけでは乖離検査を通せない）。**VRT の撮り直しは `node scripts/vrt-diff-report.js <SHA>` で画素で仕分ける**。**出荷物（`src/` / `tokens/`）を変える PR には changeset を同梱する**（版を上げない変更は `npx changeset --empty`。無いと `changeset-reminder` がコメントし、ジョブが赤になる）。

**2026-10-02 の続き（T258 の `anchor--default`・T23）**: **`anchor--default` の印が付いたり付かなかったりする原因を特定して直した。** Anchor は、現在地の判定と印の位置の計測を描画のあと（effect）でやっていたので、「現在地のリンクが無い」「リンクは現在地だが印が無い」という途中の姿が 1 フレームずつ描かれていた（実測: VRT と同じ手順で 80 回開き、66 回で印の無いフレームが 1〜3 枚）。Storybook は起動直後にストーリーを作り直すことがあり（80 回中 58 回）、作り直しが終わってから撮影までは、短い回で 41ms しか無かった。印だけが無い絵は差が 44 画素で、Playwright の安定判定（連続する 2 枚が `maxDiffPixels: 50` 以内）を通り抜ける（T258 と同じ仕組み）。**直し方**: 2 つの処理を描画の前（layout effect）へ移した。同じ計測で、途中のフレームは 80 回とも 0。`vrt/anchor.e2e.spec.ts` を足した（修正前のコードで落ちることを確認。ほかの e2e と同じく CI では走らない）。**確かめていないこと**: CI の撮影が実際にそのフレームに当たったところは見ていない（ローカルの 80 回では、撮影の時点で印が無かった回は 0）。測ったのは、途中の絵が描かれること・その差が 44 画素であること・直したら描かれなくなること。T258 の行の「残る一手」はこれで済み。**T23 は実測して、保留のままにした**（T23 の行の末尾）。

（それ以前の「次にやるとよい順」は `docs/history/improvements-archive.md`。）

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
| T23 | addon-mcp 側の底上げ（合成ルールを届ける・要調査） | addon-mcp 実測で、`get-storybook-story-instructions` は**汎用の Story 作法＋a11y のみ**で WIM の anti-generic 合成ルールや CSS 契約を含まないと判明。エージェントが addon-mcp 経由で作業する場合にもこれらが届くよう、Storybook の instructions/docs に **WIM 合成ルール要約を載せられるか調査**。**addon の設定余地は要調査**（内蔵 instructions テキストの上書き可否が不明。代替: ①合成ルールを docs entry（MDX）化して `list-all-documentation` / `get-documentation` に拾わせる ②preview 側で注入）。llms.txt と内容が重複するため**単一ソースから両方生成**する等で二重管理を避ける方針を推奨 | **保留（上流ブロック）**（2026-07-25 調査。`@storybook/addon-mcp@0.7.0` を解析＋実機検証。**結論: 現行版では addon-mcp 経由の"確実な"配信は不可**。①**ライブ MCP サーバ（`/mcp`）の instructions はハードコード** — `buildServerInstructions()` を返す getter（`dist/preset.js:2010-2019`）で `existingMetadata` を無視＝第三者拡張不可。②`experimental_storybookAi` フック（`joinInstructions(existingMetadata, 内蔵)`）は存在するが**別系統メタデータ用**でライブサーバに反映されず。自前 preset を addon-mcp の前に置いて実機検証→ module は load されるが `/mcp` initialize の instructions に WIM は入らなかった。③**docs ツール（`list-all-documentation`/`get-documentation`）は動作**し MDX を surface（T26 Presets doc も列挙）が、`get-documentation` は **MDX ソースを返す**（`<T>` 未展開）＝リテラル英語が必要で `check-mdx-hardcoded` と衝突、かつ「エージェントが docs ツールを呼べば」の**日和見的**配信。**判断**: 注入は見送り、**llms.txt を主配信チャネルとして維持**（T25 で入口ページ整備済）。**再着手トリガー**: `@storybook/addon-mcp` が server-instructions 拡張 API を提供したら（Dependabot の bump / changelog で検知）。※`docs/feature-watchlist.json` は web-features 専用（非 web 機能の id は `check-feature-watchlist.mjs` がエラー）のため addon-mcp はそこに載せない。調査で作った preset/single-source は機能しないため全て revert 済（ツリーはクリーン））<br><br>**2026-08-07 に再確認。ブロッカーは解消していない。** npm の `latest` は 2026-07-25 の調査時と同じ **0.7.0** のまま。加えて **`10.6.0-alpha.4`（2026-08-03 公開）も中身を確認した**が、ライブサーバの `instructions` getter は `buildServerInstructions({ devEnabled, testEnabled, docsEnabled, changeDetectionEnabled, moduleGraphSupported, reviewEnabled })` と**内部のフラグしか渡しておらず、`existingMetadata` を受ける口が無い**（`dist/preset.js:2238`）。`buildStorybookAiMetadata` 側の `joinInstructions(existingMetadata, …)` は残っているが、これは調査時に「別系統でライブサーバに反映されない」と実機確認済みの経路。<br>**運用の注意が 1 つ増えた**: 版番号が `0.7.0` → `10.6.0-alpha` に切り替わっている（Storybook 10.x の版に揃える**改番**）。再着手トリガーは Dependabot の bump で検知する設計だが、**この改番は major の PR として来る**ので、`0.x → 10.x` を見たときに「破壊的変更」ではなく改番だと分かる必要がある。**見るべきは版番号ではなく `preset.js` の `instructions` getter が外から差せるようになったかどうか。**<br>**2026-09-28（10.6.0・定期点検 #731）: 一部だけ動いた。** 開発サーバの MCP の getter は閉じたままだが、`experimental_storybookAi` プリセットが新設され、addon-mcp は前のプリセットの instructions を `joinInstructions` でつなぐ。読むのは Storybook の CLI 側の MCP。次の一手は、`.storybook/main.ts` からこのプリセットで WIM の合成ルールを足し、CLI の MCP の instructions に出るかを実測すること（詳細は `MAINTENANCE.md` の 2.）。<br>**2026-10-02: 実測した。届くのは非推奨の命令 1 つだけなので、採らない（保留のまま）。** `.storybook/` に `experimental_storybookAi` を返すプリセットを置き（addon-mcp の前）、印の文言を足して、Storybook の CLI の出力を 1 つずつ見た（10.6.0）。**出たのは `storybook ai --help` だけ**で、これは環境変数 `STORYBOOK_FEATURE_AI_CLI=1` を付けたときにしか設定側の命令一覧を出さず、説明に「deprecated — see `storybook skills`」と書かれている。**後継の `storybook skills`（`--all` / `stories` / `write-story`）と `storybook tools --help` には出ない**（どちらも内蔵の文面だけ）。CLI のコードで `presets.apply` が読む AI 用のフックはこの 1 つだけで、skills の文面を足す口は無い。**開発サーバの MCP（`/mcp` の `initialize`）にも出ない**（実機で確認。getter は 10.6.1 と 11.0.0-alpha.1 でも `buildServerInstructions` の結果だけを返す）。試したプリセットは残していない。**再着手の条件を置き換える**: ①`storybook skills` か開発サーバの MCP が、外から足した instructions を読むようになったとき（見るのは `storybook/dist/bin/core.js` の skills の組み立てと、addon-mcp の `get instructions()`）②`storybook ai` が非推奨でなくなったとき。 |

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
| T207 | **公開している Storybook は、検索エンジンから見ると中身が 1 文字も無い** | **対応予定なし**（2026-09-20 ユーザー判断） | 起票 2026-08-17（ユーザーの「WIM UI が知られていないので検索に載せたい」）。実測: `https://takeshisakuma.github.io/wimui/` の `index.html` は **`<title>` が `storybook - Storybook`**、description も canonical も OGP も無い。**`<body>` は 1,853 バイトで中身は `window['FEATURES']` の JS だけ** ＝ JS を実行しないクローラが読めるテキストは 0。**【2026-08-22 追記】安い半分は着地した**（#500 / #502）── `<title>` / description / canonical / OGP 一式 / `robots.txt` / `sitemap.xml`（288 URL）/ OG 画像（1200×630）。公開 URL で実物を確認済み。**ただしこの行の冒頭にあるとおり、これは効く順の ④ である。** ①知見の記事 ②英語で出す ③比較記事・awesome 系への掲載 が先で、**メタ情報だけで認知は増えない。**<br>**`robots.txt` は `iframe.html` を塞いでいない**（下の計画とは逆）── **静的ページがまだ無いので、いま塞ぐとクローラが読める本文がゼロになる。** 塞ぐのは静的ページを置いて canonical をそちらへ向けたあと。<br>**構造の半分を作る前に、まず効果を測ること** ── **数週間おいて `site:takeshisakuma.github.io/wimui` の索引数を見る。** sitemap も robots.txt も 2026-08-22 に初めて置かれたので、それ以前とは比較にならない。**Googlebot は JS を実行するので `?path=/docs/…` まで辿れる可能性がある**（辿れていれば静的ページの生成は不要）。測る前に作るのは投機。<br>**【2026-09-12 追記】待っても測れないことが分かった。実測は 2 つ。**<br>**① 計測器が無い。** `site:takeshisakuma.github.io/wimui` の索引数はエージェントからは取れない ── WebSearch は `site:` 演算子を無視して無関係な結果を返し、Bing は検索結果ですらないページ（算数サイト 10 件）を返し、DuckDuckGo は CAPTCHA。**どれも「数字が出たように見えて別のものを読んでいる」型**なので数字として採らない。Search Console の検証ファイルも meta もリポジトリに無い＝**正しい計測器が未接続**。数えるなら人がブラウザで 1 回打つか、Search Console を繋ぐ（後者なら「Googlebot が `?path=` を辿れているか」も同時に分かる）。<br>**② そもそも増えようがない（こちらが本題）。** sitemap の URL は **288 → 295 に増えている**が、並んでいる `?path=/docs/…` は**すべて同一の `index.html` を返し、その canonical は `https://takeshisakuma.github.io/wimui/`（ルート）**。`?path=` はクエリ文字列なので配信されるファイルが変わらず、canonical は `.storybook/manager-head.html` に**ルート固定で直書き**、**実行時に書き換える処理はどこにも無い**（grep 済み）。**sitemap と canonical が逆を向いている** ── Google は宣言された canonical に従って重複を統合するので、295 本を送っても索引され得るのは実質ルート 1 ページで、**これは時間の経過では変わらない**。「数週間おいて数える」は、この構造のままだと『増えていない』以外の結果が出ない。**したがって待ちではなく、canonical を直す（＝下の「やるなら中身」＝部品単位の静的ページを置き canonical をそちらへ向ける）か、やらないかの二択。**<br>**なお `<title>` / description / canonical / OGP 一式は Storybook 10.6.0（#594）でも無事**（公開 URL で確認）。本文テキストは 0 文字のままで、読めるのは HTML コメントだけ。<br>本文は `iframe.html?viewMode=docs&id=…` という**別ドキュメント**に描画され、共有される URL（`/?path=/docs/...`）側には存在しない。`robots.txt` も `sitemap.xml` も無く、`?path=` はクエリパラメータなので **1,065 ストーリーが `/` 1 ページに正規化される**。<br>**npm keywords（9 個）・GitHub topics（10 個）・description は既に整っている** ── 足りないのは metadata ではなく**クローラが読める本文と外からの言及**。<br>**2026-09-20 のユーザー判断: 対応予定なし。** 残っているのは「部品単位 約 200 枚の静的ページ生成 + canonical の付け替え + 生成物の鮮度ガード」で、**P3 としては重い**（鮮度ガードまで込みで 1 つの仕事。`check:llms` でリリース PR を構造的に詰まらせた #116 の前科がある）。**効く順の ①知見の記事 ②英語で出す ③比較記事・awesome 系への掲載 が未着手である以上、④ であるここを先にやる理由が無い。**安い半分（`<title>` / description / canonical / OGP / `robots.txt` / `sitemap.xml`）は #500 / #502 で着地済みなので、**ここで止めても後退はしない**。<br>**判断が変わる条件**: ①〜③ を実際にやって外からの言及が増え、**着地先（docs ページ）が検索から読めないことが足かせだと測れたとき**。そのときは上の「やるなら中身」の手順ごと再評価する ── ただし**測る前に作るのは投機**なので、先に Search Console を繋ぐこと（`site:` の索引数はエージェントからは取れないと実測済み）。 | **対応予定なし（2026-09-20）。単体では認知は増えないので、優先順位を間違えないこと。** 効く順は ①**知見の記事**（告知ではなく。素材は既にリポジトリの中にある）②**英語で出す**（読者母数が桁違い。ライブラリも docs も既に英語対応）③**比較記事・awesome 系への掲載**（検索する人はライブラリ名ではなくカテゴリで探す）④ここ。実測: Qiita の告知記事は公開済みで **1 か月 500 PV**（告知 1 本の普通の数字＝形式と回数の問題であって、SEO を足しても桁は変わらない）。<br>**やるなら中身**: `/docs/<component>.html` を**部品単位（約 200 枚。ストーリー単位 1,065 枚にはしない ── 薄いページの量産になる）**で生成し、見出し・説明・Props 表・コード例を静的 HTML で置き、canonical をそこに向ける。`sitemap.xml` も生成し、`iframe.html` は `robots.txt` で塞ぐ。<br>**書く文章はゼロで済む**: `public/llms-full.txt`（223KB の全文）・`src/data/docgen_*.json`・`components.json` を流し込むだけ。<br>**着手条件（重要）**: **生成物の鮮度ガードをセットで作る**こと。同じ内容の 2 つ目のレンダリングは放置すると腐るし、このリポジトリは既に `check:llms` でリリース PR を構造的にマージ不能にした前科がある（#116）。生成 → ガード → リリース手順との噛み合わせまでを 1 つの仕事とする。 |
| T237 | **スクロールし始めた最初の 1px で、固定列が 0.5px だけ左にずれる** | **対応予定なし**（2026-08-30 ユーザー判断） | 起票 2026-08-30（ユーザーの報告「スクロールさせたときに左端がガクッとなる」）。**再現も原因も代償も測ってある。**<br>**再現**: スクロール量を 0 → 40px まで **1px ずつ**進めて sticky 列の左端を記録すると、取る値は **17.5 と 17 の 2 つだけ**で、**動くのは `scrollLeft` 0 → 1 の一度きり**（−0.5px）。以降 40px まで動かない。選択列・左固定列とも同じ。<br>**原因は T234 と同じ半画素。** 止まっているときは `border-collapse: collapse` の外枠の半分ぶん内側にいて 17.5、スクロールが始まると sticky が `left: 0` に貼り付いて 17 になる。**T234（境界に背面が透ける）と同じずれの表と裏。** | **`border-collapse: separate` にすると消える**（左端が 17 で固定・動いた回数 0。実測）。**ただし罫線が 1px → 2px に太る**（隣り合うセルが互いに描いて重ならないため。実測）。**T236 で Table を 1px 側に寄せた直後なので、これを採ると逆行する。**<br>採るなら **separate ＋ セルの罫線を片側だけに減らす**（例: 右と下だけ）まで込みで、Table / DataGrid の全 variant（striped / bordered / fullWidth / sticky / card）を通して確かめること。**VRT のベースラインは大きく動く。**<br>**2026-08-30 のユーザー判断: いまは採らない**（`collapse` のまま）。透けは T234 で塞いであり、ガクッは**スクロール開始時に一度 0.5px ずれるだけで、内容が読めてしまう類ではない**ため。<br>**2026-09-20 に状態列を「対応予定なし」へ移した**（判断は 2026-08-30 に済んでいるのに、`check:improvements` の未完了に数え続けていたため）。**判断が変わる条件**: Table / DataGrid の罫線方針を `separate` 前提で引き直すとき ── つまり **T236 で 1px 側に寄せた判断を見直すとき**。そのときは上の「採るなら」の手順（全 variant の通し確認と VRT ベースラインの更新）ごと再評価する。 |
| T258 | **`update` が撮ったベースラインを、同じ head の `compare` が再現できない（`skeleton--wave-animation`）** | **保留**（再発待ち。ⓐを #627 で採用済み・2026-09-19。根の原因は Playwright の安定化判定で、この repo では消せない。再発したときの手順は本文の末尾） | 起票 2026-09-19（#619 で踏んだ）。RadioGroup のラベルを直しただけの PR で、ベースライン更新が `light-…-skeleton--wave-animation` を書き換え、**同じ head の compare がそれを 64 画素で拒否した**。<br>**ジッタではない。** 再実行しても **2 回とも同じ 64 画素**だった。`vrt/nondeterministic-stories.js` が `video--rounded` で記録しているとおり**値が動くのがジッタの定義**で、ここは動いていない。つまりランダムさではなく、**update 側の撮影だけが再現性のある外れ値**になっている。<br>**除外リストに足すのは誤った処方。** wave は素の CSS アニメーション（`animation: skeleton-wave 2s var(--wim-easing-emphasized) infinite`）で、Playwright の `animations: "disabled"` が止められる側。除外リストの顔ぶれ（動画・キャンバス・JS 駆動）とは種類が違ううえ、足すと**そのストーリーは以後 CI が何も見なくなる**（ベースライン 0 枚の問題）。<br>**当座の処置**: #619 では触っていないベースラインを main 版に戻して緑にした。<br>**次に確かめること**: ①update ジョブと compare ジョブでシャードの割り当てが違い、**直前に撮ったストーリーの状態が残っている**のではないか（同じ絵を撮る順番が違う）②`animations: "disabled"` が `infinite` のアニメーションをどの時点で固めるか③64 画素が画像のどこにあるか（波の帯の位置なのか、縁のアンチエイリアスなのか）を pngjs で出す。**①を先に見ること** ── 順番依存なら他のストーリーにも同じ形が潜んでいる。<br>**2026-09-19 に原因を特定した（Playwright の実装を読んだ）。**<br>**まず自分の説を 1 つ取り下げる**: 「`--update-snapshots=all` は撮り直しが働かず最初の 1 枚が凍結される」は誤り。両モードとも安定化ループを回す。<br>**本当の原因は、安定化の判定にアサーションと同じ許容差が使われていること。** `playwright/lib/matchers/expect.js:12601-12620` が `maxDiffPixels` / `maxDiffPixelRatio` / `threshold` を `expectScreenshotOptions` に載せ、`playwright-core/lib/coreBundle.js:22766-22790` の安定化ループが**その同じ options** で「直前の 1 枚」と比べる（`areEqualScreenshots(actual, previous, previous)`）。つまり**「安定した」は「直前の 1 枚と一致」ではなく「直前の 1 枚と 50 画素以内」**。<br>**これで観測が全部説明できる**（この repo は `threshold: 0.05` / `maxDiffPixels: 50`）: ①update は連続 2 枚が 50 画素以内になった時点で止まり、**その時に手にしていた 1 枚**を書き込む ②絵が 50 画素より広い帯の中を揺れる部品では、update は**帯のどちら側で止まってもよい** ③compare も同じ規則で安定化するので**帯の反対側**に着地しうる ④差が 50 を超えると落ちる。**「2 回とも同じ 64 画素」だったことも説明が付く** ── 各実行の中では安定しており、帯の端の位置は再現するから。ジッタ（値が動く）ともアニメーションの撮り遅れとも違う**第 3 の形**だった。<br>**副産物（compare 側の非対称）**: `const expectation = options.expected && isFirstIteration ? options.expected : previous;` ── **compare は 1 枚目がベースラインと一致したらその場で break し、安定化を 1 度も通らない。** つまり compare が緑のとき、その絵は「安定した絵」とは限らない。update は必ず 2 枚以上撮る。<br>**`will-change` 仮説は外れだった**（#625 で実測）。注入に `will-change: auto !important` を足すと **222 枚（111 ストーリー × 2 テーマ）が動く** ── 部品が書いた `will-change` だけでなく Floating UI がインラインで当てている分まで消えるため、Tooltip / Popover / Dropdown / Drawer / Dialog や Patterns 28 枚に波及する。**直る対象は 1 枚**なので採らない。#625 はマージせず記録として残す。<br>**処方の候補（未判断）**: ⓐ帯の広い部品を**本当に静止させる**（`skeleton--wave-animation` なら `.wave::after` を撮影時に非表示にする等。対象が狭い）ⓑ`maxDiffPixels` を下げる（安定化も厳しくなるが、検知したい信号は 139〜176 画素なので余地はある。ただし全体に効く）ⓒ何もせず、落ちたら触っていないベースラインを戻す運用を続ける（今回 #619 でやったこと）。<br>**処方はⓐ（部品側で 1 行外す）を採った（#627）。** `skeleton.module.scss` の `.wave::after` から `will-change: transform` を外しただけ。update → compare を 1 往復させて実測:<br>**① compare（旧ベースライン）**: 1 枚だけ赤（`light-…-skeleton--wave-animation`・126 画素）。他の Skeleton 6 ストーリーにも他部品にも波及せず。**② update**: ベースライン更新（112 ファイル書き換え。**変更由来は 1 枚**で、残りは雑音の床＝T253 の再現）。**③ 再 compare**: **4/4 緑**。2 回とも同じ 64 画素で拒否していたものが一致するようになった。<br>**仮説と処方を分けて記録する。** `will-change` が効いていたのは正しかったが、#625 で試した**処方**（撮影時に `will-change: auto !important` を全体注入）が誤りで、**222 枚**が動いて直る対象は 1 枚だった（Floating UI がインラインで当てている分まで消えるため）。同じ仮説でも、部品側でやれば **222 → 1**。<br>**根の原因は消えていない。** 安定化判定が `maxDiffPixels` を継ぐのは Playwright 側の性質で、今回やったのは**帯を狭めて 50 の中に収めた**こと。**帯の広い別の部品で同じ形は再発する。**<br>**再発したときの手順**（ⓒを運用の既定として残す）: ①落ちた画素数が実行間で**動くか**を見る ②動かないならこの形 ── **除外リストに入れない**（再現する差に蓋をすることになる） ③その PR が触っていないベースラインなら **main 版に戻す**（#619 でやったこと） ④その部品を本当に静止させられるなら部品側で直す（#627 でやったこと）。<br>**ⓑ（`maxDiffPixels` を下げる）は採らなかった。** 安定化ループは「**連続する 2 枚**が許容差以内」で止まるので、許容差を下げても**1 点に収束させる力は無い** ── 確率は下がるが仕組みは残る。一方でコストは全ストーリーに及ぶ（雑音の床は実測で変化画素 17 まで見えており、50 → 25 だと余裕が 1.5 倍しかない）。**仕組みを消さないのに repo 全体のリスクを上げる**ので割に合わない。 | **「同一コミットで update → compare が落ちる」は、非決定の証拠であると同時に、パイプラインの欠陥の証拠でもある。** 除外リストはランダムなものを外すための道具なので、**再現する差を外すと欠陥に蓋をする**。2 回測って値が動かなかったことが、その 2 つを分けた。<br>**2026-10-01: 同じ形が別の 4 ストーリーで 2 回続けて出た。** #769 と #771 の update（別々のコミット・どちらも PivotTable しか触っていない）で、閾値を超えた無関係の絵が**同じ顔ぶれ・同じ画素数**だった ── `light-…-audio--with-caption` 833 画素（最大 2 階調）/ `light-patterns-hiring--default` 19 画素（最大 39）/ `dark-…-interactivegraph--default` 103 画素（最大 6）/ `dark-…-stepper--custom-icons` 2 画素（最大 5）。#771 では `dark-patterns-hiring--default` 8 画素も加わった。**値が動かないのでジッタではない**（上の手順 ①②）。どちらの PR でも compare は main 版のベースラインで通っていたので、③のとおり main 版に戻して着地させた。**同日に切り分けた（結論は「毎回同じ」ではない）。** main と同じ中身の使い捨てブランチで update を 1 回流すと、61 枚が書き換わり、閾値を超えたのは `audio--with-caption` 833 / `interactivegraph--default` 103 / `stepper--custom-icons` 2 ── **#769・#771・#772 の 3 回と同じ画素数**だった。ここで一度「3 枚は update のたびに同じ画素数だけ違う絵になる」と書きかけたが、**その日の 5 回目（#776 の update）で崩れた**: `audio--with-caption` は動かず、`interactivegraph--default` は 116 画素（103 ではない）、`stepper--custom-icons` は light 側の 1 画素、加えて `anchor--default` 44 / `patterns-alpinedesk--batch` 12 が新しく出た（`patterns-hiring--default` 19 は 5 回中 4 回）。**分かっていること**: ①update のたびに、PR と無関係の絵が 3〜5 枚、閾値を超える ②顔ぶれは重なるが一定ではない ③4 回続けて同じ値が出ても、5 回目に違う値が出る（**4 回の一致は「決まっている」の証拠にならなかった**）④compare は main 版のベースラインで毎回通る。**運用は変わらない**: update のあとに `node scripts/vrt-diff-report.js <SHA>` で仕分け、PR が持つ絵だけを残して、ほかは main 版へ戻す（この日の 4 本とも、撮り直しの 48〜85 枚が PR と無関係だった）。**次の一手（未着手）**: 何も変えない update を数回流し、どの絵がどれだけの頻度で閾値を超えるかを数える。そのうえで、頻度の高い絵から、差のある画素の位置を出す。<br>**2026-10-02: 頻度を測った。** main（`c763ff5f85`）と同じ中身の使い捨てブランチ 5 本で update を 1 回ずつ流した（ラン 37013099656 / 37013103883 / 37013107613 / 37013112583 / 37013116277。5 本とも同じ main のベースラインから撮るので、互いに独立した標本）。判定は Playwright 自身の比較器（`vrt.spec.ts` と同じ `ssim-cie94`・`threshold: 0.05`）に数えさせた（対照: 同じ絵どうしは 0 画素、#781 の前後の PivotTable は 66,625 画素）。**①compare が落ちる絵は 5 回とも 0 枚**（50 画素を超えた絵が無い）。比較器が 1 画素でも数えたのは、5 回・のべ 342 枚のうち 1 枚だけ: `dark-…-anchor--default` の 44 画素（5 回中 1 回）。**②書き換えは 1 回あたり 55〜91 枚**（58 / 91 / 69 / 69 / 55）、5 回で 158 枚。5 回とも動いたのは 20 枚、1 回だけが 75 枚。**③動く絵の 83%（131 枚）は「main の絵か、もう 1 つの絵か」の 2 通りしか出ない**（復号した画素で比べた）。16 枚は 5 回とも同じ「もう 1 つの絵」になり、3 通り以上が出たのは 11 枚。ばらつきではなく、決まった 2 つの描画のどちらかに落ちる形。**④仕分けスクリプトのノイズの定義（2 階調・200 画素）を超えたのは 1 回あたり 4〜6 枚・計 9 枚**: `audio--with-caption` は 5 回とも 833 画素（70×16 画素の範囲で赤が 1 階調）、`interactivegraph--default` は 103（4 回）と 116（1 回）（縦の線 1 本の縁）、`patterns-hiring--default`（light）は 19 / 31 / 6。**これまで「閾値を超えた」と書いてきたのはこの定義のことで、compare の閾値ではない** ── この 9 枚のうち、比較器が数えたのは `anchor--default` だけ。**⑤`anchor--default` だけは描画の揺れではなく状態の違い**: x 1060〜1061・y 44〜65 の 2×22 画素が、印の色（5,93,135）から地の色（57,57,57）に変わっていた。現在地を示す印が付く回と付かない回がある（#776 の update でも同じ 44 画素が出ている）。44 画素なので通っているが、印が 3 画素幅なら落ちる。**結論**: compare を守るために今やることは無い。update のあとに無関係の絵を main 版へ戻す運用は変えない ── 2 通りのどちらに落ちるかは選べないので、ベースラインを入れ替えても書き換えは無くならない（5 回とも同じ絵になった 16 枚は入れ替えれば減るが、その 1 枚の `audio--with-caption` は #776 の update では main の絵に落ちているので、0 にはならない）。**残る一手**: `anchor--default` の印が付く・付かないの原因を見る（スクロール位置の監視が撮影に間に合うかどうか、の疑い。未確認）。**→ 同日に済み（#784）**: 疑いは外れで、スクロールの監視ではなく、現在地の判定と印の計測が描画のあとだったこと（途中の姿が 1 フレーム描かれる）が原因だった。記録は冒頭の「2026-10-02 の続き」。 |

（ここにあった作業メモ ── T38 の停止点 / T32・T44 の経過 / フォント自前化 ── は `docs/history/improvements-archive.md` へ移した。）

---

### デザイン診断と a11y の実測の残り（2026-10-04 起票）

2026-10-03〜04 の作業で見つけて、手を付けていないもの。経緯は冒頭の「その 105」。

| # | 項目 | 優先 | 内容 | 検証方法 |
|---|---|---|---|---|
| T293 | **開いた姿が自動検査に入っていない部品の残り** | P1 | 開く引き金（`aria-haspopup` / `aria-expanded`）を持つ 27 部品のうち 18 部品は、開いた姿が VRT にも a11y の CI にも写っていなかった。選択系・日付系・メニュー系の 13 部品には `Open` ストーリーを足した（`stories/playOpen.ts`。4 部品で serious の違反が見つかって直した）。**引き金にこれらの属性を持たない部品は調べていない**: Dialog / BottomSheet / HoverCard / ContextMenu / CommandPalette / Tour / Lightbox | 各部品の開いた姿を axe（WCAG 2.1 AA）で light / dark。足したら `vrt/play-functions.e2e.spec.ts` が通ること |
| T294 | **ModelSelector の読み上げ** | 判断待ち | 引き金がボタンで、選択中の項目を示す `aria-activedescendant` がフォーカスのない listbox 側に付いている。読み上げで「いまどの項目か」が伝わらない可能性がある。標準の形は引き金を `role="combobox"` にすること（select-only combobox）。**役割が変わるので利用者のテスト（`getByRole("button")`）に影響する** | スクリーンリーダーで矢印キーを押して項目名が読まれること |
| T295 | **PhoneInput の「Select country」が英語の直書き** | P3 | 引き金と開いたリストの `aria-label`。ランタイムの翻訳キーに載せる | `node scripts/check-src-hardcoded.js`（`audit:lib` の Raw UI strings）の件数が 1 減ること・ja / pt で読み上げ名が変わること |
| T296 | **Patterns のストーリーの強制カラー計測** | P3 | `measure:focus-forced-colors` は Components だけを測った。対象を広げて流す | 消える・弱い停止点が 0 |
| T297 | **「既定が透明で、アニメーションの終わりで見える」書き方のガード** | P2 | `opacity: 0` ＋ `animation … forwards` は、アニメーションが止められると消えたままになる（VRT は撮影時に止める）。Tooltip と HoverCard で見つけて直した。全ストーリーの点検では残り 0 件だが、書き方を落とす検査が無い。Video の `skipFadeIn` に同じ書き方が 1 か所ある | 故意に同じ書き方を入れて落ちること（全量 / lint-staged） |
| T298 | **Snackbar の dark の地** | 判断待ち | `surface-inverse` は dark でも `#262626` で、ページの地と同じ。白 10% の枠があるので輪郭は出ている。Tooltip は反転（明るい面）にした（#813）。揃えるかどうか | — |
| CI-14 | **E2E が 2026-10-03 の午後から落ち始めた理由** | 保留（再発待ち） | 朝まで 10 回緑だった E2E が、同じコミットで落ちるようになった。落ち方の正体（ストーリーの作り直し）は #794 で止めたが、**なぜその日から runner が遅くなったのかは分かっていない** | 再発したら runner image の版と所要時間を比べる |

### コンポーネント追加の検討（2026-09-28 起票）

ユーザーが持ち込んだ 5 候補（Swipeable List / Pivot Table / Rich Text Editor / Org Chart / Choropleth Map）を既存の部品と突き合わせた結果。**3 つは既存と重なっていた**（SwipeAction / RichTextEditor / NodeGraph・TreeView）。Choropleth Map は「採らない」と決めて `src/data/not-planned.json` と DESIGN.md「採らないチャート」に載せた（地図データの同梱が国境の政治的立場とサイズを負うこと・面積が値の大きさと一致しないこと。代わりは並べ替えた `BarChart`）。着手順は T275 → T276 → T277 → T278 → T279（T278 は 2026-09-28 にユーザー判断で ⓑ Tiptap に決定）。

| # | 項目 | 優先 | 内容 | 検証方法 |
|---|---|---|---|---|

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
