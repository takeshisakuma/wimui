---
"wimui": patch
---

`DatePicker`: `minDate` / `maxDate` / `disabledDates` が効くようにした。これまでは 3 つとも受け取るだけで中の `Calendar` に渡しておらず、範囲外の日や無効にした日も選べていた。いまは、その日のボタンが押せなくなる（`Calendar` に同じ prop を渡したときと同じ）。
