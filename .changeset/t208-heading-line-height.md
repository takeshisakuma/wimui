---
"wimui": minor
---

素の見出し（`h1`〜`h6`）の行間を、本文用の比率ではなく見出し用のトークンで決めるようにした。

`line-height` は単位なし＝比率なので、宣言が無ければ子孫が自分の font-size に掛ける。`reset.css` は `body` に `--wim-line-height-normal`（1.4 / `[lang="ja"]` は 1.6）を配っており、**素の見出しはその本文比率のまま**だった。実測で `<h1>`（UA 既定 2em＝32px）は行送り 44.8px / ja 51.2px ＝ 字の見た目の高さ約 22px の 2 倍以上まで開いていた。

`reset.css` の `@layer base` に素の見出しの規則を追加した ── 欧文 `--wim-line-height-snug`（1.33）、`[lang="ja"]` は `--wim-line-height-snug-jp`（1.5）。値は `Title` コンポーネントの判断に合わせてある（`tight` 系は `Title` ではディスプレイ段＝max 2.6rem ≒ 41.6px から使うもので、素の見出しの UA 既定は h1 の 32px が最大＝`Title` の `lg` と同じ帯）。

**`reset.css` を読み込んでいる場合、素の `<h1>`〜`<h6>` の行送りが縮む**（h1 で en 44.8px → 42.56px、ja 51.2px → 48px）。本文（`p` など）の行間は変えていない。`@layer base` に置いてあるので、自分で `line-height` を宣言しているクラスやコンポーネントの指定は一切上書きしない。

あわせて、base の規則が届かない 3 か所を見出し用トークンに揃えた:

- `Toast` のタイトル（`<h5>` だが自前で本文用トークンを宣言していたため base が届かない）
- `Alert` のタイトル（同上。`titleTag` で `h1`〜`h6` も取れる）
- `ThoughtProcess` のヘッダ（`role="heading"` だが要素は `div` / `button` なので base のセレクタが構造的に届かない）
