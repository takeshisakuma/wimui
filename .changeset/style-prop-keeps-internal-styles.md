---
"wimui": patch
---

`style` を渡すと、部品が自分で入れた値が消える 4 部品を直しました。

- `Button`: `justify` / `backgroundColor` / `animateWidth` が効かなくなっていました
- `Textarea`: `width`（数値・CSS の値）が効かなくなっていました
- `ImageCompare`: `width` / `height` が効かなくなっていました
- `DashboardWidgetCard`: 幅と行の指定（`span` / `rowSpan`）が効かなくなっていました

どれも、渡した `style` と、部品の値の両方が残るようになります。`style` を渡していないときの出力は変わりません。
