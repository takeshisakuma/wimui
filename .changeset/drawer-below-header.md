---
"wimui": patch
---

`AppShell` の中で使う `Sidebar`（`responsive`）のドロワーと暗幕を、狭い幅ではヘッダーの下（本文の枠）から出すようにした。ヘッダーは暗幕に覆われず、ハンバーガーはその場で閉じるボタンになる（`Navbar` と同じ閉じ方）。これまでは暗幕がヘッダーも覆い、ハンバーガーは押せず、閉じ方は暗幕を押すことだけだった。暗幕を押して閉じる操作も、そのまま使える。`AppShell` の外で使う `Sidebar` は変わらない（画面全体を基準にする）。基準は CSS 変数 `--wim-sidebar-drawer-position`（既定 `fixed`。`AppShell` は `md` 未満で `absolute` を渡す）で切り替わる。
