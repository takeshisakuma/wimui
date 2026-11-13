/**
 * T371: エージェントが書いた画面（1 つの作業ディレクトリ）を、決定的な物差しで採点する。
 *
 * 見るもの（どれも同じ入力なら同じ数になる）:
 *   - tsc のエラー数と、その内訳（存在しない export / 存在しない module / prop の型違い）
 *   - 存在しない `--wim-*` トークン（入れた版の dist/styles.css に宣言が無いもの）
 *   - CSS の契約（`wimui/styles.css` を import しているか）
 *   - 依頼が期待する部品を、wimui から import しているか（候補の組ごとに当たり / 外れ）
 *   - `check:slop` の機械層（`--probe` で書かれたファイルだけを見る）
 *
 * 見た目の採点（judge:slop）はここには入れない。API キーが要り、決定的でもないため（T372）。
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

const listSources = (dir) => {
  const out = [];
  const walk = (d) => {
    if (!fs.existsSync(d)) return;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx?|css)$/.test(e.name)) out.push(p);
    }
  };
  walk(path.join(dir, "src"));
  return out;
};

// tsc の 1 行: `src/App.tsx(12,5): error TS2322: ...`
const TSC_LINE = /^(.+?)\((\d+),(\d+)\): error (TS\d+): (.*)$/;
const MISSING_EXPORT = new Set(["TS2305", "TS2724", "TS2614"]);
const MISSING_MODULE = new Set(["TS2307"]);
const PROP_ERRORS = new Set(["TS2322", "TS2353", "TS2769", "TS2741", "TS2559", "TS2739", "TS2740"]);

const runTsc = (dir) => {
  const tsc = path.join(dir, "node_modules", "typescript", "bin", "tsc");
  let out = "";
  try {
    out = execFileSync("node", [tsc, "-p", dir, "--noEmit", "--pretty", "false"], { encoding: "utf8" });
  } catch (e) {
    out = (e.stdout ?? "") + (e.stderr ?? "");
  }
  const errors = out
    .split(/\r?\n/)
    .map((l) => TSC_LINE.exec(l))
    .filter(Boolean)
    .map((m) => ({ file: m[1], line: Number(m[2]), code: m[4], message: m[5] }));
  return {
    total: errors.length,
    missingExport: errors.filter((e) => MISSING_EXPORT.has(e.code)).length,
    missingModule: errors.filter((e) => MISSING_MODULE.has(e.code)).length,
    propErrors: errors.filter((e) => PROP_ERRORS.has(e.code)).length,
    errors,
  };
};

const definedTokens = (dir) => {
  const css = fs.readFileSync(path.join(dir, "node_modules", "wimui", "dist", "styles.css"), "utf8");
  return new Set([...css.matchAll(/(--wim-[\w-]+)\s*:/g)].map((m) => m[1]));
};

const WIMUI_IMPORT = /import\s+(?:type\s+)?\{([^}]*)\}\s*from\s*["'](wimui(?:\/[\w/-]+)?)["']/g;

const runSlop = (files) => {
  const tsx = files.filter((f) => f.endsWith(".tsx"));
  if (tsx.length === 0) return { hits: 0, rules: [] };
  let out = "";
  try {
    out = execFileSync("node", [path.join(REPO, "scripts", "check-slop.js"), "--probe", ...tsx], {
      encoding: "utf8",
      cwd: REPO,
    });
  } catch (e) {
    out = (e.stdout ?? "") + (e.stderr ?? "");
  }
  // `[FAIL] <規則>:` の見出しの下に、`  <path>:<line>: <行>` が当たった数だけ並ぶ
  const rules = [];
  let current = null;
  for (const line of out.split(/\r?\n/)) {
    const head = /^\[(FAIL|WARN)\] (.+?):?$/.exec(line);
    if (head) {
      current = { level: head[1], rule: head[2], hits: 0 };
      rules.push(current);
    } else if (current && /^ {2}\S.*:\d+: /.test(line)) {
      current.hits++;
    }
  }
  return { hits: rules.reduce((n, r) => n + r.hits, 0), rules };
};

export function scoreDir(dir, task) {
  const files = listSources(dir);
  const sources = files.map((f) => fs.readFileSync(f, "utf8"));
  const all = sources.join("\n");

  const imported = new Set();
  for (const m of all.matchAll(WIMUI_IMPORT)) {
    for (const name of m[1].split(",")) {
      const n = name.trim().replace(/^type\s+/, "").split(/\s+as\s+/)[0].trim();
      if (n) imported.add(n);
    }
  }

  const defined = definedTokens(dir);
  const used = new Set([...all.matchAll(/--wim-[\w-]+/g)].map((m) => m[0]));
  const unknownTokens = [...used].filter((t) => !defined.has(t)).sort();

  const expectHits = task.expect.map((group) => group.some((name) => imported.has(name)));

  // 部品とトークンで書けるのに、素で書いたもの（2026-11-13 の試走で、llms.txt の無い腕だけが
  // `<h1 style={{ fontSize: "1.5rem" }}>` と `padding: 16` を書いた。tsc は 0 件で、ほかの物差しでは差が出なかった）
  //   - style の中の直書きの値: 数・px / rem / em・色（#hex / rgb / hsl）。`var(--wim-…)` と 0 / 100% は数えない
  //   - 素の見出し（h1〜h6）: Title がある
  const styleBlocks = [...all.matchAll(/style=\{\{([\s\S]*?)\}\}/g)].map((m) => m[1]);
  const hardcodedStyles = styleBlocks
    .flatMap((b) => [...b.matchAll(/:\s*("[^"]*"|'[^']*'|-?\d+(?:\.\d+)?)/g)].map((m) => m[1]))
    .filter((v) => !/var\(--wim-/.test(v))
    .filter((v) => /^-?\d*\.?\d+$/.test(v) ? Number(v) !== 0 : /\d(?:\.\d+)?(px|rem|em)\b|#[0-9a-f]{3,8}\b|\b(rgb|hsl)a?\(/i.test(v)).length;
  const rawHeadings = [...all.matchAll(/<h[1-6][\s>]/g)].length;

  return {
    files: files.map((f) => path.relative(dir, f).split(path.sep).join("/")),
    lines: all.split("\n").length,
    tsc: runTsc(dir),
    unknownTokens,
    cssContract: /["']wimui\/styles\.css["']/.test(all),
    imported: [...imported].sort(),
    expect: { hit: expectHits.filter(Boolean).length, of: expectHits.length },
    hardcodedStyles,
    rawHeadings,
    slop: runSlop(files),
  };
}
