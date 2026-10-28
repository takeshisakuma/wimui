#!/usr/bin/env node
/**
 * check:peer-floors — **宣言した peer の範囲に、ほかの peer と一緒には入れられない版が無いか。**
 *
 * `peerDependencies` の範囲は「この範囲の版なら動く」という公開契約。ところが peer どうしにも
 * peer の関係がある（`@hookform/resolvers` は `react-hook-form` を要求する）。こちらが許す
 * B のどの版も受け付けない A の版を、A の範囲に含めていたら、**その版は宣言しているのに入れられない。**
 *
 * 実際にあった（#1043・2026-10-29）── `react-hook-form` を `^7.43.0` と宣言していたが、
 * こちらが許す `@hookform/resolvers`（`^5.1.0 || ^6.0.0` の 28 版）はどれも `^7.55.0` を要求していた。
 * 7.43〜7.54 は `wimui/rhf` と組み合わせると peer の警告か `ERESOLVE` になり、README の「7.43+」は
 * 事実と違っていた。気づいたのは依存の更新を読んでいた人で、それまで何か月も出していた。
 *
 * 判定（A と B はどちらも wimui の peer）:
 *   A の範囲に入る A の stable 版 a それぞれについて、B の範囲に入る B の stable 版のうち
 *   「A を peer に持たない」か「持っていて a を受け付ける」ものが 1 つでもあれば a は入れられる。
 *   1 つも無ければ、その a は「宣言しているのに入れられない」。
 *   B のどの版も A を peer に持たない組は、関係が無いので数えない。
 *
 * **PR でも走らせる（`package.json` を変える PR）。** 赤になるのは、こちらが範囲を広げたとき
 * （上流が新しい版を出しても、受け付ける側が増えるだけで赤は増えない）。上流の版の取り下げだけは
 * 例外なので、週次でも走らせる。
 *
 * 出力は「母数 → 内訳」（T84 / T89 と同じ方針）。0 件が「検査した結果 0」なのか
 * 「関係のある組が拾えていない」のかを、出力で見分けられるようにする。
 *
 * Usage: npm run check:peer-floors [-- --package <package.json のパス>]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** 範囲に入る stable 版（prerelease は契約の外なので見ない）。 */
const stableIn = (packument, range) =>
  Object.keys(packument.versions ?? {}).filter(
    (v) =>
      semver.valid(v) && !semver.prerelease(v) && semver.satisfies(v, range),
  );

/**
 * @param {Record<string, string>} peers wimui の peerDependencies
 * @param {Record<string, { versions: Record<string, { peerDependencies?: Record<string, string> }> }>} packuments
 * @returns {{ pairs: string[], problems: Array<{ a: string, b: string, aRange: string, bRange: string, rejected: string[], aCount: number, bCount: number, lowestAccepted: string | null }> }}
 */
export function findUnusableFloors(peers, packuments) {
  const pairs = [];
  const problems = [];
  for (const [a, aRange] of Object.entries(peers)) {
    const aVersions = stableIn(packuments[a], aRange);
    for (const [b, bRange] of Object.entries(peers)) {
      if (a === b) continue;
      const bVersions = stableIn(packuments[b], bRange);
      const declared = bVersions.map(
        (v) => packuments[b].versions[v].peerDependencies?.[a],
      );
      if (declared.every((r) => r === undefined)) continue;
      pairs.push(`${b} → ${a}`);
      // A を peer に持たない B の版が 1 つでもあれば、どの a も入れられる。
      if (declared.some((r) => r === undefined)) continue;
      const ranges = [...new Set(declared)];
      const accepted = (v) => ranges.some((r) => semver.satisfies(v, r));
      const rejected = aVersions
        .filter((v) => !accepted(v))
        .sort(semver.compare);
      if (rejected.length) {
        problems.push({
          a,
          b,
          aRange,
          bRange,
          rejected,
          aCount: aVersions.length,
          bCount: bVersions.length,
          lowestAccepted:
            aVersions.filter(accepted).sort(semver.compare)[0] ?? null,
        });
      }
    }
  }
  return { pairs, problems };
}

/**
 * レジストリから packument を読む（`npm view` を exec しない理由は check-peer-majors.js と同じ）。
 * 省略形（install-v1）でも各版の peerDependencies は載っている。
 * ネットワークが死んでいたら**落とす**（黙って緑にしない）。
 */
async function fetchPackument(name) {
  const url = `https://registry.npmjs.org/${name.split("/").map(encodeURIComponent).join("/")}`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/vnd.npm.install-v1+json" },
        signal: AbortSignal.timeout(60_000),
      });
      if (!res.ok)
        throw new Error(`registry が ${res.status} を返した（${url}）`);
      return await res.json();
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError;
}

async function main() {
  const argIndex = process.argv.indexOf("--package");
  const pkgPath =
    argIndex === -1
      ? path.join(__dirname, "..", "package.json")
      : path.resolve(process.argv[argIndex + 1]);
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  const peers = pkg.peerDependencies ?? {};
  const names = Object.keys(peers);

  const packuments = {};
  const unreadable = [];
  await Promise.all(
    names.map(async (name) => {
      try {
        packuments[name] = await fetchPackument(name);
      } catch (e) {
        unreadable.push(
          `${name}: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
    }),
  );
  if (unreadable.length) {
    console.error(
      "✗ packument を読めなかった peer がある（ネットワーク不通でも緑にしない）:\n",
    );
    for (const u of unreadable.sort()) console.error(`  - ${u}`);
    process.exit(1);
  }

  const empty = names.filter(
    (n) => stableIn(packuments[n], peers[n]).length === 0,
  );
  if (empty.length) {
    console.error(
      `✗ 範囲に stable 版が 1 つも無い peer がある: ${empty.join(", ")}`,
    );
    process.exit(1);
  }

  const { pairs, problems } = findUnusableFloors(peers, packuments);
  console.log(
    `走査: peerDependencies ${names.length} 件・組 ${names.length * (names.length - 1)} 通りのうち、` +
      `B が A を peer に持つ組 ${pairs.length} 件`,
  );
  if (process.argv.includes("--verbose"))
    for (const p of pairs.sort()) console.log(`  ・${p}`);
  if (pairs.length === 0) {
    console.error(
      "✗ peer どうしの関係が 1 組も拾えていない（この検査の対象が 0 なのは不自然）。",
    );
    process.exit(1);
  }

  if (problems.length) {
    console.error(
      "\n✗ 宣言した範囲に、ほかの peer と一緒には入れられない版がある:\n",
    );
    for (const p of problems) {
      const first = p.rejected[0];
      const last = p.rejected[p.rejected.length - 1];
      console.error(
        `  - ${p.a}（宣言 \`${p.aRange}\`）の ${p.rejected.length} / ${p.aCount} 版（${first}〜${last}）は、` +
          `${p.b}（宣言 \`${p.bRange}\` の ${p.bCount} 版）のどれも受け付けない。` +
          (p.lowestAccepted
            ? `受け付ける最小の版は ${p.lowestAccepted}`
            : "受け付ける版が 1 つも無い"),
      );
    }
    console.error(
      "\n  どちらかを選ぶこと:\n" +
        "    ① A の下限を、B が受け付ける版まで上げる（#1043 はこれ。動いていた組み合わせは外れない）\n" +
        "    ② B の範囲を広げて、A の古い版を受け付ける B の版を含める（その B の版で動くか確かめてから）\n",
    );
    process.exit(1);
  }
  console.log(
    `\n✓ ${pairs.length} 組とも、宣言した A の範囲の版はどれも、許している B のどれかと一緒に入れられる。`,
  );
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  await main();
}
