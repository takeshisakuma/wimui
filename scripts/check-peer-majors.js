#!/usr/bin/env node
/**
 * check:peer-majors — **開いた optional peer レンジに、検証していない major が出ていないか。**
 *
 * `package.json` の `peerDependencies` には `>=12.0.0` のような**上限の無いレンジ**がある。
 * これは「将来の major も動く」と公開契約で宣言していることになるが、**その major は
 * まだ存在しないので、誰も確かめていない。**
 *
 * 実際に一度発火した（2026-09-12・#598）── `@fullcalendar/*` を `>=6.0.0` と宣言したまま
 * FullCalendar 7 が出ていた。7 では
 *   - プラグイン 3 つ（daygrid / timegrid / interaction）に stable が無い（`7.0.0-rc.0` 止まり）
 *   - `@fullcalendar/core@7` の tarball に `locales/` が 1 file も無く、`ScheduleView` の
 *     `@fullcalendar/core/locales/{ja,pt,pt-br}` が解決できない
 * ＝ **成立しない組み合わせを許容していた。** 気づいたのは人が手で調べたときで、
 * それまで何か月も間違った契約を出していた。読み手依存だと同じことが起きる。
 *
 * **PR では走らせない。** 上流が major を出したという、その PR と無関係な事情で赤くなる
 * ため（AGENTS.md の「変更と無関係に見える赤」）。`Dependency Audit` の**週次 / 手動起動
 * のときだけ**動かす（`audit.yml` の `if` を参照）。
 *
 * 出力は「母数 → 内訳」。0 件が「検査した結果 0」なのか「対象が拾えていない」のかを
 * 出力で見分けられるようにする（T84 / T89 と同じ方針）。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"));

const peers = pkg.peerDependencies ?? {};
/** 上限の無いレンジだけを見る。`^19.0.0` / `>=6.0.0 <7` のように上限があるものは対象外。 */
const openRanges = Object.entries(peers).filter(
  ([, range]) => /^>=\s*\d/.test(range.trim()) && !/[<^~]|\|\|/.test(range.trim()),
);

console.log(
  `走査: peerDependencies ${Object.keys(peers).length} 件のうち、上限の無いレンジ ${openRanges.length} 件`,
);
if (openRanges.length === 0) {
  console.log("✓ 上限の無い peer レンジは無い（この検査の対象が 0）。");
  process.exit(0);
}

/**
 * npm レジストリの `latest` を読む。
 *
 * **`npm view` を exec しない。** Windows では実体が `npm.cmd` で `execFileSync("npm", …)` が
 * `ENOENT` になり、**「版が読めない」＝この検査の失敗**として出てしまう（2026-09-12 に踏んだ）。
 * レジストリを直接引けば OS に依存しない。
 *
 * ネットワークが死んでいたら**落とす**（黙って緑にしない）。
 */
async function latestOf(name) {
  const url = `https://registry.npmjs.org/${name.split("/").map(encodeURIComponent).join("/")}/latest`;
  const res = await fetch(url, { signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`registry が ${res.status} を返した（${url}）`);
  const json = await res.json();
  const v = String(json.version ?? "").trim();
  if (!/^\d+\.\d+\.\d+/.test(v)) throw new Error(`版が読めない: ${JSON.stringify(v)}`);
  return v;
}

const majorOf = (v) => Number(String(v).match(/(\d+)\./)?.[1]);
const problems = [];
const unreadable = [];

for (const [name, range] of openRanges) {
  const declaredMajor = majorOf(range.replace(/^>=\s*/, ""));
  let latest;
  try {
    latest = await latestOf(name);
  } catch (e) {
    unreadable.push(`${name}: ${e instanceof Error ? e.message : String(e)}`);
    continue;
  }
  const latestMajor = majorOf(latest);
  const mark = latestMajor > declaredMajor ? "✗" : "・";
  console.log(`  ${mark} ${name} — 宣言 ${range} / npm の latest ${latest}`);
  if (latestMajor > declaredMajor) {
    problems.push({ name, range, latest, declaredMajor, latestMajor });
  }
}

if (unreadable.length) {
  console.error("\n✗ 版を読めなかった peer がある（ネットワーク不通でも緑にしない）:\n");
  for (const u of unreadable) console.error(`  - ${u}`);
  process.exit(1);
}

if (problems.length) {
  console.error("\n✗ 検証していない major を、公開契約で許容している:\n");
  for (const p of problems) {
    console.error(
      `  - ${p.name}: 宣言は \`${p.range}\`（major ${p.declaredMajor} を想定）だが、` +
        `npm の latest は ${p.latest}（major ${p.latestMajor}）`,
    );
  }
  console.error(
    "\n  どちらかを選ぶこと:\n" +
      "    ① その major で実際に動くか確かめて、動くならレンジはそのままでよい\n" +
      "    ② 動かない / 確かめないなら、レンジに上限を付ける（`^N.0.0` など）\n" +
      "\n  #598（FullCalendar 7）の実例: プラグインに stable が無く、`core@7` は locales を\n" +
      "  同梱しなくなっていた。**実在するのに動かない major**だったので ② を採った。\n",
  );
  process.exit(1);
}

console.log(`\n✓ 上限の無い ${openRanges.length} 件は、どれも npm の latest が想定 major の中にある。`);
