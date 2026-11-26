---
"wimui": patch
---

`Popover` の面の上限の幅を 448px（`--wim-overlay-max-width-md`）にしました。これまでは画面の幅いっぱいまで伸び、長い文では 1 行が 100 字を超えていました。狭い画面では、これまでどおり画面の幅が上限です。448px より広い面が要るときは、`PopoverContent` に `style={{ maxWidth: ... }}` を渡してください。
