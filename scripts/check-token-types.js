/**
 * Token type consistency checker.
 *
 * SCSSの :root ブロックに定義された CSS カスタムプロパティと、
 * src/types/tokens.ts の TypeScript 型定義の整合性を検証します。
 *
 * 検出する問題:
 *   - [ERROR] TS型に存在するがSCSSに対応するトークンがない（phantom type）
 *   - [INFO]  SCSSに存在するがTS型に含まれていないトークン（意図的な非公開は正常）
 *
 * Usage: node scripts/check-token-types.js
 */

import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const tokensDir = path.join(rootDir, "src", "tokens");
const typesFile = path.join(rootDir, "src", "types", "tokens.ts");

// --- SCSS パーサー ---

/**
 * SCSS の :root { } ブロックから --{prefix}-KEY: の KEY を抽出する。
 * @mixin dark-theme は上書き定義のため対象外。
 */
function extractRootTokens(scssContent, prefix) {
  const lines = scssContent.split("\n");
  const tokens = [];
  let inRoot = false;
  const propRegex = new RegExp(`^\\s*--${prefix}-([\\w-]+)\\s*[:{]`);

  for (const line of lines) {
    // :root { の開始（ミックスインブロックは除外）
    if (/^:root\s*\{/.test(line)) {
      inRoot = true;
      continue;
    }
    // ブロック終了（先頭の } のみ）
    if (inRoot && /^\}/.test(line)) {
      break;
    }
    if (inRoot) {
      const match = line.match(propRegex);
      if (match) {
        tokens.push(match[1]);
      }
    }
  }

  return [...new Set(tokens)].sort();
}

// --- TS パーサー ---

/**
 * tokens.ts から指定した型名のユニオン値を抽出する。
 * export type TypeName = | "a" | "b" | ... ; の形式を想定。
 */
function extractTypeValues(tsContent, typeName) {
  // 型定義ブロックを取得（複数行に対応）
  const regex = new RegExp(
    `export type ${typeName}\\s*=([\\s\\S]*?);(?=\\s*(?:export|/\\*\\*))`
  );
  const match = tsContent.match(regex);
  if (!match) {
    console.error(`[WARN] Type "${typeName}" not found in tokens.ts`);
    return [];
  }

  const body = match[1];
  const values = [];
  const valueRegex = /"([^"]+)"/g;
  let m;
  while ((m = valueRegex.exec(body)) !== null) {
    values.push(m[1]);
  }
  return [...new Set(values)].sort();
}

// --- チェック実行 ---

const semanticColors = fs.readFileSync(
  path.join(tokensDir, "_semantic-colors.scss"),
  "utf-8"
);
const spacings = fs.readFileSync(
  path.join(tokensDir, "_spacings.scss"),
  "utf-8"
);
const effects = fs.readFileSync(
  path.join(tokensDir, "_effects.scss"),
  "utf-8"
);
const tsContent = fs.readFileSync(typesFile, "utf-8");

const checks = [
  {
    typeName: "WimColorKey",
    scssFile: "_semantic-colors.scss",
    scssTokens: extractRootTokens(semanticColors, "wim-color"),
    tsValues: extractTypeValues(tsContent, "WimColorKey"),
  },
  {
    typeName: "WimSpacingKey",
    scssFile: "_spacings.scss",
    scssTokens: extractRootTokens(spacings, "wim-spacing"),
    tsValues: extractTypeValues(tsContent, "WimSpacingKey"),
  },
  {
    typeName: "WimRadiusKey",
    scssFile: "_spacings.scss",
    scssTokens: extractRootTokens(spacings, "wim-radius"),
    tsValues: extractTypeValues(tsContent, "WimRadiusKey"),
  },
  {
    typeName: "WimShadowKey",
    scssFile: "_effects.scss",
    scssTokens: extractRootTokens(effects, "wim-shadow"),
    tsValues: extractTypeValues(tsContent, "WimShadowKey"),
  },
];

let hasError = false;

for (const { typeName, scssFile, scssTokens, tsValues } of checks) {
  // TS型にあるがSCSSに対応トークンがない → phantom type（エラー）
  const phantomTypes = tsValues.filter((v) => !scssTokens.includes(v));
  // SCSSにあるがTS型に含まれていない → 非公開トークン（情報のみ）
  const privateTokens = scssTokens.filter((v) => !tsValues.includes(v));

  if (phantomTypes.length > 0) {
    hasError = true;
    console.error(`\n[ERROR] ${typeName}: TS型に存在するがSCSS（${scssFile}）に対応トークンがない`);
    for (const t of phantomTypes) {
      console.error(`  - "${t}"  → --wim-${typeName.replace("WimColorKey", "color").replace("WimSpacingKey", "spacing").replace("WimRadiusKey", "radius").replace("WimShadowKey", "shadow")}-${t} が見つかりません`);
    }
  }

  if (privateTokens.length > 0) {
    console.log(`\n[INFO]  ${typeName}: SCSSにあるがTS型に含まれていない（非公開トークン）`);
    for (const t of privateTokens) {
      console.log(`  - "${t}"`);
    }
  }

  if (phantomTypes.length === 0) {
    const status = privateTokens.length > 0
      ? `${tsValues.length} 公開 / ${privateTokens.length} 非公開`
      : `${tsValues.length} トークン`;
    console.log(`[OK]    ${typeName}: ${status}`);
  }
}

if (hasError) {
  console.error(
    "\nsrc/types/tokens.ts を更新するか、対応する SCSS トークンを追加してください。"
  );
  process.exit(1);
} else {
  console.log("\n全トークン型定義と SCSS の整合性が確認できました。");
}
