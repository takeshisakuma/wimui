---
"wimui": patch
---

`Dropdown` の引き金を Enter / Space で押したとき、ほかのボタンと同じくクリックとして扱うようにしました。これまでは開閉だけが起き、`onClick` を付けた `Card` や表の行の中に置くと、クリックでは外側の `onClick` が呼ばれるのに、Enter / Space では呼ばれず、揃っていませんでした。押せる面の中に置いた引き金で外側を動かしたくないときは、引き金に渡した要素の `onClick` で `e.stopPropagation()` を呼んでください（`docs/design/composition.md` の必須ルール 17）。
