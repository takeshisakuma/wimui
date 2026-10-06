---
"wimui": patch
---

開いた面（リスト・メニュー・カレンダー）の枠・角丸・影を、全部品で同じトークンに揃えました。

- **枠の色**: Select / MultiSelect / PhoneInput のリストの枠を、入力欄の線（`--wim-color-line`）からパネルの枠（`--wim-color-border`）へ。ライトでは同じ色ですが、ダークではこの 3 部品だけ枠が明るく出ていました。Select の検索欄の下の線とグループの区切りも同じ色にしました。
- **角丸**: Select / MultiSelect / PhoneInput / Combobox / ModelSelector / DatePicker / DateRangePicker / Mentions の開いた面を、`--wim-radius-component`（4px）から `--wim-radius-overlay`（8px）へ。Dropdown・Menubar・Cascader・TreeSelect などは元から 8px でした。
- **影**: ModelSelector のリストを `--wim-shadow-md` から `--wim-shadow-overlay` へ。

見た目だけの変更で、API は変わりません。`--wim-radius-overlay` を上書きしているテーマでは、上の部品の開いた面もその値に従うようになります。
