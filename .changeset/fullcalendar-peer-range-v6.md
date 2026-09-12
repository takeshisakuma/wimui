---
"wimui": patch
---

`ScheduleView` の optional peer（`@fullcalendar/*`）のレンジを `>=6.0.0` から `^6.0.0` に狭めた。**いままで FullCalendar 7 を許容すると宣言していたが、7 では動かない。**

実測（2026-09-12）:

- **プラグイン 3 つに 7 の安定版が無い。** `@fullcalendar/daygrid` / `timegrid` / `interaction` は `latest` が **6.1.21** のままで、7 系は `7.0.0-rc.0` 止まり。`ScheduleView` はこの 3 つを import している
- **ロケールの import 先が消えている。** `ScheduleView` は `@fullcalendar/core/locales/{ja,pt,pt-br}` を読むが、**`@fullcalendar/core@7.1.0` の tarball には `locales/` が 1 file も入っていない**（6.1.21 には `locales/ja.*` がある）。`exports` も `.` と `./protected-api` だけ
- **新しい必須 peer が 2 つ増える。** `temporal-polyfill@^1.0.1` と `@full-ui/headless-calendar@7.1.0`

つまり `>=6.0.0` は**検証していない major を許容していた**だけでなく、**成立しない組み合わせを許容していた**。7 を入れた利用者は `ScheduleView` が壊れる（プラグインは stable が無く、ロケールは解決できない）。範囲を実態に合わせる。

利用者への影響: FullCalendar 6 のままなら何も変わらない。7 を入れている場合はインストール時に peer の不一致として出る（そもそも動作しない組み合わせ）。
