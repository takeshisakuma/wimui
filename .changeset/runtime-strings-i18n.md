---
"wimui": patch
---

英語で固定だった既定の文言を、表示言語（`setWimLocale` / `WimProvider` の `locale`）に従うようにしました。en / ja / pt を同梱しています。英語の表示は変わりません。

- **QueryBuilder**: 演算子のラベル（「Equals」「Greater than or equal」など 15 種）。`labels.operators` で渡した文言は従来どおり優先されます。
- **PhoneInput**: 国名（10 か国）。文字を打って国へ移動する操作は、表示している言語の国名で照合します。
- **Carousel**: 前へ・次へ・スライドの名前・「スライド N へ移動」。`labels` で渡した文言が優先されます。

文言が増えたぶん、翻訳を読む部品を使うバンドルが 0.2〜0.8 kB（gzip）増えます。`wimui/charts` は変わりません（GanttChart の既定の名前は英語のままです。変えるときは `labels` で渡してください）。
