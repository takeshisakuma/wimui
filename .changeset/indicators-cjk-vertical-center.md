---
"wimui": patch
---

`Chip` / `Tag` / `Badge` の CJK テキストの縦位置を修正

- `Chip` / `Tag`: `line-height` を `1` に固定し、`token-base` の `line-height: normal` に起因して CJK 字形が下寄りに見える問題を解消（`Badge` と同じ対処）。
- `Badge`: 固定 `height` を `min-height` に変更し上下 padding を一段増やして、`box-sizing: border-box` で CJK テキストがはみ出すのを防止（dot 表示の `iconOnly` は従来の固定寸法を維持）。

見た目のみの修正で、公開 API・ラテン文字の表示に変更はない。
