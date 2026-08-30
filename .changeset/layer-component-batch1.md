---
"wimui": patch
---

25 コンポーネントのスタイルを、他と同じ `@layer component` の中へ入れた（T243 の第 1 弾）。

これまで一部のコンポーネントだけがカスケードレイヤーの外にあり、**レイヤーの外の宣言はレイヤーの中より常に強い**（詳細度は比較にすら入らない）ため、次の 2 つが起きていた。

- **ライブラリ内部で衝突する** — 実例として、カード表示の `DataGrid` で固定列の解除が効かず、行が 10px ずれてカードからはみ出していた（0.29.2 で個別に修正済み）
- **利用者側の上書きが効かない** — 自分で書いた CSS が、これらのコンポーネントの内部スタイルに勝てないことがあった

今回入れた 25 個は、**カタログ 204 画面を撮り比べて描画が変わらないことを確認済み**。

対象: `ArtifactsOverlay` / `PromptInput` / `Autosave` / `ButtonGroup` / `CounterTextarea` / `QueryBuilder` / `TagInput` / `Transfer` / `BentoGrid` / `Box` / `Center` / `Divider` / `Flex` / `Footer` / `Header` / `Masonry` / `ScrollArea` / `Sidebar` / `Splitter` / `Transition` / `VisuallyHidden` / `Watermark` / `Gallery` / `KeyboardShortcuts` と内部の共有パーツ 1 つ。

> **上書きしている場合は確認を。** これらのコンポーネントを自前の CSS で上書きしていた場合、**これまで効かなかった上書きが効くようになる**（レイヤー外の指定が勝つため）。逆に、レイヤーを使って意図的に弱めていた指定は今までどおり。

残りの 8 コンポーネント（`ScheduleView` / `DataGrid` / `NodeGraph` / `Dashboard` / `InteractiveGraph` / `StreamingText` / `MarkdownRenderer` / `List`）は描画が変わるため、この版では動かしていない。
