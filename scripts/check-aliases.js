/**
 * check:aliases — 外部語彙との対応表（T46）の整合ガード。
 *
 * `src/data/components.json` の各コンポーネントは、他所の体系で使われている呼び名を
 * `aliases` に、**他所では別の意味を持つ語**を `disambiguation` に持てる。前者は
 * `llms.txt` に `(aka …)` として出て、外部の語彙で来た読者/エージェントを正しい
 * コンポーネントへ導く。後者は「同じ語が別物を指す」ことの警告で、別名にしてしまうと
 * 1 語が 2 つを指すことになるため分けてある（実例: macOS の Stepper は数値増減＝
 * WIM では `NumberInput` だが、WIM の `Stepper` は手順表示）。
 *
 * 別名は**探し物を別のコンポーネントへ誘導してしまう**性質があるので、次の 3 つを禁じる:
 *
 *   1. 既存のコンポーネント名と一致する別名（`Stepper` 型の事故）
 *   2. 全体で重複する別名（1 語が 2 つを指す）
 *   3. 空文字・空白のみ、および同一コンポーネント内での重複
 *
 * **引数は取らない。** lint-staged から変更ファイルの部分集合を渡されても全量を見る。
 * 2 は「全体で一意か」を問うため、部分集合で判定すると**必ず素通りする**
 * （`check:slop` のラチェットが lint-staged 経由で素通りしていたのと同型の穴）。
 * 同じ理由で `check-contrast.js` も引数を取らない設計にしてある。
 *
 * 使い方: node scripts/check-aliases.js
 */
import fs from 'node:fs';

const SRC = 'src/data/components.json';

/** 比較用の正規化。表記ゆれ（大小・連続空白）だけを吸収する。 */
const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');

const categories = JSON.parse(fs.readFileSync(SRC, 'utf8'));

/** name -> そのコンポーネントが属するカテゴリ id（エラーメッセージ用） */
const componentNames = new Map();
for (const cat of categories) {
  for (const comp of cat.components) componentNames.set(norm(comp.name), comp.name);
}

const failures = [];
/** 正規化した別名 -> それを宣言したコンポーネント名の配列 */
const seen = new Map();
let aliasCount = 0;
let withAliases = 0;

for (const cat of categories) {
  for (const comp of cat.components) {
    const list = comp.aliases;
    if (list === undefined) continue;

    if (!Array.isArray(list)) {
      failures.push(`${comp.name}: aliases は配列である必要があります（実際: ${typeof list}）`);
      continue;
    }
    withAliases += 1;

    const withinComponent = new Set();
    for (const raw of list) {
      aliasCount += 1;

      if (typeof raw !== 'string' || raw.trim() === '') {
        failures.push(`${comp.name}: 空の別名があります（${JSON.stringify(raw)}）`);
        continue;
      }
      const key = norm(raw);

      // 1. 既存のコンポーネント名と衝突
      if (componentNames.has(key)) {
        const real = componentNames.get(key);
        failures.push(
          `${comp.name}: 別名 "${raw}" は既存のコンポーネント名 \`${real}\` と一致します`
            + `（探した人が別物へ誘導されます。他所で別の意味を持つ語なら aliases ではなく disambiguation へ）`,
        );
        continue;
      }

      // 3. 同一コンポーネント内での重複
      if (withinComponent.has(key)) {
        failures.push(`${comp.name}: 別名 "${raw}" が同じコンポーネント内で重複しています`);
        continue;
      }
      withinComponent.add(key);

      // 2. 全体での重複
      if (!seen.has(key)) seen.set(key, []);
      seen.get(key).push(comp.name);
    }
  }
}

for (const [key, owners] of seen) {
  if (owners.length > 1) {
    failures.push(
      `別名 "${key}" が ${owners.length} 個のコンポーネントで使われています（${owners.join(' / ')}）`
        + `。1 語は 1 つのコンポーネントだけを指すこと`,
    );
  }
}

console.log('--- check:aliases (外部語彙との対応表) ---');
console.log(`\n${componentNames.size} コンポーネント中 ${withAliases} 件に別名 ${aliasCount} 語`);

if (failures.length > 0) {
  console.log(`\n[FAIL] 以下の別名が使えません:`);
  for (const f of failures) console.log(`  ${f}`);
  console.log(`\n  別名は「他所の体系が実際に使っている語」に限ること。`);
  console.log(`  自分で同義語を発明するとキーワード詰め込みになります。`);
  console.log('\n✗ check:aliases failed.');
  process.exit(1);
}

console.log('\n✓ 別名の衝突・重複はありません。');
