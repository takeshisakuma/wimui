# WIM UI 改善リスト（継続用）

最終更新: 2026-07-28（**T32 の 2 枚目**「複数ステップのフォーム」を実装し、出た穴 13 件を起票＝下の「T32 の 2 枚目の結果」。うち **③ `FileUpload` の `aria-required`（axe critical）と ④ `Alert` の見出し順は a11y スイートが自動検出**した。0.6.0 は 1 枚目の終了時点でリリース済み）  
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
| T38 | 「書いても効かない prop 値」の始末 | **一部済 / 残は 0.7.0**（2026-07-27 に 0.6.0 から移動。0.6.0 は「見た目の既定値が変わる」回、T38 は「型が通らなくなる」回で、混ぜると利用者が原因を切り分けられないため） | T33 の検出器が出した実在の欠落。**型が `ComponentSize` 全体を宣言しているのに実装が部分集合**という共通パターン: `Card.padding`（xs/4xl/5xl が無い）・`Card.radius`（xs/xl/2xl/3xl/4xl/5xl が無い＝実装は none/sm/md/lg のみ）・`Spinner.labelPosition="right"`・`FAQSection.layout="top"`。**方針の判断が要る**: ①CSS クラスを足す（加算・非破壊だが「radius 5xl とは何か」を新たに決めることになる）②型を実装に合わせて狭める（`Extract<ComponentSize, "sm" \| "md" \| "lg">` 等。**型が真実を語るようになるが union の縮小は破壊的変更**＝`api-snapshot.json` が変わる。ただし「黙って効かなかった値」なのでコンパイルエラーになるコードは元から壊れていた）③現状維持でラチェット凍結 | **11 → 6**（2026-07-26）。内訳: ①**偽陽性 2 件**は検出器側を修正（`Spinner.labelPosition="right"` / `FAQSection.layout="top"` はいずれも **prop の既定値**で、既定は基底スタイルが実装するため修飾クラスは不要。docgen の `defaultValue` を見て除外するようにした）②**トークンが実在する 3 値を実装**（`Card` の `padding-xs` → `spacing-sm`、`radius-xl` → `radius-xl`、`radius-2xl` → `radius-2xl`）。**残り 6 件は 0.7.0 で型を狭めて解決する**（当初 0.6.0 予定だったが 2026-07-27 に移動）: `Card.radius` の xs/3xl/4xl/5xl（radius トークンが sm/md/lg/xl/2xl/full しか無く、実装するには新トークンの新設が要る＝RULES.md が禁止に近いとしている）と `Card.padding` の 4xl/5xl（spacing が 5xl 止まりのため実装すると**両者が同じ余白になり区別できない**＝受け付けるのに意味が無いのは同じ）。**縮小は破壊的変更**なので 0.6.0 に置く。縮小後は baseline を 0 にしてハードゲート化できる |
| T35 | StackBlitz レシピが実際に起動するか | **済** | `sandbox/recipes/*.tsx` は「Open in StackBlitz」で公開版 `wimui` に対して起動する建付けだが、**このリポジトリ内で `tsc` が通ることしか確認していない**。公開版パッケージ＋宣言された peer だけで動くかは未検証 | 既存の tarball スモークゲート（`scripts/smoke/`）の土台を再利用し、レシピを隔離プロジェクトに配置して `vite build` が通るかを検査。Playground の StackBlitz scaffold（`PACKAGE_JSON` / `MAIN_TSX`）と同じ構成にすること ／ **受け入れ条件**: レシピの import を 1 つ壊した状態で**落ちること**を実証する。 ／ **済**（`node scripts/smoke/run.mjs --recipes` = `npm run smoke:recipes`。既存の tarball スモーク基盤を再利用し、隔離 consumer で各レシピを `wimui/styles.css` + `WimProvider` + レシピの入口から esbuild で bundle。5 本すべて PASS。CI は bare ジョブに `--treeshake --recipes` として相乗り。**受け入れ条件の検証で 1 度失敗を経験している**: import 名だけを書き換えて JSX 側を残したところ通ってしまった＝未使用 import は tree-shake されて検査されない。両方書き換えれば落ちる。この限界はスクリプトのコメントに明記済み） |
| T36 | ホスト環境マトリクス | **P3** | ライブラリが描画される環境は Storybook canvas / Storybook docs MDX / StackBlitz / 利用者アプリの 4 つだが、**継続検証されているのは canvas だけ**。docs MDX が壊れていたのは T27 で偶然見つけた（`sb-unstyled` で解決済みだが回帰ガードは無い） | カナリア画面を各ホストで描画し、主要コンポーネントの computed style（font-size / border / padding）を突き合わせる。canvas を基準に差分が出たらホスト側 CSS の侵入を疑う ／ **受け入れ条件**: `docs/Playground.mdx` から `sb-unstyled` を外した状態で**差分が出ること**を実証する。 |
| T39 | 合成ルールの SSOT 化 | **P2** | 起票 2026-07-27。**汎用の合成ルール本文が 3 箇所に複製されている**: `DESIGN.md`（日本語・人間と `composition-guidelines` skill 向け）／`scripts/generate-llms.js`（英語・llms.txt = 外部 AI への主配信）／`scripts/judge-slop.mjs`（採点ルーブリック）。同日「クロームを黙らせる」と「狭い幅で見る」の 2 ルールを足した際、3 ファイルを手で編集した。**前例がある**: AI-slop 辞書は `scripts/slop-dictionary.json` を単一ソースにして `check:slop` と `generate-llms.js` の両方が読む形になっている。※`.claude/skills/composition-guidelines/SKILL.md` は「本文は複製しない・DESIGN.md を読む」手順のみなので複製元ではない。**「汎用ルールは skill・プロジェクト固有は DESIGN.md」という分け方は採らない**: design.md の spec（トークン＋根拠の自己完結文書）にも Agent Skills の仕様（手続き知識の可搬パッケージ。company/team 固有の文脈も含んでよいと明記）にもその分担は書かれておらず、llms.txt という**外部 AI 向けの主配信経路が skill とは別に存在する**ため、汎用分を skill へ移すと公開物の生成元が Claude Code 専用ディレクトリに依存する。現行の「skill = 手順 / DESIGN.md = 規範の SSOT」を維持する | 合成ルールを機械可読な単一ソース（例 `design/composition-rules.json`）に置き、DESIGN.md の表・llms.txt の Must rules・judge のルーブリックを生成する。**受け入れ条件**: ルールを 1 つ足して 3 つの出力すべてに反映されることを実証する |
| T40 | `src/` の生 UI 文字列を検出するガード | **P1** | 起票 2026-07-27（T32 の穴 ①）。`check-stories-hardcoded` は `stories/**` のみ、`check-i18n-components` は「src は型付きキー（`WimI18nKey`）で守る」として**意図的に src を走査しない**。しかし型が守るのは**キーの間違い**であって、**`t()` を呼ばない生文字列**は誰の網にもかからない。実際 `DataGrid` のページャ文言 3 件と aria-label / alt の 8 件が漏れていた | `src/components/**/*.tsx` を対象に、JSX テキスト子要素・テキスト系 prop・`aria-label` / `alt` の生英語を検出（`check-stories-hardcoded.js` の検出器を流用可）。既存 11 件を baseline にしたラチェットで開始し、解消後に 0 でハードゲート化 ／ **受け入れ条件**: `DataGrid.tsx:353` を含む既知 11 件を**鳴らせること**を実証する |
| T41 | コントラスト検査を「トークン」から「コンポーネントの実使用」へ | **P1** | 起票 2026-07-27（T32 の穴 ②）。`check:contrast`（T34）は **outline の文字色を `text-{intent}` ロールで解決する前提**（`check-contrast.js:121`）で 126 組すべて緑。しかし `Button` の SCSS は `color: var(--wim-color-danger)` を直接使っており、**SSOT を迂回している事実がガードから見えない**。結果 dark の `outline`×`danger` が 4.35:1 で出荷されていた。`color:` に intent 色を直接使う箇所は src 全体で **50 件**あり、同型が他にもある可能性が高い。Button のストーリーに `outline`×`danger` の組み合わせが 1 つも無かったため a11y スイートも見ていなかった | ①短期: `*.module.scss` で `color:` に `--wim-color-{intent}` を直接使っている箇所を列挙し、`text-{intent}` へ寄せる（または例外として明示） ②恒久: コントラスト検査を SCSS の実際の `color` / `background-color` ペアから解決する方式へ寄せる ／ **受け入れ条件**: 現行の `button.module.scss:165` に対して**鳴ること**を実証する |
| T42 | 生成物の再生成をコミット時に強制する | **済** | 起票 2026-07-27（#132 が `check:llms` で落ちたことから）。`llms.txt` は docgen（＝コンポーネントの props/tokens）由来なので、**prop を 1 つ変えるだけで古くなる**。しかし lint-staged は `llms:build` を呼んでおらず、CI の `audit:docs` で初めて落ちる＝「再生成が要る」という依存が人間の記憶に残っていた。同種の依存は既に `generate → stage-generated.js` の対で自動化されている（i18n リソース / アイコン / intents の 3 箇所）のに、llms.txt だけ輪の外にあった。**リリース PR で同じ形の事故が既にある**（#116 → #117。`changeset version` 後にバージョンが埋まった `llms.txt` が不一致になりマージ不能） | lint-staged に `generate-llms.js` ＋ `stage-generated.js public/llms.txt public/llms-full.txt` を追加（入力は `src/components/**/*.{ts,tsx}` / `*.module.scss` / `public/locales/en/**` / `src/data/components.json` / `scripts/slop-dictionary.json` / `scripts/generate-llms.js`）。**あわせて `generate-llms.js` が docgen を「無いときだけ生成」していたのを毎回更新に変更**（古い docgen JSON から生成すると、ローカルは整合して見えるのに CI（クリーンチェックアウト＝毎回生成）だけ落ちるため。キャッシュが効くので warm 0.6 秒） ／ **受け入れ条件**: prop の説明を 1 行変えて `lint-staged` を通し、`public/llms-full.txt` が**再生成されてステージまでされること**を実証する（実証済み: プローブ 2 回とも `llms-full.txt` に反映＋自動ステージを確認） |
| T43 | VRT の非決定的ストーリー 4 件の始末 | **P2** | 起票 2026-07-27（#135 で顕在化）。ベースラインを update で撮り直したあと、**同じコミットの compare で 4 件が落ちた**: `snackbar--default`(dark) / `toast--success`(dark) / `voicevisualizer--large-height`(dark) / `audio--premium-features`(light)。これは T11 が定めた除外基準（同一コミットで update→compare が落ちる）にそのまま当てはまる。main では緑なので、**古いベースラインがたまたま安定した瞬間を捉えていただけ**で、撮り直すと不安定さが表面化する。#135 では 4 件を main の版へ戻して回避した（＝爆弾は残っている） | 原因の見当: Snackbar/Toast は `autoHideDuration` のタイマー（VRT の `clock.setFixedTime` は Date を固定するがタイマーは止めない）、Audio/VoiceVisualizer はメディア読み込み。**対応候補**: ①ストーリー側で `autoHideDuration={0}` 等の決定化 ②`NONDETERMINISTIC_STORY_IDS` へ追加。①のほうが可視カバレッジを失わないので優先 ／ **受け入れ条件**: 4 件について update → 同一コミットで compare を 2 回連続で緑にできること |
| T37 | リポジトリの「主張」の機械検証 | **P3** | llms.txt の版落ちは「常に最新」という主張が破れていた例で、`check:llms` で塞いだ（T27）。同種の主張が他にもある | README / MDX のコード例が実際にコンパイルできるか（llms.txt の価値は PR #64 の A/B で「API 正当性＝コンパイル可否」と測定済み）。README の peer 表と `package.json` の `peerDependencies` の一致 ／ **受け入れ条件**: README のコード例を 1 つ壊した状態で**落ちること**を実証する。 |

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
| ⑤ | `Toolbar.Group` が折り返せない（`toolbar.module.scss:37` の `.group` に `flex-wrap` が無く既定 `nowrap`）。ボタンを 1 グループに詰めると **390px でページごと横スクロール**する。`.group { flex-wrap: wrap }` で直る。アプリ側はグループを分けて回避可能だが、知らないと必ず踏む | ライブラリ | 未着手 |
| ⑥ | `Code` に `white-space: nowrap` が無く、狭い列で **1 文字ずつ縦に折り返る**（ロット番号が縦一列になる）。アプリ側の回避はインライン style しかなく必須ルール 3 に反する | ライブラリ | 未着手 |
| ⑦ | 狭幅カード表示の切替点が `container-down(md)` 固定＝**タブレット幅でもカードになる**。閾値を変える prop が無い | ライブラリ | 要判断 |
| ⑧ | `mobileCard` が**選択列をリセットしない**。`.selection` の固定幅 60px と `_stickyLeft` の inset 影が残り、`justify-content: space-between` ＋ 空の `::before` でチェックボックスが 60px の右端へ押される＝「四角い囲みの左に謎の空間」 | ライブラリ | 未着手（⑩と同一原因） |
| ⑨ | **`Container` に横ガターが無い**（`container.module.scss` は max-width と中央寄せのみ）。ビューポートが max-width より狭いと必ず端に張り付く。**既存のインライン style 負債の出どころ**でもある（`Marketing.stories.tsx:112` が `style={{ padding: … }}` で回避＝`check:slop` ラチェット 52 の一部）。修正は破壊的（全画面の余白と VRT 全面更新）ため方針判断が要る: ①既定の `padding-inline` を入れる（0.6.0 相当）②`gutter` prop で opt-in（非破壊）③ドキュメントで「ページ余白は `Box` の `px`」と明文化 | ライブラリ | **要判断** |
| ⑩ | `mobileCard` で**外枠パネルが残る**。消えるのは `<table>` の枠だけで、`.wim-data-grid` の白背景 + 枠 + 角丸と `.tableContainer` の白背景が残る＝枠付きパネルの中に枠＋影のカードが並ぶ二重フレーム（カード間に外側の白が見える）。**ライブラリ自身が必須ルール 8・9 を破っている**。card モードで root の背景/枠/角丸を落とし footer の border-top を外す案を注入で検証済み | ライブラリ | 未着手（⑧と同一原因） |
| ⑪ | スマホ表示の仕上げ 4 件（カード上端の角丸が描かれない＝`border-collapse: collapse` では行の `border-radius` が描画されない／カード間に白が出る＝`tbody` と **Table 自身のラッパー**が面を塗り続ける（⑩ で直したのは DataGrid 側のコンテナだけだった）／`InlineEdit` を含む行だけ 16〜24px 高い＝編集アイコンが `aria-hidden` なのに md の IconButton で 36px を要求＋セルが控えめな高さのコントロールにさらに padding を足す／カード内の行が窮屈＝表の compact 密度（4.8px/8px）をそのまま継承） | ライブラリ | **済**（#135） |
| ⑫ | 行アクションのメニューを開くと**表が伸びる／カード表示では消える**。`Dropdown` だけが floating-ui を使わず `position: absolute` のままで、スクロールコンテナ（`overflow: auto`）とカードの `overflow: hidden` から出られなかった。実測: 表表示で `containerScrollH` 423 → 536、カード表示は描画ゼロ。**さらにポータル化の副作用として、位置決定前の要素に `focus()` してページ最上部へ飛ぶ退行が出た**（390px で `scrollY` 2503 → 0）＝`preventScroll` で解消 | ライブラリ | **済**（#136） |
| ⑬ | `loading` が「初回ロード」と「再取得」を区別できない。true にすると常に `inert` ＋ 不透明度 0.6 ＋ `pointer-events: none` で**全操作を遮断**する。再取得のたびに表全体が触れなくなるのは強すぎるが、弱める手段が利用者側に無かった（`Intake queue / refetching` が永久に操作不能に見えたのがきっかけ） | ライブラリ | **済**（`loading: boolean | "blocking" | "refresh"`。既定は不変。refresh は `aria-busy` のみで**減光しない**＝不透明度を落とすと二次テキストが AA を割るため） |

**この画面側で対処したもの**: `mobileCard` の有効化（⑥の症状は表からは消える）／一括バーを `Toolbar.Group` 3 つに分割（⑤の回避）／ページのガターを `Box px="2xl"` で付与（⑨の回避。インライン style を使わない形）。

#### T32 の 2 枚目「複数ステップのフォーム」の結果（2026-07-28）

**成果物**: `stories/Patterns/Form/WholesaleApplication.stories.tsx`（同じ Kiyosumi Roasters に卸売取引を申し込む側の画面。4 ステップ = 事業者 / 納品条件 / 書類 / 担当者と確認コード、6 ストーリー = 通常 / 送信して弾かれた / 納品条件 / 書類 / コード不一致 / 受付完了）。en/ja/pt を最初から。合成カバレッジ **60/208 → 74/208（36%）**。**i18n キーは 91**（1 枚目の 56 の 1.6 倍。フォームはラベル・エラー文・選択肢がすべてコピーになるため）。

ゲートは tsc / eslint / i18n:check / check-stories-hardcoded / check:slop すべて緑（**インライン style ゼロ＝ラチェット 52 を増やしていない**）。a11y は 12 ケース中 4 件赤で、これが下表 ③④ の出どころ。狭幅は 390 / 768 / 1280 × en / ja / pt を実測し、**ページの横スクロールはどの組み合わせでも 0**。

**出た穴 13 件**。1 枚目と違い、狭幅由来は ⑦ の 1 件だけ。

| # | 穴 | 層 | 状態 |
|---|---|---|---|
| ① | **`Alert` / `Banner` / `Notification` / `Snackbar` / `Toast` / `Result` の既定アイコンが、success 以外すべて「塗りつぶした丸」**。`_internal/FeedbackIcon.tsx` の switch が `success → CheckIcon` しか持たず、danger / warning / info / default は全部 `CircleIcon` に落ちる。`alert-circle` も `info-circle` も `src/icon/` に実在するのに使われていない。**docgen と llms.txt は「intent に応じた既定アイコンが出る」と主張している**＝T37 型の主張破れでもある。0.6.0 に出荷済み | ライブラリ | 未着手 |
| ② | **`OtpInput` が初期 `value` を無視する**。derived-state で `prevValue` を `useState(value)` と初期化しているため、**マウント時の value は一度も反映されない**（変化して初めて同期する）。`<OtpInput value="418203" />` が空欄 6 個で描画される＝保存済みコードの再表示・ステップの再マウントで消える | ライブラリ | 未着手 |
| ③ | **`FileUpload required` が axe critical を出す**（`aria-allowed-attr`）。トリガの `<Button>` に `aria-required="true"` を付けているが、`role=button` は `aria-required` を許可しない。`FileUpload.tsx:122`。**0.6.0 に出荷済みの WCAG 4.1.2 違反**で、a11y スイートが自動検出した | ライブラリ | 未着手 |
| ④ | **`Alert` のタイトルが既定で `<h4>`**。h1 → h2（ステップ見出し）の下に置くだけで `heading-order`（moderate）に落ちる。そもそもアラートのタイトルは文書構造の見出しではないので、既定が見出しタグであること自体が要判断。画面側は `titleTag="h3"` で回避した | ライブラリ | **要判断** |
| ⑤ | **必須表示が塗りの `Badge intent="danger"`**（`_internal/FieldLabelContent.tsx`）。必須項目の多いフォームでは**何も間違えていない状態でページ中がエラー色**になり、実際のエラーと同じ色なので区別が消える。`aria-required` は別途正しく付いているので a11y ではなく視覚設計の問題 | ライブラリ | **要判断** |
| ⑥ | **`Code` の inline が `--wim-color-text-danger` を直接使う**（`code.module.scss`）。ロット番号・受付番号のような**中立な識別子が赤く出る**（受付完了の Result 上でも赤）。専用トークンが無く意味色を流用している＝**T41 と同型**（コンポーネントが SSOT を迂回して intent 色を使う） | ライブラリ | 未着手 |
| ⑦ | **`SegmentedControl` は入りきらないと黙って切れる**。`overflow: hidden` で、折り返しも縮小もスクロールもしない。**ラベル長は i18n で変わる**ので en で収まっても他言語で切れる（実測: pt 390px で `clientWidth 298 < scrollWidth 368`＝最後の選択肢が読めない）。en の 390px でも 5px 欠けていた | ライブラリ | 未着手 |
| ⑧ | **`FileUpload` / `Dropzone` に「すでにアップロード済み」を表す手段が無い**（`value` / `files` prop が無く `onChange` だけ）。実アプリでは必ずサーバ側の既存ファイルを出すので、**一覧はアプリが自前で描くことになり、コンポーネントは永久に「ファイル未選択」と言い続ける** | ライブラリ | 未着手 |
| ⑨ | **カード内でフィールドをグルーピングする手段が無い**。`Fieldset` は `variant` が default / full-width のどちらも枠＋角丸つきで、`Card` の中に置くと必須ルール 9（枠の二重）に反する。`Legend` は `<legend>` を出すので fieldset の外では使えない。結果、節見出しを `Text` で自作するしかなく**グループの意味論（`<fieldset>`）が失われる** | ライブラリ | 未着手 |
| ⑩ | **`Text` に折り返しを止める手段が無い**（`truncate` / `nowrap` prop なし）。狭幅で「1.2 MB」のような短い値が 2 行に割れる。回避はインライン style しかなく必須ルール 3 に反する＝**1 枚目の ⑥（`Code` に `white-space: nowrap` が無い）と同型** | ライブラリ | 未着手 |
| ⑪ | **`NumberInput` に単位を添える手段が無い**（suffix / adornment prop なし。`rightIcon` はアイコン名しか受け取らない）。kg・円・% はフォームの定番なのでラベルに「（kg）」と書く回避が要る | ライブラリ | 未着手 |
| ⑫ | **`Icon` と `Text` で色トークンの語彙が違う**（`Text color="text-tertiary"` / `Icon color="tertiary"`）。型エラーになるので事故にはならないが、同じ色を指す prop で綴りが揃っていない | ライブラリ | 未着手 |
| ⑬ | `OtpInput` の `labels.digitAriaLabel(index)` は **1 始まり**で呼ばれる（`OtpInput.tsx:205` が `index + 1` を渡す）が、型にも docgen にも書かれていない。0 始まりと解釈して `index + 1` を渡すと "Digit 2〜7" になる（実際にそうなった） | ライブラリ | 未着手 |

**作業再開ポイント（2026-07-28 時点。ここから続ける）**

| PR | 中身 | 状態 |
|---|---|---|
| **#143** | 画面本体（`WholesaleApplication.stories.tsx` ＋ i18n 91 キー ＋ この節） | **VRT compare が赤（新規 6 ストーリーのベースライン未撮影＝想定どおり）**。他は緑 |
| **#140** | ③ `FileUpload` の `aria-required`（axe critical） | **CI 全緑**。マージ可 |
| **#141** | ② `OtpInput` がマウント時の value を無視 | CI 実行中（ローカルは全量緑・修正前に落ちることも実証済み） |
| **#142** | ① `FeedbackIcon` の既定アイコン（danger/warning/info が塗り丸） | CI 実行中。**マージすると Alert / Banner / Notification / Snackbar / Toast / Result の VRT ベースラインが全部動く** |

**次の手順（この順で）**:

1. **#140 → #141 → #142 の順にマージ**（#140 が最優先。出荷済みの WCAG 4.1.2 違反）
2. `feat/patterns-application-form` を main にリベース。**#140 が入って初めて #143 の a11y が緑になる**ので、ここで a11y の緑を実証する（ローカル実行は `npm run storybook` を上げてから。dev サーバが落ちていると webServer 経由でタイムアウトして偽の赤が出る）
3. **VRT update を最後に 1 回だけ** workflow_dispatch で流す（コミットバックが素の git push なので、そのブランチへの push を全部終えてから。#142 のベースライン更新もここで一緒に入る）
4. 残り 9 件（④〜⑬）の起票済みの穴を、要判断（④⑤）と機械的な修正（⑥⑦⑧⑨⑩⑪⑫⑬）に分けて着手するか、3 枚目（AI アシスタント画面）へ進むかを判断する

**残っている判断**: ④（`Alert` のタイトルを既定で見出しにするか）と ⑤（必須マークを danger の塗りバッジのままにするか）は既定値の変更＝利用者の見た目が変わるため、0.7.0 に寄せるかどうかを含めて人間の判断が要る。

**この画面側で対処したもの**: `Alert` に `titleTag="h3"`（④）／`SegmentedControl` のラベルを短い語に置き換え（⑦。pt は "A cada duas semanas" → "Quinzenal"）／`CounterTextarea` を `fieldSizing="content"` に（狭幅で本文が途中で切れるため）／`Fieldset` を使わず `Card` 直下に並べる（⑨）／単位はラベルに併記（⑪）。

**保留**: T32 の画面は i18n に依存するため **StackBlitz には出せない**。「Patterns を全部 StackBlitz に出す」構想は実測でブロッカーを確認済み（`t()` が 302 箇所 / Storybook の殻 / 1 ファイルに複数画面 / `AI.stories.tsx` が `../../../src` を import）。**変換器は当面作らない**（検証を優先）。必要になった時点で別途判断する。

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
