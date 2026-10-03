---
"wimui": patch
---

強制カラー（Windows のハイコントラストなど）で、キーボードのフォーカス表示が消えていたのを直しました。

- 影（box-shadow）でフォーカスの輪を描いていた部品は、強制カラーでは影が描かれないため、フォーカスしても何も変わりませんでした。対象は Pagination / Link / Menu / ContextMenu / Menubar / Tabs / TabNavigation / Accordion / SegmentedControl / ToggleGroup / Slider / RangeSlider / Banner / Spoiler / TreeView / Carousel / Gallery / GanttChart と、入力欄（Input / Textarea / Select / MultiSelect / PhoneInput / OtpInput ほか）です。
- 同じ位置に透明の outline を敷きました。強制カラーではシステムの色で輪が出ます。
- 通常の表示（ライト / ダーク）の見た目は変わりません。
