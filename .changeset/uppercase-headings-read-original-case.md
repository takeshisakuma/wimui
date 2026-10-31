---
"wimui": patch
---

大文字で見せている見出しを、支援技術には元の大小のまま渡すようにした。対象は `Menu` / `ContextMenu` / `CommandPalette` / `Select` のグループ見出しと、`JsonViewer` / `KeyboardShortcuts` の題。`text-transform: uppercase` は見た目の指定だが、Chrome は大文字に変えたあとの文字（「MAIN PAGES」）を名前として渡しており、読み上げソフトによっては略語として 1 文字ずつ読まれうる。見た目は変えていない。グループの名前は、これまでの `aria-labelledby` に代えて `aria-label` で付く。あわせて、`ContextMenu` / `JsonViewer` / `KeyboardShortcuts` / `CodeBlock` / `CodeDiffViewer` の字間を生の値から `--wim-letter-spacing-wide` に揃えた（効いている値は同じ）。
