import { describe, it, expect } from "vitest";
import source from "../docs/rules/quality-gates.md?raw";
import template from "../.github/pull_request_template.md?raw";
import pkg from "../package.json";
import scaffold from "./scaffold-component.js?raw";
import { compare, readGateCommands } from "./check-quality-gates.mjs";

/**
 * 品質ゲートの正本（check:quality-gates）。
 *
 * 鳴ってはいけない経路 = 今の正本と PR テンプレート。
 * 鳴るべき経路 = 入れた日に実在したずれ（PR テンプレートに check:prop-api /
 * check:a11y-incomplete が無かった）と、存在しない script 名。
 */
const scripts = new Set(Object.keys(pkg.scripts));
const run = (t = template, s = source) => compare({ source: s, template: t, scripts }).bad;

describe("check-quality-gates", () => {
  it("今の正本と PR テンプレートは一致し、コマンドはすべて実在する", () => {
    expect(run()).toEqual([]);
  });

  it("入れた日の実物: PR テンプレートから check:prop-api が抜けると鳴る", () => {
    const broken = template.split("\n").filter((l) => !l.includes("npm run check:prop-api")).join("\n");
    expect(broken).not.toBe(template);
    expect(run(broken).join("\n")).toMatch(/check:prop-api.*PR テンプレートに無い/);
  });

  it("PR テンプレートにだけ足すと鳴る", () => {
    const broken = template.replace("- [ ] `npm run check:api`", "- [ ] `npm run check:tokens`\n- [ ] `npm run check:api`");
    expect(run(broken).join("\n")).toMatch(/check:tokens.*正本に無い/);
  });

  it("存在しない script 名を書くと鳴る（今日の check:code-examples と同じ形）", () => {
    const broken = source.replace("`npm run audit-mdx`", "`npm run audit-mdx` / `npm run check:code-examples`");
    const t = template.replace("`npm run audit-mdx`", "`npm run audit-mdx` / `npm run check:code-examples`");
    expect(run(t, broken).join("\n")).toMatch(/check:code-examples.*package\.json に無い/);
  });

  it("scaffold は一覧を直書きせず、正本から読む", () => {
    expect(scaffold).toContain("readGateCommands(");
    expect(scaffold).not.toMatch(/console\.log\(`\s+npm run check:api`\)/);
    expect(readGateCommands(source)).toContain("check:prop-api");
  });
});
