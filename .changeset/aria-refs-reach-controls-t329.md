---
"wimui": minor
---

利用者が渡した `aria-label` / `aria-labelledby` / `aria-describedby` が、読まれる要素に届くようにした。行き先の決め方は 1 つで、**説明は、部品がエラーの参照を付けている要素と同じところに並べる**（エラーがあれば、利用者の説明とエラーの両方が並ぶ）。名前は、部品の `label` を渡していないときだけ通す。

**包みに落ちていた部品**（ロールの無い `div` に付いていて、読まれなかった）

- `Slider` / `RangeSlider`: `aria-describedby` が、つまみに付く（`RangeSlider` は両方）
- `Cascader`: `aria-labelledby` と `aria-describedby` が、引き金（combobox）に付く
- `InlineEdit`: `aria-labelledby` と `aria-describedby` が、表示中のボタンと、編集中の入力欄に付く
- `OtpInput`: 名前（`aria-label` / `aria-labelledby`）は桁をまとめる `role="group"` に、`aria-describedby` は全部の桁に付く
- `PhoneInput`: 3 つとも、番号の入力欄に付く（国の引き金は、内蔵の名前のまま）
- `Mentions`: 3 つとも、入力欄にだけ付く（以前は、包みの `div` にも同じ値が付いていた）

**渡しても捨てられていた部品**（口が無かった）

- `DateRangePicker` / `SegmentedControl` / `Transfer`: `aria-label` / `aria-labelledby` / `aria-describedby` を受けるようになった。`role="group"`（`SegmentedControl` は `role="radiogroup"`）に付く。見えるラベルを置かずに、外の見出しを名前にできる

**`RangeSlider` の 2 つのつまみが、区別できる名前を持つようになった。** 以前は、`label` を渡すと両方が同じ名前（例: "Price"）で読まれ、`aria-label` だけを渡したときも同じだった。今は "Start Price" / "End Price" と読まれる（`aria-labelledby` を渡したときは、外の名前のあとに "Start" / "End" が続く）。**テストでつまみを名前で引いている場合は、名前が変わる。**

包みの要素を `[aria-describedby]` などで引いている CSS やテストは、当たらなくなる。
