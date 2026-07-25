---
"wimui": minor
---

`BentoGrid` に `rowHeight` prop を追加

各行の高さ（`grid-auto-rows`）を指定できる `rowHeight` prop を追加（任意の CSS length、既定 `18rem`）。コンパクトな内容のタイルで余白が空きすぎて「ほぼ空パネル」に見えるのを防ぐ。既定は従来どおりのため非破壊。
