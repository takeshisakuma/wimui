# 品質ゲート

> この文書は `AGENTS.md`「品質ゲート・チェックリスト」から 2026-09-21 に切り出したものです。**PR を出すときにだけ要る**ので `docs/rules/` に置きます。エージェントへの指示の正本は `AGENTS.md` です。

**この表がゲートの正本です。** 同じ一覧は 3 か所にありました ── `AGENTS.md` の表、`.github/pull_request_template.md` の Quality gates、`npm run scaffold` が完了時に出す一覧。**3 つとも中身が違い**（`check:prop-api` と `check:a11y-incomplete` は AGENTS.md にしか無く、`i18n:check:mdx` / `audit:stories-i18n` / `i18n:check:ignore` / `check:slop` は PR テンプレートにしか無かった。PR テンプレートは廃止済みの「RULES のリスト」を指していた）、どれを見るかでゲートが変わっていた。

- PR テンプレートは GitHub が PR ごとにチェックボックスとして出すので、指し先にはできない。**コマンドの集合がこの表と一致すること**を `npm run check:quality-gates` が見る
- `scaffold` の一覧は**この表から読んで出す**（写しを持たない）
- この表に書いたコマンドは `package.json` に実在すること（存在しない script 名は npm が exit 1 だけ返し、ゲートが落ちたように見える）

コミット・PR 前に、変更に該当するものをパスすること。

| チェック項目 | コマンド | いつ | 目的 |
|---|---|---|---|
| 公開 API 表面 | `npm run check:api` | export / バレルを変えたとき | `exports` + バレルシンボル（`api-snapshot.json` v2）。意図的変更時のみ `check:api:update` |
| prop シグネチャ | `npm run check:prop-api` | prop を足した・変えたとき | シンボル名では見えない prop の破壊（消えた・必須になった・型が狭まった）。**prop を足したときも落ちる**ので `check:prop-api:update` で `prop-api-snapshot.json` を更新してコミットする（2026-09-21 に強化。助言のままだと 18 prop 遅れて `Comment` が丸ごと未収録になり、**未収録の部品は prop を消しても永久に緑**だった）。鳴ることの実証は `npm run prove:prop-api` |
| ポリモーフィック監査 | `npm run check:aschild` | `asChild` を足したとき | `asChild` 実装と `docs/rules/implementation.md` の必須リスト同期 |
| トークン漏れ（PX） | `npm run audit:hardcoded` | SCSS を触ったとき | 色のハードコード禁止・未注記 px を増やさない（`PX_BASELINE = 0`）。詳細は `docs/TOKENIZATION_EXCEPTIONS.md` |
| i18n 整合性 | `npm run i18n:check` | キーを足した・変えたとき | en / ja / pt のキー一致。長文ガイドは en 正本 → `i18n:sync` |
| Docs・stories の英語直書き | `npm run i18n:check:mdx` / `npm run audit:stories-i18n` | MDX・ストーリーを触ったとき | 翻訳キーを通さずに書いた文言 |
| i18n の除外指定 | `npm run i18n:check:ignore` | `i18n-ignore` を足したとき | 除外を増やしていないか |
| peer import 境界 | `npm run check:imports` | charts / ai / peer 依存の部品を触ったとき | charts / ai / peer 依存をルート `wimui` から引いていないか |
| AI-slop | `npm run check:slop` | `stories/Patterns/**` を触ったとき | 135deg グラデ・誇張形容詞・style 既定値の上書き / px 直書きの増加 |
| 型・スタイル | `npm run lint` / `npm run stylelint` | TS / SCSS を触ったとき | 構文・スタイル |
| MDX 全数監査 | `npm run audit-mdx` | 新規コンポーネント | 必須セクション |
| a11y の `incomplete` | `npm run check:a11y-incomplete` | ストーリーを足した・変えたとき | 「axe が**人に確かめろ**と言った指摘」の許可リスト（`vrt/a11y-incomplete.json`）の形・理由・孤児。**新しいストーリーで増えても減っても a11y の CI が落ちる** ── 直すか、理由を書いて許す（更新手順は `MAINTENANCE.md` 12-2） |
| 合成（新規公開） | T179 のプローブ | 新規公開コンポーネント | カタログ単体では出荷しない。他部品と組んで置き方・a11y・狭幅を触り、確認後に画面は捨てる。`stories/Patterns/` にカバー率のために書かない（`docs/rules/implementation.md`） |

まとめて流す場合: `npm run audit:lib` / `npm run audit:docs`（または `npm run audit:all`）。

短期間に多くのコンポーネントを追加（または一気にリファクタリング）する場合も、上表をすべてパスすること。
