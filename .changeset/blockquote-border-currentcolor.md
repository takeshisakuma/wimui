---
"wimui": patch
---

Blockquote の `color` に intent を指定したとき、左の線を文字と同じ色にしました。

- 以前は intent の塗りの色で、ダークでは primary・success・info の線が暗い面に沈んでいました。
- ライトでは、線が以前より一段落ち着いた色になります（たとえば warning はオレンジから茶色寄りに）。
- intent を指定しないときの線の色は変わりません。
