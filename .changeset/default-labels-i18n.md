---
"wimui": patch
---

英語で固定だった既定の文言を、表示言語（`setWimLocale` / `WimProvider`）に従うようにしました。対象は 11 部品です: ChatUI（送信ボタン・アバターの代替テキスト）/ ThreadList / ModelSelector / Carousel（`aria-roledescription`）/ NodeGraph / ScheduleView / RangeSlider（つまみの名前）/ ThemeToggle / Transfer / Audio / ImageCompare / Video。

- `labels` や `aria-label` で渡した文言は、これまで通り優先されます。
- **英語の既定の文言が変わるもの**:
  - Transfer の一覧の題: 「Source」/「Target」→「Available」/「Selected」（移動ボタンの「Move to selected」と揃えました）。空のときの文言は「No Data」→「No data」
  - ChatUI のアバターの代替テキスト: 「User Avatar」→「User avatar」
- 単位の表記（ModelSelector の `/1M`、Video の `s`）と、Audio のスリープタイマーの文言は、変えていません。

内蔵の翻訳が増えたので、翻訳を読む入口は一律に約 1.3 kB（gzip）増えます（`import { Button }` 単体で 13.8 → 15.2 kB）。
