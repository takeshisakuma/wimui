---
"wimui": patch
---

`Navbar.Menu`（`NavbarMenu`）に渡した属性（`id`・`aria-*`・`data-*`・イベント）が、開いた面に届くようにしました。これまでは、型では `div` の属性を受けるのに、全部捨てていました（`aria-label` を渡しても、メニューの名前は変わりませんでした）。
