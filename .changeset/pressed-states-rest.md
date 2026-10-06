---
"wimui": patch
---

押下（`:active`）の見た目を、既定のストーリーに出ない操作要素にも付けました。

0.52.2 で足した押下の見た目は、部品ごとに既定のストーリー 1 本で測って付けたものでした。全ストーリーを開いて測り直すと、次の要素が押しても変わらないままでした。

- **地が濃くなるもの**: PromptInput の添付ボタン / PhoneInput・ModelSelector の開いたリストの項目 / JsonViewer の編集できる値 / ImageCompare のつまみ
- **少し縮むもの**: Audio・Video の操作ボタン / Stepper の押せるステップの印 / ThemeToggle の segment 型 / JsonViewer の追加・削除 / Chip の削除（MultiSelect の中のチップも同じ）/ CodeDiffViewer・JsonDiffViewer の適用・却下 / RangeCalendar の範囲の中の日

縮むものは、トランジションに乗せてあります。見た目だけの変更で、API は変わりません。
