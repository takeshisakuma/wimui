// 公開 CSS 成果物を組み立てる。
//
// メインの Vite ライブラリビルドは cssCodeSplit=false のため、抽出される CSS は
// styles.css（コンポーネント専用）の 1 ファイルのみ。ここにデザイントークンを
// 前置し、必須 CSS を 1 本にまとめる。リセット/base は任意のまま分離する:
//   tokens.entry.scss + vite styles.css → dist/styles.css（必須）
//   src/styles/reset.entry.scss         → dist/reset.css （任意）
//
// 消費側:
//   import "wimui/styles.css";  // 必須（:root{--wim-*} + コンポーネント）
//   import "wimui/reset.css";   // 任意
//
// 実装メモ: SCSS の一部（base.scss）には過去の文字化けで U+FFFD が混入している。
// これは正当な UTF-8 だが Dart 実装の sass.compile(path) はファイルリーダーで拒否する。
// Vite と同様に「ファイルを JS 文字列として読み込んでから compileString へ渡す」
// カスタム importer を用いることで、この差異と将来の文字コード問題を回避する。
import * as sass from "sass";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

// @use "x" を実ファイルへ解決する（partial / 拡張子 / index を考慮）。
function resolveScss(target) {
  const dir = path.dirname(target);
  const base = path.basename(target);
  const candidates = [
    target,
    `${target}.scss`,
    `${target}.sass`,
    path.join(dir, `_${base}.scss`),
    path.join(dir, `_${base}.sass`),
    path.join(target, "_index.scss"),
    path.join(target, "index.scss"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}

// 依存を Node（utf8 文字列）で読み込む importer。
// エントリの url を渡すと Sass が暗黙のファイルシステム importer を追加し、
// そちらが Dart のファイルリーダーで base.scss を読んで UTF-8 エラーになる。
// そのため url は渡さず、トップレベル（containingUrl 不在）の相対解決は
// エントリのディレクトリを基準にする。
function makeNodeStringImporter(entryDir) {
  return {
    canonicalize(url, context) {
      const baseDir = context.containingUrl
        ? path.dirname(fileURLToPath(context.containingUrl))
        : entryDir;
      const resolved = resolveScss(path.resolve(baseDir, url));
      return resolved ? pathToFileURL(resolved) : null;
    },
    load(canonicalUrl) {
      const filePath = fileURLToPath(canonicalUrl);
      return {
        contents: fs.readFileSync(filePath, "utf8"),
        syntax: filePath.endsWith(".sass") ? "indented" : "scss",
      };
    },
  };
}

function compileEntry(srcRel) {
  const srcPath = path.join(root, srcRel);
  const { css } = sass.compileString(fs.readFileSync(srcPath, "utf8"), {
    importers: [makeNodeStringImporter(path.dirname(srcPath))],
    style: "compressed",
  });
  return css;
}

function writeCss(outName, css) {
  const outPath = path.join(distDir, outName);
  fs.writeFileSync(outPath, css, "utf8");
  const kb = (Buffer.byteLength(css, "utf8") / 1024).toFixed(1);
  console.log(`[build-style-entries] wrote dist/${outName} (${kb} kB)`);
}

if (!fs.existsSync(distDir)) {
  console.error(
    "[build-style-entries] dist/ が存在しません。先に vite build を実行してください。",
  );
  process.exit(1);
}

const stylesPath = path.join(distDir, "styles.css");
if (!fs.existsSync(stylesPath)) {
  console.error(
    "[build-style-entries] dist/styles.css がありません。vite build の CSS 抽出を確認してください。",
  );
  process.exit(1);
}

const tokensCss = compileEntry("src/styles/tokens.entry.scss");
const componentCss = fs.readFileSync(stylesPath, "utf8");
writeCss("styles.css", `${tokensCss}\n${componentCss}`);

const resetCss = compileEntry("src/styles/reset.entry.scss");
writeCss("reset.css", resetCss);

// 旧分割成果物が残っていれば削除（exports から廃止済み）
const legacyTokens = path.join(distDir, "tokens.css");
if (fs.existsSync(legacyTokens)) {
  fs.unlinkSync(legacyTokens);
  console.log("[build-style-entries] removed dist/tokens.css (merged into styles.css)");
}

console.log("[build-style-entries] done");
