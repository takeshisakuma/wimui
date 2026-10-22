---
"wimui": patch
---

見えている文字を、読み上げの名前にも含めるようにした（WCAG 2.5.3 Label in Name。axe-core 4.14 で `label-content-name-mismatch` が既定で走るようになり、検出された）。見えている文字で音声操作（「H1 をクリック」など）ができなかった箇所を直す。

- `RichTextEditor`: 見出しボタンの名前を「Heading 1」から「H1 Heading 1」にした
- `Button`: 文字のあるボタンを `loading` にしたとき、名前を「Loading」に置き換えず、見えている文字の後ろに「Loading」を足すようにした（アイコンだけのボタンは、これまでどおり「Loading」）
- `FileUpload` / `Dropzone`: ラベル・`aria-labelledby`・`aria-label` で名前を付けるとき、ボタン（領域）に見えている文字を名前の後ろに残すようにした
- `InlineEdit`: `aria-label` / `aria-labelledby` を渡したときも、表示中のボタンの名前にいまの値を残すようにした（`label` を渡したときと同じ形）
- `FloatButton`: 数のバッジを、名前の後ろに足すようにした（「Notifications 3」）
- `SourceCitation`: リンクのとき、内蔵の名前（「Source 1」）を付けず、中身の文字で名前を付けるようにした。`aria-label` を渡したときは、これまでどおりそれが名前になる
- `TreeDiagram`: 項目の名前に、見えている文字を見えている順に並べるようにした（アバター・名前・説明・閉じているときの「+3」）。閉じた項目の開閉ボタンの名前に、見えている数を足した（「Expand Kenji Watanabe +3」）
- `SegmentedControl` / `ToggleGroup`: 文字のある選択肢に、同じ文字の `aria-label` を重ねて付けないようにした（名前は中身から付く。アイコンだけの選択肢は、これまでどおり `value` が名前）
- `ScheduleView`: 月表示で予定のある日のセルは、日付だけを名前にせず、中身（日付と予定）で名前を付けるようにした
