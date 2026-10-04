---
"wimui": minor
---

入力欄の中のボタンと、TreeSelect / TreeView のキー操作を直しました。

- **TreeView（`nodes` を渡す形）と TreeSelect**: 矢印キーで 2 つ目より先へ進めませんでした。`tabIndex` だけが次の項目へ移り、実際のフォーカスが元の項目に残っていたためです。フォーカスが項目に付いて動きます。
- **TreeSelect**: フォーカスがパネルの中にあると、Escape で閉じられませんでした。閉じて、引き金へ戻ります。
- **TreeView**: Escape の伝播を止めていました。ツリーが使わないキーなので止めません（Modal などの中に置いたツリーから、外側の面を Escape で閉じられます）。
- **無効の入力欄**: `disabled` の Combobox / TreeSelect / DatePicker / TimePicker（と、アイコンに `onClick` を渡した Input / InputBase）で、中のアイコンのボタンが押せて Tab で届くまま残っていました。入力欄と一緒に無効になります。
- **Combobox / TreeSelect / DatePicker の山形と、TimePicker の時計**: Tab の停止点と読み上げから外しました（クリックはこれまで通り）。入力欄そのものがキーで同じ操作を持っているのに、停止点が 2 つあり、2 つ目は「Perform action」としか読まれていませんでした。**名前でこのボタンを引いているテストは、入力欄（`combobox`）を引く形に直してください。**
- **追加**: `InputBase` の `rightIcons[].decorative` と `Input` の `rightIconDecorative`。押せるアイコンを、同じ扱い（Tab の停止点と読み上げから外す）にできます。入力欄がキーで同じ操作を持つときに使います。
