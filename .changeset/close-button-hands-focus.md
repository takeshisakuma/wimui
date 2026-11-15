---
"wimui": patch
---

`Alert`・`Notification`・`Banner`・`Toast`・`Snackbar` の閉じるボタンが、フォーカスを持ったまま消えるとき、フォーカスが部品の直前のフォーカスできる要素へ移るようにした（T392）。前に無ければ、ページの最初の要素へ移る。これまではフォーカスが文書へ落ち、次の Tab がページの先頭から始まっていた。

行き先を変えたいときは、`onClose` の中でフォーカスを移す（使う側が移していれば、部品は何もしない）。

```tsx
<Alert onClose={() => saveButtonRef.current?.focus()} />
```
