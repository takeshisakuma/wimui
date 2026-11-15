---
"wimui": patch
---

入力欄の消去ボタンを押したあと、フォーカスがその欄（入力欄、または選択系の引き金）へ移るようにした（T392）。消去ボタンは値が空になると消えるので、これまではキーボードで押すとフォーカスが文書へ落ち、次の Tab がページの先頭から始まっていた。`Input`・`SearchInput`・`Select`・`MultiSelect`・`Combobox`・`Cascader`・`TreeSelect`・`DatePicker`・`TimePicker` が対象。
