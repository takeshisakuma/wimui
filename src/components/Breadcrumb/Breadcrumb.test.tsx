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
});
