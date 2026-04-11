import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    name: "storybook",
    plugins: [
      storybookTest({
        configDir: path.join(dirname, ".storybook"),
      }),
    ],
    test: {
      browser: {
        enabled: true,
        name: "chromium",
        headless: true,
        provider: playwright(),
      },
      setupFiles: [".storybook/vitest.setup.ts"],
      include: ["**/*.stories.tsx"],
    },
  },
];
