---
"wimui": patch
---

`RichTextEditor`: `format="markdown"` でタスクリスト（`- [ ] task`）を読んだとき、項目の先頭に空行が入らないようにした。@tiptap/markdown 3.32.2 以降で起きていた（3.32.0 までは起きない）。どちらの版でも、項目は文字だけの段落になる。
