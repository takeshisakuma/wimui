---
"wimui": patch
---

AI エージェント向けのファイル（`llms-full.txt` と `dist/llms/<Component>.md`）で、prop の型を別名のまま書かず、受け付ける値を並べるようにしました。たとえば `Input` の `intent` は、`FieldIntent` ではなく `"default" | "danger"` と書かれます。`Extract<ComponentSize, "sm" | "md" | "lg">` のような型も、`"sm" | "md" | "lg"` と書かれます。
