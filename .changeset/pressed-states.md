---
"wimui": patch
---

押すとその場で何かが起きる操作要素に、押下（`:active`）の見た目を付けました。

これまで押下で見た目が変わるのは、Button を土台にする部品と Pagination・Reaction など数部品だけで、隣に並ぶタブや閉じるボタンは押しても変わりませんでした。次の要素が、押しているあいだ沈みます。

- **地が濃くなるもの**: Tabs・TabNavigation のタブ / ToggleGroup・SegmentedControl の項目 / Calendar・RangeCalendar の日と月送り / Accordion（FAQSection）の見出し / Menubar の項目 / 入力欄の中のボタン（PasswordInput の表示切替など）/ PhoneInput の国の引き金 / Tag の閉じる / InlineEdit / TabBar / ThemeToggle / ModelSelector と CommandPalette の引き金 / CodeBlock・Terminal・CodeDiffViewer・JsonDiffViewer の Copy と切替 / RichTextEditor のツール / NodeGraph のツール / ThoughtProcess の見出し / ThreadList の行 / TreeDiagram の選べるノードと開閉 / AIResponseFeedback
- **少し縮むもの**: Carousel の前へ・次へ / Banner・Notification の閉じる / HamburgerMenu / Rating の星 / Spoiler の開閉 / Comment の操作 / JsonViewer・PivotTable の開閉の印

リンク（Link・Breadcrumb・Navbar・SourceCitation）には付けていません。押すと移動する要素は、下線と色で役割が伝わっているためです。

見た目だけの変更で、API は変わりません。
