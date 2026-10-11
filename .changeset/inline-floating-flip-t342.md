---
"wimui": patch
---

開いた面（リスト・カレンダー）が、画面の端で外へ出ないようにした（8 部品: `Select` / `MultiSelect` / `Combobox` / `Cascader` / `TreeSelect` / `DatePicker` / `ModelSelector` / `PhoneInput`）。

- **下に余地が無く、上のほうが広いときは、上へ開く。** これまでは、画面の下端の近くに置いても下へ開き、面が画面の外へ出ていた（`Select` で約 200px、`PhoneInput` で約 320px）
- **左右へはみ出す面は、画面の端から 10px 内側へ寄せる。** `PhoneInput` の国のリストと `DatePicker` のカレンダーは、右端の近くに置くと右へ出ていた
- 画面に収まっているときの位置は、変わらない。面は、これまでどおり引き金の隣に描く（Tab の順は変わらない）

面には、開いている向きを表す `data-side="bottom" | "top"` が付く。
