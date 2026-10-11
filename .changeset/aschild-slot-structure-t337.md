---
"wimui": minor
---

`asChild` を付けると描画で例外になるか、部品のクラスが渡した要素に付かなかった 12 部品を直した。`asChild` を付けないときの出力は、変わらない。

- **例外で落ちていた 11 部品**: `Mentions` / `Select` / `CheckboxGroup` / `RadioGroup` / `SwitchGroup` / `Slider` / `DatePicker` / `Stepper` / `FieldTemplate` / `Timeline` / `Carousel`（`Slot failed to slot onto its children` など）
- **例外は出ないが、渡した要素が根にならなかった 1 部品**: `OtpInput`（部品の中の `div` が根になり、渡した要素はその中に描かれていた）

どの部品も、`asChild` を付けると、渡した要素が根になり、部品のクラス（`wim-*`）と根の属性がその要素に付く。

- `FieldTemplate`: 渡した要素の子（入力欄）が、ラベルとエラーのあいだの枠に入る
- `Timeline` / `Carousel`: 渡した要素の子を、項目・スライドとして描く
- `Stepper`: `children` を受けるようになった（`asChild` のときに根になる要素。`asChild` を付けないときは使わない）。これまでは、型が子を受けなかった
- `Mentions`: `asChild` のとき、入力欄用の props（`label` / `placeholder` など）と `id` を、根の要素には広げなくなった（入力欄にだけ付く）
