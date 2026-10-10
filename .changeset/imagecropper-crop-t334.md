---
"wimui": minor
---

`ImageCropper` が、切り抜いた画像を返すようになりました（T334）。これまで `onCrop` / `onApply` に渡っていたのは、**切り抜く前の `src` そのもの**でした（位置・拡大・回転は画面の上で動くだけで、結果に反映されていませんでした）。

**動きが変わります。** `onCrop` / `onApply` の第 1 引数は、枠の中に見えている範囲を切り抜いた画像の data URL になります。受け取った値を「元の画像の URL」として使っていた場合は、`src` に渡した値を使ってください。

- **出力は、元の画像の解像度で切り抜きます**（画面に出ている大きさではありません）。長いほうの辺の上限は `maxOutputSize` で決められます。
- **第 2 引数に、切り抜きの数値が渡ります**（位置・拡大・回転・枠と出力の大きさ）。サーバーの側で同じ切り抜きをやり直せます。
- **`onCropError`** を足しました。画像を作れなかったとき、`onCrop` / `onApply` の代わりに、理由と同じ数値を引数に呼び出されます。多い原因は、別のオリジンの画像を CORS の許可なしで描いたことです。
- **`crossOrigin`** を足しました。別のオリジンの画像を切り抜くときに指定します（配信する側が CORS のヘッダーを返す必要があります）。
- **`outputType`**（既定は `"image/png"`）と **`outputQuality`**（既定は `0.92`）で、出力の形式と画質を選べます。
- `circular` のときも、出力は円を囲む正方形です。丸くするのは、表示する側で行います。

```tsx
<ImageCropper
  src="/avatars/original.png"
  maxOutputSize={512}
  onApply={(dataUrl, detail) => uploadAvatar(dataUrl, detail)}
  onCropError={(error, detail) => cropOnServer(detail)}
/>
```
