---
"wimui": patch
---

`Dropdown` と `Menubar` の、引き金と面に渡した `id` / `aria-labelledby` が、黙って内部の値に置き換わるのを直しました（T346）。

- `DropdownTrigger` / `Menubar.Trigger` に渡した `id` は、そのまま付きます。面の `aria-labelledby` も、その `id` を指します
- `DropdownMenu` / `Menubar.Content` に渡した `id` は、そのまま付きます。引き金の `aria-controls` も、その `id` を指します
- `DropdownMenu` / `Menubar.Content` に渡した `aria-labelledby` は、引き金の名前より優先されます（外の見出しで、メニューを名付けられます）

何も渡していないときの出力は変わりません。
