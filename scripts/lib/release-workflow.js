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
