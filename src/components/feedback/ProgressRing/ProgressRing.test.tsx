import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProgressRing } from "./ProgressRing";

describe("ProgressRing", () => {
  it("exposes the value through the progressbar role", () => {
    render(<ProgressRing value={40} label="Uploading" />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
    expect(bar).toHaveAccessibleName("Uploading");
  });

  it("shows the percentage only when asked", () => {
    const { rerender } = render(<ProgressRing value={40} />);
    expect(screen.queryByText("40%")).not.toBeInTheDocument();

    rerender(<ProgressRing value={40} showValue />);
    expect(screen.getByText("40%")).toBeInTheDocument();
  });

  it("scales the percentage against max", () => {
    render(<ProgressRing value={25} max={50} showValue />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("clamps out-of-range values instead of overflowing the ring", () => {
    const { rerender } = render(<ProgressRing value={150} showValue />);
    expect(screen.getByText("100%")).toBeInTheDocument();

    rerender(<ProgressRing value={-20} showValue />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  /**
   * 幾何は CSS 変数だけで表す（`pathLength="100"` を付けているので値が
   * そのまま％になる）。ここが px や周長の計算に戻ると、サイズを増やすたびに
   * TSX 側の計算とズレる。
   */
  it("drives the arc through a custom property, not a computed length", () => {
    const { container } = render(<ProgressRing value={40} />);
    const indicator = container.querySelector("circle:last-of-type") as SVGCircleElement;
    expect(indicator.getAttribute("pathLength")).toBe("100");
    expect(indicator.style.getPropertyValue("--wim-progress-ring-value")).toBe("40");
  });

  it("drops the value when indeterminate", () => {
    const { container } = render(<ProgressRing indeterminate showValue value={40} />);
    expect(screen.getByRole("progressbar")).not.toHaveAttribute("aria-valuenow");
    expect(screen.queryByText("40%")).not.toBeInTheDocument();

    const indicator = container.querySelector("circle:last-of-type") as SVGCircleElement;
    expect(indicator.style.getPropertyValue("--wim-progress-ring-value")).toBe("");
  });

  it("renders the label below the ring when given", () => {
    render(<ProgressRing value={10} label="Syncing" />);
    expect(screen.getByText("Syncing")).toBeInTheDocument();
  });
});
