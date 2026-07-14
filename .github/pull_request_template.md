## Summary

<!-- 何を・なぜ変えたか（1〜3 行） -->

## Quality gates

新規／変更した公開コンポーネントやバレル・トークン・SCSS がある場合、該当するものにチェック。

- [ ] `npm run check:api`（export / バレル変更時は意図どおりなら `check:api:update` してコミット）
- [ ] `npm run check:aschild`（`asChild` を足した／必須リスト対象なら RULES のリストも同期）
- [ ] `npm run audit:hardcoded`（未注記 px を増やしていない。`PX_BASELINE = 0`）
- [ ] `npm run i18n:check`（キー追加・変更時。長文ガイドは en 正本 → `i18n:sync`）
- [ ] `npm run check:imports`（charts / ai / peer data-display をルートから import していない）
- [ ] `npm run lint` / `npm run stylelint`（触った TS/SCSS）
- [ ] 新規コンポーネントなら `npm run audit-mdx` と MDX 必須セクション

まとめて流す場合: `npm run audit:lib`（または変更範囲に応じて個別コマンド）。

## Test plan

- [ ] 関連ユニットテスト / Storybook で確認した内容
