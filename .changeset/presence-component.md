---
"wimui": minor
---

在席を示す `Presence` を `data-display` に追加した（T225 ④）。ルートの `wimui` バレルと `wimui/data-display` の両方から使える（optional peer に依存しない）。

```tsx
<Presence status="online">
  <Avatar src={user.avatar} alt={user.name} />
</Presence>

<Presence status="away" showLabel />
```

これまで在席のドットは `Indicator` の手組みだった。手組みだと「`online` は `success`」という対応を呼び出し側が覚えることになり、画面ごとにずれる。`Presence` が持つのは 2 つだけ:

- **状態の語彙と色の対応** ── `online` / `away` / `busy` / `offline` の 4 つに固定し、表はコンポーネント側に 1 つだけ置く。
- **状態の名前** ── 色付きのドットは色だけで意味を運ぶので、状態名を必ずテキストとして描画する。`showLabel` を付ければ見え、付けなくても支援技術には読める（`VisuallyHidden`）。`Avatar` を囲んだ場合はアバターの名前 → 状態名の順に読まれる。

ドット自体は `Indicator` をそのまま使うので、サイズ・角の位置・サーフェスの縁取りは既存の実装を通る。`children` を渡さなければドットは行内に並び、名前の隣にも置ける。

`Avatar` の API は変えていない（`status` prop を生やす案は、アバター以外の場面で使えず、`Avatar` が「誰か」に加えて「どういう状態か」まで持つことになるため採らなかった）。

あわせて `check:prop-api` の誤報を直した。**新規コンポーネントの必須 prop を「必須の prop が増えました（既存の呼び出しが落ちます）」と報告していた** ── スナップショットにその部品が 1 つも無ければ、落ちる既存の呼び出しは存在しない。ライブラリの利用者には影響しないが、新しい部品を出すたびに嘘の破壊的変更が記録される状態だった。
