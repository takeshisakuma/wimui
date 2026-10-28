---
"wimui": patch
---

`wimui/rhf` の optional peer `react-hook-form` の下限を `^7.55.0` に上げた。`wimui/rhf` が許す `@hookform/resolvers`（5.1.0 以降・6 系）はどの版も `react-hook-form ^7.55.0` を要求するため、これまでの `^7.43.0` のうち 7.43〜7.54 は実際には組み合わせて入れられなかった。動いていた組み合わせは外れない。
