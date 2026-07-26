/**
 * tarball スモークゲート オーケストレータ。
 *
 *   1. npm pack で公開 tarball を生成（files:["dist"] を尊重）
 *   2. リポジトリ外の使い捨てディレクトリに install（repo の node_modules/alias を混ぜない）
 *   3. assert.cjs / assert.mjs を CJS・ESM 両方で実行し、公開物を実際に import・render・解決
 *   4. --treeshake 指定時: `import { Button } from "wimui"` を esbuild でバンドルし、
 *      未使用の optional-peer コード（recharts 等）が引き込まれないことを検証
 *
 * プロファイル:
 *   bare (既定) … react/react-dom のみ。optional peer 不在での barrel crash 回帰ガード
 *   --full      … 全 optional peer を入れて peer 依存サブパスも検証
 *
 * オプション:
 *   --pm <npm|pnpm|yarn>  … install に使うパッケージマネージャ（既定 npm）。
 *                            pnpm は strict な node_modules で peer 宣言漏れを露呈させる
 *   --treeshake           … tree-shaking 検証（bare 相当の install が前提）
 *   --recipes             … sandbox/recipes/*.tsx が公開物だけで bundle できるか検証（T35）
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
const argv = process.argv.slice(2);
const profile = argv.includes("--full") ? "full" : "bare";
const treeshake = argv.includes("--treeshake");
const recipes = argv.includes("--recipes");
const pmArg = argv.find((a) => a.startsWith("--pm"));
const pm = pmArg ? (pmArg.includes("=") ? pmArg.split("=")[1] : argv[argv.indexOf(pmArg) + 1]) : "npm";
if (!["npm", "pnpm", "yarn"].includes(pm)) {
  console.error(`[smoke] unknown --pm "${pm}" (expected npm|pnpm|yarn)`);
  process.exit(1);
}

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

// パッケージマネージャごとの install コマンド。pnpm/yarn はローカル未導入でも
// npx 経由で取得して実行できる（CI では setup アクション不要）。
function installCmd(tarball, pkgs) {
  const list = `"${tarball}" ${pkgs.join(" ")}`;
  switch (pm) {
    case "pnpm":
      // strict-peer-dependencies は既定 false のまま（optional peer 不在で落とさない）。
      return `npx --yes pnpm@9 add --reporter=silent ${list}`;
    case "yarn":
      return `npx --yes yarn@1 add --silent ${list}`;
    default:
      return `npm install --no-audit --no-fund --loglevel=error ${list}`;
  }
}

// tree-shaking 検証: react/react-dom のみ external で Button 単体を bundle。
// tree-shaking が効いていれば optional-peer 依存コンポーネント（AreaChart→recharts 等）は
// 落ち、未 install の optional peer を解決しにいかないので bundle が成功する。
// 効いていなければ未解決 import で bundle が失敗する（＝検出）。
async function runTreeshake(consumer) {
  const { build } = await import("esbuild");
  const entry = join(consumer, "treeshake-entry.mjs");
  writeFileSync(
    entry,
    `import { Button } from "wimui";\nif (typeof Button !== "function") throw new Error("Button missing");\nexport { Button };\n`,
  );
  const forbidden = [
    "recharts",
    "react-markdown",
    "remark-gfm",
    "@fullcalendar",
    "@xyflow",
    "music-metadata",
    "qrcode.react",
    "AreaChart",
    "ScheduleView",
    "MarkdownRenderer",
    "NodeGraph",
  ];
  console.log(`\n[smoke] === tree-shaking (esbuild, Button-only) ===`);
  let result;
  try {
    result = await build({
      entryPoints: [entry],
      bundle: true,
      format: "esm",
      platform: "browser",
      write: false,
      logLevel: "silent",
      absWorkingDir: consumer,
      external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
    });
  } catch (e) {
    // 未 install の optional peer を解決しにいって失敗 = tree-shaking が効いていない
    console.log(
      "  FAIL bundle errored — 未使用 optional-peer コードが Button 経路に残存している可能性",
    );
    console.log("  " + String(e.message || e).split("\n").slice(0, 6).join("\n  "));
    return false;
  }
  const text = result.outputFiles.map((f) => f.text).join("");
  const bytes = Buffer.byteLength(text);
  const hits = forbidden.filter((m) => text.includes(m));
  if (hits.length) {
    console.log(`  FAIL bundle (${bytes}B) contains optional-peer markers: ${hits.join(", ")}`);
    return false;
  }
  console.log(`  PASS Button-only bundle is ${bytes}B and free of optional-peer code`);
  return true;
}

/**
 * Playground の「Open in StackBlitz」が公開版パッケージに対して起動する建付けなのに、
 * これまで**このリポジトリ内で tsc が通ること**しか確認していなかった（T35）。
 * レシピが使う名前が公開物に実在するかは別の話で、リポジトリ内では src の alias で
 * 解決してしまうため素通りする。
 *
 * ここでは隔離した consumer（= tarball を install しただけの環境）で、各レシピを
 * StackBlitz の main.tsx と同じ入口（`wimui/styles.css` + `WimProvider` + レシピ）
 * から esbuild で bundle する。ESM の名前解決を伴うので、**公開物に存在しない
 * named export を使っていれば bundle が失敗する**。
 *
 * **限界（検証済み）**: esbuild は未使用の import を tree-shake してから解決するため、
 * **import しただけで使っていない名前は検査されない**。実際、import 名だけを存在しない
 * ものに書き換えて JSX 側を元のままにすると通ってしまう（両方書き換えれば落ちる）。
 * 「レシピが実際に使っている名前が公開物に在るか」を見るゲートであり、
 * 死んだ import まで拾うものではない。
 *
 * また bundle が通ることは「ブラウザで正しく描画される」ことまでは意味しない
 * （実行はしない）。見た目は VRT / 人間のレビューの担当。
 */
async function runRecipes(consumer) {
  const { build } = await import("esbuild");
  const recipeDir = join(repoRoot, "sandbox", "recipes");
  if (!existsSync(recipeDir)) {
    console.log("\n[smoke] === recipes === sandbox/recipes が無いのでスキップ");
    return true;
  }
  const { readdirSync } = await import("node:fs");
  const files = readdirSync(recipeDir).filter((f) => f.endsWith(".tsx"));

  console.log(`\n[smoke] === recipes (${files.length}) ===`);
  let ok = true;
  for (const file of files) {
    const name = file.replace(/\.tsx$/, "");
    cpSync(join(recipeDir, file), join(consumer, file));
    // StackBlitz の main.tsx が足すもの（必須 CSS と Provider）まで含めて解決させる
    const entry = join(consumer, `recipe-entry-${name}.tsx`);
    writeFileSync(
      entry,
      [
        'import "wimui/styles.css";',
        'import { WimProvider } from "wimui";',
        `import Recipe from "./${name}";`,
        "export default function Main() {",
        '  return <WimProvider theme="system"><Recipe /></WimProvider>;',
        "}",
        "",
      ].join("\n"),
    );
    try {
      await build({
        entryPoints: [entry],
        bundle: true,
        format: "esm",
        platform: "browser",
        write: false,
        logLevel: "silent",
        absWorkingDir: consumer,
        // styles.css を含むため出力先の指定が要る（write:false なのでディスクには書かない）
        outdir: "recipe-out",
        jsx: "automatic",
        loader: { ".tsx": "tsx", ".css": "css", ".woff2": "empty", ".png": "empty", ".svg": "dataurl" },
        external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
      });
      console.log(`  PASS ${file}`);
    } catch (e) {
      ok = false;
      console.log(`  FAIL ${file}`);
      console.log("  " + String(e.message || e).split("\n").slice(0, 8).join("\n  "));
    }
  }
  return ok;
}

const packDir = mkdtempSync(join(tmpdir(), "wimui-pack-"));
const consumer = mkdtempSync(join(tmpdir(), "wimui-smoke-"));
let failed = false;

try {
  console.log(`[smoke] profile=${profile} pm=${pm}${treeshake ? " +treeshake" : ""}`);
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

  console.log(`[smoke] installing into isolated consumer via ${pm} (${peers.length} peers)...`);
  execSync(installCmd(tarball, peers), { cwd: consumer, stdio: "inherit" });

  for (const f of ["assert.mjs", "assert.cjs", "checks.cjs", "manifest.json"]) {
    cpSync(join(here, f), join(consumer, f));
  }

  for (const runner of ["assert.cjs", "assert.mjs"]) {
    console.log(`\n[smoke] === ${runner} (${profile}/${pm}) ===`);
    try {
      execSync(`node ${runner} ${profile}`, { cwd: consumer, stdio: "inherit" });
    } catch {
      failed = true;
    }
  }

  if (treeshake) {
    const ok = await runTreeshake(consumer);
    if (!ok) failed = true;
  }

  if (recipes) {
    const ok = await runRecipes(consumer);
    if (!ok) failed = true;
  }
} finally {
  if (process.env.SMOKE_KEEP) {
    console.log(`[smoke] kept for debugging:\n  tarball dir: ${packDir}\n  consumer:    ${consumer}`);
  } else {
    rmSync(packDir, { recursive: true, force: true });
    rmSync(consumer, { recursive: true, force: true });
  }
}

console.log(`\n[smoke] result: ${failed ? "FAIL" : "PASS"} (profile=${profile} pm=${pm}${treeshake ? " +treeshake" : ""})`);
process.exit(failed ? 1 : 0);
