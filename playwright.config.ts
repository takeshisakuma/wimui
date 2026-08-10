import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./vrt",
  /*
   * **`testMatch` を足さないこと。**
   *
   * `vrt/` には 16 本のスペックがあり、素の `playwright test` は全部を拾う。
   * 絞りたくなるが、**`testMatch` で絞ると CI が黙って空回りする** ── ワークフローは
   * `npx playwright test vrt/a11y.spec.ts` のように**スペックを名指し**で実行しており、
   * `testMatch` から外れたファイルはそもそも発見されない。実測（2026-08-09）:
   * `testMatch: "vrt.spec.ts"` を入れた状態で a11y を名指しすると
   * **「Total: 0 tests in 0 files」で終了コード 0** ＝ **a11y ジョブがテストを 1 件も
   * 走らせないまま緑になる。**
   *
   * 走らせる範囲は npm script 側で決める（`test:vrt` は `vrt/vrt.spec.ts` を名指し）。
   */
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
    // NOTE: `serve -s` は clean-url で `/iframe.html?id=…` を 301 → `/iframe` に
    // リダイレクトし SPA fallback がマネージャ UI を返す（ストーリーが撮れず
    // 全テストがマウント待ちタイムアウトになる）。リテラル配信の http-server を
    // バージョン固定で使うこと。
    // Locally: use the dev storybook for hot reload.
    command: process.env.CI
      ? "npx http-server@14 storybook-static -p 6006 -c-1 --silent"
      : "npm run storybook",
    url: "http://localhost:6006",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120000,
  },
});
