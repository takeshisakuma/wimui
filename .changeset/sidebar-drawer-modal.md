---
"wimui": minor
---

Sidebar: `onMobileClose` を渡したドロワーが開いている間、ドロワーを名前付きの `dialog` にし、背面を `inert` にして読み上げと操作から外す。`showMobileCloseButton={false}` の構成では、閉じる口になる引き金だけは操作できるまま残す。ヘッダーのほかのボタンは、ドロワーが開いている間は押せなくなる。`onMobileClose` を渡さない場合の動きは変わらない。
