# WIM UI 改善リスト（継続用）

最終更新: 2026-07-15（リポジトリ調査で未記載の改善候補を追加）  
作業再開時はここから。済んだ詳細は git 履歴を参照。

---

## 次にやるとよい順（publish 以外）

1. **運用維持**  
   `PX_BASELINE = 0` / `i18n:check` / `check:api` / `check:imports`。触った SCSS に未注記 px を増やさない。品質ゲートは PR テンプレに従う。
2. ~~未着手の改善候補~~ — **T1〜T7 すべて解決済**（2026-07-15。次節参照）

**npm 公開**は人が決める項目（`private` 解除・changeset・`NPM_TOKEN`）。エージェントは勝手に進めない。  
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

### npm 公開判断とセット

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
| T17 | data-display / ai の optional-peer 混在解消 | スモークゲート初回実測で判明: `wimui/data-display` と `wimui/ai` は **peer-free コンポーネント（Accordion/Avatar 等）と optional-peer 依存コンポーネント（Markdown→`react-markdown`、CodeDiffViewer→`diff`）が同一カテゴリバレルに混在**。そのためカテゴリサブパスを import すると（peer-free だけ使いたくても）optional peer を要求する DX の角。※ルートバレル `.` は `-core` 分割で bare-safe なので回避経路はある。**対応候補**: ①peer 依存コンポーネントを `React.lazy`/動的 import 化してカテゴリバレルの eager 依存を外す ②peer 依存分をサブパスから分離（例 `wimui/ai/markdown`）③現状維持で「カテゴリサブパスは同カテゴリの最も重い peer を要求しうる」と明文化。公開前に方針決定推奨（消費者の install 体験に直結） | **未着手** |
| T18 | 英語 README（公開前・必須級） | 現在 `README.md` は**日本語のみ**。npm のパッケージページに出るのはこの README で、npmjs.com / GitHub の読者は英語圏が主。API 名も英語なのに README が日本語だけだと**発見性と採用が大きく落ちる**。**対応**: `README.md` を英語（正本＝npm 表示用）にし、日本語は `README.ja.md` として残す（先頭で相互リンク）。※pt 版は不要（pt はランタイム対応ロケールであってドキュメント言語ではない） | **未着手** |
| T19 | tree-shaking 実測 + pnpm/yarn install-smoke | ①**tree-shaking 検証**: `wimui` を1コンポーネントだけ import したとき、**未使用の optional-peer 依存コード（recharts / react-markdown / fullcalendar 等）が最終バンドルから確実に落ちる**か実測（`sideEffects` 設定が効いているかの担保。落ちないと「Button だけ欲しいのに recharts が入る」事故）。②**pnpm/yarn install-smoke**: 現行スモークゲートは npm install ベース。pnpm は strict な node_modules（phantom deps 禁止）で **peerDependencies 宣言漏れを露呈させる**ため、pnpm/yarn でも install→import が通るかを検査プロファイルに追加。→ [[SMOKE]] の拡張 | **未着手** |
| T20 | Storybook 画像の権利衛生 | 公開 npm パッケージには画像は入らない（`files:["dist"]`、dist に画像なし＝**公開物はゼロリスク**）。本項は**公開サイト（gh-pages Storybook）の衛生**。①同梱サンプル画像（`src/media/*`・`public/demo/*`・`public/images/*`）は **AI 生成**。残余リスクは「モデルがまれに商標/ロゴ/実在人物似の要素を出力しうる」点＝**目視確認**と、**生成ツール名+商用可 ToS の記録**で緩和。純 AI 生成物は著作権が発生しない可能性がある（＝自分が独占できないだけで侵害ではない）。②多数ストーリーの **Unsplash/picsum ホットリンク**は Unsplash License 下で低リスクだが、リンク切れ耐性で少数を CC0/自作へ自前ホスト化する余地。公開ブロッカーではない（低優先） | **未着手** |
| CI-1 | `[skip ci]` head 問題（品質ゲートのすり抜け） | **VRT update のコミットバックが `[skip ci]` 付きで最終 head になると、その head で品質ゲート（Lint/audit:lib/check:tokens 等）が一度も走らないまま「緑」に見える**。2026-07-18 に T10（PR #27）でまさに顕在化: letter-spacing トークン追加を `token-snapshot.json` に反映し忘れたが、`[skip ci]` ベースラインが最終 head だったため Lint がスキップされ、赤が main に入り次の PR #29 で初めて検出（#29 で修正）。加えて同日、**push イベントの取りこぼし**で PR head に CI が起動しない事象も観測（空コミットで再トリガーして回避）。**対応候補**: ①コミットバックを `[skip ci]` にせず、paths 無関係に必ず走る軽量ゲート（lint/audit:lib/check:tokens）だけは head で再検証させる ②またはマージ前に main 相当で `audit:lib` を必ず1回通す運用 ③main のブランチ保護＋required checks 導入（現状 main は保護なし＝赤でもマージ可能なのも一因） | **未着手** |

### デザイン（コンポジション）

| # | 改善 | 内容 | 状態 |
|---|---|---|---|
| T8 | 既存 Patterns のコンポジションガイドライン準拠 | DESIGN.md「コンポジションガイドライン（AI 的な画面を避ける）」を新設（2026-07-16。`.claude/skills/composition-guidelines/` で自動参照）。既存 `stories/Patterns/**` は違反あり: Marketing ヒーローの 135deg グラデ + 定型構成 + Skeleton 偽スクリーンショット、Page の絵文字 `☰` + `gap: "16px"` ハードコード + 既定値 style 上書き等。Marketing ヒーロー 1 件を先に再設計 → VRT before/after で確認してから他へ展開 | **済（全19ストーリー展開完了）**（2026-07-16。ヒーロー: グラデ/定型構成/Skeleton偽スクショ/AvatarGroupソーシャルプルーフ除去 + 実 Stats/Sparkline カード + 3言語手動翻訳。展開: 全パターンのキャンバスを surface-app に統一、Feature の偽プレースホルダ→実コンポーネントデモ（Sparkline/Progress/Badge/AvatarGroup）、CTA の primary 全面帯+ボタン上書き→カード構成+実数統計（205/3/AA）、Page の絵文字☰→AlignJustifyIcon・px ハードコード→トークン・Stats/Card の既定値上書き除去・数量ボタン→Plus/MinusIcon+intent="danger"、ProductCard の Skeleton 偽画像→ImageIcon プレースホルダ、AI の macOS 信号機ドット（hex 直書き）→アドレスバー風表示。副産物のライブラリ修正: 見出し hyphens:auto 除外（en/pt）+ 見出し禁則 line-break:strict（ja）。ゲート全緑（eslint/audit:docs/audit:lib/i18n:check）。VRT ベースラインは T11 の全量 update（`12d09460`、2026-07-16）で更新済み。汎用コピー刷新も完了（2026-07-16 続報: feature/testimonial/pricing/compare/feature_comparison を3言語で具体化、実在企業名入りの偽推薦文を撤去。ReactHookForm ストーリーの i18n-ignore 英語逃しも翻訳キー化し、ラチェット基準 36→28 に短縮） |
| T9 | ライトテーマのサーフェス値調整（階層の可視化） | サーフェス**語彙**は整備済みだがライトの**値**に差がない（`surface-app` = `surface` = `#fff`）。これがパターン側のグラデ即興の根本原因。PCCS Gy-9.5 相当の `gy9-5` を base.json に追加し `surface-app`（ライトのみ）へ割当 → 灰キャンバス+白カードの階層を成立させる。ダークは既に `#262626`/`#393939` で差があるため変更なし。`tokens:build` + DESIGN.md 値表更新 + VRT ベースライン更新が必要 | **済**（2026-07-16。`gy9-5` 追加・`surface-app` 割当・AvatarGroup リングを `surface` へ修正・Storybook 実機で #f5f5f5 適用確認済。VRT ベースラインは T11 の全量 update `12d09460` で更新済み） |
| T10 | タイポグラフィの主張強化 | 見出し用書体（または大サイズの letter-spacing 詰め・ウェイト差拡大）と見出し/本文のサイズジャンプ強化。`tokens/typography.json` 変更で全コンポーネントに波及するため VRT 全面更新前提 | **済**（2026-07-18。行高＋字間で完了、書体追加・サイズジャンプは方針として見送り）。①**行高**（2026-07-16）: Title の `line-height: normal` をトークン化（基本 snug 1.33 / xl 以上 tight 1.2、`[lang="ja"]` で snug-jp 1.5 / tight-jp 1.4 に出し分け）。②**字間**（2026-07-18）: `letter-spacing` トークン新設（normal 0 / tight -0.01em / tighter -0.02em）。Title に適用＝中〜大見出し tight・ディスプレイ段（xl〜xl4）tighter・小見出し（xs/sm）normal。**和文は詰めない**（かな/漢字は仮想ボディが詰まって見えるため `[lang="ja"]` で 0 出し分け＝規約3）。実機実測 en 見出し -0.020em / ja 0 を確認。③**見送り判断**: **見出し書体の追加は見送り**（en/pt はラテン1書体で賄えるが ja は和文ディスプレイ書体が別途必要＝数MB増・FOUT・公開CSS契約変更で web フォント非同梱の思想と衝突。3言語対称を優先しユーザー合意 A）。**サイズジャンプ強化も見送り**（Title の実効比は 1.265 定数。ディスプレイ段だけ 1 段上げると lg→xl に 1.602 の段差が入り定数が崩れる。一様に上げるには全 font-size トークン改訂＝全面波及になるため今回は据え置き、ユーザー合意）。DESIGN.md に字間節を追記。VRT 影響: 見出しの字幅がわずかに変わるため push 後に update dispatch） |
| T12 | a11y(axe)の実違反バックログ解消 | 起票時は「82 失敗」だったが、waitForStoryReady 移植（旧 goto+300ms はコード分割ストーリーのマウント前に axe が走り空 root を検査＝偽 pass）でローカル全量実測 **222 失敗**が真の規模と判明。根因は4クラスタ: ①dark の intent 色（濃色トーン）をテキストに流用（1.0〜2.5:1 が大量）②light の warning/success をテキスト流用（warning #ccb914 は白背景でも 2.0:1、success は T9 の #f5f5f5 化で 4.26 に転落）③構造違反（aria-hidden 内 focusable・label 欠落・nested-interactive・不許可 ARIA 属性・FullCalendar/ReactFlow 内部）④ストーリー直書き（color:"black"・素 button・color-mix デモ等） | **済（2026-07-17、全量 1,986 テスト全緑）**。対応: `text-success/warning/info` トークン新設 + text-danger 調整（light dp2、dark #ffa3a3）+ dark の text-accent/tertiary/on-disabled/on-success/on-danger 再調整。intents SSOT に **text ロール**追加（outline/subtle の文字色を AA 安全に解決）。Alert/Banner/Toast/Stats の oklch(l*0.7) 暗色化を text-* へ置換。Text/Title の primary/secondary を text 系トークンへ。構造修正: Sparkline(Recharts a11y layer 無効化)/Terminal/TagInput/PromptInput/SmartSearchInput/RTE/MarkdownRenderer(既定 aria-label 内蔵、i18n 3言語)/Tabs(パネル登録制 aria-controls)/Mentions/JsonViewer/ContextMenu(role=button 廃止)/CodeBlock/CodeDiffViewer(tabIndex)/ScheduleView(MutationObserver パッチ)。ストーリー修正多数 + heading-order。付随: **a11y CI を 4 シャード化**（timeout 30min + concurrency）、スペックに waitForStoryReady 移植（vrt/story-ready.ts へ共有化）、landmark 系 4 ルールを Storybook 合成起因として除外。**注意: dark 中心に見た目が広く変わるため push 後の VRT update 必須**。DESIGN.md 値表更新済 |
| T11 | VRT 基盤再建 | 調査で判明（2026-07-16）: ①直近40ランが cancelled20/failure16/success3 で、main の compare は 6h 上限到達で全滅（993 stories×2 themes を workers=2 の単一ジョブで回す構造が原因）②スナップショット 4,117 枚中、CI 未使用の chromium-win32 が 2,942 枚・削除済みストーリーの orphan が 80 枚・dark-linux は 230 枚しかない歴史的部分集合 ③マウント待ち導入前の世代の不良ベースライン（Storybook マネージャ UI + スピナーが写った画像等）が残存 | **着手中**（2026-07-16。win32 2,942 + orphan 80 を削除（linux 1,095 維持）。vrt.yml を 4 シャード matrix + 90min timeout + concurrency 自動キャンセル + update はシャード毎 artifact → merge job で一括コミットバックに再設計。playwright workers CI 2→4。**追加で真因2件を発見・修正**: ① 6h タイムアウトの正体は `npx serve -s`（バージョン未固定）が `/iframe.html` を 301 → `/iframe` にリダイレクトしマネージャ UI を配信 → 全テストがマウント待ちで空回りしていたこと。`http-server@14 -c-1` のリテラル配信に固定（不良ベースライン「マネージャ+スピナー」画像の発生源も同じ）。② T7 の sideEffects 削除リグレッションで本番ビルドの Icon レジストリが空 → name 指定 Icon が全 null（VRT の Icon ストーリー空描画 8 件で検出、`./src/icons.ts` を sideEffects に復元）。シャード実測: 約500テスト/12.5分。**07-16〜17 完了**: 全量 update 完走（9分49秒、1,986枚→非決定分除外後 1,916 枚コミットバック、dark 全量含む）。compare を4回反復して回転フレークを収束（13→8→3→0）: maxDiffPixels 400（AA ジッタ ≤220px 実測を吸収）+ 非決定ストーリー除外（Audit/* 21件=内部QA合成ページ、ChatUI/PromptInput=prefix、Toast/LoadingOverlay 等 ID 指定14件）。最終 compare 全緑。除外基準「同一コミットで update→compare が落ちること」をスペックのコメントに明記） |

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
| npm 公開の破壊なし準備 | **済**。公開判断は未 |
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
