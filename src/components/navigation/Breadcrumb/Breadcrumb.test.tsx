import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { Breadcrumb } from "./Breadcrumb";
import React from "react";
import styles from "./breadcrumb.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Breadcrumb", () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", href: "/library/data" },
  ];

  it("renders all items", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("marks the last item as current page", () => {
    render(<Breadcrumb items={items} />);
    const lastItem = screen.getByText("Data");
    expect(lastItem).toHaveAttribute("aria-current", "page");
  });

  it("handles keyboard navigation (ArrowRight, ArrowLeft)", () => {
    const { container } = render(<Breadcrumb items={items} />);
    const nav = container.querySelector(`.${styles.root}`) as HTMLElement;
    
    // items rendered as Links are inside wim-breadcrumb__content (now styles.content)
    const linkItems = container.querySelectorAll(`.${styles.link}, .${styles.label}.${styles.current}`) as NodeListOf<HTMLElement>;
    
    linkItems[0].focus(); // Focus "Home"
    expect(document.activeElement).toBe(linkItems[0]);
    
    // Arrow Right -> Library
    fireEvent.keyDown(nav, { key: "ArrowRight" });
    expect(document.activeElement).toBe(linkItems[1]);
    
    // Arrow Right -> Data
    fireEvent.keyDown(nav, { key: "ArrowRight" });
    expect(document.activeElement).toBe(linkItems[2]);
    
    // Arrow Right -> loops to Home
    fireEvent.keyDown(nav, { key: "ArrowRight" });
    expect(document.activeElement).toBe(linkItems[0]);

    // Arrow Left -> loops to Data
    fireEvent.keyDown(nav, { key: "ArrowLeft" });
    expect(document.activeElement).toBe(linkItems[2]);

    // Ignored keys
    fireEvent.keyDown(nav, { key: "Enter" });
    expect(document.activeElement).toBe(linkItems[2]);

    // Focus out and key down
    linkItems[2].blur();
    fireEvent.keyDown(nav, { key: "ArrowRight" }); // should just return, no change in focus
    expect(document.activeElement).not.toBe(linkItems[0]);
  });

  it("applies small size class", () => {
    const { container } = render(<Breadcrumb items={items} size="sm" />);
    expect(container.querySelector(`.${styles.sm}`)).toBeInTheDocument();
  });

  it("applies large size class", () => {
    const { container } = render(<Breadcrumb items={items} size="lg" />);
    expect(container.querySelector(`.${styles.lg}`)).toBeInTheDocument();
  });

  it("renders custom separator", () => {
    render(<Breadcrumb items={items} separator={<span>/</span>} />);
    // Custom separator should appear between items
    const separators = screen.getAllByText("/");
    expect(separators.length).toBeGreaterThan(0);
  });

  it("renders item without href as non-link span", () => {
    const itemsNoHref = [
      { label: "Home", href: "/" },
      { label: "NoLink" }, // no href
      { label: "Current" },
    ];
    const { container } = render(<Breadcrumb items={itemsNoHref} />);
    // Middle item with no href should be a span without aria-current
    const spans = container.querySelectorAll(`.${styles.label}`);
    expect(spans.length).toBeGreaterThan(0);
  });

  it("renders item with iconName", () => {
    const itemsWithIcon = [
      { label: "Home", href: "/", iconName: "HomeIcon" as const },
      { label: "Current" },
    ];
    render(<Breadcrumb items={itemsWithIcon} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Breadcrumb items={items} className="custom-breadcrumb" />,
    );
    expect(container.querySelector(".custom-breadcrumb")).toBeInTheDocument();
  });
});

describe('Breadcrumb overflow="collapse"', () => {
  // jsdom は幅を持たないので、項目（li）は文字数 × 10px、器は nav の data-available から読ませる
  const rectSpy = vi.spyOn(HTMLElement.prototype, "getBoundingClientRect");
  const clientWidthDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");

  beforeAll(() => {
    rectSpy.mockImplementation(function (this: HTMLElement) {
      const width = this.tagName === "LI" ? Math.max((this.textContent ?? "").length, 1) * 10 : 0;
      return { width, height: 0, top: 0, left: 0, right: width, bottom: 0, x: 0, y: 0, toJSON: () => ({}) };
    });
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get(this: HTMLElement) {
        return Number(this.closest<HTMLElement>("nav")?.dataset.available ?? 0);
      },
    });
  });

  afterAll(() => {
    rectSpy.mockRestore();
    if (clientWidthDescriptor) Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidthDescriptor);
  });

  const longItems = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", href: "/library/data" },
    { label: "Reports", href: "/library/data/reports" },
    { label: "Q3 summary" },
  ];

  // 見えている行（OverflowList の ol）の項目の文字
  const visibleTexts = (container: HTMLElement) =>
    Array.from(container.querySelector("nav .wim-overflow-list > ol")!.children).map((li) => li.textContent);

  it("keeps the first item and the current page, and folds the levels in between into one button", () => {
    const { container } = render(<Breadcrumb items={longItems} overflow="collapse" data-available={160} />);
    expect(visibleTexts(container)).toEqual(["Home", "", "Q3 summary"]);
    expect(screen.getByRole("button", { name: "Show hidden levels (3)" })).toHaveAttribute("aria-expanded", "false");
    // 見えている構造は nav > … > ol > li のまま（ol の直下に div を置かない）
    const row = container.querySelector("nav .wim-overflow-list > ol")!;
    expect(Array.from(row.children).every((el) => el.tagName === "LI")).toBe(true);
  });

  it("shows every item when they fit", () => {
    const { container } = render(<Breadcrumb items={longItems} overflow="collapse" data-available={1000} />);
    expect(visibleTexts(container)).toEqual(["Home", "Library", "Data", "Reports", "Q3 summary"]);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("lists the hidden levels as links when the button is pressed, and Escape closes it back onto the button", () => {
    render(<Breadcrumb items={longItems} overflow="collapse" data-available={160} moreLabel={(n) => `Hidden levels (${n})`} />);
    const button = screen.getByRole("button", { name: "Hidden levels (3)" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    const panel = document.getElementById(button.getAttribute("aria-controls")!)!;
    expect(Array.from(panel.querySelectorAll("a")).map((a) => a.textContent)).toEqual(["Library", "Data", "Reports"]);

    panel.querySelector("a")!.focus();
    fireEvent.keyDown(document.activeElement!, { key: "Escape" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(document.activeElement).toBe(button);
  });

  it("closes the list when pressing outside it", () => {
    render(<Breadcrumb items={longItems} overflow="collapse" data-available={160} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    fireEvent.pointerDown(document.body);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("moves between the visible items and the button with the arrow keys, skipping the measuring copy", () => {
    const { container } = render(<Breadcrumb items={longItems} overflow="collapse" data-available={160} />);
    const nav = container.querySelector("nav") as HTMLElement;
    screen.getByRole("link", { name: "Home" }).focus();
    fireEvent.keyDown(nav, { key: "ArrowRight" });
    expect(document.activeElement).toBe(screen.getByRole("button"));
    fireEvent.keyDown(nav, { key: "ArrowRight" });
    expect(document.activeElement).toHaveTextContent("Q3 summary");
    fireEvent.keyDown(nav, { key: "ArrowRight" });
    expect(document.activeElement).toBe(screen.getByRole("link", { name: "Home" }));
  });
});
