---
"wimui": patch
---

`Toolbar`: `size` の説明から「`--wim-toolbar-*` の CSS 変数に伝わる」を消した。そういう変数は無く、`size` は段ごとのクラスで余白と間隔を決めている。動作は変わらない。
