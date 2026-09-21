#!/usr/bin/env node
/**
 * Guard: `README.md` と `README.ja.md`（対訳）の構造がずれていないか（2026-09-21）。
 *
 * 2 つは写しの関係にある。写しは必ず腐る ── このリポジトリでは `GEMINI.md` を廃止した
 * 理由と同じだが、README は公開物として英語と日本語の両方が要るので、写しを消せない。
 * だから**ずれたら鳴る**ようにする。
 *
 * 入れた日の実測で、ずれが 1 件あった: `## Workflow` のコードブロックが日本語版だけ
 * 囲み（```）を失い、4 行の git コマンドが 1 段落につながって表示されていた。
 * 見出し 48 個・表 8 個は一致していたので、目で見比べても気付きにくい形。
 *
 * 見るもの（訳せば必ず変わる地の文は見ない）:
 *   1. 見出しの数と階層の並び（`##` / `###` の順）
 *   2. コードブロックの数・言語・中身。中身は**コメントと JSX の表示文字列を除いて**比べる
 *      （`// required` ↔ `// 必須`、`<Button>Save</Button>` ↔ `<Button>保存</Button>` は訳）
 *   3. 表の数と、各表の行数・列数
 *   4. リンク先の集合（`README.md` ↔ `README.ja.md` の相互リンクは同一視する）
 *
 * Usage: node scripts/check-readme-parity.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** コードの中身から、訳しても変わらない骨格だけを残す。 */
export function codeSkeleton(body) {
  return body
    .replace(/\/\*[\s\S]*?\*\//g, "") // /* */
    .replace(/<!--[\s\S]*?-->/g, "") // <!-- -->
    .split("\n")
    .map((l) =>
      l
        .replace(/(^|\s)(\/\/|#(?![!{])).*$/, "") // 行末コメント（`#!` と `#{` は残す）
        .replace(/>([^<>{}]*)</g, "><") // JSX の表示文字列
        .trimEnd(),
    )
    .filter((l) => l.trim() !== "")
    .join("\n");
}

/** 比べる形を取り出す。 */
export function shape(text) {
  const lines = text.split(/\r?\n/);
  const out = { headings: [], fences: [], tables: [], links: [] };
  let fence = null;
  let table = null;
  lines.forEach((l, i) => {
    if (/^```/.test(l)) {
      if (fence) {
        out.fences.push({ ...fence, body: fence.body.join("\n") });
        fence = null;
      } else fence = { lang: l.slice(3).trim(), body: [], line: i + 1 };
      return;
    }
    if (fence) {
      fence.body.push(l);
      return;
    }
    const h = l.match(/^(#{1,6}) /);
    if (h) out.headings.push({ level: h[1].length, line: i + 1, text: l });
    if (/^\|/.test(l)) {
      if (!table) {
        table = { line: i + 1, rows: 0, cols: l.split("\\|").join("").split("|").length };
        out.tables.push(table);
      }
      table.rows++;
    } else table = null;
    for (const m of l.matchAll(/\]\(([^)\s]+)/g)) out.links.push(m[1].replace(/README(\.ja)?\.md/, "README"));
  });
  if (fence) out.fences.push({ ...fence, body: fence.body.join("\n"), unclosed: true });
  return out;
}

/** 2 つの形を比べて、ずれの一覧を返す。 */
export function compare(enText, jaText) {
  const en = shape(enText);
  const ja = shape(jaText);
  const bad = [];

  const lv = (s) => s.headings.map((h) => h.level);
  const n = Math.max(en.headings.length, ja.headings.length);
  for (let i = 0; i < n; i++) {
    const a = en.headings[i];
    const b = ja.headings[i];
    if (!a || !b || a.level !== b.level) {
      bad.push(
        `見出しの並びが ${i + 1} 個目でずれる（en: ${a ? `${a.line} 行 ${a.text}` : "無し"} / ja: ${b ? `${b.line} 行 ${b.text}` : "無し"}）。見出しの数 en ${lv(en).length} / ja ${lv(ja).length}`,
      );
      break;
    }
  }

  for (const [name, s] of [["README.md", en], ["README.ja.md", ja]]) {
    for (const f of s.fences) if (f.unclosed) bad.push(`${name}:${f.line} のコードブロックが閉じていない`);
  }
  const fn = Math.max(en.fences.length, ja.fences.length);
  for (let i = 0; i < fn; i++) {
    const a = en.fences[i];
    const b = ja.fences[i];
    if (!a || !b) {
      bad.push(
        `コードブロックの数が違う（en ${en.fences.length} / ja ${ja.fences.length}）。${i + 1} 個目から対応が取れない（en: ${a ? `${a.line} 行` : "無し"} / ja: ${b ? `${b.line} 行` : "無し"}）`,
      );
      break;
    }
    if (a.lang !== b.lang) bad.push(`コードブロックの言語が違う: en ${a.line} 行 \`${a.lang}\` / ja ${b.line} 行 \`${b.lang}\``);
    else if (codeSkeleton(a.body) !== codeSkeleton(b.body)) {
      bad.push(`コードブロックの中身が違う（コメントと表示文字列を除いても）: en ${a.line} 行 / ja ${b.line} 行`);
    }
  }

  const tn = Math.max(en.tables.length, ja.tables.length);
  for (let i = 0; i < tn; i++) {
    const a = en.tables[i];
    const b = ja.tables[i];
    if (!a || !b) {
      bad.push(`表の数が違う（en ${en.tables.length} / ja ${ja.tables.length}）`);
      break;
    }
    if (a.rows !== b.rows || a.cols !== b.cols) {
      bad.push(`表の形が違う: en ${a.line} 行（${a.rows} 行 × ${a.cols - 2} 列）/ ja ${b.line} 行（${b.rows} 行 × ${b.cols - 2} 列）`);
    }
  }

  const count = (xs) => xs.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());
  const ce = count(en.links);
  const cj = count(ja.links);
  for (const k of new Set([...ce.keys(), ...cj.keys()])) {
    if ((ce.get(k) || 0) !== (cj.get(k) || 0)) bad.push(`リンク先 \`${k}\` の数が違う（en ${ce.get(k) || 0} / ja ${cj.get(k) || 0}）`);
  }
  return bad;
}

function main() {
  const en = fs.readFileSync(path.join(ROOT, "README.md"), "utf8");
  const ja = fs.readFileSync(path.join(ROOT, "README.ja.md"), "utf8");
  const bad = compare(en, ja);
  if (bad.length) {
    console.error(`✗ README.md と README.ja.md の構造がずれている（${bad.length} 件）:`);
    for (const b of bad) console.error(`  - ${b}`);
    console.error("\n  片方だけ直したなら、もう片方にも同じ変更を入れること（地の文の訳は比べていない）。");
    process.exit(1);
  }
  const s = shape(en);
  console.log(
    `✓ README.md と README.ja.md の構造は一致（見出し ${s.headings.length} / コードブロック ${s.fences.length} / 表 ${s.tables.length} / リンク ${s.links.length}）。`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
