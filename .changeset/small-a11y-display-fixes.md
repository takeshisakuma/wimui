---
"wimui": patch
---

小さい修正を 3 つ。

- `Spinner` の回る図形と、`Image` の `duotone` のフィルタ定義用の svg に `aria-hidden` を付けた。名前の無い「画像」として読み上げの木に残っていた。
- `TabBar.Item` に `badge={0}` を渡すと、バッジの枠の外に素の「0」が描かれていた。0 件のバッジは出さない（`FloatButton` と同じ）。
- `CodeDiffViewer` が `filename` を小文字にして表示していた（`Button.tsx` が `button.tsx`）。小文字にするのは、ファイル名が無いときに出す言語名だけにした。
