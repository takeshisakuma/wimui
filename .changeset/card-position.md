---
"wimui": patch
---

`Card` に `position: relative` を持たせた。

`LoadingOverlay` は既定（`fixed={false}`）が `position: absolute` なので、覆うのは「包んだ要素」ではなく**位置を持つ最も近い祖先**。`Card` が `static` だったため、`<Card><LoadingOverlay /></Card>` と素直に書くと**画面全体が覆われていた**（実測 1280x800 に対しカードは 1248x75）。

`z-index` を伴わない `relative` は重ね合わせコンテキストを作らないので、影響は「カード内の絶対配置要素が何を基準にするか」に限られる。**カード内に絶対配置した要素をカードの外へはみ出させていた場合は、位置が変わる。**
