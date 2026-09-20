# AGENTS.md

このファイルは、このリポジトリで作業する AI エージェント（Claude Code / Codex / Cursor / Gemini CLI ほか）への指示の**正本**です。`CLAUDE.md` は `@AGENTS.md` の 1 行（Claude Code の import 構文）、Gemini CLI は `.gemini/settings.json` の `context.fileName` でこのファイルを読みます。**写し（旧 `GEMINI.md`）は置きません** ── 写しは必ず腐るためで、2026-09-20 に廃止しました。入口の対応は `npm run check:instructions` が見張ります。

AI エージェント向けの skill は `.agents/skills/` が実体です（Codex / Cursor などはここを直接読みます）。Claude Code は `.claude/skills/` しか見ないため、`npm install` 時に `prepare` が自動で繋ぎます（`npm run skills:link` / 検証は `npm run check:skills-mirror`）。skill の**形式**は 1 ベンダーの設定ではなく開いた標準（Agent Skills）なので、`npm run check:skills` が `SKILL.md` の frontmatter と `name` がディレクトリ名と一致するかを見ます（実証は `npm run prove:skills-spec`）。

作業ごとの**詳細規則**は `docs/rules/` にあります（このファイルは毎セッション丸ごと読み込まれるので、**必要なときだけ読む規則はここに置きません**）。

| 何をするとき | 読む文書 |
|---|---|
| コンポーネントの実装・API・レスポンシブ・a11y・**複合 UI をレシピにするか公開するか** | `docs/rules/implementation.md` |
| トークン追加・CSS クラス名・角丸・シャドウ・**足りないときのフロー**・**z-index の選び方** | `docs/rules/tokens.md` |
| hover / active・`!important`・`@layer`・**ダークモードの作り方** | `docs/rules/css.md` |
| 翻訳キーの追加・PT-BR 語彙・ロケール分割・**キー追加の手順** | `docs/rules/i18n.md` |
| MDX を書く・**docs ページの構成**・**Docgen の差し込み** | `docs/rules/mdx.md` |
| ストーリーの階層・サイドバー・**ストーリーと argTypes の書き方** | `docs/rules/storybook.md` |
| アイコンを足す（**SVGR パイプラインの使い方**を含む） | `docs/rules/icons.md` |
| 複数部品を組む・部品の既定を決める | `docs/design/composition.md` |
| 部品を新規に作る・ディレクトリとバレルの配置 | `SKILLS.md`「コンポーネント新規作成の手順」 |
| テストの書き方・サイズ予算・CJS / peer / 密度 / Form の契約 | `SKILLS.md`（ビルドと出荷の契約） |
| pre-commit で何が走るか | `SKILLS.md`「pre-commit フックで自動チェックされる内容」 |

未着手の改善・再開ポイントは `IMPROVEMENTS.md` を参照してください。
定期点検（CI が見ていない＝壊れても赤が出ないもの）は `MAINTENANCE.md` を参照してください。
複数コンポーネントを組み合わせて画面・パターン・デモを作るとき、**および部品の既定値（props の既定・`.module.scss` の既定の面）やカタログの `Default` ストーリーを書くとき**は、必ず `docs/design/composition.md`（コンポジションガイドライン）に従ってください。部品を素で置いた姿は、その部品を使う画面すべてに出るため、既定が禁止パターンなら画面ではなく既定の失敗です（必須ルール 15 `default_anatomy`）。

---

## 基本ルール

- 回答は日本語で行ってください。
- 絵文字を使わないでください。

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

PR 作成時は `.github/pull_request_template.md` の Quality gates に沿ってチェックする。  
`npm run scaffold` 完了時にも同じゲート一覧がコンソールに出る。

### 1. 必須ゲート（新規コンポーネント / 公開面変更）

コミット・PR 前に、変更に該当するものをパスすること。

| チェック項目 | コマンド | 目的 |
|---|---|---|
| 公開 API 表面 | `npm run check:api` | `exports` + バレルシンボル（`api-snapshot.json` v2）。意図的変更時のみ `check:api:update` |
| prop シグネチャ | `npm run check:prop-api` | シンボル名では見えない prop の破壊（消えた・必須になった・型が狭まった）。**prop を足したときも落ちる**ので `check:prop-api:update` で `prop-api-snapshot.json` を更新してコミットする（2026-09-21 に強化。助言のままだと 18 prop 遅れて `Comment` が丸ごと未収録になり、**未収録の部品は prop を消しても永久に緑**だった）。鳴ることの実証は `npm run prove:prop-api` |
| ポリモーフィック監査 | `npm run check:aschild` | `asChild` 実装と `docs/rules/implementation.md` の必須リスト同期 |
| トークン漏れ（PX） | `npm run audit:hardcoded` | 色のハードコード禁止・未注記 px を増やさない（`PX_BASELINE = 0`）。詳細は `docs/TOKENIZATION_EXCEPTIONS.md` |
| i18n 整合性 | `npm run i18n:check` | en / ja / pt のキー一致 |
| peer import 境界 | `npm run check:imports` | charts / ai / peer 依存をルート `wimui` から引いていないか |
| 型・スタイル | `npm run lint` / `npm run stylelint` | 構文・スタイル |
| MDX 全数監査 | `npm run audit-mdx` | 新規コンポーネントの必須セクション |
| a11y の `incomplete` | `npm run check:a11y-incomplete` | 「axe が**人に確かめろ**と言った指摘」の許可リスト（`vrt/a11y-incomplete.json`）の形・理由・孤児。**新しいストーリーで増えても減っても a11y の CI が落ちる** ── 直すか、理由を書いて許す（更新手順は `MAINTENANCE.md` 12-2） |
| 合成（新規公開） | T179 のプローブ | カタログ単体では出荷しない。他部品と組んで置き方・a11y・狭幅を触り、確認後に画面は捨てる。`stories/Patterns/` にカバー率のために書かない |

まとめて: `npm run audit:lib`（範囲が広いとき）。

短期間に多くのコンポーネントを追加（または一気にリファクタリング）する場合も、上表をすべてパスすること。

### 2. 自動化スクリプトの活用

手動でファイルを作成ぜず、必ず `npm run scaffold -- <Name> <Category>` を使用してください。
これにより以下のボイラープレートが自動適用されます：
- `forwardRef` + `asChild` (Radix Slot)
- `@layer component` による SCSS ラップ
- 15 セクション構成の MDX テンプレート
- `vi.mock("react-i18next")` 済みのテストファイル

---

## アーキテクチャ概要

### ディレクトリ配置

- **`src/components/<category>/<Name>/`** — コンポーネント本体（`.tsx` + `.module.scss` + `.test.tsx`）
- **`src/components/_internal/`** — 複数コンポーネントが共用する内部パーツ
- **`stories/<Name>/`** — Storybook ドキュメント（`.mdx`）+ ストーリー（`.stories.tsx`）
- **`src/tokens/generated/`** — `tokens/*.json` から自動生成された SCSS/CSS 変数（手動編集禁止）
- **`src/icon/`** — SVG アイコン（保存時に `index.ts` へ自動エクスポート）
- **`public/locales/<en|ja|pt>/`** — i18next 翻訳 JSON

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

### コンポーネント新規作成の最短手順

1. `npm run scaffold -- <Name> <category>` でボイラープレート生成
2. `.tsx` にロジック実装、`.module.scss` にスタイル実装
3. `src/<category>.ts` にエクスポート追加
4. `src/data/components.json` にエントリ追加
5. `public/locales/en/` に翻訳キー追加 → `npm run i18n:sync`
6. MDX の各セクションを記述
7. 品質ゲート: `check:api` / `check:aschild` / `audit:hardcoded` / `i18n:check` / `check:imports` / `audit-mdx` / `lint`（PR テンプレとこのファイルの「品質ゲート・チェックリスト」）
8. **合成（必須）**: カタログの単体だけでは出荷しない。T179 のプローブで他部品と組み、確認後に画面は捨て、穴の修正と Realistic な単体ストーリーを残す。`stories/Patterns/` にカバー率のために書かない（`docs/rules/implementation.md`）

---

## ファイル・エクスポート

- コンポーネントは `src/components/<カテゴリ>/<コンポーネント名>/` ディレクトリに配置してください（例: `src/components/form/Button/`）。カテゴリは `layout` / `form` / `feedback` / `navigation` / `data-display` / `overlay` / `typography` / `media` / `charts` / `ai` のいずれかです。
- ディレクトリ名・コンポーネントファイル名はPascalCaseにしてください（例: `Button/Button.tsx`）。
- SCSSファイルはkebab-caseの CSS Modules にしてください（例: `button.module.scss`）。
- SCSSファイルは必ずコンポーネントのTSXファイル内でインポートしてください（例: `import styles from "./button.module.scss"`）。インポートがないとブラウザでスタイルが一切適用されません。テストやlintでは検出できないため注意してください。
- 新規コンポーネントは `src/<カテゴリ>.ts`（例: `src/form.ts`）にexportを追加してください。`src/index.ts` は各カテゴリファイルを re-export しているため、直接編集は不要です。

## テスト

- `describe` / `it` パターンで記述してください。
- `useTranslation` は必ず `vi.mock("react-i18next", ...)` でモックしてください。
- テストを作成し、通過することを確認してください（`npm run test`）。
- UIに影響する変更を行った場合は、VRTも実行してください（`npm run test:vrt`）。

## 品質チェック

- ESLintおよびStylelintで問題がないか確認してください（`npm run lint` / `npm run stylelint`）。
- pre-commitフックでは警告も0でないとコミットできません（`--max-warnings=0`）。
- 多言語化の対応をしてください。

---

## 多言語化（i18n）の境界（ランタイム vs ドキュメント）

`public/locales/` は置き場が共通だが、**利用者アプリに同梱される文字列**と **Storybook / ガイド専用の文言**は別物として扱う。

| 層 | 対象 | 置き場の目安 | 同梱 | 言語 |
|---|---|---|---|---|
| **ランタイム** | コンポーネント UI（aria-label、空状態、ボタン文言など） | `docs_` / `audit` **以外**の namespace（`form.json`, `components.json` 等）。`src/components` から `t(...)` / `useWimTranslation` で参照 | `npm run i18n:bundle` → `src/i18n/generated/` に**使用キーのみ**抽出して npm パッケージへ | **en / ja / pt 必須** |
| **ドキュメント** | Storybook MDX・ガイド長文・Props 説明・ストーリー文言 | `docs_*.json`（および `audit`）。`<T k="..." />` 等 | **ライブラリ利用側には同梱しない**（Storybook / 開発ドキュメント用） | キー集合は en / ja / pt で揃える（`i18n:check`）。**長文ガイドは en を正本**として書き、`npm run i18n:sync` で ja / pt へ展開 |

方針:

- ランタイムキーは短く・UI 向けに保つ。ガイドの長文や設計論をコンポーネント用 namespaceへ入れない。
- 新規の長いガイド（`docs_guide_*` 等）は **まず `public/locales/en/` に書く**。ja / pt は sync 後に必要なら人手で整える。en だけ先行コミットして他言語を空けたままにしない（`i18n:check` が落ちる）。
- ソースの JSDoc（IDE ホバー）は英語。Storybook Props 表の多言語は `doc.*_prop_*` キー側で行う（`docs/rules/i18n.md`）。
- ライブラリ利用者は i18next 不要。表示言語は `setWimLocale` / `WimProvider` の `locale`。

キーの命名・分割・PT-BR 語彙などの細則は `docs/rules/i18n.md`。
