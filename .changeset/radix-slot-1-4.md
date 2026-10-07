---
"wimui": patch
---

`asChild`: 親と子の両方に `aria-describedby` があるとき、両方をつないで出すようになりました。

`asChild` の土台の `@radix-ui/react-slot` を 1.3.3 から 1.4.0 に上げました。変更点はこの 1 つです。

```tsx
<Button asChild aria-describedby="hint">
  <a href="/next" aria-describedby="status">次へ</a>
</Button>
```

これまでは子の値だけが残り（`aria-describedby="status"`）、親に渡した説明は読み上げられませんでした。これからは `aria-describedby="status hint"` になります（子が先・重複する ID は 1 つにまとめます）。

どちらか片方にだけ書いている場合の出力は、変わりません。DOM の属性の値を文字列で比べているテストやスナップショットは、両方に書いている箇所で値が変わります。
