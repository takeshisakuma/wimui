---
"wimui": patch
---

`@xyflow/react` の peer の範囲を `>=12.0.0` から `^12.0.0` に絞った。2026-11-16 に出た React Flow 13 では、`NodeGraph` と `InteractiveGraph` が動くかをまだ確かめていない。13 を入れていると、インストールのときに peer の警告が出る ── `@xyflow/react@12` を入れること。12 を使っている場合は何も変わらない。部品のコードは変えていない。
