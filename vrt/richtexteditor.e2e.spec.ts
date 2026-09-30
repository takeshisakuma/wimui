import { test, expect } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const WITH_DEFAULT_STORY =
  "components-basic-inputs-richtexteditor--with-default-value";
const BASIC_STORY = "components-basic-inputs-richtexteditor--basic";

const editorLocator = '[contenteditable="true"]';

/** エディタ内の最初のテキストノードの一部を選択する */
const selectInEditor = (page: import("@playwright/test").Page, start: number, end: number) =>
  page.evaluate(
    ([s, e]) => {
      const editor = document.querySelector('[contenteditable="true"]') as HTMLElement;
      const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
      const text = walker.nextNode() as Text;
      const range = document.createRange();
      range.setStart(text, s);
      range.setEnd(text, Math.min(e, text.length));
      const selection = window.getSelection()!;
      selection.removeAllRanges();
      selection.addRange(range);
      editor.focus();
    },
    [start, end],
  );

test.describe("RichTextEditor (Tiptap)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL(WITH_DEFAULT_STORY));
    await page.waitForLoadState("networkidle");
    await expect(page.locator(editorLocator)).toBeVisible();
  });

  test("bold toggles <strong> on the selection and toolbar shows active state", async ({ page }) => {
    await selectInEditor(page, 0, 5);
    const boldBtn = page.getByRole("button", { name: "Bold" });
    await boldBtn.click();
    await expect(page.locator(`${editorLocator} strong`).first()).toBeVisible();
    await expect(boldBtn).toHaveAttribute("aria-pressed", "true");

    // 再度押すと解除される
    await boldBtn.click();
    await expect(page.locator(`${editorLocator} strong`)).toHaveCount(0);
  });

  test("heading command converts the current block", async ({ page }) => {
    await selectInEditor(page, 0, 3);
    await page.getByRole("button", { name: "Heading 1" }).click();
    await expect(page.locator(`${editorLocator} h1`).first()).toBeVisible();
    // 同じ見出しをもう一度押すと p に戻る
    await page.getByRole("button", { name: "Heading 1" }).click();
    await expect(page.locator(`${editorLocator} h1`)).toHaveCount(0);
  });

  test("list command wraps the block into a ul", async ({ page }) => {
    await selectInEditor(page, 0, 3);
    await page.getByRole("button", { name: "Bullet list" }).click();
    await expect(page.locator(`${editorLocator} ul > li`).first()).toBeVisible();
  });

  test("link dialog inserts an anchor (no window.prompt)", async ({ page }) => {
    // window.prompt が呼ばれたら失敗させる
    await page.evaluate(() => {
      window.prompt = () => {
        throw new Error("window.prompt must not be used");
      };
    });
    await selectInEditor(page, 0, 5);
    await page.getByRole("button", { name: "Insert link" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    const urlInput = dialog.getByRole("textbox");
    await urlInput.fill("https://example.com/docs");
    await dialog.getByRole("button", { name: "Apply" }).click();

    const anchor = page.locator(`${editorLocator} a[href="https://example.com/docs"]`);
    await expect(anchor).toBeVisible();
  });

  test("link dialog cancel leaves content unchanged", async ({ page }) => {
    const before = await page.locator(editorLocator).innerHTML();
    await selectInEditor(page, 0, 5);
    await page.getByRole("button", { name: "Insert link" }).click();
    await page.getByRole("dialog").getByRole("button", { name: "Cancel" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    expect(await page.locator(editorLocator).innerHTML()).toBe(before);
  });

  test("Ctrl+Z undoes and Ctrl+Y redoes a toolbar command", async ({ page }) => {
    const editor = page.locator(editorLocator);
    const before = await editor.innerHTML();

    await selectInEditor(page, 0, 5);
    await page.getByRole("button", { name: "Bold" }).click();
    await expect(editor.locator("strong").first()).toBeVisible();

    await editor.click();
    await page.keyboard.press("ControlOrMeta+z");
    expect(await editor.innerHTML()).toBe(before);

    await page.keyboard.press("ControlOrMeta+y");
    await expect(editor.locator("strong").first()).toBeVisible();
  });

  test("typing works and is undoable", async ({ page }) => {
    await page.goto(STORY_URL(BASIC_STORY));
    await page.waitForLoadState("networkidle");
    const editor = page.locator(editorLocator);
    await editor.click();
    await editor.pressSequentially("Hello");
    await expect(editor).toContainText("Hello");

    // 入力の履歴は間が空いたところで区切られる（ProseMirror の newGroupDelay）ので、区切りを待ってから undo
    await page.waitForTimeout(600);
    await page.keyboard.press("ControlOrMeta+z");
    await expect(editor).not.toContainText("Hello");
  });
});

// ---- T278: 日本語の変換（IME）── contentEditable を自前で操作する実装が最もつまずく所 ----
// Playwright のキーボード API は変換中の状態を作れないので、Chrome の DevTools Protocol で作る。
test.describe("RichTextEditor IME composition", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL(BASIC_STORY));
    await page.waitForLoadState("networkidle");
    await page.locator(editorLocator).click();
  });

  test("commits the converted text once, without the reading", async ({ page }) => {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Input.imeSetComposition", { text: "にほん", selectionStart: 3, selectionEnd: 3 });
    await cdp.send("Input.imeSetComposition", { text: "日本", selectionStart: 2, selectionEnd: 2 });
    await cdp.send("Input.insertText", { text: "日本" });
    const editor = page.locator(editorLocator);
    await expect(editor).toHaveText("日本");
    expect(await editor.innerHTML()).toBe("<p>日本</p>");
  });

  test("cancelling the composition leaves nothing behind", async ({ page }) => {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Input.imeSetComposition", { text: "にほん", selectionStart: 3, selectionEnd: 3 });
    await cdp.send("Input.imeSetComposition", { text: "", selectionStart: 0, selectionEnd: 0 });
    const editor = page.locator(editorLocator);
    await expect(editor).toHaveText("");
    await expect(editor.locator("p")).toHaveCount(1);
  });

  test("Enter that commits a composition does not start a new paragraph", async ({ page }) => {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Input.imeSetComposition", { text: "にほん", selectionStart: 3, selectionEnd: 3 });
    // 変換中の Enter は IME の確定に使われる（keyCode 229 の keydown として届く）
    await cdp.send("Input.dispatchKeyEvent", { type: "rawKeyDown", key: "Enter", code: "Enter", windowsVirtualKeyCode: 229 });
    await cdp.send("Input.insertText", { text: "日本" });
    await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
    const editor = page.locator(editorLocator);
    await expect(editor).toHaveText("日本");
    await expect(editor.locator("p")).toHaveCount(1);
  });

  test("text typed after a commit continues the same paragraph and undo removes it", async ({ page }) => {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Input.imeSetComposition", { text: "にほん", selectionStart: 3, selectionEnd: 3 });
    await cdp.send("Input.insertText", { text: "日本" });
    await page.keyboard.type("go");
    const editor = page.locator(editorLocator);
    await expect(editor).toHaveText("日本go");
    await page.waitForTimeout(600);
    await page.keyboard.press("ControlOrMeta+z");
    await expect(editor).toHaveText("");
  });
});

// ---- T278: 貼り付けた HTML もスキーマに通る ── script / on* / javascript: は残らない ----
test.describe("RichTextEditor paste sanitizing", () => {
  test("pasted HTML keeps allowed formatting and drops everything else", async ({ page }) => {
    await page.goto(STORY_URL(BASIC_STORY));
    await page.waitForLoadState("networkidle");
    const editor = page.locator(editorLocator);
    await editor.click();
    await page.evaluate(() => {
      const target = document.querySelector('[contenteditable="true"]') as HTMLElement;
      const data = new DataTransfer();
      data.setData(
        "text/html",
        '<p onclick="window.__pwned=1"><strong>kept</strong><script>window.__pwned=2</script>' +
          '<img src="x" onerror="window.__pwned=3"><a href="javascript:window.__pwned=4">bad</a> ' +
          '<a href="https://ok.example/">good</a><iframe src="https://evil.example"></iframe></p>',
      );
      data.setData("text/plain", "kept bad good");
      target.dispatchEvent(new ClipboardEvent("paste", { clipboardData: data, bubbles: true, cancelable: true }));
    });
    await expect(editor.locator("strong")).toHaveText("kept");
    const html = await editor.innerHTML();
    expect(html).not.toMatch(/<script|<img|<iframe|onclick|onerror|javascript:/i);
    expect(html).toContain('<a href="https://ok.example/">good</a>');
    expect(await page.evaluate(() => (window as unknown as { __pwned?: number }).__pwned)).toBeUndefined();
  });
});
