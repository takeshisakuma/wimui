import { chromium, expect, test } from "@playwright/test";

const STORY_URL =
  "http://localhost:6006/iframe.html?id=components-overlays-dialog--default&viewMode=story&globals=locale:en";

/**
 * Playwright の既定は `--hide-scrollbars` で、スクロールバーが消えてページが
 * 横にずれる欠陥が写らない（T395）。ここだけ、その引数を外して起動する。
 */
test("opening a dialog does not shift the page by the scrollbar width", async () => {
  const browser = await chromium.launch({
    ignoreDefaultArgs: ["--hide-scrollbars"],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  try {
    await page.goto(STORY_URL);
    await page.waitForLoadState("networkidle");
    const trigger = page.getByRole("button", { name: "Open Dialog" });
    await expect(trigger).toBeVisible();

    const before = await page.evaluate(() => {
      document.documentElement.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.minHeight = "0";
      const bar = document.createElement("div");
      bar.id = "t395-bar";
      bar.style.cssText = "display:flex;justify-content:flex-end;width:100%;";
      const marker = document.createElement("div");
      marker.id = "t395-marker";
      marker.style.cssText = "width:8px;height:8px;";
      bar.appendChild(marker);
      const spacer = document.createElement("div");
      spacer.style.height = "4000px";
      document.body.append(bar, spacer);
      const opener = [...document.querySelectorAll("button")].find((button) =>
        button.textContent?.includes("Open Dialog"),
      );
      if (opener) opener.id = "t395-trigger";
      return {
        gap: window.innerWidth - document.documentElement.clientWidth,
        triggerX: opener?.getBoundingClientRect().x ?? null,
        markerRight: marker.getBoundingClientRect().right,
      };
    });

    expect(before.gap).toBeGreaterThan(0);
    expect(before.triggerX).not.toBeNull();

    await trigger.click();
    await expect(page.getByRole("dialog")).toBeVisible();

    const after = await page.evaluate(() => {
      const marker = document.getElementById("t395-marker");
      const opener = document.getElementById("t395-trigger");
      return {
        overflow: document.body.style.overflow,
        triggerX: opener?.getBoundingClientRect().x ?? null,
        markerRight: marker?.getBoundingClientRect().right ?? null,
      };
    });

    expect(after.overflow).toBe("hidden");
    expect(after.triggerX).not.toBeNull();
    expect(Math.abs((after.triggerX ?? 0) - (before.triggerX ?? 0))).toBeLessThan(1);
    expect(after.markerRight).not.toBeNull();
    expect(Math.abs((after.markerRight ?? 0) - before.markerRight)).toBeLessThan(1);
  } finally {
    await browser.close();
  }
});
