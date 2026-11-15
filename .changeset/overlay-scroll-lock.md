---
"wimui": patch
---

Dialog、Drawer、BottomSheet、Lightbox を開いても、ページがスクロールバーの幅だけ横にずれないようにした（T395）。スクロールを止めている間は `body` の `scrollbar-gutter` を外し、画面のスクロールバーが消えた分だけ余白を足す。面を重ねて開いたときは、最後の 1 枚を閉じるまでスクロールを止めたままにする。
