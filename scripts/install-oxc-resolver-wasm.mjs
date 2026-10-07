#!/usr/bin/env node
/**
 * storybook:fix-resolver — **`oxc-resolver` のネイティブのファイルを OS が止める環境で、WASM 版を手元に入れる。**
 *
 * Storybook は `oxc-resolver` を使う。その Windows 用のネイティブのファイル
 * （`@oxc-resolver/binding-win32-x64-msvc` の `.node`）には署名が無く、スマート アプリ コントロールが
 * オンの Windows では読み込みを止められることがある（2026-10-07 に実際に起きた）。出るエラーは
 *
 *   Error: Cannot find native binding. npm has a bug related to optional dependencies …
 *   [cause]: Error: An Application Control policy has blocked this file.
 *
 * で、1 行目は「lock と node_modules を消して入れ直せ」と言うが、入れ直しても同じファイルが入るので直らない。
 *
 * `oxc-resolver` は、ネイティブが読めないと WASM 版（`@oxc-resolver/binding-wasm32-wasi`）へ切り替わる作りに
 * なっている。ただし lock では WASM 版が `cpu: wasm32` の扱いなので、`npm ci` は入れない。このスクリプトは
 * **lock に書いてある版を、lock の integrity と突き合わせてから**、`node_modules` にだけ置く。
 *
 * - `package.json` と lock は触らない。OS の保護の設定も触らない（止められたファイルは動かさない）。
 * - `npm ci` / `npm install` を流すと消えるので、そのたびに流し直す。
 * - ネイティブが読める環境では、何もしない（`--force` で入れる）。
 * - `npm install --cpu=wasm32` は使わない。ほかの optional のネイティブを消すおそれがある。
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

export const WASM_KEY = "node_modules/@oxc-resolver/binding-wasm32-wasi";

/**
 * lock の `packages` から、`rootKey` とその依存（lock の中での解決先）をたどって返す。
 * 解決は Node と同じで、近い `node_modules` から外へ探す。
 */
export function collectLockClosure(packages, rootKey) {
  if (!packages[rootKey]) {
    throw new Error(`lock に ${rootKey} が無い（oxc-resolver が WASM 版を持たなくなった可能性がある）`);
  }
  const resolve = (fromKey, name) => {
    let dir = fromKey;
    for (;;) {
      const candidate = `${dir}/node_modules/${name}`;
      if (packages[candidate]) return candidate;
      const cut = dir.lastIndexOf("/node_modules/");
      if (cut < 0) break;
      dir = dir.slice(0, cut);
    }
    const top = `node_modules/${name}`;
    return packages[top] ? top : null;
  };
  const seen = new Set();
  const missing = [];
  const visit = (key) => {
    if (seen.has(key)) return;
    seen.add(key);
    const entry = packages[key];
    for (const name of Object.keys({ ...entry.dependencies, ...entry.optionalDependencies })) {
      const found = resolve(key, name);
      if (found) visit(found);
      else if (entry.dependencies?.[name]) missing.push(`${name}（${key} の依存）`);
    }
  };
  visit(rootKey);
  if (missing.length) throw new Error(`lock の中で解決できない依存がある: ${missing.join(" / ")}`);
  return [...seen];
}

/** tarball の中身が lock の integrity（sha512）と一致するか。 */
export function matchesIntegrity(bytes, integrity) {
  const expected = String(integrity ?? "")
    .split(/\s+/)
    .find((part) => part.startsWith("sha512-"));
  if (!expected) return false;
  return `sha512-${crypto.createHash("sha512").update(bytes).digest("base64")}` === expected;
}

/** 別のプロセスで `oxc-resolver` を読み、読めたか・どちらの版で読めたかを返す。 */
function probe(repo) {
  const code =
    "try{require('oxc-resolver');process.stdout.write('ok')}catch(e){process.stdout.write('ng:'+String((e&&e.cause&&e.cause.message)||e.message).split('\\n')[0])}";
  const out = spawnSync(process.execPath, ["--no-warnings", "-e", code], { cwd: repo, encoding: "utf8" });
  const text = (out.stdout ?? "").trim();
  return text === "ok" ? { ok: true } : { ok: false, reason: text.replace(/^ng:/, "") || (out.stderr ?? "").trim() };
}

async function main() {
  const repo = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
  const force = process.argv.includes("--force");
  const at = (key) => path.join(repo, ...key.split("/"));
  const installed = (key) => fs.existsSync(path.join(at(key), "package.json"));

  if (!fs.existsSync(at("node_modules/oxc-resolver"))) {
    console.error("✗ node_modules に oxc-resolver が無い。先に `npm ci` を流すこと。");
    process.exit(1);
  }

  const before = probe(repo);
  const hadWasm = installed(WASM_KEY);
  if (before.ok && !force) {
    console.log(
      hadWasm
        ? "✓ oxc-resolver は読める（WASM 版が入っている）。何もしない。"
        : "✓ oxc-resolver はネイティブのまま読める。この環境では WASM 版は要らない。何もしない（入れるなら --force）。",
    );
    return;
  }
  if (!before.ok) console.log(`oxc-resolver が読めない: ${before.reason}`);

  const packages = JSON.parse(fs.readFileSync(path.join(repo, "package-lock.json"), "utf8")).packages;
  const closure = collectLockClosure(packages, WASM_KEY);
  const todo = closure.filter((key) => !installed(key));
  console.log(`WASM 版とその依存: ${closure.length} 個（うち、手元に無いもの ${todo.length} 個）`);

  for (const key of todo) {
    const entry = packages[key];
    if (!entry.resolved || !entry.integrity) throw new Error(`lock に取得元か integrity が無い: ${key}`);
    const res = await fetch(entry.resolved, { signal: AbortSignal.timeout(120_000) });
    if (!res.ok) throw new Error(`取得に失敗した（${res.status}）: ${entry.resolved}`);
    const bytes = Buffer.from(await res.arrayBuffer());
    if (!matchesIntegrity(bytes, entry.integrity)) {
      throw new Error(`integrity が lock と合わない。入れない: ${key}`);
    }
    // tgz を展開先に置いて、そこを cwd にして展開する（`-C` に Windows のパスを渡すと、tar の実装によって失敗する）
    const dest = at(key);
    fs.mkdirSync(dest, { recursive: true });
    const tgz = path.join(dest, "__package.tgz");
    fs.writeFileSync(tgz, bytes);
    try {
      execFileSync("tar", ["-xzf", "__package.tgz", "--strip-components=1"], { cwd: dest, stdio: "pipe" });
    } finally {
      fs.rmSync(tgz, { force: true });
    }
    console.log(`  入れた: ${key.split("node_modules/").pop()}@${entry.version}（integrity 一致）`);
  }

  const after = probe(repo);
  if (!after.ok) {
    console.error(`✗ WASM 版を入れたが、oxc-resolver はまだ読めない: ${after.reason}`);
    process.exit(1);
  }
  console.log("✓ oxc-resolver が読めるようになった。`npm ci` / `npm install` を流すと消えるので、そのときは流し直すこと。");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
    // fetch の直後に process.exit を呼ぶと、Windows の Node が後始末の途中で異常終了する（終了コードが 127 になる）
    process.exitCode = 1;
  });
}
