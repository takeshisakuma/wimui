---
"wimui": minor
---

`PageHeader` を足した（`wimui` / `wimui/layout`）。ページの頭で、パンくず（`breadcrumb`）・題（`title`）・状態（`status`）・説明（`description`）・操作（`actions`）・タブ（`tabs`）を、決まった順番と間隔で並べる。題はいつも `h1` で、大きさは 1 つ（`Title` の `lg`）。長い題は省略せずに折り返す。幅が足りないと、操作は題の下の行へ回る（コンテナクエリは使わないので、中身で幅が決まる器でも潰れない）。根は `header` ではなく `div` で、ランドマークを作らない。部位名は `breadcrumb` / `title` / `status` / `description` / `actions` / `tabs`。
