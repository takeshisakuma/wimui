import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, "../storybook-static/index.json");

if (!fs.existsSync(indexPath)) {
  console.error("Error: storybook-static/index.json not found.");
  console.error("Please run 'npm run build-storybook' before running a11y tests.");
  process.exit(1);
}

interface StoryEntry {
  id: string;
  title: string;
  name: string;
  type: "story" | "docs";
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
const stories = Object.values(index.entries).filter(
  (entry: any): entry is StoryEntry => entry.type === "story",
);

const filter = process.env.FILTER || "";

test.describe("Accessibility (axe-core)", () => {
  for (const story of stories) {
    if (filter && !story.title.toLowerCase().includes(filter.toLowerCase())) {
      continue;
    }

    test(`${story.title} - ${story.name}`, async ({ page }) => {
      const url = `/iframe.html?id=${story.id}&viewMode=story&globals=theme:light;locale:en`;

      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForTimeout(300);

      const results = await new AxeBuilder({ page })
        // These rules require page-level structure (<main>, <h1>) that
        // Storybook iframes intentionally omit — not a component issue.
        .disableRules(["landmark-one-main", "page-has-heading-one", "region"])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
