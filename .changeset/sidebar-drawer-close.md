---
"wimui": minor
---

Sidebar: `onMobileClose` を追加した。渡すと、`md` 以下で開いたドロワーに閉じるボタンと Escape が加わり、開いている間はフォーカスがドロワーの中に留まり、閉じると引き金へ戻る。渡さない場合の動きは変わらない。引き金が見えたまま閉じる役も持つ構成（AppShell のヘッダーのハンバーガーなど）では、`showMobileCloseButton={false}` でドロワーの閉じるボタンを消せる。
