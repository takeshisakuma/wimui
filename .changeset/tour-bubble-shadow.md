---
"wimui": patch
---

`Tour` の吹き出しの影を、浮く面のトークン（`--wim-shadow-overlay`）にそろえました。

吹き出しは、対象の隣に出る小さな面で、角丸は浮く面のトークン（`--wim-radius-overlay`）なのに、影だけが画面を止める面のトークン（`--wim-shadow-modal`）でした。Popover やメニューと同じ影になり、これまでより浅く見えます。
