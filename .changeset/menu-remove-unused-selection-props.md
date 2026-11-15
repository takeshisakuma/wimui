---
"wimui": minor
---

**破壊的変更（型だけ）**: `Menu` の `defaultSelectedKeys` と、`MenuItem` の `itemKey` を型から外した（T396）。どちらも型に宣言してあるだけで、実装は一度も読んでいなかった ── 渡しても何も起きず、`MenuItem` の `itemKey` は DOM へそのまま流れていた。挙動は変わらない。渡しているコードは、その prop を消すだけでよい。

`SubMenu` の `itemKey`（開閉の状態の鍵）と、`Menu` の `defaultOpenKeys` は今までどおり。
