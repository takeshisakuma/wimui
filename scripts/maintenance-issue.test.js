import { describe, it, expect } from "vitest";
import real from "../MAINTENANCE.md?raw";
import { buildIssue, cadencesFor, isoWeek, parseSections } from "./maintenance-issue.mjs";

const d = (s) => new Date(`${s}T00:00:00Z`);

/**
 * 定期点検の issue（`.github/workflows/maintenance-reminder.yml`）。
 *
 * いちばん悪い壊れ方は「`MAINTENANCE.md` の見出しを書き換えて、チェックリストが
 * 黙って空になる」こと。だから実物の `MAINTENANCE.md` で組み立てて項目数を見るのと、
 * 見出しを消した変異で**落ちる**ことの両方を固定する。
 */
describe("maintenance-issue", () => {
  it("実物の MAINTENANCE.md から毎週・隔週・四半期の項目を読める", () => {
    const s = parseSections(real);
    expect(s.get("毎週")?.length).toBeGreaterThan(0);
    expect(s.get("隔週")?.length).toBeGreaterThan(0);
    expect(s.get("四半期")?.length).toBeGreaterThan(0);
    // コードブロックの中の `## ` / `### ` を見出しに数えない
    for (const items of s.values()) for (const h of items) expect(h).not.toMatch(/^#/);
  });

  it("週によって出す区分が変わる", () => {
    // 2026-09-21（月）は ISO 39 週＝奇数 → 毎週だけ
    expect(isoWeek(d("2026-09-21"))).toBe(39);
    expect(cadencesFor(d("2026-09-21"))).toEqual(["毎週"]);
    // 2026-09-28（月）は 40 週＝偶数 → 隔週も。10/1〜10/4 を含むので四半期も
    expect(cadencesFor(d("2026-09-28"))).toEqual(["毎週", "隔週", "四半期"]);
    // 週の途中の日付でも、その週の月曜で判定する
    expect(cadencesFor(d("2026-10-02"))).toEqual(cadencesFor(d("2026-09-28")));
    // 四半期は 10/1 を含む週だけ。次の週（10/5）には出ない＝四半期に 1 回
    expect(cadencesFor(d("2026-10-05"))).not.toContain("四半期");
    // 1 日が日曜でも、その日を含む週（月曜始まり）で出る。2028-10-01 は日曜で、週の月曜は 09-25
    expect(cadencesFor(d("2028-09-25"))).toContain("四半期");
    // 1 年で四半期が出る週はちょうど 4 回
    let n = 0;
    for (let t = d("2027-01-04").getTime(); t < d("2028-01-03").getTime(); t += 7 * 86400000) if (cadencesFor(new Date(t)).includes("四半期")) n++;
    expect(n).toBe(4);
  });

  it("本文はその週の区分の項目をチェックボックスで並べ、リリース前は出さない", () => {
    const { title, body } = buildIssue(real, d("2026-09-28"));
    expect(title).toBe("[定期点検] 2026-09-28 の週（毎週 + 隔週 + 四半期）");
    const boxes = body.split("\n").filter((l) => l.startsWith("- [ ] "));
    const s = parseSections(real);
    expect(boxes.length).toBe(s.get("毎週").length + s.get("隔週").length + s.get("四半期").length);
    for (const h of s.get("リリース前")) expect(body).not.toContain(`- [ ] ${h}`);
  });

  it("閉じていない前回の点検を本文に並べる", () => {
    const { body } = buildIssue(real, d("2026-09-21"), {
      openIssues: [{ number: 12, title: "[定期点検] 2026-09-14 の週（毎週 + 隔週）" }],
    });
    expect(body).toContain("- #12 [定期点検] 2026-09-14 の週");
  });

  it("区分の見出しが消えたら落ちる（黙って空の issue を立てない）", () => {
    const mutated = real.replace(/^## 隔週$/m, "## 二週ごと");
    expect(mutated).not.toBe(real);
    expect(() => buildIssue(mutated, d("2026-09-21"))).toThrow(/隔週/);
  });

  it("区分の中の項目が 0 件なら落ちる", () => {
    const mutated = real.replace(/^## 毎週\n[\s\S]*?(?=^## 隔週$)/m, "## 毎週\n\n本文だけ\n\n");
    expect(mutated).not.toBe(real);
    expect(() => buildIssue(mutated, d("2026-09-21"))).toThrow(/毎週/);
  });
});
