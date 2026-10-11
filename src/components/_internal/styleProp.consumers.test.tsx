/**
 * `style` を渡しても、部品が自分で入れた値が消えないこと（定期点検 7-4・2026-10-12）。
 *
 * 4 部品は、内部の `style` を書いたあとで props を広げていた。props には利用者の `style` が残って
 * いるので、広げた時点で、内部の `style` が利用者の `style` に丸ごと置き換わっていた。
 */
import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../form/Button/Button";
import { Textarea } from "../form/Textarea/Textarea";
import { ImageCompare } from "../media/ImageCompare/ImageCompare";
import { Dashboard, DashboardWidgetCard } from "../layout/Dashboard/Dashboard";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const USER_STYLE: React.CSSProperties = { outlineColor: "red" };

describe("style を渡しても、部品が入れた値が残る", () => {
  it("Button: backgroundColor で入れた背景色が残る", () => {
    const { container } = render(
      <Button backgroundColor="#123456" style={USER_STYLE}>
        Save
      </Button>,
    );
    const style = container.querySelector("button")!.getAttribute("style") ?? "";
    // 対照: 以前は "outline-color: red;" だけになり、背景色が消えていた
    expect(style).toContain("background-color");
    expect(style).toContain("outline-color: red");
  });

  it("Textarea: width で入れた幅の変数が残る", () => {
    const { container } = render(<Textarea width={300} fullWidth={false} style={USER_STYLE} />);
    const styled = [...container.querySelectorAll<HTMLElement>("[style]")].map((el) => el.getAttribute("style") ?? "").join(" | ");
    expect(styled).toContain("--wim-input-width: 300px");
    expect(styled).toContain("outline-color: red");
  });

  it("ImageCompare: width / height が残る", () => {
    const { container } = render(<ImageCompare before="a.png" after="b.png" width={320} height={200} style={USER_STYLE} />);
    const style = container.querySelector(".wim-image-compare")!.getAttribute("style") ?? "";
    expect(style).toContain("width: 320px");
    expect(style).toContain("height: 200px");
    expect(style).toContain("outline-color: red");
  });

  it("DashboardWidgetCard: 幅と行の変数が残る", () => {
    const widget = { id: "w", title: "Widget", content: "body", span: 2 as const, rowSpan: 2 as const };
    const { container } = render(
      <Dashboard>
        <DashboardWidgetCard widget={widget} style={USER_STYLE} />
      </Dashboard>,
    );
    const style = container.querySelector('[style*="outline-color"]')?.getAttribute("style") ?? "";
    expect(style).toContain("--widget-span: 2");
    expect(style).toContain("--widget-row-span: 2");
  });

  it("利用者の style は、同じ性質では部品の値に勝つ（ImageCompare の width）", () => {
    const { container } = render(<ImageCompare before="a.png" after="b.png" width={320} style={{ width: 100 }} />);
    expect(container.querySelector(".wim-image-compare")!.getAttribute("style")).toContain("width: 100px");
  });
});
