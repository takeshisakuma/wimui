---
"wimui": minor
---

`AILabel` を足した（`wimui` / `wimui/ai`）。値やまとまりが AI の出力であることを示す、「AI」と書いた小さなボタンで、押すと、使う側が渡した説明（`children`）が Popover で開く。読み上げの名前は「AI が作成」（言語ごと。見えている「AI」を含む）。`size` は `sm`（入力欄の `suffix` や表のセルの中）/ `md`（既定・見出しの隣）/ `lg`。押せる範囲は `sm` でも 24 × 24 px。部位名は `mark` / `content` / `title`。文言は新しい名前空間 `ai` に置いたので、AILabel を読まない入口の翻訳は増えない。
