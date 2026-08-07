---
"wimui": patch
---

複数行のとき、`Alert` と `Toast` のアイコンが 1 行目に揃うようになった。

どちらも `.root` が「1 行目に揃える」と宣言しているのに、アイコン側の `align-self: center` がそれを打ち消しており、**内容が伸びるほどアイコンが下へ落ちていた**（Alert: 塊 68px で 24px ずれ / Toast: 塊 100px で 43px ずれ）。

あわせて `CodeBlock` / `Terminal` / `Code` で `hyphens: manual` を指定し、コードが単語の途中でハイフン分割されないようにした（en / pt で `hyphens: auto` を継承していた）。散文側の設定は変えていない。
