import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use storybook-static/index.json to get the list of all stories.
// Note: If you add new stories, you need to run 'npm run build-storybook' first.
const indexPath = path.resolve(__dirname, "../storybook-static/index.json");

if (!fs.existsSync(indexPath)) {
    console.error("Error: storybook-static/index.json not found.");
    console.error("Please run 'npm run build-storybook' before running VRT.");
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
    (entry: any): entry is StoryEntry => entry.type === "story"
);

const themes = ["light", "dark"];

test.describe("Visual Regression Testing", () => {
    for (const theme of themes) {
        test.describe(`${theme} theme`, () => {
            for (const story of stories) {
                // Generate a separate test for each story and theme.
                test(`${story.title} - ${story.name}`, async ({ page }) => {
                    // Navigate to the clean iframe view
                    // We force the theme and English for consistency.
                    const url = `/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme};locale:en`;

                    await page.goto(url, {
                        waitUntil: "networkidle",
                    });

                    // Wait for any potential layout shifts or image loading
                    await page.waitForTimeout(500);

                    // Compare screenshot
                    // Playwright will look for snapshots in vrt/vrt.spec.ts-snapshots/
                    await expect(page).toHaveScreenshot(`${theme}/${story.id}.png`, {
                        fullPage: true,
                        animations: "disabled",
                        threshold: 0.1, // Slight tolerance
                    });
                });
            }
        });
    }
});
