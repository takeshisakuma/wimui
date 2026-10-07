---
"wimui": patch
---

Audio（`showMetadata`）: optional の peer の `music-metadata` で、12 を確かめたうえで受け入れました。

peer のレンジを `>=11.0.0` から `^11.0.0 || ^12.0.0` に変えました。11 と 12 のどちらでも動きます。これまでのレンジは上限が無く、確かめていない将来の major まで受け入れる書き方でした。

`music-metadata` 12 は Node.js 22 以上を求めます（wimui の `engines` と同じです）。12 では、画像が複数あるときに表のジャケットが選ばれます（11 は先頭の画像を選んでいました）。
