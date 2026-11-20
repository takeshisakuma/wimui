---
"wimui": patch
---

Blueprint の部品の名前で探しても見つかるよう、15 部品に 15 語の別名を足した（`llms.txt` / `llms-full.txt` の索引に載る）。`Alert` に Callout、`EmptyState` に Non-Ideal State、`CommandPalette` に Omnibar、`Combobox` に Suggest、`InputGroup` に Control Group、`KeyboardShortcuts` に Hotkeys、`DatePicker` に Date Input、`DateRangePicker` に Date Range Input など。Blueprint の DatePicker / DateRangePicker はその場に出す暦の面（WIM の `Calendar` / `RangeCalendar`）なので、`DatePicker` と `DateRangePicker` には取り違えの注意書きを付けた。部品の振る舞いは変わらない。
