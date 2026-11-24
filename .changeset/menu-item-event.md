---
"wimui": patch
---

Menu / ContextMenu: `Menu.Item` と `ContextMenu.Item` を `Popover` や `Popconfirm` の引き金にすると、押したときに例外で落ちていたのを直した。`onClick` にイベントを渡す（`Dropdown.Item` と同じ）。
