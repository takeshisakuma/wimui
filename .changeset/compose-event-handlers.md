---
"wimui": patch
---

部品に、部品が自分で使っているのと同じ名前のイベント（`onClick`・`onKeyDown` など）を渡すと、部品の処理が丸ごと消えるのを直しました（T347）。

これまでは、たとえば次のようになっていました。`onClick={undefined}` を渡しただけでも、同じでした。

- `Tabs.Trigger` に `onClick` を渡すと、タブが切り替わらない
- `AccordionTrigger` に `onClick` を渡すと、開かない
- `Navbar.MenuItem` に `onClick` を渡すと、メニューが閉じない
- `ImageCompare` に `onPointerDown` を渡すと、つまみが動かない

直したあとは、**渡した処理を先に呼び、続けて部品の処理を呼びます**。部品の動きを止めたいときは、渡した処理の中で `event.preventDefault()` を呼んでください（部品の処理を呼びません）。

対象は 23 部品です: Accordion・Audio・Cascader・ChatUI・DatePicker・Image・ImageCompare・InteractiveArea・Navbar（MenuItem）・Popover（Close）・PullToRefresh・RangeSlider・Rating・Slider・SmartSearchInput・SortableList・SpeedDial・Splitter・SwipeAction・Tabs・TimePicker・Transition・Video（と、重なりの面の土台）。
