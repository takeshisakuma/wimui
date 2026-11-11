---
"wimui": patch
---

`SimpleGrid` の間隔を、shorthand の `gap` と longhand の `rowGap` を並べる形から、`columnGap` と `rowGap` の 2 つで渡す形にした。見た目は変わらない。これまでは var() を含む `gap` を `rowGap` で上書きしていたため、`column-gap` が空の宣言で書き出され、React が再描画のたびに衝突として警告していた。
