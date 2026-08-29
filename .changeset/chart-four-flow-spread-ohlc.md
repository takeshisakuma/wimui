---
"wimui": minor
---

チャートを 4 種追加した（`wimui/charts`）。**新しい依存は増えていない** ── いずれも既存の peer である recharts の範囲で描いている。

既存 16 種では描けなかった 4 つの形を埋める。

- **`SankeyChart`** ── 量が段を移りながら分かれ・合流する図。**帯の太さがそのまま流れた量**で、これは `NodeGraph` では表せない（辺が流量の幅を持たない）。
- **`WaterfallChart`** ── ある数が別の数になるまでの増減の内訳。各段の棒はその段の前後の running total の間に浮く。
- **`BoxPlot`** ── 群ごとの分布（五数要約）。平均が同じでも散らばりが違えば違って見える。
- **`CandlestickChart`** ── 期間ごとの四本値。1 本が 4 つの数を運ぶので、終値だけの折れ線では落ちる「どこまで動いたか」が残る。

```tsx
import { SankeyChart, WaterfallChart, BoxPlot, CandlestickChart } from "wimui/charts";

<SankeyChart
  title="Where sign-up traffic comes from"
  nodes={["Search", "Direct", "Pricing page", "Left", "Signed up"]}
  links={[{ source: "Search", target: "Pricing page", value: 2840 }]}
/>

<WaterfallChart
  data={[
    { name: "Revenue", value: 1840 },
    { name: "Cost of sales", value: -620 },
    { name: "Profit", value: 0, total: true },
  ]}
/>
```

**色が唯一の手がかりにならないようにしてある。** `SankeyChart` は印そのものにノード名を描き、`WaterfallChart` は符号つきの値を棒ごとに描き、`CandlestickChart` は上げを中を抜いた枠・下げを塗りつぶしと**形**で分ける。グレースケールでも色覚の違いでも区別が残る。

分布と四本値の軸は **0 起点にしない**（0 を入れると図の大半が空白になり形が潰れる）。軸の端は切りのいい数へ丸める。

4 種とも、描画は支援技術から隠して**同じ値をデータ表で併記**する（`SankeyChart` は 1 行が 1 本の流れ、`BoxPlot` は五数要約、`CandlestickChart` は OHLC）。
