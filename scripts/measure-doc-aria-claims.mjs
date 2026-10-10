#!/usr/bin/env node
/**
 * measure:doc-aria-claims — docs が名指しする ARIA 属性と role が、その部品の実装に在るかを洗う。
 *
 * **ガードではない（落とさない）。** 出るのは「読んで確かめる候補」で、機械では仕分けられない。
 * docs の a11y の文には、実装についての主張（「`aria-current` で現在地を示す」）と、利用者への
 * 助言（「`aria-label` を付けること」）が混ざっている。2026-10-10 の実測では、127 部品・357 件の
 * うち文字列で見つからないものが 41 件で、読むと 36 件は助言か複数形（aria-labels）だった。
 * 残りの 5 件が本物（Anchor / VirtualList / Kanban / ThoughtProcess / PromptInput）。
 *
 * 測り方: 英語のロケール（`public/locales/en/docs_*.json`）の `doc.<部品名>_*` の文言から
 * `aria-*` と `role="…"` を拾い、その部品のディレクトリから相対 import をたどった先までの
 * ソースに、同じ文字列（属性は camelCase も）が在るかを見る。
 *
 * 届かないもの: 外部ライブラリが付ける属性（`ext=[…]` に出す。floating-ui の `useRole` など）、
 * ja / pt にしか無い主張、キー操作の記述、どの MDX からも参照されていないキー（ページに出ない）。
 *
 * Usage: node scripts/measure-doc-aria-claims.mjs
 */
import fs from "node:fs";
import path from "node:path";

const flat = {};
const walk = (o, p) => {
  for (const k in o) {
    const v = o[k];
    if (typeof v === "string") flat[p + k] = v;
    else if (v && typeof v === "object") walk(v, p + k + ".");
  }
};
const dir = "public/locales/en";
for (const f of fs.readdirSync(dir).filter((f) => /^docs_/.test(f)))
  walk(JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")), "");

// 部品名 → ディレクトリ
const comps = new Map();
for (const cat of fs.readdirSync("src/components")) {
  const cd = path.join("src/components", cat);
  if (!fs.statSync(cd).isDirectory()) continue;
  for (const n of fs.readdirSync(cd)) {
    const d = path.join(cd, n);
    if (fs.statSync(d).isDirectory() && /^[A-Z]/.test(n)) comps.set(n.toLowerCase(), { name: n, dir: d });
  }
}

const isSrc = (f) => /\.(tsx?|js)$/.test(f) && !/\.(test|stories)\./.test(f);
const resolve = (from, spec) => {
  let base;
  if (spec.startsWith("@/")) base = path.join("src", spec.slice(2));
  else if (spec.startsWith(".")) base = path.join(path.dirname(from), spec);
  else return null;
  for (const c of [base, base + ".tsx", base + ".ts", path.join(base, "index.ts"), path.join(base, "index.tsx")])
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  return null;
};
function closure(dirPath) {
  const seen = new Set();
  const ext = new Set();
  const stack = fs.readdirSync(dirPath, { recursive: true }).map((f) => path.join(dirPath, f)).filter((f) => isSrc(f) && fs.statSync(f).isFile());
  let text = "";
  while (stack.length) {
    const f = stack.pop();
    if (seen.has(f)) continue;
    seen.add(f);
    const s = fs.readFileSync(f, "utf8");
    text += "\n" + s;
    for (const m of s.matchAll(/from\s+["']([^"']+)["']/g)) {
      const r = resolve(f, m[1]);
      if (r) stack.push(r);
      else if (!m[1].startsWith(".") && !m[1].startsWith("@/")) ext.add(m[1]);
    }
  }
  return { text, ext: [...ext].filter((e) => !/^react($|\/)|^clsx$|i18n/.test(e)), files: seen.size };
}

const names = [...comps.keys()].sort((a, b) => b.length - a.length);
const claims = new Map(); // comp → Map(claim → [keys])
for (const [key, val] of Object.entries(flat)) {
  const m = key.match(/^doc\.([a-z0-9]+)_/);
  if (!m) continue;
  const base = key.slice(4);
  const hit = names.find((n) => base.startsWith(n + "_"));
  if (!hit) continue;
  const found = new Set();
  for (const a of val.matchAll(/\baria-[a-z]+\b/g)) found.add(a[0]);
  for (const r of val.matchAll(/role=["']?([a-z]+)["']?/g)) found.add(`role:${r[1]}`);
  if (!found.size) continue;
  const cm = claims.get(hit) ?? new Map();
  for (const c of found) (cm.get(c) ?? cm.set(c, []).get(c)).push(key);
  claims.set(hit, cm);
}

let total = 0, miss = 0, comp = 0;
const out = [];
for (const [n, cm] of claims) {
  const { name, dir: d } = comps.get(n);
  const { text, ext, files } = closure(d);
  comp++;
  for (const [c, keys] of cm) {
    total++;
    let ok;
    if (c.startsWith("role:")) {
      const r = c.slice(5);
      ok = new RegExp(`role[=:]\\s*\\{?\\s*["'\`]${r}["'\`]|["'\`]${r}["'\`]`).test(text);
    } else {
      const camel = c.replace(/-([a-z])/g, (_, x) => x.toUpperCase());
      ok = text.includes(c) || text.includes(camel);
    }
    if (!ok) {
      miss++;
      out.push(`${name.padEnd(20)} ${c.padEnd(22)} ext=[${ext.join(",")}] files=${files}\n    ${keys.slice(0, 2).map((k) => k + " = " + flat[k].slice(0, 230)).join("\n    ")}`);
    }
  }
}
console.log(`部品 ${comp} / 主張 ${total} / 実装の閉包に見つからない ${miss}`);
console.log(out.join("\n"));

// 走査が空振りしていないか。ロケールの形か部品の置き場が変わると、ここが 0 に近づく
// （「候補なし」が「読めていない」の意味になる）。
if (comp < 50 || total < 100) {
  console.error(`\n✗ 拾えた主張が少なすぎます（部品 ${comp}・主張 ${total}）。走査が成立していません。`);
  process.exit(1);
}
