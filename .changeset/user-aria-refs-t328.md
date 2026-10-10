---
"wimui": patch
---

利用者が渡した `aria-labelledby` / `aria-describedby` / `aria-label` が、出力から消えていたのを直しました（T328）。ラベルやエラーを部品の prop で渡さず、外の見出しや説明文を参照で結び付ける使い方が、これまでは効いていませんでした。見た目は変わりません。

- **CheckboxGroup / SwitchGroup / RadioGroup / CounterTextarea**: `label` を渡さないとき、`aria-labelledby` がそのまま出ます。`aria-describedby` は、部品のエラーの参照と並べて出ます。
- **ToggleGroup**: `aria-describedby` を受けるようになりました。
- **TagInput**: `aria-label` / `aria-labelledby` / `aria-describedby` が入力欄に出ます。そのほかの属性（`data-*` など）は根の要素に出ます。これまでは、型では受けるのに、どこにも出ていませんでした。
- **Kanban**: `aria-label` か `aria-labelledby` を渡すと、盤の名前になります。これまでは内蔵の名前で上書きしていたので、盤を 2 つ置くと同じ名前が並びました。
- **Dialog / Drawer**: `DialogContent` / `DrawerContent` に渡した `aria-labelledby` を、自分のタイトルの id で上書きしなくなりました。`aria-describedby` は、自分の説明の参照と並べて出ます。`DrawerContent` に渡した `role` も、そのまま出ます。

何も渡さないときの出力は、これまでと同じです。
