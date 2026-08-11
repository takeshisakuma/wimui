---
"wimui": minor
---

`Dashboard` stops offering an edit mode it cannot deliver, and four charts start using the space they were given.

**既定の挙動が 1 つ変わります**（0.x のため minor）。

- **`Dashboard` の編集トグルは、渡された機能から決まるようになりました。** `showEditToggle` の既定は `true` で、読み取り専用の画面にも「Edit」が出ていました — 押しても `onRemove` が無ければ何も起きないボタンです。これからは、編集状態を渡しているか（`editable` / `defaultEditable`）、消す・足す手立てがあるとき（`onRemove` / `onAdd`）だけ出ます。**どれも渡していない `Dashboard` からはトグルが消えます。** 以前の挙動が必要なら `showEditToggle` を明示してください。

  ```diff
  - <Dashboard widgets={widgets} />                    {/* Edit が出ていた */}
  + <Dashboard widgets={widgets} showEditToggle />     {/* 出したいなら明示 */}
  ```

- **`Sparkline` の既定幅が `"100%"` になりました。** 100px 固定だったので、タイルに置くと左端しか使いませんでした。数値を渡していた場合の挙動は変わりません。
- **`RadarChart` の塗りが 0.6 から 0.18 に、輪郭線が 2px になりました。** 0.6 では 2 系列目が 1 系列目を覆って後ろが読めませんでした。レーダーは軸ごとの形を線で比べる図です。半径軸の目盛りは中央付近で回転して重なり読めなかったので、既定で消しました（絶対値は Tooltip が出します）。
- **`BarChart` が棒の名前を間引かなくなりました。** 幅 279px の枠で 4 本中 2 本が無名になっていました。棒の名前は凡例で代替できません。
- **`FunnelChart` の段が 1 色相の濃淡になりました。** 1 つの量が減っていく図で段ごとに色相が変わると、別のものに見えます。左右の余白も広げ、段のラベルの見切れを直しました。
- **軸の目盛りとプロット領域の間の無駄な余白を詰めました。** `AreaChart` / `BarChart` / `LineChart` / `ScatterChart` で、左の軸の数値のぶんグラフが右へ寄って見えていました。
