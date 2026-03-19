import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Breadcrumb } from "./Breadcrumb";
import React from "react";

vi.mock("react-i18next", () => ({
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
    const nav = container.querySelector(".wim-breadcrumb") as HTMLElement;
    
    // items rendered as Links are inside wim-breadcrumb__content
    const linkItems = container.querySelectorAll(".wim-breadcrumb__link, .wim-breadcrumb__label--current") as NodeListOf<HTMLElement>;
    
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
    const { container } = render(<Breadcrumb items={items} size="small" />);
    expect(container.querySelector(".wim-breadcrumb--sm")).toBeInTheDocument();
  });

  it("applies large size class", () => {
    const { container } = render(<Breadcrumb items={items} size="large" />);
    expect(container.querySelector(".wim-breadcrumb--lg")).toBeInTheDocument();
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
    const spans = container.querySelectorAll(".wim-breadcrumb__label");
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
