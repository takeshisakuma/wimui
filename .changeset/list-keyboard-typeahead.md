---
"wimui": minor
---

リスト系の部品のキー操作をそろえた（T370）。

- **文字での先頭一致**: Select（`searchable` でないとき）・MultiSelect・ModelSelector・Transfer・Cascader・Menu・Dropdown・Menubar で、文字を打つとその文字で始まる次の項目へ移る。同じ文字を続けて打つと、その文字で始まる項目を順に巡る。無効の項目は飛ばす。閉じている Select・MultiSelect・ModelSelector では、開いて移る。
- **Cascader**: 列の中の上下の矢印キーが、端で止まらず反対の端へ折り返すようにした（ほかのリスト系の部品とそろえた）。
- **直した欠陥**: MultiSelect が矢印キーと開いたときの先頭で、無効の項目に止まっていた。Select が Home / End で無効の項目に止まっていた。Cascader が無効の選択肢に止まっていた（矢印キー・Home / End・開いたとき・子の列へ入ったとき）。
- `wimui/ai` 全部の予算を 52 → 53 kB にした。
