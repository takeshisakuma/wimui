#!/usr/bin/env node
/**
 * prove:prop-api — `check:prop-api` が「鳴るべき経路で鳴り、鳴ってはいけない経路で鳴らない」
 * ことを、**故意の変更を部品のソースへ差し込んで**実証する。差し込みは必ず元に戻す。
 *
 * なぜ要るか: 2026-09-21 に、このガードを**加算でも落とす**ように変えた。それまでは
 * 「`--update` してください」と助言して exit 0 だったので、**スナップショットが 18 prop
 * 遅れたまま 3 週間気づかれなかった**（`Comment` が丸ごと未収録・`BentoGridItem.span` ほか）。
 * 強さを変えたガードは、**変えた側と変えていない側の両方**を実際に鳴らして確かめる
 * （AGENTS.md「未実証のガードは信用しない」）。
 *
 * スナップショットではなく**ソースを触る**のが要点。docgen の抽出まで含めて本物の経路を通す。
 *
 * Usage: npm run prove:prop-api
 */
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const TARGET = 'src/components/feedback/Indicator/Indicator.tsx';
const ANCHOR = '  pulse?: boolean;';

const run = () => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-prop-api.js'], { encoding: 'utf8' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

const CASES = [
  {
    name: 'P1. 何も触らなければ鳴らない（スナップショットが現物と一致している）',
    put: null,
    expect: false,
  },
  {
    name: 'P2. prop を足すと鳴る（加算＝スナップショット遅れ。2026-09-21 に追加した判定）',
    put: `  proveTempFlag?: boolean;\n${ANCHOR}`,
    expect: true,
    match: /スナップショットに無い prop/,
  },
  {
    /**
     * 型宣言から消しても、docgen は**分割代入に残った名前**を拾うので
     * 「prop が無くなりました」ではなく「型が boolean → unknown に変わりました」で鳴る
     * （2026-09-21 に実測。`unknown` を値として凍結する問題の親戚）。
     * **どちらの文言で鳴るかまで固定しておかないと、次に測り方を変えたときに気づけない。**
     */
    name: 'P3. 型宣言から prop を消すと鳴る（docgen は分割代入から名前を拾うので unknown 化として出る）',
    put: '',
    expect: true,
    match: /型が変わりました/,
  },
  {
    name: 'P5. 分割代入からも消すと「prop が無くなりました」で鳴る',
    put: '',
    also: [{ find: '      pulse = false,\n', put: '' }, { find: '            pulse && styles.pulse,\n', put: '' }],
    expect: true,
    match: /prop が無くなりました/,
  },
  {
    name: 'P4. 任意 → 必須も鳴る（呼び出し側が落ちる変更）',
    put: '  pulse: boolean;',
    expect: true,
    match: /任意 → 必須/,
  },
];

const original = fs.readFileSync(TARGET, 'utf8');
if (!original.includes(ANCHOR)) {
  console.error(`✗ ${TARGET} に目印 "${ANCHOR.trim()}" がありません。移動したら直してください。`);
  process.exit(1);
}

let allOk = true;
try {
  for (const c of CASES) {
    let mutated = c.put === null ? original : original.replace(ANCHOR, c.put);
    for (const extra of c.also ?? []) {
      if (!mutated.includes(extra.find)) {
        console.error(`✗ ${c.name}: 目印 "${extra.find.trim()}" が見つかりません。`);
        allOk = false;
      }
      mutated = mutated.replace(extra.find, extra.put);
    }
    fs.writeFileSync(TARGET, mutated);

    const { code, out } = run();
    const rang = code !== 0;
    const matched = !c.match || c.match.test(out);
    const ok = rang === c.expect && (!c.expect || matched);
    if (!ok) allOk = false;

    console.log(
      `${ok ? 'OK ' : 'NG '} ${c.name} → ${rang ? '鳴った' : '鳴らない'}（期待: ${c.expect ? '鳴る' : '鳴らない'}）` +
        (c.expect && rang && !matched ? ' ── ただし文言が期待と違う' : ''),
    );
  }
} finally {
  fs.writeFileSync(TARGET, original);
  // docgen はキャッシュを持つので、差し込みが残らないよう最後に 1 回素で走らせる。
  run();
}

console.log(allOk ? '\n✓ prove:prop-api — 全ケース期待どおり。' : '\n✗ prove:prop-api — 期待と違うケースがあります。');
process.exit(allOk ? 0 : 1);
