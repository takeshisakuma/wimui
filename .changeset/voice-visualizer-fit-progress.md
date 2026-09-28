---
"wimui": minor
---

`VoiceVisualizer` fits its container, stops dimming finished audio, and shows playback progress.

**破壊的変更**（0.x のため minor）。

- **棒の本数の既定を、置き場所の幅から決める形にしました**（`barCount="auto"`）。棒の幅 4px・間隔 3px は変わらず、幅いっぱいに並びます。これまでは既定 24 本（165px）の塊が箱の中央に浮いていました。前の見た目にするには、`barCount={24}` のように数を渡してください。`data` の値は、棒の本数に線形補間で引き直します。
- **`isActive={false}` で薄くするのをやめました。** 止まった姿を、そのままの濃さで描きます。録音が終わった音声（分析済みの波形など）まで「使えない」ように見えていたためです。音声を取り込めない・再生できない（マイクの許可が無いなど）ことを示すには、新しい `disabled` を使ってください。

  ```diff
  - <VoiceVisualizer isActive={false} />   // マイクの許可が無い
  + <VoiceVisualizer isActive={false} disabled />
  ```

- **`barCount` の型が `number | "auto"`、`height` の型が `number | "fill"` に広がりました。** 値を渡すだけのコードはそのまま動きますが、props の型を読んで `number` として扱うコードは型エラーになります。
- **`height="fill"`** を足しました。高さの決まった親に合わせて描きます。
- **`progress`（0〜1）** を足しました。録音済みの音声（`data` あり）の再生位置より手前をセンチメントの色、後ろを中立色（`--wim-color-text-disabled`）で描きます。
- 待機中の棒の脈は、24 本で 1 周期の波として流れるようにしました。本数が幅で決まるようになったため、以前の割り振り（全本数に 0〜0.5s）のままでは、幅いっぱいが左の低い棒から右の高い棒への 1 本の坂になっていました。
