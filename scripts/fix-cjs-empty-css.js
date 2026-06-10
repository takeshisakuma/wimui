// rolldown (Vite 8) の CJS/UMD 出力バグのワークアラウンド。
// エントリモジュール直下の CSS import は出力時に `/* empty css */` コメントへ
// 置換されるが、式の連結に使われていたカンマ演算子が残るため
// `Object.defineProperty(...),/* empty css */;` のような構文エラーになる
// （dist/index.cjs で発生。ESM 出力は import 文ごと消えるため無害）。
// 該当パターンが存在しないファイルには何もしない。
import fs from "fs";
import path from "path";

const distDir = "./dist";
const danglingCommaRE = /,\s*((?:\/\*\s*empty css[^*]*\*\/\s*)+);/g;

const targets = fs
  .readdirSync(distDir)
  .filter((f) => f.endsWith(".cjs") || f === "wimui.umd.js");

let fixedCount = 0;
for (const file of targets) {
  const filePath = path.join(distDir, file);
  const source = fs.readFileSync(filePath, "utf8");
  const patched = source.replace(danglingCommaRE, ";$1");
  if (patched !== source) {
    fs.writeFileSync(filePath, patched, "utf8");
    console.log(`[fix-cjs-empty-css] patched: ${file}`);
    fixedCount++;
  }
}

console.log(
  fixedCount > 0
    ? `[fix-cjs-empty-css] ${fixedCount} file(s) patched`
    : "[fix-cjs-empty-css] no dangling css comments found (nothing to do)",
);
