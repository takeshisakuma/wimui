---
"wimui": minor
---

入力系の部品の高さを、ボタンと同じ段に揃えました。**見た目が変わります（入力欄が 2px 低くなります）。**

- **入力欄は 44px → 42px**（密度 compact では 38px → 36px）。Input / NumberInput / PasswordInput / SearchInput / InputMask / CreditCardInput / Select / MultiSelect / Cascader / TreeSelect / TagInput（1 行のとき）/ DatePicker / DateRangePicker / TimePicker / ColorInput / ColorPicker と、これらを中に持つ部品（Pagination の件数の選択など）が対象です。これまでは、中身の下限（42px）の外に枠の 1px × 2 が足されていて、ボタンの md（42px）と横に並べると 2px ずれました。Combobox と PhoneInput は、もともと 42px です。
- **MultiSelect**: 項目を選んでチップが出ているときも 42px です（これまでは 44px）。上下の余白を、ほかの入力欄と同じにしました。
- **ModelSelector**: sm / md / lg を 32 / 42 / 48px にしました（これまでは 31.8 / 35 / 40.4px）。密度 compact では 28 / 36 / 40px です。

入力欄の高さを 44px と決め打ちして位置を合わせている箇所（重ねたアイコン・隣に置いた独自の要素など）があれば、42px（`var(--wim-height-md)`）に直してください。
