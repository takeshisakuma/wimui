import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (theme: string) =>
  `/iframe.html?id=components-buttons-splitbutton--variants&viewMode=story&globals=theme:${theme};locale:en`;

// 主ボタンとトグルの境目に、線が 2 本見えていた（2026-10-06・ユーザーの報告）。
//   - outline: 2px の枠どうしが 1px しか重ならず、境目だけ 3px の帯。その隣に区切りの線（dark でだけ見える）
//   - solid:   トグルの影が主ボタンの面に落ちた暗い線（dark でだけ見える）と、区切りの線
// 境目の線は 1 本にする: solid と ghost は上下に余白のある区切り、outline は重ねた枠。
for (const theme of ["light", "dark"]) {
  test(`SplitButton shows one line between its two buttons (${theme})`, async ({ page }) => {
    await page.goto(url(theme));
    await waitForStoryReady(page);
    const found = await page.evaluate(() =>
      Array.from(document.querySelectorAll(".wim-split-button")).map((root) => {
        const [main, toggle] = Array.from(root.querySelectorAll("button"));
        const style = getComputedStyle(toggle);
        const divider = getComputedStyle(toggle, "::before");
        return {
          overlap: Math.round((main.getBoundingClientRect().right - toggle.getBoundingClientRect().left) * 100) / 100,
          border: parseFloat(style.borderLeftWidth),
          borderVisible: style.borderLeftColor !== "rgba(0, 0, 0, 0)",
          divider: divider.content !== "none",
          dividerUsesTextColor: divider.backgroundColor === style.color,
          shadow: style.boxShadow !== "none",
          clipsShadow: style.clipPath !== "none",
        };
      }),
    );
    // solid / outline / ghost の 3 つが読めていること
    expect(found).toHaveLength(3);
    const [solid, outline, ghost] = found;

    // 枠は、枠の太さぶんだけ重なる（境目が外周より太くならない）
    for (const variant of found) expect(variant.overlap).toBe(variant.border);

    // outline: 重ねた枠が境目。区切りは描かない
    expect(outline.borderVisible).toBe(true);
    expect(outline.divider).toBe(false);

    // solid: 区切りが境目。トグルの影は、主ボタンの側へ落とさない
    expect(solid.borderVisible).toBe(false);
    expect(solid.divider).toBe(true);
    expect(solid.shadow).toBe(true);
    expect(solid.clipsShadow).toBe(true);

    // ghost: 枠も地も無い。区切りは文字の色で引く（白では light で見えない）
    expect(ghost.borderVisible).toBe(false);
    expect(ghost.divider).toBe(true);
    expect(ghost.dividerUsesTextColor).toBe(true);
  });
}
