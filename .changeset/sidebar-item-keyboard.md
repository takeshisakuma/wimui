---
"wimui": minor
---

Sidebar.Item: キーボードで操作できるようにした。`role="button"` と Tab の停止点を持ち、Enter と Space で押せる。`active` は `aria-current="page"` になり、`disabled` では `onClick` が呼ばれなくなる。折りたたんだ状態でも項目の名前は読まれる。項目の中にリンクやボタンを置いている場合は、入れ子の操作要素にならないよう `role` と `tabIndex` を渡して上書きする。
