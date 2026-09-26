---
"wimui": minor
---

## 既定値の変更（利用者の画面が黙って変わる）

ページ内に置く部品と通知が、既定ですりガラス（半透明の面＋背後のぼかし）になっていたのをやめました。すりガラスを既定にすると、それがライブラリの見た目になり、しかも最も没個性な見た目になります。

- **`Alert` / `Banner`** — intent 無しの既定の面を、半透明（`--wim-color-frosted-bg` / `--wim-color-overlay-soft`）から不透明な `--wim-color-surface` へ変えました。背後のぼかしも外しています。intent 付き（`info` / `success` / `warning` / `danger`）の面は変わりません。
- **`TreeView`** — 面を `--wim-color-glass-bg` から `--wim-color-surface` へ、枠を `--wim-color-glass-border` から `--wim-color-border` へ変え、ぼかしを外しました。あわせて部品変数 `--wim-tree-blur` は効かなくなります。
- **`Toast`** — 浮く面なので、`Popover` の既定と同じ形（`--wim-color-surface` ＋ `--wim-shadow-overlay`）にしました。以前は `--wim-color-glass-bg` ＋ glass の影＋ぼかしでした。
- **`Snackbar`** — 面はもともと不透明だったので、効いていなかったぼかしだけを外しました。部品変数 `--wim-snackbar-blur` は効かなくなります。

すりガラスが欲しい画面では、これまでどおり `Card` / `Popover` / `Tooltip` の `variant="glass"`、`Header` / `Navbar` / `TabBar` の `glass` prop を使えます。
