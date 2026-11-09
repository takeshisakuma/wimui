---
"wimui": patch
---

`Tabs`: 矢印キーで無効のタブを選ばないようにした。以前は矢印で無効のタブが選ばれ（中身も切り替わり）、フォーカスだけが元のタブに残っていた。無効のタブは飛ばし、Home / End も無効のタブには止まらない。あわせて、並んだボタンの矢印キーの計算（Tabs / TabNavigation / Toolbar / Stepper / SegmentedControl / ToggleGroup）を内部で 1 つにまとめた。ほかの 5 部品の動きは変わらない。
