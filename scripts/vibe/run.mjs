#!/usr/bin/env node
/**
 * T371: 利用者の AI が wimui で書くコードを、版ごとに測る（vibe tests の縮小版）。
 *
 * 1 回の測定 = 依頼（tasks.json）× 腕（with / without）× 繰り返し。
 *   - with:    npm から入れた wimui そのまま（README・llms.txt・dist/llms/ が読める）
 *   - without: 同じ版から llms.txt / llms-full.txt / dist/llms/ を消したもの
 *              （「測り方が差を拾えるか」の対照。受け入れ条件）
 *
 * エージェントは `claude -p`。文脈を持ち込まないよう、ユーザー設定・MCP・skill を切り、
 * 作業ディレクトリはリポジトリの外（OS の一時ディレクトリ）に作る。使えるのは
 * Read / Write / Edit / Glob / Grep だけ（Bash と Web は無し＝ npm も検索もしない）。
 * `--bare` は API キーでしか認証できないため使わない（この環境は通常のログインで動かす）。
 *
 * 採点は score.mjs（決定的なものだけ）。結果は docs/measurements/vibe/<版>.json に追記する。
 *
 * Usage:
 *   node scripts/vibe/run.mjs [--pkg wimui@0.70.0 | --pkg ./wimui-0.71.0.tgz]
 *                             [--arm with|without|both] [--model sonnet]
 *                             [--tasks sign-in,orders-table] [--repeat 1] [--keep]
 *   node scripts/vibe/run.mjs --score-only <dir> --task <id>   # 採点だけ（エージェントを呼ばない）
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { scoreDir } from "./score.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const { tasks } = JSON.parse(fs.readFileSync(path.join(HERE, "tasks.json"), "utf8"));
const repoPkg = JSON.parse(fs.readFileSync(path.join(REPO, "package.json"), "utf8"));

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const flag = (name) => args.includes(`--${name}`);

if (flag("score-only")) {
  const task = tasks.find((t) => t.id === opt("task"));
  if (!task) throw new Error(`--task <id> が要る（${tasks.map((t) => t.id).join(" / ")}）`);
  console.log(JSON.stringify(scoreDir(path.resolve(opt("score-only")), task), null, 2));
  process.exit(0);
}

const pkgSpec = opt("pkg", `wimui@${repoPkg.version}`);
const arms = opt("arm", "both") === "both" ? ["with", "without"] : [opt("arm")];
const model = opt("model", "sonnet");
const repeat = Number(opt("repeat", "1"));
const only = opt("tasks") ? new Set(opt("tasks").split(",")) : null;
const selected = tasks.filter((t) => !only || only.has(t.id));

const TSCONFIG = {
  compilerOptions: {
    target: "ES2022",
    module: "ESNext",
    moduleResolution: "Bundler",
    jsx: "react-jsx",
    strict: true,
    noEmit: true,
    skipLibCheck: true,
    // CSS の import は型では見ない（CSS の契約は score.mjs が別に見る）
    noUncheckedSideEffectImports: false,
    types: [],
  },
  include: ["src"],
};

const PROMPT = (task) =>
  [
    "You are working in a React 19 + TypeScript project that already has the `wimui` component library installed (see node_modules/wimui).",
    "",
    `Task: ${task.prompt}`,
    "",
    "Write the screen as a default-exported component in src/App.tsx (you may add more files under src/).",
    "Use wimui components wherever they fit. Do not install packages and do not change package.json or tsconfig.json.",
    "When you are done, reply with one line listing the files you wrote.",
  ].join("\n");

/** 腕ごとに 1 回だけ npm install し、依頼ごとに丸ごと写す（junction だと Glob が辿らないことがある）。 */
function prepareBase(root, arm) {
  const base = path.join(root, `base-${arm}`);
  fs.mkdirSync(base, { recursive: true });
  fs.writeFileSync(
    path.join(base, "package.json"),
    JSON.stringify({ name: "vibe-app", private: true, type: "module" }, null, 2),
  );
  const spec = pkgSpec.startsWith(".") ? path.resolve(REPO, pkgSpec) : pkgSpec;
  // npm.cmd は shell 経由でしか起動できない（Windows）。引数を配列で渡すと非推奨の警告が出るので 1 本の文字列にする
  const installArgs = [
    "install",
    JSON.stringify(spec),
    "react@19",
    "react-dom@19",
    "@types/react@19",
    "@types/react-dom@19",
    `typescript@${repoPkg.devDependencies.typescript}`,
    "--no-audit",
    "--no-fund",
    "--loglevel=error",
  ];
  execFileSync(`npm ${installArgs.join(" ")}`, { cwd: base, stdio: "inherit", shell: true });
  fs.writeFileSync(path.join(base, "tsconfig.json"), JSON.stringify(TSCONFIG, null, 2));
  const dist = path.join(base, "node_modules", "wimui", "dist");
  if (arm === "without") {
    for (const p of ["llms.txt", "llms-full.txt", "llms"]) fs.rmSync(path.join(dist, p), { recursive: true, force: true });
  }
  const version = JSON.parse(fs.readFileSync(path.join(base, "node_modules", "wimui", "package.json"), "utf8")).version;
  return { base, version, hasLlms: fs.existsSync(path.join(dist, "llms.txt")) };
}

function runAgent(dir, task) {
  const res = spawnSync(
    "claude",
    [
      "-p",
      PROMPT(task),
      "--model",
      model,
      "--output-format",
      "stream-json",
      "--verbose",
      "--setting-sources",
      "project",
      "--strict-mcp-config",
      "--mcp-config",
      JSON.stringify({ mcpServers: {} }),
      "--disable-slash-commands",
      "--no-session-persistence",
      "--permission-mode",
      "acceptEdits",
      "--allowedTools",
      "Read,Write,Edit,Glob,Grep",
      "--disallowedTools",
      "Bash,WebFetch,WebSearch,Agent,Task",
    ],
    { cwd: dir, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, timeout: 15 * 60 * 1000 },
  );
  // stream-json は 1 行 1 イベント。最後の `result` が集計、`assistant` の tool_use が読んだもの
  const events = (res.stdout ?? "")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((l) => {
      try {
        return JSON.parse(l);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  const out = events.findLast((e) => e.type === "result") ?? {
    is_error: true,
    result: (res.stdout || res.stderr || String(res.error ?? "")).slice(0, 500),
  };
  const toolUses = events
    .filter((e) => e.type === "assistant")
    .flatMap((e) => e.message?.content ?? [])
    .filter((c) => c.type === "tool_use");
  const readPaths = toolUses
    .filter((c) => c.name === "Read")
    .map((c) => String(c.input?.file_path ?? "").split(path.sep).join("/"));
  const inWimui = (p) => p.includes("node_modules/wimui/");
  return {
    tools: Object.fromEntries(
      [...new Set(toolUses.map((c) => c.name))].map((n) => [n, toolUses.filter((c) => c.name === n).length]),
    ),
    reads: {
      llms: readPaths.some((p) => /node_modules\/wimui\/dist\/llms(-full)?\.txt$|node_modules\/wimui\/dist\/llms\//.test(p)),
      readme: readPaths.some((p) => /node_modules\/wimui\/README\.md$/i.test(p)),
      dts: readPaths.filter((p) => inWimui(p) && p.endsWith(".d.ts")).length,
      wimuiFiles: readPaths.filter(inWimui).map((p) => p.replace(/^.*node_modules\/wimui\//, "")),
    },
    isError: Boolean(out.is_error) || res.status !== 0,
    costUsd: out.total_cost_usd ?? null,
    durationMs: out.duration_ms ?? null,
    turns: out.num_turns ?? null,
    usage: out.usage
      ? {
          input: out.usage.input_tokens,
          output: out.usage.output_tokens,
          cacheRead: out.usage.cache_read_input_tokens,
          cacheWrite: out.usage.cache_creation_input_tokens,
        }
      : null,
    reply: typeof out.result === "string" ? out.result.slice(0, 300) : null,
  };
}

const root = fs.mkdtempSync(path.join(os.tmpdir(), "wimui-vibe-"));
console.log(`作業場: ${root}`);
const runs = [];
let version = null;

for (const arm of arms) {
  const prepared = prepareBase(root, arm);
  version ??= prepared.version;
  console.log(`\n[${arm}] wimui@${prepared.version}（llms.txt ${prepared.hasLlms ? "あり" : "なし"}）`);
  for (const task of selected) {
    for (let rep = 1; rep <= repeat; rep++) {
      const dir = path.join(root, arm, `${task.id}-${rep}`);
      fs.cpSync(prepared.base, dir, { recursive: true });
      fs.mkdirSync(path.join(dir, "src"), { recursive: true });
      const agent = runAgent(dir, task);
      const score = scoreDir(dir, task);
      runs.push({ task: task.id, arm, rep, agent, score: { ...score, tsc: { ...score.tsc, errors: score.tsc.errors.slice(0, 20) } } });
      console.log(
        `  ${task.id}#${rep}: tsc ${score.tsc.total}（export ${score.tsc.missingExport} / module ${score.tsc.missingModule} / prop ${score.tsc.propErrors}）` +
          ` トークン外れ ${score.unknownTokens.length} / styles.css ${score.cssContract ? "○" : "×"} / 期待 ${score.expect.hit}/${score.expect.of}` +
          ` / slop ${score.slop.hits} / 直書き ${score.hardcodedStyles} / 素の見出し ${score.rawHeadings}` +
          ` / llms ${agent.reads.llms ? "読んだ" : "読まない"}・d.ts ${agent.reads.dts} / ${agent.turns} ターン / $${agent.costUsd ?? "?"}${agent.isError ? " / エージェント失敗" : ""}`,
      );
    }
  }
}

const sum = (xs) => xs.reduce((a, b) => a + (b ?? 0), 0);
const summary = Object.fromEntries(
  arms.map((arm) => {
    const rs = runs.filter((r) => r.arm === arm);
    return [
      arm,
      {
        runs: rs.length,
        agentErrors: rs.filter((r) => r.agent.isError).length,
        tscErrors: sum(rs.map((r) => r.score.tsc.total)),
        compiles: rs.filter((r) => r.score.tsc.total === 0 && r.score.files.length > 0).length,
        missingExport: sum(rs.map((r) => r.score.tsc.missingExport)),
        missingModule: sum(rs.map((r) => r.score.tsc.missingModule)),
        propErrors: sum(rs.map((r) => r.score.tsc.propErrors)),
        unknownTokens: sum(rs.map((r) => r.score.unknownTokens.length)),
        cssContract: rs.filter((r) => r.score.cssContract).length,
        expectHit: `${sum(rs.map((r) => r.score.expect.hit))}/${sum(rs.map((r) => r.score.expect.of))}`,
        slopHits: sum(rs.map((r) => r.score.slop.hits)),
        hardcodedStyles: sum(rs.map((r) => r.score.hardcodedStyles)),
        rawHeadings: sum(rs.map((r) => r.score.rawHeadings)),
        readLlms: rs.filter((r) => r.agent.reads.llms).length,
        readDts: sum(rs.map((r) => r.agent.reads.dts)),
        turns: sum(rs.map((r) => r.agent.turns)),
        costUsd: Number(sum(rs.map((r) => r.agent.costUsd)).toFixed(4)),
      },
    ];
  }),
);

const record = { at: new Date().toISOString(), pkg: pkgSpec, version, model, repeat, tasks: selected.map((t) => t.id), summary, runs };
const outDir = path.join(REPO, "docs", "measurements", "vibe");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${version}.json`);
const existing = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, "utf8")) : { version, records: [] };
existing.records.push(record);
fs.writeFileSync(outFile, JSON.stringify(existing, null, 2) + "\n");

console.log("\n" + JSON.stringify(summary, null, 2));
console.log(`\n記録: ${path.relative(REPO, outFile)}`);
if (!flag("keep")) fs.rmSync(root, { recursive: true, force: true });
else console.log(`書かれたコードは ${root} に残した（--keep）`);
