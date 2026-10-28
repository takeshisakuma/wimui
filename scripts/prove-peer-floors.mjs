#!/usr/bin/env node
/**
 * prove:peer-floors — `check:peer-floors` が鳴るべきときに鳴り、鳴ってはいけないときに鳴らないことを実証する。
 *
 * AGENTS.md の約束「未実証のガード、および『0 件』という結果は信用しない」。
 * 判定（findUnusableFloors）は合成した packument で、入口（CLI）は実物のレジストリで試す:
 *   1. B のどの版も A の下限を受け付けないとき鳴る（#1043 の形）
 *   2. B の古い版が A の下限を受け付けるなら鳴らない（B の範囲のどこかで入れられる）
 *   3. B の版の 1 つでも A を peer に持たなければ鳴らない（その版となら何でも入る）
 *   4. B が A を peer に持たない組は数えない（関係の無い組で鳴らない）
 *   5. 範囲の外の B の版・prerelease の B の版は、受け付け手に数えない
 *        ── 数えると「入れられる」と誤判定して黙る
 *   6. A の範囲の外の A の版（prerelease を含む）は、鳴らす対象に数えない
 *   7. 実物: #1043 の直前の package.json で react-hook-form 7.43.0〜7.54.2 が鳴る
 *   8. 実物: #1043 の直前の package.json で tiptap（3.0〜3.6）も鳴る（このガードで初めて見つかった）
 *   9. 実物: いまの package.json は緑
 *
 * 7〜9 はネットワークを使う（ガード本体と同じく、読めなければ落とす）。
 *
 * Usage: npm run prove:peer-floors
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findUnusableFloors } from "./check-peer-floors.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** `{ "1.0.0": { a: "^2.0.0" } }` の形から packument を作る（値 null は「A を peer に持たない」）。 */
const pack = (versions) => ({
  versions: Object.fromEntries(
    Object.entries(versions).map(([v, peerDependencies]) => [
      v,
      peerDependencies ? { peerDependencies } : {},
    ]),
  ),
});
const lib = pack({
  "1.0.0": null,
  "1.5.0": null,
  "1.9.0": null,
  "2.0.0": null,
  "2.0.0-rc.1": null,
});

const results = [];
const check = (name, ok, detail = "") => {
  results.push(ok);
  console.log(`${ok ? "OK " : "NG "} ${name}${detail ? ` — ${detail}` : ""}`);
};
const rejectedOf = (r, a) =>
  r.problems.filter((p) => p.a === a).flatMap((p) => p.rejected);

{
  const r = findUnusableFloors(
    { lib: "^1.0.0", plugin: "^5.0.0" },
    {
      lib,
      plugin: pack({ "5.0.0": { lib: "^1.5.0" }, "5.1.0": { lib: "^1.5.0" } }),
    },
  );
  const got = rejectedOf(r, "lib");
  check(
    "1. B のどの版も A の下限を受け付けないと鳴る",
    got.join() === "1.0.0",
    `rejected=${got.join() || "なし"}`,
  );
}
{
  const r = findUnusableFloors(
    { lib: "^1.0.0", plugin: "^5.0.0" },
    {
      lib,
      plugin: pack({ "5.0.0": { lib: "^1.0.0" }, "5.1.0": { lib: "^1.5.0" } }),
    },
  );
  check(
    "2. B の古い版が下限を受け付ければ鳴らない",
    r.problems.length === 0,
    `problems=${r.problems.length}`,
  );
}
{
  const r = findUnusableFloors(
    { lib: "^1.0.0", plugin: "^5.0.0" },
    { lib, plugin: pack({ "5.0.0": null, "5.1.0": { lib: "^1.9.0" } }) },
  );
  check(
    "3. A を peer に持たない B の版があれば鳴らない",
    r.problems.length === 0 && r.pairs.length === 1,
    `problems=${r.problems.length} pairs=${r.pairs.length}`,
  );
}
{
  const r = findUnusableFloors(
    { lib: "^1.0.0", other: "^3.0.0" },
    { lib, other: pack({ "3.0.0": { unrelated: "^9.0.0" } }) },
  );
  check(
    "4. 関係の無い組は数えない",
    r.pairs.length === 0 && r.problems.length === 0,
    `pairs=${r.pairs.length}`,
  );
}
{
  const r = findUnusableFloors(
    { lib: "^1.0.0", plugin: "^5.0.0" },
    {
      lib,
      plugin: pack({
        "4.9.0": { lib: "^1.0.0" },
        "5.0.0-beta.1": { lib: "^1.0.0" },
        "5.0.0": { lib: "^1.9.0" },
      }),
    },
  );
  const got = rejectedOf(r, "lib");
  check(
    "5. 範囲外・prerelease の B は受け付け手に数えない",
    got.join() === "1.0.0,1.5.0",
    `rejected=${got.join() || "なし"}`,
  );
}
{
  const r = findUnusableFloors(
    { lib: "^1.5.0", plugin: "^5.0.0" },
    { lib, plugin: pack({ "5.0.0": { lib: "^1.5.0" } }) },
  );
  check(
    "6. A の範囲外の版（1.0.0 / 2.0.0 / rc）は鳴らす対象にしない",
    r.problems.length === 0,
    `problems=${r.problems.length}`,
  );
}

const runCli = (pkgPath) => {
  try {
    const out = execFileSync(
      "node",
      ["scripts/check-peer-floors.js", "--package", pkgPath],
      {
        cwd: ROOT,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    return { status: 0, out };
  } catch (e) {
    return { status: e.status ?? 1, out: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
};

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "prove-peer-floors-"));
try {
  // #1043（28361aace1）の直前。git show の引数は cmd.exe を通さない（execFileSync で ^ が食われない）。
  const before = path.join(tmp, "package.json");
  fs.writeFileSync(
    before,
    execFileSync("git", ["show", "28361aace1^:package.json"], {
      cwd: ROOT,
      encoding: "utf8",
    }),
  );
  const r = runCli(before);
  check(
    "7. 実物: #1043 の直前で react-hook-form 7.43.0〜7.54.2 が鳴る",
    r.status === 1 &&
      /react-hook-form（宣言 `\^7\.43\.0`）の 47 \/ \d+ 版（7\.43\.0〜7\.54\.2）/.test(
        r.out,
      ),
    `exit=${r.status}`,
  );
  check(
    "8. 実物: #1043 の直前で tiptap 3.0〜3.6 も鳴る",
    /@tiptap\/core（宣言 `\^3\.0\.0`）の 35 \/ \d+ 版（3\.0\.0〜3\.6\.7）/.test(
      r.out,
    ),
    `exit=${r.status}`,
  );
  const now = runCli(path.join(ROOT, "package.json"));
  check(
    "9. 実物: いまの package.json は緑",
    now.status === 0 && /✓ \d+ 組とも/.test(now.out),
    `exit=${now.status}`,
  );
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

const failed = results.filter((ok) => !ok).length;
console.log(`\n${results.length - failed} / ${results.length} 通り`);
process.exit(failed ? 1 : 0);
