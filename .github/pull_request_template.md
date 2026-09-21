## Summary

<!-- 何を・なぜ変えたか（1〜3 行） -->

## Quality gates

新規／変更した公開コンポーネントやバレル・トークン・SCSS・Storybook ドキュメントがある場合、該当するものにチェック。一覧の正本と各ゲートの目的は `docs/rules/quality-gates.md`（ずれると `npm run check:quality-gates` が落ちる）。

- [ ] `npm run check:api`（export / バレル変更時は意図どおりなら `check:api:update` してコミット）
- [ ] `npm run check:prop-api`（prop を足した・変えたときも落ちる。`check:prop-api:update` でスナップショットを更新してコミット）
- [ ] `npm run check:aschild`（`asChild` を足した／必須リスト対象なら `docs/rules/implementation.md` のリストも同期）
- [ ] `npm run audit:hardcoded`（未注記 px を増やしていない。`PX_BASELINE = 0`）
- [ ] `npm run i18n:check`（キー追加・変更時。長文ガイドは en 正本 → `i18n:sync`）
- [ ] `npm run i18n:check:mdx` / `npm run audit:stories-i18n`（Docs・stories の英語直書き）
- [ ] `npm run i18n:check:ignore`（`i18n-ignore` を増やしていない）
- [ ] `npm run check:imports`（charts / ai / peer data-display をルートから import していない）
- [ ] `npm run check:slop`（`stories/Patterns/**` を触ったとき。135deg グラデ・誇張形容詞・style 既定値上書き/px 直書きの増加を検出）
- [ ] `npm run lint` / `npm run stylelint`（触った TS/SCSS）
- [ ] 新規コンポーネントなら `npm run audit-mdx` と MDX 必須セクション
- [ ] ストーリーを足した・変えたなら `npm run check:a11y-incomplete`（axe の「人に確かめろ」の許可リスト。増えても減っても a11y の CI が落ちる）
- [ ] 出荷物（`src/` / `tokens/`）を変えたなら changeset を同梱した（`npx changeset`。版を上げない変更なら `npx changeset --empty`。無いと `changeset-reminder` がコメントする）
- [ ] 新規公開コンポーネントならプローブ（合成）を一度通した（画面は捨てる。`stories/Patterns/` にカバー率のために書かない。`docs/rules/implementation.md`）

まとめて流す場合: `npm run audit:lib` / `npm run audit:docs`（または `npm run audit:all`）。

## Test plan

- [ ] 関連ユニットテスト / Storybook で確認した内容
