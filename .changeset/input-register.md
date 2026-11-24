---
"wimui": patch
---

Input: react-hook-form の `register` をそのまま渡すと、既定値（`defaultValues`）も `reset(values)` の値も画面に出なかったのを直した。制御していないときは、値を入力欄そのものに持たせる。`value` を渡して制御している使い方は変わらず、`value` を `undefined` に戻したときも、以前と同じく空の欄になる。
