import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders svg indicator", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<Spinner label="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies size and color classes to svg", () => {
    const { container } = render(<Spinner size="lg" color="success" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass(/lg/);
    expect(svg).toHaveClass(/success/);
  });

  it("applies small size class", () => {
    const { container } = render(<Spinner size="sm" />);
    expect(container.querySelector("svg")).toHaveClass(/sm/);
  });

  it("applies custom hex color as inline style", () => {
    const { container } = render(<Spinner color="#ff0000" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.color).toBeTruthy();
  });

  // T228: ラベルがあるときだけ live region にする（読み上げる内容があるのは
  // その場合だけ）。
  it("is a live region only when a label is rendered", () => {
    const { rerender } = render(<Spinner />);
    expect(screen.queryByRole("status")).toBeNull();

    rerender(<Spinner label="Loading..." />);
    const status = screen.getByRole("status");
    expect(status).toHaveAttribute("aria-live", "polite");
    expect(status).toHaveTextContent("Loading...");
  });

  it("applies labelPosition bottom", () => {
    render(<Spinner label="Loading" labelPosition="bottom" />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
