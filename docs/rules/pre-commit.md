# pre-commit フックで自動チェックされる内容

> この文書は `SKILLS.md`（2026-09-21 に廃止）から切り出したものです。エージェントへの指示の正本は `AGENTS.md` で、ここは**その作業をするときだけ読む**手順です。

**正本は `package.json` の `lint-staged`。ここに一覧を書き写さないこと。**

以前ここには 3 項目（ESLint / Stylelint / i18n）が書いてありました。2026-09-21 に実際の設定と突き合わせたところ **27 パターン・49 コマンド**で、**写しが腐ったまま誰にも直されていなかった**（読んだ人は「フックは軽い」と誤解する）。`GEMINI.md` を廃止したのと同じ理由で、一覧は持ちません。

いま何が走るかは設定から数えます。

```bash
node -e "console.log(Object.keys(require('./package.json')['lint-staged']).join('\n'))"
```

走るものの**種類**（これは設定を見れば分かるので、ここでは分類だけ）:

- **文法・スタイル** — ESLint（`--max-warnings=0`）/ Stylelint。**型チェック（`tsc --noEmit`）はフックには入っていません** ── 走るのは CI の `Lint & Type Check` ジョブだけ（以前ここには「ESLint + TypeScript 型チェック」と書いてあったが、`lint-staged` に `tsc` は 1 つも無い）
- **トークンと生成物** — `tokens/**` を触ったら再生成し、生成物を自動で stage する（`scripts/stage-generated.js`）。`llms.txt` / `src/i18n/generated` / docgen も同じ扱い
- **i18n** — キーの整合性・別名・品質（PT-BR 語彙、指示形 placeholder）
- **MDX とドキュメント** — 必須セクション・生英語・リンク・コード例
- **規範のガード** — `check:slop`（AI-slop）/ `check:prop-api`（prop シグネチャの変化）/ `check:composition-rules` / `check:skills`（Agent Skills の形式）/ `check:instructions`（AGENTS.md・CLAUDE.md・`.gemini/settings.json` の対応）

**警告が 1 件でもあるとコミットが失敗します**（`--max-warnings=0`）。

> **lint-staged は変更されたファイルだけを渡す。** 合計を凍結するラチェット（`check:slop` の px 直書きなど）は、渡された部分集合で数えると**必ず基準を下回って素通りする**ため、**引数を無視して常に全量を数える**実装にしてあります（2026-07-26 に実際に素通りしていた）。新しくラチェットを足すときは同じ形にすること。
