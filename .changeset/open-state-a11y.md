---
"wimui": patch
---

開いたリストのアクセシビリティを直しました。開いた姿を初めて自動で検査して見つかったものです。

- **PhoneInput / Cascader / ModelSelector**: 開いたリスト（`listbox`）に名前がありませんでした。引き金と同じ名前を付けました。
- **DatePicker / DateRangePicker / TreeSelect**: 見える `label` を渡さない使い方（外側の `<Label>` で包む、`aria-label` だけを渡す）で、開いたパネル（`dialog`）に名前がありませんでした。DatePicker は `aria-label` があればそれを、無ければ既定の名前（「日付を選択」。en / ja / pt）を使います。TreeSelect は引き金と同じ名前を使います。
- **Combobox**: スクロールする要素を、リスト本体（`listbox`）にしました。以前は外側の枠がスクロールしていて、支援技術からは「キーボードで届かないスクロール領域」に見えていました。見た目は変わりません。
- **ModelSelector**: 開いたリストに Tab で入れるようにしました（スクロールする領域にキーボードで届くようにするため）。矢印キーの操作は従来どおりです。
