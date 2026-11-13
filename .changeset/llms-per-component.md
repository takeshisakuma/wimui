---
"wimui": minor
---

パッケージに、部品ごとの AI エージェント向けファイル `dist/llms/<Component>.md` を同梱した（T368）。`wimui/llms/Select.md` のようにサブパスでも引ける。

- 1 つの部品の、すべての prop の型と既定値・子の部品（`Dialog.Content` など）・読むデザイントークンを載せる。`llms-full.txt`（約 260 KB）を丸ごと読ませずに、その部品の分だけを渡せる。
- 入れた版そのものの内容。公開サイトの `llms.txt` は main を追うので、入れた版より先行することがある。`llms.txt` / `llms-full.txt` の末尾と「Using with AI」のページに、この置き場を書いた。
