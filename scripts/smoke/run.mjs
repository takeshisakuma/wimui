/**
 * tarball スモークゲート オーケストレータ。
 *
 *   1. npm pack で公開 tarball を生成（files:["dist"] を尊重）
 *   2. リポジトリ外の使い捨てディレクトリに install（repo の node_modules/alias を混ぜない）
 *   3. assert.cjs / assert.mjs を CJS・ESM 両方で実行し、公開物を実際に import・render・解決
 *
 * プロファイル:
 *   bare (既定) … react/react-dom のみ。optional peer 不在での barrel crash 回帰ガード
 *   --full      … 全 optional peer を入れて peer 依存サブパスも検証
 *
 * 前提: dist/ がビルド済みであること（npm run smoke は build を前段に連結）。
 * 環境変数 SMOKE_KEEP=1 で失敗調査用に一時ディレクトリを残す。
 */
import { execSync } from "node:child_process";
import { mkdtempSync, cpSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..", "..");
const profile = process.argv.includes("--full") ? "full" : "bare";

if (!existsSync(join(repoRoot, "dist", "index.js"))) {
  console.error(
    "[smoke] dist/ が見つかりません。先に `npm run build` を実行してください（`npm run smoke` は build を連結します）。",
  );
  process.exit(1);
}

const barePeers = ["react@^19", "react-dom@^19"];
const optionalPeers = [
  "recharts",
  "react-markdown",
  "remark-gfm",
  "react-hook-form",
  "zod",
  "@hookform/resolvers",
  "@xyflow/react",
  "@fullcalendar/core",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
  "@fullcalendar/interaction",
  "music-metadata",
  "qrcode.react",
  "diff",
];
const peers = profile === "full" ? [...barePeers, ...optionalPeers] : barePeers;

const packDir = mkdtempSync(join(tmpdir(), "wimui-pack-"));
const consumer = mkdtempSync(join(tmpdir(), "wimui-smoke-"));
let failed = false;

try {
  console.log(`[smoke] profile=${profile}`);
  console.log("[smoke] packing tarball...");
  const packOut = execSync(`npm pack --pack-destination "${packDir}" --json`, {
    cwd: repoRoot,
    stdio: ["ignore", "pipe", "inherit"],
  }).toString();
  const filename = JSON.parse(packOut.slice(packOut.indexOf("[")))[0].filename;
  const tarball = join(packDir, filename);
  console.log(`[smoke] packed: ${filename}`);

  writeFileSync(
    join(consumer, "package.json"),
    JSON.stringify({ name: "wimui-smoke-consumer", private: true, version: "1.0.0" }, null, 2),
  );

  console.log(`[smoke] installing into isolated consumer (${peers.length} peers)...`);
  execSync(
    `npm install --no-audit --no-fund --loglevel=error "${tarball}" ${peers.join(" ")}`,
    { cwd: consumer, stdio: "inherit" },
  );

  for (const f of ["assert.mjs", "assert.cjs", "checks.cjs", "manifest.json"]) {
    cpSync(join(here, f), join(consumer, f));
  }

  for (const runner of ["assert.cjs", "assert.mjs"]) {
    console.log(`\n[smoke] === ${runner} (${profile}) ===`);
    try {
      execSync(`node ${runner} ${profile}`, { cwd: consumer, stdio: "inherit" });
    } catch {
      failed = true;
    }
  }
} finally {
  if (process.env.SMOKE_KEEP) {
    console.log(`[smoke] kept for debugging:\n  tarball dir: ${packDir}\n  consumer:    ${consumer}`);
  } else {
    rmSync(packDir, { recursive: true, force: true });
    rmSync(consumer, { recursive: true, force: true });
  }
}

console.log(`\n[smoke] result: ${failed ? "FAIL" : "PASS"} (profile=${profile})`);
process.exit(failed ? 1 : 0);
