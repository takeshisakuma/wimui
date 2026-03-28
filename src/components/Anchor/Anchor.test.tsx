import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Anchor } from "./Anchor";

describe("Anchor", () => {
  const items = [
    { 
      key: "1", 
      href: "#section1", 
      title: "Section 1",
      children: [
        { key: "1-1", href: "#section1-1", title: "Sub Section 1.1" }
      ]
    },
    { key: "2", href: "#section2", title: "Section 2" },
  ];

  beforeEach(() => {
    window.scrollTo = vi.fn();
    
    // Mock getElementById
    const mockElements: Record<string, { offsetTop: number; getBoundingClientRect: () => { top: number; height: number } }> = {
      "section1": { offsetTop: 100, getBoundingClientRect: () => ({ top: 100, height: 50 }) },
      "section1-1": { offsetTop: 150, getBoundingClientRect: () => ({ top: 150, height: 50 }) },
      "section2": { offsetTop: 500, getBoundingClientRect: () => ({ top: 500, height: 50 }) },
    };

    vi.spyOn(document, "getElementById").mockImplementation((id) => (mockElements[id] as HTMLElement) || null);
    
    // Mock getBoundingClientRect for container and links
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function(this: HTMLElement) {
      if (this.tagName === "A") {
        const href = this.getAttribute("href");
        if (href === "#section1") return { top: 10, left: 10, width: 100, height: 30 } as DOMRect;
        if (href === "#section2") return { top: 40, left: 10, width: 100, height: 30 } as DOMRect;
      }
      return { top: 0, left: 0, width: 1000, height: 1000 } as DOMRect;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders anchor links with nested children", () => {
    render(<Anchor items={items} />);
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Sub Section 1.1")).toBeInTheDocument();
  });

  it("calls window.scrollTo when a link is clicked", () => {
    render(<Anchor items={items} offset={50} />);
    fireEvent.click(screen.getByText("Section 1"));
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 50, // 100 - 50
      behavior: "smooth",
    });
  });

  it("highlights the active link on scroll", () => {
    const { container } = render(<Anchor items={items} offset={0} bounds={5} />);
    
    // Ensure we're not at bottom
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 5000, configurable: true });
    Object.defineProperty(document.documentElement, "clientHeight", { value: 1000, configurable: true });

    // Simulate scroll where section1 is in view
    vi.spyOn(document, "getElementById").mockImplementation((id) => {
      if (id === "section1")
        return {
          getBoundingClientRect: () => ({ top: 0, bottom: 100, height: 100 }),
        } as unknown as HTMLElement;
      return {
        getBoundingClientRect: () => ({ top: 1000, bottom: 1100, height: 100 }),
      } as unknown as HTMLElement;
    });

    Object.defineProperty(window, "scrollY", { value: 10, writable: true });

    act(() => {
      fireEvent.scroll(window);
    });

    const activeItem = container.querySelector(".wim-anchor__item--active");
    expect(activeItem?.querySelector("a")?.getAttribute("href")).toBe("#section1");
  });

  it("highlights the last link when scrolled to bottom", () => {
    const { container } = render(<Anchor items={items} />);
    
    // Mock scroll to bottom
    vi.stubGlobal("scrollY", 1000);
    Object.defineProperty(document.documentElement, "scrollTop", { value: 1000, configurable: true });
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 1500, configurable: true });
    Object.defineProperty(document.documentElement, "clientHeight", { value: 500, configurable: true });
    
    act(() => {
      fireEvent.scroll(window);
    });

    const activeItem = container.querySelector(".wim-anchor__item--active");
    expect(activeItem?.textContent).toContain("Section 2");
  });

  it("handles horizontal placement", () => {
    const { container } = render(<Anchor items={items} direction="horizontal" />);
    expect(container.querySelector(".wim-anchor--horizontal")).toBeInTheDocument();
  });

  it("applies marker styles correctly", () => {
    const { container } = render(<Anchor items={items} />);
    
    // Trigger active state
    vi.spyOn(document, "getElementById").mockImplementation((id) => {
      if (id === "section1") return { getBoundingClientRect: () => ({ top: 0 }) } as unknown as HTMLElement;
      return { getBoundingClientRect: () => ({ top: 1000 }) } as unknown as HTMLElement;
    });

    act(() => {
      fireEvent.scroll(window);
    });

    const ball = container.querySelector(".wim-anchor__ink-ball");
    expect(ball).toHaveStyle({ opacity: "1" });
  });

  it("handles empty items array", () => {
    const { container } = render(<Anchor items={[]} />);
    expect(container.querySelector(".wim-anchor__list")).toBeEmptyDOMElement();
  });
});
