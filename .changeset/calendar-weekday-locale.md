---
"wimui": patch
---

Fix `Calendar` showing Japanese weekday headers regardless of locale

`Calendar`（および `RangeCalendar` / `DatePicker` など内部で使う全て）の曜日ヘッダが
**UI の言語に関係なく `日 月 火 水 木 金 土`** と表示されていました。

原因は実装内のローカル定数で、prop も i18n も経由しないため**消費者側から差し替える
手段がありませんでした**。英語のアプリを作ると、カレンダーの曜日だけ日本語になります。

`Intl.DateTimeFormat` で現在のロケールから導くようにしました。**内蔵リソースの
3 言語（en / ja / pt）に限らず**、`setWimLocale("de")` ならドイツ語の曜日が出ます。

```
locale=ja: 日 月 火 水 木 金 土
locale=en: Sun Mon Tue Wed Thu Fri Sat
locale=pt: dom. seg. ter. qua. qui. sex. sáb.
```

**曜日ヘッダの文字数が言語で変わります**（`日` の 1 文字に対し `Sun` は 3 文字）。
カレンダーの列幅を独自に狭めている場合は確認してください。
