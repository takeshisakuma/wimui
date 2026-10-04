---
"wimui": patch
---

開いた面のアクセシビリティを直しました。開いた姿を初めて自動で検査して見つかったものです。

- **BottomSheet**: 開いたシート（`dialog`）に名前がありませんでした。`BottomSheetTitle` を名前、`BottomSheetDescription` を説明として結び付けます（Dialog / Drawer と同じ形）。
- **Lightbox**: 開いたビューア（`dialog`）に名前がありませんでした。いまの画像の `title`、無ければ `alt`、どちらも無ければ既定の名前（「Image viewer」。en / ja / pt）を使います。`LightboxContent` に `aria-label` / `aria-labelledby` を渡した場合はそちらが優先です。
- **ContextMenu**: 開いているあいだ、背後のページ全体が `aria-hidden` になっていました（中にフォーカスできる要素が残る形）。メニューをモーダルにするのをやめ、背後を隠さないようにしました。**開いたメニューで Tab を押すと、メニューを閉じて、開く前の場所へフォーカスを戻します**（以前は Tab がメニューの中を回っていました）。メニューが、存在しない要素を `aria-labelledby` で指していたのも外しました。
