#!/usr/bin/env node
/**
 * CSS Modules に無いクラスを参照していないかを見る。
 *
 * `styles.foo` は、`.module.scss` に `.foo` が無ければ `undefined` になる。
 * `classNames(...)` も `clsx(...)` も `undefined` を黙って落とすので、
 * **意図した装いが一度も当たらないまま出荷される**。型検査は通る
 * （CSS Modules の型は `Record<string, string>`）、lint も鳴らない、
 * VRT はその「装いが当たっていない絵」を正として撮る。
 *
 * 実測（2026-08-10・T121）: `JsonViewer` が `localStyles.editable` を参照して
 * いたが `json-viewer.module.scss` に `.editable` は無く、値が編集できることを
 * 示す装いが出荷以来一度も当たっていなかった。T117 のタップ領域を調べていて
 * 偶然見つけたもので、**誰も見ていない類の欠陥**。
 *
 * T120（`color` に渡した値が色にならない）と同じ族。渡した値が何にも解決せず、
 * エラーも警告も出ない。
 *
 * **クラス名は Vite に聞く。自分で SCSS を読まない。**
 * 最初は SCSS を手で解析したが、3 通りの取りこぼしを立て続けに出した:
 *   - `#{$name}` の `{` をブロックの始まりと数え、`&.#{$name} .bar` が `&.#` で切れた
 *     （intents を回している 2 ファイルでクラスを丸ごと落とし、`ScrollProgress` の
 *     `.success` などを「無い」と報告するところだった）
 *   - `.item { &Header { … } }` の親セレクタ連結を知らず、`BentoGrid` の 6 件を
 *     偽陽性として出しかけた
 *   - `@keyframes enter` も CSS Modules の書き出しに載ることを見落としていた
 * どれも「自分の解析が正しい」という前提が誤りだった。**書き出す当人に聞けば
 * この種の食い違いは原理的に出ない。**
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/** 走査対象。src だけでなく stories も見る（ストーリー側にも CSS Modules がある）。 */
const SCAN_DIRS = ['src', 'stories'];

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules') continue;
      walk(p, out);
    } else if (/\.tsx?$/.test(e.name) && !/\.d\.ts$/.test(e.name)) {
      out.push(p);
    }
  }
  return out;
};

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

/** `.module.scss` ごとに、Vite が実際に書き出すキーの集合。 */
const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const exportsOf = new Map();
const loadKeys = async (scssPath) => {
  const key = rel(scssPath);
  if (!exportsOf.has(key)) {
    const mod = await server.ssrLoadModule(`/${key}`);
    exportsOf.set(key, new Set(Object.keys(mod.default || {})));
  }
  return exportsOf.get(key);
};

const findings = [];
let checkedRefs = 0;
let dynamicRefs = 0;

for (const dir of SCAN_DIRS) {
  const base = path.join(ROOT, dir);
  if (!fs.existsSync(base)) continue;

  for (const file of walk(base)) {
    const raw = fs.readFileSync(file, 'utf8');
    // コメントは伏せる。**説明文に書いた `styles.default` を検出して自分で自分を鳴らした。**
    // 行番号を保つため、長さと改行はそのままに空白へ置き換える。
    const src = raw
      .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
      .replace(/(^|[^:])\/\/[^\n]*/g, (m, p) => p + ' '.repeat(m.length - p.length));
    const imports = [...raw.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+\.module\.scss)["']/g)];
    if (!imports.length) continue;

    for (const [, binding, importPath] of imports) {
      const scssPath = path.resolve(path.dirname(file), importPath);
      if (!fs.existsSync(scssPath)) {
        findings.push({ file, line: 0, ref: importPath, why: 'import 先の .module.scss が無い' });
        continue;
      }
      const known = await loadKeys(scssPath);
      const lineOf = (i) => src.slice(0, i).split('\n').length;

      // **何も書き出していないモジュールは、変数の添字も含めて全部が死んでいる。**
      // 中身の無い規則（`.root { // Placeholder }`）だけの SCSS は 1 つもクラスを
      // 書き出さないので、`styles[variant]` のような動的参照も必ず undefined になる。
      // これを見ていなかったせいで `EmptyState` の `variant`（唯一の効き所が
      // `styles[variant]`）が何もしていないことを、偶然でしか見つけられなかった。
      if (known.size === 0) {
        const m = new RegExp(`\\b${binding}\\s*[.[]`).exec(src);
        findings.push({
          file,
          line: m ? lineOf(m.index) : 0,
          ref: `${binding}（モジュール全体）`,
          why: `${path.basename(scssPath)} はクラスを 1 つも書き出していない（中身の無い規則だけ）`,
        });
        continue;
      }

      // 添字アクセスは変数のことが多い（`styles[size]`）。**リテラルだけを見る。**
      // 変数の中身は静的には決まらないので、数だけ出して黙って通す。
      for (const m of src.matchAll(new RegExp(`\\b${binding}\\s*\\[([^\\]]+)\\]`, 'g'))) {
        const literal = /^["'`]([\w-]+)["'`]$/.exec(m[1].trim());
        if (!literal) {
          dynamicRefs += 1;
          continue;
        }
        checkedRefs += 1;
        if (!known.has(literal[1])) {
          findings.push({
            file,
            line: lineOf(m.index),
            ref: `${binding}["${literal[1]}"]`,
            why: `${path.basename(scssPath)} は ${literal[1]} を書き出していない`,
          });
        }
      }

      for (const m of src.matchAll(new RegExp(`\\b${binding}\\s*\\??\\.(\\w+)`, 'g'))) {
        checkedRefs += 1;
        if (!known.has(m[1])) {
          findings.push({
            file,
            line: lineOf(m.index),
            ref: `${binding}.${m[1]}`,
            why: `${path.basename(scssPath)} は ${m[1]} を書き出していない`,
          });
        }
      }
    }
  }
}

await server.close();

// **テストファイルは別扱い。** vitest は `classNameStrategy: "non-scoped"` で
// CSS Modules をプロキシしており、`styles.danger` は SCSS を見ずに常に文字列
// `"danger"` を返す。だからテストの中の参照は「装いが当たらない」欠陥ではなく、
// **そのモジュールが持たないクラス名を借りて書いている**という綴りの問題。
// 通っている以上、その文字列のクラス自体は（別の出どころから）付いている。
const isTest = (f) => /\.test\.tsx?$/.test(f);
const inCode = findings.filter((f) => !isTest(f.file));
const inTests = findings.filter((f) => isTest(f.file));

const show = (list) => {
  for (const f of list) {
    console.error(`  ${rel(f.file)}:${f.line}  ${f.ref}`);
    console.error(`      ${f.why}`);
  }
};

if (inCode.length) {
  console.error(`\n解決しないクラス参照が ${inCode.length} 件（実装）。\n`);
  console.error('渡した名前を .module.scss が書き出していないので undefined になり、');
  console.error('classNames が黙って落とす。型検査も lint も鳴らず、');
  console.error('VRT は装いが当たっていない絵を正として撮る。\n');
  show(inCode);
}

if (inTests.length) {
  console.error(`\n参考: テストの中に ${inTests.length} 件（こちらは欠陥ではない）。\n`);
  console.error('vitest は CSS Modules をプロキシするので styles.x は常に "x" を返す。');
  console.error('そのモジュールが持たないクラス名を借りて書いているだけで、主張自体は成立している。\n');
  show(inTests);
}

console.error(
  `\n（.module.scss を読む ${exportsOf.size} ファイル・参照 ${checkedRefs} 件を検査。` +
    `変数による添字アクセス ${dynamicRefs} 件は静的に決まらないので対象外）\n`,
);

if (inCode.length) process.exit(1);

console.log(`✓ 実装側に解決しないクラス参照は無い（参照 ${checkedRefs} 件を検査）`);
