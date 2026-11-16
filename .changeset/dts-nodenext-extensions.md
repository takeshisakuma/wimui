---
"wimui": patch
---

型の `.d.ts` の相対 import に拡張子を付けた（#1188）。`moduleResolution: "node16"` / `"nodenext"` の TypeScript で、ルートの export 864 個のうち 844 個が見えず、残りは `any` になっていた（`"bundler"` では見えていた）。あわせて、アイコン（`AlertCircleIcon` など 88 個）の型が、どの設定でも `any` になっていたのを直した（配布物に無い `*.svg?react` の宣言を参照していた）。JavaScript の出力は変わらない。
