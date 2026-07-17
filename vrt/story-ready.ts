import type { Page } from "@playwright/test";

const STORY_READY_TIMEOUT_MS = 30_000;

/**
 * Wait until the Storybook iframe has actually mounted the story.
 * `networkidle` alone races code-split story chunks on CI (empty #storybook-root).
 * Under heavy local parallelism the Vite Storybook preview can stick on the
 * preparing spinner with an empty root — reload once before failing.
 */
export async function waitForStoryReady(page: Page) {
  const waitForMountedStory = async () => {
    await page.locator("#storybook-root").waitFor({
      state: "attached",
      timeout: STORY_READY_TIMEOUT_MS,
    });
    await page.waitForFunction(
      () => {
        const root = document.getElementById("storybook-root");
        return !!root && root.childElementCount > 0;
      },
      undefined,
      { timeout: STORY_READY_TIMEOUT_MS },
    );
  };

  try {
    await waitForMountedStory();
  } catch {
    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForMountedStory();
  }

  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener("load", () => resolve(), { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            }),
      ),
    );
  });
  // One frame for layout (ResizeObserver / Recharts measure) after paint.
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );
}
