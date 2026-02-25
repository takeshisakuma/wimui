import { render, screen, fireEvent } from "@testing-library/react";
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

    const backTop = renderContainer.querySelector(
      ".wim-back-top",
    ) as HTMLElement;
    fireEvent.click(backTop);

    expect(onClick).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
