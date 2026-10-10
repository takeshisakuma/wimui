---
"wimui": minor
---

`Dialog` に `role` を足しました。削除の確認のように、応答するまで先へ進めないダイアログを `role="alertdialog"` で伝えられます（T327）。

```tsx
<Dialog role="alertdialog">
  <DialogTrigger>Delete project…</DialogTrigger>
  <DialogContent>
    <DialogTitle>Delete this project?</DialogTitle>
    <DialogDescription>This cannot be undone.</DialogDescription>
    …
  </DialogContent>
</Dialog>
```

- 既定は `"dialog"` で、これまでと変わりません。
- `role="alertdialog"` のとき、`closeOnOverlayClick` の既定が `false` になります（外側を押しただけでは閉じません）。`closeOnOverlayClick` を渡せば、その値が優先されます。Escape では閉じます。
- `DialogContent` に直に渡した `role` も、そのまま出るようになりました。これまでは、型では受けるのに `"dialog"` に上書きしていました。
