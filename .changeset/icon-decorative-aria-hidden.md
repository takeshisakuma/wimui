---
"wimui": patch
---

`Icon` は、名前を渡していないアイコンを、読み上げの対象から外すようになりました（`aria-hidden="true"`）。

これまでは、何も付けない素の SVG を描いていたので、ボタンの中のアイコンが「名前の無い画像」として残り、スクリーンリーダーの項目移動で「グラフィック」とだけ読まれていました（ナレーター + Chrome の実機で、`Toolbar` の中の `IconButton` と `ToggleGroup`）。`Icon` を中で使う部品（`IconButton`・`Button`・`ToggleGroup` など）のアイコンも、同じように外れます。

- `aria-label` か `aria-labelledby` を渡したアイコンは、その名前を持つ画像（`role="img"`）として読まれます
- `aria-hidden` や `role` を自分で渡した場合は、渡した値が優先します
- 見た目は変わりません

テストで、名前の無いアイコンを役割（`img`）で引いていた場合は、引けなくなります。`aria-label` を渡すか、`data-testid` などで引いてください。
