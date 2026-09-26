---
"wimui": patch
---

dark テーマで、部品ごとのフォーカス表示が見えにくかった問題を直しました。

Tabs・Textarea・Select・Checkbox・Switch・Slider・Radio・Accordion など 36 部品は、キーボードでフォーカスしたときの枠や輪を、自前で primary の色を使って描いていました。dark の面（#393939）に対する primary（#055d87）のコントラストは 1.61:1 しかなく、ほとんど見えませんでした。これらをフォーカス専用の色 `--wim-color-focus-outline` に揃えています。

- light では、フォーカス色は primary と同じ値なので、見た目は変わりません。
- dark では淡い青（`--wim-color-text-accent`・面に対して 6.56:1）になります。
