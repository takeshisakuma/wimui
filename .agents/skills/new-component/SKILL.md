---
name: new-component
description: Use BEFORE creating, adding, or scaffolding a new WIM UI component (a new directory under src/components/<category>/, a new export in src/<category>.ts, or a new stories/<Name>/ entry) — including when another skill or a generic workflow suggests hand-writing the files. Points to this repository's own procedure (npm run scaffold, barrels, components.json, i18n keys, MDX, quality gates, the composition probe) so the new component ships with the same contracts as the existing ones.
---

# WIM UI のコンポーネント新規作成

新しい部品を作る前に、この repo の手順書を Read して従うこと。**汎用の「コンポーネントを作る」手順や外来 skill と食い違ったら、こちらが優先**（`AGENTS.md` の受け入れルール）。

手順:

1. `docs/rules/new-component.md` を読む。**ファイルは手で作らず `npm run scaffold -- <Name> <category>` で作る**（`forwardRef` + `asChild`・`@layer component`・MDX 雛形・`react-i18next` のモック・`wim-<kebab名>` フックが入る。手で作ると `check:hooks` / `audit-mdx` などで落ちる）。
2. 配置・命名・バレル・peer 依存の置き場は `docs/rules/new-component.md` の手順 1 と「置き場と命名」。**peer を eager に import する部品は `*-core.ts` やルートに載せない。**
3. API・レスポンシブ・a11y・`asChild` の要否は `docs/rules/implementation.md`。**複合 UI なら、公開せずレシピにできないか**を先に同じ文書で判断する。
4. 既定値（props の既定・`.module.scss` の既定の面）と `Default` ストーリーは `composition-guidelines` skill の対象。素で置いた姿が禁止パターンなら既定の失敗。
5. 文字列は `docs/rules/i18n.md`（`public/locales/en/` に足して `npm run i18n:sync`）。ストーリーは `docs/rules/storybook.md`、MDX は `docs/rules/mdx.md`。
6. 文書の 3 点を更新する: `src/data/components.json`（`docs/componentList.mdx` の実体）/ 個別 MDX / カテゴリの MDX。
7. 品質ゲートは `AGENTS.md`「品質ゲート・チェックリスト」の表をそのまま通す。**prop を足したので `npm run check:prop-api:update` の結果もコミットに含める**（加算でも赤になる）。公開シンボルが増えるので `check:api:update` も。
8. **合成（必須）**: カタログ単体では出荷しない。T179 のプローブで他の部品と組み、確かめたら画面は捨てる（`docs/rules/implementation.md`）。

手順の本文はここに複製しない（唯一の情報源は上に挙げた文書）。このファイルの実体は `.agents/skills/` にあり、`.claude/skills/` は `npm install` 時に `prepare` が繋いだリンク。**編集は `.agents/skills/` 側で行う。**
