import { describe, it, expect } from "vitest";
import real from "../.github/workflows/release.yml?raw";
import {
  auditChangesetsPairing,
  auditReleaseYaml,
  splitJobs,
} from "./lib/release-workflow.js";

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

/**
 * changesets の CLI と action の組み合わせ（T201）。
 *
 * 片方だけ上げた PR をここで止める。**とくに `cli 3 + action v1` は
 * npm publish が成功したままタグと GitHub Release だけが黙って作られなくなる**ので、
 * CI が赤にならない＝人が気付く機会が無い。だから「上げる時期」を決め打ちするより、
 * **ずれた組み合わせが着地できない**ようにするほうが効く。
 *
 * 鳴ってはいけない経路は「今の release.yml と今の package.json」。
 */
describe("changesets の CLI と action の組み合わせ (T201)", () => {
  it("現行の組み合わせ（action v1 + cli 2 系）は鳴らない", () => {
    // 母数の確認: 参照が 1 つも無いと「検査していないのに緑」になる
    expect(real).toMatch(/uses:\s*changesets\/action@v1/);
    expect(auditChangesetsPairing(real, "2.31.1")).toEqual([]);
    expect(auditChangesetsPairing(real, "^2.31.1")).toEqual([]);
  });

  it("cli だけ 3 に上げると鳴る（**赤が出ない**向き）", () => {
    const errors = auditChangesetsPairing(real, "3.0.0");
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain("赤が出ない");
    expect(errors[0]).toContain("タグと GitHub Release");
  });

  it("action だけ v2 に上げると鳴る（落ちる向き）", () => {
    const mutated = real.replaceAll("uses: changesets/action@v1", "uses: changesets/action@v2");
    const errors = auditChangesetsPairing(mutated, "2.31.1");
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain("action 側が cli の版を検出して落ちる");
  });

  it("両方そろえれば鳴らない（上げ方の正解を固定する）", () => {
    const mutated = real.replaceAll("uses: changesets/action@v1", "uses: changesets/action@v2");
    expect(auditChangesetsPairing(mutated, "3.0.0")).toEqual([]);
  });

  it("version 経路と publish 経路で major が混ざると鳴る", () => {
    const mutated = real.replace("uses: changesets/action@v1", "uses: changesets/action@v2");
    const errors = auditChangesetsPairing(mutated, "2.31.1");
    expect(errors.some((e) => e.includes("混在"))).toBe(true);
  });

  it("参照が読めなくなったら鳴る（書式変更を素通りさせない）", () => {
    const mutated = real.replaceAll("uses: changesets/action@v1", "uses: some/other-action@v1");
    const errors = auditChangesetsPairing(mutated, "2.31.1");
    expect(errors.some((e) => e.includes("読めない"))).toBe(true);
  });
});
