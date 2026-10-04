---
"wimui": patch
---

英語で固定だった既定の文言を、表示言語（`setWimLocale` / `WimProvider` の `locale`）に従うようにしました。en / ja / pt を同梱しています。英語の表示は、下の GanttChart の 2 点を除いて変わりません。

- **QueryBuilder**: 演算子のラベル（「Equals」「Greater than or equal」など 15 種）。`labels.operators` で渡した文言は従来どおり優先されます。
- **PhoneInput**: 国名（10 か国）。文字を打って国へ移動する操作は、表示している言語の国名で照合します。
- **Carousel**: 前へ・次へ・スライドの名前・「スライド N へ移動」。`labels` で渡した文言が優先されます。
- **GanttChart**: チャートの名前と、タスクのバーの名前。`labels` で渡した文言が優先されます。**英語の既定が少し変わります** ── チャートの名前が「Gantt Chart」から「Gantt chart」に、バーの名前の区切りが `-` から `–` になります（翻訳キーは以前からありましたが、部品が読んでいませんでした）。
