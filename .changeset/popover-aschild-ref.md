---
"wimui": patch
---

`PopoverTrigger asChild` に渡した子が自分の `ref` を持っていると、面が引き金の隣ではなく画面の左上に出ていたのを直した。React 19 では子の `ref` も props に入るため、子の props を後から渡すと、位置合わせに使う ref が上書きされていた。子の `ref` には、これまでどおり要素が入る。
