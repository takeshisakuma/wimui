---
name: composition-guidelines
description: Use BEFORE combining multiple WIM UI components into a screen, pattern, page, recipe, demo, story (stories/Patterns/**, MDX examples), or any composed layout — and ALSO before choosing a component's own default props/styles or writing its catalogue "Default" story, because a component's bare render is judged by the same rules. Loads the anti-generic composition rules that keep composed screens from looking AI-generated.
---

# コンポジションガイドラインの適用

複数コンポーネントを組み合わせるレイアウトを書く前に、`DESIGN.md` の「コンポジションガイドライン（AI 的な画面を避ける）」セクションを Read して従うこと。

**「合成画面を書くとき」だけではない。** 部品の既定値（props の既定・`.module.scss` の既定の面）を決めるとき、およびカタログの `Default` ストーリーを書くときも同じ規範に従う。部品を素で置いた姿は、その部品を使う画面すべてに出るため、既定が禁止パターンなら画面ではなく既定の失敗（必須ルール 15 `default_anatomy`）。

手順:

1. `DESIGN.md` 末尾の「コンポジションガイドライン」セクションを読む（禁止パターン表・必須ルール・チェックリスト）。
2. レイアウトを書く前に、その画面の「視覚的主役」を 1 つ決める。
3. 実装中は禁止表の形に逃げない。落とすのは形そのものではなく**同じスロット・同じ長さ・同じ声量の反復**（数と長さは内容から決める）。
4. `npm run check:slop` を走らせる。**これは機械層しか見ていない** ── 何を見ていないかは DESIGN.md の「機械ガード」注記に書いてあるので、そこを読んで残りは自分の目で確かめる（一覧をここに書き写さない）。
5. **部品を props なしで置いた姿**を確かめる（定型ヒーロー・3 列均等・斜めグラデの面・虹色カテゴリ・空の定型コピーになっていないか）。
6. 完成後、セクション末尾のセルフレビューチェックリストで自己検証してから完了とする。

ガイドラインの本文・禁止表・チェックリストは DESIGN.md が唯一の情報源（このファイルに複製しない）。ルールの機械可読な単一ソースは `scripts/composition-rules.json`。

このファイルの実体は `.agents/skills/` にある（Codex / Cursor などが直接読む共有の場所）。`.claude/skills/` は `npm install` 時に `prepare` が繋いだリンクなので、**編集は `.agents/skills/` 側で行う**。

判定（keyless judge）: 既存の合成画面が「AI 的か」を採点したいときは、VRT の Pattern スクショ（`vrt/vrt.spec.ts-snapshots/light-patterns-*.png`）を Read で開き、`scripts/judge-slop.mjs` のルーブリック（`composition-rules.json` の `judge` を持つルール全件）で pass・warn・fail 採点してレポートする（`judge:slop` と同一観点。API キー不要）。
