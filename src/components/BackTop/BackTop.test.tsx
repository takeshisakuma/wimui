import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BackTop from "./BackTop";

describe("BackTop", () => {
  it("renders children when provided", () => {
    render(
      <BackTop visibilityHeight={0}>
        <div>Custom BackTop</div>
      </BackTop>,
    );
    expect(screen.getByText("Custom BackTop")).toBeInTheDocument();
  });

  it("renders default icon when no children", () => {
    const { container } = render(<BackTop />);
    expect(container.querySelector(".wim-back-top__content")).toBeInTheDocument();
  });

  it("is hidden when scroll position is less than visibilityHeight", () => {
    const { container } = render(<BackTop visibilityHeight={400} />);
    const backTop = container.firstChild as HTMLElement;
    expect(backTop).toHaveClass("wim-back-top--hidden");
  });

  it("calls onClick and scrollTo when clicked", () => {
    const onClick = vi.fn();
    const scrollTo = vi.fn();
    window.scrollTo = scrollTo;

    const { container: renderContainer } = render(
      <BackTop visibilityHeight={-1} onClick={onClick} />,
    );

    const backTop = renderContainer.querySelector(".wim-back-top") as HTMLElement;
    fireEvent.click(backTop);

    expect(onClick).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("handles target returning null gracefully", () => {
    expect(() =>
      render(<BackTop target={() => null} visibilityHeight={100} />),
    ).not.toThrow();
  });

  it("handles HTMLElement target and scroll event", () => {
    const div = document.createElement("div");
    Object.defineProperty(div, "scrollTop", { value: 500, writable: true });
    const scrollTo = vi.fn();
    div.scrollTo = scrollTo;
    document.body.appendChild(div);

    const { container } = render(
      <BackTop target={() => div} visibilityHeight={400} />,
    );

    // Trigger scroll event to update visibility
    act(() => {
      div.dispatchEvent(new Event("scroll"));
    });

    const backTop = container.querySelector(".wim-back-top") as HTMLElement;
    expect(backTop).not.toHaveClass("wim-back-top--hidden");

    // Click to scroll to top
    fireEvent.click(backTop);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

    document.body.removeChild(div);
  });

  it("keyboard Enter triggers click", () => {
    const onClick = vi.fn();
    window.scrollTo = vi.fn();
    const { container } = render(<BackTop visibilityHeight={-1} onClick={onClick} />);
    const backTop = container.querySelector(".wim-back-top") as HTMLElement;
    fireEvent.keyDown(backTop, { key: "Enter" });
    expect(onClick).toHaveBeenCalled();
  });

  it("applies custom className and style", () => {
    const { container } = render(<BackTop className="my-bt" style={{ color: "red" }} />);
    const backTop = container.querySelector(".wim-back-top");
    expect(backTop).toHaveClass("my-bt");
    expect(backTop).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });

  it("handles Document target in scrollToTop", () => {
    const scrollTo = vi.fn();
    document.documentElement.scrollTo = scrollTo;
    const { container } = render(
      <BackTop target={() => document} visibilityHeight={-1} />,
    );
    const backTop = container.querySelector(".wim-back-top") as HTMLElement;
    fireEvent.click(backTop);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
