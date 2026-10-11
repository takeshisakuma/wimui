---
"wimui": patch
---

`Mentions`: `id` を渡すと、包みの `div` と入力欄の両方に同じ `id` が出ていたのを直した。`id` は入力欄にだけ付く（`Textarea` / `Input` と同じ）。同じ `id` の要素が 2 つあると HTML として不正で、外に置いたラベルの `htmlFor` や `aria-labelledby` の参照先がブラウザ任せになっていた。

包みを `#id` で引いている CSS やテストは、`.wim-mentions` で引く形に変える。
