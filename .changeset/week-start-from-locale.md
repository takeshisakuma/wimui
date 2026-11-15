---
"wimui": minor
---

`Calendar` / `RangeCalendar` / `DatePicker` の週の始まりの既定を、ロケールから決めるようにした（T388）。`weekStartsOn` を渡さないとき、`setWimLocale`（または `WimProvider` の `locale`）に渡したロケールの週の始まりに従う（`en-GB`・`de` は月曜、`en`・`ja`・`pt` は日曜）。これまでは常に日曜だったので、`de` や `en-GB` を渡している画面では月曜始まりに変わる。日曜のままにしたいときは `weekStartsOn={0}` を渡す。土曜始まりのロケールと、`Intl.Locale` の週の情報を持たないブラウザ（Firefox 152 以前など）は日曜。

あわせて、`setWimLocale("en-GB")` の地域を暦に使うようにした。文言はこれまでどおり内蔵の言語（`en`）で引くが、曜日名と月名は `en-GB` の書き方になる。
