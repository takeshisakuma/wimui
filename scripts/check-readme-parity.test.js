import { describe, it, expect } from "vitest";
import en from "../README.md?raw";
import ja from "../README.ja.md?raw";
import { compare, codeSkeleton } from "./check-readme-parity.mjs";

/**
 * README の対訳ガード（check:readme-parity）。
 *
 * 鳴ってはいけない経路 = 今の README 2 つと、「訳しただけ」の違い（コメント・表示文字列）。
 * 鳴るべき経路 = 入れた日に実在したずれ（日本語版だけ囲みが抜けた）と、片方だけ直した形。
 */
const F = "```";
const mutateJa = (a, b) => {
  expect(ja).toContain(a);
  return ja.replace(a, b);
};

describe("check-readme-parity", () => {
  it("今の README.md / README.ja.md はずれていない", () => {
    expect(compare(en, ja)).toEqual([]);
  });

  it("訳しただけの違いでは鳴らない（コメント・JSX の表示文字列）", () => {
    expect(codeSkeleton('import "x"; // required')).toBe(codeSkeleton('import "x"; // 必須'));
    expect(codeSkeleton("<Button>Save</Button>;")).toBe(codeSkeleton("<Button>保存</Button>;"));
    expect(codeSkeleton("<html>  <!-- force dark -->")).toBe(codeSkeleton("<html>  <!-- ダーク固定 -->"));
    expect(codeSkeleton("a: 1; /* for rgba */")).toBe(codeSkeleton("a: 1; /* rgba 用 */"));
  });

  it("入れた日の実物: 日本語版だけコードブロックの囲みが抜けると鳴る", () => {
    const broken = mutateJa(`${F}bash\ngit switch -c feat/my-change`, "git switch -c feat/my-change");
    expect(compare(en, broken).join("\n")).toMatch(/コードブロック/);
  });

  it("片方だけコードを変えると鳴る", () => {
    const broken = mutateJa("git push -u origin feat/my-change", "git push origin main");
    expect(compare(en, broken).join("\n")).toMatch(/中身が違う/);
  });

  it("片方だけ見出しを足すと鳴る", () => {
    const broken = mutateJa("## ワークフロー", "## 追加の節\n\n本文\n\n## ワークフロー");
    expect(compare(en, broken).join("\n")).toMatch(/見出しの並び/);
  });

  it("片方だけ表の行を消すと鳴る", () => {
    const lines = ja.split("\n");
    const i = lines.findIndex((l, k) => /^\|/.test(l) && /^\|/.test(lines[k + 1] || "") && /^\|/.test(lines[k + 2] || "") && /^\|/.test(lines[k + 3] || ""));
    expect(i).toBeGreaterThan(-1);
    lines.splice(i + 3, 1);
    expect(compare(en, lines.join("\n")).join("\n")).toMatch(/表の形/);
  });

  it("片方だけリンクを足すと鳴る", () => {
    const broken = mutateJa("## ワークフロー", "[新しいリンク](./docs/new.md)\n\n## ワークフロー");
    expect(compare(en, broken).join("\n")).toMatch(/リンク先/);
  });
});
