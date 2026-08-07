---
"wimui": minor
---

`DataGridColumn` に `maxWidth` を追加した。

`width` は従来どおり**列幅の下限**（表は `table-layout: auto` なので、内容や余りに応じて広がる）。**中身を止めたいときは `maxWidth`** を使う ── これを宣言した列でだけ、セルの内側が頭打ちになり、`Text truncate` がグリッドの中で初めて省略記号を出す。

`maxWidth` は**中身の上限であって列幅の上限ではない**（表は余った幅を配り続けるので、`maxWidth: 200` の列が 523px で描かれ、テキストだけ早く止まることがある）。JSDoc に実測値付きで記載した。
