---
"wimui": minor
---

議論の 1 件を描く `Comment` を追加した（`wimui` / `wimui/data-display`）。返信を入れ子で持てる。optional peer には依存しない。

```tsx
import { Comment, RelativeTime, Tag } from "wimui";

<Comment
  id="c1"
  author={{ name: "Ngozi", initials: "NO", badge: <Tag size="sm">Author</Tag> }}
  timestamp={<RelativeTime date={postedAt} />}
  replyingTo={openId}
  onReply={(id) => setOpenId(id)}
  composer={<ReplyForm onSubmit={…} />}
  replies={[
    <Comment key="c2" id="c2" author={{ name: "Bruno" }}>Agreed.</Comment>,
  ]}
>
  本文（任意のノード ── Markdown でもメンションでも添付でも）
</Comment>
```

**返信欄と編集欄は状態ではなく差し込み口。** どれが開いているかを外から渡し（`replyingTo` / `editingId`）、欄そのものも外から渡す（`composer` / `editor`）。下書き・検証・送信は製品ごとに違うのでアプリに残り、この部品が引き受けるのは**どの製品でも同じで、しかも間違えやすい部分**だけ ── 見出しの構造、入れ子の意味づけ、編集されたコメントがそう名乗ること。

a11y は 4 点:

- 1 件ずつが**著者名で名づけられた `article`**。読み上げは入った時点で「誰のコメントか」を言う
- 返信は**入れ子のリスト**。字下げは目にしか届かないので、深さを渡すには構造が要る
- 組み込みの操作ボタンには著者名を目に見えない形で足す ──「返信」とだけ読めるボタンが並ぶと声では区別が付かない
- アバターは装飾扱い（名前は既に見出しに出ているため、`alt` を付けると同じ名前を 2 回読む）

`edited` を立てると「編集済み」を表示する。黙って書き換わったコメントは、最初からそう書いてあったように読まれる。
