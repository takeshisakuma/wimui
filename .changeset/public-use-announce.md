---
"wimui": minor
---

`useAnnounce` を公開しました（`import { useAnnounce } from "wimui"`）。操作の結果（「保存しました」「3 件」など）をスクリーンリーダーに告げる hook です。返ってくる `region` を最初の描画から置いたままにして、`announce(text)` を呼びます。WIM UI の部品が使っているのと同じ形で、実機のスクリーンリーダー（ナレーター + Chrome）で読まれることを確かめています。型 `AnnounceRole` / `AnnounceOptions` も公開しました。
