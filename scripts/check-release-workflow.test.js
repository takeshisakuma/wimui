import { describe, it, expect } from "vitest";
import real from "../.github/workflows/release.yml?raw";
import { auditReleaseYaml, splitJobs } from "./lib/release-workflow.js";

/**
 * 契約を YAML の実物で固定する（T170）。
 *
 * 受け入れは「version が ref 競合で落ちたあと、latest main を取り直して
 * Version PR を作り直すジョブがある」こと。本物の競合は CI でしか起きないので、
 * ジョブを消す・環境ゲートを掛ける・checkout をトリガー SHA に戻す、という
 * **既知の壊れ方**を文字列変異で鳴らす。
 *
 * 鳴ってはいけない経路は「今の release.yml」そのもの。
 */
describe("check-release-workflow (T116 / T170)", () => {
  it("現行の release.yml は契約を満たす", () => {
    const jobs = splitJobs(real);
    // 母数が空だと「検査していないのに緑」になる（T84）。
    expect(Object.keys(jobs).sort()).toEqual([
      "decide",
      "publish",
      "recover-version",
      "version",
    ]);
    expect(auditReleaseYaml(real)).toEqual([]);
  });

  it("recover-version を消すと鳴る（T170 の本体）", () => {
    const mutated = real.replace(
      /\n  recover-version:[\s\S]*?(?=\n  [a-z][a-z0-9_-]*:)/,
      "\n",
    );
    expect(splitJobs(mutated)["recover-version"]).toBeUndefined();
    const errors = auditReleaseYaml(mutated);
    expect(errors.some((e) => e.includes("recover-version"))).toBe(true);
  });

  it("recover-version に environment: release を付けると鳴る（T116 の再発）", () => {
    const mutated = real.replace(
      "    if: ${{ always() && needs.version.result == 'failure' }}\n    runs-on: ubuntu-latest",
      "    if: ${{ always() && needs.version.result == 'failure' }}\n    environment: release\n    runs-on: ubuntu-latest",
    );
    const errors = auditReleaseYaml(mutated);
    expect(errors.some((e) => e.includes("recover-version") && e.includes("environment"))).toBe(
      true,
    );
  });

  it("recover-version の checkout から ref: main を外すと鳴る", () => {
    const mutated = real.replace(
      "      - name: Checkout latest main\n        uses: actions/checkout@v7\n        with:\n          ref: main\n",
      "      - name: Checkout latest main\n        uses: actions/checkout@v7\n",
    );
    const errors = auditReleaseYaml(mutated);
    expect(errors.some((e) => e.includes("ref: main"))).toBe(true);
  });

  it("recover-version が publish: を渡すと鳴る", () => {
    const mutated = real.replace(
      "          # version ジョブと同じ。`publish` は渡さない。\n          version: npm run version:packages\n",
      "          publish: npm run release\n          version: npm run version:packages\n",
    );
    const errors = auditReleaseYaml(mutated);
    expect(errors.some((e) => e.includes("publish:"))).toBe(true);
  });

  it("version ジョブに environment: release を付けると鳴る（T116）", () => {
    const mutated = real.replace(
      "    if: needs.decide.outputs.has_changesets == 'true'\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write\n      pull-requests: write\n",
      "    if: needs.decide.outputs.has_changesets == 'true'\n    environment: release\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write\n      pull-requests: write\n",
    );
    const errors = auditReleaseYaml(mutated);
    expect(errors.some((e) => e.includes("`version`") && e.includes("environment"))).toBe(true);
  });
});
