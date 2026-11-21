---
"wimui": patch
---

ページ送りの `DataGrid` で、全体の行数と各行の位置が読み上げに伝わるようにした。以前は `aria-rowcount` がそのページの行数 + 見出しで、行に `aria-rowindex` が無く、2 ページ目の 1 行目も「11 行のうち 2 行目」と読まれていた。いまは `aria-rowcount` が `pagination.total` + 見出し、各行の `aria-rowindex` が全体での位置（見出しが 1）。`infiniteScroll` で続きがあるあいだは、全体が分からないので `aria-rowcount` は `-1`（ARIA の「不明」）。
