---
"wimui": patch
---

`Dialog`・`Drawer`・`BottomSheet` の中で開いた一覧・暦・メニュー・ダイアログに Escape を押したとき、閉じるのは一番上の面だけにした（T408）。これまでは `Select`・`MultiSelect`・`Combobox`・`DatePicker`・`Dropdown`・入れ子の `Dialog` で、外側のダイアログも同じ Escape で閉じ、入力中のフォームがダイアログごと消えた。中の部品が閉じているとき（引き金にフォーカスがあるとき）の Escape は、今までどおり外側のダイアログを閉じる。props は変わらない。
