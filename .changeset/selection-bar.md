---
"wimui": minor
---

`SelectionBar` を足した（T362）。表の上に置き、選んだ行の数・その行への操作・選択の解除を 1 本のバーに出す。

- 受け取るのは件数（`count`）だけで、選択の状態は呼ぶ側（`DataGrid` の `selectedRowKeys` など）が持つ。件数が 0 より大きいあいだバーを出し、操作（`children`）を `Toolbar` に並べる。`onClear` を渡すと末尾に「選択を解除」のボタンが出る。
- 件数を、いつも在る status 領域で告知する（変わると「3 selected」、0 に戻ると「Selection cleared」。初回は告知しない）。告知を届けるため、何も選んでいないあいだも置いたままにする。
- バーにフォーカスが入ったあとで閉じると（解除のボタン・バーから開いた `Popconfirm` で確定したとき）、フォーカスを `returnFocusRef` か、バーの後ろで最初にフォーカスできる要素（`DataGrid` なら表）へ移す。ページの先頭へは落ちない。
- 内蔵の文言は en / ja / pt。`aria-label`・`countLabel`・`clearLabel` で差し替えられる。
- `wimui/data-display` 全部の予算を 90 → 92 kB にした（土台の `Toolbar` が束に入った分）。
