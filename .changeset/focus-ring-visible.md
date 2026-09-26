---
"wimui": patch
---

キーボードのフォーカス表示が見えにくかった部品を直しました。

- **`ThreadList` の会話項目と削除ボタン、`ThemeToggle` の segmented** — 既定のフォーカス枠を消して、primary 15% の淡い 3px のにじみだけを出していました。面とのコントラストは light 1.27 / dark 1.05 で、ほぼ見えませんでした。ほかの部品と同じ既定のフォーカス表示（`--wim-shadow-focus`）に揃えています。
- **`ThemeToggle` の segmented の選択中の項目** — 選択中の項目の影が既定のフォーカス表示を上書きしていて、フォーカスしても何も表示されませんでした。フォーカス中は既定の表示が出るようにしました。
- **`Audio` の読み込み中のきらめき** — ここだけ primary の色を使っていたので、`Image` と同じ無彩色（`--wim-color-skeleton-bg` / `--wim-color-skeleton-shine`）に揃えました。
