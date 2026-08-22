#!/usr/bin/env node
/**
 * Guard: README が読者に約束していることが、実際の package と一致しているか（T37）。
 *
 * `llms.txt` の版落ちは「常に最新」という主張が破れていた例で、`check:llms` で
 * 塞いだ（T27）。**同種の主張は他にもある**。README は npm のパッケージページに
 * そのまま出るので、ここがずれていると**利用者は install の前に間違った情報を読む**。
 *
 * 見るもの:
 *
 *   1. **peer のバージョン範囲**。README の「Support matrix (peers)」表が挙げる
 *      範囲が `package.json` の `peerDependencies` と一致すること。
 *
 *   2. **optional peer の import 経路**。README の「Optional peerDependencies」表が
 *      挙げるサブパスが `package.json` の `exports` に実在すること。存在しない
 *      サブパスを案内していると、読者の import がそのまま失敗する。
 *
 *   3. **optional peer のパッケージ名**。表が挙げるパッケージが実際に
 *      `peerDependencies` にあること。
 *
 * **コード例のコンパイル可否は対象外**（別の仕組みで担保している）: `smoke:recipes`
 * が公開 tarball に対してレシピを esbuild で bundle し、`check:llms` が llms.txt の
 * 鮮度を見る。README の tsx 例まで通すには隔離環境が要り、スモークと重複する。
 *
 * **表を 1 行も読まなくても「通った」ように見える**のがこの手のガードの罠なので、
 * 読めた行数を必ず出力し、0 行なら失敗させる（実際に一度、セル分割を壊して
 * 「0 行だから問題なし」で緑になった）。
 *
 * Usage: node scripts/check-readme-claims.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const peers = pkg.peerDependencies ?? {};
const exportPaths = new Set(
  Object.keys(pkg.exports ?? {}).map((k) => (k === "." ? "." : k.replace(/^\.\//, ""))),
);

const problems = [];

/**
 * README のテーブル行をセル配列で返す。
 *
 * Markdown 表ではセル内の `|` がエスケープされる（`^3.25.0 \|\| ^4.0.0`）。
 * 素朴に split すると範囲が途中で切れるので、退避してから分割する。
 */
function tableRows(sectionHeading) {
  const start = readme.indexOf(sectionHeading);
  if (start < 0) return [];
  const SENTINEL = "␄";
  const rows = [];
  for (const line of readme.slice(start).split(/\r?\n/).slice(1)) {
    if (line.startsWith("##")) break;
    if (!line.startsWith("|")) continue;
    if (/^\|[\s-]+\|/.test(line)) continue;
    const cells = line
      .split("\\|")
      .join(SENTINEL)
      .split("|")
      .slice(1, -1)
      .map((c) => c.split(SENTINEL).join("|").trim());
    if (cells.length >= 2 && !/^Package$|^Component$/.test(cells[0])) rows.push(cells);
  }
  return rows;
}

const matrixRows = tableRows("## Support matrix (peers)");
const optionalRows = tableRows("## Optional peerDependencies");

// --- 1: Support matrix の peer 範囲 ---------------------------------------
for (const cells of matrixRows) {
  const rangeCell = (cells[2] ?? "").split("`").join("").trim();
  if (!rangeCell) continue;

  // 名前セルには `zod` (when using `wimui/rhf`) のように説明が混ざる。
  // `wimui` 自身とそのサブパスは peer ではないので除く。
  const names = [...cells[0].matchAll(/`([^`]+)`/g)]
    .map((m) => m[1])
    .filter((n) => n !== "wimui" && !n.startsWith("wimui/"));

  for (const name of names) {
    if (!(name in peers)) {
      problems.push(`Support matrix が挙げる \`${name}\` は peerDependencies に無い`);
      continue;
    }
    const actual = peers[name].replace(/\s+/g, " ").trim();
    const claimed = rangeCell.replace(/\s+/g, " ").trim();
    if (actual !== claimed) {
      problems.push(
        `\`${name}\` の範囲がずれている — README: "${claimed}" / package.json: "${actual}"`,
      );
    }
  }
}

// --- 2 & 3: Optional peerDependencies のサブパスとパッケージ ---------------
for (const cells of optionalRows) {
  for (const m of (cells[1] ?? "").matchAll(/`wimui(\/[^`]*)?`/g)) {
    const sub = (m[1] ?? "").replace(/^\//, "");
    if (!exportPaths.has(sub === "" ? "." : sub)) {
      problems.push(
        `README が案内する import \`wimui${sub ? "/" + sub : ""}\` は package.json の exports に無い`,
      );
    }
  }

  for (const m of (cells[2] ?? "").matchAll(/`([@a-z0-9][^`]*)`/g)) {
    const name = m[1].trim();
    if (/^[\^~>=<0-9]/.test(name)) continue; // バージョン範囲は名前ではない
    if (!(name in peers)) {
      problems.push(`Optional peer 表が挙げる \`${name}\` は peerDependencies に無い`);
    }
  }
}

// 読めた行が 0 なら、パーサが壊れていても「問題なし」に見えてしまう。
if (matrixRows.length === 0 || optionalRows.length === 0) {
  console.error(
    `✗ README の表を読めていない（Support matrix ${matrixRows.length} 行 / ` +
      `Optional peers ${optionalRows.length} 行）。見出しかセル分割が壊れている。`,
  );
  process.exit(1);
}

// T207: **公開 Storybook の `<meta name="description">` も同じ「主張」である。**
// npm のページに出る `package.json` の description と、検索結果・共有カードに出る
// メタの description が別々に育つと、**同じ製品が 2 つの説明を持つ**ことになる。
// 文言を 2 か所に持つ以上、機械で突き合わせる。
{
  const headPath = path.join(root, ".storybook", "manager-head.html");
  if (fs.existsSync(headPath)) {
    const head = fs.readFileSync(headPath, "utf8");
    const found = [...head.matchAll(/content=\s*"([^"]+)"/g)].map((m) => m[1]);
    const desc = String(pkg.description || "").trim();
    if (!desc) {
      console.error("✗ package.json に description が無い。");
      process.exit(1);
    }
    // description / og:description の両方がこの文言であること
    const needed = ["name=\"description\"", "property=\"og:description\""];
    for (const attr of needed) {
      const re = new RegExp(attr + "[\\s\\S]{0,200}?content=\\s*\"([^\"]+)\"");
      const m = head.match(re);
      if (!m) {
        problems.push(`manager-head.html に ${attr} が無い（検索結果と共有カードに説明が出ない）`);
      } else if (m[1].replace(/\s+/g, " ").trim() !== desc) {
        problems.push(
          `manager-head.html の ${attr} が package.json の description と違う` +
            `\n      head: ${m[1].slice(0, 60)}…\n      pkg : ${desc.slice(0, 60)}…`,
        );
      }
    }
    if (found.length === 0) {
      console.error("✗ manager-head.html から content 属性を 1 つも読めていない。読み取りが壊れている。");
      process.exit(1);
    }
  }
}

if (problems.length) {
  console.error("✗ README の主張が package.json と一致しない:");
  for (const p of [...new Set(problems)]) console.error(`  - ${p}`);
  console.error(
    "\n  README は npm のパッケージページにそのまま出る。install する前に読まれるので、\n" +
      "  ここがずれていると利用者は間違った情報から始めることになる。",
  );
  process.exit(1);
}

console.log(
  `✓ README の主張は package.json と一致` +
    `（Support matrix ${matrixRows.length} 行 / Optional peers ${optionalRows.length} 行を照合）。`,
);
