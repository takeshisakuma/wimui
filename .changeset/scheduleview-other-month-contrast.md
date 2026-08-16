---
"wimui": patch
---

`ScheduleView` の月表示で、前後の月の日付（`fc-day-other`）が読めない濃さだったのを直した。FullCalendar 既定の `.fc-day-other .fc-daygrid-day-top { opacity: .3 }` が効いており、実測でコントラストは light 2.07:1 / dark 2.67:1（WCAG 2.1 AA の 4.5:1 に対して SERIOUS）。不透明度で薄くするのをやめ、`--wim-color-text-secondary` で「弱い文字」を表すようにした。見た目の弱さは保ったまま AA を満たす。
