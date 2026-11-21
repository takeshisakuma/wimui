---
"wimui": minor
---

本文へ飛ぶリンク `SkipLink` を足した（`wimui/navigation`）。フォーカスしたときだけ見え、押すと `href` の飛び先へキーボードのフォーカスを移す（WCAG 2.4.1 Bypass Blocks）。`AppShell` は既定でこれを先頭に描き、自分の `<main>`（Props API の内蔵の `<main>` と `AppShell.Main`）へ飛ばす。キーボードの人は、ページを開いて Tab を 1 回、Enter を 1 回で、ヘッダーと横の帯を通らずに本文へ着ける。

`AppShell` を使う画面では、最初の Tab の停止点がこのリンクになる。外すときは `skipLink={false}`（その画面が自分でスキップリンクを描いている場合だけ）。`AppShell.Main` に `id` が無ければ、自動の `id` が付く。
