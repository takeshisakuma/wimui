import { test, expect } from "@playwright/test";

/**
 * T394: `allowDecimal={false}` の NumberInput に、小数をコンマで書く言語のブラウザでも小数が入らないこと。
 *
 * `<input type="number">` は、ブラウザの表示言語が pt-BR や de のとき、"," を小数点として受け取る。
 * 以前は "." のキーだけを止めていたので、`1,5` と打つと値が 1.5 になった。en-US のブラウザは
 * コンマを自分で捨てるので、既定の言語で流す E2E にも、キーを偽る単体テストにも写らない ──
 * ブラウザを pt-BR で起動して、本物の入力で確かめる。
 *
 * 表示言語の決まり方は OS で違う。Windows と macOS の Chromium は `--lang` を読むが、Linux は
 * 環境変数 `LANGUAGE` から決める（`--lang` だけだと CI では en-US のままで、下の対照が落ちた）。
 * 両方を渡す。
 */
test.use({
  locale: "pt-BR",
  launchOptions: { args: ["--lang=pt-BR"], env: { ...(process.env as Record<string, string>), LANGUAGE: "pt_BR" } },
});

const story = (name: string) => `/iframe.html?id=components-basic-inputs-numberinput--${name}&viewMode=story&globals=locale:en`;

test.describe("NumberInput: decimals in a browser that writes them with a comma", () => {
  test("allowDecimal={false} does not take a comma or a period", async ({ page }) => {
    await page.goto(story("default"));
    await page.waitForLoadState("networkidle");
    const input = page.locator("#storybook-root input").first();
    await input.focus();

    await page.keyboard.type("1,5");
    expect(await input.evaluate((el: HTMLInputElement) => el.valueAsNumber)).toBe(15);

    await input.fill("");
    await page.keyboard.type("1.5");
    expect(await input.evaluate((el: HTMLInputElement) => el.valueAsNumber)).toBe(15);
  });

  test("allowDecimal takes the comma as the decimal separator (the control: this browser does read it that way)", async ({ page }) => {
    await page.goto(story("decimal-and-negative"));
    await page.waitForLoadState("networkidle");
    const input = page.locator("#storybook-root input").first();
    await input.focus();

    await page.keyboard.type("1,5");
    expect(await input.evaluate((el: HTMLInputElement) => el.valueAsNumber)).toBe(1.5);
  });
});
