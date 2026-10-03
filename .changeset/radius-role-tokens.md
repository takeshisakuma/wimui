---
"wimui": patch
---

テーマのプリセット（Soft / Bold / Minimal）で、角丸が動かない部品があったのを直しました。

- プリセットが動かすのは `--wim-radius-component` / `-container` / `-overlay` の 3 つです。値のトークン（`--wim-radius-md` など）を直接使っていた Tag、SegmentedControl と ToggleGroup（トラックと中の項目）、Tooltip、Tour のハイライト、QRCode、枠つきの DescriptionList は、プリセットを替えても角が元のままでした。役割のトークンに載せ替えたので、ボタンや入力欄と一緒に動きます。
- Card の `radius="xl"` / `"2xl"` も同じ理由で動かず、Soft では `lg`（16px）より `xl`（12px）が小さくなっていました。`xl` は container、`2xl` は container に 1 段足した値にしました。
- **プリセットを使っていなくても、次の 4 つは既定の見た目が変わります**（文書の役割どおりに揃えた結果です）。
  - Tag: 角丸 2px → 4px
  - Tooltip: 角丸 4px → 8px、影が Popover や Menu と同じ強さに
  - 枠つきの DescriptionList: 角丸 8px → 12px（Card と同じ）
  - グラフのツールチップ（ホバーで出る値の吹き出し）: 角丸 4px → 8px
- SegmentedControl / ToggleGroup / Tour / QRCode / Card は、既定の見た目は変わりません。
