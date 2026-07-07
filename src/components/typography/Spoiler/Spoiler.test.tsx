import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Spoiler } from "./Spoiler";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) =>
      key === "spoiler.show_more"
        ? "Show more"
        : key === "spoiler.show_less"
          ? "Show less"
          : key,
    i18n: { language: "en" },
  }),
}));

const LONG_TEXT =
  "This review goes on and on about every detail of the product experience.";

// jsdom はレイアウトを行わないため、クランプされた高さと全文の高さを
// ゲッターのモックで再現する（inner = 全文、それ以外 = クランプ後）
const mockHeights = ({ overflowing }: { overflowing: boolean }) => {
  vi.spyOn(Element.prototype, "scrollHeight", "get").mockImplementation(
    function (this: Element) {
      return this.className.includes("inner") && overflowing ? 200 : 60;
    },
  );
  vi.spyOn(Element.prototype, "clientHeight", "get").mockImplementation(
    () => 60,
  );
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Spoiler", () => {
  it("hides the toggle when the content fits within the line limit", () => {
    mockHeights({ overflowing: false });
    render(<Spoiler>{LONG_TEXT}</Spoiler>);
    expect(screen.getByText(LONG_TEXT)).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("shows a collapsed toggle when the content overflows", () => {
    mockHeights({ overflowing: true });
    render(<Spoiler>{LONG_TEXT}</Spoiler>);
    const toggle = screen.getByRole("button", { name: "Show more" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps the full text in the DOM while collapsed", () => {
    mockHeights({ overflowing: true });
    render(<Spoiler>{LONG_TEXT}</Spoiler>);
    expect(screen.getByText(LONG_TEXT)).toBeInTheDocument();
  });

  it("expands and collapses on toggle clicks", () => {
    mockHeights({ overflowing: true });
    render(<Spoiler>{LONG_TEXT}</Spoiler>);

    fireEvent.click(screen.getByRole("button", { name: "Show more" }));
    const toggle = screen.getByRole("button", { name: "Show less" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(toggle);
    expect(
      screen.getByRole("button", { name: "Show more" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("removes the clamp class while expanded", () => {
    mockHeights({ overflowing: true });
    render(<Spoiler>{LONG_TEXT}</Spoiler>);
    const toggle = screen.getByRole("button");
    const content = document.getElementById(
      toggle.getAttribute("aria-controls") as string,
    ) as HTMLElement;

    expect(content.className).toContain("collapsed");
    fireEvent.click(toggle);
    expect(content.className).not.toContain("collapsed");
  });

  it("links the toggle to the content via aria-controls", () => {
    mockHeights({ overflowing: true });
    render(<Spoiler>{LONG_TEXT}</Spoiler>);
    const controls = screen.getByRole("button").getAttribute("aria-controls");
    expect(controls).toBeTruthy();
    expect(document.getElementById(controls as string)).toHaveTextContent(
      LONG_TEXT,
    );
  });

  it("respects defaultExpanded", () => {
    mockHeights({ overflowing: true });
    render(<Spoiler defaultExpanded>{LONG_TEXT}</Spoiler>);
    expect(screen.getByRole("button", { name: "Show less" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("supports controlled usage", () => {
    mockHeights({ overflowing: true });
    const onExpandedChange = vi.fn();
    const { rerender } = render(
      <Spoiler expanded={false} onExpandedChange={onExpandedChange}>
        {LONG_TEXT}
      </Spoiler>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    // 制御モードでは prop が変わるまで折りたたまれたまま
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );

    rerender(
      <Spoiler expanded onExpandedChange={onExpandedChange}>
        {LONG_TEXT}
      </Spoiler>,
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("renders custom toggle labels", () => {
    mockHeights({ overflowing: true });
    render(
      <Spoiler showLabel="Read full review" hideLabel="Collapse review">
        {LONG_TEXT}
      </Spoiler>,
    );
    const toggle = screen.getByRole("button", { name: "Read full review" });
    fireEvent.click(toggle);
    expect(
      screen.getByRole("button", { name: "Collapse review" }),
    ).toBeInTheDocument();
  });

  it("exposes the line limit as a CSS custom property", () => {
    mockHeights({ overflowing: true });
    const { container } = render(<Spoiler lines={5}>{LONG_TEXT}</Spoiler>);
    expect(
      (container.firstChild as HTMLElement).style.getPropertyValue(
        "--wim-spoiler-lines",
      ),
    ).toBe("5");
  });
});
