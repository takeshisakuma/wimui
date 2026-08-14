---
"wimui": patch
---

`Affix` の `ref` は、流れに残る placeholder（外側）を指します。貼ると中身だけ `position: fixed` になるので、子どもを測ると `getBoundingClientRect().top` が画面上端になり、測り直すたびに位置が流れます（T176）。`onChange` は従来どおり真偽だけです。
