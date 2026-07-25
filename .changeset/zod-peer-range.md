---
"wimui": patch
---

`wimui/rhf` の `zod` peer 範囲を `^3.25.0 || ^4.0.0` に拡大

`@hookform/resolvers` 自身の zod peer 範囲に合わせ、zod 3 系を含むツリー（`@hookform/resolvers` 5.x が推移的に引く `@typeschema/zod` は zod `^3.23.8` を要求）でも `npm install` が `ERESOLVE` で失敗しないようにする。`wimui` は `@hookform/resolvers/zod` の `zodResolver` を再エクスポートするのみで zod v4 固有 API は未使用。開発・テストは引き続き zod 4 を対象。
