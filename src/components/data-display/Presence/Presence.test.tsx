import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Presence } from "./Presence";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

/** ドット本体（`Indicator` が最後に描く span）。 */
const dotOf = (container: HTMLElement) =>
  container.querySelector(".wim-indicator > span:last-of-type") as HTMLElement;

describe("Presence", () => {
  it("renders the localized name even when the label is not shown", () => {
    render(<Presence status="online" />);
    // 見えていなくても支援技術には出す（色だけで意味を伝えないため）
    expect(screen.getByText("Online")).toBeInTheDocument();
  });

  it("shows the label next to the dot when asked", () => {
    render(<Presence status="away" showLabel />);
    expect(screen.getByText("Away")).toBeInTheDocument();
  });

  it("prefers an explicit label over the localized name", () => {
    render(<Presence status="busy" label="In a meeting" showLabel />);
    expect(screen.getByText("In a meeting")).toBeInTheDocument();
    expect(screen.queryByText("Busy")).toBeNull();
  });

  // このコンポーネントの中身は「どの状態がどの色か」の表なので、そこを測る。
  it.each([
    ["online", "success"],
    ["away", "warning"],
    ["busy", "danger"],
    ["offline", "neutral"],
  ] as const)("maps %s to the %s color", (status, color) => {
    const { container } = render(<Presence status={status} />);
    expect(dotOf(container).className).toContain(color);
  });

  it("attaches the dot to a corner of its children", () => {
    const { container } = render(
      <Presence status="online" position="top-right">
        <img src="a.png" alt="Ada" />
      </Presence>,
    );
    expect(screen.getByAltText("Ada")).toBeInTheDocument();
    expect(dotOf(container).className).toContain("top-right");
  });

  it("renders the dot inline when there is nothing to attach it to", () => {
    const { container } = render(<Presence status="offline" />);
    expect(container.querySelector(".wim-indicator")?.className).toContain("inlineRoot");
  });
});
