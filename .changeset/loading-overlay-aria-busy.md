---
"wimui": patch
---

`LoadingOverlay`: 読み上げる領域（`role="status"`）に固定で付けていた `aria-busy="true"` を外した。この属性は、支援技術に「更新が終わるまで伝えるのを待ってよい」と伝える印で、読み上げる領域そのものに付いていると、文言の読み上げを遅らせる向きに働く。オーバーレイは表示が終わると要素ごと消えるので、待ちが解ける瞬間も無かった。

オーバーレイを `[aria-busy]` で引いている CSS やテストは、`.wim-loading-overlay` か `role="status"` で引く形に変える。前と同じ出力が要るときは、`<LoadingOverlay aria-busy="true" />` と自分で渡せば出る。読み込み中であることを示す `aria-busy` は、オーバーレイが覆っている側の要素に付ける。
