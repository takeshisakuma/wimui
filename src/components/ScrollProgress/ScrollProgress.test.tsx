import { render, screen, act } from "@testing-library/react";
import { ScrollProgress } from "./ScrollProgress";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useRef as reactUseRef } from "react";

describe("ScrollProgress", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render correctly", () => {
    render(<ScrollProgress />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should have correct progress value", () => {
    render(<ScrollProgress />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "0");
  });

  it("renders with different color variants", () => {
    const { container } = render(<ScrollProgress color="success" />);
    expect(container.querySelector(".wim-scroll-progress--success")).toBeInTheDocument();
  });

  it("renders with secondary color", () => {
    const { container } = render(<ScrollProgress color="secondary" />);
    expect(container.querySelector(".wim-scroll-progress--secondary")).toBeInTheDocument();
  });

  it("renders with error color", () => {
    const { container } = render(<ScrollProgress color="error" />);
    expect(container.querySelector(".wim-scroll-progress--error")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<ScrollProgress className="my-progress" />);
    expect(container.querySelector(".my-progress")).toBeInTheDocument();
  });

  it("updates progress on window scroll", () => {
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 1000, configurable: true });
    Object.defineProperty(document.documentElement, "clientHeight", { value: 0, configurable: true });
    Object.defineProperty(window, "innerHeight", { value: 200, configurable: true });
    Object.defineProperty(window, "scrollY", { value: 400, configurable: true });

    render(<ScrollProgress />);

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    const progressbar = screen.getByRole("progressbar");
    expect(Number(progressbar.getAttribute("aria-valuenow"))).toBeGreaterThan(0);
  });

  it("handles target element ref", () => {
    const TestComponent = () => {
      const ref = reactUseRef<HTMLDivElement>(null);
      return (
        <div>
          <div ref={ref} style={{ overflow: "auto" }} />
          <ScrollProgress target={ref} />
        </div>
      );
    };

    render(<TestComponent />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
