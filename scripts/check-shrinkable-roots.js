#!/usr/bin/env node
/**
 * check:shrinkable — `width: 100%` と `min-width: 0` を同居させない（T59）。
 *
 * flex アイテムの自動最小サイズ（`min-width: auto`）は「内容より小さくならない」
 * 保護だが、**指定サイズと内容サイズの小さいほう**という定義なので、
 * `width: 100%` を書くと親が細いときに指定サイズ側が小さくなり、保護が消える。
 * そこへ `min-width: 0` を足すと、下限が無くなって**1 文字幅まで潰れる**。
 *
 * 実測（T32 の 3 枚目、コンテナ 610px）: `UsageMeter` が **幅 12px・高さ 272px**
 * になり `C o n t e x t` と 1 文字ずつ縦に折り返った。`ModelSelector` も 12px の
 * 空箱。**`wrap="wrap"` では直らない** — ゼロまで縮められる要素は折り返しを
 * 起こさず、ただ細くなるだけ。
 *
 * **どのガードも見ていなかった**: tsc / lint / check:slop / axe / 横スクロール測定
 * （`scrollWidth === clientWidth`）すべて緑のまま出荷されていた。DESIGN.md の
 * チェックリストは「1 文字ずつ折り返る」を名指ししているのに、検出する仕組みが無い。
 *
 * **正当な `min-width: 0` は「下限を持つ根の内側」だけ。** `Select` の `.trigger` の
 * ように、根が下限を持ったうえで中身を省略させる縮みは正しいので、`shrinkable-ok`
 * を添えて理由を書けば逃がせる。
 *
 * ※ 初版のこのコメントは「長い内容を縮めて内部スクロールさせたい場面
 * （`MarkdownRenderer` 等）」を正当例として挙げていたが、**実装を見ずに書いた誤り**。
 * `MarkdownRenderer` の `.root` は overflow を持たない flex column で、スクロール
 * するのは内側の `.tableWrapper` だけ。実測（610px の flex row・残り 24px）では
 * 幅 24px・高さ 6950px・テキスト幅 4px＝1 文字ずつの折り返しになっていた。
 *
 * **同型がもう 1 つあり、下の第 2 の形で見ている（T61）。**
 *
 * 使い方: node scripts/check-shrinkable-roots.js
 * 引数は取らない（lint-staged から部分集合を渡されても全量を見る）。
 *
 * **`shrinkable-ok` は宣言と同じ行か、直前 6 行以内に置くこと。** 理由を長く書くと
 * 窓から外れて落ちる（2026-08-03 に `QueryBuilder` で実際に踏んだ）。窓を広げると
 * 無関係な宣言まで免除してしまうので、**長い理由は別の段落に分け、`shrinkable-ok`
 * を含む短い一段落を宣言の直前に置く**のが正しい書き方。
 */
import fs from 'node:fs';
import { globSync } from 'glob';

/**
 * 実測後のラチェット。減らしたらこの値を下げること。**増やすことは許さない。**
 * 残っているものは「意図的に縮ませる」もの。
 */
// 2026-08-03 **0 件**。残っていた 15 件を 610px の flex row（残り 24px）で 1 件ずつ
// 実測し、**12 件すべてが実害だった**（幅 24px まで潰れる。`MarkdownRenderer` は
// 高さ 1160→6950px で 1 文字ずつの折り返し、`RichTextEditor` は 271→906px）。
// 9 件に読める下限を与え、6 件は「下限を持つ根の内側」として `shrinkable-ok`。
// これで 0 になったので、以後は**新規の同居をそのまま落とす**ハードゲート。
const BASELINE = 0;
const EXCUSE = 'shrinkable-ok';

const hits = [];

for (const file of globSync('src/**/*.module.scss', { posix: true })) {
  const src = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const lines = src.split('\n');

  // **同じ規則の中**だけを見る。`min-width: 0` を見つけたら、`{` / `}` を越えない
  // 範囲で `width: 100%` を探す。ブロックを入れ子ごと数えると `@layer component { … }`
  // がファイル全体を 1 ブロックにしてしまい、無関係な 2 宣言を同居と誤判定する
  // （最初の実装がそれで 38 件の偽陽性を出した）。
  lines.forEach((raw, i) => {
    const line = raw.replace(/\/\/.*$/, '');
    // `!important` を数えないと素通りする。実際 `InputBase` の `.inner` が
    // `min-width: 0 !important;` で 15 件の外に隠れていた（2026-08-03 に判明）。
    if (!/(^|\s)min-width:\s*0(px)?\s*(!important\s*)?;/.test(line)) return;

    const sameRule = (from, to, step) => {
      for (let k = from; k !== to; k += step) {
        const l = lines[k]?.replace(/\/\/.*$/, '') ?? '';
        if (/[{}]/.test(l)) return false;
        if (/(^|\s)width:\s*100%\s*;/.test(l)) return true;
      }
      return false;
    };
    // 同じ規則の前後どちらにあってもよい
    if (!sameRule(i - 1, Math.max(-1, i - 30), -1) && !sameRule(i + 1, Math.min(lines.length, i + 30), 1)) return;

    const excused =
      line.includes(EXCUSE) ||
      lines.slice(Math.max(0, i - 6), i).some((l) => l.includes(EXCUSE));
    if (!excused) hits.push(`${file.replace('src/components/', '')}:${i + 1}`);
  });
}

/**
 * ── 第 2 の形（T61）: `container-type: inline-size` に下限が無い ──────────────
 *
 * `container-type: inline-size` は `contain: layout style inline-size` なので、
 * **内容の寸法が 0 として扱われる**。`min-width: 0` を 1 文字も書かなくても
 * 上と同じ潰れ方をするため、第 1 の形だけでは母集団の半分しか見ていなかった。
 *
 * 単独実験（610px の flex row・残り 40px・内容は 190px の語）:
 *   `width:100%` のみ → 190px（保護あり） / `width:100%` + `min-width:0` → 40px
 *   `width:100%` + `container-type` → **40px** / `container-type` のみ → **0px**
 *   `container-type` + `min-width:min-content` → **40px**（`min-content` も 0 に潰れる）
 *
 * 2026-08-03 に 610px の flex row（残り 24px）で 19 コンポーネントを実測し、**全件
 * 潰れた**（`Gallery` と `Dashboard` は 0px、`ChatUI` は 2px。高さは
 * `ThoughtProcess` 375→3923px / `DescriptionList` 377→3199px / `Tabs` 142→1329px）。
 *
 * **`min-content` を下限に使わないこと** — containment 下では 0 に潰れる。
 */
const CONTAINMENT_BASELINE = 20;
const containmentHits = [];

for (const file of globSync('src/**/*.module.scss', { posix: true })) {
  const src = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const lines = src.split('\n');

  lines.forEach((raw, i) => {
    const line = raw.replace(/\/\/.*$/, '');
    if (!/container-type:\s*inline-size\s*;/.test(line)) return;

    // 同じ規則の中に下限があるか。`min-width: 0` は下限ではないので数えない。
    //
    // **値を取り出して判定すること。** 最初は
    // `/min-width:\s*(?!0(px)?\s*;)/` と否定先読みで書いたが、`\s*` が
    // バックトラックして**値ではなく空白の位置**で先読みが評価されるため、
    // `min-width: 0;` が下限として通っていた（実証で判明。既知の 19 件に
    // `min-width: 0` を足しても鳴らなかった）。**この修正で 20 件目（`TreeView`）が
    // 現れた** — 壊れた先読みが実在のケースを 1 件覆い隠していた。
    const isFloor = (l) => {
      const m = l.match(/(^|\s)min-width:\s*([^;]+);/);
      if (!m) return false;
      return !/^0(px)?(\s*!important)?$/.test(m[2].trim());
    };
    const scan = (from, to, step) => {
      for (let k = from; k !== to; k += step) {
        const l = lines[k]?.replace(/\/\/.*$/, '') ?? '';
        if (/[{}]/.test(l)) return false;
        if (isFloor(l)) return true;
      }
      return false;
    };
    const hasFloor =
      scan(i - 1, Math.max(-1, i - 40), -1) || scan(i + 1, Math.min(lines.length, i + 40), 1);

    const excused =
      line.includes(EXCUSE) ||
      lines.slice(Math.max(0, i - 6), i).some((l) => l.includes(EXCUSE));
    if (!hasFloor && !excused) containmentHits.push(`${file.replace('src/components/', '')}:${i + 1}`);
  });
}

console.log('--- check:shrinkable (width:100% と min-width:0 の同居) ---');
console.log(`\n同居している箇所: ${hits.length} 件（baseline: ${BASELINE}）`);
if (hits.length > BASELINE) {
  for (const h of hits) console.log(`  ${h}`);
  console.log(`\n[FAIL] 横並びに置くと 1 文字幅まで潰れます（T59）。`);
  console.log(`       \`width: 100%\` は flex の自動最小サイズを指定サイズ側で決めるため、`);
  console.log(`       \`min-width: auto\` の「内容より小さくならない」保護が効きません。`);
  console.log(`       読める下限（例: \`var(--wim-width-sm)\`）を与えるか、`);
  console.log(`       意図的に縮ませるなら \`${EXCUSE}\` を添えて理由を書いてください。`);
  process.exit(1);
}
if (hits.length < BASELINE) {
  console.log(`ベースラインを ${hits.length} に更新できます（scripts/check-shrinkable-roots.js）。`);
}

console.log('\n--- check:shrinkable (container-type: inline-size に下限が無い) ---');
console.log(`\n下限の無い containment: ${containmentHits.length} 件（baseline: ${CONTAINMENT_BASELINE}）`);
if (containmentHits.length > CONTAINMENT_BASELINE) {
  for (const h of containmentHits) console.log(`  ${h}`);
  console.log(`\n[FAIL] 横並びに置くと潰れます（T61）。`);
  console.log(`       \`container-type: inline-size\` は \`contain: inline-size\` なので`);
  console.log(`       内容の寸法が 0 として扱われ、\`min-width: auto\` の保護が消えます。`);
  console.log(`       \`min-width: 0\` を書いていなくても同じ結果になります。`);
  console.log(`       読める下限を与えるか（**\`min-content\` は containment 下では 0 に潰れるので不可**）、`);
  console.log(`       そのコンテナが誰にも参照されていないなら \`container-type\` 自体を外してください。`);
  console.log(`       意図的に縮ませるなら \`${EXCUSE}\` を添えて理由を書いてください。`);
  process.exit(1);
}
if (containmentHits.length < CONTAINMENT_BASELINE) {
  console.log(`ベースラインを ${containmentHits.length} に更新できます（scripts/check-shrinkable-roots.js）。`);
}

console.log('\n✓ 増えていません。');
