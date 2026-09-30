---
"wimui": patch
---

`Popover` の開いた中身（`role="dialog"`）に、既定で読み上げの名前が付くようにしました。これまでは `PopoverContent` に `aria-label` / `aria-labelledby` を渡さない限り名前が無く、axe の `aria-dialog-name`（serious）に当たっていました。

- 名前を渡さないときは、トリガーの文字が名前になります（`aria-labelledby` がトリガーを指します）。トリガーに `id` を渡している場合（`asChild` の子に付けた `id` を含む）は、その `id` をそのまま使います。
- `aria-label` か `aria-labelledby` を渡したときは、渡した名前が優先されます（`Popconfirm` はこれまでどおりタイトルが名前になります）。
