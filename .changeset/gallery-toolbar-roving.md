---
"wimui": patch
---

Gallery: 選択のツールバーを `Toolbar` の上に作り直した。Tab の停止点は 1 つになり、中のボタン（`renderActions` で足したボタンと、選択の解除）は ← → と Home / End で移る。以前は `role="toolbar"` を名乗るだけで、ボタンがどれも Tab の停止点で、矢印キーは効かなかった。見た目は変わらない。
