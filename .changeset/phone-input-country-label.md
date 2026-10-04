---
"wimui": patch
---

PhoneInput の国の選択の読み上げ名を、表示言語に合わせるようにしました。

- `label` を渡さないとき、国の引き金と開いたリストの名前が英語の「Select country」で固定でした。`setWimLocale` / `WimProvider` の `locale` に従います（ja: 「国を選択」/ pt: 「Selecionar país」）。英語は変わりません。
