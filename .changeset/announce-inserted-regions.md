---
"wimui": patch
---

条件で差し込まれる表示の読み上げを直した（T353。ナレーター + Chrome で 8 か所を聞いた結果）。

- `DataGrid` の空の表示・`Combobox` の該当なし: 表示ごと `role="status"` / `aria-live` を差し込む形は読まれなかった。表示は飾りのまま差し込み、文字は部品が描かれた時点から在る領域で告げる。
- `Transfer` の空の表示: 読まれない `aria-live` を外した。空になるのは項目を移したときだけで、そのことは移動の告知（「Moved to selected: 2」）が言う。
- `InfiniteScroll`: `loader` に既定が無く、読み込み中は中身の無い `role="status"` だけが差し込まれていた（何も見えず、何も読まれない）。既定の読み込み表示（Spinner と「Loading more…」。ja / pt あり）を持たせ、読み込みが始まったときに告げる。
- `StreamingText`: 流れている途中に `aria-live` で読ませていたため、書き足すたびに読み直し、言語の切り替えや箇条書きの位置を挟み続けていた。途中は `aria-busy` だけにし、流れ終わったら書き上がった本文を 1 回だけ告げる。
- `Spinner`（`label` あり）: 表示ごと `role="status"` を差し込む形をやめ、空の領域と一緒に現れて 0.5 秒後に文を入れる。中身ごと告げる親（`InfiniteScroll`）の中では告げない。
