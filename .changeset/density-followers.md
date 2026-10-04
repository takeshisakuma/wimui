---
"wimui": patch
---

密度（`data-density="compact"`）に追従していなかった操作系の部品を、追従させました。**既定（comfortable）の見た目は、OtpInput を除いて変わりません。**

- **Tabs**: タブの上下・左右の余白
- **Accordion**（FAQSection も）: 見出し（押す行）の余白
- **Transfer**: 一覧の見出しの余白
- **RangeSlider**: 根の高さ（Slider と同じ決め方に揃えました。24 → 20px。つまみの当たり判定は 24px のまま）
- **OtpInput**: セルの大きさ。**既定の見た目も変わります** ── セルは 40px → 42px（入力欄・ボタンの md と同じ高さ）。compact では 36px。`fullWidth` などで広いときは 48px（compact で 40px）

追加したトークン: `--wim-accordion-trigger-padding-y`（Accordion の見出しの縦の余白。compact で小さくなります）。

Pagination・Menubar・Calendar の日・CheckboxGroup / RadioGroup は、compact でも変わりません（当たり判定の下限にいる、または項目のあいだの間隔のため）。
