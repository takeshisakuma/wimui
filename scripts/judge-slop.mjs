/**
 * judge:slop — AI-slop の「判断依存」パターンを LLM で採点する助言ツール（B 層）。
 *
 * `check:slop`（A 層）は決定的に検出できる部分だけを機械強制する。ここでは正規表現で
 * 無理な視覚判断（1 画面 1 主役・中央揃え多用・rule of three・実在感・偽 chrome など）を、
 * VRT が既に撮っている Pattern スクリーンショットを `claude-opus-4-8` に採点させて拾う。
 * ルーブリックは DESIGN.md 「コンポジションガイドライン」の必須ルール／セルフレビューと
 * Nutlope/hallmark の視覚ゲートから作成。
 *
 * **非ブロッキング（既定 exit 0）**: 確率的なので CI を止めない。`--strict` で fail 検出時 exit 1。
 * **ゼロフットプリント**: `@anthropic-ai/sdk` は devDependency に足さず動的 import。未導入なら案内して exit 0。
 *
 * 使い方:
 *   node scripts/judge-slop.mjs                 # 全 light Pattern を採点し Markdown レポート
 *   node scripts/judge-slop.mjs --only marketing # ファイル名部分一致で絞り込み
 *   node scripts/judge-slop.mjs --limit 5        # 先頭 N 枚だけ（試し打ち）
 *   node scripts/judge-slop.mjs --strict         # fail が 1 件でもあれば exit 1
 *
 * 前提: `npm i -D @anthropic-ai/sdk` と ANTHROPIC_API_KEY（または `ant auth login`）。
 */
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const argv = process.argv.slice(2);
const strict = argv.includes('--strict');
const only = (() => { const i = argv.indexOf('--only'); return i >= 0 ? argv[i + 1] : null; })();
const limit = (() => { const i = argv.indexOf('--limit'); return i >= 0 ? parseInt(argv[i + 1], 10) : Infinity; })();

const MODEL = 'claude-opus-4-8';
const CONCURRENCY = 4;
const SNAPSHOT_DIR = 'vrt/vrt.spec.ts-snapshots';

// 判断依存ルール（A 層で機械化できない視覚判断）。DESIGN.md 必須ルール＋hallmark 視覚ゲート由来。
// ルーブリックは合成ルールの SSOT から引く（T39）。以前はここに本文を書き写しており、
// DESIGN.md / llms.txt と手で同期していたため、既にドリフトが起きていた。
const COMPOSITION = JSON.parse(
  fs.readFileSync(new URL('./composition-rules.json', import.meta.url), 'utf8'),
);
const RULES = Object.fromEntries(
  COMPOSITION.rules.filter((r) => r.judge).map((r) => [r.id, r.judge]),
);

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    ...Object.fromEntries(Object.keys(RULES).map((k) => [k, { type: 'string', enum: ['pass', 'warn', 'fail'] }])),
    notes: { type: 'string', description: '最も改善余地のある点を 1〜2 文で（日本語可）' },
  },
  required: [...Object.keys(RULES), 'notes'],
};

const SEV = { pass: 0, warn: 1, fail: 2 };
const MARK = { pass: '✓', warn: '▲', fail: '✗' };

function buildPrompt(storyName) {
  const rubric = Object.entries(RULES).map(([k, v]) => `- ${k}: ${v}`).join('\n');
  return `これは WIM UI デザインシステムの合成パターン「${storyName}」のスクリーンショットです。
「AI が生成した画面」に見えるかを、以下の各観点で pass / warn / fail の3段階で採点してください。
craft（単体品質）ではなく composition（階層・リズム・非対称・実在感）だけを見ます。判定は厳しめに。

観点:
${rubric}

各キーに pass|warn|fail を入れ、notes に最も改善余地のある点を 1〜2 文で。指定スキーマの JSON のみを返す。`;
}

async function main() {
  let Anthropic;
  try {
    ({ default: Anthropic } = await import('@anthropic-ai/sdk'));
  } catch {
    console.log('ℹ judge:slop は助言ツールです。実行には SDK と認証が必要:');
    console.log('    npm i -D @anthropic-ai/sdk');
    console.log('    export ANTHROPIC_API_KEY=...   # または `ant auth login`');
    console.log('（未導入のため何もせず終了。CI は止めません）');
    process.exit(0);
  }

  let files = globSync(`${SNAPSHOT_DIR}/light-patterns-*.png`, { posix: true }).filter((f) => fs.existsSync(f));
  if (only) files = files.filter((f) => f.includes(only));
  files = files.slice(0, limit);

  if (files.length === 0) {
    console.log(`対象スクリーンショットが見つかりません（${SNAPSHOT_DIR}/light-patterns-*.png）。VRT ベースライン生成後に実行してください。`);
    process.exit(0);
  }

  const client = new Anthropic();
  const storyOf = (f) => path.basename(f)
    .replace(/^light-/, '').replace(/-chromium-linux\.png$/, '');

  const results = [];
  let failed = false;
  let cursor = 0;

  async function worker() {
    while (cursor < files.length) {
      const file = files[cursor++];
      const story = storyOf(file);
      const b64 = fs.readFileSync(file).toString('base64');
      try {
        const res = await client.messages.create({
          model: MODEL,
          max_tokens: 16000,
          thinking: { type: 'adaptive' },
          output_config: { effort: 'medium', format: { type: 'json_schema', schema: SCHEMA } },
          messages: [{
            role: 'user',
            content: [
              { type: 'image', source: { type: 'base64', media_type: 'image/png', data: b64 } },
              { type: 'text', text: buildPrompt(story) },
            ],
          }],
        });
        if (res.stop_reason === 'refusal') { results.push({ story, error: 'refusal' }); continue; }
        const text = res.content.find((b) => b.type === 'text')?.text ?? '';
        const verdict = JSON.parse(text);
        const worst = Object.keys(RULES).reduce((m, k) => Math.max(m, SEV[verdict[k]] ?? 0), 0);
        if (worst === SEV.fail) failed = true;
        results.push({ story, verdict, worst });
      } catch (e) {
        const msg = e?.status === 401 || e?.status === 403
          ? '認証エラー（ANTHROPIC_API_KEY 未設定 or `ant auth login` 未実施）'
          : (e?.message ?? String(e));
        results.push({ story, error: msg });
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, files.length) }, worker));
  results.sort((a, b) => (b.worst ?? -1) - (a.worst ?? -1) || a.story.localeCompare(b.story));

  // --- Markdown レポート ---
  const cols = Object.keys(RULES);
  console.log(`# AI-slop LLM-judge（${MODEL}・助言）\n`);
  console.log(`対象: ${files.length} 枚 / モデル: ${MODEL}\n`);
  console.log(`| story | 判定 | ${cols.join(' | ')} |`);
  console.log(`|---|---|${cols.map(() => '---').join('|')}|`);
  for (const r of results) {
    if (r.error) { console.log(`| ${r.story} | ⚠ ${r.error} | ${cols.map(() => '-').join(' | ')} |`); continue; }
    const overall = r.worst === SEV.fail ? '✗ fail' : r.worst === SEV.warn ? '▲ warn' : '✓ pass';
    console.log(`| ${r.story} | ${overall} | ${cols.map((c) => MARK[r.verdict[c]] ?? '?').join(' | ')} |`);
  }
  console.log('\n## 指摘（warn/fail のみ）\n');
  for (const r of results) {
    if (r.error || r.worst === SEV.pass) continue;
    const flags = cols.filter((c) => r.verdict[c] !== 'pass').map((c) => `${MARK[r.verdict[c]]}${c}`).join(', ');
    console.log(`- **${r.story}** — ${flags}\n  - ${r.verdict.notes}`);
  }
  console.log('\n> 助言ツールです。合成ルールは DESIGN.md「コンポジションガイドライン」が正。決定的な検出は `check:slop`（A 層）が担当。');

  process.exit(strict && failed ? 1 : 0);
}

main();
