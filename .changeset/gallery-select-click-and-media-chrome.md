---
"wimui": patch
---

`Gallery` の `selectable` で、写真クリックが選択になって `onItemClick` が届かない穴を直しています。チェックで選び、写真クリック（と Enter）は `onItemClick` です。Space はチェックのキーボード相当。Shift 範囲選択はチェック側に残しています。

**`selectable` で写真をクリックして選んでいた画面は、チェックを押す操作に変わります。** チェックは常時出しています。型にはもともと `onItemClick` があり、`selectable` を付けると黙って捨てていたのが欠陥です（T171）。

`Lightbox.Gallery` はサムネイル帯のままです。`Gallery` を中に入れないことだけ JSDoc に書きました（T172③）。帯の CSS は動かしていません。

見た目の追随: `Gallery` のチェックは常時表示で tap 下限の箱、`Header` の中身は `min-height` で縦中央、`Carousel` は無効な前後を隠しアクティブ印を円のまま、`Audio` のキャプションはプレイヤー幅に揃えます。
