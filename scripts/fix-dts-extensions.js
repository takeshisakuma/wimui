// 型の .d.ts の相対 import に、拡張子を補う（#1188）。
//
// パッケージは "type": "module" なので、dist の .d.ts は ES モジュールとして読まれる。
// `moduleResolution: "node16" / "nodenext"` の TypeScript は、ES モジュールの相対 import に
// 拡張子を求める。vite-plugin-dts はソースの拡張子なしの書き方（`export * from './form'`）を
// そのまま写すので、その設定の利用者からは、ルートの export のほとんどが見えなくなっていた
// （864 個のうち 844 個。残りは any になる）。バンドラー方式（`moduleResolution: "bundler"`）では
// 拡張子なしでも解決できるので、CI のどの検査にも映らなかった。
//
// 書き換えは `./x` → `./x.js`（x.d.ts が在る）/ `./x/index.js`（x/index.d.ts が在る）。
// `.js` 付きの書き方は、bundler でも node10 でも .d.ts へ引き直されるので、今の利用者は壊れない。
// 補う先が見つからない相対 import は、黙って残さずに落とす（残すと、その設定でだけ型が消える）。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// `from '…'` / `import '…'` / `import('…')` の、相対の指定子。
const specifierRE = /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(["'])(\.{1,2}\/[^"']*)\2/g;
const hasExtension = /\.(?:[cm]?js|json)$/;

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith(".d.ts") ? [p] : [];
  });

const svgComponentRE = /\.svg\?react$/;

// アイコンは、ビルドの時にだけ意味のある `./x.svg?react` を参照している。その型の宣言（src/svg.d.ts）は
// 配布物に入らないので、どの設定でも解決できず、アイコンの型が消えていた。コンパイル済みの x.js の隣に
// src/svg.d.ts と同じ形の .d.ts を置き、参照をそちらへ向ける。
export const SVG_COMPONENT_DTS = `import type { FC, SVGProps } from "react";
declare const SVG: FC<SVGProps<SVGSVGElement>>;
export default SVG;
`;

/** 指定子を、拡張子付きの形に直す。直せないときは null。 */
export function resolveSpecifier(fromFile, specifier, exists = fs.existsSync) {
  if (svgComponentRE.test(specifier)) {
    const bare = specifier.replace(svgComponentRE, "");
    return exists(`${path.resolve(path.dirname(fromFile), bare)}.js`) ? `${bare}.js` : null;
  }
  if (hasExtension.test(specifier)) return specifier;
  const base = path.resolve(path.dirname(fromFile), specifier);
  if (exists(`${base}.d.ts`)) return `${specifier}.js`;
  if (exists(path.join(base, "index.d.ts"))) return `${specifier.replace(/\/$/, "")}/index.js`;
  return null;
}

// コメントの中（JSDoc の説明に書いた `./Card/Card` など）は書き換えない。
const commentRE = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;

export function rewrite(fromFile, source, exists = fs.existsSync) {
  const unresolved = [];
  const svgTargets = [];
  const fixCode = (code) =>
    code.replace(specifierRE, (whole, lead, quote, specifier) => {
      const fixed = resolveSpecifier(fromFile, specifier, exists);
      if (fixed === null) {
        unresolved.push(specifier);
        return whole;
      }
      if (svgComponentRE.test(specifier)) svgTargets.push(path.resolve(path.dirname(fromFile), fixed.replace(/\.js$/, ".d.ts")));
      return `${lead}${quote}${fixed}${quote}`;
    });
  let out = "";
  let last = 0;
  for (const m of source.matchAll(commentRE)) {
    out += fixCode(source.slice(last, m.index)) + m[0];
    last = m.index + m[0].length;
  }
  out += fixCode(source.slice(last));
  return { out, unresolved, svgTargets };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const distDir = path.resolve(process.argv[2] ?? "./dist");
  const files = walk(distDir);
  let changed = 0;
  let rewritten = 0;
  const problems = [];
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    const { out, unresolved, svgTargets } = rewrite(file, source);
    for (const s of unresolved) problems.push(`${path.relative(distDir, file)}: ${s}`);
    for (const t of svgTargets) fs.writeFileSync(t, SVG_COMPONENT_DTS, "utf8");
    if (out !== source) {
      rewritten += out.split("\n").filter((l, i) => l !== source.split("\n")[i]).length;
      fs.writeFileSync(file, out, "utf8");
      changed++;
    }
  }
  if (problems.length) {
    console.error(`[fix-dts-extensions] 補う先が見つからない相対 import が ${problems.length} 件:`);
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
  console.log(`[fix-dts-extensions] ${files.length} 個の .d.ts のうち ${changed} 個を書き換えた（指定子 ${rewritten} 個）`);
}
