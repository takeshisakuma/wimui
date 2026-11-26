---
"wimui": minor
---

公開 API の穴を 3 つ埋めました（T440）。

- **破壊的変更: `MarkdownRenderer` の `withAnchors` を削除しました。** 型と説明にはありましたが、どこからも読まれておらず、渡しても何も変わりませんでした。渡しているコードは、その prop を消してください（見た目も動きも変わりません）。
- `useToast().show()` と `useNotification().show()` が、出した通知の id を返すようになりました。`remove(id)` に渡すと、その通知を自分で閉じられます。
- `DataGrid` は、行が 0 件のときに既定の文（「データがありません」/ "No data"）を出すようになりました。これまでは `emptyMessage` を渡さないと何も出ず、見出しだけの表になっていました。何も出したくないときは `emptyMessage={null}` を渡してください。読み込み中（`loading` が `true` / `"blocking"`）は、行がまだ来ていないだけなので、空の文を出しません（`emptyMessage` を渡した場合も同じ）。
