/**
 * 型の解決を、利用者の設定ごとに比べる（#1188）。
 *
 * パッケージは "type": "module" なので、dist の .d.ts は ES モジュールとして読まれる。
 * `moduleResolution: "node16" / "nodenext"` の TypeScript は、その相対 import に拡張子を求める。
 * 0.74.1 までの .d.ts は拡張子なしで書かれていて、その設定ではルートの export 864 個のうち 844 個が
 * 見えず、残りは any になっていた。バンドラー方式では見えるので、どの検査にも映らなかった。
 *
 * ここでは tarball を入れただけの consumer で、`exports` の型を持つ入口すべてを、
 * nodenext と bundler の 2 つの設定で開き、型検査器で export を数える。
 * 2 つの設定で「見える名前」と「any になる名前」が一致しなければ落とす。
 * 診断（tsc の出力）ではなく export を数えるのは、consumer に入れていない optional peer の
 * 型の欠落が、両方の設定に同じだけ出て、比べると消えるため。
 *
 * Usage（run.mjs から）: checkTypes(consumer, repoRoot) → boolean
 */
import { writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const MODES = [
  { name: "bundler", module: "ESNext", moduleResolution: "Bundler" },
  { name: "nodenext", module: "NodeNext", moduleResolution: "NodeNext" },
];

export function countExports(ts, consumer, entries, mode) {
  const file = join(consumer, `types-probe-${mode.name}.mts`);
  writeFileSync(file, entries.map((e, i) => `import * as m${i} from "${e}";\nexport { m${i} };\n`).join(""));
  const program = ts.createProgram([file], {
    module: ts.ModuleKind[mode.module],
    moduleResolution: ts.ModuleResolutionKind[mode.moduleResolution],
    strict: true,
    noEmit: true,
    skipLibCheck: true,
    jsx: ts.JsxEmit.ReactJSX,
    types: [],
  });
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(file);
  const result = new Map();
  for (const stmt of source.statements) {
    if (!ts.isImportDeclaration(stmt)) continue;
    const entry = stmt.moduleSpecifier.text;
    const moduleSymbol = checker.getSymbolAtLocation(stmt.moduleSpecifier);
    const names = new Set();
    const anys = new Set();
    if (moduleSymbol) {
      for (const sym of checker.getExportsOfModule(moduleSymbol)) {
        names.add(sym.name);
        const target = sym.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(sym) : sym;
        if (target.flags & ts.SymbolFlags.Value) {
          const type = checker.getTypeOfSymbolAtLocation(target, stmt);
          if (type.flags & ts.TypeFlags.Any) anys.add(sym.name);
        }
      }
    }
    result.set(entry, { resolved: !!moduleSymbol, names, anys });
  }
  return result;
}

export function checkTypes(consumer, repoRoot, { strictAny = false } = {}) {
  const require = createRequire(join(repoRoot, "package.json"));
  const ts = require("typescript");
  const pkg = JSON.parse(readFileSync(join(consumer, "node_modules", "wimui", "package.json"), "utf8"));
  const entries = Object.entries(pkg.exports)
    .filter(([, v]) => v && typeof v === "object" && v.types)
    .map(([k]) => (k === "." ? "wimui" : `wimui/${k.replace(/^\.\//, "")}`));

  console.log(`\n[smoke] === types (${entries.length} entries × ${MODES.map((m) => m.name).join(" / ")}) ===`);
  const [base, ...others] = MODES.map((m) => ({ mode: m, counts: countExports(ts, consumer, entries, m) }));
  let ok = true;
  for (const entry of entries) {
    let entryOk = true;
    const b = base.counts.get(entry);
    // 両方の設定で同じように壊れている形は、比べても拾えない（0.74.1 のアイコンは、配布物に無い
    // `*.svg?react` の宣言を参照していて、どちらの設定でも any だった）。値の export に any を許さない
    if (strictAny && b.anys.size) {
      ok = false;
      entryOk = false;
      console.log(`  FAIL ${entry}: ${base.mode.name} でも any になる値の export が ${b.anys.size} 個 (例: ${[...b.anys].slice(0, 5).join(", ")})`);
    }
    if (!b.resolved || b.names.size === 0) {
      ok = false;
      entryOk = false;
      console.log(`  FAIL ${entry}: ${base.mode.name} で解決できない、または export が 0 個`);
      continue;
    }
    for (const o of others) {
      const c = o.counts.get(entry);
      const missing = [...b.names].filter((n) => !c.names.has(n));
      const newAny = [...c.anys].filter((n) => !b.anys.has(n));
      if (!c.resolved || missing.length || newAny.length) {
        ok = false;
        entryOk = false;
        console.log(
          `  FAIL ${entry}: ${o.mode.name} で、${base.mode.name} に比べて見えない名前 ${missing.length} 個・any になる名前 ${newAny.length} 個` +
            ` (例: ${[...missing, ...newAny].slice(0, 5).join(", ") || "解決できない"})`,
        );
      }
    }
    if (entryOk) console.log(`  PASS ${entry}: ${b.names.size} 個（${MODES.map((m) => m.name).join(" / ")} で一致）`);
  }
  return ok;
}
