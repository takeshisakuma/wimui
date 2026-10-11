---
"wimui": minor
---

渡した `aria-label` / `aria-labelledby` / `aria-describedby` が読まれる要素に届かなかった 4 部品を直しました（定期点検で描けずに残っていた部品を、描き直して見つけたもの）。

- `BottomSheetContent`: `aria-label` / `aria-labelledby` / `aria-describedby` を受けるようにしました。`BottomSheetTitle` を置かないシートに、名前を付けられます。渡した説明は、`BottomSheetDescription` と一緒に読まれます
- `ModelSelector`: 名前と説明が、包みの `div` ではなく、引き金（combobox）に付くようにしました。標準の `aria-label` は、`labels.triggerAriaLabel` より優先されます
- `SplitButton`: `aria-label` か `aria-labelledby` を渡すと、根が `role="group"` になり、名前がそこに付きます（これまでは、ロールの無い包みに付いて、読まれませんでした）
- `Anchor`: `aria-label` / `aria-labelledby` を受けるようにしました。渡すと、根が `navigation` のランドマークになります

どれも、名前を渡していないときの出力は変わりません。
