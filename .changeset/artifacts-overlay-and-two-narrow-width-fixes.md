---
"wimui": minor
---

`ArtifactsOverlay` が import できるようになりました。併せて狭幅の欠陥を 2 件直しています。

**`ArtifactsOverlay` は資料に載っていながら、どのバレルからも export されていませんでした。** `src/data/components.json`（ai カテゴリ）にも `docs/Hierarchy.mdx` にも MDX にも専用ストーリーにもあるのに、0.22.0 の `dist/ai.d.ts` / `dist/index.d.ts` に名前がありません（実測 0 件）。実装は配られているのに到達できない状態でした。

```tsx
import { ArtifactsOverlay } from "wimui";        // ルートバレル
import { ArtifactsOverlay } from "wimui/ai";     // ai バレル
```

optional peer は持たない（`Drawer` の上に載るだけ）ので、両方から届きます。

**サイズ影響**: `wimui/ai` が 45 kB → 47.21 kB（+2.21 kB）。`dist/ai.js` にこれまで `Drawer` が 1 本も入っていなかったため、`OverlayBase` ごと引き込みます。ルートバレルは `wimui/overlay` 経由で既に `Drawer` を含むので +0.43 kB のみ。全 13 予算とも緑ですが、**`wimui/ai` は上限 50 kB に対し残り 2.79 kB** といちばん薄いので、次に ai へ足すときは先にサイズを測ってください。

---

**`CodeDiffViewer`** — 行番号が狭い幅で潰れ、2 桁が 1 桁ずつ折り返していました。**10 行を超える差分すべて**で起きます。`width: 3em` は下限ではないため、390px では中身が 7.57px しか残らず（数字 1 文字が 7.59px）、`10` が `1` と `0` に割れてその行だけ高さが 2 倍になり、差分の行揃えが崩れていました。`min-width` を足しています。**見た目が変わるのは狭い幅だけ**で、768px 以上は変化ありません。

**`Badge`** — 文字の太さを `Tag` / `Chip` と同じ `medium` に揃えました。ここだけ 400 で、同じサイズ・同じ文字色・同じ面でも細く見えていました（とくに `warning` の solid は面が明るく文字が黒固定なので、細さがそのまま読みにくさになります）。**`Badge` を使っている箇所は文字がわずかに太くなります。** 色・寸法・レイアウトは変わりません。
