---
"wimui": minor
---

`CommandPaletteContent` が、`aria-labelledby` と `aria-describedby` を受けるようにしました。これまでは `aria-label` だけを受け、参照で渡した名前と説明は捨てていました。`aria-labelledby` を渡したときは、内蔵の `aria-label` を出しません。

何も渡していないときの出力は変わりません。
