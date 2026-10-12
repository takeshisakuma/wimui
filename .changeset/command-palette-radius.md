---
"wimui": patch
---

`CommandPalette` の面の角丸を、Dialog と同じトークン（`--wim-radius-container`。既定で 12px）にそろえました。

`CommandPalette` は、画面の中央に出て操作を止める面で、影は Dialog と同じ（`--wim-shadow-modal`）なのに、角丸だけが浮く面のトークン（`--wim-radius-overlay`。8px）でした。キーボードで操作しているときに検索欄に出る枠も、面の角に合わせて同じ角丸になります。
