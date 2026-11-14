---
"wimui": minor
---

**破壊的変更**: `useDialog`・`useDrawer`・`useLightbox` を公開しないようにしました。どれも部品の内側の状態を読むための関数で、部品の外で呼ぶと例外を投げ、文書にも載っていませんでした。ダイアログやドロワーを中から閉じるときは、`Dialog.Close` / `Drawer.Close` を使ってください。

公開している hooks（10 個）を文書にしました。

- Storybook に「Guides/Hooks」のページを足しました。import の行・シグネチャ・例は、ソースの JSDoc から生成します。
- `llms.txt` / `llms-full.txt` に「Hooks」の節を足しました。これまで llms に出ていた hook は `useToast` だけでした。
- `useToast`・`useSnackbar`・`useNotification` に JSDoc を、`useAutoResize`・`useTableSort`・`useWim` に使い方の例を足しました。
