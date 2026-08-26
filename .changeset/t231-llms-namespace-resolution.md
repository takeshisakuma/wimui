---
"wimui": patch
---

同梱している `llms.txt` / `llms-full.txt` が、docs サイトと違う説明文を 9 部品ぶん載せていたのを直した（T231）。

`scripts/generate-llms.js` は `descKey` を解決するとき、ロケールのファイルを `readdirSync` の順に走査して**後から来たファイルで上書き**していた。readdir はアルファベット順で、i18next が引く `ALL_NAMESPACES` もアルファベット順 ── **前者は「最後に見つけたほう」、後者は「先に見つけたほう」を返す**ので、同じキーが複数のロケールファイルに在ると**必ず逆の値が勝つ**。

その結果、`wimui/llms.txt` を読むエージェントと、docs サイトを読む人間とで、部品の説明が食い違っていた:

| 部品 | 同梱の llms.txt | docs サイト |
| --- | --- | --- |
| `IconButton` | Icon-only button | A square button containing only an icon without a text label. |
| `NodeGraph` | Interactive node-based flowchart and pipeline editor | Visualizes complex networks and relationships between nodes. |
| `ScheduleView` | Time-grid calendar with drag-and-drop scheduling | Displays tasks or events on a chronological timeline or calendar view. |
| `PromptInput` | Auto-resizing prompt input with send and attachment actions | Interactive input optimized for AI prompt engineering with multi-line support and action triggers. |
| `StreamingText` | Streaming Markdown renderer for AI-generated responses | Renders text with a typewriter-like animation, ideal for AI chat responses. |

ほかに `InteractiveArea` / `ImageCropper` / `PasswordStrength` / `TagInput`。**どちらも「正しい説明」のつもりで書かれた文**なので、片方が明らかな誤りという形ではなく、読む経路によって違うものが出ていた。

解決順そのものを `scripts/lib/locale-keys.js` の `resolveLocale()`（i18next と同じ先勝ち）に寄せた。**このモジュールは同じ誤りを直すために書かれていた**が、`generate-llms.js` だけ移行されていなかった。事例 9 件を個別に直すのではなく入口を 1 つにしたので、まだ残っているロケールの複製にも同じズレは起きない。

あわせて `wimui/locales/*` から `btn.page_transition`（`form.json`）と `table.header_usage`（`data-display.json`）が消える。どちらもドキュメント頁の表の見出しで、**同じキーが `components.json` にも在り、i18next の解決ではそちらが勝っていた**ので、実際に出る文字列は変わらない。

コンポーネントの API・スタイル・実行時の文字列は変更していない。
