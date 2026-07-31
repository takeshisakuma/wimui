# WIM UI 改善リスト（継続用）

最終更新: 2026-07-31（**T44 完了**＝閾値 50 を出荷し[#176]、受け入れ条件も実証した（`FeedbackIcon` を #142 以前に戻すと `Alerts & Notifications` 106 件中 **36 件**が落ちる。信号は 68〜88px で、**旧閾値 400 では 1 枚も落ちない**＝#142 が 6 コンポーネント中 5 つで素通りした理由）。あわせて**撮り直した 226 枚の内訳を割った**[#177]: 位置による分類も履歴による帰属も決め手にならず、**差分領域の平均色の移動量**で並べて両端を目視した結果、**回帰はゼロ**で、大半は「直したのに VRT が記録していなかった」もの（最たる例が `OtpInput` — #141 が直したあともベースラインには 6 個の空箱が数週間写り続けていた）。ここから出た 2 件も出荷: `Stats.Trend` をティントから塗り + 面色の文字へ[#179]、`EmptyState` の `+` が小さかったのは色ではなくインライン 48px の直書き[#178]。メニューアイコン `menu` / `grid` と T46 最初のエイリアス 3 件も[#180]。**npm リリースは意図的に見送り**＝T45 でライブラリ全体の見た目が動くため、視覚的な変化を 2 回に分けず 1 バージョンにまとめる。**次の一手は T45**＝下の「**T45 の着手**」節。ブランチ `feat/t45-surface-separation` に中断中で、目標比・梃子・制約は決定済み、残るのは `Alert` の透過判断と衝突箇所の実測）

旧: 2026-07-30（**「ハーネス修正の 1 回目は失敗した」（#172）の結論を実測で訂正**＝40 件の中身を割ると 28 件のうち 24 件は消えており、新規 25 件は**片方のランにだけ 4 シャード均等で出る**＝ストーリー固有ではなく**フォントがネットワーク越しに届くこと**が原因だった。`@font-face` 未登録説は CDP 実測で否定（登録 400 面・`check()` は 10/10 false・`load()` は 1 面マッチ）。対策は待ちの改良ではなく**供給元をローカルへ**＝Storybook のフォントを `@fontsource` へ自前化し、その過程で **mono の契約が壊れていた実バグ 5 件**を修正（#171 を draft から復帰）。あわせて外部語彙（namethatui.com）との突き合わせから **T46 別名対応表 / T47 追加予定コンポーネント / T48 UA スタイルシート負けの検出**を起票。詳細は「**①の結果と真因**」節と「**フォント自前化と mono の契約**」節。次の一手は T44 の②→③＝残り 4 件の非決定を始末してベースライン全面撮り直し）  
旧: 2026-07-29（**0.8.0 を公開**＝#165/#166 の changeset が同乗。当時の見出しは 0.7.0 のままだった）  
旧: 2026-07-29（**0.7.0 を公開**＝T32 の 2 枚目で出た穴 14 件のうち 11 件を出荷した「既定が変わる回」。あわせて **T45**（light パレットに面の分離が無く、コンポーネントが影に依存している）を起票。次の一手は下の「**ハーネス修正の 1 回目は失敗した**（T44 の計測結果の節）」＝**上記のとおり 07-30 に訂正済み**）。**同日続き: 回避策 4 つをすべて外した**（結果は同節「回避策を外した結果」。⑦ の残りは `SegmentedControl` を「省略せず横スクロール」へ倒して解消。ライブラリ=#165・画面=#166 として出荷済み。**T32 の 2 枚目はこれで完了**、次は 3 枚目（AI アシスタント画面））  
旧: 2026-07-28（**T32 の 2 枚目**「複数ステップのフォーム」を実装し、出た穴 14 件を起票＝下の「T32 の 2 枚目の結果」。うち **③ `FileUpload` の `aria-required`（axe critical）と ④ `Alert` の見出し順は a11y スイートが自動検出**した。**⑭ は VRT の構造的な盲点**＝①を直した #142 が 6 コンポーネント中 5 つで緑のまま通過したことから判明。0.6.0 は 1 枚目の終了時点でリリース済み）  
旧: 2026-07-27（**T32 の 1 枚目**「管理テーブル」を実装し、出た穴 10 件を起票＝下の「T32 の 1 枚目の結果」。ガードの穴として **T40**（`src/` の生 UI 文字列）・**T41**（コントラスト検査がトークン止まりでコンポーネントの実使用を見ていない）・**T39**（合成ルールが 3 箇所に複製）を新規起票。DESIGN.md に必須ルール 12「クロームを黙らせる」と狭幅チェックを追加し、llms.txt / judge:slop にも反映）  
旧: 2026-07-26（**T27〜T31** を起票。T27 Playground 再設計 + AI-slop ガード拡張(#108) / T28 コンポジション監査 + T30 prop 検出ガード(#109) / T29 docs の px 負債(#111) は完了。T31（docgen キャッシュキーの自動導出）も完了。**T32〜T37「使う側の穴の探索」を新規起票**＝221 コンポーネント中 176 が未合成という実測から。※起票時に T14〜T17 と番号が衝突していたため T27 以降へ採番し直し）  
作業再開時はここから。済んだ詳細は git 履歴を参照。

---

## 次にやるとよい順

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
| T28 | コンポジション監査の指摘（DESIGN.md ルール 8〜11 で既存を掃いた結果） | 起票 2026-07-26、**未着手**。①**影と枠を両方持つ Card 14 箇所**（`Form.stories.tsx:50,145,264,407,514` / `Marketing:144,223,299,412` / `Page:390,574,639` / `ReactHookForm:89,272`）: `Card` の既定 `elevated`（影）にインライン border を足しているうえ、`padding` prop があるのに style で上書き＝ルール 8＋3。**ただし単純に prop へ寄せられない**: 現場の値は `spacing-xl`〜`5xl` だが Card の `padding` は sm=`md` / md=`xl` / lg=`2xl` までしか実装が無く（`padding-3xl` 等はクラスが存在せず無効）、border 色も `border-secondary` を使っている（`variant="outline"` は `border`）。**Card 側に padding スケール追加（加算・非破壊）が要る**か、意匠として border-secondary を選べる手段が要る。②**`Marquee.stories.tsx:22,26,45,49` の `color="primary"`/`"secondary"` が死んだ prop**（Badge に `color` は無く、span の legacy HTML 属性として素通り。2 色出し分けたつもりが両方 primary。TS は通る）。③intent 未指定でアクセント色になる箇所: `BentoGrid:38-41`（機能タグ 4 つ）/ `AI:186`（`v2` バッジ）/ `Page:490`（`p.category` に `intent="primary"`＝カテゴリを色で運んでいる）。④**`Stats.stories.tsx:50-52`「Active Alerts 12 / ↓ -5%」が danger の赤**＝アラート減少という改善を悪いニュースの色で描画（ルール 11 の逆向き。コンポーネント自身のショーケースなので教材として優先度高） | **未着手**（別 PR 予定。VRT ベースライン更新が必要） |
| T29 | docs の px 直書き 66 件 | 起票 2026-07-26、**未着手**。`check:slop` を `docs/*.mdx` の `<style>` に拡張して可視化された既存負債。`Configure.mdx`（`padding-left: 20px` / `font-size: 14px` / `box-shadow: 0 1px 3px rgba(...)` 等）、`Colors.mdx`、`AppLayout.mdx`（レイアウト図の `grid-template-*`）が主。**@media の px は対象外**（CSS 変数はメディアクエリで解決されないため意図的に除外済み）。トークンへ寄せたら `scripts/check-slop.js` の `STYLE_OVERRIDE_BASELINE` を実測値まで下げる | **未着手** |
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
| T38 | 「書いても効かない prop 値」の始末 | **一部済 / 残は 0.8.0**（**2026-07-29 に 0.7.0 から再移動。ただし今回は代償措置つき** — 下の「T38 の停止点」参照）／旧: **0.7.0**（2026-07-27 に 0.6.0 から移動。0.6.0 は「見た目の既定値が変わる」回、T38 は「型が通らなくなる」回で、混ぜると利用者が原因を切り分けられないため） | T33 の検出器が出した実在の欠落。**型が `ComponentSize` 全体を宣言しているのに実装が部分集合**という共通パターン: `Card.padding`（xs/4xl/5xl が無い）・`Card.radius`（xs/xl/2xl/3xl/4xl/5xl が無い＝実装は none/sm/md/lg のみ）・`Spinner.labelPosition="right"`・`FAQSection.layout="top"`。**方針の判断が要る**: ①CSS クラスを足す（加算・非破壊だが「radius 5xl とは何か」を新たに決めることになる）②型を実装に合わせて狭める（`Extract<ComponentSize, "sm" \| "md" \| "lg">` 等。**型が真実を語るようになるが union の縮小は破壊的変更**＝`api-snapshot.json` が変わる。ただし「黙って効かなかった値」なのでコンパイルエラーになるコードは元から壊れていた）③現状維持でラチェット凍結 | **11 → 6**（2026-07-26）。内訳: ①**偽陽性 2 件**は検出器側を修正（`Spinner.labelPosition="right"` / `FAQSection.layout="top"` はいずれも **prop の既定値**で、既定は基底スタイルが実装するため修飾クラスは不要。docgen の `defaultValue` を見て除外するようにした）②**トークンが実在する 3 値を実装**（`Card` の `padding-xs` → `spacing-sm`、`radius-xl` → `radius-xl`、`radius-2xl` → `radius-2xl`）。**残り 6 件は 0.7.0 で型を狭めて解決する**（当初 0.6.0 予定だったが 2026-07-27 に移動）: `Card.radius` の xs/3xl/4xl/5xl（radius トークンが sm/md/lg/xl/2xl/full しか無く、実装するには新トークンの新設が要る＝RULES.md が禁止に近いとしている）と `Card.padding` の 4xl/5xl（spacing が 5xl 止まりのため実装すると**両者が同じ余白になり区別できない**＝受け付けるのに意味が無いのは同じ）。**縮小は破壊的変更**なので 0.6.0 に置く。縮小後は baseline を 0 にしてハードゲート化できる |
| T35 | StackBlitz レシピが実際に起動するか | **済** | `sandbox/recipes/*.tsx` は「Open in StackBlitz」で公開版 `wimui` に対して起動する建付けだが、**このリポジトリ内で `tsc` が通ることしか確認していない**。公開版パッケージ＋宣言された peer だけで動くかは未検証 | 既存の tarball スモークゲート（`scripts/smoke/`）の土台を再利用し、レシピを隔離プロジェクトに配置して `vite build` が通るかを検査。Playground の StackBlitz scaffold（`PACKAGE_JSON` / `MAIN_TSX`）と同じ構成にすること ／ **受け入れ条件**: レシピの import を 1 つ壊した状態で**落ちること**を実証する。 ／ **済**（`node scripts/smoke/run.mjs --recipes` = `npm run smoke:recipes`。既存の tarball スモーク基盤を再利用し、隔離 consumer で各レシピを `wimui/styles.css` + `WimProvider` + レシピの入口から esbuild で bundle。5 本すべて PASS。CI は bare ジョブに `--treeshake --recipes` として相乗り。**受け入れ条件の検証で 1 度失敗を経験している**: import 名だけを書き換えて JSX 側を残したところ通ってしまった＝未使用 import は tree-shake されて検査されない。両方書き換えれば落ちる。この限界はスクリプトのコメントに明記済み） |
| T36 | ホスト環境マトリクス | **P3** | ライブラリが描画される環境は Storybook canvas / Storybook docs MDX / StackBlitz / 利用者アプリの 4 つだが、**継続検証されているのは canvas だけ**。docs MDX が壊れていたのは T27 で偶然見つけた（`sb-unstyled` で解決済みだが回帰ガードは無い） | カナリア画面を各ホストで描画し、主要コンポーネントの computed style（font-size / border / padding）を突き合わせる。canvas を基準に差分が出たらホスト側 CSS の侵入を疑う ／ **受け入れ条件**: `docs/Playground.mdx` から `sb-unstyled` を外した状態で**差分が出ること**を実証する。 |
| T39 | 合成ルールの SSOT 化 | **P2** | 起票 2026-07-27。**汎用の合成ルール本文が 3 箇所に複製されている**: `DESIGN.md`（日本語・人間と `composition-guidelines` skill 向け）／`scripts/generate-llms.js`（英語・llms.txt = 外部 AI への主配信）／`scripts/judge-slop.mjs`（採点ルーブリック）。同日「クロームを黙らせる」と「狭い幅で見る」の 2 ルールを足した際、3 ファイルを手で編集した。**前例がある**: AI-slop 辞書は `scripts/slop-dictionary.json` を単一ソースにして `check:slop` と `generate-llms.js` の両方が読む形になっている。※`.claude/skills/composition-guidelines/SKILL.md` は「本文は複製しない・DESIGN.md を読む」手順のみなので複製元ではない。**「汎用ルールは skill・プロジェクト固有は DESIGN.md」という分け方は採らない**: design.md の spec（トークン＋根拠の自己完結文書）にも Agent Skills の仕様（手続き知識の可搬パッケージ。company/team 固有の文脈も含んでよいと明記）にもその分担は書かれておらず、llms.txt という**外部 AI 向けの主配信経路が skill とは別に存在する**ため、汎用分を skill へ移すと公開物の生成元が Claude Code 専用ディレクトリに依存する。現行の「skill = 手順 / DESIGN.md = 規範の SSOT」を維持する | 合成ルールを機械可読な単一ソース（例 `design/composition-rules.json`）に置き、DESIGN.md の表・llms.txt の Must rules・judge のルーブリックを生成する。**受け入れ条件**: ルールを 1 つ足して 3 つの出力すべてに反映されることを実証する |
| T40 | `src/` の生 UI 文字列を検出するガード | **P1** | 起票 2026-07-27（T32 の穴 ①）。`check-stories-hardcoded` は `stories/**` のみ、`check-i18n-components` は「src は型付きキー（`WimI18nKey`）で守る」として**意図的に src を走査しない**。しかし型が守るのは**キーの間違い**であって、**`t()` を呼ばない生文字列**は誰の網にもかからない。実際 `DataGrid` のページャ文言 3 件と aria-label / alt の 8 件が漏れていた | `src/components/**/*.tsx` を対象に、JSX テキスト子要素・テキスト系 prop・`aria-label` / `alt` の生英語を検出（`check-stories-hardcoded.js` の検出器を流用可）。既存 11 件を baseline にしたラチェットで開始し、解消後に 0 でハードゲート化 ／ **受け入れ条件**: `DataGrid.tsx:353` を含む既知 11 件を**鳴らせること**を実証する |
| T41 | コントラスト検査を「トークン」から「コンポーネントの実使用」へ | **P1** | 起票 2026-07-27（T32 の穴 ②）。`check:contrast`（T34）は **outline の文字色を `text-{intent}` ロールで解決する前提**（`check-contrast.js:121`）で 126 組すべて緑。しかし `Button` の SCSS は `color: var(--wim-color-danger)` を直接使っており、**SSOT を迂回している事実がガードから見えない**。結果 dark の `outline`×`danger` が 4.35:1 で出荷されていた。`color:` に intent 色を直接使う箇所は src 全体で **50 件**あり、同型が他にもある可能性が高い。Button のストーリーに `outline`×`danger` の組み合わせが 1 つも無かったため a11y スイートも見ていなかった | ①短期: `*.module.scss` で `color:` に `--wim-color-{intent}` を直接使っている箇所を列挙し、`text-{intent}` へ寄せる（または例外として明示） ②恒久: コントラスト検査を SCSS の実際の `color` / `background-color` ペアから解決する方式へ寄せる ／ **受け入れ条件**: 現行の `button.module.scss:165` に対して**鳴ること**を実証する |
| T42 | 生成物の再生成をコミット時に強制する | **済** | 起票 2026-07-27（#132 が `check:llms` で落ちたことから）。`llms.txt` は docgen（＝コンポーネントの props/tokens）由来なので、**prop を 1 つ変えるだけで古くなる**。しかし lint-staged は `llms:build` を呼んでおらず、CI の `audit:docs` で初めて落ちる＝「再生成が要る」という依存が人間の記憶に残っていた。同種の依存は既に `generate → stage-generated.js` の対で自動化されている（i18n リソース / アイコン / intents の 3 箇所）のに、llms.txt だけ輪の外にあった。**リリース PR で同じ形の事故が既にある**（#116 → #117。`changeset version` 後にバージョンが埋まった `llms.txt` が不一致になりマージ不能） | lint-staged に `generate-llms.js` ＋ `stage-generated.js public/llms.txt public/llms-full.txt` を追加（入力は `src/components/**/*.{ts,tsx}` / `*.module.scss` / `public/locales/en/**` / `src/data/components.json` / `scripts/slop-dictionary.json` / `scripts/generate-llms.js`）。**あわせて `generate-llms.js` が docgen を「無いときだけ生成」していたのを毎回更新に変更**（古い docgen JSON から生成すると、ローカルは整合して見えるのに CI（クリーンチェックアウト＝毎回生成）だけ落ちるため。キャッシュが効くので warm 0.6 秒） ／ **受け入れ条件**: prop の説明を 1 行変えて `lint-staged` を通し、`public/llms-full.txt` が**再生成されてステージまでされること**を実証する（実証済み: プローブ 2 回とも `llms-full.txt` に反映＋自動ステージを確認） |
| T43 | VRT の非決定的ストーリー 4 件の始末 | **P2** | 起票 2026-07-27（#135 で顕在化）。ベースラインを update で撮り直したあと、**同じコミットの compare で 4 件が落ちた**: `snackbar--default`(dark) / `toast--success`(dark) / `voicevisualizer--large-height`(dark) / `audio--premium-features`(light)。これは T11 が定めた除外基準（同一コミットで update→compare が落ちる）にそのまま当てはまる。main では緑なので、**古いベースラインがたまたま安定した瞬間を捉えていただけ**で、撮り直すと不安定さが表面化する。#135 では 4 件を main の版へ戻して回避した（＝爆弾は残っている） | 原因の見当: Snackbar/Toast は `autoHideDuration` のタイマー（VRT の `clock.setFixedTime` は Date を固定するがタイマーは止めない）、Audio/VoiceVisualizer はメディア読み込み。**対応候補**: ①ストーリー側で `autoHideDuration={0}` 等の決定化 ②`NONDETERMINISTIC_STORY_IDS` へ追加。①のほうが可視カバレッジを失わないので優先 ／ **受け入れ条件**: 4 件について update → 同一コミットで compare を 2 回連続で緑にできること<br>**追記（2026-07-31・T45 の撮り直しで再燃）** — **T44 の「アニメーション注入 + 6 秒待ちで 4 件とも安定した」は不完全だった**。`TabNavigation - Pills` が **dark で再現性をもって落ちる**（同一コミットで update → compare を **2 ラン × 3 試行、6 回すべて 137px**。ジッタなら値がばらつくのでこれは状態差）。実画像の差分は `x106-131 y16-57` の 26×42 に集中し、`#262626 -> #055d87` が 135px ＝ **ページ背景の上にアクティブ/フォーカスのインジケータが出るか出ないか**。**色ではなく描画状態**なので、`animation: none` の注入では止まらない類。当座は `NONDETERMINISTIC_STORY_IDS` へ追加して T45 を通したが（案②＝カバレッジを失う退避で、`--contained` と同じ扱い）、**`--pills` は light 側の被覆も同時に失っている**（この Set はストーリー単位でテーマ別に外せない）。根治は案①。**なお `Video - Rounded` も同ランで 103/57/67px と揺れたが 2 ラン目で通過したため追加していない**（この Set の追加基準は「同一コミットで update → compare が落ちること」を満たさない） |
| T44 | VRT の閾値が小領域の変化を構造的に見られない | **P1** | 起票 2026-07-28（T32 の 2 枚目 ⑭）。`vrt/vrt.spec.ts:133` の `maxDiffPixels: 400` は **fullPage スクショに対する**閾値。`size="sm"` のアイコンは実測 14×14〜16×16 ＝ **最大でも 196〜256px しか動かず、閾値を数学的に超えられない**。#142 で実証された: 6 コンポーネントすべてでグリフが変わったのに、VRT が落ちたのは 80×80 のアイコンを持つ `Result` だけ（6400px）で、**Alert / Banner / Notification / Snackbar / Toast は緑のまま通過**した。同じ盲点にバッジのドット・フォーカスリング・ヘアライン幅のボーダー・14px 前後のアイコン全般が入る。**「VRT が緑」は小領域の変化について何も意味しない**。#142 では 5 コンポーネント分の単体テスト（`FeedbackIcon.consumers.test.tsx`）で個別に塞いだが、これは同型の穴が出るたびに手で塞ぐ形で、構造的な解決ではない | **対応候補**: ①`maxDiffPixelRatio` へ寄せる（ページ面積に比例させる。ただし小さいストーリーほど厳しくなり、既存のジッタ許容 ≤220px と衝突しないか要実測） ②fullPage をやめて対象要素単位のスクショにする（面積が縮むので同じ 400 でも効く。ストーリー側に撮影対象の指定が要る） ③閾値は据え置き、小領域の変化は単体テスト側で担保する方針を明文化する。**いずれもベースライン全面更新を伴う**ため単独の作業として切ること ／ **受け入れ条件**: `FeedbackIcon.tsx` を #142 以前の「全部塗り丸」に戻した状態で、**Alert / Banner / Notification / Snackbar / Toast の VRT が落ちること**を実証する（現行は 5 件とも緑のまま通る＝これが再現手順そのもの）<br>**済（2026-07-30・#176）** — 閾値 50（案①ではなく素の `maxDiffPixels` 引き下げ。案①より単純で、残ジッタ 11px と信号 68〜176px の間に十分な余地があった）。受け入れ条件も実証済み＝`FeedbackIcon` を戻すと `Alerts & Notifications` 106 件中 36 件が落ちる。下の「T44 の計測結果」と「⑤ 受け入れ条件の実証」「撮り直した 226 枚の仕分け」参照 |
| T45 | light パレットに面の分離が無く、コンポーネントが影に依存している | **P2** | 起票 2026-07-29（`Alert` の影が妥当かという相談から実測して判明）。DESIGN.md のアンチパターン表は「サーフェス階層トークンで面を分ける。影/枠は操作を誘導する要素だけに」と定めているが、**light テーブルではその処方が成立しない**。ページ（`surface-app` #f5f5f5）に対し、置ける面がどれも 1.1〜1.2:1 に収まるため: 現行の frosted（白 80%）1.07:1 ／ 純白 `surface` 約 1.10:1 ／ `surface-variant` 約 1.19:1 ／ 標準ボーダーを当てた縁でも 1.16:1（dark は 1.85:1）。結果、**面の輪郭は影が担っている**。`Alert` から `box-shadow` を外すと `intent="default"` が輪郭を失うことを実測で確認（`border` が既定で `solid transparent` のため縁も無い）。つまり `Alert` の影は症状であって原因ではなく、ここだけ直すと「ルールは守ったが読めない」になる。**※`backdrop-filter` は無意味ではない** — 単色の上でも 5.49%、模様の上では 99.70% のピクセルが変わる（当初「流し込みでは無意味」と見立てたが実測で否定された） | トークン側で面に実効的な段差を作る（`surface-app` を落とす / `surface` 系の段を作り直す等）。**影響はライブラリ全体・VRT 全面更新**なので T44 と同様に単独で切る ／ **受け入れ条件**: `Alert intent="default"` から `box-shadow` を外しても面が判別できること（現行 1.07:1 → 目標を決めて実測）。あわせて **`Card` の中に `Alert` を置くと枠付きの面の中に影付きの島が出る＝必須ルール 9 の二重フレーム**になる件も解消できるか確認する |
| T46 | 外部語彙との対応表（別名／エイリアス）を持つ | **P2** | 起票 2026-07-30（namethatui.com の用語一覧との突き合わせから）。**穴の大半は「無い」ではなく「名前が違って見つからない」だった**。相手側 33 の macOS 用語のうち大半に実体があるのに、語彙が一致しない: Scrim/Backdrop=`OverlayBase`・Source List=`Sidebar`・Token Field=`TagInput`・Outline View=`TreeView`・Column View=`Cascader`・Overflow Menu(The Three Dots)=`Dropdown`・Pop-Up/Pull-Down Button=`Select`/`Dropdown`・Color Well=`ColorInput`・Level Indicator=`PasswordStrength`/`UsageMeter`・Pill=`Chip`/`Tag`・Sheet=`BottomSheet`・Inspector=`Sidebar`・Sticky/Fixed=`Affix`・Search Field=`SearchInput`・Disclosure=`Accordion`。**さらに危険な衝突が 1 件**: macOS の **Stepper は数値増減（WIM では `NumberInput`）**だが WIM の `Stepper` は手順表示＝同じ語で別物。探した人・AI が確実に取り違える | **置き場所は `src/data/components.json`（新しい SSOT を作らない）**。既に ①`docs/componentList.mdx`（人向けカタログ・ブラウザ ⌘F が効く） ②`docs/NavigationElementsSelection.mdx` ③`scripts/generate-llms.js`（**llms.txt = AI 向け主配信**） ④`scripts/check_consistency.js` が読んでいる。**lint-staged が `components.json` 変更時に llms.txt を自動再生成＋ステージする**（`package.json:611`）ので AI 経路は追加機構ゼロで届く。**i18n の負荷も無い**: `check_stories_keys.js` は `*Key` で終わるフィールドしか検証しない（`scripts/check_stories_keys.js:90`）ので生文字列で置ける。`check_consistency.js` も `comp.name` だけ見るのでフィールド追加で壊れない（いずれも 2026-07-30 に確認済み）。**データ形**: `aliases: []`（同義語）と `disambiguation`（他所では別の意味で使われる語。`Stepper` はここ。別名にすると 1 語 2 解になる）を分ける。**範囲は 221 全部ではなく 40〜60 語**＝外部語彙と実際にズレているものだけ。**別名は実在の体系（Apple HIG / Material / ARIA APG / Radix / MUI）が使っている語に限る**（自分で同義語を発明するとキーワード詰め込み＝`judge:slop` 案件になる）。**やらないこと**: Storybook サイドバー検索への注入（story タイトル/tags を汚す。人向けはカタログ ⌘F、機械向けは llms.txt で足りる） ／ **受け入れ条件（ガード）**: ①別名が既存コンポーネント名と一致したら落ちる（`Stepper` 型の事故） ②別名が全体で一意でなければ落ちる ③空文字・同一コンポーネント内の重複で落ちる。**3 つとも故意に違反を作って、通る経路すべて（ローカル全量 / lint-staged の部分集合 / CI）で鳴ることを実証してから完成**（`check:slop` が lint-staged 経由で素通りしていた件と同型の穴があり得る） |
| T47 | 追加予定コンポーネント（外部語彙との突き合わせで出た実装の穴） | **P2** | 起票 2026-07-30（同上）。namethatui の Web 37 項目のうち実装が無いのは以下。コード確認済み。<br>①**Progress Ring（円形プログレス）** — `Progress` の prop は `value/max/intent/size/label/showValue/indeterminate` のみ＝**線形専用**。SVG のリング描画はリポジトリ内に 0 件（`GaugeChart` はチャート、`Spinner` は不定）。**明確な穴**<br>②**SplitButton（macOS の Combo Button）** — `SplitButton`/`split-button` の該当 0 件。`ButtonGroup`+`Dropdown` で組めるが部品もパターンも無い（`SpeedDial` は FAB で別物）<br>③`Text` の **`lineClamp`** — `Text` は `truncate`（1 行省略）のみ。多行は `Spoiler`（line-clamp）だが**必ず開閉トグルが付く**ので「3 行で止めるだけ」ができない<br>④**Panel / HUD（移動できる浮遊パネル）** — ドラッグは `Kanban`/`SortableList` のみ。Web では需要が薄く**保留**<br>⑤**Parallax Scrolling / Text Scramble / Spring Animation** — いずれも 0 件（`ScrollProgress` は別物、`StreamingText` はタイプライタ系、`Transition` は CSS ベース） | ①②③は実装候補（**①②は T32 の 3 枚目＝AI アシスタント画面でも出番がありそう**なので、その画面を作る回に合わせると合成検証つきで入る）。⑤は **DESIGN.md の「AI 的な画面を避ける・演出は控える」と正面から当たる**ので「無い」ではなく**「採らない」を明文化**する（llms.txt に書けばエージェントの自作も抑えられる。`backdrop-filter`/Vibrancy を実測で棄却した記録と同じ扱い） ／ **注意**: 追加時は `src/data/components.json` / `src/<category>.ts` / MDX / 翻訳キーまで CLAUDE.md の最短手順どおり通すこと |
| T48 | 「トークンで指定したのに UA スタイルシートに負ける」の検出 | **P2** | 起票 2026-07-30（下の「フォント自前化と mono の契約」で 5 件出たことから）。**UA スタイルシートの `code { font-family: monospace }` は、親が `--wim-font-family-mono` を指定していても子孫には継承させない**（作成者の宣言が無いプロパティは UA 宣言が生きる）。そのため `.pre`/`.details` の computed は正しく `"Noto Sans Mono"` を返すのに、**本文が入る内側の `<code>` だけ汎用等幅で描かれる**。ソースを読むだけでは見えず、実描画（CDP `CSS.getPlatformFontsForNode`）を測って初めて出た。同型は `kbd`/`samp`/`pre` にもある（`Kbd` と `CommandPalette` は既に `font-family: inherit` を持っており、この穴が既知だった形跡がある） | **検出案**: `*.module.scss` で `--wim-font-family-*` を指定している規則について、その配下に `code`/`pre`/`kbd`/`samp` を描く可能性があるコンポーネント（`.tsx` に該当タグがある）では、その要素向けに `font-family` を宣言していることを要求する。**今日の 5 件が検証コーパスになる** ／ **受け入れ条件**: 5 件を修正前の状態に戻して**すべて鳴ること**（うち 3 件は「computed は正しいのに実描画が違う」ので、computed ベースの検査では鳴らない＝検出器の設計が試される） |
| T49 | VRT の**色深度**の盲点（`threshold` が面積と独立に効く） | **P1** | 起票 2026-07-31（T45 のベースライン撮り直しで判明）。**T44 が塞いだのは面積の盲点で、これはそれとは独立した 2 つ目の穴**。`vrt/vrt.spec.ts:143` の `threshold: 0.1` は**ピクセル単位の色許容量**で、Playwright（pixelmatch）は YIQ 距離が `35215 × threshold²` ＝ **352.2** を超えたときだけ差分ピクセルとして数える。**面積がどれだけ大きくても、1 ピクセルあたりの色差がこれ未満なら差分は 0**。T45 で全画面の背景を `#f5f5f5` → `#e5e5e5` に変えたが、YIQ 距離は **129.4** で数えられず、**light 937 枚のうち 852 枚が「差分ゼロ」と判定された**（`disabled` の `#e5e5e5` → `#b6b6b6` は 1116.2 で閾値超え＝更新された 85 枚はこの巻き添え）。**一般化すると: PCCS グレーの隣接する段（16/255）は VRT に一切見えない**＝サーフェス階層の変更・消えたヘアラインボーダー・淡色の面の入れ替えがまるごと盲点に入る。`border-secondary` の実害を「撮り直しの差分で拾う」という T45 の段取りが成立しなかったのはこれが理由 | **対応候補**: ①`threshold` を下げる（129.4 を拾うには **0.06** 程度。ただし T44 のジッタ実測は `threshold: 0.1` 前提で行われているので、**ジッタの再実測が必須**＝T44 と同規模の調査になる） ②`threshold: 0` にして `maxDiffPixels` だけで制御する（色差は全部数え、面積で許容する。もっとも単純だが AA ジッタの量が跳ねるはずで要実測） ③トークン値の回帰は VRT に頼らず、`check:contrast` 系の数値ガードで担保する方針を明文化する（実際 T45 の検証は最後まで数値で行い、VRT は 1 度も役に立たなかった） ／ **受け入れ条件**: `surface-app` を 1 段動かした状態（`gy8-5` → `gy9-5`）で**VRT が落ちること**を実証する。現行は 852 枚が緑のまま通る＝これが再現手順そのもの。**あわせて「鳴ってはいけない経路で鳴らない」側も見る**（閾値を下げるとジッタで常時赤になりうるため、同一コミットで update → compare を 2 回連続で緑にできること） |
| T37 | リポジトリの「主張」の機械検証 | **P3** | llms.txt の版落ちは「常に最新」という主張が破れていた例で、`check:llms` で塞いだ（T27）。同種の主張が他にもある | README / MDX のコード例が実際にコンパイルできるか（llms.txt の価値は PR #64 の A/B で「API 正当性＝コンパイル可否」と測定済み）。README の peer 表と `package.json` の `peerDependencies` の一致 ／ **受け入れ条件**: README のコード例を 1 つ壊した状態で**落ちること**を実証する。 |

#### T38 の停止点（2026-07-29 決定）

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

**残る判断（未着手）**: `base.scss`（= 任意の `reset.css`）は素の `code` に padding/背景を当てているのに `font-family` を当てていないので、**Table のセル等に置かれた素の `<code>` は今も UA の汎用等幅**。1 行で閉じるが `reset.css` を入れている利用者全員の `<code>` の見た目が変わるので保留。

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

**注意**: `57a6c90bf` は #176 の squash マージでリーチャブルでなくなる。上記を再現するならローカルの reflog が生きているうちに。仕分けスクリプト 3 本（クラスタ分類 / 履歴帰属 / 平均色シフト + 切り出し）はリポジトリには入れていない。ベースライン更新のたびに同じ点検を回すなら、平均色シフトの順位表を update PR に添える形が候補。
#### T46 の初回投入とメニュー語彙ページ（2026-07-30 着手）

**済**: アイコン 2 つ（`menu` = 等長 3 本線 / `grid` = 3×3）と、**T46 の最初のエイリアス 3 件**（`Dropdown` / `HamburgerMenu` / `BentoGrid`）。`generate-llms.js` を 1 箇所拡張して `llms.txt` が `(aka Overflow Menu, Kebab Menu, …)` を出すようにした（実出力を確認）。`api-snapshot.json` も更新（アイコン追加＝公開サーフェスが増える）。

**アイコンを増やさなかったもの（判断）**: ホットドッグ / タコス・ナチョス / チョコバー / ストロベリー / ベーコン。**形の俗称であって「その形でしか表せない機能」が無い**（`filter` の漏斗がソート/フィルタ意図を既にカバー）。作れば `check:api` のスナップショットとバンドルに載り続けるので、需要シグナルが出るまで語彙としてのみ扱う。

**未着手（次はここから）**: **`docs/MenuVocabulary.mdx`** ＝ `<Meta title="Components/Navigation Elements/Menu vocabulary" />`（既存 Overview の隣に置く）。表の列は **正式名（主）→ 俗称（副）→ 見た目 → WIM で使うもの → 避ける場面**。正式名を主見出しにするのは、俗称は言い伝えで揺れる一方 ARIA/HIG と対応が取れるのは正式名の側だから。掲載する 7 群: Overflow menu（ケバブ/ミートボール→`Dropdown`）/ Navigation drawer trigger（ハンバーガー/サンドイッチ→`HamburgerMenu`）/ App switcher（ベントー/ワッフル→`BentoGrid`・`Dropdown`）/ Filter・Sort control（ドネル/タコス→`filter` + `Dropdown`・`QueryBuilder`）/ Context menu（→`ContextMenu`）/ Speed dial（→`SpeedDial`）/ 「俗称のみ」欄（ホットドッグ・チョコバー・ストロベリー・ベーコン・パンケーキ・チーズバーガー）。**コスト**: `<T k="…" />` 必須（`check-mdx-hardcoded` はハードゲート）で**新規キー 40 前後 × en/ja/pt、ja/pt は手翻訳**（この環境は API キー未設定）。`audit-mdx` の必須セクションにも合わせること。

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
2. **`border-secondary` の判断**（今回は意図的に据え置き）。`check:contrast` は**枠線を意図的に対象外にしている**ため自動では鳴らない。ただし**今日でも `#f5f5f5` のページに対し 1.16:1 で既にほぼ見えておらず、T45 は既存の弱点を 1.00:1 に振り切っただけ**＝新規バグではない。~~VRT 撮り直しの差分に「実際に消えた枠」が出るので、それを見てから決める~~ → **この段取りは成立しない**（T49）。枠が消える変化も色差 16/255 で `threshold` 未満のため差分に出ない。**別の手段が要る**（候補: `border-secondary` を一時的に赤にして撮り、どのストーリーのどこに枠が出るかを可視化する＝差分ではなく「在庫」を撮る）
3. `scrollbar-track` の行き先

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

### 再現用メモ

- ローカル VRT は `CI=1 npx playwright test vrt/vrt.spec.ts -g "<title>"`。**ポート 6006 に古いサーバーが残っていると起動できずエラーで終わる**（今日 1 回踏んだ）。`netstat -ano | grep :6006` → `taskkill //F //PID <pid>`
- 撮影で生まれる `*win32*` スナップショットは実験用の未追跡ファイル。**絶対にコミットに混ぜない**
