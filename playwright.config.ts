import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./vrt",
  /* Extra time for stories with play functions under dev server load */
  timeout: 60000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // ローカルはワーカー無制限で並列負荷が高く、Storybook の preparing spinner
  // で固まる / アニメーション位相由来の flake が出やすいためリトライする。
  retries: 2,
  /* CI: 4 workers (ubuntu-latest は 4 vCPU、静的配信なので耐える)。
     Local: cap parallelism so Vite Storybook can keep up. */
  workers: process.env.CI ? 4 : 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:6006",

    /* Collect trace when retrying a failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    /* Take screenshot on failure */
    screenshot: "only-on-failure",

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    // In CI: serve the pre-built static storybook (faster, no watch overhead).
    // Locally: use the dev storybook for hot reload.
    command: process.env.CI
      ? "npx serve storybook-static -p 6006 -s --no-clipboard"
      : "npm run storybook",
    url: "http://localhost:6006",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120000,
  },
});
