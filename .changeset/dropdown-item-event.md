---
"wimui": patch
---

Dropdown: `Dropdown.Item` を `Popconfirm` や `Popover` の引き金にすると、押したときに例外で落ちていたのを直した。項目を選ぶとメニューは閉じるので、確認を出すときはメニューの外の `Dialog` を状態で開く。
