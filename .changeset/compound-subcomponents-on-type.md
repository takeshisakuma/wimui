---
"wimui": minor
---

`List.Item` で `ListItem` を書けるようにしました。ほかの「親.子」の部品（`Card.Header`・`SortableList.Item` など）と同じ書き方です。`ListItem` の import も、これまでどおり使えます。

`Lightbox.Trigger` / `Lightbox.Content` / `Lightbox.Gallery` を、型のエラーなしで書けるようにしました。実行時には以前から動いていましたが、`Lightbox` の型に子が載っておらず、tsc が落ちていました。`LightboxRoot` はこれまでどおり使え、`Lightbox` と同じものです。
