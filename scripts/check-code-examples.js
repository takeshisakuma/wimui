#!/usr/bin/env node
/**
 * check:examples — README / llms.txt のコード例が**実際にコンパイルできる**かを見る（T37）。
 *
 * T37 は「リポジトリの主張の機械検証」。#207 で README の peer 表と import 経路の
 * 実在は塞いだが、**コード例そのもの**は誰も検証していなかった。llms.txt の価値は
 * PR #64 の A/B で「API 正当性＝コンパイル可否」と測ってあるので、そこが本丸になる。
 *
 * 特に llms.txt / llms-full.txt の recipes は `scripts/generate-llms.js` の中に
 * **手書きの文字列**として存在し、コメントに「Every symbol/prop below is verified
 * against the real API」と書いてある。**手で verify したという主張**であって、
 * それを確かめる手立ては無かった。ここがまさに T37 の対象。
 *
 * ## やること
 *
 * ```tsx / ```ts のブロックを取り出し、`wimui` を**このリポジトリのソースへ解決**して
 * `tsc --noEmit` に通す。存在しない named export、消えた prop、型の合わない値が落ちる。
 *
 * ## やらないこと（意図的）
 *
 *   - 実行しない。描画の正しさは VRT と人間のレビューの担当
 *   - 公開 tarball に対しては見ない。それは `smoke:recipes`（T35）の担当で、
 *     あちらは「公開物に在るか」を、ここは「今のソースと合っているか」を見る。
 *     重複ではなく、落ちる理由が違う（配布漏れ / API ドリフト）
 *   - import を 1 つも持たないブロックは**断片**として飛ばす。`i18n.on(...)` のような
 *     文脈依存の 1 行は、周りを捏造しないと型が付かず、捏造した時点で検証にならない
 *
 * 飛ばした数は必ず出す。**検査できた数が 0 なら落とす**（抽出が空振りしているのに
 * 緑になる形は、このリポジトリで既に 4 回起きている）。
 *
 * ## 使い方
 *
 *   node scripts/check-code-examples.js
 *   node scripts/check-code-examples.js --keep   # 生成した .tsx を消さずに残す
 *
 * 例示のために意図的にコンパイルが通らない書き方をしているブロックは、フェンスの
 * 直前に `<!-- code-example: skip — 理由 -->` を置くこと（理由は必須）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SOURCES = ['README.md', 'README.ja.md', 'public/llms.txt', 'public/llms-full.txt'];
const OUT_DIR = path.join('tmp', 'code-examples');
const SKIP_RE = /<!--\s*code-example:\s*skip\s*[—-]\s*(.+?)\s*-->/;

const keep = process.argv.includes('--keep');

/** ```tsx / ```ts のブロックを、開始行つきで取り出す。 */
function extract(file) {
  const source = fs.readFileSync(file, 'utf8');
  const lines = source.split(/\r?\n/);
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const fence = lines[i].match(/^```(tsx|ts)\s*$/);
    if (!fence) {
      i += 1;
      continue;
    }
    const start = i;
    let end = i + 1;
    while (end < lines.length && !/^```\s*$/.test(lines[end])) end += 1;
    // 直前の非空行に skip 指示があるか
    let marker = null;
    for (let k = start - 1; k >= 0; k -= 1) {
      if (lines[k].trim() === '') continue;
      marker = lines[k].match(SKIP_RE);
      break;
    }
    blocks.push({
      file,
      lang: fence[1],
      startLine: start + 2, // フェンスの次の行が本文 1 行目
      code: lines.slice(start + 1, end).join('\n'),
      skipReason: marker ? marker[1] : null,
    });
    i = end + 1;
  }
  return blocks;
}

const all = SOURCES.filter((f) => fs.existsSync(f)).flatMap(extract);

const checked = [];
const skippedFragment = [];
const skippedMarked = [];

for (const block of all) {
  if (block.skipReason) {
    skippedMarked.push(block);
    continue;
  }
  // 自己完結の目安は「**名前を束縛する** import があるか」。`import "wimui/icons";`
  // のような副作用だけの import は、前の例の続きを見せる断片であって単体では
  // 成立しない（実際 README のアイコン節がそれで、`Button` を import していない）。
  if (!/^\s*import\s+(?!["'])/m.test(block.code)) {
    skippedFragment.push(block);
    continue;
  }
  checked.push(block);
}

console.log('--- check:examples (README / llms.txt のコード例をコンパイルする) ---');
console.log(
  `\n${SOURCES.length} ファイルから ${all.length} ブロック` +
    `（検査 ${checked.length} ・断片で対象外 ${skippedFragment.length} ・skip 指示 ${skippedMarked.length}）`,
);

if (checked.length === 0) {
  console.error('\n✗ 1 ブロックも取り出せませんでした（抽出が空振りしています）。');
  process.exit(1);
}

// --- 一時ファイルへ書き出す -----------------------------------------------
fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const slug = (b, n) =>
  `${path.basename(b.file).replace(/\W+/g, '_')}_L${b.startLine}_${n}`;

/**
 * 相対 import（`import { App } from "./App"`）は**読者のファイル**を指す。実体は
 * 無いので、その import が要求している名前だけを `any` で持つスタブへ差し替える。
 *
 * ここを「例が悪い」として書き換えると、レシピは「あなたのアプリの App を包む」
 * という一番大事なことを言えなくなる。逆にスタブを置かずに流すと、読者側の記号が
 * 見つからないという**検査したい対象と無関係な赤**でガードが埋まる。
 * スタブはブロックごとに名前を分ける（同じ `./App` を複数のレシピが使うため）。
 */
function stubRelativeImports(code, prefix) {
  const stubs = [];
  // 節は `[^;]*?` で取る。`[\s\S]*?` だと**前の import 文をまたいで**節を拾い、
  // `./App` のスタブに `createRoot` を生やすところまで実際にやらかした。
  // 文の区切り（`;`）を越えられない形にしておくこと。
  const rewritten = code.replace(
    /(import\s+)([^;]*?)(\s+from\s+)(["'])(\.[^"']*)\4/g,
    (_all, head, clause, mid, quote, spec) => {
      const stubName = `__stub_${prefix}_${spec.replace(/\W+/g, '_')}`;
      const names = [];
      let hasDefault = false;
      const named = clause.match(/\{([\s\S]*?)\}/);
      if (named) {
        for (const part of named[1].split(',')) {
          const id = part.trim().split(/\s+as\s+/).pop()?.trim();
          if (id) names.push(id);
        }
      }
      if (/^\s*[A-Za-z_$][\w$]*\s*(,|$)/.test(clause.replace(/\{[\s\S]*?\}/, ''))) hasDefault = true;
      stubs.push({
        name: `${stubName}.tsx`,
        body: [
          '// 読者側のモジュールのスタブ（check:examples が生成）。',
          hasDefault ? 'export default null as any;' : '',
          ...names.map((n) => `export const ${n}: any = null;`),
          'export {};',
          '',
        ]
          .filter(Boolean)
          .join('\n'),
      });
      return `${head}${clause}${mid}${quote}./${stubName}${quote}`;
    },
  );
  return { rewritten, stubs };
}

const written = checked.map((b, n) => {
  const base = slug(b, n);
  const { rewritten, stubs } = stubRelativeImports(b.code, base);
  for (const s of stubs) fs.writeFileSync(path.join(OUT_DIR, s.name), s.body);
  const name = `${base}.tsx`;
  fs.writeFileSync(path.join(OUT_DIR, name), `${rewritten}\nexport {};\n`);
  return { ...b, name };
});

fs.writeFileSync(
  path.join(OUT_DIR, 'shims.d.ts'),
  [
    '// コード例に出てくる副作用 import（CSS・フォント）を型として通すためだけの宣言。',
    '// これらの経路が実在するかは check:readme（T37 の #207 分）が別に見ている。',
    'declare module "*.css";',
    'declare module "@fontsource/*";',
    'declare module "wimui/icons";',
    '',
    '// **読者側の記号**。`<App />` は「あなたのアプリのルート」、`i18n` は「あなたが',
    '// 使っている i18n インスタンス」であって、wimui が提供するものではない。',
    '// ここで宣言しておかないと、例を成立させるために周りを捏造するはめになる。',
    '// wimui はこの名前を export していないので、綴りの誤りを見逃す心配はない。',
    'declare const App: React.ComponentType;',
    'declare const i18n: { on(event: string, cb: (lng: string) => void): void };',
    '',
  ].join('\n'),
);

// ルートの tsconfig を **extends で** 継承する。`paths` / `baseUrl` は宣言元の
// 設定ファイルからの相対で解決されるので、コピーして基準をずらすより確実
// （手で JSONC を剥がして写す実装は、`paths` のキーで壊れた）。
fs.writeFileSync(
  path.join(OUT_DIR, 'tsconfig.json'),
  JSON.stringify(
    {
      extends: path.relative(OUT_DIR, 'tsconfig.json').replace(/\\/g, '/'),
      compilerOptions: {
        noEmit: true,
        // 例は「使い方を見せる」ものなので、未使用の import があって当然
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
      // リポジトリ自身の宣言ファイルも読む。`include` を上書きすると
      // `src/svg.d.ts`（`*.svg?react`）と `src/assets.d.ts` が外れ、`wimui` から
      // アイコンを import した瞬間に **検査対象と無関係な赤が 70 行**出る。
      include: [
        './*.tsx',
        './shims.d.ts',
        path.relative(OUT_DIR, 'src/svg.d.ts').replace(/\\/g, '/'),
        path.relative(OUT_DIR, 'src/assets.d.ts').replace(/\\/g, '/'),
      ],
    },
    null,
    2,
  ),
);

// --- 型検査 ---------------------------------------------------------------
let diagnostics = '';
let failed = false;
try {
  execFileSync(
    process.execPath,
    [path.join('node_modules', 'typescript', 'bin', 'tsc'), '-p', path.join(OUT_DIR, 'tsconfig.json')],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
  );
} catch (e) {
  failed = true;
  diagnostics = `${e.stdout ?? ''}${e.stderr ?? ''}`;
}

if (failed) {
  // tsc の行番号を、元のドキュメントの行番号へ戻す。
  const byName = new Map(written.map((w) => [w.name, w]));
  const mapped = diagnostics
    .split(/\r?\n/)
    .filter((l) => l.trim())
    .map((line) => {
      const m = line.match(/^(?:.*[/\\])?([^/\\(]+\.tsx)\((\d+),(\d+)\)(.*)$/);
      if (!m) return `    ${line}`;
      const w = byName.get(m[1]);
      if (!w) return `    ${line}`;
      return `  ${w.file}:${w.startLine + Number(m[2]) - 1}${m[4]}`;
    });
  console.log('\n[FAIL] コード例がコンパイルできません:');
  for (const l of mapped) console.log(l);
  console.log(`\n  ドキュメントのコード例は「この API で書ける」という主張です。`);
  console.log(`  API を変えたら例も直すこと。意図的に通らない書き方をしている例は`);
  console.log(`  フェンスの直前に <!-- code-example: skip — 理由 --> を置いてください。`);
  if (!keep) fs.rmSync(OUT_DIR, { recursive: true, force: true });
  process.exit(1);
}

for (const b of skippedMarked) {
  console.log(`  skip ${b.file}:${b.startLine} — ${b.skipReason}`);
}
if (!keep) fs.rmSync(OUT_DIR, { recursive: true, force: true });
console.log(`\n✓ ${checked.length} 個のコード例がコンパイルできました。`);
