# CSS の規則（状態・!important・@layer・ダークモード）

> この文書は `RULES.md`（2026-09-20 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**詳細規則です。

# インタラクション状態（`:hover` / `:active`）の背景色変更

- `:hover` や `:active` でボタン・タイルなどの 背景色を変化 させる場合は、`opacity` や `filter: brightness()` を使わず、CSS Color Level 4 の oklch 相対色構文 を使ってください。

  ```scss
  // NG — ダークモードで知覚的な変化量がバラつく
  &:hover { filter: brightness(0.9); }
  &:hover { opacity: 0.85; }

  // OK — oklch 空間で L（明度）のみ調整。ダーク・ライト共に均一な変化
  &:hover { background-color: oklch(from var(--wim-color-primary) calc(l * 0.9) c h); }
  ```

- **原則**: 明度の調整（暗くする・明るくする）を伴うすべての色指定において、`color-mix(in srgb, ...)` よりも `oklch(from ...)` を優先してください。SRGB空間での混色は知覚的に不均一な結果を招くため、新規実装での使用は非推奨です。

- 背景色がバリアント（カラー種別）によって異なる場合は、ローカル CSS 変数 `--_bg` に現在の背景色を保持し、`:hover` / `:active` でそれを参照してください。

  ```scss
  .action {
    --_bg: var(--wim-color-neutral-subtle);
    background: var(--_bg);
    &.primary { --_bg: var(--wim-color-primary); }
    &:hover { background: oklch(from var(--_bg) calc(l * 1.1) c h); }
  }
  ```

- `opacity` は 表示/非表示の切り替え（`opacity: 0 → 1`）にのみ使用してください。`disabled` 状態への `opacity` トークン適用は引き続き許可します。

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
