---
"wimui": minor
---

`DatePicker`（`DateRangePicker` を含む）の暦と、`TreeSelect` の一覧も、body に描くようにした（`Select` などと同じ）。外側に `overflow` で中身を切る箱があっても切れない。見た目の位置は変わらない。どちらの面も開くとフォーカスを面の中に閉じ込める（`role="dialog"`）ので、Tab の順は変わらず、Escape で面だけを閉じて引き金へ戻る（`Dialog` の中に置いても同じ）。

**DOM の上の位置が変わる**: 面（`role="dialog"`）は、部品の要素の中ではなく body の末尾にある。利用者のテストで、部品の要素の中から日付や木の項目を探している箇所は、`screen` から探す形にする必要がある。
