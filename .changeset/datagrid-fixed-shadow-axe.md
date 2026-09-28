---
"wimui": patch
---

DataGrid: 固定列の境界の影を `border-image` で描くように変えました。見た目は変わりません。これまでは影の疑似要素が背景を持っていたため、固定列にボタンや短い見出しを置くと、axe の `color-contrast` が背景色を判定できず「要確認（incomplete）」を出していました。
