---
"wimui": patch
---

`wimui/rhf` の optional peer `@hookform/resolvers` の範囲を `^5.1.0 || ^6.0.0 || ^7.0.0` に広げた。7.0.0 の破壊的変更は typebox リゾルバーだけで、`wimui/rhf` が使う zod リゾルバーには当たらない。開発とテストは 7 で行う。
