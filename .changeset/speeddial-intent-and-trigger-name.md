---
"wimui": patch
---

`SpeedDial` のアクション `intent` が内側の `FloatButton` に届くようにしました。型にはもともとあり、渡しても黙って捨てていたのが欠陥です（T173）。

`aria-label` はトリガーボタンの名前になります。これまではラッパーの `div` に落ち、トリガーはアイコン名（`PlusIcon` / `CloseIcon`）のままでした（T174）。省略時は従来どおりアイコン名です。
