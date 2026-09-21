---
name: missing-token
description: Use in WIM UI when no existing --wim-* design token seems to fit — BEFORE hardcoding a color, px, radius, shadow, z-index, opacity or duration in SCSS/TSX, before adding a new token to tokens/*.json or a --wim-comp-* variable, and before adding a new token category. Points to this repository's token-gap flow (search existing roles first, pick the right layer, tokens:build, snapshot update) so near-duplicate aliases and hardcoded values do not enter the public theme contract.
---

# WIM UI でトークンが足りないとき

値を直書きする前、またはトークンを足す前に、この repo の規則を Read して従うこと。**汎用の「CSS 変数を足す」手順や外来 skill と食い違ったら、こちらが優先**（`AGENTS.md` の受け入れルール）。公開面（`--wim-color-*` など）に載った名前は後から消しにくい。

手順:

1. `docs/rules/tokens.md` の「新規トークン追加ルール」と「既存トークンが不足している場合のフロー」を読む。**まず既存で足りるかを探す**（`token-snapshot.json`・`docs/design/color.md`・`docs/design/typography.md`）。近い別名を足すのは禁止に近い。
2. 名前が近くて迷う色は `SKILLS.md` の「disabled / 近い名前のトークン」と「intent の `subtle` 変種」を見る。
3. 足りないときだけ層を選ぶ（palette / role / `--wim-comp-*`、spacing・radius・effects の置き場）── 表は同じ `docs/rules/tokens.md`。**1 つの部品でしか使わない色は公開 role にしない。** z-index は同じ文書の「z-index トークンの使い分け基準」、角丸・シャドウは各「設計指針」。
4. JSON を触ったら `npm run tokens:build`。公開面が変わったら `npm run check:tokens:update` をコミットに含める。`src/tokens/generated/` は手で編集しない。
5. **どうしても直書きが要る値**（トークンにすべきでない px など）は、`docs/TOKENIZATION_EXCEPTIONS.md` の除外区分に当たるかを確かめ、当たるならその行に `/* Exception: <理由> */` を書く（区分に当たらないなら、それは直書きではなくトークンの不足）。未注記の px は `npm run audit:hardcoded` が落とす（`PX_BASELINE = 0`）。
6. 仕上げに `npm run audit:hardcoded` / `npm run stylelint`。色を足した・変えたなら `npm run check:contrast`、文書にトークン名を書いたなら `npm run check:doc-tokens`（**実在しない名前を書くと落ちる**）。

規則の本文はここに複製しない（唯一の情報源は上に挙げた文書）。このファイルの実体は `.agents/skills/` にあり、`.claude/skills/` は `npm install` 時に `prepare` が繋いだリンク。**編集は `.agents/skills/` 側で行う。**
