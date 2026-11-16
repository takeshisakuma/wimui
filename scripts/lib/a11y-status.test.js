import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { collectA11yStatus, sanitize } from "./a11y-status.js";

/**
 * 部品ページの「アクセシビリティの確認状況」の材料（T400）。
 *
 * 表の「ブラウザでの操作テスト」は、E2E のファイルに書かれたストーリー ID を、ストーリーの題名から
 * 作った ID と突き合わせて引く。突き合わせが外れると、その部品の行は黙って「なし」になる ──
 * ここでは、リポジトリの実物で、外れる ID が 0 個であることを見る。
 */
const root = path.resolve(__dirname, "..", "..");

describe("a11y-status", () => {
  it("builds story IDs the same way Storybook does", () => {
    expect(sanitize("Components/Navigation Elements/Tabs")).toBe("components-navigation-elements-tabs");
    expect(sanitize("Components/AI/AIResponseFeedback")).toBe("components-ai-airesponsefeedback");
    expect(sanitize("Components/Alerts & Notifications/Toast")).toBe("components-alerts-notifications-toast");
  });

  it("maps every story ID written in the E2E files to a component", () => {
    const unmapped = [];
    const status = collectA11yStatus(root, { onUnmapped: (file, id) => unmapped.push(`${file}: ${id}`) });
    expect(unmapped).toEqual([]);
    // 起票の時点で 66 部品。0 に落ちたら、題名の付け方か ID の書き方が変わって、突き合わせ全体が外れている
    expect(Object.values(status).filter((s) => s.e2e.length > 0).length).toBeGreaterThan(50);
  });

  it("reports an ID that names no story file", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "a11y-status-"));
    fs.mkdirSync(path.join(dir, "stories", "Dialog"), { recursive: true });
    fs.mkdirSync(path.join(dir, "vrt"));
    fs.writeFileSync(path.join(dir, "stories", "Dialog", "Dialog.stories.tsx"), 'const meta = {\n  title: "Components/Overlays/Dialog",\n};\nexport const Default: Story = {};\n');
    fs.writeFileSync(path.join(dir, "vrt", "x.e2e.spec.ts"), '"components-overlays-dialog--default"\n"components-overlays-dialg--default"\n');
    const unmapped = [];
    const status = collectA11yStatus(dir, { onUnmapped: (file, id) => unmapped.push(id) });
    expect(status.Dialog).toEqual({ stories: 1, e2e: ["x.e2e.spec.ts"] });
    expect(unmapped).toEqual(["components-overlays-dialg--default"]);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
