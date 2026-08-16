/**
 * `release.yml` の契約判定（T116 / T170）。
 *
 * ファイル I/O を持たない。vitest は jsdom で `path` / `url` が壊れるので、
 * 判定だけをここに切り出してテストする（`vrt-diff-classify.js` と同じ分け方）。
 */

export const REQUIRED_JOBS = ["decide", "version", "publish", "recover-version"];

function uncommentedLines(text) {
  return text.split(/\r?\n/).filter((l) => !l.trim().startsWith("#"));
}

/**
 * changesets の CLI と action は**組でしか動かない**（T201）。
 *
 *   action v1 ⇔ `@changesets/cli` 2 系 … v1 は `changeset publish` の標準出力を
 *                `/New tag:/` で読んで publish 済みを判定する
 *   action v2 ⇔ `@changesets/cli` 3 系 … v2 は NDJSON の構造化イベント
 *                （`type: "git-tag"`）で受け取る。v2 は cli 2 を検出して v1 へ誘導する
 *
 * ずれた 2 通りのうち、**cli 3 + action v1 は赤が出ない**: cli 3 は
 * `New tag:` を出さない（`Creating git tags...` に変わった）ので `published: false` と
 * 判定され、**npm publish は成功したままタグと GitHub Release だけが黙って作られなくなる**。
 * もう片方（cli 2 + action v2）は落ちるので気付ける。
 *
 * この判定があるので、上げる時期は「決め打ちの期日」ではなく
 * **人が見ているリリースの直前**でよい ── 片方だけ動かした PR はここで止まる。
 *
 * @param {string} yaml `release.yml` の中身
 * @param {string} cliRange `package.json` の `@changesets/cli`（`2.31.1` / `^3.0.0` など）
 */
export function auditChangesetsPairing(yaml, cliRange) {
  const errors = [];
  const uses = uncommentedLines(yaml)
    .map((l) => l.match(/uses:\s*changesets\/action@v(\d+)/))
    .filter(Boolean)
    .map((m) => Number(m[1]));

  // **読めなかったら落ちる。** 参照が見つからないのに緑で通すと、
  // 「契約を確かめた」と「契約が無い」を取り違える（このファイルの他の判定と同じ方針）。
  if (uses.length === 0) {
    errors.push(
      "`uses: changesets/action@vN` が読めない ── 書式が変わったか、action を使わなくなった。" +
        "どちらでも、この契約（T201）を確かめられないので落とす",
    );
    return errors;
  }

  const actionMajors = [...new Set(uses)];
  if (actionMajors.length > 1) {
    errors.push(
      `changesets/action の major が混在している（v${actionMajors.join(" / v")}）` +
        " ── version 経路と publish 経路で判定方式が変わる",
    );
  }

  const cliMajor = Number(String(cliRange ?? "").match(/(\d+)\./)?.[1]);
  if (!Number.isFinite(cliMajor)) {
    errors.push(`\`@changesets/cli\` の版が読めない（${String(cliRange)}）`);
    return errors;
  }

  // v1 ⇔ cli 2 / v2 ⇔ cli 3 / vN ⇔ cli N+1
  for (const actionMajor of actionMajors) {
    const expectedCli = actionMajor + 1;
    if (cliMajor !== expectedCli) {
      const silent = cliMajor > expectedCli;
      errors.push(
        `changesets/action@v${actionMajor} と \`@changesets/cli\` ${cliMajor} 系は組にならない` +
          `（v${actionMajor} が要求するのは cli ${expectedCli} 系）。` +
          (silent
            ? " **この向きは赤が出ない**: npm publish は成功したまま、" +
              "タグと GitHub Release だけが黙って作られなくなる（T201）"
            : " action 側が cli の版を検出して落ちる（T201）") +
          " ── cli / action / `release.yml` の入力名は同時に変えること",
      );
    }
  }

  return errors;
}

/**
 * `jobs:` 直下のジョブ本体を名前 → 本文で返す。
 * ジョブ名は indent 2 の `name:`。本文は次のジョブ名の直前まで。
 */
export function splitJobs(yaml) {
  const lines = yaml.split(/\r?\n/);
  const jobsIdx = lines.findIndex((l) => l === "jobs:");
  if (jobsIdx < 0) {
    throw new Error("release.yml: トップレベルの `jobs:` が読めない");
  }

  const jobs = {};
  let current = null;
  const buf = [];
  const flush = () => {
    if (current) jobs[current] = buf.join("\n");
    buf.length = 0;
  };

  for (let i = jobsIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    const jobMatch = line.match(/^  ([a-z][a-z0-9_-]*):\s*$/);
    if (jobMatch) {
      flush();
      current = jobMatch[1];
      continue;
    }
    if (current) buf.push(line);
  }
  flush();
  return jobs;
}

function hasEnvironment(body) {
  return uncommentedLines(body).some((l) => /^\s+environment:\s+\S/.test(l));
}

function hasPublishInput(body) {
  return uncommentedLines(body).some((l) => /^\s+publish:\s+\S/.test(l));
}

/**
 * @param {string} yaml
 * @returns {string[]} 違反メッセージ。空なら契約を満たす。
 */
export function auditReleaseYaml(yaml) {
  const errors = [];
  const uncommented = uncommentedLines(yaml).join("\n");

  if (!/^\s+workflow_dispatch:\s*$/m.test(yaml) && !uncommented.includes("workflow_dispatch:")) {
    errors.push(
      "`workflow_dispatch` が無い ── 取り残しを手で拾う逃げ道が要る（T170 / CI-4）",
    );
  }

  let jobs;
  try {
    jobs = splitJobs(yaml);
  } catch (e) {
    errors.push(e instanceof Error ? e.message : String(e));
    return errors;
  }

  const names = Object.keys(jobs);
  if (names.length === 0) {
    errors.push("`jobs:` の下が読めない（ジョブ名の書式が変わった可能性）");
    return errors;
  }

  for (const name of REQUIRED_JOBS) {
    if (!(name in jobs)) {
      errors.push(`ジョブ \`${name}\` が無い`);
    }
  }

  for (const [name, body] of Object.entries(jobs)) {
    const env = hasEnvironment(body);
    if (name === "publish") {
      if (!env) {
        errors.push(
          "`publish` に `environment: release` が無い ── NPM_TOKEN の承認ゲートが外れる",
        );
      }
    } else if (env) {
      errors.push(
        `ジョブ \`${name}\` に \`environment:\` がある ── Version PR 経路に承認が掛かると ` +
          `T116 の無音詰まりが戻る。付けてよいのは \`publish\` だけ`,
      );
    }
  }

  const recover = jobs["recover-version"];
  if (recover) {
    const body = uncommentedLines(recover).join("\n");
    if (!/\bversion\b/.test(jobs["recover-version"].match(/^\s+needs:\s*\[([^\]]+)\]/m)?.[1] ?? "")) {
      errors.push(
        "`recover-version` の `needs` に `version` が無い ── version 失敗を拾えない",
      );
    }
    if (!/needs\.version\.result/.test(body) || !/failure/.test(body)) {
      errors.push(
        "`recover-version` の `if` が `needs.version.result == 'failure'` を見ていない",
      );
    }
    if (!/ref:\s*main/.test(body) && !/default_branch/.test(body)) {
      errors.push(
        "`recover-version` が `ref: main`（または default_branch）で checkout していない ── " +
          "トリガー SHA を使うと、並行マージが消化済みの changeset を Version PR に載せ直す（T170）",
      );
    }
    if (hasPublishInput(recover)) {
      errors.push(
        "`recover-version` が changesets/action に `publish:` を渡している ── " +
          "このジョブは Version PR を作り直すだけで、npm には触らない",
      );
    }
    if (!/changesets\/action/.test(body)) {
      errors.push("`recover-version` が `changesets/action` を呼んでいない");
    }
    if (!/version:\s+npm run version:packages/.test(body)) {
      errors.push("`recover-version` が `version: npm run version:packages` を渡していない");
    }
  }

  return errors;
}
