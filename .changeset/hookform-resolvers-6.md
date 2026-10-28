---
"wimui": patch
---

`wimui/rhf` の optional peer `@hookform/resolvers` の範囲を `^5.1.0 || ^6.0.0` に広げた。6.0.0 の破壊的変更は effect-ts リゾルバーだけで、`wimui/rhf` が使う zod リゾルバーには当たらない。開発とテストは 6 で行う。
