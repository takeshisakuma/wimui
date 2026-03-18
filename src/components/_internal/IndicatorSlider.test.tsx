import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { IndicatorSlider } from "./IndicatorSlider";

// Mock useIndicator
vi.mock("./useIndicator", () => ({
  useIndicator: () => ({
    containerRef: { current: null },
    sliderStyle: { width: 100, height: 4, left: 10, top: 0, opacity: 1 },
    isReady: true,
  }),
}));

describe("IndicatorSlider", () => {
  it("renders with basic props", () => {
    const { container } = render(
      <IndicatorSlider activeSelector=".active" />
    );
    const slider = container.querySelector(".wim-indicator-slider");
    expect(slider).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <IndicatorSlider activeSelector=".active" className="custom-class" />
    );
    const slider = container.querySelector(".wim-indicator-slider");
    expect(slider).toHaveClass("custom-class");
  });

  it("passes style from useIndicator", () => {
    const { container } = render(
      <IndicatorSlider activeSelector=".active" />
    );
    const slider = container.querySelector(".wim-indicator-slider") as HTMLElement;
    expect(slider.style.width).toBe("100px");
    expect(slider.style.left).toBe("10px");
  });
});
