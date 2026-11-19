---
"wimui": minor
---

`Persona` を足した（`wimui` / `wimui/data-display`）。人を 1 つのまとまりで出す部品で、アバター（`avatar={{ src, initials, icon }}`）・名前（`name`）・補足 2 行まで（`description` / `secondaryDescription`）を並べる。`size`（sm / md / lg）がアバターの大きさと、名前・補足の文字の大きさと間隔を決める。`textPosition` は `after`（右・既定）/ `below`（下）。名前は 1 回だけ読まれる ── アバターは支援技術から隠し、代替テキストに名前を入れない。`presence` を渡すと、アバターに在席の点を出し、状態は名前のすぐあとに読まれる（「Priya Raman、オンライン」）。部位名は `name` / `description` / `secondary-description`。
