# CSS の規則（状態・!important・@layer・ダークモード）

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# インタラクション状態（`:hover` / `:active`）の背景色変更

- `:hover` や `:active` でボタン・タイルなどの 背景色を変化 させる場合は、`opacity` や `filter: brightness()` を使わず、CSS Color Level 4 の oklch 相対色構文 を使ってください。

  ```scss
  // NG — ダークモードで知覚的な変化量がバラつく
  &:hover { filter: brightness(0.9); }
  &:hover { opacity: 0.85; }

  // OK — oklch 空間で L（明度）のみ調整。ダーク・ライト共に均一な変化
  &:hover { background-color: oklch(from var(--wim-color-primary) calc(l * 0.85) c h); }
  ```

- **原則**: 明度の調整（暗くする・明るくする）を伴うすべての色指定において、`color-mix(in srgb, ...)` よりも `oklch(from ...)` を優先してください。SRGB空間での混色は知覚的に不均一な結果を招くため、新規実装での使用は非推奨です。

- 背景色がバリアント（カラー種別）によって異なる場合は、ローカル CSS 変数 `--_bg` に現在の背景色を保持し、`:hover` / `:active` でそれを参照してください。

  ```scss
  .action {
    --_bg: var(--wim-color-neutral-subtle);
    background: var(--_bg);
    &.primary { --_bg: var(--wim-color-primary); }
    &:hover { background: oklch(from var(--_bg) calc(l * 0.85) c h); }
  }
  ```

- **暗くする量は 2 組だけ**です。部品ごとに別の値を書かないでください（2026-10-04 まで Button 0.85 / Chip 0.9 / Tag 0.95、Badge は 1.1 で**明るく**なっていた）。

  | 面 | ホバー | 押下 | 例 |
  |---|---|---|---|
  | 色の付いた塗り（intent の面、淡い塗りを含む） | `l * 0.85` | `l * 0.85`（ホバーと同じ。押下は縮み `--wim-scale-active` で示す） | Button（solid）、Badge、Tag、Chip、FloatButton |
  | 面の色（`surface`）の行や枠 | `l * 0.95` | `l * 0.92` | List の行、Pagination のページ、FloatButton の default |

  塗りの 0.85 は Button で実測して決めた値です（T272。0.9 では静止時との面どうしの比が約 1.2 で見分けにくく、0.85 で約 1.3）。**押下でさらに暗くしない**のも実測からです ── 0.8 まで下げると、dark の danger の塗り（明るい面に暗い文字）で文字とのコントラストが 4.47 になり AA（4.5）を割りました（0.85 では 5.18）。ホバーで**明るく**する書き方は使いません ── dark では塗りが暗いので暗くする向きでも沈まず、light と向きを揃えられます。

- `opacity` は 表示/非表示の切り替え（`opacity: 0 → 1`）にのみ使用してください。`disabled` 状態への `opacity` トークン適用は引き続き許可します。

# フォーカス表示（`:focus-visible` / `:focus-within`）

既定のフォーカス表示は outline です（`base.scss`。2px の実線、offset 2px）。部品が自前の表示を書く必要があるのは、外側に描く余地が無い（トラックや外枠の中に詰まった項目）・外枠側に出したい（入力欄）ときだけです。

- **`outline: none` で消して box-shadow や背景だけにしない。** Windows のハイコントラストなどの強制カラー（forced-colors）では box-shadow が描かれず、フォーカスが丸ごと消えます（2026-10-03 の実測: 1499 の停止点のうち 246 が画素差 0）。影で描くときは、同じブロックに透明の outline を敷きます。通常の表示では何も描かれず、強制カラーでだけ色が付きます。

  ```scss
  @use "../../../styles/focus-mixins" as focus;

  // NG — 強制カラーで何も出ない
  &:focus-visible { outline: none; box-shadow: var(--wim-shadow-focus); }

  // OK — 外側の輪
  &:focus-visible {
    @include focus.forced-colors-outline;

    box-shadow: var(--wim-shadow-focus);
  }

  // OK — 内側の輪（外に描けない項目）
  &:focus-visible {
    @include focus.forced-colors-outline($inset: true);

    box-shadow: inset 0 0 0 var(--wim-border-width-thick) var(--wim-color-focus-outline);
  }
  ```

- 外枠の `:focus-within` に輪を出す部品（入力欄）も同じです。中の `input` で outline を消しているので、外枠のブロックに mixin を書きます。
- hover と同じブロックに書かない（強制カラーでホバーにも輪が出る）。フォーカスのブロックを分けます。
- 色は `--wim-color-focus-outline`（primary を直接使わない。dark で 1.61:1）。
- 書き方は `npm run check:focus-indicator` が見ます。**実際に見えるか**（親が切り取る・別の規則が勝つ）はコードから決められないので、フォーカス表示を触ったら `npm run measure:focus-forced-colors -- --only <ストーリー ID の一部>` で測ってください（手順は `MAINTENANCE.md` 12-4）。

# `!important` の使用

新規コードで `!important` を使用する場合は以下の方針に従ってください。

使用してよいケース（意図的な使用）:
- `prefers-reduced-motion` など、アクセシビリティのためにすべてのアニメーションを無効化する場合
- Box / Stack のようにインラインスタイル（CSS カスタムプロパティ）より優先させる必要があるレスポンシブユーティリティ

使用してはいけないケース（代替手段を使うこと）:
- 親コンポーネントが子コンポーネントのスタイルを上書きしたい場合 → 親クラスを前置してセレクターの特異性を上げてください

  ```scss
  // NG
  .wim-child-input { width: 100% !important; }

  // OK: 親クラスを前置して特異性で勝つ
  .wim-parent .wim-parent__row .wim-child-input { width: 100%; }
  ```

- サイズ・色・間隔などコンポーネント固有の値を上書きしたい場合 → CSS カスタムプロパティで上書き可能な設計にしてください

  ```scss
  // NG
  .wim-parent .wim-child { color: red !important; }

  // OK: カスタムプロパティで上書き可能にする（名前は実在のものを使う。ここは Table の行背景）
  .row { background: var(--wim-table-row-bg, var(--wim-color-surface)); }
  .striped .row:nth-child(even) { --wim-table-row-bg: var(--wim-color-surface-subtle); }
  ```

- [推奨パターン] 角丸やパディングの動的な上書き: 子要素の角丸やパディングの一部を親（InputGroup など）がリセットしたい場合は、以下のように「4角個別の変数」や「パディング変数」を用意してください。

  ```scss
  // 子要素（Button, Input など）側の定義
  .root {
    border-radius:
      var(--wim-field-radius-tl, var(--wim-field-radius, var(--wim-radius-component)))
      var(--wim-field-radius-tr, var(--wim-field-radius, var(--wim-radius-component)))
      var(--wim-field-radius-br, var(--wim-field-radius, var(--wim-radius-component)))
      var(--wim-field-radius-bl, var(--wim-field-radius, var(--wim-radius-component)));
  }

  // 親要素（InputGroup など）側の定義
  .root > *:not(:first-child) {
    --wim-field-radius-tl: 0;
    --wim-field-radius-bl: 0;
  }
  ```

# CSS カスケードレイヤー（@layer）

## 方針

コンポーネントの SCSS は原則としてすべて `@layer component` でラップします（`npm run scaffold` が自動適用します）。そのうえで、CSS カスケードの「非レイヤーのルールは @layer 内のルールより常に優先される」という性質を利用し、**子コンポーネントのスタイルを上書きする必要があるルールに限り**非レイヤーに置くことで、`!important` なしに自然な上書き関係を実現しています。

```scss
// Button のスタイルは @layer component 内
// Snackbar のアクションボタン上書きルールだけを非レイヤーに置く → !important 不要で勝つ
@layer component {
  .wrapper { /* Snackbar 自身のスタイル */ }
}

/* Unlayered: beats @layer component button rules */
.actionButton {
  color: var(--wim-snackbar-action);
}
```

## 子コンポーネントを上書きする場合の優先順位

1. **CSS カスタムプロパティ**: 子が公開している変数（`--wim-field-radius-*` 等）を親から設定する。レイヤーの有無に関係なく機能するため最優先で検討する（例: ButtonGroup の角丸リセット）。
2. **ハイブリッド（推奨）**: ファイルのベースは `@layer component` に置いたまま、上書きが必要なルールだけを非レイヤーのブロックに出す（例: Snackbar の `.actionButton`。非レイヤー部分には `/* Unlayered: ... */` のように理由をコメントする）。
3. **ファイル全体を非レイヤー**: 上書きルールが大半を占める複合コンポーネント（ButtonGroup・Transfer・TagInput・QueryBuilder・DataGrid など）や、インラインスタイル・ユーティリティと連携するレイアウトプリミティブ（Box・Flex・Center・Divider など）に限り、ファイル全体を非レイヤーのままにできます。

全コンポーネントを同じ `@layer component` に入れたまま上書き合戦をすると、ソース順・特異性による衝突が再発するため、上記のいずれかの手段を使ってください。

## `!important` の使用基準との関係

非レイヤーから `@layer component` 内のスタイルを上書きするときは `!important` 不要です。`@layer component` から非レイヤーのスタイルを上書きする必要がある場合のみ `!important` を使用してください（例: AppShell が Sidebar の幅をリセットする場合）。

---

# ダークモード

- コンポーネントのSCSSに `[data-theme="dark"]` セレクターや `@media (prefers-color-scheme: dark)` を書かないでください。 カラーやサーフェス・影・ゴースト・フィードバック等の値はすべて `tokens/` 配下の JSON で定義されており、Style Dictionary によって `src/tokens/generated/` にライト/ダーク切り替え可能な変数として出力されます。
- コンポーネントSCSSではトークン（生成された変数）を参照するだけでダークモード対応は完了します。
- 新しいダークモード固有の値が必要な場合は、`tokens/color/semantic.json` や `tokens/themes/dark.json` を編集し、`npm run tokens:build` を実行してください。
- 利用可能なトークンカテゴリ: Ghost/Subtle Surface、Glass/Frosted Surface、Skeleton、Control、Feedback variant、Utility（詳細は `_semantic-colors.scss` を参照）。

---

## ダークモード対応

セマンティックカラートークンを使っていれば自動対応されるため、コンポーネントSCSSに `[data-theme="dark"]` や `@media (prefers-color-scheme: dark)` を書く必要はありません。

```scss
// トークンを使うだけでライト/ダーク両対応（個別のダークモード記述は不要）
.wim-component {
  color: var(--wim-color-text-primary);
  background: var(--wim-color-glass-bg);     // 半透明ガラス効果
  border-color: var(--wim-color-glass-border);     // ガラスボーダー
}

// ゴーストスタイルのコントロール
.wim-component--ghost {
  background: var(--wim-color-ghost-bg);
  border-color: var(--wim-color-ghost-border);
}

// フィードバックコンポーネントのバリアント色（OKLCHによる知覚的な明度調整）
.wim-component--info {
  color: oklch(from var(--wim-color-info) calc(l * 0.7) c h);
  background: oklch(from var(--wim-color-info) l c h / 0.1);
  border-color: oklch(from var(--wim-color-info) l c h / 0.2);
}
```

新しい暗色/明色切替が必要な場合は、`src/tokens/_semantic-colors.scss` の `:root` と `@mixin dark-theme` の両方にトークンを追加してください。

# 入場のアニメーション（既定は「見えている」）

入場のフェードは、**既定を「見えている」にして、keyframes の `from` から始めます**。既定を透明にして、アニメーションの終わりの値で見えるようにしてはいけません。

```scss
// NG: アニメーションが止められると、透明のまま残る
.content {
  opacity: 0;
  animation: fadeIn var(--wim-duration-fast) forwards;
}

// OK: 既定は見えている。入場は from（透明）から始まり、終わったら既定の値に戻る
.content {
  animation: fadeIn var(--wim-duration-fast);
}

@keyframes fadeIn {
  from { opacity: 0; }
}
```

理由は 2 つあります。VRT は撮影時にアニメーションを止めるので、NG の書き方だと開いた姿が透明のままベースラインになり、見た目を変えても何も赤くなりません（Tooltip と HoverCard で実際に起きました）。利用者がアニメーションを切っている環境でも、同じ理由で表示されません。

`npm run check:opacity-forwards` が、同じ要素に透明の既定と、終わりの値を留めるアニメーション（forwards / both）を持つ規則を落とします（`audit:lib` / lint-staged。実証は `npm run prove:opacity-forwards`）。別々の規則に分けて書いた組・mixin の先・インラインスタイルは見ていないので、開いた姿のストーリーを VRT に載せて確かめてください。意図した形なら、アニメーションの行か直上のコメントに注記（`opacity-forwards-ok:` と理由）を書きます。
