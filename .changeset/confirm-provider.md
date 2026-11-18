---
"wimui": minor
---

コードから確認を尋ねて答えを待つ `ConfirmProvider` と `useConfirm` を足した（T387）。`ConfirmProvider` をアプリの根の近くに 1 回置くと、`useConfirm()` が `confirm({ title, description?, confirmLabel?, cancelLabel?, intent? })` を返し、確認で `true`、取り消し・Escape・Provider が外れたときは `false` で終わる `Promise` になる。中身は `role="alertdialog"` の `Dialog` で、最初のフォーカスは確認のボタン（`intent: "danger"` のときは取り消しのボタン）。続けて呼ぶと順に開き、最後に閉じたあと、開く前にフォーカスがあった要素へ戻す。確認のボタンの既定の文言に、共通の翻訳 `action.ok` を足した。
