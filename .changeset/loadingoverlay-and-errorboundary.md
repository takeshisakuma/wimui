---
"wimui": patch
---

- `LoadingOverlay` の `loaderSize="xl"` が `lg` に潰れていたのを修正（内部の対応表が `xl` を `lg` に落としていた）
- `ErrorBoundary` の既定フォールバックが生の色（`rgba(0, 0, 0, 0.05)`）を直書きしていたのをサーフェストークンへ。固定の黒 5% だったため dark テーマで意図どおり沈まなかった
