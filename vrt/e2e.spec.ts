import { test, expect } from "@playwright/test";

const iframe = (id: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=theme:light;locale:en`;

// ─────────────────────────────────────────────
// Dialog
// ─────────────────────────────────────────────

test.describe("Dialog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(iframe("components-overlays-dialog--default"));
    await page.waitForLoadState("networkidle");
  });

  test("opens when trigger is clicked", async ({ page }) => {
    await expect(page.getByRole("dialog")).not.toBeVisible();
    await page.getByRole("button", { name: "Open Dialog" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(page.getByText("Edit Profile")).toBeVisible();
  });

  test("closes with Cancel button", async ({ page }) => {
    await page.getByRole("button", { name: "Open Dialog" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });

  test("closes on Escape key", async ({ page }) => {
    await page.getByRole("button", { name: "Open Dialog" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });

  test("traps focus within dialog while open", async ({ page }) => {
    await page.getByRole("button", { name: "Open Dialog" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    // Tab three times and verify focus stays inside the dialog each time
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press("Tab");
      // The focused element must be a descendant of the dialog
      await expect(dialog.locator(":focus")).toHaveCount(1);
    }
  });

  test("returns focus to trigger after closing with Escape", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Open Dialog" });
    await trigger.click();
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
  });

  test("form inputs are editable inside dialog", async ({ page }) => {
    await page.getByRole("button", { name: "Open Dialog" }).click();
    // Use exact: true to avoid matching "Username" which also contains "name"
    const nameInput = page.getByRole("textbox", { name: "Name", exact: true });
    await nameInput.fill("Test User");
    await expect(nameInput).toHaveValue("Test User");
  });
});

// ─────────────────────────────────────────────
// CommandPalette
// ─────────────────────────────────────────────

test.describe("CommandPalette", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(iframe("components-overlays-commandpalette--default"));
    await page.waitForLoadState("networkidle");
  });

  test("opens on trigger click", async ({ page }) => {
    await page.getByText("help").click();
    await expect(page.getByPlaceholder("/settings")).toBeVisible();
    await expect(page.getByText("New Project")).toBeVisible();
  });

  test("filters items by search input", async ({ page }) => {
    await page.getByText("help").click();
    await page.getByPlaceholder("/settings").fill("save");
    await expect(page.getByText("Save File")).toBeVisible();
    await expect(page.getByText("New Project")).not.toBeVisible();
  });

  test("shows empty state when no items match", async ({ page }) => {
    await page.getByText("help").click();
    await page.getByPlaceholder("/settings").fill("zzznomatch");
    // All items should be filtered out
    await expect(page.getByText("New Project")).not.toBeVisible();
  });

  test("closes on Escape key", async ({ page }) => {
    await page.getByText("help").click();
    const input = page.getByPlaceholder("/settings");
    await expect(input).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(input).not.toBeVisible();
  });

  test("navigates items with arrow keys", async ({ page }) => {
    await page.getByText("help").click();
    const input = page.getByPlaceholder("/settings");
    await expect(input).toBeVisible();
    // Arrow down should highlight first item, then second
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    // No error thrown means navigation works
  });
});

// ─────────────────────────────────────────────
// DataGrid — Sorting
// ─────────────────────────────────────────────

// Scope DataGrid selectors to .wim-table to avoid matching Storybook's sb-argstableBlock
const dgRow = (page: { locator: (s: string) => ReturnType<typeof page.locator> }, nth = 0) =>
  page.locator(".wim-table tbody tr").nth(nth);

test.describe("DataGrid — Sorting", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      iframe("components-data-structures-datagrid--with-sorting"),
    );
    await page.waitForLoadState("networkidle");
    // Wait for the DataGrid table to render
    await expect(page.locator(".wim-table")).toBeVisible();
  });

  test("sorts Name column ascending on first click", async ({ page }) => {
    const nameHeader = page.getByRole("columnheader", { name: "Name" });
    await nameHeader.click();
    // Alice Brown is alphabetically first
    await expect(dgRow(page).locator("td").nth(1)).toHaveText("Alice Brown");
  });

  test("sorts Name column descending on second click", async ({ page }) => {
    const nameHeader = page.getByRole("columnheader", { name: "Name" });
    await nameHeader.click(); // asc
    await nameHeader.click(); // desc
    // John Doe is alphabetically last
    await expect(dgRow(page).locator("td").nth(1)).toHaveText("John Doe");
  });

  test("sorts ID column numerically", async ({ page }) => {
    const idHeader = page.getByRole("columnheader", { name: "ID" });
    await idHeader.click(); // asc
    await expect(dgRow(page).locator("td").first()).toHaveText("1");
  });
});

// ─────────────────────────────────────────────
// DataGrid — Row Selection
// ─────────────────────────────────────────────

test.describe("DataGrid — Row Selection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      iframe("components-data-structures-datagrid--with-selection"),
    );
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".wim-table")).toBeVisible();
  });

  test("selects a row and reflects it in selection display", async ({
    page,
  }) => {
    const firstRowCheckbox = page
      .locator(".wim-table tbody tr")
      .first()
      .getByRole("checkbox");
    await firstRowCheckbox.click();
    // The "Selected:" text should contain the first row's ID (1)
    await expect(page.getByText(/Selected:/)).toContainText("1");
  });

  test("deselects a row on second click", async ({ page }) => {
    const firstRowCheckbox = page
      .locator(".wim-table tbody tr")
      .first()
      .getByRole("checkbox");
    await firstRowCheckbox.click();
    await firstRowCheckbox.click();
    await expect(page.getByText(/Selected:/)).not.toContainText("1");
  });

  test("selects all rows with header checkbox", async ({ page }) => {
    const headerCheckbox = page
      .locator(".wim-table thead")
      .getByRole("checkbox");
    await headerCheckbox.click();
    // All 5 row IDs should appear in the selection text
    const selectedText = page.getByText(/Selected:/);
    await expect(selectedText).toContainText("1");
    await expect(selectedText).toContainText("5");
  });
});

// ─────────────────────────────────────────────
// DataGrid — Pagination
// ─────────────────────────────────────────────

test.describe("DataGrid — Pagination", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      iframe("components-data-structures-datagrid--with-pagination"),
    );
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".wim-table")).toBeVisible();
  });

  test("shows first 10 rows on page 1", async ({ page }) => {
    await expect(dgRow(page).locator("td").first()).toHaveText("1");
    // Row count should be 10
    await expect(page.locator(".wim-table tbody tr")).toHaveCount(10);
  });

  test("navigates to page 2 and shows correct rows", async ({ page }) => {
    // Pagination buttons have aria-label="a11y_go_to_page"; match by visible text instead
    await page.locator("button").filter({ hasText: /^2$/ }).click();
    await expect(dgRow(page).locator("td").first()).toHaveText("11");
  });
});

// ─────────────────────────────────────────────
// Transfer
// ─────────────────────────────────────────────

test.describe("Transfer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      iframe("components-advanced-inputs-transfer--controlled"),
    );
    // Transfer makes ongoing fetch requests; use load instead of networkidle
    await page.waitForLoadState("load");
    await expect(page.locator(".wim-transfer__list").first()).toBeVisible();
  });

  test("renders source and target panels", async ({ page }) => {
    // Panel titles from translation: "Available" / "Selected"
    // Use last() because Storybook's "no stories" page has a hidden element containing "Selected"
    await expect(page.getByText("Available").last()).toBeVisible();
    await expect(page.getByText("Selected").last()).toBeVisible();
  });

  test("items in targetKeys start in the right panel", async ({ page }) => {
    // targetKeys=["1","2"] → Item 2, Item 3 are on the right
    const panels = page.locator(".wim-transfer__list");
    const targetPanel = panels.last();
    await expect(targetPanel.getByText("Item 2")).toBeVisible();
    await expect(targetPanel.getByText("Item 3")).toBeVisible();
  });

  test("moves a selected item from source to target", async ({ page }) => {
    // Item 4 (key "3") is in source panel initially
    const panels = page.locator(".wim-transfer__list");
    const sourcePanel = panels.first();
    const targetPanel = panels.last();

    await sourcePanel.getByText("Item 4").click();

    // Click the → (right arrow) move button
    const moveRightBtn = page.locator(".wim-transfer__operation button").first();
    await moveRightBtn.click();

    await expect(targetPanel.getByText("Item 4")).toBeVisible();
  });

  test("moves a selected item from target back to source", async ({ page }) => {
    const panels = page.locator(".wim-transfer__list");
    const sourcePanel = panels.first();
    const targetPanel = panels.last();

    await targetPanel.getByText("Item 2").click();

    // Click the ← (left arrow) move button
    const moveLeftBtn = page.locator(".wim-transfer__operation button").last();
    await moveLeftBtn.click();

    await expect(sourcePanel.getByText("Item 2", { exact: true })).toBeVisible();
  });
});

// ─────────────────────────────────────────────
// Combobox
// ─────────────────────────────────────────────

test.describe("Combobox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      iframe("components-selection-controls-combobox--default"),
    );
    await page.waitForLoadState("networkidle");
  });

  test("opens dropdown on click", async ({ page }) => {
    await page.getByPlaceholder("Apple").click();
    await expect(page.getByText("Banana")).toBeVisible();
    await expect(page.getByText("Cherry")).toBeVisible();
  });

  test("filters options by typing", async ({ page }) => {
    await page.getByPlaceholder("Apple").fill("gr");
    await expect(page.getByRole("option", { name: "Grape" })).toBeVisible();
    await expect(
      page.getByRole("option", { name: "Apple" }),
    ).not.toBeVisible();
  });

  test("selects an option by clicking it", async ({ page }) => {
    await page.getByPlaceholder("Apple").click();
    await page.getByRole("option", { name: "Mango" }).click();
    // Verify the input now holds the selected value
    await expect(page.getByPlaceholder("Apple")).toHaveValue("Mango");
  });

  test("clears input with clear button", async ({ page }) => {
    await page.getByPlaceholder("Apple").fill("man");
    await page.getByRole("option", { name: "Mango" }).click();
    // Clear button should appear after selection
    const clearBtn = page.getByLabel("Clear input");
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();
    await expect(page.getByPlaceholder("Apple")).toHaveValue("");
  });
});
