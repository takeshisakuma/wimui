---
"wimui": minor
---

`SwipeableList` を公開しました（`wimui` / `wimui/data-display`）。`SwipeAction` の行を包むと、開いている行を常に 1 つまでに保ちます（`exclusive`、既定 `true`）。スワイプで開いても、キーボードで操作にフォーカスして開いても、ほかの行は閉じます。これまでも実装はありましたが、どこからも export されておらず、利用者は使えませんでした。

```tsx
import { SwipeableList, SwipeAction } from "wimui";

<SwipeableList>
  <SwipeAction rightActions={[...]}>...</SwipeAction>
  <SwipeAction rightActions={[...]}>...</SwipeAction>
</SwipeableList>
```
