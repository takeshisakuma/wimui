/**
 * stories/ 配下の TSX に含まれるハードコードされた英語 UI テキストを検出する。
 * （check-mdx-hardcoded.js の stories.tsx 版 — MDX しか検査されておらず
 *   Audit ストーリー等の生英文が翻訳から漏れていたため追加）
 *
 * 検出対象:
 *  1. テンプレートリテラル内のサフィックス: `${t("...")} — default` の「— default」部分
 *  2. テキスト系 prop の生文字列: label="Edit" / placeholder="What time..." など
 *  3. JSX の生テキスト子要素: >Searching for data...<
 *
 * 使い方:
 *   node scripts/check-stories-hardcoded.js [--all] [file...]
 *   デフォルトは stories/Audit のみ。--all で stories 全体。
 *   ファイルパスを渡した場合はそのファイルのみ（lint-staged 用）。
 */
import fs from 'fs';
import { globSync } from 'glob';

const argv = process.argv.slice(2);
const scanAll = argv.includes('--all');
const explicitFiles = argv.filter((a) => a !== '--all' && a.endsWith('.tsx') && !a.endsWith('.test.tsx'));
const pattern = scanAll ? 'stories/**/*.tsx' : 'stories/Audit/*.tsx';
const files = (
  explicitFiles.length > 0
    ? explicitFiles
    : globSync(pattern, { posix: true })
).filter((f) => !f.endsWith('.test.tsx') && fs.existsSync(f));

// 誤検出を避ける除外: URL / CSS 値 / トークン / メールアドレス例 / コード片
const IGNORE_VALUE = /^(https?:|var\(|#|\d|[A-Z_]+$|[a-z-]+$)|@[a-z]+\.|@example|@wim/;
const TEXT_PROPS = '(?:label|placeholder|title|description|content|alt|caption|message|header|helperText|emptyText|loadingText|text)';

const results = [];

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let ignoreBlock = false;
  lines.forEach((line, i) => {
    // 意図的な英語（固有名詞・トークン名・ブランド名・ファイル名等）の抑制マーカー:
    //   i18n-ignore（同一行） / i18n-ignore-next-line（直後の1行） /
    //   i18n-ignore-start ～ i18n-ignore-end（ブロック）
    if (line.includes('i18n-ignore-start')) { ignoreBlock = true; return; }
    if (line.includes('i18n-ignore-end')) { ignoreBlock = false; return; }
    if (ignoreBlock) return;
    if (line.includes('i18n-ignore')) return;
    if (i > 0 && lines[i - 1].includes('i18n-ignore-next-line')) return;
    if (/^\s*(\/\/|\/?\*)/.test(line)) return;

    // 1) テンプレートリテラル内の「} — suffix」
    const backtickStrings = line.match(/`[^`]*`/g) || [];
    for (const s of backtickStrings) {
      const m = s.match(/\}\s*(?:—|–|-)\s*([A-Za-z][A-Za-z .,&/()'-]*)/);
      if (m) results.push({ file, line: i + 1, kind: 'suffix', text: m[1].trim() });
    }

    // 2) テキスト系 prop の生文字列（2文字以上の英字を含む）
    const propRe = new RegExp(`\\b${TEXT_PROPS}="([^"]*[A-Za-z]{2,}[^"]*)"`, 'g');
    let pm;
    while ((pm = propRe.exec(line)) !== null) {
      const v = pm[1];
      if (!IGNORE_VALUE.test(v)) results.push({ file, line: i + 1, kind: 'prop', text: pm[0].slice(0, 80) });
    }

    // 3) JSX の生テキスト子要素（2語以上の英文のみ。{t(...)} は含まれない）
    const childRe = />([^<>{}`]*[A-Za-z]{2,}\s+[A-Za-z][^<>{}`]*)</g;
    let cm;
    while ((cm = childRe.exec(line)) !== null) {
      const v = cm[1].trim();
      if (v && !IGNORE_VALUE.test(v)) results.push({ file, line: i + 1, kind: 'child', text: v.slice(0, 80) });
    }
  });
}

const scope =
  explicitFiles.length > 0
    ? `${explicitFiles.length} staged file(s)`
    : pattern;
console.log(`--- Hardcoded UI text in ${scope} ---`);
for (const r of results) console.log(`${r.file}:${r.line} [${r.kind}] ${r.text}`);
console.log(`\ntotal: ${results.length}`);
process.exit(results.length > 0 ? 1 : 0);
