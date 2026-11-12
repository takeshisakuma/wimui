---
"wimui": patch
---

件数を差し込む内蔵の文言を、数で語形が変わらない形にした（T373）。内蔵の翻訳は複数形を選ばないため、数によって文が崩れていた。

- `Gallery` の選択数: 2 件以上で「3 item selected」と出ていたのを「3 selected」に（pt は「Selecionados: 3」）。
- `Reaction` のボタンの読み上げの名前: 1 件で「Thumbs up, 1 reactions」になっていたのを「Thumbs up, reactions: 1」に（pt も同じ形）。
- `DataGrid` のフッターの選択数（pt）: 1 件で「(1 selecionados)」になっていたのを「(selecionados: 1)」に。
- `Transfer` の移動の告知: 「2 item(s) moved to selected」を「Moved to selected: 2」に（pt も同じ形）。
- どの部品も使っていない内蔵のキー（`gallery.selected_count_plural`・`code_block.lines`）を消した。
