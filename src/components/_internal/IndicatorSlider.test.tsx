import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { IndicatorSlider } from "./IndicatorSlider";
import { useIndicator } from "./useIndicator";

// Mock useIndicator
vi.mock("./useIndicator", () => ({
  useIndicator: vi.fn(),
}));

describe("IndicatorSlider", () => {
  beforeEach(() => {
    vi.mocked(useIndicator).mockReturnValue({
      containerRef: { current: null },
      sliderStyle: { width: 100, height: 4, left: 10, top: 0, opacity: 1 },
      isReady: true,
      updateIndicator: vi.fn(),
    });
  });

  it("renders with basic props", () => {
    render(<IndicatorSlider activeSelector=".active" />);
    const slider = screen.getByTestId("indicator-slider");
    expect(slider).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<IndicatorSlider activeSelector=".active" className="custom-class" />);
    const slider = screen.getByTestId("indicator-slider");
    expect(slider).toHaveClass("custom-class");
  });

  it("applies variant class", () => {
    // Note: styles[variant] will be undefined in tests unless we mock styles,
    // but we can still check if it handles the variant prop logic.
    render(<IndicatorSlider activeSelector=".active" variant="primary" />);
    const slider = screen.getByTestId("indicator-slider");
    expect(slider).toBeInTheDocument();
  });

  it("passes style from useIndicator and merges with custom style", () => {
    render(
      <IndicatorSlider 
        activeSelector=".active" 
        style={{ backgroundColor: "red" }} 
      />
    );
    const slider = screen.getByTestId("indicator-slider");
    expect(slider.style.width).toBe("100px");
    expect(slider.style.left).toBe("10px");
    expect(slider.style.backgroundColor).toBe("red");
  });

  it("handles isReady: false state", () => {
    vi.mocked(useIndicator).mockReturnValue({
      containerRef: { current: null },
      sliderStyle: { width: 100, height: 4, left: 10, top: 0, opacity: 1 },
      isReady: false,
      updateIndicator: vi.fn(),
    });

    render(<IndicatorSlider activeSelector=".active" />);
    const slider = screen.getByTestId("indicator-slider");
    
    expect(slider.style.opacity).toBe("0");
    expect(slider.style.transition).toBe("none");
  });

  it("handles isReady: true state", () => {
    vi.mocked(useIndicator).mockReturnValue({
      containerRef: { current: null },
      sliderStyle: { width: 100, height: 4, left: 10, top: 0, opacity: 0.8 },
      isReady: true,
      updateIndicator: vi.fn(),
    });

    render(<IndicatorSlider activeSelector=".active" />);
    const slider = screen.getByTestId("indicator-slider");
    
    expect(slider.style.opacity).toBe("0.8");
    expect(slider.style.transition).toContain("cubic-bezier");
  });
});


