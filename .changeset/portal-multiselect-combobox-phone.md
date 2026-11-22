---
"wimui": minor
---

`MultiSelect`・`Combobox`・`PhoneInput` の開いた一覧も、`Select` と同じく body に描くようにした。外側に `overflow` で中身を切る箱（スクロールする `Dialog` の本文、カードなど）があっても、一覧が切れない（`Dialog` の中の `MultiSelect` で、4 項目のうち 2 つしか見えなかった）。見た目の位置は変わらず、フォーカスは引き金（または入力欄）に残る。

**DOM の上の位置が変わる**: 一覧（`role="listbox"`）は、部品の要素の中ではなく body の末尾にある。利用者のテストで、部品の要素の中から選択肢を探している箇所は、`screen` から探す形にする必要がある。
