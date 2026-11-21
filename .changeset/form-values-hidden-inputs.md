---
"wimui": patch
---

`Select`・`MultiSelect`・`Cascader`・`TreeSelect`・`Rating`・`SegmentedControl`・`TagInput`・`OtpInput` に `name` を足し、素の `<form>` の送信（`FormData`・React 19 のフォームの action・サーバーアクション）に値が入るようにした。以前はこの 8 部品だけ、`name` を渡しても値が送られなかった。値は隠した `<input type="hidden">` で送り、複数の値（`MultiSelect`・`TagInput`・`Cascader` の経路・`multiple` の `TreeSelect`）は同じ `name` で並べる（`FormData.getAll` で読む）。制御していない部品は、フォームの `reset` で既定の値に戻る。`Slider` / `RangeSlider` も、フォームの `reset` で値と取っ手の位置が戻るようにした（以前は動かしたままだった）。`required` はブラウザの検証には乗らず、エラーは今までどおり各部品の `error` で出す。
