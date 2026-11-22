---
"wimui": patch
---

body に描く一覧・暦・メニュー（`Select`・`MultiSelect`・`Combobox`・`PhoneInput`・`ModelSelector`・`Cascader`・`DatePicker`・`TreeSelect`・`Menubar`）が、開いたまま引き金の上の中身の高さが変わったとき（スクロールせずに引き金が動いたとき）にも、引き金についていくようにした。これまでは元の位置に残り、引き金に重なった。
