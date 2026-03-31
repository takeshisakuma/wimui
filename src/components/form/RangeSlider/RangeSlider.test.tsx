import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RangeSlider } from "./RangeSlider";

describe("RangeSlider", () => {
  it("renders with default values", () => {
    render(<RangeSlider defaultValue={[20, 80]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs).toHaveLength(2);
    expect(thumbs[0]).toHaveAttribute("aria-valuenow", "20");
    expect(thumbs[1]).toHaveAttribute("aria-valuenow", "80");
  });

  // Validating drag behavior in JSDOM is complex as it requires mocking getBoundingClientRect
  // and firing global mousemove events. We will test basic props.

  it("is disabled when disabled prop is true", () => {
    render(<RangeSlider disabled />);
    const thumbs = screen.getAllByRole("slider");
    thumbs.forEach((thumb) => {
      expect(thumb).toHaveAttribute("aria-disabled", "true");
      expect(thumb).toHaveAttribute("tabindex", "-1");
    });
  });

  it("handles keyboard navigation", () => {
    const onChange = vi.fn();
    render(<RangeSlider min={0} max={100} defaultValue={[20, 80]} onChange={onChange} />);
    const thumbs = screen.getAllByRole("slider");
    
    // Move min handle right
    fireEvent.keyDown(thumbs[0], { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledWith([21, 80]);
    
    // Move max handle left
    fireEvent.keyDown(thumbs[1], { key: "ArrowLeft" });
    expect(onChange).toHaveBeenCalledWith([21, 79]);
    
    // Home/End
    fireEvent.keyDown(thumbs[0], { key: "Home" });
    expect(onChange).toHaveBeenCalledWith([0, 79]);
    
    fireEvent.keyDown(thumbs[1], { key: "End" });
    expect(onChange).toHaveBeenCalledWith([0, 100]);
  });

  it("handles mouse/track interaction", () => {
    const onChange = vi.fn();
    const { container } = render(<RangeSlider min={0} max={100} defaultValue={[20, 80]} onChange={onChange} />);
    
    // Mock getBoundingClientRect for track container
    const track = container.querySelector(".wim-range-slider__track-container") as HTMLDivElement;
    if (track) {
      track.getBoundingClientRect = vi.fn().mockReturnValue({
        left: 0,
        width: 100,
        top: 0,
        height: 10,
        bottom: 10,
        right: 100,
        x: 0,
        y: 0,
        toJSON: () => {},
      });
    }

    // Click at 50%
    fireEvent.mouseDown(container.querySelector(".wim-range-slider")!, { clientX: 50 });
    // Since 50 is exactly between 20 and 80, but the code does:
    // distMin = |20 - 50| = 30. distMax = |80 - 50| = 30.
    // else { targetHandle = clickValue < currentValue[0] ? "min" : "max"; }
    // 50 < 20 is false, so it targets "max".
    expect(onChange).toHaveBeenCalledWith([20, 50]);
  });

  it("handles mouse move and up on global document", () => {
    const onAfterChange = vi.fn();
    const { container } = render(<RangeSlider min={0} max={100} defaultValue={[20, 80]} onAfterChange={onAfterChange} />);
    const track = container.querySelector(".wim-range-slider__track-container") as HTMLElement;
    vi.spyOn(track, "getBoundingClientRect").mockReturnValue({
      left: 0, width: 100, top: 0, height: 10, bottom: 10, right: 100, x: 0, y: 0, toJSON: () => {},
    } as DOMRect);

    const thumbs = screen.getAllByRole("slider");
    fireEvent.mouseDown(thumbs[0], { clientX: 20 });
    fireEvent.mouseMove(document, { clientX: 10 });
    fireEvent.mouseUp(document);
    
    expect(onAfterChange).toHaveBeenCalledWith([10, 80]);
  });

  it("handles touch events on handle", () => {
    const onChange = vi.fn();
    const { container } = render(<RangeSlider min={0} max={100} defaultValue={[20, 80]} onChange={onChange} />);
    const track = container.querySelector(".wim-range-slider__track-container") as HTMLElement;
    vi.spyOn(track, "getBoundingClientRect").mockReturnValue({
      left: 0, width: 100, top: 0, height: 10, bottom: 10, right: 100, x: 0, y: 0, toJSON: () => {},
    } as DOMRect);

    const thumbs = screen.getAllByRole("slider");
    fireEvent.touchStart(thumbs[1], { touches: [{ clientX: 80 }] });
    fireEvent.touchMove(document, { touches: [{ clientX: 90 }] });
    fireEvent.touchEnd(document);
    
    expect(onChange).toHaveBeenCalledWith([20, 90]);
  });

  it("handles allowCross prop", () => {
    const onChange = vi.fn();
    render(<RangeSlider min={0} max={100} defaultValue={[20, 80]} allowCross onChange={onChange} />);
    const thumbs = screen.getAllByRole("slider");
    
    // Move min (20) past max (80)
    for (let i = 0; i < 70; i++) {
        fireEvent.keyDown(thumbs[0], { key: "ArrowRight" });
    }
    expect(onChange).toHaveBeenCalledWith([90, 80]);
  });

  it("applies layout and className", () => {
    const { container } = render(
      <RangeSlider 
        label="Range" 
        layout="horizontal" 
        className="custom-range" 
      />
    );
    expect(container.querySelector(".wim-field-template")).toHaveClass("wim-field-template--horizontal");
    expect(container.querySelector(".wim-range-slider-container")).toHaveClass("custom-range");
  });
});
