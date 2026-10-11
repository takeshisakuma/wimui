---
"wimui": minor
---

名前が意味を持つロールの根で、標準の `aria-label` と `aria-labelledby` を受けるようにした（10 部品）。これまでは、名前を付ける口の形が部品ごとに違い（`ariaLabel` / `labels` の中 / `title` など）、`aria-label` を渡しても型エラーにならずに捨てられていた。

- `DataGrid`（grid）/ `TreeView`（tree）/ `Pagination`（navigation）/ `SignaturePad`（キャンバス）/ `SourceCitation`（group とリンク）/ `FAQSection`（section）/ `Notification`（alert）/ `Toast`（status）/ `Menu`（menu）/ `CommandPaletteList`（listbox）
- 既にある口（`ariaLabel`・`labels.treeAriaLabel`・`labels.navAriaLabel`・`canvasAriaLabel`）は残る。**両方を渡したときは、標準の属性が勝つ**
- `aria-labelledby` を渡したときは、`aria-label` を出さない（参照が名前になる）
- `SignaturePad` は、見えるラベル（`label`）があるときは、それが名前のまま

`CommandPaletteList` は、何も渡さなくても名前が付くようになった（パレットと同じ内蔵の名前）。これまでは、名前の無い `listbox` が出ていた。
