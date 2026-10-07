---
"wimui": patch
---

Link: `asChild` を付けたとき、子の要素がリンクそのものになるように直しました。

これまでは、子ではなく Link の内側の span が根になり、`href` もクラスもその span に付いていました。React Router や Next.js の Link に Link の見た目を付ける、という案内どおりの使い方が動いていませんでした。

```tsx
<Link asChild iconName="CircleIcon">
  <RouterLink to="/docs">Docs</RouterLink>
</Link>
```

- 子の要素に、Link のクラスと、Link に渡した属性（`id`・`aria-*`・`data-*`・`target` など）が付きます。
- 中の作り（アイコン・ラベル・外部リンクの印）は、`asChild` なしのときと同じで、子の中に描かれます。
- `label` を渡すと、子の中身の代わりに `label` を描きます。
- `href` は、子に書いた値が残ります。

`asChild` を付けていない Link の出力は、変わりません。
