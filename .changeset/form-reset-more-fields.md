---
"wimui": patch
---

InputMask / SmartSearchInput / ColorInput / OtpInput / DatePicker: 囲んでいるフォームの `reset` で、入力した値や選んだ日が残っていたのを直した。制御していないときは既定の値へ戻る（`Input` と同じ）。`OtpInput` は `value` を渡さないとき、空へ戻る。
