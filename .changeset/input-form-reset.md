---
"wimui": patch
---

Input / NumberInput / PasswordInput / SearchInput / TimePicker / ColorPicker / Combobox / Mentions: 囲んでいるフォームの `reset` で、入力した値が既定の値へ戻らなかったのを直した。`value` で制御しているときの値は、これまでどおり利用者が持つ。
