# WIM UI 改善リスト（継続用）

最終更新: 2026-08-04（**T55 / T57 / T59 / T60 / T61 / T62 / T63 / T64 の 8 件を片付け、未完了は T32 の 4 枚目のみ**。うち **T62 / T63 はユーザーが Android 実機で見つけた不具合**で、どちらも axe も VRT も構造的に見られない類だった。**新規起票は T61 / T63 / T64 の 3 件**で、3 件とも「直している最中に出てきた」もの）<br><br>**この日いちばんの型は「測ったつもりで測れていない」。** ①T63 は light テーマだとバブルも周囲も白なので、隙間を作っても色差が出ない ── **0 件は「問題なし」ではなく「計測不成立」**で、dark に切り替えて初めて意味のある数字になった ②T61 は否定先読みの `s*` がバックトラックして**値ではなく空白の位置で判定**しており、19 件と数えていたが実際は 20 件だった ③走査中に単体テストを並行させて「読めなかった」を量産し、**957/1023 しか読めていないのに「全件」と報告した**（今日 2 回）。**いずれも故意に鳴るべき変異を通したから見つかった。**<br>**逆に、記録の引き写しで間違えたのが 3 件**: T57（`withSidebar` は解消済み・10px は再現せず 120px）／ T60（「T61 で説明できる」という未検証の見立てで閉じ、実測で否定）／ T63（「`ChatUI` は VRT 除外だから影響しない」── **除外はストーリー ID の prefix にしか効かず、それを使うレシピは対象**）。<br>**下限を 1 つ入れるたびに別の契約が壊れた**（T59）。`min-content` → `min(…,100%)` → 変数の自己宣言 → `var()` フォールバック → `max-width` での頭打ち → `Select` の `width` prop、と **6 手かかった**。**5 手目は VRT でしか見つからない層**（親も一緒に広がるので「はみ出し走査」では原理的に見えない）で、T45 の「VRT は 1 度も役に立たなかった」と対になる事例。<br>旧: 2026-08-03（**0.12.0 と 0.13.0 を公開し、T37 / T38 / T41案② / T47⑤ / T52 / T54 / T56 / T58 / T59 の 9 件を片付けた**。うち T54 / T56 / T58 / T59 は**この日に新しく書いたガードが、その日のうちに実バグを出した**もの。**新規起票は T55〜T60 の 6 件**で、5 件は T32 の 3 枚目（AI アシスタント画面）から出ている）<br><br>**同日夕方: T59 を 0 件で完了し、T61 を起票した。** 片付けた 1 件より**起票した 1 件のほうが重い** — 残り 15 件を実測したら 12 件すべてが実害で（`MarkdownRenderer` は高さ 1160→6950px＝1 文字ずつの折り返し）、そこまでは想定どおりだったが、**`QueryBuilder` だけが修正後も 24px のまま残った**。調べると `container-type: inline-size` ＝ `contain: inline-size` が**それ自体で内容の寸法を 0 にする**ため、`min-width: 0` が無くても同じ潰れ方をしていた。**ガードは最初からこの母集団（20 件）を見ていない**＝T61。<br>**この日 2 度目の「ガードのコメントのほうが間違っていた」**（1 度目は 08-02 の `generate-llms.js`）。`check:shrinkable` の冒頭コメントは `MarkdownRenderer` を「内部スクロールさせたいので `min-width: 0` が正当」な例として挙げていたが、`.root` は overflow を持たない flex column で、**正当例として名指しされていたものが実際にはいちばん潰れていた**。<br>**自分の修正で「鳴ってはいけない経路」を 3 度壊した。3 度とも実測で見つかり、推測では 1 つも見つからなかった**: ①`MarkdownRenderer` に `min-width: min-content` を入れたら最小幅が中身の表とコードブロックで決まって 479px になり、243px のカラムに置いただけではみ出した（`Label` では同じ `min-content` が 180px に収まる。**中身が違えば同じ指定でも別物**）②`InputBase` の 180px の下限が、`FieldTemplate` がわざと 120px に絞っている色見本の欄を **10 ストーリーで 60px 押し広げた**（全 1017 ストーリーの走査で発見。**下限は「狭すぎ」だけでなく「広すぎ」でも壊す**）③その②を `min(180px, 100%)` で直したら、% の下限は**祖先の内容サイズに寄与しない**ため `Label` が 180→**24px**・`SmartSearchInput` が 180→**58px** と、直したはずの下限が外れた。**単独実験では両立していた** — 間違っていたのは実験の設計（祖先を持つ形を試していなかった）④その③を `--wim-input-min-width` で直したつもりが、既定値を `InputBase` 側で**宣言**したため**自己宣言が継承値に勝ち**、10 ストーリーは 180px のまま 1px も動いていなかった。**最終形は `var(--wim-input-min-width, var(--wim-width-sm))`＝既定はフォールバックで持つ。4 手目でようやく 0 件。**<br>**この 4 手はすべて「直したはず」で終われた** — 毎回スキャンを回し直したから、3 回とも直っていないことが分かった。**視覚判定でも推論でもなく、同じ計測を毎回通すこと。**<br>⑤**そして 4 手目でも足りず、5 手目を VRT が出した（#229 の compare が 4 シャードとも fail）。** CSS では `min-width` が `max-width` に**常に勝つ**ので、下限が `width=\"xs\"` のような**明示指定を踏み潰していた**。実測: `Input --custom-width` の `widthXs`（max-width **120px**）も custom width（同 **73.2px**）も **180px で描画**。下限を `min(下限, その要素の max-width)` に変えて 120px / 73px へ戻した（`fullWidth` は `--wim-input-width: 100%` なので % が `min()` に入り伝播が切れる。そこだけ素の下限へ戻す）。<br>⑥**そしてその 5 手目が、今度は `Select` の `width` prop を壊した。** `Select` は殻として `InputBase` を描画し `width` もそちらへ渡すので、**根は `--wim-input-width` を見ない**。根に固定 180px を置いたため `width=\"xs\"` が**根 180px・中身 120px**になっていた（実測）。かといって根の下限を `0` に戻すと、`width: 100%` があるぶん**横並びで 24px まで潰れる**（内側の下限は祖先へ伝播しない ── これも実測。伝播すると思い込んでいた）。**`min-content` が答え**で、根の最小内容サイズが中の `InputBase` の下限を含むため、既定 180px・`width=\"xs\"` で 120px と**中身に追随する**。`Label` で効いたのと同じ手。<br>**この 5 手目は「はみ出し走査」では原理的に見つからない。** 走査は「要素が親の `clientWidth` を超えたか」を見るが、この回帰では**親も一緒に広がる**のではみ出しが発生しない。**「はみ出し 0 件」は正しく、かつ無意味だった。** VRT は「前より太くなったか」を見るので、こちらの計測が構造的に見られない層を埋めている。**T45 の「VRT は 1 度も役に立たなかった」と対になる事例として残す** — 道具ごとに見える層が違い、どれも単独では十分でない。

**2026-08-04 追記: 未起票だった 7 件に番号を振った（T65〜T71）。** きっかけはユーザーの「メニュー語彙ページは追加ずみ？」という確認で、**答えは「未着手」だった**。`check:improvements` は**表の行しか数えない**（`scripts/check-improvements-status.js:30`）ので、節の本文に散文で書いた残件はカウントにも「明日はここから」にも出てこない。ガード自身がヘッダーコメントで「ファイル内の矛盾は見えるが、ファイルと現実のズレは見えない」と断っていたところに、そのまま落ちた。**:67 ⑤「積み残しは番号を振らないと消える」（T50）の再演**で、同じ失敗を 2 度した。<br>内訳: **T65** メニュー語彙ページ（T46 の残件）／ **T66** `ChatUI` の狭幅＝**旧 T60-②。T60 も T61 も「済」で閉じたので、未解決のまま未完了カウントから消えていた**（済んだ行に未解決の子項目が残る型）／ **T67** `reset.css` の素の `<code>` ／ **T68** a11y の run 間フレーク ／ **T69** VRT update の平均色シフト順位表 ／ **T70 / T71** はこの日のユーザー指摘（下記）。<br>**意図的に閉じているものは番号を振っていない**: StackBlitz 変換器（:443「当面作らない」）／ `Tabs` の (d) `Select` 変形（:593「必要になった時点で」）／ コピーイン CLI・スターターリポジトリ（:166「維持コスト大で保留」）／ 死んだクラスの検出ガード（T62 行「数だけ出して起票しない」）／ **出荷アイコンに同じ形が 2 つある件（`align-justify` == `menu`、ホットドッグ == `minus`）＝ T65 行に実測つきで記録。名前が違う問いに答えており、export の削除は破壊的変更なので触らない**。

**ユーザーが同日に報告した 2 件（どちらも P1・T70 / T71）**:
- **T70 — 👍 👎 がポインタ環境で発見できない。** **T62 で直したのはタッチだけ**で、ポインタ側は「既定を変えない」ことを受け入れ条件に**明記して据え置いていた**。今回の指摘はまさにその側。**T64 のツールチップは発見可能性を上げない**（ホバーして初めて出るので、既に見つけた人にしか効かない）。**カタログの見本自体がホバー限定**（`ChatUI.stories.tsx:429` も `:121` も `actionsVisible` を渡していない）。
- **T71 — Docs の `IconGallery` が dark で白い四角になり、ラベルも読めない。** `IconGallery` / `IconItem` は **Storybook 自身のテーマ**でスタイルされていて `data-theme="dark"` を見ない。面は白のまま、アイコンは `.sbdocs-content` から `--wim-color-text-primary`（白）を継ぐので**白の上に白**。ラベルは逆に暗い文字が暗い面に載る。`.storybook/docs-dark-mode.scss` に `.docblock-icongallery` の行が 1 つも無い。**T36（ホスト差分）の実例**。

**報告された場所についての注記**: ユーザーは「T32 の 3 枚目」と呼んでいるが、👍 👎 を描いているのは `stories/Patterns/AI/AI.stories.tsx`（3 枚目 = `ArtifactsCanvas`）**ではなく** `ChatUI` のストーリー（`WithActions` / `AiAssistantIntegration`）。3 枚目には `actions` を渡している箇所が無い。**直す対象はライブラリ側の既定**なので、どちらから見つけても修正箇所は同じ。

**T70 / T71 / T65 は同日に完了した**（いずれも実測つき。詳細は下表）。**次は T32 の 4 枚目（モバイル前提のレイアウト）。** 残る未完了は 3 件（T32 / T66 / T68）。**T67 / T69 は 2026-08-05 に完了**（下表）。

**T65 で 1 つ分かったこと**: **SSOT に寄せられない語彙がある。** 俗称欄を `components.json` の `aliases` から生成しようとしたが、T46 が「別名は実在の体系（HIG / Material / ARIA APG / Radix / MUI）が使う語に限る」と決めている以上、Döner / Taco / Strawberry のような言い伝えは構造的に入らない。**さらに `Hamburger menu` はコンポーネント名そのものなので、いちばん探される語が `aliases` から原理的に漏れる。** 重複に見えた 2 つは母集団が違った（機械向け＝実在の体系、人間向け＝言い伝え）ので、page 側を手書きにして分担を明記した。

**手順**: ①`Skill(composition-guidelines)` を**書き始める前に**読む（CLAUDE.md の必須ルール）②`DESIGN.md` の「コンポジションガイドライン」に従う ③`stories/Patterns/` 配下に置く（既存: `Admin/IntakeQueue` = 1 枚目 / `Form/WholesaleApplication` = 2 枚目 / `AI/AI` = 3 枚目）④**書いたら必ず story 化して VRT / a11y / `judge:slop` に載せ、その結果を添えて人間のレビューへ**。**スクリーンショットを見て「問題なし」と自己申告しない**（CLAUDE.md の約束 2）。

**未合成は 209 中 125**（2026-08-04 実測。`stories/Patterns` + `sandbox` の JSX タグとコンポーネント名の突き合わせ。起票時の「221 中 176」から前進）。数え直す場合は同じ方法で。

**4 枚目で当たると分かっているもの**:
- **T66（旧 T60-②）は未解決のまま残っている** —`ChatUI` の狭幅。390px で `messageList` 204px → `message` 150px → `bubble` 144px → `CodeBlock` 124px → `pre` **122px**。削っているのは `.message` の `max-width: 80%` とアバターで、**T61 の下限では直らないことを実測済み**。モバイル前提の画面なら正面から当たるので、**そこで設計判断（狭幅でアバターを畳む・バブルの余白を詰める）をするのが妥当**。
- **T62 の修正が効いているか実機で確かめる好機** — `@media (hover: none)` で `ChatUI` の 👍👎 / `Gallery` の選択 / `FloatButton` の説明が常時表示になる。エミュレータではなく**実機で見ると T62 / T63 のような発見が出る**（今日の 2 件はどちらもユーザーの Android から出た）。
- **T59 / T61 の下限が入っているので、フォーム部品を横並びに置いても潰れない**はず。潰れたら新しい形なので起票すること。

**今日の作業で分かった、明日そのまま使えること**:
- **狭幅の実測ハーネス**は 610px の flex row に「縮まない兄弟」を置いて残りを 24px にする形。対照として既に下限を持つ部品を混ぜると、ハーネス自体が効いていることの証拠になる。
- **走査中は他の処理を走らせない**（今日 2 回、テストを並行させて「読めなかった」を量産した）。**「読めなかった」は「問題なし」ではない**。
- **VRT の除外はストーリー ID の prefix にしか効かない** — コンポーネントを変えたときの影響範囲は「そのコンポーネントのストーリー」ではなく「**それが描画されるすべてのストーリー**」。
- **light テーマでは白と白の差が測れない**（T63）。色で判定するなら dark（`globals=theme:dark`）で。

**着手前に確認すること**: 未マージの PR があれば先に片付ける（下の「PR の状態」）。
**PR の状態（2026-08-04 未明時点）**:
- **#235（T63・吹き出しの継ぎ目）** — VRT の update を dispatch 済み。着地したら compare が緑になるはず。**コミットバックで作られた head はチェックが `action_required` で止まる**ので、走っていなければ **close → reopen**（今日 #233 で実際に踏んだ）。
- **#236（T64・ツールチップと予算 50 kB）** — CI 実行中。
- どちらも**マージはユーザー確認が要る**。マージ後は main の Deploy が起動しているかと、squash 本文に `[skip ci]` が混入していないかを確認すること。

**① T61**（2026-08-03 に T59 を潰している最中に起票）。`container-type: inline-size` は `contain: inline-size` なので**それ自体が内容の寸法を 0 として扱い**、`min-width: 0` が一切無くても T59 と同じ潰れ方をする。`check:shrinkable` は `min-width: 0` の同居しか見ていないので**最初からこの 20 件を見ていない**。**`min-content` を下限に使わないこと**（containment 下では 0 に潰れるのを実験で確認済み）。詳細と実験値は下表 T61。

**~~① T59 の残り 15 件~~ → 済（2026-08-03）。0 件でハードゲート化。** 15 件を 610px の flex row で 1 件ずつ実測したところ**12 件すべてが実害**だった（`MarkdownRenderer` は高さ 1160→6950px で 1 文字ずつの折り返し、`RichTextEditor` は 271→906px）。9 件に下限、6 件に `shrinkable-ok`。詳細は下表 T59。

**② T60 の残り**は `ChatUI` の狭幅 1 件。390px で `messageList` 204px → `message`（左寄せ・アバターあり）150px → `bubble` 144px → `CodeBlock` 124px → `pre` **122px**。狭幅ではアバターを畳む・バブルの左右余白を詰める等の設計判断が要る。

**この日いちばんの教訓は「記録や既存コメントを実測せずに引き写すと間違える」。** 実際に 6 回訂正した: ①T58 の件数「35」は走査の誤りで実際は 29（`&Header` を `Header` と数えていた） ②`GanttChart` / `ModelSelector` を「実害あり」と見立てたが両方とも重複した死んだ参照 ③「`Drawer` にアニメーションが無い」は SCSS しか見ていなかった誤り（共有 `Transition` 経由で存在） ④「`--wim-width-md` が存在しない」は生成物しか見ていなかった誤り（`_ui-patterns.scss` に定義あり） ⑤**「VRT は 1 ラン 60 分」はこのファイルの古い記述の引き写しで、実測は 7〜10 分**（T11 のシャーディング後）。ユーザーに指摘されるまで 5 回繰り返した ⑥`CodeBlock` の狭幅は真因が `ChatUI` だった。**数字を言う前に測る、コメントを信じる前にコードを見る。**

**ガードについてこの日に分かったこと 3 つ**: ①**スナップショット方式は自分の誤りと一致する**（生成と検証が同じコードを通るので「差分ゼロ」が正しさの証拠にならない。運用メモの該当節を参照） ②**テストが空振りを固定する**（Vitest では CSS モジュールが全キーに答えるので、実体の無いクラスの付与を検証すると必ず通る。`List`×2・`AppShell`×1 の 3 件がそうなっていた） ③**件数ベースのラチェットは入れ替えを検出できない**（1 件消して 1 件足す変異では鳴らない。実証の変異は「足すだけ」にする）

旧: 2026-08-02（**T41 案② / T47⑤ / T52 / T37 を片付け、残る未完了は T32 のみになった**。今回の 4 件はすべて「ガードを書く」タスクだったが、**3 本とも書いた瞬間に実在のバグを出した**ので、実際には修正作業になった: **T41 案②**＝ドキュメント内リンクが dark で 2.11:1／通知バッジが面 danger に文字 on-primary で 2.65:1／`Timeline` のグリフが塗り用 intent 色で 2.03〜4.36、の 6 件。**T37**＝llms.txt のレシピ 3 箇所が `TS7053` でコンパイル不能。`generate-llms.js` の「Every symbol/prop below is verified against the real API」という**コメントのほうが間違っていた**。README のアイコン例 2 箇所もパース不能。**T52**＝起票時の想定 3 箇所に対し実際は 5 箇所で、うち 1 件は T47⑥ で置き換え先を作ったのに変換されていなかった孤島。<br>**この日の教訓**: ①**「ガードを書く」は「バグを見つける」と同義**であって、書いて緑で終わることを前提に見積もると必ず外れる ②**ガードは「無い」より「誤る」ほうが危険** — T52 で 2 回踏んだ（同じ行に intent トークンがあるかで判定して正当な組を誤検出／逃がす注記を直前 1 行しか見ず理由を 2 行書くと無効化）。**通る経路を全部通す**の中には「鳴ってはいけない経路」も含まれる ③**受け入れ条件は過去のコミットで確かめる** — T41 案②は起票時の `button.module.scss:165` を流して **dark danger 4.36:1 / success 2.48:1**、つまり起票文に書かれた実測値と完全一致で鳴った。ここまで一致すると、解析が起票時の測定と同じものを見ていることの証拠になる ④**鳴らなかったからガードの穴とは限らない** — `Grid` の `gap` は `ResponsiveProp<number | string>` なので `gap="enormous"` は型として正しく、これは T38 の系列の話だった<br><br>旧: 2026-08-01（**この日で 11 件片付いた**（T49［#185］ / T45 の積み残し［#187］ / T46［#188］ / T43 + CI-6［#189］ / T48［#190］ / T50［#191］ / T52［#192］ / T47① ProgressRing［#194］ / T47③ Text.lineClamp［#196］ / T47⑥ Result.iconSurface［#197］ / CI-7［#195］）: **T49**［#185］＝VRT の色深度の盲点を `threshold` `0.1`→`0.05` で解消、**T45 の積み残し**［#187］＝ヘアラインを半透明にして背面に追随させた、**T46**［#188］＝外部語彙の別名 59 語＋ガード、**T43 + CI-6**［#189］＝下記、**T48**［#190］＝検出器をやめて予防に倒した（表の T48 行）。前日の **T45 本体・0.10.0 公開** は下の 07-31 の項。**あわせて T50 / T51 / T52 を新規起票**（3 件ともユーザーの指摘から出た。**3 件とも既存の記録から漏れていた**）。

**T43 は「除外を外す作業」ではなく「出荷され続けていた描画バグ 1 件」だった**［#189］。`useIndicator` はスライダーの寸法を **active item の `offsetWidth`** から取るのに、**ResizeObserver はコンテナしか見ていなかった**。横並びのタブはコンテナが `width: 100%` なので、**Web フォントが差し替わって item が伸びてもコンテナは 1px も動かず再計測が走らない**＝フォールバック字形で測った寸法のまま固定される。実測（dark・`document.fonts.ready` 後、スライダー幅 vs item 幅）: `Tabs - Default` **-8.03px** / `Tabs - Scrolling` -6.78px / `TabNavigation - Default` -4.36px / `- Pills` -3.95px / `- Contained` -1.94px / `- With Icons` -1.73px。`SegmentedControl` と `Tabs - Vertical` が無事だったのは**コンテナ自身のサイズが変わる配置だったからで、正しさではなく偶然**。

**そして VRT はこのバグをどの角度からも見られなかった**（今日いちばんの収穫）。①上記 5 件は「ズレたまま安定」なので毎回同じ絵が撮れる＝緑。②`--pills` だけがフォント到着とマウントの競争の境界にあり **113px ⇄ 117px の二状態**で落ちていた（「6 回すべて 137px ＝ 値がばらつかない＝ジッタではなく状態差」という T43 の読みは当たっていて、状態差の中身がこれ）。③**閾値を超えられた 2 件は、よりによって除外されていた 2 件だった**。実測した面積は下表のとおりで、**アンダーラインのスライダーは 2px しかないので 8px 伸び縮みしても 16px しか動かず、`maxDiffPixels: 50` を数学的に超えられない**（T44 が塞いだはずの面積の盲点が、細長い形状で再演した）:

| ストーリー | スライダー高 | 幅のズレ | 動いた面積 | 判定 |
|---|---|---|---|---|
| `Tabs - Default` | 2px | 8.03px | **16px** | 閾値 50 未満＝緑のまま |
| `Tabs - Scrolling` | 2px | 6.78px | 14px | 緑のまま |
| `TabNavigation - Default` | 2px | 4.36px | 9px | 緑のまま |
| `TabNavigation - With Icons` | 2px | 1.73px | 3px | 緑のまま |
| `TabNavigation - Pills` | 42px | 3.95px | 166px | 落ちる（が除外されていた） |
| `TabNavigation - Contained` | 34px | 1.94px | 66px | 落ちる（が除外されていた） |

**ベースラインの枚数は「変更が何を動かしたか」の指標にならない。** `--update-snapshots=all` は全ファイルを撮り直すので、**compare から見れば差分ですらない揺れまでコミットに載る**。3 回の update をそれぞれ pixelmatch と同じ規則で数え直した結果（**YIQ 距離 > 35215×0.05² = 88.0 を超えた画素だけを数え、その数が 50 を超えたら落ちる**）:

| コミットバック | 更新枚数 | 色閾値通過後に**差分ゼロ** | compare が落ちる |
|---|---|---|---|
| #189（T43） | 95 | **89** | **1** |
| #191（T50） | 162 | 112 | 47（全部 Alert / Notification 等の**意図した変更**） |
| #192（T52） | 118 | **99** | 13（全部 navbar / scrollarea / contextmenu 等の**意図した修正**） |

**ここで一度、数え方を間違えた（記録として残す）。** 最初は「生のバイト差のあるピクセル数 > 50」で数え、`aspectratio--default`(844) / `avatargroup--total-count`(252) / `hovercard--default`(148) 等を「毎回閾値を超える要注意」と報告した。**誤り**。pixelmatch は**先に色の閾値で足切りしてから**面積を数えるので、`aspectratio` は maxYIQ **8**、`avatar` / `hovercard` は 51〜57 ＝ いずれも 88 に届かず **1 画素も計上されない**。`avatargroup--total-count` も計上は 26 と 1 で 50 未満。**T49 が「面積と色深度は独立した 2 つの盲点」と書いたその罠に、測る側が落ちた**。以後この種の集計は必ず `35215 × threshold²` の足切りを通すこと。

**唯一の非意図的な超過は `dark-…-video--default`**（#189 で 98 画素・#192 で 96 画素、maxYIQ 32,600 ＝ 動画フレームがまるごと違う）。兄弟の `--premium-features` / `--rounded` は同じ理由で既に除外済み。**朝の時点では除外を見送った** — この Set の追加基準は「同一コミットで update → compare が落ちること」で、ローカルで update → compare を 2 回とも緑、main の compare も 4 ラン連続緑＝**落ちるところを一度も見ていなかった**ため。`--rounded` のコメントが記録している「1 度 retry で通ったのを見て除外基準を満たさないと判断したのは誤りだった」の**逆側の過ち**（落ちるのを見ずに除外する）を避けた。<br>**同日夕方に基準を満たしたので除外した（#206）**: #204 のブランチで update（run 30698540931）と compare（run 30698542269）が**同じ head `01f4ed23a`** で走り、compare が**これ 1 件だけ**で落ちた。判断に半日かかったが、**その半日は無駄ではない** — 基準を満たすまで待ったからこそ、除外の根拠が「毎回ずれている気がする」ではなく「同一コミットで落ちた」という再現手順になった。

**明日ここから**: 未完了は **8 件**（`npm run check:improvements` が数える）。**P1**: **T32**（221 中 176 が未合成。08-01 に出た穴 ── T52 のトークン参照 18 件・T53 ── はどれも「1 画面作ったら出てきた」類なので打率は最も高い）／ **T40**（`src/` の生 UI 文字列ガード。既知 11 件で鳴らすのが受け入れ条件）／ **T41**（コントラスト検査をトークンから実使用へ。`button.module.scss:165` で鳴らすのが条件）。**P2**: **T39**（合成ルールが 3 箇所に複製）／ **T47②**（SplitButton。①③⑥ は 08-01 に完了、⑤ は「採らない」の明文化が残る）／ **T53**（名前の無い `progressbar` を作れてしまう。`Progress` と `ProgressRing` は prop 語彙を揃えているので **2 つ同時に決める**）。**P3**: T36 / T37 / **T51**。<br>**着手順の制約**: **T51-① は 1 行**（`Badge` の `Required` に `variant="subtle"`）なので単独で出せるが、**T51-② は `Badge` / `Tag` / `Chip` 全体の VRT が動く**ので T53 と設計を揃えてから。**T50 と T51-② は同じ原理**（輪郭は影ではなく淡いボーダー）。**T52 の残り**（`Badge` で書けるのに手組みしている孤島）は T51-② の前提だが、08-01 に洗った結果**置き換えられる孤島は 1 件だけ**で、残り 2 件は「部品が無い」（→ T47⑥ で解消）と「アプリのブランディング＝対象外」だった。

**この日に学んだ運用**: ①**1 手ごとに CI を回すと往復が増える** — 変更をまとめてから 1 回流すこと（T45 で CI 15 周を費やした反省）。②**ガードはデータより先に書く**（後だと「通る状態」しか試せない。T46 で実践）。③**「更新した」「緑だった」を数で信じない** — VRT の update は 79 枚コミットバックしても中身は 852 枚が旧色のままだった。**ピクセルを測ること**。④**「VRT に載っている」は「VRT が見ている」ではない** — T43 は 6 ストーリーが VRT の対象に入っていながら、面積・色深度・除外の 3 つの理由で 1 件も検知されていなかった。**新しい閾値を決めたら、守りたい信号の実寸を測って閾値と突き合わせること**（今回なら「2px × 8px = 16px」を先に出していれば、VRT に期待していないことが最初から分かった）。⑤**積み残しは番号を振らないと消える** — T50 は T45 節の「なお」1 文にしか存在せず、残件リストにも「明日ここから」にも出てこなかった。**「別件」と書いて先送りするときは、その場で T◯ を振ること**。⑥**「高コストだから後回し」の見積もりは、前提の数え方ごと疑う** — T48 は「21 箇所が個別に書いており systematic な解が無い」を根拠に検出器路線＋高コストと見積もられていたが、21 を分類したら**無関係な 2 つの母集団**で、本題は 5 件・対象は 12 declaration しかなかった。**症状を検出するのをやめて原因を書けなくした**ら、高コストの理由（実描画の測定が要る）が丸ごと消えて静的検査で済んだ。⑦**最終更新の見出しに「この日で N 件」と書くとき、N は PR の数であって成果の数ではない** — 08-01 の実態は「片付いた 4 件」より「**起票された 3 件（T50/T51/T52）**」のほうが重い。いずれもユーザーの指摘から出ており、**3 件とも既存の記録から漏れていた**。

---

旧: 2026-07-31（**T45 完了・0.10.0 を公開**［#181 → #182 → #183］。ページを `gy8-5` へ下げて面を分離し、`Alert` はページから **0.0626＝基準の 4.2 倍**で分離（旧 0.0239）＝受け入れ条件達成。公開 tarball で 6 トークンすべての実値と provenance を確認済み。**この回の収穫はトークンよりガードの穴 2 つ**: ① **`check:contrast` が緑のまま axe が 18 件落ちた** — 宣言された組み合わせしか見ず（`text-tertiary` が無効面に載るのを見逃す）、見ている組み合わせでも 4.58 と報告した所を axe は 4.37 と実測（**T41 の実証データ**）。② **`update` が成功してもベースラインは更新されない** — `threshold: 0.1` 未満の色変化は差分ゼロと数えられ、ページ色を変えたのに **light 852 枚が旧色のまま**残った（**T49 として起票**、当座は `--update-snapshots=all` で固定）。構造的な収穫は **`disabled` と `neutral` の分離**＝1 トークンが「無効なコントロール」と「意味を持たない indicator の塗り」を兼ねていたため、分離した瞬間に `disabled` が intent 面でなくなり「gy9-5 は選べない」という制約自体が消えた。**次の一手は T49**＝色深度の盲点。T45 の検証は最後まで数値で行い、**VRT は 1 度も役に立たなかった**。未了は `border-secondary` / `scrollbar-track`（ページ色の上に残置。VRT 差分では拾えないので代替案を T45 節に記載）と、除外した非決定 2 件［T43］）

旧: 2026-07-31（**T44 完了**＝閾値 50 を出荷し[#176]、受け入れ条件も実証した（`FeedbackIcon` を #142 以前に戻すと `Alerts & Notifications` 106 件中 **36 件**が落ちる。信号は 68〜88px で、**旧閾値 400 では 1 枚も落ちない**＝#142 が 6 コンポーネント中 5 つで素通りした理由）。あわせて**撮り直した 226 枚の内訳を割った**[#177]: 位置による分類も履歴による帰属も決め手にならず、**差分領域の平均色の移動量**で並べて両端を目視した結果、**回帰はゼロ**で、大半は「直したのに VRT が記録していなかった」もの（最たる例が `OtpInput` — #141 が直したあともベースラインには 6 個の空箱が数週間写り続けていた）。ここから出た 2 件も出荷: `Stats.Trend` をティントから塗り + 面色の文字へ[#179]、`EmptyState` の `+` が小さかったのは色ではなくインライン 48px の直書き[#178]。メニューアイコン `menu` / `grid` と T46 最初のエイリアス 3 件も[#180]。**npm リリースは意図的に見送り**＝T45 でライブラリ全体の見た目が動くため、視覚的な変化を 2 回に分けず 1 バージョンにまとめる。**次の一手は T45**＝下の「**T45 の着手**」節。ブランチ `feat/t45-surface-separation` に中断中で、目標比・梃子・制約は決定済み、残るのは `Alert` の透過判断と衝突箇所の実測）

旧: 2026-07-30（**「ハーネス修正の 1 回目は失敗した」（#172）の結論を実測で訂正**＝40 件の中身を割ると 28 件のうち 24 件は消えており、新規 25 件は**片方のランにだけ 4 シャード均等で出る**＝ストーリー固有ではなく**フォントがネットワーク越しに届くこと**が原因だった。`@font-face` 未登録説は CDP 実測で否定（登録 400 面・`check()` は 10/10 false・`load()` は 1 面マッチ）。対策は待ちの改良ではなく**供給元をローカルへ**＝Storybook のフォントを `@fontsource` へ自前化し、その過程で **mono の契約が壊れていた実バグ 5 件**を修正（#171 を draft から復帰）。あわせて外部語彙（namethatui.com）との突き合わせから **T46 別名対応表 / T47 追加予定コンポーネント / T48 UA スタイルシート負けの検出**を起票。詳細は「**①の結果と真因**」節と「**フォント自前化と mono の契約**」節。次の一手は T44 の②→③＝残り 4 件の非決定を始末してベースライン全面撮り直し）  
旧: 2026-07-29（**0.8.0 を公開**＝#165/#166 の changeset が同乗。当時の見出しは 0.7.0 のままだった）  
旧: 2026-07-29（**0.7.0 を公開**＝T32 の 2 枚目で出た穴 14 件のうち 11 件を出荷した「既定が変わる回」。あわせて **T45**（light パレットに面の分離が無く、コンポーネントが影に依存している）を起票。次の一手は下の「**ハーネス修正の 1 回目は失敗した**（T44 の計測結果の節）」＝**上記のとおり 07-30 に訂正済み**）。**同日続き: 回避策 4 つをすべて外した**（結果は同節「回避策を外した結果」。⑦ の残りは `SegmentedControl` を「省略せず横スクロール」へ倒して解消。ライブラリ=#165・画面=#166 として出荷済み。**T32 の 2 枚目はこれで完了**、次は 3 枚目（AI アシスタント画面））  
旧: 2026-07-28（**T32 の 2 枚目**「複数ステップのフォーム」を実装し、出た穴 14 件を起票＝下の「T32 の 2 枚目の結果」。うち **③ `FileUpload` の `aria-required`（axe critical）と ④ `Alert` の見出し順は a11y スイートが自動検出**した。**⑭ は VRT の構造的な盲点**＝①を直した #142 が 6 コンポーネント中 5 つで緑のまま通過したことから判明。0.6.0 は 1 枚目の終了時点でリリース済み）  
旧: 2026-07-27（**T32 の 1 枚目**「管理テーブル」を実装し、出た穴 10 件を起票＝下の「T32 の 1 枚目の結果」。ガードの穴として **T40**（`src/` の生 UI 文字列）・**T41**（コントラスト検査がトークン止まりでコンポーネントの実使用を見ていない）・**T39**（合成ルールが 3 箇所に複製）を新規起票。DESIGN.md に必須ルール 12「クロームを黙らせる」と狭幅チェックを追加し、llms.txt / judge:slop にも反映）  
旧: 2026-07-26（**T27〜T31** を起票。T27 Playground 再設計 + AI-slop ガード拡張(#108) / T28 コンポジション監査 + T30 prop 検出ガード(#109) / T29 docs の px 負債(#111) は完了。T31（docgen キャッシュキーの自動導出）も完了。**T32〜T37「使う側の穴の探索」を新規起票**＝221 コンポーネント中 176 が未合成という実測から。※起票時に T14〜T17 と番号が衝突していたため T27 以降へ採番し直し）  
作業再開時はここから。済んだ詳細は git 履歴を参照。

---

## 次にやるとよい順

**2026-08-03 深夜時点の順番（決定済み）**: ①T57（`AppShell` の Composition API）→ ②T63 → ③T64 → ④T32 の 4 枚目。**T55 / T59 / T60 / T61 / T62 は同日に完了**。**T59 / T60 / T61 / T62 は同日に完了**。理由は冒頭の「次はここから」を参照。**T59 / T60 は同日に完了**（T59 は 0 件でハードゲート化、T60 は ② を T61 へ移管して閉じた）。**両方とも VRT のベースライン更新だけ未実施。**

1. **運用維持**  
   `PX_BASELINE = 0` / `i18n:check` / `check:api` / `check:imports`。触った SCSS に未注記 px を増やさない。品質ゲートは PR テンプレに従う。
2. **T32: 未合成コンポーネントを実アプリ形状で使う**（2026-07-26 起票・未着手・**P1**）  
   **221 コンポーネント中 176（80%）が一度も合成画面に登場していない。** T27 で出た API の穴 4 件はすべて「1 画面作ったら出てきた」もので、ガード設計では見つからなかった。現状いちばん打率が高い探索手段。P2 以降（T33 型と実装の乖離 / T34 コントラスト計算 / T35 レシピ起動 / T36 ホスト差分 / T37 主張の検証）とあわせて下表「使う側の穴の探索」に詳細。
3. ~~**T31: docgen の CACHE_VERSION 上げ忘れを機械検知**~~ — **済**（PR #113。②を採用＝キャッシュキーを自動導出し、手動定数を廃止）
3. ~~**T28: コンポジション監査の指摘 20 箇所**~~ — **済**（PR #109）  
   DESIGN.md 必須ルール 8〜11 を新設した際に既存 Patterns を掃いて出たもの。**`check:slop` では捕まらない**（トークンを使っているので px 直書きでも `: 0` リセットでもない）＝判断依存。詳細は下表 T15。
3. ~~**T29: docs の px 直書き 66 件**~~ — **済**（PR #111。残 10 件はトークン非対応の実寸）  
   `check:slop` のスコープを `docs/*.mdx` の `<style>` に広げて可視化された既存負債（`Configure.mdx` / `Colors.mdx` / `AppLayout.mdx` ほか）。ベースライン 109 のうち 66 件がこれ。減らしたら `STYLE_OVERRIDE_BASELINE` を下げる。
4. ~~未着手の改善候補~~ — **T1〜T7 すべて解決済**（2026-07-15。次節参照）

**npm 公開は完了済み**（`wimui@0.2.0`、2026-07-21。`private` 解除済み）。以降のバージョン運用は changeset ベース（`.changeset/` 追加 → Version PR → マージで publish、CI-4 で no-op 抑制済み）。エージェントは publish 相当の操作を勝手に進めない。  
破壊なし〜小の文書タスクは一通り済。

---

## 未着手の改善候補（2026-07-15 リポジトリ調査）

CI・テスト・監査体制は堅い（typecheck / coverage 80% / axe-core WCAG 2.1 AA / bundle-size / VRT / changesets 自動リリース、`npm audit` 0 件）。その上で見つかった残件。

### 実害あり（優先）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T1 | `wim-tailwind-preset.js` の公開 or 削除 | 現行トークンに無い CSS 変数を10件参照・`tokens:build` 未接続・npm 公開物にも docs にも無し | **済（削除）** — `wim-tailwind-preset.js` + `scripts/export-tailwind.cjs` を削除（2026-07-15）。全トークンを公開契約に昇格させる割に需要シグナル無し、v3 形式の JS config は v4 の CSS ファーストと不整合。要望が出たら v4 `@theme` + 厳選トークンで再設計 |
| T2 | `GEMINI.md` の同期 | 実際は RULES / SKILLS 参照のみの2行で古い契約の記載は無かった。IMPROVEMENTS.md と CLAUDE.md（コマンド・アーキテクチャ）への参照を追加し CLAUDE.md 冒頭と同構成に | **済**（2026-07-15） |
| T3 | 依存更新の自動化 | `.github/dependabot.yml` 追加（npm + github-actions 週次、minor/patch は1 PR にグループ化、既知の peer ブロック major 2件は ignore に理由コメント付きで明示） | **済**（2026-07-15。ignore は peer 追随時に解除） |

### npm 公開とセット（公開済み）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T4 | OSS リポジトリ衛生 | CONTRIBUTING.md（セットアップ・品質ゲート・changeset・対応予定なし項目）/ SECURITY.md（Private Vulnerability Reporting 経由）/ issue テンプレ（bug・feature・config）を追加。README の Node 要件も >=22 に更新 | **済**（2026-07-15。Private vulnerability reporting 有効化済） |
| T5 | `engines.node` 更新 | `>=18`（2025-04 EOL）→ **`>=22`** へ（Node 20 も 2026-04 に EOL 済のため。CI と一致） | **済**（2026-07-15） |

### 小さい掃除

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T6 | `docs/reports/` の一時レポート削除 | `qa_standardization_summary.md`（2026-04-24）。参照ゼロを確認し削除（済んだ詳細は git 履歴） | **済**（2026-07-15） |
| T7 | 設定の不整合 | tsconfig の `"wimui/*"` wildcard を公開バレル13本の明示列挙に置換（deep import は型エラーになる）。`sideEffects` から未公開の `./src/icons.ts` を削除。`tsc --noEmit` / `check:api` パス確認済 | **済 → 一部巻き戻し**（2026-07-15。⚠️ `./src/icons.ts` の sideEffects 削除は 07-16 に **リグレッションと判明し復元**: Storybook は alias で src からビルドするため、本番ビルドで preview.ts のアイコン登録副作用 import が tree-shake され、name 指定の Icon が全て null 化していた（dev では発現せず、T11 の VRT 再建で Icon ストーリー8件の空描画として検出）。公開物に `./src/icons.ts` は含まれないため復元のコストはゼロ） |

### 運用維持・モダナイズ（2026-07-17 起票）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T13 | browserslist の明示 | `package.json` に `"browserslist": ["baseline widely available"]` を追加しサポートポリシーを Baseline に一本化。**ガード導入（eslint-plugin-compat / stylelint-no-unsupported-browser-features）は見送り**: 既用の relative color syntax・oklch・container queries 等の新しめ機能で誤検知が多く、T14 のウォッチリスト運用（採用方向）と役割が重複するため。必要になったら再判断 | **済**（2026-07-18） |
| T14 | 新機能ウォッチリスト自動化 | `docs/feature-watchlist.json`（待っている機能 → 昇格したらやる書き換え）+ `scripts/check-feature-watchlist.mjs` + 週次 workflow（`feature-watchlist.yml`、月曜。web-features@latest で判定し Baseline 目標段階へ昇格した項目の Issue を自動起票、タイトル一致で重複防止）。**初期 watchlist**: temporal（Date API v2 移行）/ anchor-positioning（Tooltip/Popover 位置計算削減）/ popover / field-sizing（useAutoResize 置換）/ scrollbar-gutter / customizable-select。※`beforeinput` は `input-event`（Baseline high 2022）に含まれ既に利用可のため watchlist 不要 → T15 の前提成立 | **済**（2026-07-18） |
| T15 | RichTextEditor のレガシー API 置換 | `document.execCommand`（非推奨・挙動がブラウザ依存、15箇所超）を `beforeinput` ベースへ書き換え or エディタ基盤再設計。`window.prompt` によるリンク URL 入力も自前 Dialog へ置換（ブラウザモーダルは UX/a11y 難あり、E2E でもブロッキング要因）。前提の `beforeinput` は Baseline high（2022）で確認済み＝着手可能 | **済**（2026-07-18。`commands.ts` に Selection/Range ベースの純 DOM コマンド層を新設し execCommand / queryCommandState を全廃（`Range.extractContents` の partial containment chain 複製を利用した wrap/unwrap、アクティブ判定は祖先走査）。undo/redo はネイティブスタック併用不可のため内部履歴に一元化（`beforeinput` の historyUndo/Redo + Ctrl+Z/Y 横取り、入力はデバウンス記録）。リンクは Dialog + Input へ置換（選択の退避・復元つき、キー3言語追加）。unit 64 + 実ブラウザ e2e 7 本（`vrt/richtexteditor.e2e.spec.ts`、window.prompt 不使用のガード込み）で検証。VRT 影響なし（静的描画は不変）） |
| T16 | Mentions の blur ハック正攻法化 | リストクリックを拾うための `setTimeout(200ms)` blur 遅延を `focusout` + `relatedTarget`（または `pointerdown` 先行処理）へ置換。フレーク源の除去 | **済**（2026-07-18。両手法を併用: ①各候補項目に `onMouseDown` preventDefault を付け、選択クリックで textarea のフォーカス（＝blur）を発生させない ②textarea の `onBlur` は `relatedTarget` がコンテナ外のときのみ閉じる（タブ移動・外側クリックに対応）。旧 `setTimeout(200ms)` を全廃。`onMouseDown` はロール要件（jsx-a11y interactive-supports-focus）回避のため listbox コンテナではなく既に `tabIndex=-1` の項目側へ配置。unit +2（relatedTarget 内包で非クローズ／項目 mousedown の preventDefault）。API/VRT/i18n 影響なし） |
| SMOKE | tarball スモークゲート | 公開される tarball を**リポジトリ外の隔離環境に install して実際に import・render・CSS/locale 解決**を検査するゲート（`scripts/smoke/` + `smoke.yml`）。VRT/a11y は src を alias でビルドして見るだけで公開物の import 可否や本番ビルド固有の欠落（過去の Icon `name` null 化・barrel crash）を捕まえられないため、それと独立した「公開して動くか」の signal を毎 PR に前倒し。ESM(import)/CJS(require) 両方で14サブパスを検査、Icon name 回帰ガード込み。bare=react/react-dom のみ（barrel crash 回帰ガード）、full=全 optional peer（手動/週次）。`npm run smoke` / `smoke:full` / `smoke:nobuild` | **済**（2026-07-18。PR #28。bare/full 両プロファイル全 PASS。確定契約: ルートバレル `.` は bare-safe、`data-display`/`ai`/`charts`/`rhf` は peer 依存、`tokens` は types-only。→ 発見を T17 に起票） |
| T17 | data-display / ai の optional-peer 混在解消 | スモークゲート初回実測で判明: `wimui/data-display` と `wimui/ai` は **peer-free コンポーネント（Accordion/Avatar 等）と optional-peer 依存コンポーネント（Markdown→`react-markdown`、CodeDiffViewer→`diff`）が同一カテゴリバレルに混在**。そのためカテゴリサブパスを import すると（peer-free だけ使いたくても）optional peer を要求する DX の角。※ルートバレル `.` は `-core` 分割で bare-safe なので回避経路はある。**対応候補**: ①peer 依存コンポーネントを `React.lazy`/動的 import 化してカテゴリバレルの eager 依存を外す ②peer 依存分をサブパスから分離（例 `wimui/ai/markdown`）③現状維持で「カテゴリサブパスは同カテゴリの最も重い peer を要求しうる」と明文化。公開前に方針決定推奨（消費者の install 体験に直結） | **済**（2026-07-18。**②を採用**＝component 別・kebab-case のサブパスへ分離。実測で「tree-shaking では解決しない」（`export *` が peer モジュールを解決しにいくため `import { Accordion } from "wimui/data-display"` すら esbuild で bundle 失敗）ことを確認した上での判断。**`wimui/data-display`・`wimui/ai` を peer-free（=core）化**し、peer 依存9コンポーネントを専用サブパスへ: `data-display/{markdown,qr-code,node-graph,schedule-view,json-diff-viewer}`・`ai/{streaming-text,markdown-renderer,code-diff-viewer,interactive-graph}`。exports/tsconfig/vite entry/peer-imports/api-snapshot/README(en+ja)/smoke manifest 更新。検証: スモーク bare で data-display/ai が PASS（66/21 exports・peer-free 化）、full で9サブパス全 PASS、**`Accordion` from `wimui/data-display` が esbuild で clean bundle**（元の wart 解消）。「no deep path 禁止」の意図的例外として README に明記。※root barrel `.` は従来どおり `-core` で peer-free） |
| T18 | 英語 README（公開前・必須級） | 現在 `README.md` は**日本語のみ**。npm のパッケージページに出るのはこの README で、npmjs.com / GitHub の読者は英語圏が主。API 名も英語なのに README が日本語だけだと**発見性と採用が大きく落ちる**。**対応**: `README.md` を英語（正本＝npm 表示用）にし、日本語は `README.ja.md` として残す（先頭で相互リンク）。※pt 版は不要（pt はランタイム対応ロケールであってドキュメント言語ではない） | **済**（2026-07-18。PR #31。`README.md` を英語正本化、`README.ja.md` に日本語全文を保持し先頭で相互リンク。内容の対応維持。pt 版は方針どおり不要） |
| T19 | tree-shaking 実測 + pnpm/yarn install-smoke | ①**tree-shaking 検証**: `wimui` を1コンポーネントだけ import したとき、**未使用の optional-peer 依存コード（recharts / react-markdown / fullcalendar 等）が最終バンドルから確実に落ちる**か実測（`sideEffects` 設定が効いているかの担保。落ちないと「Button だけ欲しいのに recharts が入る」事故）。②**pnpm/yarn install-smoke**: 現行スモークゲートは npm install ベース。pnpm は strict な node_modules（phantom deps 禁止）で **peerDependencies 宣言漏れを露呈させる**ため、pnpm/yarn でも install→import が通るかを検査プロファイルに追加。→ [[SMOKE]] の拡張 | **済**（2026-07-18。`run.mjs` に `--pm <npm\|pnpm\|yarn>` と `--treeshake` を追加。**①tree-shaking**: esbuild で `import { Button } from "wimui"` を react/react-dom のみ external で bundle し、未使用 optional-peer コードが落ちることを検証（残ると未解決 import で bundle 失敗＝検出）。実測 **Button 単体 44.6KB・optional-peer マーカー0**＝tree-shaking 正常。**②pnpm strict**: `npx pnpm@9 add` で install→import を検査。bare/full 両方 PASS（full は 14 サブパス全て strict 解決 OK＝peer 宣言漏れなし）。CI: `smoke.yml` に bare へ `--treeshake` を統合＋`pnpm` ジョブ追加。`npm run smoke:treeshake` / `smoke:pnpm`） |
| T20 | Storybook 画像の権利衛生 | 公開 npm パッケージには画像は入らない（`files:["dist"]`、dist に画像なし＝**公開物はゼロリスク**）。本項は**公開サイト（gh-pages Storybook）の衛生**。①同梱サンプル画像（`src/media/*`・`public/demo/*`・`public/images/*`）は **AI 生成**。残余リスクは「モデルがまれに商標/ロゴ/実在人物似の要素を出力しうる」点＝**目視確認**と、**生成ツール名+商用可 ToS の記録**で緩和。純 AI 生成物は著作権が発生しない可能性がある（＝自分が独占できないだけで侵害ではない）。②多数ストーリーの **Unsplash/picsum ホットリンク**は Unsplash License 下で低リスクだが、リンク切れ耐性で少数を CC0/自作へ自前ホスト化する余地。公開ブロッカーではない（低優先） | **済**（2026-07-18。同梱7枚を目視＝ロゴ/商標/実在人物/ランドマークの混入なし。写真調5枚は Google Gemini/Imagen 生成（SynthID 入り、商用可否は利用プラン規約に従う）、2枚は自作プレースホルダ。出所・目視結果・Unsplash ホットリンクの扱いを `ASSETS.md` に記録。公開 npm には画像なし＝消費者リスクゼロ。Unsplash 自前ホスト化は低優先の余地として記載） |
| CI-1 | `[skip ci]` head 問題（品質ゲートのすり抜け） | **VRT update のコミットバックが `[skip ci]` 付きで最終 head になると、その head で品質ゲート（Lint/audit:lib/check:tokens 等）が一度も走らないまま「緑」に見える**。2026-07-18 に T10（PR #27）でまさに顕在化: letter-spacing トークン追加を `token-snapshot.json` に反映し忘れたが、`[skip ci]` ベースラインが最終 head だったため Lint がスキップされ、赤が main に入り次の PR #29 で初めて検出（#29 で修正）。加えて同日、**push イベントの取りこぼし**で PR head に CI が起動しない事象も観測（空コミットで再トリガーして回避）。**重要な技術的事実**: コミットバックは `GITHUB_TOKEN` push のため GitHub の再帰防止仕様で**どのみち workflow を再起動しない**（∴「`[skip ci]` を外せば Lint が再実行される」は誤り。PAT を使わない限り head で自動再検証は不可能） | **済**（2026-07-18。**①実装**: `vrt.yml` に `update-gate` ジョブ（tsc / eslint / stylelint / check:imports / audit:lib）を追加し、`commit-snapshots` を `needs: [vrt, update-gate]` に変更（PR #33）。ベースライン更新フロー内でゲートを検証し、通らなければベースラインをコミットしない＝T10 型 drift を構造的に阻止（GITHUB_TOKEN 非依存）。**②ブランチ保護有効化**（ユーザーが GitHub UI で設定）: main に required checks `Lint & Type Check` / `Vitest`（＝paths フィルタ無しで常に走る2つのみ。paths 付きの Smoke/VRT/a11y は docs PR デッドロック回避のため必須にしない）、承認必須0（ソロ運用で自己承認不可のため）、PR 必須（直 push 禁止）、strict off。これで push 取りこぼし・チェックレス head・赤マージが**必須チェック不在＝マージ不可**でブロックされる。**③運用**: マージ前に `mergeStateStatus` だけでなく head の緑 required checks を確認し、チェックレス head（VRT update 後・push 取りこぼし）は空コミット等で再トリガー。→ [[ci-head-verification-gap]]）<br>**④追補（2026-07-21・別ギャップ発覚）**: 上記 ①〜③ は「PR head の品質ゲート＋マージブロック」を守るが、**`[skip ci]` が squash マージで main の merge commit に連結され `deploy.yml`（GitHub Pages）を含む全ワークフローを黙ってスキップする面は未対策だった**。#50（VRT baseline commit-back を含む PR）を squash したところ、merge commit へ `[skip ci]` が leak し Pages が自動再デプロイされず（手動 `gh workflow run deploy.yml --ref main` で回避）。**対策**: `vrt.yml` の commit-back メッセージから `[skip ci]` を除去（GITHUB_TOKEN push ゆえ元々 workflow 非起動＝副作用ゼロ、leak だけ消える）。→ [[skip-ci-squash-leak]] |
| CI-2 | NodeGraph (dark) の VRT フレーク | `dark/components-visualization-nodegraph--read-only` が**非決定的に描画**され、無関係な PR で VRT の赤ノイズを出す。2026-07-21 に #50 の VRT compare で顕在化: update 直後に撮った**自分自身のベースラインにすら差分**（1564px / ratio 0.01, dark のみ light は緑）→ 同シャード再実行で緑＝flaky 確定。 | **済**（2026-07-22。**真因を特定**: 力学レイアウトではなく（ノード位置は固定）、React Flow の `fitView` がノードを ResizeObserver で**非同期計測**してからビューポート transform を再計算するため、計測確定タイミング次第で zoom/pan にサブピクセル差が乗り、キャンバス全体の AA ジッタが `maxDiffPixels 400` を超える。**対応②（除外）を採用**＝ScheduleView と同じく **NodeGraph 全体を prefix 除外に集約**（`components-visualization-nodegraph--`）。根拠: `with-mini-map` は既に除外済（minimap が全体を縮小再描画して増幅）、`read-only` は #50 で update→compare 不一致を確認、`default` は `read-only` と非可視フラグ違いのみの同一静的描画で同じ計測ジッタを共有＝除外による可視カバレッジ損失ほぼゼロ。**根治（`defaultViewport` 固定で計測依存 transform を除去）を見送った理由**: 公開コンポーネントを `__VRT__` に結合させるか、ストーリーの demo 内容＋ベースライン変更が必要になり、フレーク1本のコストに見合わない） |
| CI-3 | pre-push フックが重い / Windows で脆い | `.husky/pre-push` が `i18n:check` + フル `vitest` + `build-storybook` を回す。2026-07-21 に **build-storybook が Windows の `EPERM`（ローカル dev サーバのファイルロック疑い）**で push をブロック（`--no-verify` で回避）。 | **済**（2026-07-22。ユーザー合意で **build-storybook のみ pre-push から除去**。EPERM の直接原因かつ重い部分で、ストーリー/MDX のビルド破綻は CI（vrt.yml / a11y.yml / deploy.yml が storybook build を回す）が完全カバー＝ローカル固有の価値なし。`i18n:check`（軽量・CI は paths 絞り）と全 `vitest`（cross-file テスト破綻を push 前に担保）は維持＝「push 前に固める」意図を保ったまま Windows の脆さと重さを解消。lint/型は既に pre-commit（lint-staged + tsc-check）でゲート済み） |
| CI-4 | release.yml の no-op ラン抑制 | `release.yml` が **main への push 毎**に走り `release` 環境の承認ゲートで `waiting` になるため、changeset を含まない push でも「no-op なのに承認待ちラン＋レビュー依頼メール」が毎回発生し、次の本番リリースを concurrency で詰まらせる（2026-07-21 に #53 マージで実発生、no-op ランを手動キャンセル）。**対応**: `on.push` に `paths: [".changeset/**"]` を追加。changesets の実リリース契機は必ず `.changeset/` を触る（追加 push=Version PR 生成 / Version PR マージの削除 push=publish）ことを #51/#52/#53 の実 diff で確認済み。安全弁に `workflow_dispatch` も追加（承認ゲートは維持）。 | **済**（2026-07-21） |
| CI-5 | VRT commit-back がブランチ保護で拒否 | ブランチ保護（PR 必須・直 push 禁止、CI-1 で 2026-07-18 有効化）により、`vrt.yml` の update commit-back（`GITHUB_TOKEN` の直 push to main）が **GH006「Protected branch update failed / Changes must be made through a pull request」で拒否**。2026-07-24 に T26 の新 story `Token/Presets` ベースライン生成の update dispatch で顕在化（update 4 シャード＋update-gate は全緑、最後の commit-snapshots のみ失敗）。＝**ブランチ保護有効化以降、VRT ベースライン更新が構造的に不可能だった**。**対応**: `commit-snapshots` を「TARGET が main のときは `vrt-baseline/<run_id>` ブランチへ push → `gh pr create` で PR 化」に変更（feature ブランチ context は従来どおり直 push）。`pull-requests: write` 権限を追加。[skip ci] は引き続き付けない（squash leak 回避）。**⚠️ 運用上の要注意（2026-07-25 #80 で実測）**: この baseline PR は **`GITHUB_TOKEN`（commit-back / `gh pr create`）で作られる**ため、**required checks（Lint/Vitest）が起動しない**（GITHUB_TOKEN 発の event は workflow を再トリガーしない GitHub 仕様）→ 通常マージ不可で **admin override マージが必要**（`enforce_admins=false` で可）。完全自動（checks 起動＋auto-merge）にするには **PAT を secret 追加して push/PR 作成に使う**必要あり（未導入。次に踏むならここ）。<br>**⚠️ 上の「起動しない」は誤り（2026-07-27 に実測で訂正）**: コミットバックの head でもワークフローは**起動している**。ただし全ラン（Lint / Vitest / a11y / VRT / Smoke など 7 本）が **`action_required`＝承認待ちで停止**していたため、`gh pr checks` が「no checks reported」を返し、起動していないように見えていた。**`gh api -X POST repos/<owner>/<repo>/actions/runs/<run_id>/approve` で承認すれば通常どおり全チェックが走り、required checks も揃う**（#131 で実証）。したがって **admin override マージも PAT 導入も必須ではない**。承認は run ごとに要るので、自動化するなら「commit-back 後に pending な `action_required` ランを一括承認する」手順（または repo 設定でこの承認要求自体を外す）が候補。**空コミットや close→reopen では再トリガーされない**（実測）ため、この承認が唯一の実効手段だった。※直 push の GH006 は解消し「baseline を PR で安全に取り込める」形にはなった（#80 で新 story `Token/Presets` の light/dark 2枚が main に着地）。 | **済**（2026-07-25。PR #79。baseline は #80 で admin マージ） |
| CI-6 | `vrt.yml` の `paths` が `pull_request` と `push` で非対称 | 起票 2026-07-31（T49 [#185] のマージ時に気付いた）。`pull_request` 側は `src/**` / `stories/**` / `public/locales/**` に加えて **`vrt/vrt.spec.ts` / `vrt/story-ready.ts` / `playwright.config.ts`** を見るが、**`push`（main）側はソース 3 つしか見ない**。そのため **VRT の設定そのものを変えた PR は、マージしても main で VRT が走らない**。実際 #185（`threshold` を `0.1` → `0.05`）のマージで main の VRT は 1 本も起動していない（Lint / Unit Test / Deploy のみ）。PR 側で 2 回連続緑を確認済みだったので実害は無かったが、**「閾値やハーネスを変えたのに main では一度も検証されない」形**なので、ベースラインと設定がずれても気付けない。**対応**: `push.paths` に `pull_request.paths` と同じ 3 つを足して揃える（3 行）。次に `vrt.yml` を触るときに同梱するのが自然。<br>**追記（2026-08-01・#208）**: 同じ非対称が **`a11y.yml` にも残っていた**（`pull_request` は 6 パス / `push` は 3 パス）。CI-6 は `vrt.yml` だけを直しており、**「1 つ直したら同型を全部見る」をやっていなかった**。T36 が `vrt/story-ready.ts` を触る＝欠けている当のパスだったため同梱して揃えた。**さらに全ワークフローを機械的に突き合わせたら `smoke.yml` も非対称だった**（`pull_request` 9 パス / `push` 2 パス）＝`tokens/**` や `scripts/build-style-entries.js` を変えた PR は、マージしても main で「公開して動くか」の signal が出ない。これも同梱。残る 11 本は `push` に `paths` を持たないか対称であることを確認済み。 | **済**（2026-08-01・#189。予定どおり `vrt.yml` を触る回＝T43 に同梱した） |
| CI-7 | `check-mdx-hardcoded` の全量モードが `stories/**` を見ていない | **済**（2026-08-01・#195） | 起票 2026-08-01（T47 の ProgressRing で MDX を新規追加したとき、**同じスクリプトが lint-staged では落ちるのに `audit:docs` では通った**ことから発覚）。`scripts/check-mdx-hardcoded.js:123` は引数が無いとき `globSync(`${docsDir}/**/*.mdx`)` ＝ **`./docs` しか走査しない**。引数ありのとき（lint-staged 経由）だけ `stories/**` の MDX を見る。つまり **CI では 206 個のコンポーネント MDX を 1 つも検査していない**。**実証済み**: 既存の `stories/feedback/Progress/Progress.mdx` を個別に掛けると落ちる（L22 のリンクテキスト `Progress Indicator Standardization` が生英語）。**つまり main には、全量モードが見ないおかげで通っている既存違反がある**。`check:slop` がラチェットを部分集合で比べて素通りしていた件と同型だが、**向きが逆で「全量のほうが狭い」**。 | `docsDir` を `docs` 固定にせず `stories` も含める（`globSync` を 2 本にするか glob パターンを配列に）。**既存違反が出るはずなのでラチェットが要る**（`check:slop` の `STYLE_OVERRIDE_BASELINE` と同じ形）／ **受け入れ条件**: 引数なしの実行で `Progress.mdx` の L22 を**鳴らせること**。あわせて修正後にラチェットを実測値で固定し、1 件足すと落ちることを確認する ／ **済（#195）— 走査範囲だけでなく除外リストの出所も直した。** ①全量モードが `./docs` と `./stories` の両方を見る（280 ファイル）②**コンポーネント名の除外を SSOT（`src/data/components.json`）から引く**。従来は `excludeWords` に名前を手書きコピーしており（「Missing component names」という節まであった）当然すぐ古くなって、あとから足したコンポーネントの MDX が軒並み鳴る状態だった ── **全量モードが見ていなかったので誰も気付けなかった**という二重の穴。**②だけで違反が 87 → 56 ファイルに減り**、GitHub Markdown の alert 記法（`[!NOTE]` 等＝構文）を除外して **53** で確定。**ラチェット 53 を 4 経路で実証**: 素の状態＝通る／**1 件足す＝落ちる（54 > 53）**／1 件減らす＝通ったうえで baseline を下げるよう促す／**部分集合（lint-staged）は従来どおり 1 件でも落ちる**。受け入れ条件の `Progress.mdx:22` も全量モードで鳴ることを確認。**残る 53 の中身**は表のセル・キー名・prop 値に混じって `<p>Managing tags via external state.</p>` のような本物の未翻訳文がある |

### llms.txt / AI 合成可能性（2026-07-23 起票）

`llms.txt` / `llms-full.txt`（`scripts/generate-llms.js`・`npm run llms:build`）は出荷済み（PR #64/#66/#67、npm `0.3.0` に #64 分は反映済み、recipe 分 #66/#67 は changeset 未同梱＝次リリース同乗）。addon-mcp 実測で「個別 API 正当性は addon-mcp が担うが、CSS 契約 + anti-generic 合成は llms.txt でしか埋まらない」と判明済み。以下は未着手の拡張候補。

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T21 | per-category の合成例（idiom 集） | full-screen recipe より粒度の小さい、カテゴリ内の慣用的な組み合わせ例を追加（例: form 群＝field+バリデーション+submit の最小フォーム / nav 群＝AppShell の sidebar⇔tabbar 切替 / feedback 群＝toast/alert フロー / overlay 群＝Dialog+フォーム）。`generate-llms.js` の `recipesExtra` と同様に管理し、サイズ配慮で `llms-full.txt` 限定 or 抜粋。**必須**: 全 prop を docgen 照合・app 形状（story 足場 `fn()`/`t()` 禁止）・合成ルール準拠 | **済**（2026-07-24。`generate-llms.js` に `idioms` セクション新設＝`## Idioms`（**llms-full.txt 限定**）。4 idiom: Form（Input の string `error` で field+validation+submit）/ Navigation（AppShell sidebar ⇄ TabBar 同一 nav データ）/ Feedback（persistent Alert vs `useToast().show`、ToastProvider）/ Overlay（Dialog 複合＝DialogTrigger/Close asChild + form）。全シンボル・prop を docgen 照合（Input/Textarea/Button/AppShell/Sidebar/TabBar.Item/ToastProvider/useToast/Alert/Dialog\*/Stepper）、icon 名は実在確認（Home/User/Settings/Document）。app 形状（`fn()`/`t()` なし・CSS 契約明示）・合成ルール準拠（1 protagonist・実データ・wobble 行）。concise の pointer 行を更新） |
| T22 | recipe のさらなる拡張（full-screen） | 現行4本（setup / composed screen / auth / settings）に加え billing table・onboarding flow・empty state・フィルタ付き data-table 等を追加。粒度は既存 recipe と同じ完成画面。**必須**: T21 と同じく docgen 照合・app 形状・合成ルール準拠。サイズ肥大時は `llms-full.txt` 限定に寄せる（concise は索引＋ポインタを維持） | **済**（2026-07-24。`recipesExtra` に §5–§7 追加（**llms-full.txt 限定**）: §5 Empty state（EmptyState + Center）/ §6 Filtered data table（SearchInput+Select toolbar → Table、client filter、jagged data＝no-team/suspended 行）/ §7 Onboarding（Stepper mid-flow + Card）。billing table は §2 と重複のため見送り。全 prop docgen 照合・app 形状・合成ルール準拠。llms-full.txt 190.6KB、concise は索引＋ポインタ維持（21.9KB）。T21 と同一 PR） |
| T23 | addon-mcp 側の底上げ（合成ルールを届ける・要調査） | addon-mcp 実測で、`get-storybook-story-instructions` は**汎用の Story 作法＋a11y のみ**で WIM の anti-generic 合成ルールや CSS 契約を含まないと判明。エージェントが addon-mcp 経由で作業する場合にもこれらが届くよう、Storybook の instructions/docs に **WIM 合成ルール要約を載せられるか調査**。**addon の設定余地は要調査**（内蔵 instructions テキストの上書き可否が不明。代替: ①合成ルールを docs entry（MDX）化して `list-all-documentation` / `get-documentation` に拾わせる ②preview 側で注入）。llms.txt と内容が重複するため**単一ソースから両方生成**する等で二重管理を避ける方針を推奨 | **保留（上流ブロック）**（2026-07-25 調査。`@storybook/addon-mcp@0.7.0` を解析＋実機検証。**結論: 現行版では addon-mcp 経由の"確実な"配信は不可**。①**ライブ MCP サーバ（`/mcp`）の instructions はハードコード** — `buildServerInstructions()` を返す getter（`dist/preset.js:2010-2019`）で `existingMetadata` を無視＝第三者拡張不可。②`experimental_storybookAi` フック（`joinInstructions(existingMetadata, 内蔵)`）は存在するが**別系統メタデータ用**でライブサーバに反映されず。自前 preset を addon-mcp の前に置いて実機検証→ module は load されるが `/mcp` initialize の instructions に WIM は入らなかった。③**docs ツール（`list-all-documentation`/`get-documentation`）は動作**し MDX を surface（T26 Presets doc も列挙）が、`get-documentation` は **MDX ソースを返す**（`<T>` 未展開）＝リテラル英語が必要で `check-mdx-hardcoded` と衝突、かつ「エージェントが docs ツールを呼べば」の**日和見的**配信。**判断**: 注入は見送り、**llms.txt を主配信チャネルとして維持**（T25 で入口ページ整備済）。**再着手トリガー**: `@storybook/addon-mcp` が server-instructions 拡張 API を提供したら（Dependabot の bump / changelog で検知）。※`docs/feature-watchlist.json` は web-features 専用（非 web 機能の id は `check-feature-watchlist.mjs` がエラー）のため addon-mcp はそこに載せない。調査で作った preset/single-source は機能しないため全て revert 済（ツリーはクリーン）） |

参考メモ: [[llms-txt-ai-composability]]（再フレームの経緯・addon-mcp 実測・recipe 管理方針）

### culti-ui テンプレの代替（2026-07-24 起票）

「Cult UI のテンプレのようなものが欲しい」というフィードバックへの、静的テンプレ集以外の代替案。テンプレ価値を **A. 初速（time-to-first-screen）/ B. 試せる（try-before-adopt）/ C. 見た目の即決（visual identity）** に分解し、既存資産を活かし低メンテな3本を採用。※コピーインCLI（`npx wimui add`）とスターターリポジトリは初速に効くが**ソロ維持コスト大・テンプレ陳腐化リスク**で保留。順序としては T24/T25 でエージェント合成の質を上げた後、その仕組みで少数の"看板テンプレ"を生成するのが合理的。

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T24 | StackBlitz/CodeSandbox 起動ボタン | 各 Pattern（`stories/Patterns/**`）に「Open in StackBlitz」を付け、wimui 配線済みの**編集可能な実行環境**を即開けるようにする（B＋A）。リポジトリ自体をソースにするため維持が軽い。**要調査**: Storybook docs から sandbox へ現在のストーリーコード＋依存を渡す方法（StackBlitz SDK / GitHub テンプレ連携 / project embed）。最小雛形に CSS 契約（`styles.css`）と `WimProvider` を含める | **済**（2026-07-24。**調査結論**: Pattern ストーリーは i18n/Storybook 形状（`t()` が Form だけで97箇所・`StoryObj`・src alias）で **そのままは runnable にならない**ため「story source をそのまま渡す」路線は不成立。代わりに **T21/T22 の検証済み app 形状 recipe を単一ソース**にした。**実装**: `sandbox/recipes/*.tsx`（5本＝Billing/SignIn/Settings/MembersTable/Onboarding、default export・`t()`/`fn()` なし・`from "wimui"`）を `sandbox/Playground.tsx` が **①default import でライブ描画 ②`?raw` import で StackBlitz へ送る source** の両方に使う（プレビューと sandbox が1ファイル由来で乖延不可）。「Open in StackBlitz」は**依存なしの form POST**（`https://stackblitz.com/run`、template=node、Vite+React19+`wimui@^0.3.0`・styles.css・WimProvider 同梱の最小雛形）。docs entry `Getting Started/Playground`（i18n 3言語 `docs_guide_playground.json`）。sandbox は `stories/` 外＝ハードコード英語ガード対象外だが **tsconfig include に追加して `tsc --noEmit` で型検証**。**副産物の実バグ修正**: 型検証で `Button intent="primary"` が無効（ButtonIntent=default/danger/success のみ）と判明→ sandbox＋**既存 llms recipe（§3/§4 既存分＋§5–§7/idioms）を全て修正**して再生成。※ボタン設置は各 Pattern ではなく専用 Playground ページに集約（story 形状の壁のため。ユーザー承認済み方針） |
| T25 | 「Using wimui with AI」ドキュメント | `llms.txt` / `llms-full.txt` の存在と使い方を1ページに集約（Cursor / Claude Code / v0 等へ渡すコピペ用プロンプト、公開 URL `…github.io/wimui/llms.txt`、npm の `wimui/llms.txt` サブパス）。作った資産の"入口"を見せるだけ＝**最小工数**。A（無限テンプレの入口）。MDX の docs entry として追加（i18n 3言語） | **済**（2026-07-24。`docs/UsingWithAI.mdx`＝`Meta title="Getting Started/Using with AI"`、storySort に `Using with AI` 追加。2ファイルの用途表・公開 URL / npm サブパス・コピペプロンプト（generic / Cursor / Claude Code / v0）・エージェントが受け取る内容の4節。i18n 3言語新設 `docs_guide_ai_agents.json`（`withai.*`、ja/pt は手動翻訳）。プロンプト本文は Command ブロックで英語据え置き（エージェント直読）。i18n:check / audit-mdx pass） |
| T26 | テーマプリセット / ブランドキット | 色・角丸・密度のプリセットを数種用意し、雰囲気を一発で切替（**C＝見た目の即決**＝他案と別軸の差別化）。トークン SSOT（`tokens/*.json` → `--wim-*`）があるので低コスト。**要検討**: 配布形態（追加 CSS or `WimProvider` の preset prop or `data-*` 属性）、公開契約（`styles.css` との関係）、プリセット数と性格付け（例: ミニマル / ソフト / コントラスト強）、VRT がプリセット別に増える点 | **済**（2026-07-24。**配布形態＝両方**: `data-wim-preset` 属性（土台の公開契約、theme/density と同格）+ `WimProvider` の `preset` prop（+ `setWimPreset`/`getWimPreset`/`WimPreset`/`WimPresetName`/`WIM_PRESETS` を barrel export、`check:api` 更新）。**単一ソース生成**: `tokens/presets/*.json`（角丸 + PCCS 参照アクセント）→ `scripts/generate-presets.js`（`tokens:build` に統合）→ `_presets.scss`（`[data-wim-preset]` レイヤーを `styles.css` に同梱）+ `presets.ts`（型/カタログ）。新規基底トークンは増やさない。**3種**: `minimal`（角丸2/4/4・既定アクセント）/ `soft`（角丸12/16/16・periwinkle violet `#6a64ae`）/ `bold`（角丸6/8/8・red `#ca1028`）。**a11y**: アクセントは PCCS 中トーンから「①塗り上白文字 ②リンク文字 `color-mix(primary,text-primary)` が白/ダーク両カード上」の**4条件すべて AA** を満たす単一値のみ採用（テーマ別分岐・`text-accent` 上書き不要）。実機 axe でライト/ダーク両テーマ **Violations 0** を確認。**VRT**: プリセット CSS は `[data-wim-preset]` 配下のみ発火＝既存スナップショット不変。可視化は `Token/Presets` 1ストーリー（showcase は `sandbox/PresetShowcase.tsx`＝ハードコード英語ガード回避、thin story で VRT/a11y カバー）。docs `Token/Presets`（`of=` attach、i18n 3言語 `docs_guide_presets.json`）+ DESIGN.md 節。**副産物**: audit-mdx が `<Meta of={…}>` を title として認識するよう改修。**要フォロー**: マージ後に VRT update dispatch で新 story のベースライン生成） |

参考メモ: [[llms-txt-ai-composability]]

### デザイン（コンポジション）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T8 | 既存 Patterns のコンポジションガイドライン準拠 | DESIGN.md「コンポジションガイドライン（AI 的な画面を避ける）」を新設（2026-07-16。`.claude/skills/composition-guidelines/` で自動参照）。既存 `stories/Patterns/**` は違反あり: Marketing ヒーローの 135deg グラデ + 定型構成 + Skeleton 偽スクリーンショット、Page の絵文字 `☰` + `gap: "16px"` ハードコード + 既定値 style 上書き等。Marketing ヒーロー 1 件を先に再設計 → VRT before/after で確認してから他へ展開 | **済（全19ストーリー展開完了）**（2026-07-16。ヒーロー: グラデ/定型構成/Skeleton偽スクショ/AvatarGroupソーシャルプルーフ除去 + 実 Stats/Sparkline カード + 3言語手動翻訳。展開: 全パターンのキャンバスを surface-app に統一、Feature の偽プレースホルダ→実コンポーネントデモ（Sparkline/Progress/Badge/AvatarGroup）、CTA の primary 全面帯+ボタン上書き→カード構成+実数統計（205/3/AA）、Page の絵文字☰→AlignJustifyIcon・px ハードコード→トークン・Stats/Card の既定値上書き除去・数量ボタン→Plus/MinusIcon+intent="danger"、ProductCard の Skeleton 偽画像→ImageIcon プレースホルダ、AI の macOS 信号機ドット（hex 直書き）→アドレスバー風表示。副産物のライブラリ修正: 見出し hyphens:auto 除外（en/pt）+ 見出し禁則 line-break:strict（ja）。ゲート全緑（eslint/audit:docs/audit:lib/i18n:check）。VRT ベースラインは T11 の全量 update（`12d09460`、2026-07-16）で更新済み。汎用コピー刷新も完了（2026-07-16 続報: feature/testimonial/pricing/compare/feature_comparison を3言語で具体化、実在企業名入りの偽推薦文を撤去。ReactHookForm ストーリーの i18n-ignore 英語逃しも翻訳キー化し、ラチェット基準 36→28 に短縮） |
| T9 | ライトテーマのサーフェス値調整（階層の可視化） | サーフェス**語彙**は整備済みだがライトの**値**に差がない（`surface-app` = `surface` = `#fff`）。これがパターン側のグラデ即興の根本原因。PCCS Gy-9.5 相当の `gy9-5` を base.json に追加し `surface-app`（ライトのみ）へ割当 → 灰キャンバス+白カードの階層を成立させる。ダークは既に `#262626`/`#393939` で差があるため変更なし。`tokens:build` + DESIGN.md 値表更新 + VRT ベースライン更新が必要 | **済**（2026-07-16。`gy9-5` 追加・`surface-app` 割当・AvatarGroup リングを `surface` へ修正・Storybook 実機で #f5f5f5 適用確認済。VRT ベースラインは T11 の全量 update `12d09460` で更新済み） |
| T10 | タイポグラフィの主張強化 | 見出し用書体（または大サイズの letter-spacing 詰め・ウェイト差拡大）と見出し/本文のサイズジャンプ強化。`tokens/typography.json` 変更で全コンポーネントに波及するため VRT 全面更新前提 | **済**（2026-07-18。行高＋字間で完了、書体追加・サイズジャンプは方針として見送り）。①**行高**（2026-07-16）: Title の `line-height: normal` をトークン化（基本 snug 1.33 / xl 以上 tight 1.2、`[lang="ja"]` で snug-jp 1.5 / tight-jp 1.4 に出し分け）。②**字間**（2026-07-18）: `letter-spacing` トークン新設（normal 0 / tight -0.01em / tighter -0.02em）。Title に適用＝中〜大見出し tight・ディスプレイ段（xl〜xl4）tighter・小見出し（xs/sm）normal。**和文は詰めない**（かな/漢字は仮想ボディが詰まって見えるため `[lang="ja"]` で 0 出し分け＝規約3）。実機実測 en 見出し -0.020em / ja 0 を確認。③**見送り判断**: **見出し書体の追加は見送り**（en/pt はラテン1書体で賄えるが ja は和文ディスプレイ書体が別途必要＝数MB増・FOUT・公開CSS契約変更で web フォント非同梱の思想と衝突。3言語対称を優先しユーザー合意 A）。**サイズジャンプ強化も見送り**（Title の実効比は 1.265 定数。ディスプレイ段だけ 1 段上げると lg→xl に 1.602 の段差が入り定数が崩れる。一様に上げるには全 font-size トークン改訂＝全面波及になるため今回は据え置き、ユーザー合意）。DESIGN.md に字間節を追記。VRT 影響: 見出しの字幅がわずかに変わるため push 後に update dispatch） |
| T12 | a11y(axe)の実違反バックログ解消 | 起票時は「82 失敗」だったが、waitForStoryReady 移植（旧 goto+300ms はコード分割ストーリーのマウント前に axe が走り空 root を検査＝偽 pass）でローカル全量実測 **222 失敗**が真の規模と判明。根因は4クラスタ: ①dark の intent 色（濃色トーン）をテキストに流用（1.0〜2.5:1 が大量）②light の warning/success をテキスト流用（warning #ccb914 は白背景でも 2.0:1、success は T9 の #f5f5f5 化で 4.26 に転落）③構造違反（aria-hidden 内 focusable・label 欠落・nested-interactive・不許可 ARIA 属性・FullCalendar/ReactFlow 内部）④ストーリー直書き（color:"black"・素 button・color-mix デモ等） | **済（2026-07-17、全量 1,986 テスト全緑）**。対応: `text-success/warning/info` トークン新設 + text-danger 調整（light dp2、dark #ffa3a3）+ dark の text-accent/tertiary/on-disabled/on-success/on-danger 再調整。intents SSOT に **text ロール**追加（outline/subtle の文字色を AA 安全に解決）。Alert/Banner/Toast/Stats の oklch(l*0.7) 暗色化を text-* へ置換。Text/Title の primary/secondary を text 系トークンへ。構造修正: Sparkline(Recharts a11y layer 無効化)/Terminal/TagInput/PromptInput/SmartSearchInput/RTE/MarkdownRenderer(既定 aria-label 内蔵、i18n 3言語)/Tabs(パネル登録制 aria-controls)/Mentions/JsonViewer/ContextMenu(role=button 廃止)/CodeBlock/CodeDiffViewer(tabIndex)/ScheduleView(MutationObserver パッチ)。ストーリー修正多数 + heading-order。付随: **a11y CI を 4 シャード化**（timeout 30min + concurrency）、スペックに waitForStoryReady 移植（vrt/story-ready.ts へ共有化）、landmark 系 4 ルールを Storybook 合成起因として除外。**注意: dark 中心に見た目が広く変わるため push 後の VRT update 必須**。DESIGN.md 値表更新済 |
| T31 | docgen キャッシュキーの自動導出（CACHE_VERSION 上げ忘れの排除） | 起票 2026-07-26、**済**。T27 で入れた `check:llms`（`generate-llms.js --check`）が #113 の CI で落ちて発覚。原因は**ローカルの docgen キャッシュが古かった**こと: `src/data/.docgen-cache.json` は**ファイルの content hash** をキーにするので、ソース編集は自分のエントリを無効化するが、**`docgen-plugin.js` 側のパース／描画ロジックを変えた場合は content hash が変わらない**。そのための `CACHE_VERSION` があるのに上げ忘れられており、暖かいキャッシュを持つ全員が古い出力を得ていた（実測: `@default "required"` vs `Defaults to the localized \`form.required\` string.` の 4 行差）。**影響は llms.txt に留まらない** — `src/data/docgen_*.json` は MDX の `<Docgen>` が読むデータそのものなので、古いキャッシュのまま Storybook を見ていた人には **Props が間違って表示されていた**（デプロイはクリーンビルドなので公開サイトは無事）。当面は 6 → 7 のバンプで解消済み（#113）だが、**「ロジックを変えたら CACHE_VERSION を上げる」という人間の記憶に依存した運用が残っている**。**対応候補**: ①`docgen-plugin.js` に差分がある PR で `CACHE_VERSION` も変わっていることを検査するガード（`check-slop.js` 系と同じ発想。git diff ベース）②キャッシュキーに `docgen-plugin.js` 自身の content hash を混ぜる（バンプ自体を不要にする＝より根本的）③キャッシュを廃止（パース時間とのトレードオフ。実測 llms:build は 1.6 秒） | **済**（2026-07-26、PR #113。**②を採用**＝キャッシュ全体のキーを  自身の content hash +  のバージョンから自動導出し、手動の  定数を廃止。ロジック変更時に自動で全無効化される。検証: 無変更なら「all from cache」、1 行変更で「cache updated」、戻すとキーも元に戻ることを実測。①のガードは不要になったため見送り、③は 1.6 秒の実測から現状維持） |
| T30 | 「prop があるのに style で書いている」の機械強制 | 起票 2026-07-26、**済**。T15 の修正で消したインライン style 宣言 31 件のうち、既存の `check:slop`（styleOverride）が数えていたのは **1 件だけ**だった。残り 30 件は `padding: "var(--wim-spacing-3xl)"` のように**トークンを使っているため px 直書きに当たらず、`0` リセットでもない**ので、どちらの網にもかからなかった。つまり DESIGN.md 必須ルール 3 の**最も多い違反形が検出対象から丸ごと抜けていた**（ラチェットの 109→108 という数字は実態を表していない）。対策として `PROP_BACKED` テーブルを追加し、値がトークンか px かに関係なく「その prop を持つコンポーネントで style 指定している」ことを検出する。**ハードゲート（baseline 0）**＝ T15 で全件解消済みなので増加を一切許さない。対象は prop との対応が明確なものだけ（`Card`/`Stats` の padding→`padding` / borderRadius→`radius` / border→`variant`、`Box` の padding→`p` / borderRadius→`radius` / boxShadow→`shadow`）。`borderColor` は対応する prop が無く強調の意味付けに使う正当なケースがあるため対象外 | **済**（導入時に手動監査が見落としていた `Box` の違反 6 件を検出＝`Page:577` / `Marketing:902,926(×2)` / `AI:231,241`。すべて prop へ移行済み） |
| T28 | コンポジション監査の指摘（DESIGN.md ルール 8〜11 で既存を掃いた結果） | 起票 2026-07-26、**未着手**。①**影と枠を両方持つ Card 14 箇所**（`Form.stories.tsx:50,145,264,407,514` / `Marketing:144,223,299,412` / `Page:390,574,639` / `ReactHookForm:89,272`）: `Card` の既定 `elevated`（影）にインライン border を足しているうえ、`padding` prop があるのに style で上書き＝ルール 8＋3。**ただし単純に prop へ寄せられない**: 現場の値は `spacing-xl`〜`5xl` だが Card の `padding` は sm=`md` / md=`xl` / lg=`2xl` までしか実装が無く（`padding-3xl` 等はクラスが存在せず無効）、border 色も `border-secondary` を使っている（`variant="outline"` は `border`）。**Card 側に padding スケール追加（加算・非破壊）が要る**か、意匠として border-secondary を選べる手段が要る。②**`Marquee.stories.tsx:22,26,45,49` の `color="primary"`/`"secondary"` が死んだ prop**（Badge に `color` は無く、span の legacy HTML 属性として素通り。2 色出し分けたつもりが両方 primary。TS は通る）。③intent 未指定でアクセント色になる箇所: `BentoGrid:38-41`（機能タグ 4 つ）/ `AI:186`（`v2` バッジ）/ `Page:490`（`p.category` に `intent="primary"`＝カテゴリを色で運んでいる）。④**`Stats.stories.tsx:50-52`「Active Alerts 12 / ↓ -5%」が danger の赤**＝アラート減少という改善を悪いニュースの色で描画（ルール 11 の逆向き。コンポーネント自身のショーケースなので教材として優先度高） | **済**（PR #109） |
| T29 | docs の px 直書き 66 件 | 起票 2026-07-26、**未着手**。`check:slop` を `docs/*.mdx` の `<style>` に拡張して可視化された既存負債。`Configure.mdx`（`padding-left: 20px` / `font-size: 14px` / `box-shadow: 0 1px 3px rgba(...)` 等）、`Colors.mdx`、`AppLayout.mdx`（レイアウト図の `grid-template-*`）が主。**@media の px は対象外**（CSS 変数はメディアクエリで解決されないため意図的に除外済み）。トークンへ寄せたら `scripts/check-slop.js` の `STYLE_OVERRIDE_BASELINE` を実測値まで下げる | **済**（PR #111。残 10 件はトークン非対応の実寸） |
| T27 | Playground のコンポジション再設計と AI-slop ガード拡張 | 起票 2026-07-26。Playground が「同型カード5枚の等間隔スタック・全カードに solid アクセント・同構文の説明文」で AI 的だった。**副産物として発見した実害が本体より大きい**: ①`.storybook/docs-common.scss` の `!important` テーブル上書きがライブラリの `<Table>` に当たりボーダー二重・角丸入れ子 ②Storybook の docs CSS が span/見出し/セルを再スタイル（`sb-unstyled` で解決） ③`Badge`/`Tag`/`Chip` の `intent` 未指定が `primary` に落ち、「普通の値」が例外値と同じ声量で塗られる ④`neutral`×`subtle` が light で不可視（base=`disabled` の 15%） ⑤`Stats.Trend` が `up`=成功色固定のため「増えると悪い指標」を good news として描画 ⑥`Card`/`Stats` の既定 `elevated` で影あり/なしが同一画面に混在 | **済**（2026-07-26、PR #108）。主役1つ＋非対称2カラム（7fr/5fr、カラムを Stack にして詰める）に再設計。docs 上書きは `:not(.sb-unstyled table)` で除外、MDX は px 直書き→トークン。`intents.json` に任意の `subtle` ロールを追加し neutral を不透明化（light 8.5:1 / dark 6.5:1）。**check:slop のスコープを `sandbox/**` と `docs/*.mdx` の `<style>` へ拡張**し、その過程で 2 つの欠陥を修正: ラチェットが lint-staged では常に素通りしていた（部分集合と全体基準の比較）／px 正規表現が単独値しか拾えず `padding:"0 16px"` が漏れていた（広げたうえで `style={{}}` 内に限定＝散文の誤検出回避）。ベースライン 109 で凍結（docs 66 / Patterns 41 / sandbox 2、docs は既存負債）。`Patterns/Playground` ストーリーを追加し VRT + `judge:slop` の対象化。DESIGN.md に必須ルール 8〜11 とチェックリスト 5 項目、SKILLS.md に `sb-unstyled` 節と subtle 15% 節を追記。**残: docs 66 件の px 負債の解消、Badge/Tag/Chip の既定 intent を neutral にするか（破壊的・0.6.0 相当）** |
| T11 | VRT 基盤再建 | 調査で判明（2026-07-16）: ①直近40ランが cancelled20/failure16/success3 で、main の compare は 6h 上限到達で全滅（993 stories×2 themes を workers=2 の単一ジョブで回す構造が原因）②スナップショット 4,117 枚中、CI 未使用の chromium-win32 が 2,942 枚・削除済みストーリーの orphan が 80 枚・dark-linux は 230 枚しかない歴史的部分集合 ③マウント待ち導入前の世代の不良ベースライン（Storybook マネージャ UI + スピナーが写った画像等）が残存 | **着手中**（2026-07-16。win32 2,942 + orphan 80 を削除（linux 1,095 維持）。vrt.yml を 4 シャード matrix + 90min timeout + concurrency 自動キャンセル + update はシャード毎 artifact → merge job で一括コミットバックに再設計。playwright workers CI 2→4。**追加で真因2件を発見・修正**: ① 6h タイムアウトの正体は `npx serve -s`（バージョン未固定）が `/iframe.html` を 301 → `/iframe` にリダイレクトしマネージャ UI を配信 → 全テストがマウント待ちで空回りしていたこと。`http-server@14 -c-1` のリテラル配信に固定（不良ベースライン「マネージャ+スピナー」画像の発生源も同じ）。② T7 の sideEffects 削除リグレッションで本番ビルドの Icon レジストリが空 → name 指定 Icon が全 null（VRT の Icon ストーリー空描画 8 件で検出、`./src/icons.ts` を sideEffects に復元）。シャード実測: 約500テスト/12.5分。**07-16〜17 完了**: 全量 update 完走（9分49秒、1,986枚→非決定分除外後 1,916 枚コミットバック、dark 全量含む）。compare を4回反復して回転フレークを収束（13→8→3→0）: maxDiffPixels 400（AA ジッタ ≤220px 実測を吸収）+ 非決定ストーリー除外（Audit/* 21件=内部QA合成ページ、ChatUI/PromptInput=prefix、Toast/LoadingOverlay 等 ID 指定14件）。最終 compare 全緑。除外基準「同一コミットで update→compare が落ちること」をスペックのコメントに明記） |

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
| T32 | 未合成コンポーネントを実アプリ形状で使う | **P1** | 上記 A の 4 件はすべて「1 画面作ったら出てきた」もので、ガードを設計して見つけたものではない。**今のところ最も打率が高い探索手段**。まだ合成していない画面形状: 一括選択＋インライン編集のある管理テーブル／バリデーションエラー付きの複数ステップ／empty・error・loading を主役にした画面／モバイル前提のレイアウト。デモではなく「足場のない app-shaped コード」で書くこと（Playground のレシピが該当。Storybook / i18n の足場があると穴が隠れる） | 合成カバレッジを指標化する: `stories/Patterns/**` + `sandbox/**` の JSX から使用コンポーネント名を集計し、`src/data/components.json` の総数と比較（2026-07-26 実測 45/221）。画面を足すたびに再測し、**出た穴を必ず起票する**（数字ではなく出た穴が成果） |
| T33 | 型は受け付けるのに実装が無い prop 値の検出 | **済** | `Card` の `padding="xl"` が典型 — `ComponentSize` 全体を受け取る型なのに `.padding-xl` クラスが存在せず、**書いても黙って無効**だった。誰も端の値を使っていなかったので誰も気づかない。同型の穴が他にもある可能性が高い | `styles[\`<prefix>-${prop}\`]` 形式のクラス参照を持つコンポーネントについて、**prop の型 union と `*.module.scss` のクラス集合を突き合わせる**。docgen が prop union を持っているのでそこから取れる。※ 2026-07-26 に簡易スキャナを書いたが自己検証が通らず結果を破棄した（0 件という出力は信用していない）。作り直して `npm run check:prop-classes` として実装（**済**）。敗因は SCSS のパス解決をコンポーネント名からのケバブ変換で行っていたこと（`loadingoverlay.module.scss` / `faq-section.module.scss` を外していた）＝ディレクトリ glob に変更。prop の受け入れ値は docgen の `tsType` から取る。受け入れ条件どおり #109 以前の Card を再現して 11 → 14 件に増え `padding="xl"` を名指しで検出することを実証済み。ラチェット（baseline 11） ／ **受け入れ条件**: #109 以前の `Card`（`.padding-xl` クラスが無い状態）に対して走らせて**鳴ること**を実証する。 |
| T34 | intent × variant × サーフェスのコントラスト計算検証 | **済** | `neutral` × `subtle` が light テーマで不可視だった件。**個々のトークンは正しく、組み合わせだけが壊れていた**。しかも **VRT では原理的に捕まらない**（`threshold: 0.1` を下回る色差は差分ゼロ扱い。実際 dark 側のベースラインしか動かなかった） | `tokens/intents.json` と `_token-common.scss` の導出規則（subtle = base 15% alpha 等）を再現して色を解決し、**WCAG コントラスト比を計算**。非テキスト UI 要素は 3:1、テキストは 4.5:1 を閾値に、light / dark 両テーマ × 置かれうるサーフェス（`surface` / `surface-app` / `surface-subtle`）の全組み合わせを検査 ／ **受け入れ条件**: #109 以前の `neutral` × `subtle`（light テーマで `#fbfbfb` 相当＝白背景に対し不可視）に対して走らせて**鳴ること**を実証する。 ／ **済**（`npm run check:contrast`。126 組を検査。文字は WCAG 4.5:1、塗りはサーフェスとの OKLab 距離 0.015 — **後者は WCAG 由来ではなく実測から決めた**: 壊れていた neutral×subtle が 0.0072〜0.0116、現存最小の正常値が 0.0217 でその間。受け入れ条件どおり #109 以前の状態を再現して 4 組が鳴ることを実証済み。`audit:lib` / lint-staged に配線。subtle のアルファは `_token-common.scss` から読み、読めなければ落とす＝導出規則の変更を黙って見逃さない） |
| T38 | 「書いても効かない prop 値」の始末 | **済**（2026-08-02・0.13.0。**版番号での予約を 4 回外したあと、版を決めずに PR を出して片付いた**） | T33 の検出器が出した実在の欠落。**型が `ComponentSize` 全体を宣言しているのに実装が部分集合**という共通パターン: `Card.padding`（xs/4xl/5xl が無い）・`Card.radius`（xs/xl/2xl/3xl/4xl/5xl が無い＝実装は none/sm/md/lg のみ）・`Spinner.labelPosition="right"`・`FAQSection.layout="top"`。**方針の判断が要る**: ①CSS クラスを足す（加算・非破壊だが「radius 5xl とは何か」を新たに決めることになる）②型を実装に合わせて狭める（`Extract<ComponentSize, "sm" \| "md" \| "lg">` 等。**型が真実を語るようになるが union の縮小は破壊的変更**＝`api-snapshot.json` が変わる。ただし「黙って効かなかった値」なのでコンパイルエラーになるコードは元から壊れていた）③現状維持でラチェット凍結 | **11 → 6**（2026-07-26）。内訳: ①**偽陽性 2 件**は検出器側を修正（`Spinner.labelPosition="right"` / `FAQSection.layout="top"` はいずれも **prop の既定値**で、既定は基底スタイルが実装するため修飾クラスは不要。docgen の `defaultValue` を見て除外するようにした）②**トークンが実在する 3 値を実装**（`Card` の `padding-xs` → `spacing-sm`、`radius-xl` → `radius-xl`、`radius-2xl` → `radius-2xl`）。**残り 6 件は 0.7.0 で型を狭めて解決する**（当初 0.6.0 予定だったが 2026-07-27 に移動）: `Card.radius` の xs/3xl/4xl/5xl（radius トークンが sm/md/lg/xl/2xl/full しか無く、実装するには新トークンの新設が要る＝RULES.md が禁止に近いとしている）と `Card.padding` の 4xl/5xl（spacing が 5xl 止まりのため実装すると**両者が同じ余白になり区別できない**＝受け付けるのに意味が無いのは同じ）。**縮小は破壊的変更**なので 0.6.0 に置く。縮小後は baseline を 0 にしてハードゲート化できる |
| T35 | StackBlitz レシピが実際に起動するか | **済**（2026-07-26・#123） | `sandbox/recipes/*.tsx` は「Open in StackBlitz」で公開版 `wimui` に対して起動する建付けだが、**このリポジトリ内で `tsc` が通ることしか確認していない**。公開版パッケージ＋宣言された peer だけで動くかは未検証 | 既存の tarball スモークゲート（`scripts/smoke/`）の土台を再利用し、レシピを隔離プロジェクトに配置して `vite build` が通るかを検査。Playground の StackBlitz scaffold（`PACKAGE_JSON` / `MAIN_TSX`）と同じ構成にすること ／ **受け入れ条件**: レシピの import を 1 つ壊した状態で**落ちること**を実証する。 ／ **済**（`node scripts/smoke/run.mjs --recipes` = `npm run smoke:recipes`。既存の tarball スモーク基盤を再利用し、隔離 consumer で各レシピを `wimui/styles.css` + `WimProvider` + レシピの入口から esbuild で bundle。5 本すべて PASS。CI は bare ジョブに `--treeshake --recipes` として相乗り。**受け入れ条件の検証で 1 度失敗を経験している**: import 名だけを書き換えて JSX 側を残したところ通ってしまった＝未使用 import は tree-shake されて検査されない。両方書き換えれば落ちる。この限界はスクリプトのコメントに明記済み） |
| T36 | ホスト環境マトリクス | **済**（2026-08-01・#208） | ライブラリが描画される環境は Storybook canvas / Storybook docs MDX / StackBlitz / 利用者アプリの 4 つだが、**継続検証されているのは canvas だけ**。docs MDX が壊れていたのは T27 で偶然見つけた（`sb-unstyled` で解決済みだが回帰ガードは無い） | カナリア画面を各ホストで描画し、主要コンポーネントの computed style（font-size / border / padding）を突き合わせる。canvas を基準に差分が出たらホスト側 CSS の侵入を疑う ／ **受け入れ条件**: `docs/Playground.mdx` から `sb-unstyled` を外した状態で**差分が出ること**を実証する。<br>**済（2026-08-01・#208）。** `vrt/host-matrix.spec.ts` が、同じコンポーネントを **canvas / docs 本文 / docs の Canvas ブロック**の 3 ホストで描画し、computed style 18 宣言を 突き合わせる（2 テーマ × 3 カナリア = 6 ケース）。**canvas を正**とする — 出荷される CSS が 素で当たるのは canvas だけなので、差は例外なくホスト側スタイルシートの侵入を意味する。ピクセルでなく computed style を見るのは、①落ちたときに「どの要素のどのプロパティがいくつ違うか」がそのまま出る ②docs 本文は canvas より狭い measure を持つのが正しく、絵は元から一致しない、の 2 点から。<br>**書く前に測った。そして起票時の想定より壊れていた。** 素の状態（`sb-unstyled` あり）で **light 5 件 / dark 19 件**が既に食い違っていた:①`.sbdocs-content pre` に除外が付いておらず `pre.wim-code` が canvas 2px / docs 4px。**すぐ下の table 規則には付いていて、コメントで理由まで説明してある**のに 2 行上が漏れていた。②dark で `.sbdocs-content p { color: … !important }` が `<Text color="secondary">` を白に潰し、**二次テキストが一次テキストと同じ色**になっていた。③dark の `.sbdocs-content code` が `Code` をフォントサイズ・枠・余白ごと乗っ取っていた（docs の Canvas ブロックでも 9 プロパティ食い違い＝**`sb-unstyled` の外側なので本文を直しても残る**別ホスト）。<br>**根因はセレクタごとの貼り忘れ**だったので、除外に名前を与えた: `.storybook/_host-scope.scss` の `$prose-only`（`:not(.sb-unstyled *):not(.sb-story *)`）。**タグ名を含めない形**にしたのが要点で、旧来の `:not(.sb-unstyled table)` はタグを繰り返すぶん「table には付けたが pre には付けていない」を許した。<br>**実証（通る経路すべて）**: 受け入れ条件どおり `docs/Playground.mdx` から `sb-unstyled` を外すと **light 1082 件 / dark 1041 件**で落ちる。これを **dev サーバ経路と CI 経路（`build-storybook` → http-server 配信）の両方**で再現し、同じ件数になることを確認した。**鳴ってはいけない側**も同時に確認: その状態でも **Code の 2 カナリアは緑のまま**（Playground の MDX を触っても Code の docs ページには影響しないのが正しい）。素の状態は CI 経路で **2 回連続緑**。<br>**ガードが何も見ずに緑になる形を 2 つ塞いだ**: 根セレクタが空振りしたら 0 要素で落とす／両ホストの要素数が違ったら対応を取らずに落とす。前者が無いと、セレクタが古びた瞬間に**全ケース緑**になる（T37 で実際にやった失敗と同型）。<br>**残っている穴**: カナリアは Playground と Code の 2 種類だけで、docs ページは 281 件ある。また 4 つ目のホスト（StackBlitz / 利用者アプリ）は未着手 — こちらは `smoke:recipes` が公開 tarball に対して別の角度から見ている
| T39 | 合成ルールの SSOT 化 | **済**（2026-08-01・#205） | 起票 2026-07-27。**汎用の合成ルール本文が 3 箇所に複製されている**: `DESIGN.md`（日本語・人間と `composition-guidelines` skill 向け）／`scripts/generate-llms.js`（英語・llms.txt = 外部 AI への主配信）／`scripts/judge-slop.mjs`（採点ルーブリック）。同日「クロームを黙らせる」と「狭い幅で見る」の 2 ルールを足した際、3 ファイルを手で編集した。**前例がある**: AI-slop 辞書は `scripts/slop-dictionary.json` を単一ソースにして `check:slop` と `generate-llms.js` の両方が読む形になっている。※`.claude/skills/composition-guidelines/SKILL.md` は「本文は複製しない・DESIGN.md を読む」手順のみなので複製元ではない。**「汎用ルールは skill・プロジェクト固有は DESIGN.md」という分け方は採らない**: design.md の spec（トークン＋根拠の自己完結文書）にも Agent Skills の仕様（手続き知識の可搬パッケージ。company/team 固有の文脈も含んでよいと明記）にもその分担は書かれておらず、llms.txt という**外部 AI 向けの主配信経路が skill とは別に存在する**ため、汎用分を skill へ移すと公開物の生成元が Claude Code 専用ディレクトリに依存する。現行の「skill = 手順 / DESIGN.md = 規範の SSOT」を維持する | 合成ルールを機械可読な単一ソース（例 `design/composition-rules.json`）に置き、DESIGN.md の表・llms.txt の Must rules・judge のルーブリックを生成する。**受け入れ条件**: ルールを 1 つ足して 3 つの出力すべてに反映されることを実証する<br>**済（2026-08-01・#205）— 複製は既にドリフトしていた。** 起票時は「複製されている」という状態の指摘だったが、着手して突き合わせたら**実害が出ていた**: DESIGN.md の必須ルール 12 のうち **『エレベーションのスタンスも 1 画面 1 つ』と『`intent` は省略せず明示する』が llms.txt に 1 度も届いていなかった**（llms 側の Must rules は 10 件だった）。特に後者は「既定が `primary`」という既定値で事故るルールで、**画面を組む AI にこそ必要**なもの。逆に judge-slop の `fake_chrome` / `generic_gradient` / `centered_overuse` は DESIGN.md の禁止パターン表由来で必須ルールには無い ── **3 箇所が別々に育っていた**。<br>**実装**: `scripts/composition-rules.json` を単一ソースにした（前例は `slop-dictionary.json`）。**3 つの出力は粒度も目的も違う**ので、1 ルールが 3 つの面を持つ形にした: `ja`（DESIGN.md 用の規範）/ `en`（llms.txt 用・外部 AI がそのまま従える粒度）/ `judge`（judge-slop のルーブリック）。`generate-llms.js` と `judge-slop.mjs` は**そこから生成**する。**DESIGN.md だけは生成しない** ── 根拠と実例を含む散文なので、代わりに `designAnchor` で**対応する本文が存在することを検証**する（`check:composition-rules`）。<br>**結果**: llms.txt の Must rules が **10 → 14 件**になり、届いていなかった 4 ルール（エレベーション / 二重の枠 / `intent` 明示 / 色は良し悪し）が入った。<br>**受け入れ条件を実証**: SSOT にルールを 1 つ足すと ①ガードが DESIGN.md と llms.txt の欠落を検出し ②DESIGN.md に本文を足して再生成すると **DESIGN.md / llms.txt / llms-full.txt / judge-slop の 4 つすべてに反映**され ③ガードが通る。プローブは撤去済み。**着手直後にガードが実在の欠落を 1 件検出している**（`fake_chrome` は judge-slop で採点していたのに DESIGN.md 側は「偽スクリーンショット」という別の表現しか無かった）
| T40 | `src/` の生 UI 文字列を検出するガード | **済**（2026-08-01・#202。ラチェット 27 で開始） | 起票 2026-07-27（T32 の穴 ①）。`check-stories-hardcoded` は `stories/**` のみ、`check-i18n-components` は「src は型付きキー（`WimI18nKey`）で守る」として**意図的に src を走査しない**。しかし型が守るのは**キーの間違い**であって、**`t()` を呼ばない生文字列**は誰の網にもかからない。実際 `DataGrid` のページャ文言 3 件と aria-label / alt の 8 件が漏れていた | `src/components/**/*.tsx` を対象に、JSX テキスト子要素・テキスト系 prop・`aria-label` / `alt` の生英語を検出（`check-stories-hardcoded.js` の検出器を流用可）。既存 11 件を baseline にしたラチェットで開始し、解消後に 0 でハードゲート化 ／ **受け入れ条件**: `DataGrid.tsx:353` を含む既知 11 件を**鳴らせること**を実証する<br>**済（2026-08-01・#202）— 起票時の 11 件は消えていたが、同じ形が別の場所に残っていた。** `scripts/check-src-hardcoded.js` を追加。`check-stories-hardcoded` は `stories/**` しか見ず、`check-i18n-components` は「src は型付きキーで守る」として意図的に src を走査しない ── その隙間を埋める。**型が守るのはキーの間違いであって、`t()` を呼ばない生文字列は誰の網にもかからない。**<br>**着手時の調査で 2 度 誤った報告をしている（記録として残す）**: ①`grep` で `aria-label` の生英語を探して 0 件だったので「負債は完済済み、0 のハードゲートで始められる」と報告した。**grep が狭かっただけ**で、専用検出器を書いたら 32 件出た。②そのうち 4 件は CSS 値の誤検出（`transform 0.4s cubic-bezier(...)` 等）で、除外規則を足して 28 件になった。**検出器を書く前に「無い」と言ってはいけない**、という当たり前のことを 2 回続けて外した。<br>**実測 27 件でラチェット開始**（`QueryBuilder` 20＝演算子ラベル / `PhoneInput` 4＝国名と `Select country` / `Carousel` 2＝`DEFAULT_LABELS` / `GanttChart` 1）。いずれも**英語のフォールバックが UI に出る**形。`ScheduleView` の `"prev,next today"` は FullCalendar のツールバー指定＝UI テキストではないので `i18n-ignore-next-line` で逃がした。<br>**受け入れ条件は過去のコミットで実証**: 起票時の `DataGrid.tsx`（`c1be9254`）の 353 行目 `{infiniteScroll.hasMore && "Loading more..."}` を `--probe` で流し込んで**鳴ることを確認**。現行 `DataGrid` は既に t() 化されているので、**現在のコードでは受け入れ条件を実証できなかった**。**4 経路で確認**: 素の状態＝通る（27）／**1 件増やす＝落ちる（28 > 27）**／1 件減らす＝通ったうえで baseline を下げるよう促す（26）／`--probe` は 1 件でも鳴る。`audit:lib` と lint-staged に配線
| T41 | コントラスト検査を「トークン」から「コンポーネントの実使用」へ | **済**（2026-08-01・#203 で案① / 2026-08-02 で案②） | 起票 2026-07-27（T32 の穴 ②）。`check:contrast`（T34）は **outline の文字色を `text-{intent}` ロールで解決する前提**（`check-contrast.js:121`）で 126 組すべて緑。しかし `Button` の SCSS は `color: var(--wim-color-danger)` を直接使っており、**SSOT を迂回している事実がガードから見えない**。結果 dark の `outline`×`danger` が 4.35:1 で出荷されていた。`color:` に intent 色を直接使う箇所は src 全体で **50 件**あり、同型が他にもある可能性が高い。Button のストーリーに `outline`×`danger` の組み合わせが 1 つも無かったため a11y スイートも見ていなかった | ①短期: `*.module.scss` で `color:` に `--wim-color-{intent}` を直接使っている箇所を列挙し、`text-{intent}` へ寄せる（または例外として明示） ②恒久: コントラスト検査を SCSS の実際の `color` / `background-color` ペアから解決する方式へ寄せる ／ **受け入れ条件**: 現行の `button.module.scss:165` に対して**鳴ること**を実証する<br>**案① 済（2026-08-01・#203）— 検査ではなく「迂回の検出」で塞いだ。** `scripts/check-intent-text-color.js` を追加し、`color:` に**塗り用の `--wim-color-<intent>`** を使っている箇所を列挙してラチェット化した（`--wim-color-text-<intent>` は文字用で 1 段暗く、通常サーフェス + subtle 塗りの上で AA を満たす）。<br>**なぜ既存のガードで捕まらなかったか**（起票時の分析どおり）: `check:contrast` は **`text-{intent}` ロールで解決する前提**なので SCSS が SSOT を迂回している事実が見えず 126 組すべて緑。axe は「そのストーリーに存在する組み合わせ」しか見ないが、`Button` のストーリーに `outline` × `danger` が 1 つも無かった。**トークンは正しく、宣言上の組み合わせも正しく、実装だけが違った。**<br>**受け入れ条件は過去のコミットで実証**: 起票時の `button.module.scss`（`19dd4313^`）の **165 行目 `color: var(--wim-color-danger)`** を `--probe` で流し込んで鳴らした（起票文の行番号と完全一致）。現行の `Button` は既に `text-danger` へ寄せられており、**コメントに実測値（dark outline danger 4.36:1 / success 2.48:1）まで書かれている**ので、T40 と同じく**現在のコードでは受け入れ条件を実証できなかった**。<br>**実測 43 件でラチェット開始**。**0 のハードゲートにはしない** ── アイコンの色など文字でない用途に intent 色を使うのは正当なことがあるため、`intent-color-ok` で個別に逃がす。**4 経路で確認**: 素の状態＝通る（43）／**1 件増やす＝落ちる（44 > 43）**／1 件減らす＝通ったうえで baseline を下げるよう促す（42）／`--probe` は 1 件でも鳴る。`audit:lib` と lint-staged に配線。<br>**案②（SCSS の実際の color / background ペアから解決する）は未着手。** 案①は「迂回していること」しか見ておらず、**迂回していない箇所の実効コントラストは依然 `check:contrast` の宣言ベースの解決に依存している**<br>**案② 済（2026-08-02）— `check:contrast:scss` を追加。** SCSS を入れ子のまま読み、`color` に効く背景（自ブロック→祖先、半透明は不透明面まで合成）を解いて比を出す。**トークンが正しいか**でも**規約に沿っているか**でもなく、**描いたら何:1 になるか**を見る。**見ないものを毎回出力する**（206 組を評価 / 背景が辿れず 424 / 解決できず 59 / 無効状態で規格対象外 81）。評価 0 なら合格ではなく故障として落とす。**無効状態は WCAG 1.4.3 の対象外**なので除外した（しないと `text-disabled` が構造的に全部落ち、規格が求めていない赤で本物が埋まる）。<br>**実バグを 6 件検出して修正**: ①ドキュメント内リンクが dark で **2.11:1**（`--wim-color-primary` は両テーマ #055d87 固定でテーマに追随しない。`text-accent` は dark で #97cbe0 に反転する）②`TabBar` / `FloatButton` の通知バッジが**面は danger・文字は `text-on-primary`**。light は白同士でたまたま合っていたが dark の danger #fb7482 の上では **2.65:1**（`text-on-danger` は dark で #000）③`Timeline` のドットのグリフが塗り用 intent 色（`.primary` だけが `text-accent` を使っていた）＝ secondary 2.03（light）/ success 2.48・danger 4.36（dark）。枠は輪郭であって面ではないので塗り用のまま。<br>**受け入れ条件は起票時のコミットで実証**: `19dd4313^` の `button.module.scss` を `--probe` に流すと **165 行目・dark danger 4.36:1 / success 2.48:1** で鳴る。行番号も 2 つの数値も起票文の実測値と一致する
| T42 | 生成物の再生成をコミット時に強制する | **済** | 起票 2026-07-27（#132 が `check:llms` で落ちたことから）。`llms.txt` は docgen（＝コンポーネントの props/tokens）由来なので、**prop を 1 つ変えるだけで古くなる**。しかし lint-staged は `llms:build` を呼んでおらず、CI の `audit:docs` で初めて落ちる＝「再生成が要る」という依存が人間の記憶に残っていた。同種の依存は既に `generate → stage-generated.js` の対で自動化されている（i18n リソース / アイコン / intents の 3 箇所）のに、llms.txt だけ輪の外にあった。**リリース PR で同じ形の事故が既にある**（#116 → #117。`changeset version` 後にバージョンが埋まった `llms.txt` が不一致になりマージ不能） | lint-staged に `generate-llms.js` ＋ `stage-generated.js public/llms.txt public/llms-full.txt` を追加（入力は `src/components/**/*.{ts,tsx}` / `*.module.scss` / `public/locales/en/**` / `src/data/components.json` / `scripts/slop-dictionary.json` / `scripts/generate-llms.js`）。**あわせて `generate-llms.js` が docgen を「無いときだけ生成」していたのを毎回更新に変更**（古い docgen JSON から生成すると、ローカルは整合して見えるのに CI（クリーンチェックアウト＝毎回生成）だけ落ちるため。キャッシュが効くので warm 0.6 秒） ／ **受け入れ条件**: prop の説明を 1 行変えて `lint-staged` を通し、`public/llms-full.txt` が**再生成されてステージまでされること**を実証する（実証済み: プローブ 2 回とも `llms-full.txt` に反映＋自動ステージを確認） |
| T43 | VRT の非決定的ストーリー 4 件の始末 | **済**（2026-08-01・#189。**真因は撮影側ではなく `useIndicator` の実装バグ**＝測る要素を監視していなかった。詳細と実測は冒頭の 08-01 の項。案①＝根治を採用し `--pills` / `--contained` を除外から解除、`--pills` の light 被覆も回復。回帰ガード `useIndicator.test.tsx` は **pre-fix で 3 件中 2 件が落ちる**ことを実証済み） | 起票 2026-07-27（#135 で顕在化）。ベースラインを update で撮り直したあと、**同じコミットの compare で 4 件が落ちた**: `snackbar--default`(dark) / `toast--success`(dark) / `voicevisualizer--large-height`(dark) / `audio--premium-features`(light)。これは T11 が定めた除外基準（同一コミットで update→compare が落ちる）にそのまま当てはまる。main では緑なので、**古いベースラインがたまたま安定した瞬間を捉えていただけ**で、撮り直すと不安定さが表面化する。#135 では 4 件を main の版へ戻して回避した（＝爆弾は残っている） | 原因の見当: Snackbar/Toast は `autoHideDuration` のタイマー（VRT の `clock.setFixedTime` は Date を固定するがタイマーは止めない）、Audio/VoiceVisualizer はメディア読み込み。**対応候補**: ①ストーリー側で `autoHideDuration={0}` 等の決定化 ②`NONDETERMINISTIC_STORY_IDS` へ追加。①のほうが可視カバレッジを失わないので優先 ／ **受け入れ条件**: 4 件について update → 同一コミットで compare を 2 回連続で緑にできること<br>**追記（2026-07-31・T45 の撮り直しで再燃）** — **T44 の「アニメーション注入 + 6 秒待ちで 4 件とも安定した」は不完全だった**。`TabNavigation - Pills` が **dark で再現性をもって落ちる**（同一コミットで update → compare を **2 ラン × 3 試行、6 回すべて 137px**。ジッタなら値がばらつくのでこれは状態差）。実画像の差分は `x106-131 y16-57` の 26×42 に集中し、`#262626 -> #055d87` が 135px ＝ **ページ背景の上にアクティブ/フォーカスのインジケータが出るか出ないか**。**色ではなく描画状態**なので、`animation: none` の注入では止まらない類。当座は `NONDETERMINISTIC_STORY_IDS` へ追加して T45 を通したが（案②＝カバレッジを失う退避で、`--contained` と同じ扱い）、**`--pills` は light 側の被覆も同時に失っている**（この Set はストーリー単位でテーマ別に外せない）。根治は案①。**なお `Video - Rounded` も同ランで 103/57/67px と揺れたが 2 ラン目で通過したため追加していない**（この Set の追加基準は「同一コミットで update → compare が落ちること」を満たさない） |
| T44 | VRT の閾値が小領域の変化を構造的に見られない | **済**（2026-07-30・#176） | 起票 2026-07-28（T32 の 2 枚目 ⑭）。`vrt/vrt.spec.ts:133` の `maxDiffPixels: 400` は **fullPage スクショに対する**閾値。`size="sm"` のアイコンは実測 14×14〜16×16 ＝ **最大でも 196〜256px しか動かず、閾値を数学的に超えられない**。#142 で実証された: 6 コンポーネントすべてでグリフが変わったのに、VRT が落ちたのは 80×80 のアイコンを持つ `Result` だけ（6400px）で、**Alert / Banner / Notification / Snackbar / Toast は緑のまま通過**した。同じ盲点にバッジのドット・フォーカスリング・ヘアライン幅のボーダー・14px 前後のアイコン全般が入る。**「VRT が緑」は小領域の変化について何も意味しない**。#142 では 5 コンポーネント分の単体テスト（`FeedbackIcon.consumers.test.tsx`）で個別に塞いだが、これは同型の穴が出るたびに手で塞ぐ形で、構造的な解決ではない | **対応候補**: ①`maxDiffPixelRatio` へ寄せる（ページ面積に比例させる。ただし小さいストーリーほど厳しくなり、既存のジッタ許容 ≤220px と衝突しないか要実測） ②fullPage をやめて対象要素単位のスクショにする（面積が縮むので同じ 400 でも効く。ストーリー側に撮影対象の指定が要る） ③閾値は据え置き、小領域の変化は単体テスト側で担保する方針を明文化する。**いずれもベースライン全面更新を伴う**ため単独の作業として切ること ／ **受け入れ条件**: `FeedbackIcon.tsx` を #142 以前の「全部塗り丸」に戻した状態で、**Alert / Banner / Notification / Snackbar / Toast の VRT が落ちること**を実証する（現行は 5 件とも緑のまま通る＝これが再現手順そのもの）<br>**済（2026-07-30・#176）** — 閾値 50（案①ではなく素の `maxDiffPixels` 引き下げ。案①より単純で、残ジッタ 11px と信号 68〜176px の間に十分な余地があった）。受け入れ条件も実証済み＝`FeedbackIcon` を戻すと `Alerts & Notifications` 106 件中 36 件が落ちる。下の「T44 の計測結果」と「⑤ 受け入れ条件の実証」「撮り直した 226 枚の仕分け」参照 |
| T45 | light パレットに面の分離が無く、コンポーネントが影に依存している | **済**（2026-07-31・#181→#182→#183 で 0.10.0 として公開） | 起票 2026-07-29（`Alert` の影が妥当かという相談から実測して判明）。DESIGN.md のアンチパターン表は「サーフェス階層トークンで面を分ける。影/枠は操作を誘導する要素だけに」と定めているが、**light テーブルではその処方が成立しない**。ページ（`surface-app` #f5f5f5）に対し、置ける面がどれも 1.1〜1.2:1 に収まるため: 現行の frosted（白 80%）1.07:1 ／ 純白 `surface` 約 1.10:1 ／ `surface-variant` 約 1.19:1 ／ 標準ボーダーを当てた縁でも 1.16:1（dark は 1.85:1）。結果、**面の輪郭は影が担っている**。`Alert` から `box-shadow` を外すと `intent="default"` が輪郭を失うことを実測で確認（`border` が既定で `solid transparent` のため縁も無い）。つまり `Alert` の影は症状であって原因ではなく、ここだけ直すと「ルールは守ったが読めない」になる。**※`backdrop-filter` は無意味ではない** — 単色の上でも 5.49%、模様の上では 99.70% のピクセルが変わる（当初「流し込みでは無意味」と見立てたが実測で否定された） | トークン側で面に実効的な段差を作る（`surface-app` を落とす / `surface` 系の段を作り直す等）。**影響はライブラリ全体・VRT 全面更新**なので T44 と同様に単独で切る ／ **受け入れ条件**: `Alert intent="default"` から `box-shadow` を外しても面が判別できること（現行 1.07:1 → 目標を決めて実測）。あわせて **`Card` の中に `Alert` を置くと枠付きの面の中に影付きの島が出る＝必須ルール 9 の二重フレーム**になる件も解消できるか確認する |
| T46 | 外部語彙との対応表（別名／エイリアス）を持つ | **済** | 起票 2026-07-30（namethatui.com の用語一覧との突き合わせから）。**穴の大半は「無い」ではなく「名前が違って見つからない」だった**。相手側 33 の macOS 用語のうち大半に実体があるのに、語彙が一致しない: Scrim/Backdrop=`OverlayBase`・Source List=`Sidebar`・Token Field=`TagInput`・Outline View=`TreeView`・Column View=`Cascader`・Overflow Menu(The Three Dots)=`Dropdown`・Pop-Up/Pull-Down Button=`Select`/`Dropdown`・Color Well=`ColorInput`・Level Indicator=`PasswordStrength`/`UsageMeter`・Pill=`Chip`/`Tag`・Sheet=`BottomSheet`・Inspector=`Sidebar`・Sticky/Fixed=`Affix`・Search Field=`SearchInput`・Disclosure=`Accordion`。**さらに危険な衝突が 1 件**: macOS の **Stepper は数値増減（WIM では `NumberInput`）**だが WIM の `Stepper` は手順表示＝同じ語で別物。探した人・AI が確実に取り違える | **置き場所は `src/data/components.json`（新しい SSOT を作らない）**。既に ①`docs/componentList.mdx`（人向けカタログ・ブラウザ ⌘F が効く） ②`docs/NavigationElementsSelection.mdx` ③`scripts/generate-llms.js`（**llms.txt = AI 向け主配信**） ④`scripts/check_consistency.js` が読んでいる。**lint-staged が `components.json` 変更時に llms.txt を自動再生成＋ステージする**（`package.json:611`）ので AI 経路は追加機構ゼロで届く。**i18n の負荷も無い**: `check_stories_keys.js` は `*Key` で終わるフィールドしか検証しない（`scripts/check_stories_keys.js:90`）ので生文字列で置ける。`check_consistency.js` も `comp.name` だけ見るのでフィールド追加で壊れない（いずれも 2026-07-30 に確認済み）。**データ形**: `aliases: []`（同義語）と `disambiguation`（他所では別の意味で使われる語。`Stepper` はここ。別名にすると 1 語 2 解になる）を分ける。**範囲は 221 全部ではなく 40〜60 語**＝外部語彙と実際にズレているものだけ。**別名は実在の体系（Apple HIG / Material / ARIA APG / Radix / MUI）が使っている語に限る**（自分で同義語を発明するとキーワード詰め込み＝`judge:slop` 案件になる）。**やらないこと**: Storybook サイドバー検索への注入（story タイトル/tags を汚す。人向けはカタログ ⌘F、機械向けは llms.txt で足りる） ／ **受け入れ条件（ガード）**: ①別名が既存コンポーネント名と一致したら落ちる（`Stepper` 型の事故） ②別名が全体で一意でなければ落ちる ③空文字・同一コンポーネント内の重複で落ちる。**3 つとも故意に違反を作って、通る経路すべて（ローカル全量 / lint-staged の部分集合 / CI）で鳴ることを実証してから完成**（`check:slop` が lint-staged 経由で素通りしていた件と同型の穴があり得る）<br>**済（2026-08-01）** — `scripts/check-aliases.js`＋別名 **59 語 / 35 コンポーネント**＋`disambiguation` 3 件。**ガードを先に書いた**（データを入れてからでは「通る状態」しか試せないため）。**受け入れ条件 3 つ＋1 を 3 経路すべてで実証済み**: ①既存名との一致（`NumberInput` に `Stepper`）②全体での重複（2 コンポーネントが同じ語）③-a 空文字 ③-b 同一コンポーネント内の重複 — ローカル全量 / **lint-staged（違反を stage してコミットが拒否されること、HEAD が進まないことまで確認）** / **`audit:docs`（終了コード 1、復元後 0）**。**部分集合の穴は設計で塞いだ**: このスクリプトは**引数を取らず常に全量を読む**（「全体で一意か」は部分集合では原理的に判定できないため、lint-staged からファイル名を渡されても無視する。`check-contrast.js` と同じ設計）。**語数を一度 110 まで盛って 59 へ削った**: 初回は "Scrolling Text" / "Ghost Loader" のような**誰も使っていない記述的な言い換え**＝自分で発明した同義語が混ざっていた（まさに `judge:slop` が捕まえる対象）。出典（Apple HIG / Material / ARIA APG / SwiftUI / WinUI / Fluent / Primer / Bootstrap）をコメントに明記できるものだけ残した。**`disambiguation` は `llms.txt` に別行の警告として出す**（別名と同じ行に混ぜると「その語で呼んでよい」と読めるため）。**注記は英語**（`llms.txt` は英語の配信物。最初 日本語で書いて出力を見て気付いた）。**やらないこと（据え置き）**: Storybook サイドバー検索への注入 |
| T47 | 追加予定コンポーネント（外部語彙との突き合わせで出た実装の穴） | **済**（2026-08-02 に ⑤。①②③⑥ は 08-01 / ④ は保留と判断済み） | 起票 2026-07-30（同上）。namethatui の Web 37 項目のうち実装が無いのは以下。コード確認済み。<br>①**Progress Ring（円形プログレス）** — `Progress` の prop は `value/max/intent/size/label/showValue/indeterminate` のみ＝**線形専用**。SVG のリング描画はリポジトリ内に 0 件（`GaugeChart` はチャート、`Spinner` は不定）。**明確な穴**<br>②**SplitButton（macOS の Combo Button）** — `SplitButton`/`split-button` の該当 0 件。`ButtonGroup`+`Dropdown` で組めるが部品もパターンも無い（`SpeedDial` は FAB で別物）<br>③`Text` の **`lineClamp`** — `Text` は `truncate`（1 行省略）のみ。多行は `Spoiler`（line-clamp）だが**必ず開閉トグルが付く**ので「3 行で止めるだけ」ができない<br>④**Panel / HUD（移動できる浮遊パネル）** — ドラッグは `Kanban`/`SortableList` のみ。Web では需要が薄く**保留**<br>⑤**Parallax Scrolling / Text Scramble / Spring Animation** — いずれも 0 件（`ScrollProgress` は別物、`StreamingText` はタイプライタ系、`Transition` は CSS ベース） | ①②③は実装候補（**①②は T32 の 3 枚目＝AI アシスタント画面でも出番がありそう**なので、その画面を作る回に合わせると合成検証つきで入る）。⑤は **DESIGN.md の「AI 的な画面を避ける・演出は控える」と正面から当たる**ので「無い」ではなく**「採らない」を明文化**する（llms.txt に書けばエージェントの自作も抑えられる。`backdrop-filter`/Vibrancy を実測で棄却した記録と同じ扱い）<br>**⑤ 済（2026-08-02）— 「無い」と「採らないと決めた」を機械的に区別できるようにした。** SSOT は `src/data/not-planned.json`（`name` / `aka` / `ja` / `en` / `instead`）。`aliases` が「他所の名前 → 実装名」を答えるのに対し、こちらは「他所の名前 → 採らない理由」を答える**同じ問いの裏側**なので、突き合わせは `check:aliases` 1 箇所でやる。llms.txt には "Not in scope — deliberately not provided" 節として出る（`generate-llms.js`）。**理由と代替を必須にしたのが要点**で、理由の無い「採らない」は読んだ人が判断を再検討できず、次に同じ提案が来たときに勝てない。<br>**ガードは 6 経路すべてで鳴らして完成にした**: ①`name` が既存コンポーネント名と衝突（`Skeleton` で実証＝採らないと言いながら出荷している状態）②`aka` が既存の別名と衝突（`Overflow Menu` ＝ `Dropdown` の別名で実証＝同じ語に 2 つの答えが出る）③理由（`ja` / `en`）が空 ④`instead` が実在しないコンポーネント ⑤`instead` が実在しないトークン ⑥**DESIGN.md に載っていない**（llms.txt は生成なので追随するが、人間が読む側は追随しない。T39 の実測どおり）。素の状態は通る。 ／ **注意**: 追加時は `src/data/components.json` / `src/<category>.ts` / MDX / 翻訳キーまで CLAUDE.md の最短手順どおり通すこと<br>**⑥ アイコンメダリオン（淡い面の円の上にアイコン）— 2026-08-01 に T52 から引き継ぎ**。`Page` の MaintenancePage が 80px の円を手組みしていたが、置き換え先が無いことを確認した: `Result` は 80px のアイコン枠を持つが**円の背景は無い**素の SVG（`result.module.scss` の `.icon svg`）、`Avatar` は `intent` がベタ塗りで最大 `lg` = 48px。**空状態・結果画面・オンボーディングで繰り返し要る形**なので、`Avatar` に `variant="subtle"` と大きいサイズを足すか、`Result` の icon を面つきにできるかで検討する（外部語彙では Material の「hero icon」/ Primer の「Blankslate visual」に相当） ／ **済（2026-08-01・#197）— ただし起票時の前提は誤りだった。** 「`EmptyState` / `Result` / `StatusContent` の共有基盤に入れる」という見立てで進めようとしたが、**共有基盤は 1 つではなかった**: `StatusContent`（`_internal`）を使うのは **`EmptyState` だけ**で、`Result` は **公開コンポーネントの `InteractiveArea`**（`Dropzone` も使う）経由だった。つまり `StatusContent` に入れても**需要元の `Result` には届かず**、届かせるには公開コンポーネントの描画を変えて `Dropzone` のアップロードアイコンにも円を付けることになる（影響ベースライン: StatusContent 経路 14 枚 / InteractiveArea 経路 60 枚）。**需要は依然 1 件**なので、ユーザー判断で **`Result` に opt-in の `iconSurface` prop** を足す形にした（既定 off。`Dropzone` / `EmptyState` には一切触れない）。**外形は変えない設計**＝円の直径は `--wim-result-icon-size`（既定 80px）のまま、中のグリフを 50% に縮めて余白を作る。**同一ストーリーでクラスだけ足して実測**し、root 768×187 / inner 744×163 / icon 80×80 が**すべて不変**で SVG だけ 80→40px になることを確認した（最初 別々のストーリーを比べて「23px 縮んだ」と誤報告している）。ティントは T52 で完成させた `--wim-color-<intent>-subtle` を使うので、テーマに追随し手で色を混ぜる必要が無い<br>**① Progress Ring — 済（2026-08-01・#194）。** `Progress` は header+track+bar の完全に線形な DOM で、リングは SVG 2 円+中央値と構造が別物なので `variant="circular"` ではなく別コンポーネントにした（外部語彙も独立した語として扱う）。**prop 語彙は `Progress` と意図的に同一**。幾何は `pathLength="100"` で `stroke-dasharray` がそのまま％になる形にし、サイズごとに半径を変えても TSX 側に計算が要らないことをテストで固定。**サイズの下限は `showValue` が収まることで決まった**＝当初 sm を 32px にしたら内径 20px に対し文字 26px ではみ出し、1 段上げて線を細くした（最終: 内径 30/32/44 対 文字 26/29/33）。CI の axe が `aria-progressbar-name`（serious）で落ち、**私のストーリーが `label` を渡していなかった**ため修正（→ API の穴は T53 へ）。<br>**③ `Text` の `lineClamp` — 済（2026-08-01・#196）。** 多行の打ち切りは `Spoiler` しか無く、あちらは**必ず開閉トグルを描く**ので「3 行で止めるだけ」ができなかった。新規コンポーネントを増やさず prop を 1 つ追加。**`truncate` と同時には成立しない**ので `truncate` を優先する（両方当てると `-webkit-box` と `white-space: nowrap` が食い合ってどちらの見た目にもならない）。実描画で高さ 67.17px ÷ 行高 22.4px ＝ ちょうど 3 行、省略記号も確認。<br>**② SplitButton — 済（2026-08-01・#204）。** `ButtonGroup` + `Dropdown` で組める形ではあるが、**組み方に落とし穴が 2 つある**ので部品にした: ①**トグル側にアクセシブル名が無くなる**（矢印しか描かないので `button` が無名になる）。`toggleLabel` を型で必須にして防いだ ── T53 で `Progress` に入れたのと同じ考え方で、`@ts-expect-error` の型テストで固定している。②**2 つのボタンが 1 つのコントロールに見えない**（角丸と枠が二重になる）。隣り合う辺の角丸を落とし、負のマージンで枠を 1 本に見せ、solid で境目が消えないよう薄い区切りを入れる。**主ボタンとトグルは同じ `variant` / `intent` / `size` を受け取る**（個別指定は持たない ── 分かれた瞬間に「1 つのもの」に見えなくなるため）。単体 5 件 / ストーリー 4 本 / MDX / 翻訳キー 16×3 言語 |
| T48 | 「トークンで指定したのに UA スタイルシートに負ける」の検出 | **済**（2026-08-01・#190。**起票時の方針＝実描画を測る検出器は採らなかった**。詳細は右セル末尾） | 起票 2026-07-30（下の「フォント自前化と mono の契約」で 5 件出たことから）。**UA スタイルシートの `code { font-family: monospace }` は、親が `--wim-font-family-mono` を指定していても子孫には継承させない**（作成者の宣言が無いプロパティは UA 宣言が生きる）。そのため `.pre`/`.details` の computed は正しく `"Noto Sans Mono"` を返すのに、**本文が入る内側の `<code>` だけ汎用等幅で描かれる**。ソースを読むだけでは見えず、実描画（CDP `CSS.getPlatformFontsForNode`）を測って初めて出た。同型は `kbd`/`samp`/`pre` にもある（`Kbd` と `CommandPalette` は既に `font-family: inherit` を持っており、この穴が既知だった形跡がある） | **検出案**: `*.module.scss` で `--wim-font-family-*` を指定している規則について、その配下に `code`/`pre`/`kbd`/`samp` を描く可能性があるコンポーネント（`.tsx` に該当タグがある）では、その要素向けに `font-family` を宣言していることを要求する。**今日の 5 件が検証コーパスになる** ／ **受け入れ条件**: 5 件を修正前の状態に戻して**すべて鳴ること**（うち 3 件は「computed は正しいのに実描画が違う」ので、computed ベースの検査では鳴らない＝検出器の設計が試される）<br>**済（2026-08-01・#190）— 検出をやめて予防に倒した。** 起票時の見立て「21 箇所が個別に `font-family: inherit` を書いており systematic な解が無いことの裏返し」は**誤り**で、21 箇所を分類すると**無関係な 2 つの母集団**だった: **A＝フォーム部品 16 件**（`input`/`button`/`select`/`textarea` 等に UA が**自前のフォント**を当てる）と **B＝mono の子孫 5 件**（`code`/`pre`/`kbd`/`samp` に UA が `monospace` を当て、親の指定を子に継承させない）。**B が本題で、mono トークンを当てている箇所は 12 declaration / 10 ファイルしかない**＝予防が現実的だった。混ぜて数えていたから「解が無い」に見えていた。**実装**: `src/styles/_font-mixins.scss` の `@include font.mono-family` が**トークンの適用と `code, pre, kbd, samp` への継承を必ずセットで出す**（`:where()` で特異度 0＝親の重みのまま）。12 箇所を差し替え、07-30 に個別に書いた `inherit` 3 件を吸収。`base.scss` の 2 件も対応＝`.wim-t code` の独自スタック直書き（6 件目）と `.wim-docs-container code` の family 欠落で、**どちらも「ドキュメントのみ」とされていたが実際は公開 `reset.css`（8,956 bytes）に入っている**ことを確認。**ガードは静的検査で済んだ**（`scripts/check-mono-family.js`。`audit:lib` + lint-staged に配線、引数を取らず常に全量）＝**起票時に高コストだった理由「3 件は computed で見えないので実描画測定が要る」が丸ごと消えた**。症状の検出をやめ、原因を書けなくしたため。**受け入れ条件は形を変えて実証**: ①`CodeBlock` の `.pre` をトークン直書きに戻す→鳴る ②`base.scss` に `ui-monospace…` を戻す→鳴る、を**ローカル全量 / `audit:lib` / lint-staged（違反を stage してコミットが拒否され HEAD が進まないことまで）**の 3 経路で確認。**実描画も CDP で再測定してグリフ数まで一致**（CodeBlock 本文 Noto Sans Mono:**286**、Code block 本文 **55** — いずれも 07-30 の記録と同値）＝見た目 no-op で、**CI の VRT compare 4 シャードが全緑**だったことがその裏付け |
| T49 | VRT の**色深度**の盲点（`threshold` が面積と独立に効く） | **済** | 起票 2026-07-31（T45 のベースライン撮り直しで判明）。**T44 が塞いだのは面積の盲点で、これはそれとは独立した 2 つ目の穴**。`vrt/vrt.spec.ts:143` の `threshold: 0.1` は**ピクセル単位の色許容量**で、Playwright（pixelmatch）は YIQ 距離が `35215 × threshold²` ＝ **352.2** を超えたときだけ差分ピクセルとして数える。**面積がどれだけ大きくても、1 ピクセルあたりの色差がこれ未満なら差分は 0**。T45 で全画面の背景を `#f5f5f5` → `#e5e5e5` に変えたが、YIQ 距離は **129.4** で数えられず、**light 937 枚のうち 852 枚が「差分ゼロ」と判定された**（`disabled` の `#e5e5e5` → `#b6b6b6` は 1116.2 で閾値超え＝更新された 85 枚はこの巻き添え）。**一般化すると: PCCS グレーの隣接する段（16/255）は VRT に一切見えない**＝サーフェス階層の変更・消えたヘアラインボーダー・淡色の面の入れ替えがまるごと盲点に入る。`border-secondary` の実害を「撮り直しの差分で拾う」という T45 の段取りが成立しなかったのはこれが理由 | **対応候補**: ①`threshold` を下げる（129.4 を拾うには **0.06** 程度。ただし T44 のジッタ実測は `threshold: 0.1` 前提で行われているので、**ジッタの再実測が必須**＝T44 と同規模の調査になる） ②`threshold: 0` にして `maxDiffPixels` だけで制御する（色差は全部数え、面積で許容する。もっとも単純だが AA ジッタの量が跳ねるはずで要実測） ③トークン値の回帰は VRT に頼らず、`check:contrast` 系の数値ガードで担保する方針を明文化する（実際 T45 の検証は最後まで数値で行い、VRT は 1 度も役に立たなかった） ／ **受け入れ条件**: `surface-app` を 1 段動かした状態（`gy8-5` → `gy9-5`）で**VRT が落ちること**を実証する。現行は 852 枚が緑のまま通る＝これが再現手順そのもの。**あわせて「鳴ってはいけない経路で鳴らない」側も見る**（閾値を下げるとジッタで常時赤になりうるため、同一コミットで update → compare を 2 回連続で緑にできること）<br>**済（2026-07-31）— 案①を採用し `threshold` を `0.1` → `0.05` へ。** 起票時の見立ては **2 つとも外れていた**: (a)「ジッタの再実測が必須＝T44 と同規模の調査になる」→ **不要だった**。Playwright は pixelmatch を **`includeAA: false` の既定**で使う＝**アンチエイリアス画素を検出して除外する**ため、閾値を下げてもエッジの揺れは数えられない。連続 2 ランのベースライン 52 組（バイト差が実在するものだけ＝最悪ケース）で **`0.1` と `0.04` の分布は同一**（50/52 が差分ゼロ）。(b) 案②（`threshold: 0`）は不可＝同じ標本で p95 が 0 → 291 に跳ねる。**`0.06` が検知の下限**（基準 126.8 < 信号 129.4）だが余裕 2% しかないため **`0.05`**（基準 88.0・余裕 47%）を採る。**実証**: `surface-app` を 1 段戻した使い捨てブランチで **light 942 件が落ちた**（旧 `0.1` なら 0 件）。この改変は `check:contrast` を通る（126 組緑）ので**捕まえられるのは VRT だけ**。同時に **dark の 2 シャードは全緑**＝鳴ってはいけない経路で鳴らないことも確認（テストはテーマ順に並ぶためシャード 1・2 が light / 3・4 が dark）。素の状態では同一コミットで compare **2 回連続緑**。**標本の取り違えに注意**: `--update-snapshots=all` 導入前の古いベースラインと比べると 603 組中 77 件が 50px 超になり `0.05` は選べないという結論になるが、それは**蓄積ドリフト**でありラン間ジッタではない（実際に一度この取り違えで誤った報告をした） |
| T50 | in-page なのに輪郭を影で作っている（`Alert` ほか） | **済**（2026-08-01・#191） | 起票 2026-08-01（ユーザーの指摘から。**T45 の積み残しが番号を持っていなかった**）。DESIGN.md は「面はサーフェス階層トークンで分ける。影/枠は操作を誘導する要素だけに」と定めるが、`Alert` は `alert.module.scss:12` が `border: … solid transparent`、`:14` が `box-shadow: var(--wim-shadow-sm)` ＝ **オーバーレイでないのに輪郭を影に任せている**。2026-07-29 に「`Alert` の影を外せばよい」は誤った見立てとして棄却されたが（当時ページと面が 1.07:1 しかなく、外すと `intent="default"` が輪郭を失った）、**その理由は T45 で消滅している**: ページを `gy8-5` へ下げた結果、面とページの知覚距離は 0.0239 → **0.0626（`check:contrast` の基準 0.015 の 4.2 倍）**で、**面だけで分離できることは数値で実証済み**（T45 節「受け入れ条件（達成）」）。にもかかわらず除去は「`Alert`/`Toast`/`Notification` 全部の VRT が動く別件」として見送られ、**T◯ 番号が振られないまま T45 節の「なお」1 文に埋もれた**ため、「明日ここから」にも残件リストにも出てこなかった | まず対象の切り分け: `Alert`（`shadow-sm`・**本命**）／`Notification`（`shadow-modal`。in-page 配置もある）／`Snackbar`・`Tour`（`shadow-modal`。本来オーバーレイ＝妥当）／`Calendar`・`TreeView`・`BentoGrid`（`shadow-md`。in-page で妥当か要検証）。`Card` の `elevated` は opt-in の既定なので別論点（[[design-defaults-that-bite]]） ／ **受け入れ条件**: `Alert` から `box-shadow` を外した状態で ①面とページの知覚距離が 0.015 を超えること（実測済み 0.0626）②`intent="default"` が light / dark 両方で輪郭を保つこと ／ **VRT は当てにしない**: T49 のとおり閾値未満の色差は数えられず、影の除去は淡い階調の変化なので盲点に入りうる＝**ピクセルを測ること** ／ **注意**: ベースラインが動くので単独の PR で切る（他の VRT が動く変更と混ぜない）<br>**済（2026-08-01・#191）— 影は輪郭をほとんど作っていなかった。** 実描画のピクセルを読み、`check:contrast` と同じ OKLab 知覚距離（塗りの基準 0.015）で測った結果: **`Alert` 5 intent × 2 テーマの 10 組すべてで面↔ページが基準超**（最小 dark info 0.0178 / light default 0.0632）、枠↔面も 10 組すべて基準超（light default 0.0754）、そして**影の寄与は枠外 2px で light 0.0030 / dark 0.0042 ＝ 基準の 1/5〜1/3.5**。`Notification` / `Calendar` / `TreeView` も同様で、**4 件とも影の寄与が知覚の下限に届いていなかった**。**`Alert` / `Calendar` / `TreeView` は `box-shadow` を除去**。**`Notification` は削除ではなく移動**＝単体エクスポートでページ内にも置ける一方 `NotificationProvider` は `.container`（position: fixed / z-toast）で浮かせるので、影を `.container > *` へ移して**重なっているときだけ出す**形にした。**`BentoGrid` は対象外**＝影は `:hover` のときだけで DESIGN.md が許す「操作を誘導する要素」。`backdrop-filter` は据え置き（T45 の実測で有意）。**既知の穴として記録**: ①light の `Alert intent="default"` は枠↔ページが 0.0122 で基準未満（影と無関係な既存状態。面が 0.0632 あるので分離は保たれる）②**`NotificationProvider` / `useNotification` を使うストーリーも画面も無く、浮遊経路には VRT も a11y も掛かっていない** |
| T51 | カタログの見本が実使用と違う（`Badge` の `Required`） | **済**（2026-08-01・#200 で ① / #201 で ②） | 起票 2026-08-01（ユーザーの指摘から）。`Badge` の `Required` ストーリー（`Badge.stories.tsx:80`）は `intent="danger"` だけを渡す＝**既定の塗り**（濃い danger 面に白文字）。一方ライブラリ自身が `<Input required>` で描く必須バッジは `FieldLabelContent.tsx:69` で **`variant="subtle"` を明示**している（薄い面に濃い文字）。**subtle 側が正しい**（`:66-68` に理由あり: 塗りだと必須項目の多いフォームで何も間違えていないのにページ中がエラー色になり、実際のエラーと同じ色なので区別が消える。語は残して塗りだけやめる）。この判断は単体テストで固定済み（`FieldLabelContent.test.tsx:53` = subtle であり solid でない ／ `:63` = それでも danger intent は保つ＝neutral に落とすと「任意」と区別できない）。**問題はカタログ側**: 「required バッジはこう出る」と読んだ人が `<Badge intent="danger">Required</Badge>` と書くと、ライブラリの実使用と別の見た目になる＝**同じ意味に 2 つの見本がある**。※`Optional` のほうは両者とも `intent="neutral"` + 既定 variant で一致しており、ズレているのは `Required` だけ **①（小・単独で出せる）** `Badge.stories.tsx` の `Required` に `variant="subtle"` を足して実使用に揃える（1 行）。**VRT の `badge--required` が light / dark とも動く**ので、他の VRT が動く変更と混ぜない ／ **受け入れ条件**: `Required` ストーリーの描画が `FieldLabelContent` の必須バッジと同一クラス（`subtle` / `danger` / `sm`）になること<br>**②（大・別 PR。2026-08-01 にユーザーから方向づけ）— `subtle` にボーダーを入れる。** 現状 `_token-common.scss:52-56` の `subtle` は「塗りだけ・`border: 1px solid transparent`」で、**輪郭を持たない**。一方 `Alert` は intent ごとに **背景 `intent / 0.1` + ボーダー `intent / 0.2`**（`alert.module.scss:100-137`。`default` は `border-secondary`）で、**「淡い塗り＋一段濃い同色の縁」というレシピが既にライブラリ内に存在する**。`subtle`（背景 `base / 0.15`）はそのレシピの半分しか実装していない。**利点**: `subtle` は既に `1px solid transparent` で箱を確保しているので、**色を入れてもレイアウトは 1px も動かない**（色だけの変更）。**T50 と同じ原理**＝輪郭は影ではなく淡いボーダーで作る ／ **範囲**: `token-variants` / `module-token-variants` 経由なので **`Badge` / `Tag` / `Chip` ほか subtle を使う全コンポーネントに一斉に効く**＝単独 PR 必須 ／ **受け入れ条件**: ①ボーダー色が全 intent × light/dark でサーフェスから知覚距離 0.015 以上（`check:contrast` の塗り基準）②`neutral` が消えないこと（T34 で一度壊れた組み合わせ）③**VRT を当てにしない**: 1px の縁は周長 ≒ 160px で面積は足りるが、`intent / 0.2` の色差が `threshold: 0.05`（YIQ 88）を超えるとは限らない＝**ピクセルを測ること**（今日 T43 で、2px のスライダーが 8px 伸びても 16px しか動かず閾値 50 に届かなかった実例あり）<br>**① 済（2026-08-01・#200）。** `Badge` の `Required` ストーリーに `variant="subtle"` を追加し、実使用（`FieldLabelContent` が `<Input required>` で描く必須バッジ）と同じ形にした。**② は未着手**＝`subtle` にボーダーを入れる件。`Badge` / `Tag` / `Chip` 全体の VRT が動くので単独 PR で切る。T50 と同じ原理（輪郭は影ではなく淡いボーダー）なので設計を揃えること<br>**② 済（2026-08-01・#201）— `Alert` のレシピの残り半分を実装した。** `_token-common.scss` に `subtle-border()` を新設し、両 mixin（`token-variants` / `module-token-variants`）の `subtle` が `border: 1px solid transparent` ではなく **base の 30% を引く**ようにした（塗りが 15% なので `Alert` の 0.1→0.2 と同じ 2 倍比）。**`subtle` が明示されている intent（`neutral`）は base からの導出が使えない**（そもそも「base の 15% では消える」から明示している）ので、`--wim-color-border-secondary` に寄せる分岐を入れた。**箱は元から `1px solid transparent` で確保済みなので、レイアウトは 1px も動かない**（実測で全 14 組が 53×24・border-width 1px）。**受け入れ条件を実描画で確認**（`Tag` の Variants に args で intent を差し替え、描かれたピクセルを読む）: ①枠↔ページの知覚距離は **14 組すべて基準 0.015 超**（最小 dark info 0.0672 / light secondary 0.0612）②**`neutral` は light 0.2064 / dark 0.1590 で最も強い部類**＝T34 で壊れた組み合わせは再発していない。**注記**: dark の `neutral` だけ枠と面が同色（`#4f4f4f`、枠↔面 0.0000）。`subtle` が不透明なので枠を `border-secondary` に寄せた結果で、ページからは 0.1590 離れており輪郭は立つが、他 intent の「面より一段濃い枠」とは性格が違う。**最初の測定は壊れていた**（DOM のクラスを手で組み替えてバッジ自体を壊し、全ピクセルがページ色になって「全組 NG」と出た）。args 経由に変えて測り直した |
| T52 | 合成画面がコンポーネントを使わず見た目を手で再現している「孤島」 | **済**（2026-08-01・#192 でトークン参照 18 件 / 2026-08-02 でガードと残りの孤島） | 起票 2026-08-01（ユーザーの指摘から。「Welcome Screen の数字は何のコンポーネント？」→ **答えはコンポーネントではない**）。`stories/Patterns/Form/Form.stories.tsx:448-467` の番号バッジは素の `<div>` にインライン直書きで、`background: var(--wim-color-primary-muted)` + `color: var(--wim-color-primary)` ＝ **`Badge variant="subtle" intent="primary"` とまったく同じ「薄い面＋濃い同色文字」を手で再実装している**。同ファイルの `W` ロゴ（`:415-430`）も 64px 直書き。**実測（2026-08-01）**: inline style の px リテラルは `stories/Patterns` に **28 件**（Form 10 / Marketing 8 / Page 7 / AI 2）、**薄い intent 面を手組みしているのは 3 箇所**（`Form:453` / `Marketing:743` / `Marketing:789`）。**px 側は既に `check:slop` が見ている**（「インライン style の既定値上書き＋px 直書き: 52 件（Patterns 40 / docs 10 / sandbox 2）」でラチェット済み・現在ちょうど baseline）ので、**捕まえられていないのは「この `<div>` は `Badge` である」という部分だけ**。**なぜ実害か**: ①トークンやバリアントの変更が**この孤島には届かない**。T51-② で `subtle` にボーダーを入れても、ここだけ取り残される ②届かない箇所は、変更しても**気付けない**（T45 でページ色を変えたのに 852 枚が旧色のまま残ったのと同じ構造） | まず全 Patterns を掛けて「コンポーネントで書けるのに手組みしている」箇所を列挙する（上の 3 箇所は着手点であって全量ではない）。**T51-② の直前にやると効果が出る**（寄せてから subtle を直せば孤島が消える。逆順だと取りこぼす） ／ **ガード案**: `check:slop` に「インライン style で intent トークン（`--wim-color-*-muted` / `-subtle` 等）を `background` に当てている」検出を足す。px と違い**ラチェットではなく 0 でハードゲートにできる**はず（正当な用途が思い当たらない） ／ **受け入れ条件**: `Form.stories.tsx:453` を含む既知 3 箇所を**鳴らせること**。あわせて `Badge` へ寄せた後に**鳴らなくなること**（鳴ってはいけない経路の確認）<br>**一部済（2026-08-01・#192）— 孤島を探しに行ったら、もっと大きい穴が先に出た。** 合成画面の `style={{}}` が参照するトークンを全部照合したところ、**存在しない名前への参照が 10 ファイル 18 件**あった。CSS は存在しない名前を書いても**宣言ごと捨てるだけでエラーを出さない**ので、背景が透明・境界が無し・高さが無効のまま出荷されていた。**どのガードも見ていない**（`check-scss-token-refs.js` は SCSS しか走査しない）うえ、**VRT は壊れた状態でベースラインを撮っているので「いつもどおり」に見える**。内訳: VRT に載るストーリーの実描画バグ **14 件**（`ContextMenu` / `Portal` の intent 面、`LoadingOverlay` / `Navbar` / `ScrollArea` の `--wim-gradient-glass`＝**gradient ファミリーは 1 つも存在しない**、`GaugeChart` の `--wim-color-negative`、`Page` の `--wim-color-warning-light`、`AI` の `--wim-spacing-6xl`）／ audit ページ 2 件 ／ `docs/Effects.mdx` の ```scss 例 2 件（**`--wim-color-error` は intent SSOT で `danger` に改名済みの旧名を読者に教えていた**）。**根因の 1 つはトークン面の非対称**＝`-subtle` が `danger` / `primary` / `surface` にしか無く、`info` / `warning` / `success` / `neutral` に無かった。**ファミリーを完成させた**（アルファは `danger-subtle` と `Alert` の intent 面に合わせて 0.1。`token-snapshot` 295 → **299**）。`--wim-spacing-6xl` だけは**復元すべき値が存在しない**ため宣言を落とした（実測でこの 2 行は 32px と 40.98px ＝ 内容依存で、5xl=35.2px はどちらとも違い 41px 側が詰まる）。**ガード**: `scripts/check-story-tokens.js`＝フォールバックの無い `var(--wim-…)` はどこかで定義されていること（`var(--x, 既定値)` は意図的なテーマフックなので対象外）。`audit:docs` + lint-staged に配線、引数を取らず常に全量。**受け入れ条件は実地で満たされた**（書く前から存在した 18 件を検出）＋ lint-staged で違反を stage してコミットが拒否され HEAD が進まないことまで確認。**孤島の本題（同 PR で実施）**: 機械的に洗うと「固定サイズ + 角丸 + 背景」を手組みしている箇所は **Patterns 全体でちょうど 3 件**だった。ただし **3 件とも性質が違い、「コンポーネントに寄せる」で片付くのは 1 件だけ**だった。①**`Form` の番号つきステップ（36px・`primary-muted` + `primary`）→ `Stepper direction="vertical"` へ置換**（`Stepper` は `steps[].description` と縦並びを持ち、構造が完全に一致する。全ステップを `intent: "wait"` にして「進行中の 1 件」を作らない）。`check:slop` のラチェットが **52 → 50** に下がったので基準も締めた。**ただし見た目の重みは変わる**＝36px の塗り四角 → Stepper の小さい輪郭円 + 接続線。**視覚の良否は人間の判断に出す**（規約どおり自己申告しない） ②**`Page` の 80px 警告メダリオン → 置換できない**。`Result` は**まさに 80px のアイコン枠**を持つが（`--wim-result-icon-size` 既定 80px）**円の背景を持たない素の SVG** で、`Avatar` は `intent` がベタ塗り・最大 `lg` = 48px。**「淡い円の上のアイコン」に相当する部品がライブラリに無い**＝この孤島は手抜きではなく**部品が無いから生まれた**。→ **T47（追加予定コンポーネント）の候補として引き継ぐ** ③**`Form` の 64px "W" ロゴ → 対象外**。アプリのブランディングであって、デザインシステムに「ロゴ」部品は無くて当然<br>**済（2026-08-02）— ガードを入れ、残りの孤島を片付けた。** `check:slop` がインライン `style={{ }}` の **background の値**を切り出し、intent の面トークンに解決されたら落とす（intent 名は `tokens/intents.json` から引く。写すと intent を足したとき新しい名前だけが黙って素通りする）。px と違い正当な用途のベースラインが無いので **0 のハードゲート**、`intent-surface-ok` ＋理由で個別に逃がす。<br>**実装で 2 回間違えた。どちらも「ガードが無い」ではなく「ガードが誤る」形だったので記録する**: ①宣言名だけ見て同じ行に intent トークンがあるかで判定すると `{ background: surface, borderColor: primary }`（面は中立で輪郭だけアクセント＝正当）を誤検出する。**値を切り出してから照合すること** ②逃がす注記を直前 1 行だけ見ると、**理由を 2 行で書いた瞬間に効かなくなる**。直前の連続コメント全体を見る。<br>**走らせたら 3 箇所ではなく 5 箇所あった**: メンテナンス画面の 80px 警告メダリオンは `Result`（`iconSurface`）へ置換した — 起票時に「置き換え先が無い」と記録して T47⑥ で prop を足したのに、**変換自体が行われていなかった**。`intent="warning"` が同じ濃度を出し、見出しは `Result` の title が `<div>` なので `Title tag="h1"` をノードとして渡している（下の `Alert` が h2 なので抜くと heading-order）。**実測で幾何は同一**（円 80×80・グリフ 40×40・radius full・面は warning-subtle）。残る 4 件（ロゴ 2・比較表の帯 2）はブランドと強調であって状態ではないので理由付きで逃がした。<br>**全経路で実証**: 起票時の 3 箇所（`Form:453` / `Marketing:743` / `Marketing:789`）が `--probe` で鳴る・新規の違反が鳴る・逃がした箇所は鳴らない・誤検出だった行も鳴らない。px ラチェットは**メダリオンの 80px 直書き 2 件が消えて 50 → 48** |
| T53 | 名前の無い `progressbar` を作れてしまう（`Progress` / `ProgressRing`） | **済**（2026-08-01・#200） | 起票 2026-08-01（T47① の CI で axe が鳴って発覚）。両コンポーネントとも `role="progressbar"` を必ず付ける一方、アクセシブル名は `aria-label={label}` 由来で **`label` は任意**。渡さなければ **`aria-progressbar-name`（impact: **serious**）に該当する要素が出来上がる**。**`Progress` は 2 年近くこの形で出荷されている**が、全ストーリーがたまたま `label` を渡していたため a11y スイートが一度も鳴らなかった＝**ガードが見ていたのは API ではなく「ストーリーの書き方」だった**。ProgressRing で label 無しのストーリーを書いた瞬間に serious が 2 ノード出た（実証済み: 外すと鳴り、戻すと消える） | **API で防ぐ**のが筋。案①**型で強制**＝`label` / `aria-label` / `aria-labelledby` のいずれか必須のユニオン型にする（`ProgressRing` は未公開なので無コスト、`Progress` は破壊的変更）案②実行時に開発ビルドで警告 案③現状維持＋ドキュメント。**`Progress` と `ProgressRing` は prop 語彙を意図的に揃えているので、片方だけ厳しくすると対称性が壊れる**＝2 つ同時に決めること ／ **受け入れ条件**: `label` を渡さない `Progress` / `ProgressRing` が**型エラーになる**こと。あわせて既存の全ストーリーが通ることを確認（現状すべて `label` を渡しているので通るはず）<br>**済（2026-08-01・#200）— 型で表現できなくした。** 案①（型で強制）を採用。`src/components/_internal/accessibleName.ts` に `WithAccessibleName<Base>` を置き、**`label` / `aria-label` / `aria-labelledby` のいずれか必須**のユニオンにした。`label` だけを必須にしなかったのは、**可視ラベルを二重に出さずに名前だけ付けたい使い方が実在する**ため（`Patterns/Form` が `aria-label` で書いている）。描画側は `resolveAriaLabel` で `aria-label` を優先し、名前が重複しないようにする。**破壊的変更だが、壊れるのは既に壊れていたコードだけ**という点は T38 の判断と同じ。**実測**: リポジトリ内の `Progress` / `ProgressRing` の使用箇所は**全部すでに名前を持っており**、型を入れて壊れたのは**自分のテスト 2 ファイルだけ**（stories / patterns は無傷）。**受け入れ条件は型テストで固定**（`accessibleName.test.tsx`）＝ 名前なしの JSX に `@ts-expect-error` を置いたので、**制約が緩むと「未使用の @ts-expect-error」で tsc が落ちる**。制約を外して実証済み（2 箇所で TS2578）。3 つの出所すべてが実際に名前になることと、`aria-label` が `label` に勝つことも実行時テストで確認。**なお `check:api` が動く**＝ `ProgressProps` が公開型として出るようになった（従来は非 export）。**changeset は付けていない**（公開に関わる判断のため） |
| T54 | `check:api` が prop の型の縮小を見ない | **済**（2026-08-02・`check:prop-api`） | T38（0.13.0）で `Card` の `padding` / `radius` の union を狭めた。これは**利用者のコードがコンパイルしなくなる**変更だが、`check:api` v2 は「exports マップ + エントリの symbol」を見るので**スナップショットは無風のまま通った**。つまり公開 API の破壊のうち、**シンボルの増減を伴わない種類（prop の型・必須/任意・戻り値）は誰も見ていない**。T38 は人間が破壊と分かって出したから問題にならなかっただけで、意図せず狭めたときに気付ける仕組みは無い | **済（2026-08-02）— `scripts/check-prop-api.js` + `prop-api-snapshot.json`（2406 prop）。**<br>**凍結ではなく分類にした。** `check:api` の「差分が出たら落ちる」方式を prop に当てると、prop は足すほうが日常なので毎回スナップショットを書き換えることになり、**書き換えが儀式化して破壊の混入を見逃す**。差分を破壊（prop 削除 / 任意→必須 / 値が減る / 型が別物）と加算（prop 追加 / 必須→任意 / 値が増える）に分け、**破壊だけで落とす**。<br>**値は解決して保存する。** 型の文字列のまま持つと `(typeof CARD_STYLED_RADIUS)[number]` は配列から 1 値消しても文字列が変わらず、**まさに守りたい変更が素通りする**。解決規則は `scripts/lib/prop-types.js` に出し、`check:prop-classes` と共有した（T38 で「片方だけが解けると、もう片方が同じ変更を見落とす」を実際にやったため）。<br>**別ファイルにした**（`api-snapshot.json` に足す案から変更）。比較の方式が違ううえ、`check:api` は publish を通す必須チェックなので、2400 件の層を同じスクリプトに載せると影響範囲が広がる。<br>**実装中に 2 回、ガードが「見ずに緑」になる形を踏んだ。どちらも受け入れ条件を実際に走らせたから見つかった**: ①docgen を「無ければ作る」にしていたため**前回のビルドの docgen** と突き合わせており、型を狭めても差分なしで通った（CI はクリーンチェックアウトなので**ローカルだけが嘘をつく**）。毎回作り直す形に変更 ②**docgen の `required` は当てにならない** — `?` を外して本当に必須にしても `required: false` を返し続ける（既定値を持つ prop はそう扱われる）。ソースの `name?:` / `name:` から読む形に変え、**読めなかったものはキーごと持たない**（`false` を入れると「任意だと確認した」と嘘になる）。読めなかった数（2406 中 564。React の HTML props 由来で元から全部任意）は毎回出力する。<br>**受け入れ条件は 6 経路すべてで確認**: ①**実際のコミット**（`aeacad7f2^` の Card でスナップショットを作り現在と照合）で `padding "4xl"/"5xl"` と `radius "3xl"/"4xl"/"5xl"/"xs"` を破壊として報告 ②任意 prop の追加 → 鳴らない ③prop の削除 → 鳴る ④値の追加 → 鳴らない ⑤値の削除 → 鳴る ⑥素の状態 → 通る。照合できた prop が 0 なら合格ではなく故障として落とす。<br>**初回 push は CI で落ちた。原因はライブラリではなくこのガード自身**: 必須/任意を読む正規表現が改行をまたぎ、`TreeView.tsx` の関数引数 `collect(nodes: TreeViewNode[], …)` を `TreeViewProps.nodes` の宣言と誤読して「任意 → 必須」と報告した（TreeView に触れていない PR で）。**スナップショットも同じ誤読で作られていたのでローカルは緑**で、CRLF/LF の環境差が偶然あぶり出した。1 行で閉じる宣言だけを読む形に変え、改行を正規化した。詳細と一般則は運用メモの「スナップショット方式のガードは、自分の誤りと一致してしまう」 |
| T55 | VRT / a11y が外部画像（Unsplash）の到達に依存している | **済**（2026-08-03。外部ホットリンク 0 件 + ガード） | ストーリーが `https://images.unsplash.com/...` を直接読んでいる（`stories/data-display/Avatar/Avatar.stories.tsx:39` / `stories/Audit/MediaFamilyAudit.stories.tsx:33-35` / `stories/Audit/InteractionFamilyAudit.stories.tsx:47` ほか）。**画像が間に合うかどうかで撮れる絵が変わる**ので、ベースラインはネットワークの機嫌に依存する。T44 は 28 件の非決定を潰したが、そこで解決したのは**フォント**（供給元をローカルへ・#171）と**アニメーション**（撮影時に無効化・#175）で、**外部画像は手つかずのまま残った**。<br>**実測は `chore/vrt-jitter-probe` にあった**（2026-07-29、閾値 0 で 2 ラン）: 非決定的だった 28 ケースのうち `Avatar - Sizes` と `SourceCitation - Default` は外部画像の到着ぶれで **数百〜1500px** 揺れていた。どちらも `NONDETERMINISTIC_STORY_IDS` に入っていないので、**今も除外されず、対策もされていない**。今のところ表面化していないだけで、ネットワークが遅い日に赤が出る余地がある（しかも「変更と無関係な赤」として扱われ、原因究明に時間を取られる形）。**このブランチは 2026-08-02 に削除したので、以下がその実装の記録**（同ブランチは main より遅れていて他は捨ててよい内容だった） | `vrt/story-ready.ts` に外部画像のスタブを足し、`vrt.spec.ts` と `a11y.spec.ts` の両方から呼ぶ。probe ブランチの実装は次のとおり:<br><br>`page.route((url) => url.hostname !== "localhost" && url.hostname !== "127.0.0.1", …)` で **resourceType が `image` のものだけ** を `image/svg+xml` の固定 SVG で `fulfill` する。**SVG を返すのは固有サイズ（800x600）を持たせるため** — 1x1 を伸ばすと intrinsic size が変わってレイアウトが崩れる。<br><br>**判断が要る点**: ①スタブすると Avatar / Media 系のベースラインが**全部撮り直しになる**（実画像 → 灰色矩形）。VRT の目的はレイアウトと色の回帰検知なので写真の中身は元から対象外だが、**枚数が動くので単独 PR で出すこと** ②あるいは画像をリポジトリに取り込む案もある（`src/media/no-image.png` の前例あり）。スタブは軽いが「実画像でのレイアウト確認」ができなくなるので、Audit ページのように写真の見え方自体を見たいストーリーとは相性が悪い ／ **受け入れ条件**: ①`Avatar - Sizes` を**ネットワークを切った状態**で撮って、スタブ有りなら同じ絵になり、無しなら変わることを実証する ②`stubExternalImages` を入れたうえで **localhost への通信は素通りする**こと（Storybook 自身の配信を壊さない＝鳴ってはいけない経路） |<br><br>**済（2026-08-03）。起票時の根拠は削除済みブランチの計測だったので、引き写さずに測り直した。前提は今も生きていた。**<br>**実測**: `AvatarGroup` の 4 枚は **1.2 秒時点で `complete=false`**、3 秒までに到着。`story-ready.ts` の落ち着き待ちは 5 秒で打ち切って撮るので、**速い日は写り遅い日は写らない**。同じストーリーを「画像あり」と「止めた状態」で描画すると `AvatarGroup` / `LoadingOverlay` / `HoverCard` は**レイアウトまで変わった**（`HoverCard` は要素数 5 と 8 ── 失敗時にフォールバックが増える）。curl では 50〜100ms で返るのにブラウザ経由では 1.2〜3 秒かかる。<br>**スタブ案は採らず、自作 SVG を取り込んだ**（8 ファイル・15 箇所・10 種類）。ベクターなのでデコード差もなく VRT にとって決定的で、実画像でのレイアウト確認も残る。<br>**権利の判断（ユーザーの問いから）**: Unsplash License はダウンロード・改変・再配布を無償かつ商用可で認めるので**取り込むこと自体は許される**が、**モデルリリースは付与しない**。使っていた 4 枚は**実在人物のポートレート**で、架空ユーザーのアバターとして出す形はグレー。しかもホットリンクなら撮影者が削除すれば消えるのに対し、**取り込むと git 履歴に恒久的に残り複製の主体がこちらになる**。そこで**実在人物の写真は取り込まず**、抽象図形の SVG を自作した（`src/media/avatar_*.svg`。ロゴ・商標・実在人物を一切含まない）。ASSETS.md の既存の作法（同梱画像は AI 生成か自作）に沿う判断。<br>**ASSETS.md の記録に穴があったので直した** — `src/media/gallery_*.svg` の 6 枚が出所の表に載っていなかった（記録は写真調 7 枚のみ）。<br>**ガード**: `check:external-assets` を新設し `audit:all` に登録。既知の画像ホスト 8 つを見て 0 件のハードゲート。4 経路で実証（クリーン / 外部 URL を戻すと file:line つきで exit 1 / `external-asset-ok` で黙る / 復元）。<br>**検証**: 6 ストーリーとも「画像あり」と「止めた状態」で**レイアウト完全一致**、全画像が `complete=true`。<br>**VRT のベースラインは全面的に動く**（写真 → 自作 SVG）ので、マージ前に update を 1 回
| T56 | `check:contrast` が 11 面あるサーフェスのうち 3 面しか見ていない | **済**（2026-08-02。126 組 → 189 組。トークン 3 つを再調整） | T32 の 3 枚目（AI アシスタント画面）で axe が **serious** を出して発覚。`check:contrast`（T34）は `SURFACES = ['surface', 'surface-app', 'surface-subtle']` の 3 面に対して 126 組を検査して緑だが、**トークンには surface 系が 11 個ある**（`surface` / `-app` / `-hover` / `-inset` / `-inverse` / `-subtle` / `-subtle-alpha` / `-tertiary` / `-variant` / `-variant-alpha` / `-void`）。検査されていない面に載せた瞬間に AA を割る:<br>・dark `text-danger`(#ffa3a3) は **`surface`(#393939) で 6.06:1** だが **`surface-variant` / `surface-tertiary`(#4f4f4f) で 4.30:1**<br>・その上に `subtle` の半透明ティントが重なると **3.10〜3.63:1**（実測: チャットバブル上の `Badge intent="danger" variant="subtle"` が 3.10、`AgentStatus status="error"` のラベルが 3.55）<br>・light では `Button variant="ghost"` の文字 `--wim-color-primary`(#055d87、**両テーマ固定**) が `ChatMessageList` の面(#aec8dc)で **4.13:1**<br>**`subtle` が半透明であることが効いている**: 実効背景は下にある面で変わるのに、ガードは 3 面ぶんしか合成しない。**今日追加した `check:contrast:scss`（T41 案②）も同じ盲点**で、同一 SCSS 内に不透明な祖先が無ければ `--wim-color-surface` へ合成するため、他コンポーネントの上に載る場合は構造的に見えない | ①短期: `SURFACES` に実在する面を足す（`surface-variant` / `surface-tertiary` / `surface-hover` / `surface-inset` は少なくとも中身が載る面）。**足すと既存の組み合わせが落ちるはず**なので、落ちたぶんは `text-*` トークン側の見直しか、その面での使用禁止の明文化で片付ける ②恒久: `subtle` の文字色を「下の面に依存しない」形にする（不透明化、または面ごとに解決）／ **受け入れ条件**: `surface-variant` を `SURFACES` に足した状態で **dark の danger/subtle が落ちること**を実証する。あわせて**鳴ってはいけない経路**＝現行 3 面での 126 組が引き続き緑であること<br>**済（2026-08-02）— 検査を 3 面 → 8 面に広げ、対象外の 3 面は理由付きで明文化した（`SURFACES_OUT_OF_SCOPE`）。**126 組 → 189 組で全緑。<br>**面の性格で 3 つに分かれた**: ①**中身が載る面**（`surface-variant` / `-hover` / `-inset` / `*-alpha`）→ 検査対象に追加 ②**両テーマとも暗く固定の面**（`surface-inverse` #262626 / `surface-void` #000）→ 載せるのは反転用の文字なので intent × variant を検査しても意味がない（26 件出るが全部これ）③**`surface-tertiary`**（light #b6b6b6 の中間グレー）→ 対象外。**実使用を調べたら 2 箇所だけで、どちらも中身を載せていなかった**（`Header.stories.tsx:118` のグラデーション終端色と、レシピ内のコメント文字列）。<br>**判定の決め手**: 通常の文字は両面とも余裕で通る（`text-primary` 8.19〜19.26 / `text-secondary` 5.70〜10.59）。**面が悪いのではなく intent の文字色だけが 3 面向けに調整されていた**。<br>**そして回帰だった。** `text-danger` のコメントには「danger-subtle 塗り（15% over surface-variant）上 4.15:1 のため 1 段明るく（4.9:1）」と書かれており、**当時から `surface-variant` を意図して調整されていた**。T45 で面が動いた結果 3.65:1 まで落ちたが、ガードが 3 面しか見ていないため気付けなかった。<br>**直したトークン 3 つ（dark）**: `text-danger` #ffa3a3 → **#ffc1c1**（対象 6 面の outline / subtle すべてで最悪 4.52）／ `text-warning` lt7 #fcd474 → **#ffda7a**（最悪 4.54）／ `neutral-fill` gy4-5 → **#575757**。最後のは**塗りの可視性の発見**で、`neutral-fill` は `surface-variant` と同値(#4f4f4f)だったため、**その面に置いた neutral の Badge / Tag は塗りも輪郭も完全に消えていた**（知覚距離 0.0000 → 0.0292）。<br>**受け入れ条件を両方向で実証**: 旧 `text-danger` に戻すと `dark danger/subtle on surface-variant 3.65 < 4.5` で鳴る／3 面のみに戻すと 126 組が従来どおり緑 |
| T57 | `AppShell` の Composition API が JSDoc の例どおりに動かない | **済**（2026-08-03。暗黙のラップを Composition API では行わない） | 同じ画面を書き始めたときに踏んだ。`AppShell.tsx` の JSDoc は 2 通りの使い方を載せていて、1 番目が Composition API:<br>`<AppShell><AppShell.Header/><AppShell.Sidebar/><AppShell.Main/></AppShell>`<br>しかし `AppShellRoot` は **children を必ず `<div class=body><main class=main>` で包む**ので、Header も Sidebar も Main も**暗黙の `<main>` の中**に入る。実測（DOM を辿って確認）: `wim-app-shell > body > MAIN > body > sidebar` という入れ子になり、**`<main>` が 2 つ**、サイドバーは **幅 10px** に潰れて ThreadList が読めなくなった。<br>**関連して `styles.withSidebar` が SCSS に存在しない**（`appshell.module.scss` に `withSidebar` は 0 件）。TSX は `!!sidebar && styles.withSidebar` を組み立て、JSDoc は「`--with-sidebar` クラスが自動付与されます」と機能として説明しているが、実体が無いので `undefined` が付くだけ。→ T58 の 1 件でもある。<br>**なお props API（`sidebar={<Sidebar/>}`）は正しく動く**（公式ストーリーで sidebar 260px・`<main>` 1 つを実測）。幅は `Sidebar` の `width` prop（既定 260）が持つので、**幅を持たない子（`ThreadList` 等）を直接渡すと潰れる**点も併せて記録する | ①`AppShellRoot` が `AppShell.Main` / `AppShell.Sidebar` を children に見つけたら暗黙のラップをやめる（あるいは Composition API を JSDoc から削って props API 一本にする）②`styles.withSidebar` を実装するか参照を削る ／ **受け入れ条件**: JSDoc の 1 番目の例をそのまま書いたテストで、`<main>` が 1 つでサイドバーが 0 幅でないこと。**鳴ってはいけない経路**＝props API の既存ストーリー（`With Sidebar`）が 260px のまま変わらないこと |<br><br>**済（2026-08-03）。起票内容のうち 2 点は既に古くなっていた（実測して判明）**:<br>① **`styles.withSidebar` は T58 で解消済み** — 参照は削除され、理由もコメントに残っていた。<br>② **サイドバー幅 10px は再現しなかった**（実測 120px）。この監査ストーリーが `style` で幅を明示しているため。潰れるのは「幅を持たない子を渡した場合」という条件付きで、起票文の断定は強すぎた。<br>**本体の欠陥は生きていた。** 実測（`Audit/LayoutFamily`）: `<main>` が **2 個**で、`wim-app-shell > div > main > div > main` と**暗黙の `<main>` の中に Header / Sidebar / Main が丸ごと入っていた**。しかも JSDoc は Composition API を「推奨」として最初に載せながら、末尾に「Composition API では `AppShell.Body` で手動構成せよ」という**推奨と矛盾する注記**を持っていた。<br>**修正**: children に構造サブコンポーネント（`Body` / `Main` / `Sidebar` / `Header` / `Footer` / `Navbar`）があれば暗黙のラップをしない。判定用の集合はサブコンポーネント定義後に埋める（定義がルートより後ろにあるため。参照は render 時なのでこれで足りる）。JSDoc の矛盾も解消。<br>**受け入れ条件を先に失敗するテストとして固定した**（`<main>` が 1 つであること）。書いた時点で落ち、実装後に通ることを確認済み。<br>**鳴ってはいけない経路も実測**: props API の公式ストーリー `With Sidebar`（`<main>` 1 個・sidebar 260px）と `Default` は**変化なし**。<br>**利用者は `Audit/LayoutFamily` の 1 件のみ**で VRT 対象外（a11y には載る）
| T58 | TSX が参照しているのに SCSS に無いクラス（当初 35 件と報告 → 実際は 29 件） | **済**（2026-08-02。**0 件**。ガードは 0 のハードゲート） | T57 の `styles.withSidebar` を追ううちに、同型が**全体で 35 件・21 コンポーネント**あることが分かった（`styles.foo` / `styles["foo"]` を同ディレクトリの `*.module.scss` と突き合わせて計測）。**クラス名が `undefined` に解決されるので、その状態・部位のスタイルが黙って当たらない**。抜粋: `Drawer` の `hideOverlay` / `noSlideIn` / `noSlideOut` / `inner`、`Dialog` と `BottomSheet` の `trigger` / `close`、`BentoGrid` の `itemHeader` / `itemContent` / `itemIcon` / `itemText` / `itemTitle` / `itemDescription`（6 件）、`Progress` の `label` / `value`、`Stepper` / `Combobox` / `SmartSearchInput` の `disabled`、`Table` の `footer`、`List` の `fullWidth` / `left`、`Banner` の `action`、`PhoneInput` の `dialCode`、`FloatButton` の `backtop`、`ToggleGroup` の `label`、`Dashboard` の `editToggle` / `editActive`、`AppShell` の `withSidebar`。**サンプル 4 件（`Progress.label` / `Dialog.trigger` / `List.left` / `AppShell.withSidebar`）は共有 SCSS にも `_internal` にも存在しないことを確認済み**。<br>**既存のどのガードも見ていない**: `check:prop-classes`（T33）が見るのは `styles[\`prefix-${prop}\`]` のテンプレート形だけで、素の `styles.foo` は対象外 | `check:prop-classes` に「TSX が参照する素のクラス名が同ディレクトリの module.scss に在るか」を足す（実装は 30 行程度で、今回の計測スクリプトがほぼそのまま使える）。**35 件を一度に直すのは別作業**なので、まずラチェットで凍結して増加を止め、内訳を潰していく ／ **注意**: 偽陽性がありうる経路が 2 つある（①複数の module.scss を持つディレクトリ ②親コンポーネントの module を import している場合）。**サンプルではなく 35 件すべてを 1 件ずつ確認してからラチェット値を決めること** ／ **受け入れ条件**: `AppShell.withSidebar` を含む既知の件で鳴り、クラスを足したら鳴らなくなること<br>**一部済（2026-08-02）— ガードを入れ、曖昧さの無い 2 件を実装した。**<br>**偽陽性は 0 だった**: import している module も辿って再計測したが 35 件のまま（21 コンポーネントすべて scss 1 ファイル）。サンプルではなく全件を 1 件ずつ使われ方まで確認した。<br>**ガードは `check:prop-classes` に同居させた**（`BARE_CLASS_BASELINE`、ラチェット）。**両方向で実証**: 参照を 1 件足す → 鳴る／SCSS にクラスを足す → 33 に下げるよう促す。**最初の実証は設計を誤った** — `styles.action` を `styles.actionZone` に**改名**して試したが、1 件減って 1 件増えるので件数が変わらず鳴らなかった。**件数ベースのラチェットは入れ替えを検出できない**ので、変異は「足すだけ」にすること。<br>**実装した 2 件**（どちらも「prop が黙って無視される」形）: `Drawer` の `showOverlay={false}`（暗幕が必ず出ていた）と `List` の `fullWidth`。<br>**残り 33 のうち 2 件は、クラスを足すのが間違った直し方だと分かった**: `Drawer` の `.noSlideIn` / `.noSlideOut`。**Drawer には `animation` / `@keyframes` / `transition` が 1 つも無い**（SCSS にも共有スタイルにも 0 件）。つまり `slideIn` / `slideOut` は**存在しないアニメーションを止める prop**で、JSDoc は「Whether to animate the drawer when opening. @default true」と**無い挙動を約束している**（T37 系の主張破れ）。**実装するか prop を消すかの判断が要る**。`stories/overlay/Drawer/Drawer.stories.tsx:227` に `slideIn: false, slideOut: false` のストーリーがあり、現状はどちらの値でも同じ絵になる。<br>**残り 31 は見た目の設計判断が要る**（`BentoGrid` の item 6 部位・`Progress` の label / value・`Dialog` と `BottomSheet` の trigger / close など）。**この 2 件は「優先度が高い」と見立てたが、調べたら両方とも誤りだった** — `GanttChart` の `.focused` は `focusedIndex` が `onFocus` でも更新される＝DOM フォーカスと同義で、`.bar:focus-visible` が既にリングを描いている。`ModelSelector` の `.selected` も、選択中の項目にだけチェックアイコンが描かれるので既に見分けが付く。**どちらも足りないのではなく死んだ参照**だったので削除した（33 → 31）。<br>**ここから来る作業方針**: **「クラスを足す」で直るとは限らない**。1 件ずつ「その状態は別の手段で既に描かれていないか」を確かめてから、足す / 消すを決めること。見た目を足す前に、まず重複を消すほうが安い。<br><br>**済（2026-08-02）— 29 件すべて処理し、ガードを 0 のハードゲートにした。**<br>**最終集計**: 消す **22** ／ 足す **5**（`Stepper` の無効ステップ・`DataGrid` の空状態・`InfiniteScroll` の読み込み行・`Drawer.showOverlay`・`List.fullWidth`）／ **どちらでもない 2**（下記）。<br>**当初の「35 件」は誤りだった。** 走査が `&Header` を `Header` として「定義済み」に入れていたため、`BentoGrid` の item 6 部位を偽陽性で数え、逆に `styles.primary` のような名前を存在扱いで隠していた。リゾルバを入れて測り直した真の総数が 29。**リゾルバ自体も最初の実装で 2 つの形を落とした**（複数行のセレクタリスト・1 行完結の規則）ので、ドット付きの名前はどこでも拾う安全側にし、`&Suffix` だけを別に解く形にした。<br>**最後の 2 件は第 3 の型だった。** `Drawer` の `.noSlideIn` / `.noSlideOut` は、消すでも足すでもなく**見当違いのクラス**だった。追ってみると **`OverlayBase` を使う 5 コンポーネント（Dialog / Drawer / BottomSheet / Lightbox / Menubar）で中身が一度もアニメーションしていなかった**。コンテンツの `Transition` はオーバーレイ `Transition` の子で、閉じている間はマウントされておらず、開いた瞬間に `show=true` で新規マウントされる。初期状態は `show && appear ? "entering" : "idle"` なので、**`appear` が無いと入りの相が走らない**。外側のオーバーレイは閉じている間も残るので `show` の変化を観測でき、そちらだけ動いていた（実測: 入りの相でオーバーレイに `fadeEnterTo`、コンテンツには何も付かない）。`appear` を渡して解決し、あわせて `Transition` に `enterPreset` / `leavePreset` を足して `Drawer` の `slideIn` / `slideOut` が相ごとに効くようにした（#224）。<br>**教訓 3 つ**: ①**「N 件の実バグ」と数える前に、走査そのものを既知の値で検算する**（当初の数字は 6 件多く、隠していた分もあった） ②**大半は重複**だった。死んだ参照は「その状態を 2 通りで表そうとして片方が空振りしている」形で、見た目の欠陥そのものは少数 ③**テストが空振りを固定していた 3 件**（`List` ×2・`AppShell` ×1）。Vitest では CSS モジュールが全キーに答えるので、実体の無いクラスの付与を検証すると必ず通る |
| T59 | カラム前提のコンポーネントが横並びで 1 文字幅まで潰れる | **済**（2026-08-03。**0 件**。残り 15 件を実測して 9 件に下限・6 件に `shrinkable-ok`。ラチェット 15→0 でハードゲート化） | T32 の 3 枚目のヘッダー行（title + 使用量 + モデル選択）で発生。**`UsageMeter` は `width: 100%` で `min-width` を持たず、`ModelSelector` は明示的に `min-width: 0`** を置いている。どちらも「カラムを埋める」前提なので、`Group`（flex row）に入れると際限なく縮む。実測（コンテナ 610px）: `UsageMeter` が **幅 12px・高さ 272px** になり、`C o n t e x t` と **1 文字ずつ縦に折り返った**。`ModelSelector` も 12px の空箱。<br>**`wrap="wrap"` では直らない**（実測で 12px のまま）。ゼロまで縮められる要素は折り返しを起こさず、ただ細くなるだけだから。<br>**機械のチェックは全部緑だった**: `tsc` / `lint` / `check:slop` / axe / 横スクロール測定（`scrollWidth === clientWidth`）。DESIGN.md のチェックリストは「列が潰れ、`Code` のような要素は 1 文字ずつ折り返る」を名指ししているのに、それを検出する仕組みが無い。**ユーザーがスクリーンショットを見て初めて分かった**（規約「合成画面の視覚判定を自己申告しない」が機能した事例） | ①`min-width` を持たせる（読み取り値が入る幅を下限にする。`UsageMeter` なら数値部分、`ModelSelector` ならモデル名 1 つ分）②または `Props` と docs に「これは column filler で、横並びには置けない」と明記する ／ **検出案**: 狭幅レンダリングで「テキスト要素の幅が 2ch 未満」または「1 行あたりの文字数が 2 以下」を機械判定できる。VRT のピクセル比較では拾えない（潰れた状態で安定して撮れるため）／ **受け入れ条件**: 610px のコンテナで `<Group><Title/><UsageMeter/><ModelSelector/></Group>` を描画し、どちらも読める幅（最低でも数値が 1 行に収まる）になること。**鳴ってはいけない経路**＝カラムに置いた場合（実測 243px）が変わらないこと |<br><br>**済（2026-08-03）。残り 15 件を 1 件ずつ実測し、12 件すべてが実害だった。** 610px の flex row に「縮まない兄弟」を置いて残りを 24px にし、対象の実寸を測った（`ModelSelector` は 08-03 に下限を入れてあるので**対照**として使い、180px で止まることを毎回確認した）。<br>**実測（残り 24px。修正前 → 修正後）**:<br><br>&nbsp;&nbsp;`MarkdownRenderer` 幅 24px・高さ **1160→6950px**・テキスト幅 4px＝**1 文字ずつの折り返し** → 180px / 高さ 1352px<br>&nbsp;&nbsp;`RichTextEditor` 幅 24px・高さ **271→906px**（ツールバーが 1 個ずつ縦積み） → 180px<br>&nbsp;&nbsp;`Label` 幅 24px・高さ **71→161px**（`Username` が 2.7 文字ずつ） → 180px<br>&nbsp;&nbsp;`Select` 幅 24px・選択値が 1 文字も出ない → 180px（`Option 1` が 15.9 文字ぶん）<br>&nbsp;&nbsp;`Code`(.block) 幅 34px に対し scrollWidth 300px＝3 文字ぶんの窓 → 180px<br>&nbsp;&nbsp;`Menu`(.horizontal) 幅 24px に対し scrollWidth 289px＝項目が 1 つも読めない → 200px<br>&nbsp;&nbsp;`OtpInput` 幅 24px に対し scrollWidth 174px＝セルが外へはみ出す → 180px<br>&nbsp;&nbsp;`Transfer` / `Textarea` / `InputBase` / `SmartSearchInput` いずれも 24px → 180px<br><br>**内訳**: 下限を与えた 9 件（`Label` は `min-content`、他は `--wim-width-sm` / `--wim-menu-min-width`）、`shrinkable-ok` で逃がした 6 件（`Select .trigger` / `ModelSelector .trigger` / `Transfer .root` / `SmartSearchInput .textarea` / `QueryBuilder .select` / `InputBase .inner`）。**逃がす条件を「下限を持つ根の内側であること」に統一した** — 根が守られていれば、中で省略やスクロールのために 0 まで縮むのは正しい。<br>**鳴ってはいけない経路も測った**: 243px のカラムに置いた場合、11 件すべてが修正前と同じ寸法（`MarkdownRenderer` なら 243px・高さ 1160px）。<br><br>**この回に出た訂正 3 つ**:<br>① **ガード自身のコメントが間違っていた。** 「長い内容を縮めて内部スクロールさせたい場面（`MarkdownRenderer` 等）では `min-width: 0` が正当」と書いてあったが、`MarkdownRenderer` の `.root` は overflow を持たない flex column で、スクロールするのは内側の `.tableWrapper` だけ。**実装を見ずに書いた正当例が、実際にはいちばん潰れていた**（高さ 6950px）。<br>② **`min-width: min-content` は万能ではない。** `MarkdownRenderer` に入れたら最小幅が **479px**（中身の表とコードブロックが決める）になり、**243px のカラムに置いただけではみ出した**＝鳴ってはいけない経路を自分で壊した。測って気付き固定値へ差し替えた。`Label` で `min-content` が正しいのは中身が入力欄 1 つだから（180px に収まる）。<br>③ **ガードが `!important` を数えていなかった。** `min-width: 0 !important;` が正規表現に一致せず、`InputBase` の `.inner` が 15 件の外に隠れていた。正規表現を直して検出させ、`shrinkable-ok` を付けた。<br>**ガードの実証**: ①クリーンで 0/exit 0 ②`InputBase` の下限を 0 に戻すと file:line つきで exit 1 ③`shrinkable-ok` を足すと黙る ④復元して 0。`!important` 版も同じ 4 経路を通した。<br><br>**④ 下限そのものがリグレッションだった（全 1017 ストーリーの実測で発見）。** 「潰れなくなったか」だけ見て終わりにせず、**逆向き＝下限が親を押し広げていないか**も測った。`InputBase` の 180px が `ColorPicker` / `ColorInput` の **10 ストーリーで枠を 60px はみ出していた** — `FieldTemplate` は `input[type="color"]` の欄を `--wim-width-xs`（120px）に絞っているのに、下限がそれに勝っていた。**下限は「狭すぎ」だけでなく「広すぎ」でも壊す。**<br>**直し方を 1 度間違えた（これも実測で発覚）。** 最初は `min-width: min(var(--wim-width-sm), 100%)` にした。% の `min-width` は包含ブロックに対して解決されるので、狭い親（120px）では 120px・610px の row では 180px、と**両立するように見えた**（単独実験でも確認できた）。**ところが祖先の内容サイズに寄与しなくなる** — `InputBase` を内側に持つ `Label` が 180→**24px**、`SmartSearchInput` が 180→**58px** と、直したはずの下限が外れた。**下限は伝播しないと意味がない。**<br>**採った形**: `InputBase` が `--wim-input-min-width`（既定 `--wim-width-sm`）を読み、狭くしたい側（`FieldTemplate` の color 規則）が明示的に下げる。既定は守られ、例外は例外を要求する場所に書かれる。<br>**ここでもう 1 回外した**: 既定値を `InputBase` 側で `--wim-input-min-width: var(--wim-width-sm);` と**宣言**したところ、**自己宣言が継承値に勝つ**ので祖先で下げた値が届かず、10 ストーリーは 180px のまま直らなかった。`min-width: var(--wim-input-min-width, var(--wim-width-sm))` ＝ **既定は `var()` のフォールバックで持つ**のが正解。**「直したつもり」を実測するまで 1 度も正しくなっていなかった**（`min-content` → `min(…, 100%)` → 自己宣言 → フォールバック、の 4 手目でようやく 0 件）。<br>**教訓**: **単独実験で「両立した」ものが、実物では両立しなかった。** `min(…, 100%)` の挙動そのものは実験どおりで、間違っていたのは**実験の設計**（祖先を持つ形を試していなかった）。合成した状態で測り直すまで、採否を決めないこと。 |
| T60 | 狭幅（390px）でレールに到達できず、コード例が読めない | **済**（2026-08-03。①docs 明記 ／ ③ 修正 ／ **②は T61 へ移管**＝真因が `ChatUI` の `container-type` 側と判明したため） | T32 の 3 枚目を 390px で見て発覚。**3 つとも別々の問題**:<br>①**`Sidebar` がオフキャンバスに退避したまま開けない**。`responsive` が既定 `true` で、md 未満だと `left: calc(-1 * var(--wim-sidebar-width))` で画面外へ出る（実測 **x = −260**）。開くには利用者が `mobileOpen` と `HamburgerMenu` を配線する必要があり、**書かなければスレッド一覧・モデル選択・使用量がモバイルから一切到達できない**。公式の AppShell ストーリーはその配線をしているが、`Sidebar` 単体の既定は「消えるが開けない」。**横スクロールは出ないのでガードは全部緑**。<br>②**`CodeBlock` が狭幅で切れる**。ファイル名 `k8s/deployment.yaml` が `k8s/deployment` で切れ、各行も `readinessP` / `initialD` / `periodSe` のように途中で切れる。内部スクロールはあるが、狭幅では読めない。<br>③**`ThoughtProcess` のラベルが 1 単語ずつ折り返る**。`READ THE ROLLOUT EVENTS` が 3 行に積まれ、本文も 2〜3 語で折り返る。<br>いずれも**レシピ側では手が出せない**（コンポーネント内部の折り返し・退避の挙動） | ①`Sidebar` に「退避したら開ける手段」を持たせる（内蔵トグル、または `responsive` の既定を見直す）。少なくとも **`responsive` の既定が `true` であることと、`mobileOpen` の配線が必須であることを docs に明記**する ②`CodeBlock` は狭幅で `showLineNumbers` を落とすか、折り返しモードを持つ ③`ThoughtProcess` のラベルは狭幅で `text-transform: uppercase` + `letter-spacing` をやめる（大文字と字間が折り返しを悪化させている）／ **受け入れ条件**: 390px で ①レールの中身に到達できること ②`CodeBlock` の 1 行が最低 20 文字読めること ③`ThoughtProcess` のラベルが 1 単語 1 行にならないこと。**いずれも VRT では拾えない**（潰れた状態で安定して撮れる）ので、レンダリング後の実測で判定すること<br><br>**一部済（2026-08-03）。**<br>**① docs に明記した。** `Sidebar` 自身にトグルを持たせる案は採らなかった — トリガーはヘッダーに置くのが普通で（公式 AppShell ストーリーもそう）、内蔵すると置き場所が違ったり既にあるものと二重になる。`responsive` の JSDoc に「**退避するが戻す手段は持たない**」ことと、`mobileOpen` + `HamburgerMenu`（`visibleBelow="md"`）の配線例、`responsive={false}` で常時 in-flow にできることを書いた。`mobileOpen` 側にも「これが無いと md 未満でレールに到達できない」と明記。<br>**③ 修正した。** `text-transform: uppercase` + `letter-spacing: 0.05em` は語を実質 1.3 倍ほど長くする。`down(sm)` で両方やめた。実測: `READ THE ROLLOUT EVENTS` が 1 単語ずつ 4 行 → 「Read the rollout events」が 3 行の通常の折り返しに。<br>**② は当初の見立てが浅く、真因は別だった。** `CodeBlock` に `down(sm)` で `white-space: pre-wrap` を入れた（適用は実測で確認）が、**それでも読めない**。幅を辿ると `ChatUI` の入れ子が削っていた: 390px の画面で `messageList` 204px → `message`（左寄せ・アバターあり）150px → `bubble` 144px → `CodeBlock` 124px → `pre` **122px**。`CodeBlock` 側をいくら折り返しても 122px では読めない。**`ChatUI` が狭幅を想定していない**のが本体で、狭幅ではアバターを畳む・バブルの左右余白を詰める等の設計判断が要る。`pre-wrap` 自体は単体で有効なので残す。<br>**残件**: `ChatUI` の狭幅レイアウト。T32 の 4 枚目（モバイル前提のレイアウト）で実際の画面を見ながら決めるのが妥当<br><br>**2026-08-03 夕方: ② を T61 へ移管して、この行を閉じた。** T59 を潰す過程で **`ChatUI` の `.root` が `container-type: inline-size` を持ち、下限を同じ規則に持たない 20 件の 1 つ**だと分かった。`contain: inline-size` は内容の寸法を 0 として扱うので、**入れ子が幅を削るのではなく、そもそも内容が幅を主張していない**可能性が高い（実測した 390px → `messageList` 204px → `pre` 122px の連鎖はその結果として説明できる）。**②を単独で「アバターを畳む」等の設計判断として解くと、真因を迂回した対症療法になりうる**ので、T61 で 20 件をまとめて測るときに `ChatUI` を最初に測り、そこで決める。T61 の受け入れ条件に「390px で `CodeBlock` の 1 行が 20 文字読めること」を引き継いだ |
| T37 | リポジトリの「主張」の機械検証 | **済**（2026-08-01・#207 で README の表 / 2026-08-02 でコード例のコンパイル） | llms.txt の版落ちは「常に最新」という主張が破れていた例で、`check:llms` で塞いだ（T27）。同種の主張が他にもある | README / MDX のコード例が実際にコンパイルできるか（llms.txt の価値は PR #64 の A/B で「API 正当性＝コンパイル可否」と測定済み）。README の peer 表と `package.json` の `peerDependencies` の一致 ／ **受け入れ条件**: README のコード例を 1 つ壊した状態で**落ちること**を実証する。<br>**一部済（2026-08-01・#207）— README が npm で最初に読まれることを踏まえて、そこを先に固めた。** `scripts/check-readme-claims.js` が 3 つの主張を検証する: ①「Support matrix (peers)」表の**バージョン範囲**が `package.json` の `peerDependencies` と一致する ②「Optional peerDependencies」表が案内する **import 経路が `exports` に実在する**（存在しないサブパスを案内すると読者の import がそのまま失敗する）③同表が挙げる**パッケージ名が peerDependencies にある**。<br>**4 経路で実証**: peer 範囲を 1 つずらす→落ちる／存在しない import 経路を案内→落ちる／**表の見出しを壊す→「読めていない」で落ちる**／素の状態は通る（Support matrix 4 行 + Optional peers 12 行を実際に読んだことを出力する）。<br>**③ の仕掛けは同日の失敗から来ている**: 実装途中でセル分割を壊し、**表を 1 行も読めていないのに「問題なし」で緑**になった。読めた行数を出力し 0 行なら落とす、を入れたのはそのため。ガードが「見ていないから通る」形は今日 4 回目（T43 の VRT / CI-7 の MDX / T53 の a11y / これ）。<br>**済（2026-08-02）— `check:examples` を追加。** README（en/ja）と `llms.txt` / `llms-full.txt` の ```tsx / ```ts ブロックを取り出し、`wimui` をこのリポジトリのソースへ解決して `tsc` に通す。**重複ではない**: `smoke:recipes` は公開 tarball に対して配布漏れを見るのに対し、こちらは現在のソースに対して **API のドリフト**を見る。落ちる理由が違う。<br>**成立しないブロックは支えずに飛ばす**: 名前を束縛する import が無いもの（`import "wimui/icons";` だけの断片は前の例の続き）と、`<!-- code-example: skip — 理由 -->` を付けたもの（理由必須。「同じ名前を 2 経路から import できる」の例示は重複識別子になるのが正しい）。相対 import は読者のファイルなので、要求された名前だけを持つスタブへ差し替える。<br>**35 個が通り、実バグを 4 件検出して修正**: ①README（en/ja）のアイコン節が**隣接する 2 つのトップレベル JSX 文でパースできなかった** ②レシピ 3 箇所がリテラルキーの intent マップを `string` で引いており `noImplicitAny` 下で **TS7053**（エージェントがコピペすると、まさにその行でコンパイルが止まる）。`generate-llms.js` には「Every symbol/prop below is verified against the real API」と書いてあったが、**手で verify したというその主張のほうが間違っていた**。<br>**故意の破壊 4 通りで実証**: 存在しないコンポーネント名 / 存在しない prop / 複合コンポーネントの誤り（`Table.Cel`）/ 存在しない import 経路。いずれも元のドキュメントの行番号へ戻して報告する。**鳴らなかった 1 件はガードの欠陥ではなかった** — `Grid` の `gap` は `ResponsiveProp<number | string>` なので `gap="enormous"` は型として正しい（T38 の「型が実装より広い prop」の系列）
| T61 | `container-type: inline-size` はそれ自体で潰れの保護を消す（T59 の同型・**ガードの外**） | **済**（2026-08-03。**0 件**。20 件すべてに下限 or 逃がし、ラチェット 20→0） | T59 の 15 件を潰している最中に、`QueryBuilder` だけが修正後も 24px のまま残ったことから判明。`QueryBuilder` の `.root` に `min-width: 0` は**無い**ので `check:shrinkable` は最初から見ていなかった。真因は `container-type: inline-size` ＝ `contain: inline-size` で、**内容の寸法が 0 として扱われる**ため flex の自動最小サイズ（`min-width: auto` の保護）が消える。<br>**単独実験で確認**（610px の flex row・残り 40px・内容は 190px の語）:<br><br>&nbsp;&nbsp;`width:100%` のみ → **190px**（保護あり）<br>&nbsp;&nbsp;`width:100%` + `min-width:0` → 40px（＝T59 が見ている形）<br>&nbsp;&nbsp;`width:100%` + `container-type:inline-size` → **40px**（`min-width:0` は無い）<br>&nbsp;&nbsp;`container-type:inline-size` のみ → **0px**<br>&nbsp;&nbsp;`container-type` + `min-width:min-content` → **40px**（`min-content` も 0 に潰れて効かない）<br><br>**`src/` に同じ規則で下限を持たない `container-type: inline-size` が 20 件**（26 件中。**当初 19 と書いたのは誤り** — 試作スキャンの否定先読みが `s*` のバックトラックで値ではなく空白の位置に当たり、`min-width: 0` を下限として通していた。ガードを値の取り出しに直したら `TreeView` が現れた）: `Tabs` / `Stepper` / `Pagination` / `Gallery` / `SimpleGrid` / `Grid` / `Dashboard` / `BentoGrid` / `TreeSelect` / `QueryBuilder` / `DateRangePicker` / `Banner` / `Table` / `DescriptionList` / `DataGrid` / `GanttChart` / `ThreadList` / `ThoughtProcess` / `ChatUI` / **`TreeView`**。<br>**`Grid` / `SimpleGrid` / `Table` / `DataGrid` は「潰れてよい」側かもしれない**ので、T59 と同じく 1 件ずつ実測して下限か注記かを決める。<br>**検出器は試作して自己検証済み**（2026-08-03。scratchpad）: 同じ規則に `min-width`（`0` を除く）を持たない `container-type` を数えると **鳴るべき 20 / 鳴ってはいけない 6**。下限を持つ 6 件は `Dialog` / `Transfer` / `OtpInput` / `UsageMeter` / `PromptInput` / `ModelSelector` ＝ **T59 で下限を入れたものが正しく分類されている**。<br>**T60-② を引き継いでいる**（2026-08-03 に移管）＝ `ChatUI` の狭幅で `CodeBlock` が読めない件。390px で `messageList` 204px → `message` 150px → `bubble` 144px → `CodeBlock` 124px → `pre` **122px**。**測った結果、②は T61 では直らない（2026-08-03 に確認）。** 390px での幅の連鎖を実測すると `wim-chat-ui`（`container-type: inline-size` を持つ根）は **390px のまま 1px も縮んでいない**。削っているのは `.message` の `max-width: 80%` とアバター（`390 → 388 → 257 → 209px`）で、**containment は無関係**だった。②は T60 が当初書いたとおり「狭幅ではアバターを畳む・バブルの余白を詰める」という `ChatUI` 固有の設計判断で、T61 の下限とは別件。**T61 の作業対象としては残す**（同じ `container-type` の母集団に属するため下限の要否は判断する）が、**②の解決を T61 に期待しないこと**。<br>**この見立ては私が実測せずに書いたもので、そのまま T60 を閉じる根拠にしていた。** 「記録や既存コメントを実測せずに引き写すと間違える」の再演 | ①`check:shrinkable` を「`container-type: inline-size` を持つ規則に `min-width` が無い」でも鳴るよう拡張する（T59 と同じラチェット + `shrinkable-ok`）②20 件を 610px の flex row で実測し、下限を与えるか逃がす／ **受け入れ条件**: 拡張したガードが**現状の 20 件で鳴る**こと（既知ケースで自己検証してから凍結する）。**T60-② 由来**: 390px で `CodeBlock` の 1 行が 20 文字読めること。**鳴ってはいけない経路**＝下限を持つ 6 件で鳴らないこと、243px のカラムに置いた寸法が変わらないこと、および**下限が親を押し広げていないこと**（T59 では `ColorPicker` の 10 ストーリーがこれで落ちた。全ストーリー走査を必ず通す）。**`min-content` を下限に使わないこと**（containment 下では 0 に潰れる＝上の実験の 5 行目） |<br><br>**着手（2026-08-03）。ガードを先に書き、束①（害の大きい 6 件）を修正した。**<br>**ガード**: `check:shrinkable` に第 2 の形を追加し、ラチェット 20 で凍結。5 経路で実証（クリーン通過 / 20 件目を足すと file:line つきで exit 1 / その横に `min-width: 0` を置いても鳴る / 本物の下限で黙る / `shrinkable-ok` で黙る）。<br>**起票時の「19 件」は誤りだった。** 試作スキャンが「値が 0 でない `min-width`」を否定先読みで書いており、`s*` のバックトラックで**先読みが値ではなく空白の位置で評価**されていたため `min-width: 0` が下限として通っていた。値を取り出す形に直したら **`TreeView` が 20 件目**として現れた（26 件中 20 件に下限なし、6 件にあり）。**故意に鳴るべき変異を試したから見つかった** — 試さなければ 1 件少ないラチェットを凍結していた。<br><br>**containment を「外す」案は実測で否定した。** `@container` を使う 9 ファイルはすべて自分で `container-type` を宣言しているので、静的には「13 件は誰も参照していない」。だが `Tabs` / `Dashboard` / `BentoGrid` で実際に外すと、**`Dashboard` のカラム経路の高さが 717 → 538px に変わった**（戻すと 717px に復帰）。`container-name` を使っていないため、**中に置かれた子コンポーネントの `@container` がそこを最も近い祖先として参照していた**。**静的には正しく、効果としては誤り**だった見立て。以後は containment を外さず下限を与える。<br>**外すだけでは足りないことも実測した** — `Grid` から外すと保護（`min-width: auto`）は戻るが **24px → 32px** にしかならない（レイアウト部品の min-content はもともと小さい）。<br><br>**束①の実測（610px の row・残り 24px。修正前 → 修正後）**:<br><br>&nbsp;&nbsp;`ThoughtProcess` 幅 24px・高さ 375→**3923px** → 180px / 494px<br>&nbsp;&nbsp;`DescriptionList` 幅 24px・高さ 377→**3199px** → 180px / 422px<br>&nbsp;&nbsp;`Tabs` 幅 24px・高さ 142→**1329px** → 180px / 165px<br>&nbsp;&nbsp;`Dashboard` **幅 0px**・高さ 717→1987px → 180px / 1231px<br>&nbsp;&nbsp;`Banner` 幅 24px・高さ 81→947px → 180px / 102px<br>&nbsp;&nbsp;`BentoGrid` 幅 24px → 180px<br><br>**鳴ってはいけない経路**＝243px のカラムは 6 件すべて修正前と同寸（142 / 377 / 1176 / 717 / 81 / 375）。**6 件とも同じ規則に `max-width` が無い**ので、T59 の 5 手目（下限が明示指定を踏み潰す）は起きない。**絶対配置の子孫が無いこと**も確認済み。<br>**押し広げ側も測った**: 1019 ストーリーを走査して、下限を入れた containment が親からはみ出した箇所は **0 件**（T59 で `ColorPicker` が 60px はみ出したのと同じ穴を見る計測）。<br>**束②③も同日に完了し 0 件になった。** 束②（`TreeSelect` / `QueryBuilder` / `DateRangePicker` / `Table` / `DataGrid` / `GanttChart`）と束③（`Stepper` / `Pagination` / `Gallery` / `SimpleGrid` / `Grid` / `ThreadList` / `ChatUI`）に下限、`TreeView` は `shrinkable-ok`（**部品の根ではなく木の 1 行**で、木と一緒に縮むのが正しい。containment もその行の子孫の `@container (width <= 480px)` に必要）。<br>**全 19 コンポーネントの最終実測**: 610px の row（残り 24px）で**全件 180px 停止**、243px のカラムは**全件が修正前と 1px も違わない**（142 / 167 / 22 / 1675 / 134 / 142 / 717 / 1176 / 44 / 346 / 93 / 81 / 489 / 377 / 244 / 243 / 225 / 375 / 212）。**押し広げ側は 1023 ストーリー全件で 0 件**（読めなかったストーリーも 0）。※ 1 回目は走査中に単体テストを並行させてマシンを奪い、**957/1023 しか読めていないのに「全件」と報告した**（読めなかった 66）。今日 2 度目の同じ失敗（前回は 4→64）。**走査中は他を走らせない。「読めなかった」は「問題なし」ではない。**<br>**VRT は束①で 4 シャードとも pass**（#232）＝既存のスクリーンショットを 1 枚も動かしていない。下限は「使える幅が下限より狭いとき」だけ効く、という読みの裏付けになった
| T62 | ホバーでしか現れないコントロールが、タッチでは「見えないのに押せる」 | **済**（2026-08-03。3 件とも修正 + ツールチップ + `actionsVisible` を露出） | **ユーザーが Android 実機で発見**（T32 の 3 枚目）。AI 返答の 👍 / 👎 / リロードが**最初は表示されず、何かを押すまで出てこない**ので、そこに機能があること自体が分からない。<br>**単発ではなく 3 件**（`opacity: 0` を `:hover` で戻している形を走査した結果）:<br><br>&nbsp;&nbsp;`ai/ChatUI/chat-ui.module.scss:129` `.actions` — `pointer-events` の指定**なし**<br>&nbsp;&nbsp;`media/Gallery/gallery.module.scss:145` 選択コントロール — `pointer-events` の指定**なし**<br>&nbsp;&nbsp;`form/FloatButton/float-button.module.scss:284` 説明ラベル — `pointer-events: none` あり<br><br>**指摘より一段悪い**: `opacity: 0` は要素を無効化しないので、`ChatUI` と `Gallery` は**見えないまま当たり判定が生きている**（👎 を誤爆しうる）。`FloatButton` は `pointer-events: none` なので誤爆はしないが、**スマホでは説明が一生出ない**。<br>**3 件とも `:focus` 系の指定が無い**ので、キーボードでも**フォーカスが見えないボタンに乗る**（WCAG 2.4.7）。<br>**axe は 4 シャードすべて pass している**（PR #229 の CI でも）。**axe はホバー状態を評価しないので、この類は a11y スイートの構造的な盲点**。VRT も「消えた状態」で安定して撮れるので拾えない。<br><br>**PC 側にも半分ある（ユーザー指摘）。** 3 つのボタンには既に `aria-label`（`ai_feedback.positive_label` / `negative_label` / `regenerate_label`）が付いており、**情報はスクリーンリーダーにだけ渡っている**。目で見てマウスを使う人はアイコンだけ見せられる。**ライブラリ内に先例がある** — `CopyButton` は同じ「アイコンのみのボタン」に `Tooltip` を付けている（`CopyButton.tsx:62`）。`AIResponseFeedback` は付いていない不揃い<br><br>**逃がしは「使い忘れ」ではなく到達不能だった。** `chat-ui.module.scss` には `.actions.visible`（常時表示）が定義されているが、**`ChatUI.tsx` はこのクラスを一切付けず、prop としても露出していない**。SCSS のコメントには意図がはっきり書かれている ── 「AI messages often show actions on hover, **or always if it is the last one**」── のに、**その実装が無い**。つまりホバー限定が強制されている。<br>**T58 のガードの逆向き**（あちらは「TSX が参照するのに SCSS に無いクラス」）で、この方向は誰も見ていない。**ただし単純な走査では出せない** — `styles[size]` のような動的添字が 20 ファイルにあり、素朴に数えると 119 件（`Text` の `.tight` など生きているものだらけ）になる。`ChatUI` 自身も `styles[position]` を使うので判定不能バケツに入り、**肝心の `.visible` が隠れる**。作るなら `check:prop-classes` が既に持っている「prop 値 → クラス」の解決を使い回すこと。**数だけ出して起票しない** | ①タッチ（`@media (hover: none)`）では**常時表示**にする。ツールチップはタッチの代替にならない（ホバーが無く長押しは不安定）②ポインタ（`@media (hover: hover)`）では `Tooltip` で `aria-label` と同じ文言を見せる。**`:hover` だけでなく `:focus-visible` でも出すこと**（WCAG 1.4.13。キーボードの人がマウスの人より情報が少ない状態を作らない）③隠している間も `:focus-within` で必ず現れるようにする ／ **受け入れ条件**: `hover: none` をエミュレートした条件で 3 件とも初期表示されること、キーボードで Tab したときフォーカスが見えること、`hover: hover` でツールチップが `aria-label` と同一文言を出すこと。**鳴ってはいけない経路**＝PC のホバー時の見た目が今と変わらないこと ／ **ガード案**: 「`opacity: 0` / `visibility: hidden` を `:hover` でだけ戻していて `:focus` 系が無い」は静的検査できる（今回の走査がそのまま使える。**既知 3 件で鳴ること**を受け入れ条件に） |<br><br>**済（2026-08-03）。** 3 件とも `@media (hover: none)` で常時表示にし、`:focus-within` を併記した。`ChatUI` は死んでいた `.visible` を `ChatMessage` の `actionsVisible` prop として露出（既定はホバー、利用者が「最後の返答だけ常時」を選べる）。`AIResponseFeedback` へのツールチップ追加は**バンドル予算で外し、T64 として分離**（`Tooltip` が `@floating-ui/react` を引き込み `wimui/ai` が 25.57 → 45.02 kB＝上限 29 kB を 16 kB 超過。**a11y の本体はバイト増ゼロ**）。<br>**受け入れ条件は 7 経路すべて実測**: ①〜③ タッチ（`hover: none`）で 3 件とも opacity 1 ④〜⑥ **鳴ってはいけない経路**＝ポインタでは 3 件とも opacity 0 のまま（既定不変） ⑦ キーボードでボタンに `focus()` すると 0 → 1。`actionsVisible` はポインタでもホバー無しで 1。ツールチップも 3 件とも `aria-label` と文字列一致することを実測した（`Helpful` / `Not helpful` / `Regenerate response`）が、**コスト判断で本 PR からは外した**（T64）。<br>**ストーリーが 1 枚も無かったので追加した**（`ChatUI --with-actions`）。**ただしこれで VRT に載るわけではない** — `components-ai-chatui--` は `vrt.spec.ts` の `NONDETERMINISTIC_STORY_PREFIXES` に入っており、**ChatUI は prefix ごと VRT から除外**されている（ベースラインが 1 枚も無いことを確認）。a11y スイートは除外を持たず全ストーリーを回すので、axe には載る。**「ストーリー化すれば VRT と a11y に載る」は ChatUI では半分しか成り立たない**。`actions` を描くのは `AiAssistantIntegration` だけで、そちらは初期メッセージが `id: "1"` の 1 件のみ・`actions` は `id !== "1"` のときだけ描画される条件だったため、**アクションが写ったスクリーンショットが 1 枚も存在しなかった**。VRT にも a11y にも載っていなかったのはそのため。<br>**単体テストは「クラスの付け外し」までしか見ていない**（Vitest の CSS モジュールは全キーに答えるので `styles.visible` の存在確認にはならない ── 既知の罠）。配線を外すと落ちることは確認済み。**実際に見えるかはブラウザ実測が担保**する。
| T63 | 吹き出しの三角と本体の境目が見える（Android 実機） | **済**（2026-08-03。①③とも修正。全 DPR で 0） | **ユーザーが Android 実機で発見**（T32 の 3 枚目）。`ChatUI` のバブルで、三角（尻尾）と角丸長方形の**継ぎ目が線として見えている**。<br>**原因候補は 3 つあり、まだ切り分けていない**（実機の見え方を確認していないため）:<br>①**接しているだけで重なっていない** — `chat-ui.module.scss:143` の三角は `left: -6px` に置かれ、底辺がバブルの x=0 にちょうど接する。Android は端数の DPR（2.75 / 3.5 等）が普通なので、アンチエイリアスで髪の毛一本の筋が出る。<br>②**角丸との取り合い** — バブルは `border-radius: var(--wim-radius-container)` を持ち、三角は `top: 10px` に固定。角の曲線がまだ効いている高さなら、平らな底辺と曲線の間に楔形の隙間ができる。<br>③**本体の影が付け根を横切る** — バブルの `box-shadow: var(--wim-shadow-xs)` は角丸長方形の輪郭に沿って描かれ、三角は別ボックスなので**付け根の上に影の線が乗る**。「隙間」ではなく「線」が見えているなら、これが本命。<br><br>**同じファイルに対策が既にあるのに、片方にしか当たっていない。** 165 行目のコメント: 「typing バブルは…**底辺を 2px バブル内に食い込ませて本体との隙間を防ぐ**」。`typing` だけ `border-width` を 6px → 8px にして食い込ませてあり、**通常のバブルには当てていない**。①が原因なら、この既存の手当てをそのまま広げれば直る | ①まず実機（または端数 DPR をエミュレートしたブラウザ）で①②③のどれかを切り分ける。**推測で 3 つ同時に直さない**（どれが効いたのか分からなくなる）②①なら通常バブルにも食い込みを適用。③なら三角にも同じ影を付けるか、影を `filter: drop-shadow` に変えて**バブルと三角をまとめて 1 つの形として**落とす（`drop-shadow` は合成後の不透明領域に沿うので継ぎ目が出ない）／ **受け入れ条件**: DPR 2.75 / 3.5 で継ぎ目が出ないこと。**鳴ってはいけない経路**＝DPR 1 / 2 での見た目と `typing` バブルが変わらないこと。**VRT は DPR 1 で撮っているので拾えない**（T59 / T60 と同じく、壊れた状態で安定して撮れる） |<br><br>**一部済（2026-08-03）。3 つの候補のうち①と③が実在し、②は無関係だった。**<br>**まず計測が成立しなかった。** light テーマではバブルも周囲も白（255,255,255）なので、**隙間ができても色差が生まれず原理的に測れない**。プローブに故意の隙間を作っても 0 件で、これは狙いが外れていたのではなく測れない条件で測っていたため。`globals=theme:dark` に切り替えて初めて検証が通った（故意の隙間で DPR 2.75 に 33/44 行）。<br>**①（接しているだけで重なっていない）が実在**。素の状態の筋の画素は DPR 1 で 0/16、2 で 2/32、**2.75 で 35/44**、3 で 4/48、**3.5 で 39/56**。**整数 DPR ではほぼ出ず端数で顕著**＝アンチエイリアス由来で、Android が端数 DPR を常用することと合う。<br>**修正**: `typing` バブルに既にあった手当て（底辺を 2px 食い込ませる）を通常バブルの左右に広げた。結果は DPR 2→**0**、3→**0**、3.5→**0**、2.75 は 35→**10**。<br>**②（角丸との取り合い）は無関係**だった — 角丸を消すと筋はむしろ 19 行に増える。<br>**③（影が付け根を横切る）が残っている。** 切り分け（DPR 2.75・dark）: 素 10 行 / **影を消すと 0 行** / 角丸を消すと 19 行 / 両方消すと 0 行。<br>**③も修正した。** `--wim-drop-shadow-xs` を新設し（`shadow-xs` と同じ影を `drop-shadow` 2 段で表現）、**尻尾を持つバブルにだけ** `box-shadow: none` + `filter` を当てた。`filter` は絶対配置の包含ブロックとスタッキングコンテキストを作るので、必要な範囲に留めている。トークン面は 299 → **300**（スナップショット更新済み）。<br>**最終実測**: 全 DPR（1 / 2 / 2.75 / 3 / 3.5）で **筋 0 件**。<br>**プローブの検証は「修正前の状態を CSS で復元する」形で通した** — 三角を細くする案は、drop-shadow を当てたあとだと測定列から外れて 0 になり検証にならなかった。復元した状態では **35/44 行**鳴り、現在は 0/44。<br>**`filter` の副作用も測った**: バブルの子孫の矩形は修正前と**完全一致**（位置は動いていない）
| T64 | アイコンのみのボタンが、名前を支援技術にしか渡していない | **済**（2026-08-04。ツールチップを出荷し、予算を 29→50 kB へ） | T62 の作業中にユーザーが指摘。`AIResponseFeedback` の 👍 / 👎 / リロードには `aria-label`（`ai_feedback.positive_label` / `negative_label` / `regenerate_label`）が付いており、**情報は存在しているのにスクリーンリーダーにだけ渡っている**。目で見てマウスを使う人はアイコンだけ見せられる。**ライブラリ内に先例がある** — `CopyButton` は同じ形のボタンに `Tooltip` を付けている（`CopyButton.tsx:62`）。<br>**T62 で一度実装したが、バンドル予算で外した。** `Tooltip` は `@floating-ui/react` を引き込むため、`wimui/ai` が **25.57 kB → 45.02 kB（gzip・+19.45 kB／+76%）** になり、上限 29 kB を 16 kB 超過して CI が落ちた。**a11y の本体（`hover: none` と `:focus-within`）はバイト増ゼロ**なので、そちらだけ出荷して本件を分離した。<br>**実装自体は検証済み** — 3 件ともツールチップの文言が `aria-label` と文字列一致することを実測（`Helpful` / `Not helpful` / `Regenerate response`）。差し戻したのはコストの判断であって、動かなかったからではない | ①**予算を上げる**（`wimui/ai` を 29 → 48 kB 程度に。全消費者が floating-ui を負担する）②**`title` 属性で済ませる**（0 バイト。ただし遅延・スタイル不可・タッチで出ない）③**遅延読み込み**にする（`React.lazy` で `Tooltip` を分離。初回ホバーまで読まない）④**採らない**と明文化する（`aria-label` だけで十分とみなす）／ **判断材料**: `wimui/ai` を import する消費者は `ChatUI` などを使う AI 画面で、`Tooltip` を別途使う可能性も高い（その場合は実質重複しない）。**この「まず測る」は 2026-08-03 に実施済み。** `@floating-ui` を参照するのは `_internal` と overlay の 4 件（`ContextMenu` / `Dropdown` / `Popover` / `Tooltip`）だけで、**`src/components/ai/` は 1 つも使っていない**。よって `wimui/ai` を単独で見た増分は 19.45 kB 丸ごとで正しい。<br>**ただし実アプリでの増分は別**。`size-limit` は各エントリを**単独で**測る設定（`path: dist/ai.js`）なので、`Dropdown` や `Popover` を 1 つでも使う画面では floating-ui は既に入っており、**ツールチップの限界費用はほぼゼロ**になる。AI アシスタント画面でメニュー類を一切使わないことは考えにくいので、**29 kB の予算は「最悪ケースの単独 import」を守っている**という理解で判断すること。予算を上げるか否かは、この単独/実使用の差をどう扱うかの方針決定になる |<br><br>**済（2026-08-04）。選択肢①（予算を上げる）をユーザーが選択。**<br>**判断の中身**: `size-limit` は `dist/ai.js` を**単独で**測る設定（`import: "*"`、react のみ外部化）なので、答えているのは「`wimui/ai` だけを他に何も使わず import したら何バイトか」。`@floating-ui` を引くのは overlay の 4 件だけで `ai` 配下は皆無なので、**単独では 19.45 kB が丸ごと増分**。一方、AI 画面を作る人はほぼ確実にどこかで `Dropdown` かメニューを使うので、**その場合の限界費用はほぼゼロ**。つまり同じ 19.45 kB が「`wimui/ai` しか使わない人には本物の増分」「overlay も使う人には 0」になる。<br>**予算が守るものを「実使用の増分」側に倒した。** 引き上げは 29 → **50 kB**（実測 45.02 kB に対し、既存の予算と同じ約 10% の余裕。Button 11.78→13 / 小画面 17.48→19 と同比率）。予算名にも `floating-ui 込み` と明記して、次に見た人が理由を辿れるようにした。<br>**検証**: 3 件ともツールチップの文言が `aria-label` と**文字列一致**（`Helpful` / `Not helpful` / `Regenerate response`）。**キーボードのフォーカスでも出る**（WCAG 1.4.13 ── ホバー限定だとマウス利用者だけが情報を得る）。`check:imports` OK（`ai` から overlay を参照するのは peer 依存を増やさない）
| T65 | メニュー語彙ページ（`docs/MenuVocabulary.mdx`） | **済** | 起票 2026-08-04（**T46 の残件が番号を持たないまま本文の散文にだけ存在していたのを、ユーザーの指摘で発見**。下の「T46 の初回投入とメニュー語彙ページ」節を参照）。アイコン 2 つ［#180］とエイリアス 59 語［#188］は出荷ずみで、**残っているのは表のページ 1 枚だけ**。`<Meta title="Components/Navigation Elements/Menu vocabulary" />` として既存 Overview の隣に置く。列は **正式名（主）→ 俗称（副）→ 見た目 → WIM で使うもの → 避ける場面**（正式名を主にするのは、俗称は言い伝えで揺れる一方 ARIA/HIG と対応が取れるのは正式名の側だから）。掲載 7 群: Overflow menu ／ Navigation drawer trigger ／ App switcher ／ Filter・Sort control ／ Context menu ／ Speed dial ／「俗称のみ」欄。**コスト**: `<T k="…" />` 必須（`check-mdx-hardcoded` はハードゲート）で**新規キー 40 前後 × en/ja/pt、ja/pt は手翻訳**（この環境は API キー未設定） | `audit-mdx` の必須セクションを満たすこと・`i18n:check` が 3 言語で緑・`check-mdx-hardcoded` が緑。**鳴ってはいけない経路**＝既存 Overview の見出し構造を壊さないこと |<br><br>**済（2026-08-04）** — `docs/MenuVocabulary.mdx`＋**新規キー 66 × en/ja/pt（198 個）**。<br>**同日の追補（ユーザーとの往復で 5 回直した）**: 見た目の列を文字（`⋮` `☰` `3×3`）から**実物に差し替え**、「俗称のみ」の節を `<ul>` から `<table>`（俗称／見た目／WIM で使うもの）に変えた。<br>**上の表は出荷アイコンだけを描く**（`MoreVerticalIcon` / `MoreHorizontalIcon` / `MenuIcon` / `GridIcon` / `FilterIcon`）。**Overflow menu の行は 2 つ出す** ── 俗称に Kebab（縦 ⋮）と Meatball（横 ⋯）を両方挙げている以上、片方だけだと「meatball menu」で来た人が縦の点を見ることになる（ユーザー指摘）。**Context menu と Speed dial は絵を入れて、あとで外した**（ユーザー判断）── 名前のある 4 つに混ざった名前のない 2 つは「出荷グリフ」と読まれるし、**Context menu の行はセル本文が「自前のトリガーを持ちません」と書いている隣にトリガーのボタンを描いて自己矛盾していた**。この 2 行は文章だけにした。俗称 6 つの絵は `stories/MenuShapes.tsx` に残る（あちらは「実体がないもの」と宣言した節なので正当）。<br>**`src/icon/` には 1 つも足していない**。足せば `api-snapshot.json` と出荷バンドルに永久に載るうえ、T46 が「形の俗称であって『その形でしか表せない機能』が無い」として明示的に却下した対象そのもの。<br>**裸のグリフではなく `Button` の icon-only ghost**（ユーザー判断）。実物のトリガーはアイコンボタンなので、そのほうが正しい。**トークンで手組みしなかった**のは `check:slop` 規則 5 が止めようとしている型だから。**代償はフォーカス可能になること**で、模倣する代わりに実装を使う以上避けられない。`aria-label` に行の名前を入れて無名ボタンにはしていない。**寸法と色は Icon ページのギャラリーに合わせた**（あちらは 40px セルに 20px、こちらは 42px ボタンに `xl` = 20.3px）。色は `text-primary` で、**リテラルの黒にはしていない** ── テーマで反転しない黒は T71 が dark で白の上に白を描いた原因そのもの。<br>**a11y の CI はこれを見ない** — `vrt/a11y.spec.ts` は `type === "story"` だけを走査するので docs の MDX は axe にかからない（「鳴らないから問題なし」ではない、の実例として残す）。<br>**形を 2 つ間違えていた（ユーザーの定義表で判明）**: パンケーキを均等な 3 本線で描いていたが**それはハンバーガー**で、パンケーキは**長さが不揃い**。チーズバーガーは各線に点を添えていたが、正しくは**中央の線だけ**が変化する（上下は直線）。あわせてケバブ＝縦（⋮）／ミートボール＝横（⋯）を名前で区別し、ドネルは「俗称は 3 本線の逆三角形／WIM が出荷しているのは同じ意味の漏斗」と両方書いた。**外部の語彙は自分の記憶で描かず、出典に当てること。**<br>**アイコン一覧に 8 件の掲載漏れがあった**（ユーザー指摘。指摘は 2 件だったが数えたら 8 件）: export 74 に対し `Icon.mdx` の掲載は 66。`MenuIcon` / `GridIcon`（#180 で追加されたまま未掲載）/ `ColumnsIcon` / `AlignJustifyIcon` / `GripVerticalIcon` / `SendIcon` / `PaperclipIcon` / `CreditCardIcon`。74/74 にした。<br>**`Icon.mdx` を触った瞬間に既存の誤りが 1 件落ちた**: `<td>small / medium / large</td>` は生英語であると同時に**内容も間違い**（`Icon` の size は `ComponentSize` ＝ `xs`〜`5xl`）。実値に直してラチェット 53 → 52。**全量モードでは 53 ファイルのラチェットに埋もれて鳴らず、引数モード（lint-staged）でだけ鳴った** ── 同じファイルを触るまで見えない型。<br>**`GridIcon` を塗りに見えるよう直した**（ユーザー判断。**唯一ライブラリ本体に触った変更**）。原因は fill の規約ではなく幾何で、`more-vertical` は `r="1"` に 2px ストロークなので**円が中心まで覆われて塗りに見える**のに対し、`grid` は `4×4` の rect で**中心に 2×2 の穴**が残っていた。点と同じ手＝`2×2` にしてストロークで埋めた（中心は 5/12/19 のまま、塊は 4px でケバブの点と同じ重み、`fill="none"` も維持）。**VRT のベースラインは 1 枚も動かない**（`GridIcon` を描くのは docs の `Icon.mdx` だけで、VRT は `type === "story"` のみ）。`check:api` も緑（スナップショットは名前と props でパスデータを見ない）。ただし**公開アイコンなので次のリリースで利用者の見た目は変わる**。<br>**同じ形が 2 つある件を 2 件見つけ、2 件とも「触らない」で閉じた（ユーザー判断。番号は振っていない）**:<br>&nbsp;&nbsp;① **`align-justify.svg` は `menu.svg` とバイト単位で同一**（3 本とも `3,y → 21,y`）。**消すなら `menu` のほうだが、どちらも消さない。** 実測: `AlignJustifyIcon` は**ライブラリ本体で使用中**（`CodeDiffViewer.tsx:235` の unified view トグル。split view の `ColumnsIcon` と対）＋ `Toolbar` / `Page` の 2 ストーリー。対して **`MenuIcon` はリポジトリ内で未使用** ── `HamburgerMenu` は `MenuIcon` を使わず **CSS の span で 3 本のバーを描いている**（× への変形アニメーションのため）。それでも消さないのは、**2 つの名前が違う問いに答えている**から（`menu`＝ハンバーガー / `align-justify`＝1 カラム表示）。片方に寄せると消費者は**意図と食い違う名前で import する**ことになるし、export の削除は `api-snapshot.json` から消える＝**破壊的変更**。重複のコストは SVG 4 行だけで引き合わない。**`MenuIcon` を消すとデザインシステムがハンバーガーを 1 つも export しない状態になる**のも決め手。なお `align-justify` に **align-left/center/right の兄弟は無い**（`src/icon/` に `align*` は 1 件のみ）ので、テキスト整列のファミリーではなく実質レイアウト用。<br>&nbsp;&nbsp;② **ホットドッグの横線は `minus.svg` とほぼ同一**（`5→19` と `3→21`）。**`MinusIcon` は置かず、描いたまま**にした。あの列のチップは「この形に対して WIM が出荷しているアイコン」を意味し、ホットドッグの答えは隣の列の `HamburgerMenu` なので、`MinusIcon` を並べると**マイナスをドロワーのトリガーに使えと読める**。「実体がないもの」と宣言した節に実在アイコンが 1 つ混ざる矛盾も出る。**代わりにその一致をセル本文に明記した**（読者も同じ疑問を持つため）。受け入れ条件は 4 つとも実測: `audit-mdx` 緑（guide MDX は title + 表/リストの記法だけが必須）／ `i18n:check` が 3 言語で緑／ `check-mdx-hardcoded` は**変更ファイル引数モードでも全量モードでも緑**（ラチェット 53 のまま。新規ファイルはこの 53 に入っていない）／ **Overview の見出し構造は無傷**（`Selection Guide` / `Standardization Summary` のまま。追加したのは `nav.guide` の直後の `<p>` 1 つ）。<br>**起票時の「7 群」から構成を変えた点が 1 つ**: 俗称を `components.json` の `aliases` から自動生成する案を検討して**やめた**。7 群のうち **4 群は、載せたい俗称が SSOT に無い**（Döner / Taco はどの体系も使っておらず、Context menu と Speed dial は別名ゼロ、そして**いちばん有名な Hamburger menu はコンポーネント名そのものなので `aliases` に入らない**）。T46 が「別名は実在の体系が使う語に限る」と決めた結果として、**言い伝えの側はこのページにしか置けない**。その分担をページ末尾の「機械可読版の置き場所」節に明記した。<br>**実描画で 1 件直した**: 5 列の auto レイアウトが 1 列目を飢えさせ、`body` の `overflow-wrap: anywhere` と噛み合って **`Overfl / ow menu`・`Naviga / tion drawe / r trigger` と語中で改行していた**。`<th>` に幅（15/17/19/21/28%）を入れて解消。**残っているハイフネーションは house style**（`body[lang="en"|"pt"] { hyphens: auto }`、`ja` は `manual`）。**ビルドした Storybook を en / ja / pt・light / dark で確認**（生キーの露出なし、Overview からのリンクは実クリックで遷移を確認、サイドバーは Overview の直下に並ぶ）。**ただし視覚の可否は自己申告しない**（CLAUDE.md 約束 2）ので、スクリーンショットは PR に添えて人間のレビューへ出す。<br>**`check:i18n:quality` の allowlist に 2 件足した**（`menuvocab.switcher_nick` / `menuvocab.filter_nick`）。俗称欄は「外で実際に使われている呼び名」の一覧なので、pt にこの 2 群の現地語形が無く en と同一になる。翻訳すると探し物が見つからなくなる側の同一なので、警告ではなくレビュー済みとして登録した |
| T66 | `ChatUI` の狭幅でコード例が読めない（旧 T60-②） | **P2** | 起票 2026-08-04（**実体は 2026-08-03 の T60-②**。T60 は「②は T61 へ移管」として閉じ、T61 は「0 件」で閉じたので、**どちらの行も「済」になり、実際には未解決なのに未完了カウントから消えていた**。番号を振り直して見えるようにする）。実測（390px）: `messageList` 204px → `message` 150px → `bubble` 144px → `CodeBlock` 124px → `pre` **122px**。削っているのは `.message` の `max-width: 80%` とアバターで、**T61 の下限では直らないことを実測ずみ**。狭幅ではアバターを畳む・バブルの左右余白を詰める等の**設計判断**が要る | 390px で `pre` の内容が横スクロールなしに読めること。**鳴ってはいけない経路**＝広い画面でバブルの見た目が変わらないこと（VRT のベースラインが動くので update が要る）。T32 の 4 枚目（モバイル前提のレイアウト）で正面から当たるので、そこで判断するのが妥当 |
| T67 | `reset.css` の素の `<code>` に等幅フォントが当たっていない | **済** | 起票 2026-08-04（観測は 2026-07-30。「残る判断（未着手）」として番号なしで本文に置かれていた）。`base.scss`（= 任意の `reset.css`）は素の `code` に padding と背景を当てているのに `font-family` を当てていないので、**Table のセル等に置かれた素の `<code>` は今も UA の汎用等幅**。1 行で閉じるが、`reset.css` を入れている**利用者全員の `<code>` の見た目が変わる**＝破壊的変更の判断になるので保留していた | `reset.css` だけを読み込んだ最小ページで素の `<code>` の computed `font-family` が mono トークンになること。先に VRT のベースラインが何枚動くかを数え、changeset の破壊レベルを決めてから出す <br><br>**済（2026-08-05）** — `@layer base` に `code, kbd, samp, pre { @include font.mono-family; font-size: 1em; }`。<br>**起票文の原因記述は誤りだった。** 「素の `code` に padding と背景を当てているのに `font-family` を当てていない」と書かれていたが、実際には **`reset.css` は素の `code` に padding も背景も当てていない**。padding/背景を持つのは `.wim-docs-container code` のほうで、そちらは **T48（#190、2026-08-01）でトークンが入っている**。起票は 08-04、観測は 07-30 なので、**観測とその修正の間に起票文だけが取り残されていた**（:5「記録の引き写しで間違えた」の再演）。<br>**症状のほうは実在し、しかも起票文より重かった。** 実測（`reset.css` + トークンだけの最小ページ）: 本文 16px に対し素の `<code>` は **`monospace` / 13px ＝ 81%**。表のセルでも `<pre>` の中でも同じ。**書体だけでなくサイズも落ちていた** ── `monospace` が「汎用等幅」キーワードなのでブラウザが本文とは別の既定サイズを使うため。`font-size: 1em` はこれを打ち消すためのもの（normalize.css が同じ理由で置いているのと同じ）。<br>**受け入れ条件を実測で満たした**: 最小ページで prose / 表のセル / `<pre>` の中の 3 経路とも **mono トークン・16px**。`.wim-docs-container` の padding・背景は変わらず。<br>**鳴ってはいけない経路も確認**: `CodeBlock` は自前の書体・サイズ（14.224px）のまま。レイヤー順が `reset, base, component, utilities` なので `@layer base` は component 層に構造的に負ける。<br>**効果の実測**: コンポーネント docs 1 枚（Icon）で `<code>` 53 個のうち**汎用等幅 39 個 → 0 個**。同じページに 2 書体が並ぶ状態が消えた。<br>**VRT のベースラインは 14 枚動いた（7 ストーリー × light/dark）。私の事前見積もり「上限 4 枚」は外れ、CI が訂正した。** 当てたのは `token-presets--overview` と `patterns-playground--default` の 2 つだけで、**5 つ落とした**（`markdownrenderer--default` / `richtexteditor--controlled` / `jsonviewer--editable` / `querybuilder--predefined` / `markdown--default`）。<br>**外した理由が本題**: `code, kbd, samp, pre` の **4 要素にルールを当てたのに、`.tsx` から `<code` のリテラルだけを grep して露出を数えた**。`<pre` は数えてすらいない（数えても 2 件・両方クラス付きなので当たらなかったが）。**真因は、これらのコンポーネントが実行時にマークアップを生やすこと** ── 実測（`markdown--default` の DOM）: `<code>`/`<pre>` が 3 個あり、うち **2 個はクラスが無い**。`Markdown` は本文から react-markdown が要素を出力するのでクラスが付かず、**ソースの grep では原理的に見えない**。`RichTextEditor`（contenteditable）・`JsonViewer`・`QueryBuilder` も同型。<br>**教訓**: :5 ①「測ったつもりで測れていない」の同型で、**静的な grep は「データから生える DOM」を数えられない**。露出を数えるなら**描画した DOM を数えること**（`document.querySelectorAll` で 1 ストーリー測れば 5 件とも即座に出た）。あわせて、**ルールを N 要素に当てたら N 要素ぶん数える** ── 1 要素ぶんしか数えていなかった。**changeset は付けていない**（CLAUDE.md「npm 公開に関わる操作はエージェントが進めない」）。<br>**ガードの偽陽性を 1 件直した（副産物）**: `check:mono-family` は `//` しか剥がしておらず、**`/* … */` の中に `font-family: monospace` と書くと落ちた**。UA の挙動を説明しようとすると必ずその文字列を書くので、**「なぜ mixin が要るのか」を書き残した人だけが罰される**状態だった。ファイル単位で状態を持つブロックコメント除去に変更。**3 経路で鳴ることを故意の違反で実証**（①等幅スタックの直書き ②トークンの直書き ③**ブロックコメントと同じ行に続く実コード** ── ③はコメント除去が実コードまで飲み込んでいないことの確認）。 |
| T68 | a11y スイートが同一コミットで違う赤を出す | **P3** | 起票 2026-08-04（観測は 2026-07-28。「未解決の観測」として番号なしで本文に置かれていた）。#143 の CI（**同じ commit `b9e7d0ce`・同じシャード構成**）を 2 回流したところ、**赤になったストーリーが毎回違った**。#143 の差分はどちらにも触れていない（`IMPROVEMENTS.md` / `docs_stories_recipes.json` ×3 / 新ストーリーのみ）。`--max-failures` は無く `retries: 2` なので、**どちらも 3 回連続で落ちて初めて報告されている**（run 内では粘着的、run をまたぐと入れ替わる）。**この非決定性が残る限り「a11y が緑」は証拠として弱い** — CLAUDE.md の委任ポリシーは a11y の赤を「原則、新規違反」として扱う前提なので、判断の土台に関わる | 同一コミットで N 回流し、赤の集合が一致するかを測る（一致しなければ非決定）。VRT のフォント非決定（#171）と同型の可能性があるので、まず「何が run をまたいで変わるのか」を切り分ける<br>**着手点は特定済みだが、この行から辿れていなかった（2026-08-05 に走査で発見して追記）**: 下の a11y の節に `Lightbox` の機構が書いてある ── `Lightbox.Trigger` のアクセシブル名は**入れ子の `alt` だけ**が供給源で、`Image` は IntersectionObserver が発火するまで `<img>` を描画しない（`Image.tsx:400`、`isIntersecting` の初期値 false ＝ `useMediaLoader.ts:24`）。さらに `waitForStoryReady` は `document.images` を**その場でスナップショットする**（`story-ready.ts:36`）ので、**img が 1 枚も無いと何も待たずに素通りする**。**名前が画像の読み込みタイミングに依存する＝ run ごとに結果が変わる機構そのもの**なので、切り分けの最初の実験対象になる。2026-08-05 時点で `LightboxTrigger` に `aria-label` は無い（`children` をそのまま `<button>` に渡している。zoom / close / previous にはある）。**しかも `Lightbox` は「1 回目の run で赤になった当のストーリー」**（上の表）なので、これは走査で見つけた候補ではなく、観測と機構が一致している。**ただし 2 回目の赤 `ScheduleView` は別機構**（FullCalendar 自身が出す `role="img"` のマークアップに名前が無い＝第三者側）なので、`Lightbox` を潰しても T68 が閉じるとは限らない。**1 件潰して赤の集合が安定するかを測ること。** |
| T69 | VRT の update PR に平均色シフトの順位表を添える | **済** | 起票 2026-08-04（2026-07-30 の 226 枚の仕分けの末尾に「候補」として番号なしで置かれていた）。あの仕分けでは**位置による分類も履歴による帰属も決め手にならず、効いたのは差分領域の平均色の移動量**だった（フォントのにじみは同じ前景色と背景色の間で画素が入れ替わるだけなので平均色がほぼ動かない）。**仕分けスクリプト 3 本はリポジトリに入れていない**ので、同じ点検をするたびに書き直しになる。ベースライン更新のたびに順位表が出れば、「撮り直した N 枚」の中身を人が見ずに確定する事故を減らせる | 既知の 226 枚で、上位＝実変更・下位＝フォント描画差という並びが再現すること（**境界は平均色シフト 41〜69** ── 順位 61 はまだ実変更、121 は既にフォント差）。**鳴ってはいけない経路**＝update の所要時間を大きく延ばさないこと <br><br>**済（2026-08-05）** — `scripts/vrt-color-shift-report.js`（`npm run vrt:report`）。`vrt.yml` の `commit-snapshots` で、**新しい PNG が作業ツリーに、古い PNG が HEAD にあり、まだコミットしていない**唯一の測定機会に走らせ、`$GITHUB_STEP_SUMMARY` へ順位表を出す。<br>**受け入れ条件は既知の 226 枚で再現した**: **順位 61 = `repaint` シフト 46.3**（起票文「61 はまだ実変更」）／ **順位 121 = `noise` シフト 23.7**（同「121 は既にフォント差」）。閾値 41 は順位 67 に落ち、起票時の帯「41〜69」の中。**参照コミット `57a6c90bf` は #176 の squash で到達不能になると警告されていたがローカルに残っていた**ので、失う前に 226 枚の前後（452 ファイル）を退避し、タグ `vrt-baseline-2026-07-30-t69ref` を打った。<br>**指標を 1 本にしなかった。平均色シフトだけでは書体の変更を取りこぼす（T67 で判明）** ── 書体が変わっても画素は同じ前景色と背景色の間で入れ替わるので**平均色が動かない**。実例: T67 の update で `token-presets--overview` は**シフト 0 なのに差分画素が約 7 万**あり、これは紛れもない実変更だった。そこで**面積を第 2 軸**に置き、`shift < 41 かつ area >= 1%` を `glyph` として上げる。**226 枚でも効いた**: `Alert` / `Banner` の面 15 枚（面積 5〜9%・シフト 3〜10）が該当し、**平均色シフトだけなら順位 177〜220 に埋もれていた**。分類は `reflow`（寸法変化）/ `repaint`（シフト 41 以上）/ `glyph`（色は動かず広い）/ `noise`。<br>**依存は `sharp`**（宣言済み devDependency、`@img/sharp-linux-x64` の prebuilt がロックファイルにあるので `npm ci --ignore-scripts` の CI でも動く）。**`pngjs` は採らなかった** ── transitive にしか無く、依存の更新で黙って消えうる。<br>**所要時間（見積もりを実測で訂正）**: `setup-node` + `npm ci` の追加で「1〜2 分は増える」と見積もったが、**`cache: "npm"` が効くのでほぼ増えない**。実測: `commit-snapshots` は **28 秒**（101 枚をコミットした検証ラン）で、報告ステップが無かった T67 の同ジョブが **29 秒**（111 枚をコミット）。**ほぼ同数の画像を扱って同じ所要時間**なので、追加分は測定できるほど増えていない。順位表そのもののコストは画像数に比例し、ローカル実測で **226 枚 19 秒**。<br>**CI で実証済み**: `feat/t69-vrt-color-shift-report` で update を dispatch し、`commit-snapshots` の手順 4〜6（Setup Node / npm ci / Report what changed）がすべて success、続く手順 7 の commit-back も success。<br>**「鳴ってはいけない経路」も実証した**: その検証ランがコミットバックした **101 枚を分類したら全件 `noise`**（面積 0.00%・シフト 24 以下）。このブランチはスクリプトとワークフローと文書しか変えておらず描画を一切変えないので、**これが正解**。ノイズだけの update で実変更と言わないことが確認できた。**なお 101 枚は revert した** ── ツーリングの PR に無関係なベースラインを載せるべきでなく、まして「撮り直した N 枚を人が見ずに確定する事故」を減らすための PR なので。順位表が出せなくても撮り直し自体は成立するので `continue-on-error` にしてある（ここで落として commit-back を止めるのは本末転倒）。 |
| T70 | メッセージのアクション（👍 👎）がポインタ環境で発見できない | **済**（2026-08-04。既定を `actionsVisible = true` へ反転） | 起票 2026-08-04（**ユーザー指摘**）。T62 は**タッチだけ**を直し（`@media (hover: none)` で常時表示）、**ポインタ側は既定を変えないことを受け入れ条件に明記していた**（「鳴ってはいけない経路＝PC のホバー時の見た目が今と変わらないこと」）。今回の指摘は、その**据え置いた側**そのもの ── マウスでも**ホバーするまで機能の存在が分からない**。**T64 のツールチップも発見可能性を上げていない**（ホバーして初めて出るので、既に見つけた人にしか効かない）。現状: `ChatUI.tsx:93` の既定は `actionsVisible = false`、`chat-ui.module.scss:132` の `.actions` は `opacity: 0` で `.message:hover` / `:focus-within` でのみ 1。**カタログの見本自体がホバー限定** ── `ChatUI.stories.tsx:429`（`AiAssistantIntegration`）も `:121`（`WithActions` の 1 通目）も `actionsVisible` を渡していない | ①既定を常時表示へ倒す ②最後の AI 返答だけ常時（SCSS のコメントが元々意図していた形） ③淡く常時見せてホバー/フォーカスで濃くする、のいずれか。**受け入れ条件**: ポインタ環境の**初期表示**のスクリーンショットに 👍 👎 が写ること。**鳴ってはいけない経路**＝タッチの挙動（T62）が変わらないこと・`:focus-within` が効くこと・`actionsVisible` を明示した既存の呼び出しが壊れないこと。VRT のベースラインが動くので update が要る |<br><br>**済（2026-08-04）。①を採り、`actionsVisible` の既定を `false` → `true` へ反転した**（`ChatUI.tsx:93`）。SCSS は `.actions` の既定を `opacity: 1` にし、ホバー限定の側を `.hoverOnly`（`actionsVisible={false}` で付く）へ移した。**プロパティは増やしていない** — 意味を保ったまま既定だけを反転したので、`actionsVisible={false}` が従来の既定になる。<br>**ブラウザで実測した（4 経路）**: ①既定のメッセージは**ホバーなしで opacity 1** ②`actionsVisible={false}` のメッセージは 0 ③そこにマウスを乗せると出る ④**「Regenerate response」ボタンに `focus()` すると出る**（`:focus-within`・WCAG 2.4.7）。①②はレンダリング（ズーム撮影）でも確認 ── 既定の行にアイコン 3 つが写り、opt-out の行は消えている。<br>**測り方でつまずいた点を残す**: **タブが `visibilityState: "hidden"` のとき `getComputedStyle` は古い値を返す**。`:hover` / `:focus-within` は `el.matches()` が `true`、勝つべきルールも DevTools 上は一致しているのに opacity が `0` のままで、**セレクタのバグに見えた**。実際にはスタイルの再計算が走っていないだけで、スクリーンショットを撮ると（＝合成が走ると）正しく出る。**「computed style が 0」は「効いていない」ではない**。<br>**タッチ（`@media (hover: none)`）だけは実測していない**（このツールではメディア特性をエミュレートできない）。ただし**既定が常時表示になったので、タッチで隠れる経路は構造上消えている** — 隠れうるのは `actionsVisible={false}` を明示した場合だけで、そこには T62 と同じ `@media (hover: none)` が生成 CSS に載っていることを確認済み。<br>**「VRT のベースラインは動かない」と書いたが、これは誤りで #239 の compare が 2 シャードで落ちた。** 除外（`components-ai-chatui--`・`vrt.spec.ts:104`）が効くのは**ストーリー ID の prefix だけ**で、**`ChatUI` を使う他所のストーリーは対象**。実際に落ちたのは `patterns-playground--default` の light / dark で、`sandbox/recipes/DeployAssistant.tsx:172` が `actions={<AIResponseFeedback showRegenerate />}` を渡している。**これは T63 の「除外は prefix にしか効かない」をそのまま繰り返した** ── 前日に同じ間違いを記録しておきながら、翌日に同じ推論をした。<br>**落ちた差分は意図どおりだったことを画像で確認した**（artifact の expected / actual を切り出して比較）。変化は AI 返答の下に 👍 👎 ｜ ⟳ が現れた 1 箇所だけで、**高さは 3476px のまま変わらない**（もともと行の高さは確保されていて `opacity` だけが変わるので、レイアウトは動かない）。差分クラスタも 1 つ（`y 1948-1967 / x 117-214`）。**ベースラインを更新して解決する種類の赤**なので、update を dispatch した |
| T71 | Docs の `IconGallery` が dark で「白い四角」になり、ラベルも読めない | **済**（2026-08-04。dark で 1.00:1 → 11.55:1） | 起票 2026-08-04（**ユーザー指摘**）。`stories/media/Icon/Icon.mdx` は Storybook 標準の `IconGallery` / `IconItem` を 12 箇所で使っている。この 2 つは **Storybook 自身のテーマ**でスタイルされていて（`@storybook/addon-docs/dist/blocks.js`: `ItemSpecimen` = `getBlockBackgroundStyle(theme)` ＝ `theme.background.content`、`ItemLabel` = `theme.color.defaultText`）、**WIM の `data-theme="dark"` を一切見ない**。一方アイコンは `currentColor` で `.sbdocs-content` に当てた `--wim-color-text-primary`（dark では白）を継ぐので、**白い面に白いアイコン**＝四角しか見えない。ラベルは逆に暗い文字が暗い面に載る。`.storybook/docs-dark-mode.scss` は `.sbdocs-preview` / table / code / コピーボタンを上書きしているが、**`.docblock-icongallery` には 1 行も無い**。**これは T36（ホスト差分）の実例**でもある ── Storybook のブロックが持ち込むテーマと WIM のテーマが二重になっている | dark で `.docblock-icongallery` の面・枠・ラベルを WIM のトークンへ寄せる。**受け入れ条件は実測**（目視の自己申告にしない）: dark で ①アイコンと面 ②ラベルと面 の**コントラストが 4.5:1 以上**。**鳴ってはいけない経路**＝light の見た目が今と変わらないこと。`IconGallery` にはクラスが `.docblock-icongallery` しか無く子は emotion の生成クラスなので、**構造セレクタに頼るなら Storybook の major 更新で壊れうる**ことを注記して残す |<br><br>**済（2026-08-04）。`.storybook/docs-dark-mode.scss` に `.docblock-icongallery` の 2 ルールを追加した**（specimen の面を `--wim-color-surface` / 枠を `--wim-color-border`、ラベルを `--wim-color-text-primary`）。<br>**まず不具合を数値で再現した。** dark の Icon docs でルールを `deleteRule` で外して測ると、**アイコン `#fff` が specimen `#fff` の上＝コントラスト 1.00:1**（＝文字どおり見えない。「白い四角しかない」の正体）、**ラベルは `#2e3338` がページ `#262626` の上で 1.19:1**（「すごく薄い文字」の正体は、薄いのではなく**暗い文字が暗い面に載っていた**）。<br>**修正後は全 68 アイテムで実測**（11 ギャラリー・1 件も例外なし）: **アイコン 11.55:1 / ラベル 15.13:1**。<br>**鳴ってはいけない経路も実測**: light では specimen が `#fff`・ラベルが `#2e3338` のまま＝**Storybook 既定と同一で、追加ルールは 1 つも当たっていない**（ラベルのコントラストは 12.75:1 で従来どおり）。<br>**根っこは「テーマが二重」であること**（T36 の系列）。`IconGallery` は Storybook のテーマで塗られ、中身のアイコンは WIM のトークンから色を継ぐので、**dark にすると片方だけが動く**。同じ形の事故は他の docblock でも起こりうるので、`.sbdocs-content` 配下で「Storybook 由来の面 × WIM 由来の前景」が混ざる箇所を見つけたら同じ扱いにすること |

#### T38 の停止点（2026-07-29 決定 → **2026-08-02 に完了。下の「決着」を先に読むこと**）

##### 決着（2026-08-02・0.13.0）

**採ったのは案②（型を実装に合わせて狭める）。ただし手で union を書くのではなく、SCSS が実装する値の配列から導いた。** `CardProps` の `padding` / `radius` は `(typeof CARD_STYLED_PADDING)[number]` / `(typeof CARD_STYLED_RADIUS)[number]` になり、その配列が `card.module.scss` と一致することは既存の実ファイル読み込みテストが見ている。**型 → 配列 → SCSS が 1 本の鎖でつながったので、同じドリフトは構造的に起きない**（union を書き写す方式なら、クラスを足したときに型を直し忘れる余地が残る）。

**消えた 6 値**: `padding="4xl"` / `padding="5xl"` / `radius="xs"` / `radius="3xl"` / `radius="4xl"` / `radius="5xl"`。**radius の 4 つはトークン自体が存在しない**（`--wim-radius-*` は sm / component / container / xl / 2xl / full / overlay のみ）ので、案①を採るなら「新しい radius スケールを決める」ところから始める必要があった。起票時の分析どおり。

**利用者視点で実証した**: `dist` を別プロジェクトから解決させると `<Card radius="5xl">` が `Type '"5xl"' is not assignable to type '"none" ...'` で落ち、`padding="3xl" radius="2xl"` は通る。エラーメッセージに使える値がそのまま並ぶので、移行の案内を別途書く必要がない。

**ガードが見えなくなる形を 1 つ塞いだ（重要）。** 型を配列から導いた瞬間、docgen の tsType が `unknown[number]` になり **`check:prop-classes` から `Card` が丸ごと「対象外」に落ちて緑になった**。数字は 6 → 0 に見えるが、中身は「直った 0」ではなく**「見えなくなった 0」**だった。検出器に `(typeof CONST)[number]` を解決させて対象に戻し、**両方向で鳴ることを実証**した: ①配列に値を足してクラスを足さない → 鳴る ②SCSS からクラスを消す → 鳴る。ラチェットは **6 → 0 のハードゲート**にした。

**`warnUnstyledValue` は残す。** 型はコンパイル時にしか効かないので、JS から使う人・`as any` を挟んだ人・古い型で解決している人には届かない。テストは `as any` で「型を回避した利用者」を再現する。**スタイルがある値のほうはキャストせずに書く** — あれが型として通ること自体が主張なので、キャストすると型の後退を見逃す。

**版番号での予約は結局 4 回外れた**（0.6.0 → 0.7.0 → 0.8.0 → 0.10.0 → 実際は 0.13.0）。この節が「3 回目を防ぐために」書かれてなお外れ続けたのは、**changeset が溜まれば版は勝手に進む**から。今回は**版を決めずに PR を出した**ら片付いた。次に同種のものを延期するときは、版ではなく「次に出す PR」に紐づけること。

**`check:api` はこの変更を見なかった。** exports と symbol は変わらないので v2 スナップショットは無風のまま通る。**prop の型が狭まることは公開 API の破壊なのに、API ガードからは見えない** — T54 として起票した。

**T38 は 0.10.0。そして 0.10.0 を「型が真実を語る回」と定義する。**（**2026-07-30 に 0.8.0 → 0.10.0 へ再設定**。⚠️ **この節は 3 回目の延期を防ぐために書かれたのに、そのまま 3 回目を記録してしまった**: 0.8.0 は 07-29 夜に #165/#166 の changeset で出てしまい、T38 は入っていない。**「版番号で予約する」方式が効かないことの実例**＝changeset が溜まれば版は勝手に進むので、番号だけでは席を取れない。**次からは版番号ではなく「T38 の PR を先に開く」で予約する**こと。0.9.0 は mono の契約が実体になる回＝「見た目が変わる」性格なので、下の理由により混ぜない）  
旧: **T38 は 0.8.0。** 0.6.0 → 0.7.0 → 0.8.0 と 2 回延期しているので、3 回目を防ぐために定義と代償措置をセットにする。

- **延期の理由は今回も同じ**: 0.7.0 は ④⑤ で「見た目の既定値が変わる回」になる。union の縮小は**コンパイルが止まる**性質なので、混ぜると利用者が原因を切り分けられない（0.6.0 から外したときと同じ理屈）
- **危険なのは「カテゴリで延期する」に自然な停止点が無いこと**。どのリリースにも見た目の変更は多少入るので、同じ理屈で無限に延期できる。だから**型の回**と名前で固定し、同種のもの（`api-snapshot.json` が動く縮小）はそこへ集める（※版番号での固定は上記のとおり 1 度失敗している）
- **延期のコストは単調に増える**: 効かない型を出荷し続けるほど、世に出る死んだコードが増え、縮小時に壊れる量が増える

**0.7.0 に入れる代償措置（実装済み）**: `Card` が「型は通るのに何も起きない」6 値を渡されたとき、**開発時だけ 1 回 `console.warn` する**（`warnUnstyledValue`）。破壊しないので 0.7.0 の性格を汚さず、「黙って効かない」が「理由が出る」に変わる。`src/icon/registry.ts` の `warnUnregisteredIcon` と同じ既存パターン。

<details><summary>実装で 1 つ設計を変えた（検証できない案を捨てた）</summary>

当初は「CSS モジュールにクラスが在るか」を実行時に見て判定する案にした。ドリフトしないので綺麗だが、**Vitest では CSS モジュールが全キーに答えるプロキシ**（`styles["radius-5xl"]` が `"radius-5xl"` を返す）なので、**ユニットテストで一度も検証できない**＝未検証のガードになる。

そこで「対応値のリストを手書きし、**テストが `card.module.scss` を実ファイルとして読んで突き合わせる**」形に変えた。リストが古くなれば落ちる。実証済み: SCSS に `&.radius-3xl` を足すと `expected ['2xl','3xl','lg',…] to deeply equal ['2xl','lg','md',…]` で落ちる。

**なお `@deprecated` は使えない**。検証したところ `@typescript-eslint/no-deprecated` は**プロパティ全体には効くが union のメンバー個別には効かない**（対照の `ctrl.rounded` は検出、`c.radius === "3xl"` と `const d: CardRadius = "3xl"` はいずれも無反応）。今回消したいのは `radius` prop 全体ではなく中の 4 値なので、この手は成立しない。

</details>

> **運用（起票不要・恒常）**: **VRT update の直後、その head にはチェックが 1 つも走らない**（機構は CI-1 のとおり: コミットバックは GITHUB_TOKEN push なので workflow が起動せず、スナップショットのパスはどの paths filter にも一致しない）。`mergeStateStatus` は `UNKNOWN` / `BLOCKED` のままになる。**載せるコミットが無いときは PR を close → reopen** すれば `pull_request` イベントで全チェックが走る（空コミットより履歴が汚れない）。2026-07-28〜29 に #143 / #145 / #155 で 3 回踏んだ。

> **運用（起票不要・恒常）**: Dependabot は weekly で minor/patch を 1 本にまとめる（直近 #55 = 07-22、次は 07-29 頃）。**playwright（Chromium が変わる）と Storybook（VRT のレンダリング母体）が含まれる回は、CI 緑ではなく VRT compare の結果を見てからマージする**。`size-limit` 12 → 13 は major だが破壊的変更が Node 20 打ち切りのみで `engines: >=22` の本リポジトリには非該当、かつ計測専用ツールなので CI 緑で上げてよい。


#### T32 の進め方（2026-07-27 決定）

**置き場所**: `stories/Patterns/` に置き、**最初から en/ja/pt の 3 言語**で書く。

- SKILLS.md「複合 UI / レシピ優先」が「画面パターンは Patterns に書く」としており、そこに沿う
- **「まず英語だけ、あとで多言語化」は退けた**: `check-stories-hardcoded.js` は**ラチェットではなくハードゲート**（生の英語 UI テキストが 1 件でも exit 1）。英語のみで置くには `i18n-ignore` を大量投入するしかなく、`check-i18n-ignore` のラチェット（現在 30）を押し上げたうえ、多言語化時に全部剥がして戻すことになる＝二度手間
- コストの目安: `ALL_NAMESPACES` を読むので既存キー（`common` 638 / `docs_common` 298 / `docs_stories_recipes` 305）を使い回せる。新規は画面固有のコピーのみで **1 画面 15〜25 キー**程度の見込み。**ja/pt は手翻訳**（この環境は `GOOGLE_GENERATIVE_AI_API_KEY` 未設定のため `i18n:sync` は自動翻訳しない）

**最初の 3 画面**（未合成の塊が大きい順に狙う）:

1. **管理テーブル** — 一括選択・インライン編集・削除確認（DataGrid / Pagination / Dropdown / Popconfirm / Toast / EmptyState / Skeleton）
2. **複数ステップのフォーム** — バリデーションエラー付き（form 42 個の大半: Cascader / TreeSelect / NumberInput / PhoneInput / OtpInput / FileUpload / Dropzone）
3. **AI アシスタント画面** — ai 16 個のほぼ全部（ChatUI / PromptInput / StreamingText / ThoughtProcess / SourceCitation / Terminal）

1〜3 で 60〜80 個、6 画面まで行けば 100〜120 個が一度は合成される。ただし**全 161 個の網羅は目的ではない**（今日の穴はすべて「よく使う部品の組み合わせ」から出ており、単独完結型の部品からではない）。**まず 1 枚を完成まで通して実測し、出た指摘の数で残りを見積もる。**

**実測（1 枚目 2026-07-27 / 2 枚目 2026-07-28。3 枚目以降はこの数字で見積もること）**

| | 起票時の見込み | 1 枚目 | 2 枚目 |
|---|---|---|---|
| i18n キー | 15〜25 / 画面 | **56** | **91** |
| 合成カバレッジ | — | 45 → 60 / 208（+15） | 60 → 74 / 208（+14） |
| 出た穴 | — | **13 件**（当初 10 ＋ スマホ表示で 3） | **13 件**（うち a11y スイートが自動検出 2 件） |
| 派生 PR | — | **7 本**（#129 #130 #131 #132 #135 #136 #137） | 後述 |

**穴の件数は 2 枚目でも減らなかった（13 → 13）。** ただし**種類が入れ替わっている**: 1 枚目は狭幅レイアウトが 7/13 だったのに対し、2 枚目は狭幅由来が 1 件だけで、代わりに**「prop を渡したのに効かない／意味色の誤用／ARIA の取り違え」が中心**になった。**画面の形（表 / フォーム）を変えると出る穴の種類が変わる**ので、同じ形の画面を重ねるより形を変えるほうが打率が高い。

**画面を書く時間より、出た穴を塞ぐ時間のほうがはるかに大きい。** 画面自体は 1 ファイル（約 560 行）で書き上がったが、そこから出た修正は Button のコントラスト・DataGrid の i18n・`mobileCard` 一式・`Container` のガター・Dropdown のポータル化・`loading` の粒度へ広がった。**所要時間は「画面 n 枚ぶん」ではなく「画面 n 枚 × 派生修正」で見積もる。**

**穴の出方は狭い幅に偏る。** 13 件のうち **7 件が 390 / 768px でしか現れない**（`Toolbar.Group` の折り返し・`Code` の 1 文字折り返し・`mobileCard` の外枠と選択列・カードの角丸と隙間と行高と余白・Dropdown のクリップ）。**VRT は 1 幅しか撮らないためこれらは機械で拾えず**、`judge:slop` も同じデスクトップ幅のスクショを見るので死角を共有する。実機幅で見る手順（「1 画面あたりの手順」3）が唯一の検出経路であり、省略すると 7 件がそのまま出荷される。

**1 画面あたりの手順**（CLAUDE.md「委任時の 2 つの約束」に従う）:

1. app-shaped で画面を書く
2. **story 化して VRT / a11y / `judge:slop` に通す** — Playground ではこれで Switch のラベル欠落（axe critical）が自動検出された
3. **狭い幅（390px / 768px）で確認する** — 1 枚目で 2 件出た観点（ページ自体の横スクロール／`mobileCard` 未指定による列の潰れ）。ページの `scrollWidth > clientWidth` は不合格。VRT は 1 幅しか撮らないため**現状は機械では拾えない**（狭幅ストーリーを足すかは別途判断）
4. その結果を添えて人間のレビューへ（**視覚判定は自己申告しない**）
5. 出た穴を起票して修正

#### 0.6.0 のリリース方針（2026-07-27 決定 → **同日改定: 1 枚目の終了時点で切る**）

**改定後（これが現行）**: **T32 の 1 枚目が終わった時点で 0.6.0 を切る。T38 は 0.6.0 から外し 0.7.0 へ送る。** 2 枚目・3 枚目は 0.6.0 の後に続け、そこで出た修正は 0.6.1 / 0.7.0 に乗せる。

- **前倒し条件が 1 枚目だけで満たされた**: 「すでに 0.5.3 に出荷済みの実害」として ①dark の `outline`×`success` が 2.48:1（AA 不合格）②ja/pt で `DataGrid` のページャが英語、の 2 件が出た。デザインシステムが a11y 不合格を出荷し続ける状態を、画面 2 枚ぶんの制作期間だけ寝かせる理由がない
- **ソークテストの価値が想定より下がった**: 3 枚目まで待つ理由は「#132 の新既定値を 1 枚しか通していない」ことだったが、その 1 枚で 390 / 768 / 1280 を往復しながら**新既定値の下でカード表示・Dropdown・loading を 3 回作り直している**。加えてこの 2 変更（ガター 16px / 切替 576px）の失敗モードは見た目であって機能ではない
- **T38 を外す理由**: 未着手であることに加え、**破壊の性質が違う**（0.6.0 は「見た目の既定値が変わる」、T38 は「型が通らなくなる」）。同じリリースに混ぜると利用者が原因を切り分けられない。0.7.0 に単独で置き、CHANGELOG で意図的な縮小として説明する
- 旧方針（3 枚目まで待つ）の記録は以下に残す。判断の前提が変わった経緯として読むこと

<details><summary>旧方針（2026-07-27 の当初決定）</summary>

**T32 の 3 枚目が終わった時点で 0.6.0 を切る。4 枚目以降をやるかは未定のままでよく、リリースはそこに紐づけない。**

- **T32 の画面自体は出荷物ではない**（`files: ["dist"]` なので `stories/Patterns/**` は npm パッケージに入らない）。0.6.0 の中身は**画面が見つけたライブラリ修正のほう**。したがって「何枚作るか」とリリース時期は本来独立している
- それでも 3 枚目まで待つ理由は 1 つ: **#132 が変える既定値（`Container` の 16px ガター / カード切替 576px）を検証した画面がまだ 1 枚しかない**。2 枚目（縦長・フィールド幅の制約が厳しい）と 3 枚目（非対称レイアウト）は、新しい既定値の下で組む最初の実例になる＝**利用者より先に自分で踏むための最も安いソークテスト**
- **前倒し条件**: 2 枚目・3 枚目で「**すでに 0.5.3 に出荷済みの実害**」（今回の AA 不合格や i18n 欠落と同じ性質のもの）が新たに出たら、その時点で 0.6.0 を切る
- **T38 は 0.6.0 に入れる**（`Card.radius` の xs/3xl/4xl/5xl と `Card.padding` の 4xl/5xl を型で狭める）。型の縮小と `api-snapshot.json` の更新はセットで、縮小後は `check:prop-classes` の baseline を 0 にしてハードゲート化する。**リリース直前ではなく 2〜3 枚目と並行して進める**
- 0.5.3 時点で未リリースの修正: #129（dark の outline success 2.48:1 / danger 4.36:1 ＝ AA 不合格）・#130（mobileCard 一式）・#131（`DataGrid` の英語文言と aria-label 8 件）・#132（レスポンシブ既定）。**①②は現に出荷済みの欠陥**なので、これ以上寝かせない
- publish 操作自体はエージェントが進めない（changeset の用意までは可、Version PR のマージは人間の判断）

</details>

**0.6.0 の中身**（`.changeset/clever-pears-cheer.md` = minor）: #129 outline/ghost の文字色（AA 不合格の解消）／#130 #135 `mobileCard` 一式／#131 `DataGrid` の英語文言・aria-label 8 件・EmptyState のアイコン色・InlineEdit の名前／#132 `Container` のガターとカード切替 576px（**利用者のレイアウトが左右 16px ずつ動く**）／#136 Dropdown のポータル化／#137 `loading` の `"blocking"` / `"refresh"`。

#### T32 の 1 枚目「管理テーブル」の結果（2026-07-27）

**成果物**: `stories/Patterns/Admin/IntakeQueue.stories.tsx`（焙煎所の入荷ロット検品キュー。4 ストーリー = 通常 / 一括選択 / 該当なし / 再取得中）。en/ja/pt を最初から。合成カバレッジ **45/208 → 60/208（29%）**（docs-only / internal を除いた公開コンポーネント）。

**見積もりの実測値**（2 枚目以降はこの数字を使う）: i18n キーは **55 個**＝当初見込み 20〜25 の 2 倍以上。ja/pt は手翻訳。ゲートは tsc / eslint / i18n:check / check-stories-hardcoded / check:slop すべて緑で、**インライン style ゼロのため `check:slop` のラチェット 52 を増やしていない**。a11y は 8 ケース中 1 件赤（下表 ②）。

**出た穴 10 件**。すべて「1 画面作ったら出てきた」もので、ガード設計では見つからなかった。⑤〜⑩ は**狭い幅（390 / 768px）で見たときだけ出る**もので、VRT が 1 幅しか撮らない現状ではどのガードにもかからない。

| # | 穴 | 層 | 状態 |
|---|---|---|---|
| ① | `DataGrid` のページャ文言が英語ハードコード（`DataGrid.tsx:353` `Displaying {n} of {total} records` / `:356` `({n} row(s) selected)` / `:345` `Loading more...`）。**同じファイルは a11y ラベルだけ `t()` 済み**＝可視文言のみ漏れ。ja/pt の画面に英語が出る。同型として aria-label / alt の生英語が 8 件（`Tag` "Close" / `Kanban`×3 / `Calendar`×3 / `ChatUI` "Attach file" / `Audio` alt="Cover" / `ImageCropper` alt="Crop target"） | ライブラリ | 未着手 → **T40** |
| ② | dark で `Button variant="outline" intent="danger"` が **AA 不合格**（4.35:1、要 4.5:1。`#fb7482` on `#393939`）。`button.module.scss:165` が `color: var(--wim-color-danger)` を使い、T12 で用意した AA 安全な `text-danger` を使っていない | ライブラリ | 未着手 → **T41** |
| ③ | `EmptyState` の `icon` スロットが未正規化。`<Icon name="SearchIcon" size="lg" />` を渡すと巨大な真っ黒アイコンになる | ライブラリ | 未着手 |
| ④ | `InlineEdit` の編集トリガー（`role="button"`）に**アクセシブル名を与える手段が無い**。`aria-label` は外側 div に落ち、名前を付けられるのは可視 `label` だけ＝テーブルセルでは使えない | ライブラリ | 未着手 |
| ⑤ | `Toolbar.Group` が折り返せない（`toolbar.module.scss:37` の `.group` に `flex-wrap` が無く既定 `nowrap`）。ボタンを 1 グループに詰めると **390px でページごと横スクロール**する。`.group { flex-wrap: wrap }` で直る。アプリ側はグループを分けて回避可能だが、知らないと必ず踏む | ライブラリ | **済**（`layout/Toolbar/toolbar.module.scss:40` に `flex-wrap: wrap` あり。2026-07-28 に実物で確認） |
| ⑥ | `Code` に `white-space: nowrap` が無く、狭い列で **1 文字ずつ縦に折り返る**（ロット番号が縦一列になる）。アプリ側の回避はインライン style しかなく必須ルール 3 に反する | ライブラリ | **PR #145**（2026-07-28。**診断が不足していた**: 1 文字ずつ割れる正体は `body { overflow-wrap: anywhere }`（`lang.scss:15`）の継承で、それを `normal` に戻しても**ハイフンが改行機会として残り 60px 幅で 3 行**（`KR-` / `2026-` / `0143`）。`white-space: nowrap` まで入れて 1 行になる。2 枚目 ⑥ の色と同じ `.inline` の話なので 1 本にまとめた） |
| ⑦ | 狭幅カード表示の切替点が `container-down(md)` 固定＝**タブレット幅でもカードになる**。閾値を変える prop が無い | ライブラリ | **済**（`DataGrid.tsx:60` が `mobileCard?: boolean \| "sm" \| "md"`。#132 で 576px 既定＋`"md"` で旧閾値。2026-07-28 に実物で確認） |
| ⑧ | `mobileCard` が**選択列をリセットしない**。`.selection` の固定幅 60px と `_stickyLeft` の inset 影が残り、`justify-content: space-between` ＋ 空の `::before` でチェックボックスが 60px の右端へ押される＝「四角い囲みの左に謎の空間」 | ライブラリ | 未着手（⑩と同一原因） |
| ⑨ | **`Container` に横ガターが無い**（`container.module.scss` は max-width と中央寄せのみ）。ビューポートが max-width より狭いと必ず端に張り付く。**既存のインライン style 負債の出どころ**でもある（`Marketing.stories.tsx:112` が `style={{ padding: … }}` で回避＝`check:slop` ラチェット 52 の一部）。修正は破壊的（全画面の余白と VRT 全面更新）ため方針判断が要る: ①既定の `padding-inline` を入れる（0.6.0 相当）②`gutter` prop で opt-in（非破壊）③ドキュメントで「ページ余白は `Box` の `px`」と明文化 | ライブラリ | **済＝案①**（`container.module.scss:10` に `padding-inline: var(--wim-spacing-2xl)`。#132 で 0.6.0 に出荷済み。2026-07-28 に実物で確認） |
| ⑩ | `mobileCard` で**外枠パネルが残る**。消えるのは `<table>` の枠だけで、`.wim-data-grid` の白背景 + 枠 + 角丸と `.tableContainer` の白背景が残る＝枠付きパネルの中に枠＋影のカードが並ぶ二重フレーム（カード間に外側の白が見える）。**ライブラリ自身が必須ルール 8・9 を破っている**。card モードで root の背景/枠/角丸を落とし footer の border-top を外す案を注入で検証済み | ライブラリ | 未着手（⑧と同一原因） |
| ⑪ | スマホ表示の仕上げ 4 件（カード上端の角丸が描かれない＝`border-collapse: collapse` では行の `border-radius` が描画されない／カード間に白が出る＝`tbody` と **Table 自身のラッパー**が面を塗り続ける（⑩ で直したのは DataGrid 側のコンテナだけだった）／`InlineEdit` を含む行だけ 16〜24px 高い＝編集アイコンが `aria-hidden` なのに md の IconButton で 36px を要求＋セルが控えめな高さのコントロールにさらに padding を足す／カード内の行が窮屈＝表の compact 密度（4.8px/8px）をそのまま継承） | ライブラリ | **済**（#135） |
| ⑫ | 行アクションのメニューを開くと**表が伸びる／カード表示では消える**。`Dropdown` だけが floating-ui を使わず `position: absolute` のままで、スクロールコンテナ（`overflow: auto`）とカードの `overflow: hidden` から出られなかった。実測: 表表示で `containerScrollH` 423 → 536、カード表示は描画ゼロ。**さらにポータル化の副作用として、位置決定前の要素に `focus()` してページ最上部へ飛ぶ退行が出た**（390px で `scrollY` 2503 → 0）＝`preventScroll` で解消 | ライブラリ | **済**（#136） |
| ⑬ | `loading` が「初回ロード」と「再取得」を区別できない。true にすると常に `inert` ＋ 不透明度 0.6 ＋ `pointer-events: none` で**全操作を遮断**する。再取得のたびに表全体が触れなくなるのは強すぎるが、弱める手段が利用者側に無かった（`Intake queue / refetching` が永久に操作不能に見えたのがきっかけ） | ライブラリ | **済**（`loading: boolean | "blocking" | "refresh"`。既定は不変。refresh は `aria-busy` のみで**減光しない**＝不透明度を落とすと二次テキストが AA を割るため） |

**この画面側で対処したもの**: `mobileCard` の有効化（⑥の症状は表からは消える）／一括バーを `Toolbar.Group` 3 つに分割（⑤の回避）／ページのガターを `Box px="2xl"` で付与（⑨の回避。インライン style を使わない形）。

#### T32 の 2 枚目「複数ステップのフォーム」の結果（2026-07-28）

**成果物**: `stories/Patterns/Form/WholesaleApplication.stories.tsx`（同じ Kiyosumi Roasters に卸売取引を申し込む側の画面。4 ステップ = 事業者 / 納品条件 / 書類 / 担当者と確認コード、6 ストーリー = 通常 / 送信して弾かれた / 納品条件 / 書類 / コード不一致 / 受付完了）。en/ja/pt を最初から。合成カバレッジ **60/208 → 74/208（36%）**。**i18n キーは 91**（1 枚目の 56 の 1.6 倍。フォームはラベル・エラー文・選択肢がすべてコピーになるため）。

ゲートは tsc / eslint / i18n:check / check-stories-hardcoded / check:slop すべて緑（**インライン style ゼロ＝ラチェット 52 を増やしていない**）。a11y は 12 ケース中 4 件赤で、これが下表 ③④ の出どころ。狭幅は 390 / 768 / 1280 × en / ja / pt を実測し、**ページの横スクロールはどの組み合わせでも 0**。

**出た穴 14 件**。1 枚目と違い、狭幅由来は ⑦ の 1 件だけ。⑭ は画面そのものではなく、①を直す過程で**ガード側**に見つかったもの。

| # | 穴 | 層 | 状態 |
|---|---|---|---|
| ① | **`Alert` / `Banner` / `Notification` / `Snackbar` / `Toast` / `Result` の既定アイコンが、success 以外すべて「塗りつぶした丸」**。`_internal/FeedbackIcon.tsx` の switch が `success → CheckIcon` しか持たず、danger / warning / info / default は全部 `CircleIcon` に落ちる。`alert-circle` も `info-circle` も `src/icon/` に実在するのに使われていない。**docgen と llms.txt は「intent に応じた既定アイコンが出る」と主張している**＝T37 型の主張破れでもある。0.6.0 に出荷済み | ライブラリ | 未着手 |
| ② | **`OtpInput` が初期 `value` を無視する**。derived-state で `prevValue` を `useState(value)` と初期化しているため、**マウント時の value は一度も反映されない**（変化して初めて同期する）。`<OtpInput value="418203" />` が空欄 6 個で描画される＝保存済みコードの再表示・ステップの再マウントで消える | ライブラリ | 未着手 |
| ③ | **`FileUpload required` が axe critical を出す**（`aria-allowed-attr`）。トリガの `<Button>` に `aria-required="true"` を付けているが、`role=button` は `aria-required` を許可しない。`FileUpload.tsx:122`。**0.6.0 に出荷済みの WCAG 4.1.2 違反**で、a11y スイートが自動検出した | ライブラリ | **済**（#142、0.6.1 で出荷） |
| ④ | **`Alert` のタイトルが既定で `<h4>`**。h1 → h2（ステップ見出し）の下に置くだけで `heading-order`（moderate）に落ちる。そもそもアラートのタイトルは文書構造の見出しではないので、既定が見出しタグであること自体が要判断。画面側は `titleTag="h3"` で回避した | ライブラリ | **済 → 0.7.0**（#156。既定を `div` に。型は `div`/`p`/`strong`/`span` も受ける。`.title` が字形をすべて指定しているので**見た目は不変**＝実測で 15px/600/21px・ボックス 1200×21 が h4 と一致） |
| ⑤ | **必須表示が塗りの `Badge intent="danger"`**（`_internal/FieldLabelContent.tsx`）。必須項目の多いフォームでは**何も間違えていない状態でページ中がエラー色**になり、実際のエラーと同じ色なので区別が消える。`aria-required` は別途正しく付いているので a11y ではなく視覚設計の問題 | ライブラリ | **済 → 0.7.0**（#155。`variant="subtle"` で塗りだけをやめた。intent は `danger` のまま・語も「必須」のまま。半透明トークンのため canvas で合成して実測: light 5.97:1 / dark 6.33:1） |
| ⑥ | **`Code` の inline が `--wim-color-text-danger` を直接使う**（`code.module.scss`）。ロット番号・受付番号のような**中立な識別子が赤く出る**（受付完了の Result 上でも赤）。専用トークンが無く意味色を流用している＝**T41 と同型**（コンポーネントが SSOT を迂回して intent 色を使う） | ライブラリ | **PR #145**（2026-07-28。**専用トークンは不要だった** — `.block` が既に `--wim-color-text-primary` を使っているので inline をそれに合わせた。1 枚目 ⑥ の折り返しと同じ `.inline` なので 1 本にまとめた） |
| ⑦ | **`SegmentedControl` は入りきらないと黙って切れる**。`overflow: hidden` で、折り返しも縮小もスクロールもしない。**ラベル長は i18n で変わる**ので en で収まっても他言語で切れる（実測: pt 390px で `clientWidth 298 < scrollWidth 368`＝最後の選択肢が読めない）。en の 390px でも 5px 欠けていた | ライブラリ | **済 → 0.7.0**（#149。`minmax(0, 1fr)` で下限だけ 0 に。上限の `1fr`＝等幅は見た目そのものなので据え置き。320px でページ横スクロール 79px → 0、1280px は main と完全一致） |
| ⑧ | **`FileUpload` / `Dropzone` に「すでにアップロード済み」を表す手段が無い**（`value` / `files` prop が無く `onChange` だけ）。実アプリでは必ずサーバ側の既存ファイルを出すので、**一覧はアプリが自前で描くことになり、コンポーネントは永久に「ファイル未選択」と言い続ける** | ライブラリ | **済 → 0.7.0**（#154。両方に `value?: string[]`。マウント時に効くことをテストで固定＝②と同じ轍を踏まない） |
| ⑨ | **カード内でフィールドをグルーピングする手段が無い**。`Fieldset` は `variant` が default / full-width のどちらも枠＋角丸つきで、`Card` の中に置くと必須ルール 9（枠の二重）に反する。`Legend` は `<legend>` を出すので fieldset の外では使えない。結果、節見出しを `Text` で自作するしかなく**グループの意味論（`<fieldset>`）が失われる** | ライブラリ | **済 → 0.7.0**（#152。`variant="plain"` で枠・padding・角丸だけ落とし、`<fieldset>`/`<legend>` は残す） |
| ⑩ | **`Text` に折り返しを止める手段が無い**（`truncate` / `nowrap` prop なし）。狭幅で「1.2 MB」のような短い値が 2 行に割れる。回避はインライン style しかなく必須ルール 3 に反する＝**1 枚目の ⑥（`Code` に `white-space: nowrap` が無い）と同型** | ライブラリ | **済 → 0.7.0**（#147。`nowrap` と `truncate`。40px 幅の "1.2 MB" が 2 行 → 1 行を実測） |
| ⑪ | **`NumberInput` に単位を添える手段が無い**（suffix / adornment prop なし。`rightIcon` はアイコン名しか受け取らない）。kg・円・% はフォームの定番なのでラベルに「（kg）」と書く回避が要る | ライブラリ | **済 → 0.7.0**（#153。`suffix` は `Input` に置いた＝`NumberInput` へは継承で届く。絶対配置ではなく flex の流れなので数値が単位の下に潜らない） |
| ⑫ | **`Icon` と `Text` で色トークンの語彙が違う**（`Text color="text-tertiary"` / `Icon color="tertiary"`）。型エラーになるので事故にはならないが、同じ色を指す prop で綴りが揃っていない | ライブラリ | **済 → 0.7.0**（#150。**綴りだけの問題ではなかった** — `secondary` だけが塗り用トークンで light 1.86:1（WCAG 1.4.11 の 3:1 割れ）。`text-secondary` に直し、語彙も `Text` に合わせて `WimColor` を受けるよう拡張。`Result`/`Image` の控えめな大アイコンは `tertiary` へ） |
| ⑬ | `OtpInput` の `labels.digitAriaLabel(index)` は **1 始まり**で呼ばれる（`OtpInput.tsx:205` が `index + 1` を渡す）が、型にも docgen にも書かれていない。0 始まりと解釈して `index + 1` を渡すと "Digit 2〜7" になる（実際にそうなった） | ライブラリ | **済 → 0.7.0**（#146。引数名を `position` に変え、型と `labels` prop の両方に 1 始まりと明記。`digitAriaLabel(index)` に戻すと落ちるテスト 2 本で固定） |
| ⑭ | **VRT は ~20×20px 未満に収まる変化を構造的に検知できない**。`vrt/vrt.spec.ts:133` の `maxDiffPixels: 400` は **fullPage** スクショに対する閾値だが、`size="sm"` のアイコンは実測 14×14〜16×16 ＝ 最大でも 196〜256px しか動かず、**閾値を数学的に超えられない**。①の修正（#142）で実際に露呈した: Alert / Banner / Notification / Snackbar / Toast は**グリフが変わったのに VRT 全緑のまま通過**し、落ちたのは 80×80 のアイコンを持つ `Result` だけだった（6400px）。同じ盲点にバッジのドット・フォーカスリング・ヘアラインのボーダーが入る。**「VRT が緑」は小領域の変化については何も意味しない** | ガード | **起票済 → T44**（2026-07-28。#142 では 5 コンポーネント分の単体テスト `FeedbackIcon.consumers.test.tsx` で個別に塞いだ。閾値そのものの見直しは全ベースライン更新を伴うため単独の作業として切る） |

**作業再開ポイント（2026-07-28 時点。ここから続ける）**

| PR | 中身 | 状態 |
|---|---|---|
| **#143** | 画面本体（`WholesaleApplication.stories.tsx` ＋ i18n 91 キー ＋ この節） | **VRT compare が赤（新規 6 ストーリーのベースライン未撮影＝想定どおり）**。a11y は #140 が main に入ったので、リベース後に緑になるはず（未実証） |
| **#140** | ③ `FileUpload` の `aria-required`（axe critical） | **マージ済**（2026-07-28。head SHA 上で全 17 チェック緑を確認してから squash） |
| **#141** | ② `OtpInput` がマウント時の value を無視 | **マージ済**（同上） |
| **#142** | ① `FeedbackIcon` の既定アイコン（danger/warning/info が塗り丸）＋ ⑭ を塞ぐ単体テスト | CI 実行中。マージ待ち |

**#142 について判明したこと（予測が外れた）**: 「マージすると Alert / Banner / Notification / Snackbar / Toast / Result の VRT ベースラインが全部動く」と書いていたが、**実際に動いたのは `Result` だけ**だった。修正は 5 コンポーネントにも届いている（probe で確認済み＝ピクセルは本当に変わっている）が、**VRT の閾値が小さすぎる変化を見られない**＝⑭。そのため #142 に `FeedbackIcon.consumers.test.tsx`（5 コンポーネント × intent ごとのグリフ）を追加した。**修正を revert すると 9 件すべてが落ちること、どのコンポーネントのどの intent かがメッセージに出ることを実証済み**。

**次の手順（この順で）**:

1. ~~#140 → #141 のマージ~~ **完了**。**#142 は CI 全緑を確認してからマージ**
2. `feat/patterns-application-form` を main にリベース。**#140 が入って初めて #143 の a11y が緑になる**ので、ここで a11y の緑を実証する（ローカル実行は `npm run storybook` を上げてから。dev サーバが落ちていると webServer 経由でタイムアウトして偽の赤が出る）
3. **VRT update を最後に 1 回だけ** workflow_dispatch で流す（コミットバックが素の git push なので、そのブランチへの push を全部終えてから。#142 のベースライン更新＝`Result` の 12 枚もここで一緒に入る）
4. 残り 9 件（④〜⑬）の起票済みの穴を、要判断（④⑤）と機械的な修正（⑥⑦⑧⑨⑩⑪⑫⑬）に分けて着手するか、3 枚目（AI アシスタント画面）へ進むかを判断する

**未解決の観測 — a11y スイートが同一コミットで違う赤を出す**: #143 の CI（同じ commit `b9e7d0ce`、同じシャード構成）で **2 回流して、赤になったストーリーが毎回違った**。#143 の差分はどちらにも一切触れていない（`IMPROVEMENTS.md` / `docs_stories_recipes.json` ×3 / 新ストーリーのみ）。ワークフローに `--max-failures` は無く、`retries: 2` なので**どちらも 3 回連続で落ちて初めて報告されている**（run 内では粘着的、run をまたぐと入れ替わる）。

| run | 赤になったもの | 違反 |
|---|---|---|
| 1 回目 | `Media/Lightbox` Gallery（dark）/ Default（light） | `button-name`（critical） |
| 2 回目（再実行） | `Visualization/ScheduleView` Day View（light） | `role-img-alt`（serious。FullCalendar の `<span class="fc-icon fc-icon-chevron-left" role="img">`） |

**Lightbox 側の機構は特定済み**: `Image` は IntersectionObserver が発火するまで `<img>` を描画せず（`Image.tsx:400`、`isIntersecting` の初期値 false ＝ `useMediaLoader.ts:24`）、`Lightbox.Trigger` のアクセシブル名は入れ子の `alt` **だけ**が供給源。さらに `waitForStoryReady` は `document.images` をその場でスナップショットする（`story-ready.ts:36`）ため、**img が 1 枚も無いと何も待たずに素通りする**。対策候補は `Lightbox.Trigger` に `aria-label` を持たせる（名前を画像の読み込み状態に依存させない）。

**ScheduleView 側の機構も特定した（当初の推測とは別だった）**: この違反は「実在するが普段は隠れている」のでも「テストの都合」でもなく、**一時的に実在する**。`ScheduleView.tsx:118-133` が FullCalendar 内部 DOM の axe 違反を**事後パッチで補正している** — `.fc-icon[role="img"]` に `aria-hidden` を、`a.fc-more-link` に `role="button"` を、`useEffect` の 1 回目と `MutationObserver` で当てている。FullCalendar がビュー切替やイベント再描画で要素を作り直してから、パッチが当たるまでの窓では**違反が本当に存在する**。axe がその窓に入れば赤、外れれば緑。つまり**支援技術が同じ窓を読めば同じものを読む**ので、テスト専用の問題ではない。恒久対策は「補正を後から当てる」形をやめること（FullCalendar の API 側でアイコンを装飾扱いにできないか、あるいはツールバーを自前に置き換える）。

**ローカルでは両方とも再現しない**（Lightbox 18/18・ScheduleView 8/8 パス、CPU 6 倍・20 倍に絞っても 0/5・0/10）。共通しているのは「a11y の正しさが描画のタイミングに依存している」ことで、⑭ と同じ「緑を信用してよいか」の問題。**#143 のマージ可否には影響しない**（どちらも main 由来・変更と無関係）。

**④⑤ の判断（2026-07-28 決定）**: **どちらも既定を変え、0.7.0 に載せる。** 「既定は据え置いて prop とドキュメントで逃がす」案は採らない — 逃げ道を用意しても、既定のまま使う利用者が同じ欠陥を踏み続けるため。④ は `Alert` のタイトルを既定で見出しタグにしないこと（`titleTag` は残す）、⑤ は必須マークを danger の塗りバッジ以外にすること。**0.6.1（#144）には入れない**＝患部が「出荷済みの欠陥の修正」に限られたリリースなので混ぜない。

**リリースの順序（この制約を外すと 0.6.1 の中身が変わる）**: changeset は溜まったぶんが 1 つの Version PR にまとまるため、**#144 をマージして 0.6.1 を publish し切るまで、既定を変える PR を main に入れない**こと。先に入ると 0.7.0 相当の変更が 0.6.1 に同梱される（あるいは changeset 無しで黙って混ざる）。同じ理由で #145（inline `Code`）も changeset をまだ付けていない。

**この画面側で対処したもの**: `Alert` に `titleTag="h3"`（④）／`SegmentedControl` のラベルを短い語に置き換え（⑦。pt は "A cada duas semanas" → "Quinzenal"）／`CounterTextarea` を `fieldSizing="content"` に（狭幅で本文が途中で切れるため）／`Fieldset` を使わず `Card` 直下に並べる（⑨）／単位はラベルに併記（⑪）。

**保留**: T32 の画面は i18n に依存するため **StackBlitz には出せない**。「Patterns を全部 StackBlitz に出す」構想は実測でブロッカーを確認済み（`t()` が 302 箇所 / Storybook の殻 / 1 ファイルに複数画面 / `AI.stories.tsx` が `../../../src` を import）。**変換器は当面作らない**（検証を優先）。必要になった時点で別途判断する。

#### T44 の計測結果（2026-07-29。**ここから再開**）

**前提が間違っていた。** `vrt.spec.ts` のコメントにある「同一コミット連続ランで実測 ≤220px のジッタ」は、実際にはジッタとドリフトの合計だった。`maxDiffPixels: 0` / `retries: 0` の compare を **2 回**流して突き合わせた実測:

| | 件数 |
|---|---|
| 全ケース | 1986（993 ストーリー × light/dark） |
| 差分ゼロ | **1615（81.3%）** |
| 差分あり | 371 |
| うち **2 ランで同じピクセル数**＝ベースラインが古いだけ | **349** |
| 2 ランで値が違う＋片方だけ＝**真の非決定** | **28（1.4%）** |

分位（差分ありのみ）: p50=69 / p75=156 / p90=312 / p95=362 / p99=1281 / max=19164。

**したがって案①（閾値を下げる）が成立する**。349 件は撮り直しで消え、残る 28 件を潰せば `maxDiffPixels` を 400 → **50 程度**まで下げられる。信号（16px グリフの入れ替え）は実測 **139〜176px**（`FeedbackIcon` を #142 以前へ戻して VRT と同条件で計測: Alert 141/143/139・Banner 141・Notification 176・Snackbar 147・Toast 145）なので、50 なら確実に捕まる。案③（諦めて単体テストで担保）は不要。

**28 件の原因（3 つに集約された）**:

1. **Google Fonts の `display=swap`** — `.storybook/preview-head.html` が Noto Sans / Noto Sans JP を外部から読む。到着前に撮るとフォールバック字形になり全テキストがずれる。`FieldError` / `InputGroup` / `InlineEdit` のような**アニメも画像も無いストーリー**が揺れていた説明がこれ。`document.fonts.ready` は「保留中の読み込みが無い」までしか保証しない
2. **`useIndicator` のスライダー** — ResizeObserver で測ってから opacity 0→1。測定前に撮ると位置も不透明度も途中。`IndicatorBase - Variants` が 127 ⇄ 6727px、`Tabs` / `SegmentedControl` / `TabNavigation` も同型（6 件）
3. アニメーション / canvas / ホバー — `VoiceVisualizer`×3 / `Transition - Fade` / `ScatterChart` / `SignaturePad` / `Cascader - Hover Expand`×2

**副産物の発見**: 閾値 400 を超えるケースが 12 あるのに main の compare は緑だった。`retries: 2` が**落ちても再実行で通れば成功として報告する**ため、不安定なストーリーの赤が隠れている。

**外部画像の差し替えは取り下げた**（当初やる方針だったが、実測すると `Avatar - Sizes` / `SourceCitation - Default` に `<img>` は 1 枚も無く、外部リクエストはフォントだけだった＝効果が確認できない。`page.route` は全リクエストを Node 経由にするので費用も高い）。

**実装の途中経過**: ブランチ `fix/vrt-determinism`（PR 未作成）に、①フォントの `document.fonts.load()` 待ち ②インジケータの opacity 待ち（上限つき・非致命） ③遅れて挿入される `<img>` の取りこぼし対策、を入れてある。**⚠️ 最初の実装（`document.fonts.check` のポーリング）は待ち時間を使い切って致命的に遅く、ローカル 6 テストが 14.3 秒 → 6.4 分、CI の probe ランも 8 分 → 18 分超になった**（`fonts.load` へ置換して 12 テスト 17.5 秒に回復。CI での所要は未確認）。

**次にやること（この順）**: ①`fix/vrt-determinism` を CI で 1 回流して所要時間と 28 件の減り方を確認 → ②残った非決定ストーリーを直す or 除外 → ③ベースライン全面撮り直し → ④`maxDiffPixels` を 50 へ → ⑤受け入れ条件の実証（`FeedbackIcon` を戻すと 5 件落ちる）。計測用ブランチ `chore/vrt-jitter-probe`（閾値 0 / retries 0）はマージせず残してある。

##### ①の結果と真因（2026-07-30。**待ち合わせでは足りず、供給元が原因だった**。下の「1 回目は失敗した」の結論をこれで訂正する）

**所要時間は問題なし**（#171 の VRT compare 4 シャードが 6m35〜7m33＝main の通常 ~8 分と同等。18 分超だったのは `fonts.check` ポーリング版）。**28 件の減り方は、閾値 0 / retries 0 の 2 ラン（同一 sha `17614cf9`）のアーティファクトを突き合わせて実測**（`error-context.md` の `Snapshot:` と `N pixels` を全件パースし、2 ランで同じピクセル数＝古いベースライン / 値違い or 片方だけ＝非決定と分類。**同じスクリプトを waits 無しのペアに当てて記録済みの 371/349/28/max 19164 を完全再現できることを先に確認した**）。

| | waits 無し | waits あり |
|---|---|---|
| ベースラインが古いだけ | 349 | 348 |
| 真の非決定 | **28** | **40**（値違い 14 + 片方だけ 26） |

**数は増えたが中身は反転している**: 28 のうち **24（86%）が消えた**（`IndicatorBase - Variants` 6727⇄127 / `FocusTrap` 19164 / `ThreadList` 6325 / `Transition - Fade` / `ScatterChart` / `ModelSelector`×3 / `FieldError` / `InputGroup` / `InlineEdit` ほか。**取り下げた画像スタブ無しで `Avatar - Sizes` と `SourceCitation - Default` も消えた**＝あれは画像ではなくフォント側だった裏付け）。残ったのは 4 件（`Tabs - Default` 332⇄343 / `Tabs - Scrolling` 13⇄7 / `TabNavigation - Pills` / `Cascader - Hover Expand` light 14⇄1432）。

**新たに出た 36 件のうち 25 件が「run B にだけ出る」で、4 シャードに均等（7/8/5/5）**＝ストーリー固有ではなくラン全体の環境要因。diff 画像を見ると**文字だけが二重にずれ、行の後ろの語ほどずれが大きい**（`Breadcrumb - Default` の "Current Page" が最大、`Span - Large Span` も同型）＝**別書体（フォールバック字形）で描かれた形**。

**機構は当初の推定と違った（訂正）**。「`media="print"` で `@font-face` が未登録だから `fonts.load()` がマッチ 0 件で即解決」と見立てたが、公開 Storybook を CDP 込みで実測すると **`document.fonts.size` = 400（登録済み）／マウント時点の `check()` = 10/10 で false ／ `load()` のマッチ = 1 面**。つまり**宣言はあるがバイナリが未着なのが常態**で、毎ショットが `fonts.gstatic.com` への往復が待ち時間内に終わることに依存していた。だから `fonts.load` で 24/28 が直り、ネットワークが機嫌を損ねた run B で 25 件が落ちた。**→ 待ち合わせの改良では閉じない。供給元をローカルに変えるのが対策**（次項）。

**副産物**: 古いベースライン側の分布は p99=389 / max=452 で、**50px 超が 211 件**。閾値 50 への変更は**撮り直しより後**でなければ成立しない（既定の順序どおり）。

#### フォント自前化と mono の契約（2026-07-30）

**Storybook のフォントを Google Fonts から `@fontsource`（devDependency）へ移した**＝上の run B の原因を構造的に消す。`preview-head.html` の link 4 行（preconnect×2・preload・`media="print"` + onload の stylesheet）を削除し、`preview.ts` で import する。

- **3 言語すべて自前**（一貫性）。`pt` は追加不要（ã ç õ は `latin` サブセット U+0000-00FF に含まれる）。ウェイトは 400/500/700
- **JP は名前付きサブセット（`japanese-*.css` + `latin-*.css`）を選んだ**。番号付きの `400.css`（unicode-range で 124 面に分割）を先に入れて測ったら、`document.fonts.load('400 16px "Noto Sans JP"')` が**マッチするのは 2 面だけ**（全 382 面中）＝「待ったつもりで、描画に要る範囲は未ロード」という**今直している不具合と同型**になる。1 ウェイト = 1 面に寄せた。代償: ja を人が初回表示するとき 1MB/ウェイト（範囲分割なら数十 KB）。VRT は `locale:en` 固定なので撮影には無関係
- **実測（ローカルビルドを CI と同じ http-server で配信）**: 外部ホストへのリクエスト **0 件**（15 プローブすべて）／`fonts.load()` 後の `check()` が 10/10 true／実描画は Noto Sans。**sans のベースラインは動かない見込み**＝同じ文字列の advance width が Pages（Google Fonts）とローカル（自前）で `medium span` 116.25 / `Category` 68.188 / `This field is required.` 138.719 と**小数第 3 位まで一致**
- **`storybook-static` は 33 → 40.9MB**（フォント 7.9MB。JP 7.0 / sans 0.49 / mono 0.43。番号分割のままだと 52.3MB だった）
- **ライセンス**: OFL-1.1 は再配布を明示的に許諾（条件 2 = ソフトウェアと一緒に配布可、ただし著作権表示とライセンス本文を同梱）。フォントはリポジトリに入れていない（node_modules 由来）が、**公開サイトは woff2 を実際に配信する＝再配布**なので `public/fonts/` に OFL 全文 3 本＋`NOTICE.txt` を置き、`staticDirs` 経由で `/fonts/…` として同じサイトから配信されることをビルド後に確認。**`@fontsource/noto-sans-jp` 同梱の LICENSE は先頭が "Google Inc." だけで上流（google/fonts `ofl/notosansjp/OFL.txt` = `Copyright 2014-2021 Adobe …, with Reserved Font Name 'Source'`）より弱い**ため `NOTICE.txt` に両方記載。詳細は `ASSETS.md`
- **利用者・AI 向けの明示**: `README.md`（英語正本）/ `README.ja.md` に「Fonts（任意・非同梱）」節（トークンのスタック表＋`@fontsource` の opt-in 手順）。`llms.txt` にも 1 項追加し、**「`wimui/fonts.css` を発明するな（存在しない）」**を明記（エージェントが一番やりそうな捏造）
- **dist には入れない方針**（2026-07-30 決定）: `styles.css` は「トークン＋コンポーネント CSS だけ、外部リクエストもアセット依存もゼロ」の契約で、`@font-face` を入れると相対アセットパス依存が生まれる／JP は 1MB/ウェイトが全消費者に乗る（CSS の `@font-face` は tree-shake 不能）／OFL の notice 義務が利用者のビルド成果物へ伝播する／**sans トークンも元から「Noto Sans を先頭に置くが同梱しない」形＝それが意図された契約**。将来ゼロ設定で揃えたくなったら `styles.css` に混ぜず別サブパス（例 `wimui/fonts.css`）として出す

**mono の契約が壊れていた（5 件。ライブラリ側の実バグ）**。`--wim-font-family-mono` は `"Noto Sans Mono"` を先頭に置くのに **Storybook は sans しか読んでいなかった**ため、9 コンポーネント（ベースライン 62 枚）は宣言を全部素通りしてランナー既定の等幅で描かれていた＝**公開サイトの見た目も閲覧者の OS 依存**だった。mono も同梱したうえで以下を修正（すべて実描画を CDP `CSS.getPlatformFontsForNode` で確認）:

| # | 場所 | 症状 | 実測（前 → 後） |
|---|---|---|---|
| 1 | `ErrorBoundary` `.details` | `var(--font-family-mono)` ＝ **`wim-` プレフィックス欠落**（コンポーネント SCSS 内で `--wim-` 始まりでない `var()` を全件洗い、実害はこれだけ。他は `--_bg` 等の意図的なローカル変数） | computed `monospace` → `"Noto Sans Mono"` |
| 2 | `typography/Code` `.root` | トークンを使わず独自スタック直書き（`ui-monospace…`＝Noto Sans Mono を含まない）＝**同じページで `CodeBlock` と別書体**になる | painted → **Noto Sans Mono:13** |
| 3 | `CodeBlock` `.code` | `.pre` はトークンだが本文が入る内側 `<code>` に **UA の mono が勝つ** | painted **Consolas:286 → Noto Sans Mono:286** |
| 4 | `Code` `.block code` | block の本文が内側 `<code>`＝同型 | painted → **Noto Sans Mono:55** |
| 5 | `ErrorBoundary` `.details > code` | スタックトレースが子 `<code>`＝同型 | painted **Consolas:924 → Noto Sans Mono:924** |

**3〜5 は「①②を直して測った結果」から出た**（`.pre` も `.details` も computed は正しく `"Noto Sans Mono"` を返すので、ソースを読むだけでは出ない）。→ ガード案は **T48**。`StreamingText`/`Markdown`/`MarkdownRenderer`/`Kbd`/`CommandPalette` は元から無事、`Terminal`/`CodeDiffViewer` は span なので該当なしと全件確認。

**この残件は T67 になり、済んだ（2026-08-05、#243）**: `code, kbd, samp, pre` に `@include font.mono-family` と `font-size: 1em` を `@layer base` で当てた。**当時の見立ては 2 点で間違っていた** ── ①`reset.css` は素の `code` に padding も背景も当てていない（当てていたのは `.wim-docs-container code` のほうで、そちらは T48 / #190 で解決済みだった） ②症状は書体だけでなく**サイズも落ちていた**（本文 16px に対し `monospace` 13px＝81%）。詳細は T67 の行。

**VRT への影響**: **mono を含む 62 枚 + インライン `Code` が出てくる画面は動く**（ランナー既定の等幅 → Noto Sans Mono）。③の全面撮り直しと同じ回に混ぜるのが最も安い。

##### 「sans は動かない」の予測は外れた（2026-07-30。**サブセットを 2 面入れると `<input>` の既定幅が変わる**）

**予測**: advance width が Pages と小数第 3 位まで一致したので sans のベースラインは動かない。**実際**: #171 の VRT compare で **141 枚**が落ち、うち **66 枚は mono（予測どおり）だが 75 枚は sans だけの画面**（`Input` / `InputBase` / `InputGroup` / `Label` / `DatePicker` / `CreditCardInput` / `TagInput` と、それらを含む Patterns 各種）。

**真因（実測）**: **`@fontsource` のサブセット別 CSS は `unicode-range` を持たない。** そのため同じ family+weight を 2 面（`latin` と `latin-ext`）宣言すると、CSS の font matching は**最後に宣言した面を全文字に使う**。そして**サブセットファイルごとに平均文字幅（OS/2 `xAvgCharWidth`）が違う**ため、**幅指定の無い `<input>` の既定幅（`size=20` 相当）が変わる**。実測: `Label - Default` の input が **204px（Pages） → 220px（latin+latin-ext）**。字形の advance width は不変（＝最初の計測は正しかった）で、動いたのは**箱の幅**。ストーリーは中央寄せなので箱が 16px 広がると中の文字も横にずれ、diff 画像では「文字がずれた」ように見えていた。

**対策**: **1 ファミリー × 1 ウェイトにつき 1 面だけ読む**。`latin-ext`（sans / mono）と JP の `latin` を落とし、sans/mono は `latin` のみ・JP は `japanese` のみにした（`japanese` は U+0000-00FF を含むので ja の ASCII もこれで出る）。ext の文字（ā ł ș 等）は対応ロケール en/ja/pt に不要。必要になったら**自前の `@font-face` に `unicode-range` を書く**こと。

**検証**: 修正後、`Label - Default` の input が **204 / label 206 で Pages と完全一致**。以前落ちた sans 系 5 ストーリーも `inputgroup--basic` 204 / `datepicker--default` 245.188 / `creditcardinput--default` 222 / `taginput--disabled` 132 / `input--default` 204 と**すべて Pages と一致**。mono 4 面は引き続き Noto Sans Mono を実描画。

**教訓**: **「字幅が同じ」は「レイアウトが同じ」ではない。** フォント差し替えの影響を測るときは、グリフの advance だけでなく**フォントメトリクスから算出される箱**（`<input>`/`<textarea>` の既定幅、`ch` 単位、`field-sizing: content`）も測る。今回は advance だけを見て「動かない」と言い、VRT に 75 枚で否定された。

##### ③と④の順序を入れ替える必要がある（2026-07-30。update の挙動を実測して判明）

サブセット修正後の VRT は **76 枚が赤**で、内訳は **mono を描くコンポーネント 66 + mono テキストを含む画面 10** ＝ 意図した変更のみ（sans 75 枚は消えた）。画面側の 10 枚も追い切って、Patterns で mono を使う 3 ファイル（`Admin/IntakeQueue` / `Form/WholesaleApplication` / `Marketing/Marketing`）に限られ、**同じファイルでも mono が写らないストーリーは緑**（`intake-queue-empty` は通過、`wholesale-account` は受付番号を inline `Code` で出す `--accepted` だけ赤）ことを確認。4 つ目の `AI/AI` は `patterns-ai--` が除外リストにあり撮られていない。

**そのうえで update を 1 回流したら、更新されたのは 77 枚だけだった**（76 + 既知フレークの `voicevisualizer--large-height`。フレークは update 時にたまたま 400 を超えて撮り直された＝**任意のフレームが焼き付く**ので、T43 を先に片付けるほうが望ましい）。

**つまり「③ベースライン全面撮り直し」は現行の閾値では成立しない。** `--update-snapshots` は**設定された閾値で失敗したスナップショットだけ**を書き換えるので、閾値 400 のままでは「2 ランで同じ差分が出る 348 枚（うち 50px 超が 211 枚）」は 1 枚も撮り直されない。**正しい順序は ④（閾値を 50 へ）→ ③（update）→ ⑤（受け入れ条件の実証）**。あるいは撮り直しのときだけ `maxDiffPixels: 0` で update を流す（計測ブランチと同じ設定）。この順序を守らないと、閾値を下げた瞬間に 211 枚が赤くなる。
##### ハーネス修正の 1 回目は失敗した（2026-07-29 夜。**⚠️ 結論は 07-30 に訂正済み**＝上の「①の結果と真因」。当時の判断を残すための記録）

`fonts.load` + インジケータ待ちを入れて計測ランを 2 本流した結果、**この修正は非決定性を減らしていない**（**←この結論が誤り**。40 件の内訳を割ると 28 件のうち 24 件は消えており、新規はラン単位に偏っていた。件数だけを見て「悪化」と読んだのが敗因）。

| | 修正前 | 修正後 |
|---|---|---|
| 真に非決定なケース | 28 | **40**（2 本で値が振れた 14 ＋ 片方だけ 26） |
| 最大差分 | 19,164（run1） | **11,419**（run4 の `Patterns/Form - Signup Form`）／`Dashboard - Editable` 10,215 |

**狙った外れ値は消えた**（`FocusTrap` 19164 → 0 ／ `IndicatorBase - Variants` 6727 → 127 ／ `ThreadList` 6325 → 95 ／ `SourceCitation` 1556 → 0 ／ `ScatterChart` 1281 → 0）が、**別のストーリーが振れるようになった**（`Alert - Info` 67 → 1611 ／ `Select - Preselected` 8 → 1397 ／ `Transfer - Disabled` 100 → 1898）。件数では悪化。

**見立て（未検証）→ ⚠️ 07-30 に実測で否定**: 「`document.fonts.load()` は `@font-face` が**未登録なら何も待たずに解決する**ので素通りになっていた」と見立てたが、公開 Storybook を CDP で測ると**登録は 400 面できていた**（`check()` は 10/10 で false、`load()` は 1 面マッチ）。素通りではなく**バイナリの到着待ちがネットワーク越しだった**のが真因。※「run4 でだけ落ちた顔ぶれ（`Breadcrumb` / `Grid` / `Span` / `Table` など互いに無関係な多数）は**テキスト全体がずれる＝フォント差し替え**の兆候」という読みは**当たっていた**（diff 画像でも確認）。

**次に試す形 → 不要になった**: 「`page.goto` を `waitUntil: "load"` にしてスタイルシート到着を待つ」案は、上の実測（登録は済んでいる）から効かない。実際の対策は待ちの改良ではなく**供給元をローカルへ**（`@fontsource` 自前化）。

**教訓（当日 2 回目の同型ミス）**: **1 ラン見て「効いた」と言わない。** 非決定性の評価には最低 2 ラン要る。同日、`SegmentedControl` の既定経路でも「修正後しか測っていない」で同じ誤りをしている（2 枚目の記録参照）。**07-30 に追加された教訓**: **2 ラン取ったうえで、件数だけを見て「効いた/効かない」を言わない。** 40 という数字は悪化に見えたが、内訳（消えた 24 / 残った 4 / 新規がラン単位に偏る 25）を割ると逆の結論になった。**差分は「件数」ではなく「同じ入力で 2 回同じ値が出るか」で分類する**。

**PR の状態**: 07-29 時点では「draft のまま・マージしない」としたが、**07-30 に真因が判明したため draft を解除**（フォント自前化 + mono の実バグ 5 件を追加）。CI は 13 チェック緑で所要時間の悪化も無い（VRT compare 6m35s〜7m33s＝通常どおり）ことは当時から確認済み。

#### T32 の 2 枚目のあと（2026-07-29 の再開ポイント）

**0.7.0 を公開した**（provenance 付き、Pages 再デプロイも成功）。2 枚目で出た 14 件のうち 11 件を出荷した「既定が変わる回」。残り 3 件は ⑭ → **T44**、パレット由来 → **T45**、T38 本体 → **0.8.0**。

**明日ここから: 2 枚目の回避策 4 つを外す。** 0.7.0 が本当に効いたかを測る最短の方法で、新しい画面より圧倒的に安い（`WholesaleApplication.stories.tsx` の編集だけ、i18n キーの追加なし）。

| 外すもの | 対応する修正 | 期待 |
|---|---|---|
| `Alert` の `titleTag="h3"` | ④ | 削除するだけ。**ピクセルは動かない**はず（h4→div が VRT 緑だった実績） |
| `SegmentedControl` の pt 短縮ラベル（"Quinzenal" → "A cada duas semanas"） | ⑦ | 元の語に戻して 390px で横スクロール 0 を確認 |
| `Fieldset` を使わず `Card` 直下に並べている箇所 | ⑨ | `variant="plain"` へ。`<fieldset>`/`<legend>` の意味論が戻る |
| 単位のラベル併記「（kg）」 | ⑪ | ラベルから外して `suffix` へ |

**判定**: 4 つとも外せて画面が素直になれば 0.7.0 は当たり。外せないものが残れば**そこが次に直す場所**。どちらに転んでも次の一手が決まる。VRT のベースラインは動くので最後に update を 1 回 → **close → reopen**（上の運用メモ参照）。

**その結果で分岐**: 全部外せた → 3 枚目（AI アシスタント画面）へ。外せないものが残った → その修正を先に。**→ 4 つとも外せた**（⑦ だけは `SegmentedControl` 本体を直してから）。**次は 3 枚目**。

##### 回避策を外した結果（2026-07-29 実測）

**4 つとも外せた。** ただし ⑦ だけは「外したら壊れた」ので、**`SegmentedControl` 本体を直してから外した**（下記）。

| 外すもの | 結果 | 実測 |
|---|---|---|
| `Alert` の `titleTag="h3"` | **外せた** | 予測どおり**ピクセルは動かない**。BEFORE の `h3` と AFTER の既定 `div` がボックス完全一致（x=391 / y=219.5 / w=760.2 / h=21、15px・600・行高 21px）。見出しは H1→H2 だけになり heading-order の余地が消えた |
| `SegmentedControl` の pt 短縮ラベル | **外せた**（本体の修正が要った） | まず**そのまま外すと壊れた**: 390px の pt で `A cada duas semanas` は 164px、枠は 82px ＝ 半分で省略（`A cada d…`）。ページ横スクロールは 0 のまま＝#149 が直したのは**そこだけ**だった。**しかも短縮ラベルを戻した状態（＝0.7.0 の出荷形）でも省略していた**: en 768px の `Every 2 weeks`（107 → 93px）、pt 390px の `Sob pedido`（86 → 82px）。**600px では収まり 768px で切れる**（`cols={{ base: 1, sm: 2 }}` の 2 カラム化直後がいちばん狭い）。→ 下の修正後に長い pt ラベルへ戻して省略ゼロを確認 |
| `Fieldset` を使わず `Card` 直下 | **外せた**（ライブラリ側の追加修正が要った） | 各ステップのフィールドを `Fieldset variant="plain"` + `Legend` に置換し `<fieldset>`/`<legend>` の意味論が戻った。axe は 6 ストーリー × light/dark = **12/12 緑**（スペックと同一設定）、group の accessible name = ステップ見出し |
| 単位のラベル併記「（kg）」 | **外せた** | `field_monthly` から「（kg）」を落として `suffix="kg"` へ（en/ja/pt の 3 値を編集、**キー追加なし**）。`aria-describedby` にも載る |

**⑦ の直し方（2026-07-29 決定・実装）**: **省略でも折り返しでもなく「入りきらないときだけ横スクロール」を既定のフォールバックにする。**

- **却下した案**: (a) 省略＝選択肢を選ぶ前に読めなくなる（このコンポーネントは「全部を見て比べる」のが前提）。ellipsis + tooltip も、ホバーがタッチで出ない・省略同士が判別不能・WCAG 1.4.13 の要件と overlay 依存が付いてくるので不採用。(b) 折り返し＝2 段になると 1 つの整ったコントロールに見えず「四角いボタンの群れ」になる。加えて **`useIndicator` は `offsetLeft`/`offsetWidth` の 1 行前提**なのでスライダーが破綻する。
- **実装**（`segmented-control.module.scss` の `.root` 3 行）: `grid-auto-columns` の下限を `0` → `max-content` にし、`overflow: auto hidden` を追加（スクロールバーは `CalendarHeatmap` と同じ 2xs の薄いもの）。**上限の `1fr` は据え置き**なので、余裕があるかぎり従来どおり等幅。詰まると各セグメントが内容幅を保ち、それでも入らなければ `.root` 自身がスクロールコンテナになる。DOM も prop も増やさない。
- **なぜ prop（`fitContent` / `variant="fixed|auto"`）にしなかったか**: 実測で **`fullWidth` の有無は狭幅では 1px も変わらない**（390/768px で `fullWidth` あり/なしが完全一致。既定が既に `width: max-content` + `max-width: 100%` のため）。差が出るのは余白があるときだけ（1280px で 398.2 vs en 373.7 / pt 309.1）＝**prop を足しても ⑦ は直らず、既定の壊れ方も変わらない**。既定のまま使う利用者が踏み続ける形は ④⑤ で一度却下している。
- **実測**: 省略は全ケースでゼロ。pt 390/320/768px でスクロール発生（368 > 298/228/332）、ページ横スクロールは 0、セグメント高さは 38px のまま（スクロールバーが高さを食っていない）。最後のセグメントが箱の端で切れる＝スクロール可能のチラ見せがそのまま成立。
- **既存への波及なし**: `SegmentedControl` の全ストーリー（small/medium/large/two-options/with-icons/icon-only/long-label）と、#149 で赤になった `QueryBuilder`・`Token/Density`、`ThemeToggle` を 1280px で実測し、**すべて等幅のまま**（`with-icons` は #149 の記録と同じ 101.6px×3）。
- **残る判断（未着手）**: 提案にあった **(d) ツールバー等の狭小固定領域で `Select` へ変形**は入れていない。スクロールさせたくない領域向けの別軸なので、必要になった時点で prop（例 `overflow="scroll" | "select"`）として判断する。

**⑨ で出た角 2 件（どちらもライブラリ側）**:

0. **`Legend` の型・実装・ドキュメントが三者不一致だった**（調査で判明、**案 A を採用して修正**）。①`label` が必須なので **docs の Usage サンプル `<Legend>Group title</Legend>` が tsc に通らない**（実証: TS2741。ストーリーは `{...args}` 経由なので通っていただけ）②children 経路と `label` 経路で**太さが違う**（実測 700 / 500。後者は `FieldLabelContent` の `.text` が medium で上書き）③`requiredLabel` / `optionalLabel` が**型では受かるのに転送されず** `<legend requiredlabel="必須です">` として DOM に漏れ、バッジは既定文言のまま（実証済み）。**対応**: `label?` へ緩和し、ラベルもバッジも無ければ `FieldLabelContent` ごと描かない（空の `<div><span></span></div>` が消える）＋ `requiredLabel`/`optionalLabel` を転送。**非破壊**（既存呼び出しは全て通る。`check:api` はスナップショット対象外で更新不要）。テスト 3 本を追加し、**旧実装に戻すと 3 本とも落ちることを実証**。申込画面は `<legend><h2 class="wim-title">…</h2></legend>` になり、`<span>` 内に見出しを入れる content model 違反が消えた。②は **700（bold）に統一**（2026-07-29 決定）＝ 枠を落とした `plain` では節を区切るのが文字の強さだけになるため。実装は `FieldLabelContent` の `.text` を `var(--wim-field-label-font-weight, var(--wim-font-weight-medium))` にし、`legend.module.scss` の `.root` でだけ bold を差す。**`--wim-field-label-font-weight: inherit` は不可**（カスタムプロパティの値としての CSS 全域キーワードは「親の同名プロパティを継承」と解釈され、値が空に落ちてフォールバックの medium になる。実測で判明）。他の `FieldLabelContent` 利用側（Input / NumberInput / CounterTextarea / 申込画面のフィールド）は **500 のまま**を実測で確認。**VRT**: `Fieldset` の 3 ストーリーは legend のテキストが太くなるのでベースラインが動く
1. **`.plain` が `Legend` の `padding-inline: xs` を残していた** — 見出しがフィールドより **4.8px 右にずれる**（実測 h2 x=360.6 / fieldset・フィールド x=355.8）。枠を切り欠いて見出しを載せるための padding なので、枠の無い `plain` では不要。`fieldset.module.scss` の `.plain > :global(.wim-legend) { padding-inline: 0 }` で 355.8 に一致することを実測
2. **`Legend` は `label` が必須**で `children` は label の後ろに出るため、見出しタグ（h2）を保ったままグループ名にするには `label={<Title tag="h2">…</Title>}` と流し込むしかない（DOM は `<legend><div><span><h2>`）。「legend を見出しの器として使う」経路が無い

**副作用（VRT ベースラインは動く）**: 縦のリズムが 4px 変わる。`Legend` の `margin-bottom: md`（8px）が元の `Stack gap="2xs"`（4px）より広く、`Fieldset` の `gap: xl`（12px）が `Card` 直下の Stack gap（16px）より狭いため、Alert のあるストーリーでフィールド以下が 4px 上がる（実測 divider y=645.5 → 641.5）。

**出し方（2026-07-29 決定）**: **PR は 2 本に割る。** ①**ライブラリ**（`Fieldset` の plain の legend padding + `Legend` の `label?` 緩和と `requiredLabel`/`optionalLabel` 転送 + legend の太さ統一 + `SegmentedControl` の横スクロール、**changeset は minor**＝`.changeset/lazy-donkeys-scroll.md`）②**画面**（回避策 4 つを外した `WholesaleApplication.stories.tsx` + i18n 3 値、VRT update 込み）。**①が先**（画面側は①が main に入らないと緑にならない）。VRT ベースラインが動くのは `Fieldset` 3 ストーリー（legend が太くなる）と申込画面（`Fieldset` 化で 4px）。

**出荷（2026-07-29 完了）**: ①=**#165**（マージ済み。changeset minor は次リリースに同乗）／②=**#166**（マージ済み）。**VRT の予測は両方当たった**: #165 で落ちたのは `Fieldset` の 3 ストーリーだけ（light/dark、930〜1096px）で `SegmentedControl` の消費者は 1 枚も動かず、#166 で落ちたのは申込画面 6 のうち **5**（動かなかった `accepted` は `Fieldset` を使わない唯一のストーリー）。**依存 bump の切り分け**: #160（Dependabot minor/patch 22 件。Storybook 10.5.3→10.5.5、`@radix-ui/react-slot` 1.3.0→1.3.3 を含む）を #165 のあとにマージし、main で VRT compare を単独 dispatch → **緑**＝bump 由来の描画ドリフトはゼロ。この順で流したので、赤が出たときにどちらの原因か迷わずに済んだ。<br>**運用メモ（CI-5 の再現）**: VRT update のコミットバック head では、両 PR とも 6〜7 ワークフローが `action_required` で止まり `gh pr checks` が「no checks reported」を返した。`gh api -X POST .../actions/runs/<id>/approve` で全部承認すれば通常どおり走り、required checks も揃う（#165=14 チェック緑、#166=13 チェック緑）。

**次の一手（2026-07-29 決定）**: **①がマージされた時点で 2 枚目は完了**とし、**3 枚目（AI アシスタント画面）へ進む**。

**観察（穴とまでは言わない）**: `suffix` は `fullWidth` の数値フィールドだと右端に離れて置かれる（`45 ……… kg`）ので、単位と数値の視覚的な結び付きは弱い。

**ゲート**: tsc / eslint / stylelint / check:api / check:aschild / audit:hardcoded / i18n:check / check:imports / audit-mdx / check:slop（52 のまま）すべて緑。unit は触った 6 コンポーネント 93 pass。axe はスペックと同一設定で **12/12 緑**（申込画面 6 × light/dark）＋ SegmentedControl 消費者 4 ストーリー × light/dark も緑。横スクロールは **6 ストーリー × en/ja/pt × 390/768/1280 の 54 通りすべて 0**。**VRT はローカル未実行**（Fieldset 化の 4px 差でベースライン更新が要る。SegmentedControl 側は 1280px 実測で等幅不変＝差分は出ない見込みだが未検証）。

**画面作りをいつ止めるか（停止条件の提案・未決）**: 穴の数は減っていない（1 コンポーネントあたり **0.67 → 1.00**。1 枚目 15 個で 10 件、2 枚目 14 個で 14 件。カバレッジ 74/208 = 36%）。ただし追うべきは数ではなく**種類**で、2 枚目には既知の型の再発が 3 件混じっていた（⑩ `Text` の折返し ≡ 1 枚目 ⑥ の `Code`／⑥ inline `Code` と ⑫ `Icon` の色 ≡ どちらも T41 型）。**その画面の穴の過半が「既知の型の再発」になったら、画面作りを止めてガード（T40 / T41）へ移る**、を停止条件にしてはどうか。T38 で学んだとおり、カテゴリでの先送りには自然な停止点が無いため、先に決めておく。

<details><summary>この 2 枚目で「測らずに言って外した」3 件（同じ轍を踏まないための記録）</summary>

1. **`SegmentedControl` の既定経路** — 「修正前と同一＝退行なし」と報告したが、**修正後しか測っていなかった**。実際には `1fr` → `auto` が全セグメントの等幅を壊しており、1280px の `with-icons` でトラックが 101.578px×3 → 78.5/88.7/96.7 に割れていた。VRT 4 シャードが教えてくれた（`QueryBuilder` と `Token/Density` も同じ理由で赤）。直したのは下限だけ（`minmax(0, 1fr)`）
2. **`backdrop-filter` は流し込みでは無意味** — 実測すると単色の上でも 5.49%、模様の上では **99.70%** のピクセルが変わる
3. **「`Alert` の影を外せばよい」** — 外すと `intent="default"` が輪郭を失う（面 1.07:1、`border` は既定で `solid transparent`）。真因は T45（パレットに面の分離が無い）

いずれも「測ってから言う」で防げた。逆に**測ってから立てた予測は当たっている**: `Alert` の h4→div は「ピクセルは動かない」と実測から予測し、VRT が緑で裏付けた。

</details>


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

### Form 値型の約束（公開契約）
- **クリア可能スカラー**: 制御時の空は `null`。`undefined` は「非制御 / prop 未指定」のみ。
- **DatePicker**: `value?: Date \| null` / `onChange?: (date: Date \| null) => void`
- **error**: メッセージ付きフィールドは `error?: string`。葉のトグル（Checkbox / Switch / Radio）は見た目用 `error?: boolean`（RHF では `invalid`）

### トークン・セマンティクス（公開契約）
- **`text-on-disabled`**: `--wim-color-disabled` **塗り上**の前景（`text-on-*`）
- **`text-disabled`**: 通常サーフェス上の無効・非活性テキスト
- **`disabled`**: 塗りのみ。文字色に使わない
- Avatar default の disabled パレット流用は**意図的**（ニュートラル用の新規トークンは増やさない）
- サーフェス: `surface-app` / `surface` / `surface-variant` / `surface-hover` / `surface-subtle` / `surface-subtle-alpha` / `surface-void` / `surface-inverse`
- 反転: `text-on-inverse` / `text-muted-on-inverse` / `border-inverse`
- Overlay: `overlay` / `overlay-soft` / `overlay-strong` / `overlay-medium` / `overlay-sidebar`
- Intent 状態: `primary-muted` / `primary-soft` / `primary-subtle` / `primary-fill`
- 絶対白: `white`（旧 `text-white` / `bg-white`）
- 詳細: `DESIGN.md` / `SKILLS.md` / Colors ガイド i18n

### CSS / テーマ契約（公開契約）
| 項目 | 契約 |
|---|---|
| `wimui/styles.css` | **必須** — `:root` `--wim-*`（ダーク・密度マップ含む）+ コンポーネント CSS |
| `wimui/reset.css` | **任意** — 意見の強いリセット/base |
| `data-theme` | `<html>` に載せる。`light` \| `dark`。省略で OS 追従。**推奨は `WimProvider`** / `setWimTheme` / `ThemeToggle` |
| `data-density` | `<html>`（または祖先）。**推奨は `WimProvider`** / `setWimDensity` / `getWimDensity`。`comfortable` \| `compact` |
| UMD | `wimui.umd.css` に styles（トークン+コンポーネント）と reset を同梱 |

ドキュメント: README / Getting Started → Installation / Token → Theme・Density / Architecture → CSS Strategy / `DESIGN.md` / `SKILLS.md`

### peer サポート行列（公開契約）
| peer | サポート | `package.json` |
|---|---|---|
| `react` / `react-dom` | **19 のみ** | `^19.0.0` |
| `zod`（`wimui/rhf`） | **4 のみ** | `^4.0.0` |
| `@hookform/resolvers` | 5.1+ | `^5.1.0` |
| `react-hook-form` | 7.43+ | `^7.43.0` |

React 18 / zod 3 は非対応。詳細は README。

### 公開 API サーフェス（凍結・確認済）
| 層 | 契約 |
|---|---|
| バレル | `wimui` / `wimui/<category>` / `wimui/rhf` / `wimui/tokens` / `wimui/icons`（公開） |
| deep path | **廃止** — `wimui/form/Button` 等は `exports` に無い |
| CSS / locales | `styles.css` / `reset.css` / `locales/*` |
| 非公開 | `_internal` 等（`exports` に無し） |

- `check:api` v2: `package.json` exports マップ + バレルシンボル → `api-snapshot.json`
- 変更時のみ `npm run check:api:update`
- **やらないこと**: コンポーネント deep path（`./form/*` 等）を `exports` に再追加しない

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

### リリース手順で毎回引っかかる 2 点（2026-08-02・0.12.0 で実測）

1. **bot が push した head はチェックが「無い」のではなく `action_required`（承認待ち）で止まっている。** `gh pr checks` は「no checks reported」と返し、PR は緑にも赤にもならないまま**マージ可能に見える**。0.12.0 では 2 回起きた: ①機能ブランチの VRT コミットバックで **8 本**、②`changeset-release/main`（Version Packages PR）で **5 本**。②は changesets が毎回ブランチを作り直すので**リリースのたびに必ず起きる**。承認は `gh api -X POST repos/<owner>/<repo>/actions/runs/<id>/approve` を対象ぶん。<br>なお `changeset-release/main` では VRT と a11y は起動しない（Lint / Unit Test / Tarball Smoke / Dependency Audit / Bundle Size の 5 本のみ）。中身がバージョンと CHANGELOG だけなので、実質の担保は直前に main で走ったぶんになる。
2. **`release` Environment の承認は 2 回要る。** 1 回目（changeset を含む main への push）は **publish しない** — 未消化の changeset があるので changesets action は「Version Packages PR を開く」分岐に入る。実際に npm へ出るのは 2 回目（Version Packages PR をマージした後）。承認前にどちらなのかは `.changeset/*.md` が残っているかで判別できる。

**解消が確認できた 2 件**（当座の回避策はもう要らない可能性が高いが、毎回確認はする）: ①VRT コミットバックへの `[skip ci]` 混入は起きず、Deploy は機能マージ・リリースの両コミットで成功した ②`check:llms` がリリース PR を構造的にマージ不能にする件は `version:packages` が `changeset version && npm run llms:build` になっているため再発しない（0.12.0 の `llms.txt` が v0.12.0 で出ていることを公開 tarball で確認済み）。

**公開後はパイプラインの緑ではなく tarball を見る。** 0.12.0 では `npm pack wimui@0.12.0` を展開して、バッジの `text-on-danger`・`Timeline` の `text-*`・`reset.css` 側のリンク色・`llms.txt` のバージョンと "Not in scope" 節・レシピの `as const`・README のアイコン例を実物で確認した（`src/base.scss` は `styles.css` ではなく **`reset.css`** に入る点に注意）。

---

## 完了ログ（直近）

### 2026-07-14
- peer / サブパス説明を強化（なぜルートに無い・import 表・`peer-imports.json`）。公開型ショートリストと Colors の `--wim-comp-*` 表記を更新
- ブランド色（primary）差し替え手順を README / Getting Started に追加（role 上書き・`primary-rgb` 注意）
- 旧トークン参照掃除: Storybook/docs の `--wim-color-bg-surface` 等 → 現行 `surface*` / `border-secondary`。locales の tokens_desc も更新。`StackComponent` 型エイリアス削除
- トークン追加ルール（palette / role / `--wim-comp-*`、近傍別名禁止）と複合 UI レシピ優先を RULES / SKILLS に明文化
- 品質ゲートを PR テンプレ（`.github/pull_request_template.md`）と scaffold 案内・RULES にチェックリスト化（check:api / asChild / PX / i18n / imports）
- Form 値・エラー契約を SKILLS / README に固定（ClearedValue=`null`、`error` string vs boolean）
- i18n 境界を RULES に明記: ランタイム（内蔵・使用キーのみ・3言語必須）vs ドキュメント（`docs_*`・Storybook のみ・長文は en 正本→sync）
- Core / optional の見せ方整理: README 先頭にスコープ表、Getting Started（`Configure.mdx`）に同内容。モノレポ化は対応予定なしのまま
- コンポーネント色の公開降格: avatar / heatmap / carousel / chat-bubble / terminal / control-default / close-hover / decoration-highlight / overlay-control* を `--wim-comp-*`（`src/styles/_component-colors.scss`）へ。未使用 `chart-*` / `feedback-*-base` 削除
- トークン role 大規模リネーム（B）: `surface-app|subtle|void|inverse`、`overlay*`、`primary-muted|soft|fill`、`white`、`*-inverse`
- トークン別名刈り込み（A）: `surface*` を正規化。`bg-component|secondary|hover` / `surface-inverted` / `text-on-dark` / `surface-glass` を廃止（checkpoint `464ebb67`）
- CSS 統合: 必須は `wimui/styles.css`（トークン+コンポーネント）。`tokens.css` 廃止。`reset.css` は任意のまま
- Selectbox → Select 改名（`Select` / `SelectOption` / `SelectProps` / `useSelect`。alias なし）
- peer 行列を一点集中: React `^19.0.0` / zod `^4.0.0` のみ（18・zod3 は非対応）
- Provider 正面化: `WimProvider` / `useWim` / `setWimTheme` を追加。`data-theme` / `data-density` 契約は維持
- deep path 廃止: コンポーネント wildcard exports を削除。公開はバレルのみ
- 緑地視点の取り入れ候補を IMPROVEMENTS に記載
- 公開 API 凍結 v2 / CSS・テーマ契約 / トークン棚卸し / Form 値型（DatePicker `null`）を確定

### 2026-07-13
- asChild 残り（低優先）: ButtonGroup / ThemeToggle / RangeSlider / Rating / CopyButton / BackTop
- Form レシピ: Patterns に DatePicker / Rating / Switch（`WithPickers`）
- 密度適用拡大: `--wim-field-padding-*` / `--wim-control-item-padding-*` / `--wim-list-item-padding-*`
- Form 連携（`wimui/rhf`）、密度トークン基盤、RTL 対応予定なし
- Docgen Import / Props i18n 複合 / `PX_BASELINE` → 0
- UI 微修正、npm 公開の破壊なし準備、VRT ベースライン更新

### それ以前（要約）
- VRT・ダーク安定化、Toolbar / Menubar、asChild 高中優先、エクスポート DX、Props i18n leaf など一式

##### ⑤ 受け入れ条件の実証（2026-07-30 **達成**）

`FeedbackIcon` を #142 以前（danger / warning / info が `CircleIcon` だった版）に戻すと、閾値 50 のスイートは **`Alerts & Notifications` 106 件中 36 件で落ちる**（light 18 / dark 18）。事前の見積もりは「5 コンポーネント × light/dark = 10 枚」だったが、実際にはアイコンを描くストーリーが 1 コンポーネントにつき複数あり、Alert / Banner / Notification / Snackbar / Toast の 36 枚が鳴った。

**実測した信号（ローカル Windows / chromium）**: Alert - Danger 69px、Banner - Warning 70px、Notification - Info 88px、Snackbar - Danger 70px、Toast - Info 68px。

これが結論の核心で、**同じ差分が旧閾値 400 では 1 枚も落ちない**。#142 が 6 コンポーネント中 5 つで素通りしたのは、まさにこの桁の差による。16px グリフの差し替えは数十〜百数十 px にしかならず、400 は数学的に検出できない値だった。

なお閾値の根拠として記録していた「信号 139〜176px」は別環境での測定で、今回の Windows ローカルでは 68〜88px と約半分だった。**環境によって信号量は 2 倍動く**が、50 < 68 < 400 の関係は変わらないので閾値 50 の判断には影響しない。ジッタ側の残存が 11px（Tabs - Scrolling）であることと併せて、50 は下から 6 倍・上から 1.4 倍の位置にある。

**鳴ってはいけない経路で鳴らないこと**: #176 の CI は正しいコードのまま VRT compare 4 シャードすべて緑（撮り直した linux ベースライン 226 枚に対して）。Lint & Type Check / Vitest も緑。

**手順**（再現するとき。`test/vrt-threshold-50` ブランチで）:

1. 正しいコードのまま `npm run build-storybook`
2. `CI=1 npx playwright test vrt/vrt.spec.ts --update-snapshots -g "Alerts & Notifications"`（106 テスト）でローカル baseline を撮る
3. `git show 5a315dfc4~1:src/components/_internal/FeedbackIcon.tsx > src/components/_internal/FeedbackIcon.tsx`
4. **もう一度 `npm run build-storybook`**
5. `CI=1 npx playwright test vrt/vrt.spec.ts -g "Alerts & Notifications"` → 落ちた枚数と px を確認
6. 片付け: `git checkout -- src/components/_internal/FeedbackIcon.tsx` と `rm -f vrt/vrt.spec.ts-snapshots/*win32*`（win32 は実験用の未追跡ファイル。**絶対にコミットに混ぜない**）

**踏んだ落とし穴（同じ轍を踏まないため）**:

- **④ の再ビルドを飛ばすと実証が成立しない。** VRT は `storybook-static` に対して走るので、`src/` を書き換えてもビルドしないと反映されない。1 回目の試行はこれで `106 passed` になり、「落ちなかった」ではなく「変更が届いていなかった」だった
- **テストタイトルは `Components/Alerts & Notifications/…` で `&` が入る。** `-g "Alerts Notifications"` は 1 件もマッチしない
- **`-g` が 0 件マッチでも Playwright は静かに成功する。** 必ず実行件数を見ること（106 なのか 0 なのか）
- **px を採りたいなら出力を `tail` で切らない。** 落ちた一覧はサマリに出るが px 値は各失敗ブロックにしかないので、切り詰めると証拠が残らず取り直しになる

##### 撮り直した 226 枚の仕分け（2026-07-30。**回帰は出なかった／見逃していた修正が 200 件超あった**）

閾値 50 でベースラインを撮り直した `57a6c90bf` は **226 枚すべてが M（変更）で追加は 0**。つまり「新しいストーリーが増えた」のではなく、**既存の絵が 226 枚変わっていたのを誰も見ないまま新ベースラインとして確定した**。全部が旧閾値 400 未満＝**#142 と同じ隠れ方をした差分の集合**なので、中身を割った。

**位置による分類は使えなかった。** 差分の広がり（クラスタ数・縦方向のスパン）で「フォント由来＝全面に散る／コンポーネント変更＝一箇所」を分ける当初案は、`Badge` や `Code - Inline` のように**そもそも小さなテキストしか置いていないストーリー**がフォント差分でも局所的に見えるため成立しない（LOCALIZED と判定された 111 件の大半がこれ）。

**履歴による帰属も単独では決まらない。** 各画像の前回ベースライン以降にそのコンポーネントのソースが変わったかを見ると 147 / 61 / 18（変更あり / 無し / パターン等で未解決）に割れるが、`_internal/FeedbackIcon`（#142）のような共有部品は component ディレクトリの履歴に出ないうえ、**#171（フォント自前化）と #175（アニメーション停止）は全画像に対するアリバイになる**。

**効いたのは差分領域の平均色の移動量**（`sqrt` 距離、旧 vs 新）。フォントのにじみは同じ前景色と背景色の間でピクセルが入れ替わるだけなので平均色がほぼ動かず、グリフ差し替え・色トークンの変更・境界線の追加は動く。この順で並べて上位と下位の両方を目視した:

| 順位 | 対象 | 変化 | 原因 |
|---|---|---|---|
| 1 | `OtpInput - Danger / Disabled` | **6 個の空箱 → `1 2 3 4 5 6`** | #141「マウント時の value が表示されない」の修正。**実バグが数週間ベースラインに写っていた** |
| 2 | `ErrorBoundary - Custom Fallback`(dark) | 成功文言が判読困難な暗緑 → 明るい緑 | text トークン切替 |
| 4 | `Stats - With Trend`(dark) | Trend が鮮やかな緑 → 淡い緑 | 同上。**要判断**（下記） |
| 13 | `SearchInput - Default` | 検索アイコンがほぼ見えない薄灰 → 濃色 | #150（`secondary` が fill 色だった件） |
| 25 | `EmptyState - Custom Action`(dark) | `+` アイコンが白 → 灰 | 同上。**要判断** |
| 61 | `Sparkline - Default`(dark) | 線が鮮やかな青 → 淡い青 | `feat(tokens): soft charts` |
| 121 | `PasswordStrength - Default` | 同色・グリフ形状のみ | フォント（#171） |
| 201 | `Badge - Outline` | 同色・グリフ形状のみ | フォント（#171） |

**境界は平均色シフト 41〜69 のあたり**にある（順位 61 はまだ実変更、121 は既にフォント）。上位＝実変更、下位＝フォント描画差、という並びは目視で両側から確認した。

**結論**: **回帰は見つからなかった。** 226 枚の大半は「**直したのに VRT が記録していなかった**」もので、T44 の主張を裏づける実データになった。とくに `OtpInput` は、コンポジション画面（T32）が見つけた実バグの修正すら VRT には最後まで見えていなかったことを示している。

**残る判断事項（デザイン判断なので単独で切る）**:

- ~~`Stats - With Trend` の上昇トレンドが淡い緑になった~~ → **済（#179）**。ティントをやめて塗り + 面色の文字にした。light は `--wim-comp-trend-up-fill`（PCCS dp12 `#306f42`）で白抜き 7.98 → 6.03:1、dark は `text-success` のまま面色の文字で 8.08:1。`danger` が既に dp2 だったのに `success` だけ dk12 だったのは「ティント上の文字」用に 1 段暗くしていたためで、塗りではその制約が効かない
- ~~`EmptyState` の `+` が白→灰で目立たなくなった~~ → **色ではなくサイズの問題だった（#178）**。`CustomAction` だけが `style={{ width: 48, height: 48 }}` をインライン指定していて、`status-content` が全ストーリーを正規化している 80px（`--wim-status-icon-size`）を上書きしていた。実測で `+` の描画は 245px、兄弟は 1292〜1847px。色は `#c4c4c4`（`text-tertiary`）で既に全ストーリー共通

**注意**: `57a6c90bf` は #176 の squash マージでリーチャブルでなくなる。上記を再現するならローカルの reflog が生きているうちに。仕分けスクリプト 3 本（クラスタ分類 / 履歴帰属 / 平均色シフト + 切り出し）はリポジトリに入れていなかった。**この「候補」は T69 になり、済んだ（2026-08-05、#244）** ── `scripts/vrt-color-shift-report.js` が `commit-snapshots` で順位表を出す。**参照コミットはこのとき退避した**（226 枚の前後 452 ファイル ＋ タグ `vrt-baseline-2026-07-30-t69ref`）ので、上の注意はもう当たらない。詳細は T69 の行。
#### T46 の初回投入とメニュー語彙ページ（2026-07-30 着手）

**済**: アイコン 2 つ（`menu` = 等長 3 本線 / `grid` = 3×3）と、**T46 の最初のエイリアス 3 件**（`Dropdown` / `HamburgerMenu` / `BentoGrid`）。`generate-llms.js` を 1 箇所拡張して `llms.txt` が `(aka Overflow Menu, Kebab Menu, …)` を出すようにした（実出力を確認）。`api-snapshot.json` も更新（アイコン追加＝公開サーフェスが増える）。

**アイコンを増やさなかったもの（判断）**: ホットドッグ / タコス・ナチョス / チョコバー / ストロベリー / ベーコン。**形の俗称であって「その形でしか表せない機能」が無い**（`filter` の漏斗がソート/フィルタ意図を既にカバー）。作れば `check:api` のスナップショットとバンドルに載り続けるので、需要シグナルが出るまで語彙としてのみ扱う。

**済（2026-08-04、T65）**: **`docs/MenuVocabulary.mdx`**。以下は起票時の設計メモで、実装との差分（俗称を SSOT から生成しない判断・列幅）は T65 の行に書いた。＝ `<Meta title="Components/Navigation Elements/Menu vocabulary" />`（既存 Overview の隣に置く）。表の列は **正式名（主）→ 俗称（副）→ 見た目 → WIM で使うもの → 避ける場面**。正式名を主見出しにするのは、俗称は言い伝えで揺れる一方 ARIA/HIG と対応が取れるのは正式名の側だから。掲載する 7 群: Overflow menu（ケバブ/ミートボール→`Dropdown`）/ Navigation drawer trigger（ハンバーガー/サンドイッチ→`HamburgerMenu`）/ App switcher（ベントー/ワッフル→`BentoGrid`・`Dropdown`）/ Filter・Sort control（ドネル/タコス→`filter` + `Dropdown`・`QueryBuilder`）/ Context menu（→`ContextMenu`）/ Speed dial（→`SpeedDial`）/ 「俗称のみ」欄（ホットドッグ・チョコバー・ストロベリー・ベーコン・パンケーキ・チーズバーガー）。**コスト**: `<T k="…" />` 必須（`check-mdx-hardcoded` はハードゲート）で**新規キー 40 前後 × en/ja/pt、ja/pt は手翻訳**（この環境は API キー未設定）。`audit-mdx` の必須セクションにも合わせること。

**PR の切り方（2026-07-31 に変更）**: 当初は「MDX まで入れて 1 本で出す」方針だったが、**アイコンとエイリアスを先に出し、MDX は別 PR**に分けた（#180 でマージ済み）。前者は検証済みで自己完結しており、翻訳待ちの MDX に出荷を人質に取らせないため。

---

## T45 の着手（2026-07-31。**ブランチ `feat/t45-surface-separation` で中断中。次はここから**）

### 決めたこと（ユーザー判断）

1. **目標は 1.3:1**（ページに対して面が分かれていると言える比）。WCAG に規定が無い（1.4.11 は UI 部品の境界と状態が対象で、カードの塗りは対象外）ため**ハウスルール**として決めた。1.3 にした根拠は発明ではなく、**dark が同じ組み合わせで 1.31:1 のまま問題なく運用できている**こと
2. **梃子は案 A = パレットを変えず role の参照先を付け替える**。DESIGN.md の「サーフェス階層トークンで面を分ける。影/枠は操作を誘導する要素だけに」に従うと、選択肢は「パレットを動かす」か「規則を書き換える」かの二択で、後者を取ると枠で誤魔化す判断がコンポーネントごとに戻るため前者
3. **dark は据え置き**。既に目標を満たしており、触ると撮り直したばかりのベースラインが再度全面的に動く

### 判明した制約

**PCCS グレースケールに 1.3 の段が無い。** 白との比は `gy9-5`=`#f5f5f5` が 1.09、`gy8-5`=`#e5e5e5` が **1.26**、`gy7-5`=`#b6b6b6` が 2.03。1 段下げると目標にわずかに届かず、次は飛びすぎる。**1.26 で妥協する**判断（差 3%。1.3 自体が目安なので、中間段を palette に足すコストに見合わない）。

### 決定済みの付け替え（`npm run tokens:build` 実行済み。**コミットはしていない**）

| role | 旧 | 新 |
|---|---|---|
| `surface-app` | `{pccs.gy9-5}` `#f5f5f5` | **`{pccs.gy8-5}` `#e5e5e5`** |
| `surface-variant` | `{pccs.gy8-5}` `#e5e5e5` | **`{pccs.gy9-5}` `#f5f5f5`** |

`surface-variant` は下げるのではなく**上げた**。ページが下がったので、カードの内側の段はページより上に置く。

### 実測（storybook をビルドして `Alert - Default` を撮影・ピクセル値で確認）

ページ `#e5e5e5` / `Alert` の面 `#fafafa` = **1.21:1**（旧 1.07:1）。

**ここで想定外が 1 つ出た。`Alert` は 1.26 の天井に届かない。** `--wim-color-frosted-bg` が白 80% で、残り 20% がページ色を拾って `#fafafa` に落ちるため。**ページを下げて買った 0.17 のうち 0.05 を透過が食っている**。合成モデル（`0.8*255 + 0.2*page`）は旧構成で記録済みの 1.07:1 を正確に再現したので信頼してよい。

### 既存ガードが即座に鳴った（重要）

トークンを付け替えて commit しようとしたところ、**pre-commit の `check:contrast` が落ちた**。

```
light neutral/solid on surface-app: 塗りがサーフェスと見分けられない（知覚距離 0.0000 < 0.015）
light neutral/subtle on surface-app: 同上
```

`intents.json` の `neutral` は **base も subtle も `disabled`** を指しており（`"neutral": { "color": null, "surface": { "base": "disabled", …, "subtle": "disabled" } }`）、その `disabled` が `gy8-5` ＝ **新しいページ色と完全に同じ**になったため。

**「レンダリングして衝突を探す」という当初の段取りは不要だった。** 知覚距離ベースの検査が既にあり、1 手目で拾った。残りの衝突（`border-secondary` など）も同じ検査で出るはずなので、**次はまずこの検査を通すことを目標にする**。

**そのため今日はトークン変更をコミットしていない**（フックのバイパスはしない）。付け替えは `tokens/color/semantic.json` の 2 行 + `npm run tokens:build` だけなので、上の表から再適用は即座にできる。

### 解決（2026-07-31 の続き。**未コミット・作業ツリーに存在**）

**`disabled` → `{pccs.gy7-5}` `#b6b6b6`。これで `check:contrast` は全面緑**（126 組・塗り最小 0.0215 / 基準 0.015）。

**上の「gy9-5 か gy7-5 か」という二択は誤りだった。`gy9-5` は選べない。** `surface-subtle`（`#fafafa`）との知覚距離が **0.014953** で、基準 0.015 を 0.3% 下回って `check:contrast` に落ちる（比も 1.04:1 で実際に見えない）。**推測ではなく計測で潰した**選択肢。

`gy7-5` を選んだ根拠は、目標 1.3:1 を決めたときと同じ「dark が回っている」論法:

| | ページに対する比 / 知覚距離 |
|---|---|
| dark の `disabled`（実績値・#4f4f4f on #262626） | **1.85:1 / 0.1590** |
| light `gy7-5`（採用） | **1.61:1 / 0.1456** |
| light `gy9-5`（不可） | 1.16:1 / 0.0482 |

**なぜ動かさざるを得なかったか**: `surface-app` は `src/base.scss:32` の **`body` 背景**。つまりカードの外に置かれた無効コントロールは必ずこの面に載る。`disabled` が `gy8-5` のままだと**ページと完全に同色 = 無効な入力欄が消える**。`check:contrast` が鳴ったのは `neutral` intent 経由だが、**ガードの都合ではなく実在のバグ**だった。

代償: `--wim-color-disabled` の 30 箇所（フォーム系の無効塗り／枠、`Avatar` の既定背景、`Progress` のトラック）が明確に濃いグレーになる。dark 側は `tokens/themes/dark.json` が `disabled` を独自に持つため**影響しない**（確認済み）。

### 構造として得られた規則（これが本体）

**`gy8-5` は「ページ」専用になった。他の role をここに置いてはいけない。** T45 の衝突は全部これ 1 行で説明でき、`_css-vars.scss` を `#e5e5e5` で grep すれば**残りが機械的に列挙できる**（当初の「レンダリングして 37 ファイルを目視で拾う」は不要だった）。現在 `#e5e5e5` に載っているのは 3 つだけ:

| token | 状態 |
|---|---|
| `surface-app` | ◎ 意図どおり（ページ本体） |
| `border-secondary` | **未解決・据え置き**（下記） |
| `scrollbar-track` | 未解決（トラックが溝として消える。影響は小さい） |

### 受け入れ条件（達成。プロジェクト自身の基準で判定）

`Alert` の面がページから分離しているか、を `check:contrast` と同じ知覚距離 0.015 で測った:

| | Alert の面 | ページとの比 | 知覚距離 |
|---|---|---|---|
| 旧（ページ `#f5f5f5`） | `#fdfdfd` | 1.07:1 | 0.0239（基準の 1.6 倍） |
| **新（ページ `#e5e5e5`）** | `#fafafa` | 1.20:1 | **0.0626（基準の 4.2 倍）** |

**透過は据え置きでよい**（当初「未判断」としていた点）。不透明にすれば 0.0781 まで上がるが、**透過のままでも基準の 4 倍**あり、`backdrop-filter` の実測効果（単色上 5.49%・模様上 99.70% のピクセルが変わる）を捨てるほどの差ではない。**スクリーンショットの目視ではなく数値で判定している**（合成モデルは旧構成の 1.07:1 を再現済み）。

なお `alert.module.scss:12` が `border: ... solid transparent` で輪郭を影だけに任せている件は**そのまま**。面だけで分離できることは上の数値で示せたが、影を実際に外すのは `Alert`/`Toast`/`Notification` 全部の VRT が動く別件。

### 次にやること

1. **VRT ベースライン全面撮り直し**（`--update-snapshots=all` で。下記「撮り直しが効かなかった」参照）。**push 完了後に最後に 1 回**（`vrt-update-run-ordering` の制約）
2. ~~**`border-secondary` の判断**~~ / 3. ~~`scrollbar-track` の行き先~~ → **済（2026-08-01）。下記「ヘアラインを背面に追随させた」節。**

### ヘアラインを背面に追随させた（2026-08-01。T45 の積み残しを解消）

**36 ファイルすべてが壊れていたわけではなかった。** `border-secondary` を使うコンポーネントの大半（`Header` / `Footer` / `Navbar` / `Sidebar` / `TabBar` / `Card` / `Table` …）は**自前の背景を持つ**ので、枠が消えても「白い面とページの境目」自体は残る。**背景を一切宣言していない 3 つだけ**が本当に壊れていた:

| コンポーネント | 用途 | ページ上での症状 |
|---|---|---|
| `DescriptionList` | 行の区切り線 | 線の両側がページ色＝消える |
| `ErrorBoundary` | コンテナの外枠 | 同上 |
| `KeyboardShortcuts` | 区切り線 | 同上 |

**不透明な 1 色では直せない。** ヘアラインは白カード (`#ffffff`) とページ (`#e5e5e5`) の**両方より暗い**必要があり、その条件を満たす PCCS の段は `gy7-5` だけ。しかしそれは `border` と同値で、枠の 2 段構えが潰れる。

**解決は「背面に追随する半透明」**（`ghost-border` / `skeleton-bg` と同じ書き方）＝ `oklch(from var(--wim-color-surface-void) l c h / 0.1)`:

| 面 | 旧（`gy8-5` 不透明） | 新（黒 10%） |
|---|---|---|
| 白カード | 1.26:1 | **1.25:1**（実質そのまま） |
| ページ | **1.00:1** | **1.25:1** |
| `surface-variant` | 1.16:1 | **1.25:1** |

`scrollbar-track` は元から同値だったので同じ扱いにした。**dark は両トークンとも独自値（`#4f4f4f` / `#393939`）なので無傷。**

**T49 の効果がここで出た。** 撮り直しは light 142 枚で、`KeyboardShortcuts` の区切り線は **1016px すべてが `#e5e5e5` → `#cdcdcd`**（＝ページ上で見えるようになった）。一方**白カード上のコンポーネントは 1 枚も動いていない**（`#e5e5e5` → `#e6e6e6` の 1 段はしきい値未満）。**差分が「修正が効いた場所」だけに出る**という、T49 が無ければ得られなかった読み方ができている。

**当初の代替案（枠色を一時的に赤にして「在庫」を撮る）は不要だった。** 背景を宣言していないコンポーネントを SCSS で絞り込めば、レンダリングせずに 3 件まで機械的に特定できる。

### 撮り直しが効かなかった（2026-07-31。**T49 として起票**）

1 回目の update（[9625d7a1c](https://github.com/takeshisakuma/wimui/commit/9625d7a1c)）は **79 枚しか動かず**、中身を測ると **light 852 枚が旧ページ色 `#f5f5f5` のまま**、85 枚だけ新色 `#e5e5e5` という**混在状態**だった。

原因は 2 段:

1. `threshold: 0.1` は**ピクセル単位の色許容量**で、YIQ 距離 `35215 × 0.1²` = **352.2** 未満は差分と数えない。ページ色の変更は **129.4** ＝ **数えられない**（`disabled` の変更は 1116.2 で超える → 動いた 85 枚はその巻き添え）
2. Playwright 1.51+ の素の `--update-snapshots` は既定が **`changed`** ＝「比較に失敗した分だけ書き戻す」。差分ゼロと判定された 852 枚は**一度も書き換えられなかった**

**対処（今回）**: `vrt.yml` の update を **`--update-snapshots=all`** に固定した。update は「今の描画に合わせる」操作であって差分検知ではないので、閾値の判断を挟ませない。**検知側の盲点そのものは T49**。

**教訓**: T44 は「VRT が緑」は小領域について何も意味しないことを示したが、今回は **`update` が成功して緑でも、ベースラインが更新されたとは限らない**という別の失敗だった。**コミットバックの枚数を見て納得せず、中身のピクセルを測ること。**

### 検証済みゲート（この作業ツリーで実行）

`check:contrast` ✓ / `check:tokens` ✓（294 tokens 不変）/ `check:intents` ✓ / `lint` ✓ / `stylelint` ✓ / `test` ✓ 243 files・2869 tests

### a11y が 18 件落ちた（2026-07-31。**T41 の実証データ**）

ベースラインを撮り直して CI を回したところ、**`check:contrast` は緑のまま axe が 6 ストーリー・18 件で落ちた**。すべて light、すべて T45 起因。

| 前景 on 背景 | 比 | 由来 |
|---|---|---|
| `text-tertiary #646464` on `disabled #b6b6b6` | **2.91** | `disabled` を gy7-5 に落としたため |
| `text-accent #055d87` on `primary@15% #bfccd3` | 4.38 | ページが暗くなり subtle 塗りも暗化 |
| `text-tertiary` on `#d3dadd` / `#e0e0e0` | 4.18 / 4.48 | 同上（半透明ティントの合成） |
| `text-disabled #8a8a8a` on ページ `#e5e5e5` | 2.74 | 装飾 404（大文字 3:1 基準） |

**`check:contrast` は 1 件も鳴らなかった。** 理由は 2 つあり、どちらも T41 の主張そのもの:

1. **無効面に載る文字色を網羅していない。** `disabled` を動かすとき `text-on-disabled`（gy3-5 = 5.70:1）だけを確認して「通る」と判断したが、実際のコンポーネントは `text-tertiary` や `text-disabled` も無効面に載せている。検査は `intents.json` が宣言した組み合わせしか見ない
2. **導出モデルと実描画がずれる。** `primary/subtle on surface-app` は検査対象**そのもの**で 4.58 と報告されたが、axe の実測は 4.37。合成の前提（アルファ・入れ子の面）が実際と一致していない

**対処（すべて数値で確認してから実施）**:

| | 変更 | 効果 |
|---|---|---|
| `disabled` | gy7-5 → **gy9-5**、`neutral-fill`（gy7-5）を新設して分離 | 2.91 → **7.51** |
| `text-tertiary` | gy5-5 → **gy4-5** | 4.18 / 4.48 → **5.79 / 6.21** |
| `text-accent` | `{primary}` → **`{pccs.dp16}`** | 4.38 → **6.29** |
| `Page.stories.tsx:309` | `text-disabled` → `text-tertiary` | 2.74 → **6.50** |

**`disabled` と `neutral` の分離が本質的な収穫。** 1 つのトークンが「無効なコントロール」と「意味を持たない indicator の塗り」を兼ねていたため、片方の都合で動かすともう片方が巻き添えになっていた（`intents.json` の `$comment` が以前から「neutral = disabled は淡すぎる」と書いていたのは、この兼務の症状）。分離した結果、**`disabled` は intent 面ではなくなり `check:contrast` の対象から外れた**ので、当初「gy9-5 は選べない」とした制約自体が消えた。

**`text-accent` は既存規則へ合流させただけ。** `danger`/`success`/`warning` はいずれも塗りより 1 段暗い専用テキスト色を `$comment` 付きで持っていたのに、`accent` だけが `primary` を直接指していた。

**代償**: `text-tertiary` が `text-secondary`（gy3-5）と 1 段差に詰まり、淡色文字の 3 段階の階層が実質 2 段に近づいた。

### 完了時の状態（2026-07-31）

**PR [#181](https://github.com/takeshisakuma/wimui/pull/181) で全チェック緑。** VRT compare 4 シャード / axe-core 4 シャード / Vitest / Lint / Smoke / bundle size / i18n。ベースラインはピクセル実測で検証済み（light 914 枚が新ページ色、21 枚は `surface-variant` 由来、dark 929 枚は不変）。

**VRT から外したもの**: `tabnavigation--pills`（T43。137px が 6 回とも同値＝状態差）／ `video--rounded`（65〜72px でばらつく＝ジッタ）。

**出荷（2026-07-31）**: #181 → changeset[#182] → Version PR[#183] → **0.10.0 公開**。公開 tarball を展開して実値を確認済み:

| token | light | dark |
|---|---|---|
| `surface-app` | `#e5e5e5` | `#262626` |
| `surface-variant` | `#f5f5f5` | `#4f4f4f` |
| `disabled` | `#f5f5f5` | `#4f4f4f` |
| `neutral-fill`（新設） | `#b6b6b6` | `#4f4f4f` |
| `text-tertiary` | `#4f4f4f` | `#c4c4c4` |
| `text-accent` | `#04436e` | `#97cbe0` |

provenance（SLSA v1 attestation）も付与を確認。**懸念していた 2 件はどちらも起きなかった**: `[skip ci]` は squash 本文に漏れず main の deploy が正常起動（手動 dispatch 不要）、`check:llms` も Version PR で落ちなかった（#117 の手当てが効いていることの実証）。CHANGELOG は 0.9.0（mono トークン）と同じ構成＝「見た目が変わるもの」を先頭に列挙し、**元に戻す CSS スニペット**と「`surface-app` だけ戻すと `disabled` / `neutral-fill` がページに埋没する」注記を添えた。

### 再現用メモ

- ローカル VRT は `CI=1 npx playwright test vrt/vrt.spec.ts -g "<title>"`。**ポート 6006 に古いサーバーが残っていると起動できずエラーで終わる**（今日 1 回踏んだ）。`netstat -ano | grep :6006` → `taskkill //F //PID <pid>`
- 撮影で生まれる `*win32*` スナップショットは実験用の未追跡ファイル。**絶対にコミットに混ぜない**
