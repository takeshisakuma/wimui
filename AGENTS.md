# AGENTS.md

このファイルは、このリポジトリで作業する AI エージェント（Claude Code / Codex / Cursor / Gemini CLI ほか）への指示の**正本**です。`CLAUDE.md` は `@AGENTS.md` の 1 行（Claude Code の import 構文）、Gemini CLI は `.gemini/settings.json` の `context.fileName` でこのファイルを読みます。**写し（旧 `GEMINI.md`）は置きません** ── 写しは必ず腐るためで、2026-09-20 に廃止しました。入口の対応は `npm run check:instructions` が見張ります。

AI エージェント向けの skill は `.agents/skills/` が実体です（Codex / Cursor などはここを直接読みます）。Claude Code は `.claude/skills/` しか見ないため、`npm install` 時に `prepare` が自動で繋ぎます（`npm run skills:link` / 検証は `npm run check:skills-mirror`）。skill の**形式**は 1 ベンダーの設定ではなく開いた標準（Agent Skills）なので、`npm run check:skills` が `SKILL.md` の frontmatter と `name` がディレクトリ名と一致するかを見ます（実証は `npm run prove:skills-spec`）。

**他所で作られた skill を取り込むときの約束**（2026-09-21）。**skill はエージェントが従う指示**で、`allowed-tools` まで書けます ── 取り込みは依存を 1 つ増やすのと同じで、コードと同じ審査が要ります。仕様の検査は**形式しか見ない**（中身が「テストを消してよい」と書いてあっても通る）ので、次の 3 つを `check:skills` が機械で要求します。

- **出所を書く** ── `metadata.origin: vendor` を付け、`metadata.source`（取得元）と `metadata.reviewed`（**中身を読んだ日**・YYYY-MM-DD）を併記する。置き場では分けられません ── skill の探索は `.agents/skills` の**直下**を見る作りなので、`vendor/` のような中間ディレクトリを作ると「SKILL.md が無い skill」として落ちます。
- **ツール権限は黙って入れない** ── `allowed-tools` を持つ skill は、`metadata.allowed_tools_reason` に理由を書くこと。理由が書けないなら入れない。
- **このファイルが常に優先** ── 外来 skill の手順が上の「エージェントへの委任ポリシー」や `docs/rules/` と食い違ったら、**こちらに従う**（AGENTS.md は毎セッション読み込まれ、skill は description が当たったときだけ読まれます）。

作業ごとの**詳細規則**は `docs/rules/` にあります（このファイルは毎セッション丸ごと読み込まれるので、**必要なときだけ読む規則はここに置きません**）。

| 何をするとき | 読む文書 |
|---|---|
| コンポーネントの実装・API・レスポンシブ・a11y・**複合 UI をレシピにするか公開するか** | `docs/rules/implementation.md` |
| トークン追加・CSS クラス名・角丸・シャドウ・**足りないときのフロー**・**z-index の選び方**・**近い名前のトークン（disabled / subtle）と公開テーマ契約** | `docs/rules/tokens.md` |
| hover / active・`!important`・`@layer`・**ダークモードの作り方** | `docs/rules/css.md` |
| 翻訳キーの追加・PT-BR 語彙・ロケール分割・**キー追加の手順**・**ランタイムとドキュメントの境界（どの namespace に置くか・同梱されるか）** | `docs/rules/i18n.md` |
| MDX を書く・**docs ページの構成**・**Docgen の差し込み** | `docs/rules/mdx.md` |
| ストーリーの階層・サイドバー・**ストーリーと argTypes の書き方** | `docs/rules/storybook.md` |
| アイコンを足す（**SVGR パイプラインの使い方**を含む） | `docs/rules/icons.md` |
| 複数部品を組む・部品の既定を決める | `docs/design/composition.md` |
| 部品を新規に作る・ディレクトリとバレルの配置・**命名（PascalCase / kebab-case）**・**SCSS の import 必須（無いとスタイルが一切当たらず、テストでも lint でも検出できない）** | `docs/rules/new-component.md` |
| テストの書き方（`describe` / `it`・`react-i18next` のモック・UI を変えたら VRT） | `docs/rules/testing.md` |
| サイズ予算・CJS / peer / 公開 API / 密度 / Form の契約 | `docs/rules/build.md` |
| pre-commit で何が走るか | `docs/rules/pre-commit.md` |
| **PR を出す前に通すゲート**（どのコマンドを・いつ・何のために） | `docs/rules/quality-gates.md` |
| **VRT / a11y のベースラインを触る PR をマージする**（直列の着地・コミットバック後の head の数え方） | `docs/rules/vrt-baseline-prs.md` |
| CI・VRT・ガードを触る（潰れの測り方・VRT の除外と起動条件のずれ・スナップショット方式の罠・CI の Lint ジョブ・CI スキップ指示の誤発火） | `docs/rules/ci-and-guards.md` |

未着手の改善・再開ポイントは `IMPROVEMENTS.md` を参照してください（済んだ行は `docs/history/improvements-ledger.md` へ移す＝`npm run improvements:archive`。新しい番号は `npm run check:improvements` が出す）。
定期点検（CI が見ていない＝壊れても赤が出ないもの）は `MAINTENANCE.md` を参照してください。
複数コンポーネントを組み合わせて画面・パターン・デモを作るとき、**および部品の既定値（props の既定・`.module.scss` の既定の面）やカタログの `Default` ストーリーを書くとき**は、必ず `docs/design/composition.md`（コンポジションガイドライン）に従ってください。部品を素で置いた姿は、その部品を使う画面すべてに出るため、既定が禁止パターンなら画面ではなく既定の失敗です（必須ルール 15 `default_anatomy`）。

---

## 基本ルール

- 回答は日本語で行ってください。
- 絵文字を使わないでください。
- UI の文字列は多言語化する（en / ja / pt。ランタイムとドキュメントの置き場の違いは `docs/rules/i18n.md`）。

### ドキュメント管理

コンポーネントを新規作成・削除した場合は、以下をすべて更新してください。

- `docs/componentList.mdx`（データ実体は `src/data/components.json`）
- コンポーネント個別のmdx
- カテゴリーのmdx

---

## エージェントへの委任ポリシー（常設）

ユーザー確認なしで実行してよいこと:

- **ブランチ + PR 経由のコミット・push**（main への直接 push は禁止）
- **VRT の workflow_dispatch**（update / compare）。ただし update は「そのブランチへの push がすべて完了してから最後に 1 回」（コミットバックが素の git push のため、途中 push で確実に失敗する）
- **Dependabot の minor / patch PR のマージ**（`@dependabot rebase` → CI 全緑を確認してから。major は個別判断＝ユーザー確認）
- **CI の再実行・キャンセル**（スーパーシード済みの古いランの整理を含む）
- **a11y の赤の扱い**: T12 のバックログは解消済み（2026-07-17、全量全緑）のため、a11y の赤は原則「新規違反」。PR の変更起因なら修正して進めてよい。変更と無関係に見える赤（環境差・フレーク疑い）は、同一ストーリーをローカル axe（スペックと同一設定）で再現確認してから判断し、確信が持てなければ止めて報告

必ずユーザー確認が要ること:

- **機能 PR のマージ**（事前に条件付き承認がある場合を除く）
- **main への直接 push・force-push・履歴書き換え・リポジトリ設定変更**
- **npm 公開に関わる操作**（`private` 解除・changeset・publish。IMPROVEMENTS.md 記載のとおりエージェントは進めない）
- **依存の major 更新のマージ**（互換性根拠を添えて提案まで）

判断に迷う事態・事前条件で判定できない事態は、実行せず報告して止まること。

### 委任時の 2 つの約束（2026-07-26 の実績から）

1. **ガードは「故意に違反を作って落ちること」を、通る経路すべてで実証してから完成とする。**  
   未実証のガード、および「0 件」という結果は信用しない。**検出すべき既知の事例を過去のコミットで再現して鳴らすこと**が完成条件。同日の実例:
   - `check:slop` のラチェットは lint-staged 経由だと**部分集合を全体基準と比べるため常に素通り**していた（故意に px 直書きを入れて初めて判明）
   - `check:llms` は**バイト厳密比較のせいで Windows でだけ落ちる**偽陽性だった（CRLF が 46 行混入。git 的には差分ゼロ）
   - T33 の検出スキャナは既知ケース（`Card` の `padding="xl"`）を拾えるか自己検証できず結果を破棄した
   - `check:llms` は**リリース PR を構造的にマージ不能**にしていた。`llms.txt` は `package.json` の version を埋め込むため、`changeset version` の直後は必ず不一致になる（#116 で発生 → #117 でリリース手順側を修正）

   **「鳴ること」だけでなく「鳴ってはいけない経路で鳴らないこと」も含めて確認する。** 最低限、そのガードが走るすべての入口を通す: ローカル全量 / lint-staged（部分集合）/ CI（クリーンチェックアウト）/ **リリース PR（バージョンが上がった状態）**。上記 4 件はいずれも、この経路のどれか 1 つを試していなかったために出た。

2. **合成画面の視覚判定を自己申告しない。**  
   スクリーンショットを見て「問題なし」と報告しないこと。同日、Playground のスクショと computed style を確認したうえで「問題なし」と報告した直後に、ユーザーが**同じ画面から 5 件の欠陥**（カード角のボーダー欠落・View source の padding・table 下の余白・badge の色・Trend の色）を指摘した。画面を書くところまでは委任してよいが、**まず story 化して VRT / a11y / `judge:slop` に載せ、その結果を添えて人間のレビューに出す**。実際 Playground をストーリー化した瞬間、a11y スイートが Switch のラベル欠落（critical）を自動検出している。

---

## よく使うコマンド

```bash
npm run dev               # 開発サーバー起動 (Vite)
npm run storybook         # Storybook 起動
npm run build             # ライブラリビルド
npm run test              # Vitest 単体テスト
npm run test:vrt          # Playwright VRT
npm run lint              # ESLint (--max-warnings=0)
npm run stylelint         # Stylelint (--max-warnings=0)
npm run tokens:build      # デザイントークン再生成
npm run i18n:sync         # 翻訳キーを en→ja/pt へ同期（.env の GOOGLE_GENERATIVE_AI_API_KEY があれば自動翻訳、無ければ MISSING_TRANSLATION プレースホルダ挿入→手動翻訳が必要）
npm run i18n:check        # 3言語間の翻訳キー整合性チェック
npm run i18n:bundle       # コンポーネント使用キーの内蔵リソース再生成 (src/i18n/generated/)
npm run audit-mdx         # MDX 必須セクション欠落チェック
npm run scaffold -- <Name> <category>  # コンポーネント雛形生成
```

テストを1ファイルのみ実行する場合:
```bash
npm run test -- src/components/form/Button/Button.test.tsx
```

---

## 品質ゲート・チェックリスト

PR 作成時は `.github/pull_request_template.md` の Quality gates に沿ってチェックする（一覧の正本は `docs/rules/quality-gates.md`）。  
`npm run scaffold` 完了時にも、正本から読んだゲート一覧がコンソールに出る。

### 1. 必須ゲート（新規コンポーネント / 公開面変更）

**一覧と各ゲートの目的は `docs/rules/quality-gates.md` が正本**（2026-09-21 に移した）。同じ一覧はこのファイル・PR テンプレート・`scaffold` の出力の 3 か所にあって中身が違っていた。PR テンプレートとのずれは `npm run check:quality-gates` が落とし、`scaffold` は正本から読んで出す。

まとめて: `npm run audit:lib`（範囲が広いとき）。短期間に多くのコンポーネントを追加（または一気にリファクタリング）する場合も、すべてパスすること。

### 2. 自動化スクリプトの活用

手動でファイルを作成ぜず、必ず `npm run scaffold -- <Name> <Category>` を使用してください。
これにより以下のボイラープレートが自動適用されます：
- `forwardRef` + `asChild` (Radix Slot)
- `@layer component` による SCSS ラップ
- 15 セクション構成の MDX テンプレート
- `vi.mock("react-i18next")` 済みのテストファイル

---

## アーキテクチャ概要

### エクスポート構成

`src/index.ts` は各カテゴリの `src/<category>.ts` を re-export する。新規コンポーネントは `src/<category>.ts` に追加する。

カテゴリ対応ファイル: `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai`

Form 連携（optional）: `src/rhf.ts` → `wimui/rhf`（react-hook-form / zod）。ルート・`wimui/form` には載せない。

UI 密度: `data-density="comfortable|compact"` / `setWimDensity` / `WimProvider`。制御トークンは `src/styles/_ui-patterns.scss`。
テーマ: `WimProvider`（推奨）または `data-theme` on `<html>`（省略で OS 追従）。公開 CSS: `styles.css` 必須（トークン+コンポーネント）、`reset.css` 任意。

### トークンシステム

`tokens/*.json` → `npm run tokens:build` → `src/tokens/generated/_tokens.scss` の CSS カスタムプロパティ (`--wim-*`) として出力。コンポーネント SCSS はこれらのみ参照する（色・間隔・サイズのハードコード禁止）。

### Docgen 自動化

Vite プラグインが `.tsx` と `.module.scss` を解析し、Props / Tokens / Anatomy / テストコマンドを `src/data/docgen_*.json` に抽出。MDX 内で `<Docgen componentName="Foo" section="props" />` などで参照できる。
