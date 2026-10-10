import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const URL = "/iframe.html?id=components-advanced-inputs-imagecropper--crop-result&viewMode=story&globals=locale:en";

// T334: `onCrop` / `onApply` は、切り抜かずに元の画像の URL をそのまま返していた。
// ここで見るのは「返ってきた画像が、画面の枠の中に見えているものと同じか」。計算の向きや原点を
// 1 つ間違えると、ユニットテスト（描く順番を見るだけ）は通るのに、絵がずれる。

/** 比べる格子の細かさ。枠（200px）を 8×8 に割り、マスごとの平均の色を比べる。 */
const GRID = 8;
/** マスの平均の色の差（0〜255）の上限。拡大・回転では補間が入るので、等倍より緩い。 */
const TOLERANCE = 14;

async function open(page: Page) {
  await page.goto(URL);
  await waitForStoryReady(page);
  await page.waitForFunction(() => {
    const img = document.querySelector<HTMLImageElement>('[role="application"] img');
    return !!img && img.complete && img.naturalWidth > 0;
  });
}

/** 枠の中に見えている絵。枠の外を暗くする幕と、枠の線は外して撮る。 */
async function shootFrame(page: Page) {
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
  const clip = await page.evaluate(() => {
    const viewer = document.querySelector('[role="application"]')!;
    const overlay = viewer.lastElementChild as HTMLElement;
    const frame = overlay.firstElementChild as HTMLElement;
    overlay.style.background = "none";
    frame.style.boxShadow = "none";
    frame.style.borderColor = "transparent";
    const r = frame.getBoundingClientRect();
    return { x: r.left + frame.clientLeft, y: r.top + frame.clientTop, width: frame.clientWidth, height: frame.clientHeight };
  });
  const shot = await page.screenshot({ clip });
  await page.evaluate(() => {
    const viewer = document.querySelector('[role="application"]')!;
    const overlay = viewer.lastElementChild as HTMLElement;
    const frame = overlay.firstElementChild as HTMLElement;
    overlay.style.background = "";
    frame.style.boxShadow = "";
    frame.style.borderColor = "";
  });
  return { clip, dataUrl: `data:image/png;base64,${shot.toString("base64")}` };
}

async function apply(page: Page) {
  await page.getByRole("button", { name: "Apply Crop" }).click();
  await page.getByRole("dialog").getByRole("button", { name: "Apply", exact: true }).click();
  const output = page.getByTestId("crop-output");
  await expect(output).toBeVisible();
  await page.waitForFunction(() => {
    const img = document.querySelector<HTMLImageElement>('[data-testid="crop-output"]');
    return !!img && img.complete && img.naturalWidth > 0;
  });
  return page.evaluate(() => {
    const img = document.querySelector<HTMLImageElement>('[data-testid="crop-output"]')!;
    const detail = JSON.parse(document.querySelector('[data-testid="crop-detail"]')!.getAttribute("data-detail")!);
    const source = document.querySelector<HTMLImageElement>('[role="application"] img')!;
    return { src: img.src, width: img.naturalWidth, height: img.naturalHeight, detail, layoutWidth: source.offsetWidth };
  });
}

/** 2 枚の絵を同じ格子に縮めて、マスごとの平均の色の差の最大を返す。 */
async function maxCellDiff(page: Page, a: string, b: string) {
  return page.evaluate(
    async ([first, second, grid]) => {
      const cells = async (src: string) => {
        const img = new Image();
        img.src = src as string;
        await img.decode();
        const n = grid as number;
        // 大きいまま 1 px ずつ読んで、マスごとに平均する（縮小の補間に頼らない）
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const out: number[][] = [];
        for (let gy = 0; gy < n; gy += 1)
          for (let gx = 0; gx < n; gx += 1) {
            const x0 = Math.floor((gx * canvas.width) / n);
            const x1 = Math.floor(((gx + 1) * canvas.width) / n);
            const y0 = Math.floor((gy * canvas.height) / n);
            const y1 = Math.floor(((gy + 1) * canvas.height) / n);
            let r = 0, g = 0, bl = 0, count = 0;
            for (let y = y0; y < y1; y += 1)
              for (let x = x0; x < x1; x += 1) {
                const i = (y * canvas.width + x) * 4;
                r += data[i]; g += data[i + 1]; bl += data[i + 2]; count += 1;
              }
            out.push([r / count, g / count, bl / count]);
          }
        return out;
      };
      const [ca, cb] = [await cells(first as string), await cells(second as string)];
      let max = 0;
      for (let i = 0; i < ca.length; i += 1) for (let c = 0; c < 3; c += 1) max = Math.max(max, Math.abs(ca[i][c] - cb[i][c]));
      return max;
    },
    [a, b, GRID] as const,
  );
}

const viewer = (page: Page) => page.getByRole("application", { name: "Image position" });

const CASES: Array<{ name: string; zoom: number; act: (page: Page) => Promise<void> }> = [
  { name: "the default position", zoom: 1, act: async () => {} },
  {
    name: "a moved image",
    zoom: 1,
    act: async (page) => {
      await viewer(page).focus();
      await page.keyboard.press("Shift+ArrowRight");
      await page.keyboard.press("ArrowUp");
      await page.keyboard.press("ArrowUp");
      await page.keyboard.press("ArrowUp");
    },
  },
  {
    name: "a zoomed image",
    zoom: 2,
    act: async (page) => {
      await page.getByRole("slider").focus();
      for (let i = 0; i < 10; i += 1) await page.keyboard.press("ArrowRight");
    },
  },
  {
    name: "a rotated image",
    zoom: 1,
    act: async (page) => {
      await page.getByRole("button", { name: "Rotate" }).click();
    },
  },
  {
    name: "a moved, zoomed and rotated image",
    zoom: 2,
    act: async (page) => {
      await page.getByRole("button", { name: "Rotate" }).click();
      await page.getByRole("slider").focus();
      for (let i = 0; i < 10; i += 1) await page.keyboard.press("ArrowRight");
      await viewer(page).focus();
      await page.keyboard.press("Shift+ArrowLeft");
      await page.keyboard.press("Shift+ArrowDown");
    },
  },
];

test.describe("ImageCropper returns what the frame shows", () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  for (const c of CASES) {
    test(`the output matches the frame for ${c.name}`, async ({ page }) => {
      await open(page);
      await c.act(page);
      const frame = await shootFrame(page);
      const out = await apply(page);

      // 数値: 画面の状態がそのまま返る。出力は、枠が覆っている元の画像の大きさ
      expect(out.detail.zoom).toBeCloseTo(c.zoom, 5);
      expect(out.detail.frameWidth).toBe(frame.clip.width);
      const naturalPerCss = out.detail.naturalWidth / out.layoutWidth;
      expect(out.width).toBe(Math.round((frame.clip.width * naturalPerCss) / c.zoom));
      expect(out.width).toBe(out.detail.width);
      expect(out.height).toBe(out.detail.height);
      // 元の画像をそのまま返していない
      expect(out.src.startsWith("data:image/png")).toBe(true);

      expect(await maxCellDiff(page, frame.dataUrl, out.src)).toBeLessThan(TOLERANCE);
    });
  }

  // 対照: 位置が 50px ずれた絵と比べると、差が出る。出なければ、上の比較は何も確かめていない
  test("the comparison rings when the frame shows a different part of the image", async ({ page }) => {
    await open(page);
    const before = await shootFrame(page);
    await viewer(page).focus();
    await page.keyboard.press("Shift+ArrowRight");
    const out = await apply(page);
    expect(await maxCellDiff(page, before.dataUrl, out.src)).toBeGreaterThan(TOLERANCE * 2);
  });
});
