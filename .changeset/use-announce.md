---
"wimui": patch
---

読み上げの告知を、部品の内部の 1 本のフック（`useAnnounce`）にまとめた（T367）。公開 API は変わらない。

- 対象は 9 部品: DataGrid（並べ替え）・Pagination・Carousel・Lightbox・FileUpload・Transfer・Toast（単体と `ToastProvider`）・Snackbar・SelectionBar。どれも、先に在る画面に見えない status 領域の文字を書き換える形のまま。
- `ToastProvider` で、同じ文のトーストを続けて出したときも読まれるようにした（これまでは領域の文字が変わらず、2 回目は読まれなかった）。
- Transfer の告知の領域を `aria-live="polite"` から `role="status"` にした（どちらも控えめに告げる。ほかの 8 部品とそろえた）。
