---
"wimui": patch
---

フォーム系の部品で、`transition: all` をやめ、動かすプロパティを列挙しました。対象は Button / Input / Textarea / Select / MultiSelect / TreeSelect / Cascader / Transfer / RichTextEditor / QueryBuilder / PhoneInput / OtpInput / InlineEdit / InputBase の 18 箇所です。

列挙したのは色・背景・枠・影・outline の色・透明度で、必要な箇所だけ `transform` と `fill` も含めています。時間と曲線は変わりません。以前は密度を切り替えたときに、ボタンなどの余白や幅までふわっと動いていましたが、これが止まります。ホバーなどの色の変化は、これまでどおりなめらかに動きます。
