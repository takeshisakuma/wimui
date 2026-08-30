---
"wimui": patch
---

`ScheduleView` の自前スタイルを、他と同じ `@layer component` の中へ入れた（T243 の最終弾）。**これで全 212 個のスタイルシートがカスケードレイヤーの中に入った。**

`InteractiveGraph` / `NodeGraph`（React Flow）と同じく、**FullCalendar（`@fullcalendar/*`）の見た目を上書きしている部分だけはレイヤーの外に残している**。FullCalendar が配る CSS はどのレイヤーにも属さないため、レイヤーの中から上書きすると詳細度に関わらず負ける（実際に層へ入れて測ると、4 つの表示でレイアウトが崩れ、ツールバーのボタンが FullCalendar 既定の紺色に戻った）。

**描画は変わらない**（light / dark の両方で、`ScheduleView` と可視化・パターンの 108 ストーリーを撮り比べて差分ゼロ）。

> **上書きしている場合は確認を。** `ScheduleView` 自身の幅・最小高さを自前の CSS で上書きしていた場合、**これまで効かなかった上書きが効くようになる**。FullCalendar 側の見た目の優先順は変わらない。
