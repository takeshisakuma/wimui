import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Slider } from "./Slider";
import styles from "./slider.module.scss";
import fieldStyles from "../FieldTemplate/field-template.module.scss";

describe("Slider", () => {
  it("renders with initial value", () => {
    render(<Slider defaultValue={30} />);
    const thumb = screen.getByRole("slider");
    expect(thumb).toHaveAttribute("aria-valuenow", "30");
  });

  it("calls onChange on various keys", () => {
    const onChange = vi.fn();
    render(<Slider defaultValue={50} min={0} max={100} step={10} onChange={onChange} />);
    const thumb = screen.getByRole("slider");
    
    // Arrow Right
    fireEvent.keyDown(thumb, { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledWith(60);
    
    // Arrow Up
    fireEvent.keyDown(thumb, { key: "ArrowUp" });
    expect(onChange).toHaveBeenCalledWith(70);
    
    // Arrow Left
    fireEvent.keyDown(thumb, { key: "ArrowLeft" });
    expect(onChange).toHaveBeenCalledWith(60);
    
    // Arrow Down
    fireEvent.keyDown(thumb, { key: "ArrowDown" });
    expect(onChange).toHaveBeenCalledWith(50);
    
    // Home
    fireEvent.keyDown(thumb, { key: "Home" });
    expect(onChange).toHaveBeenCalledWith(0);
    
    // End
    fireEvent.keyDown(thumb, { key: "End" });
    expect(onChange).toHaveBeenCalledWith(100);
    
    // Other key
    fireEvent.keyDown(thumb, { key: "a" });
    expect(onChange).toHaveBeenCalledTimes(6); // no change
  });

  it("is disabled when disabled prop is true", () => {
    render(<Slider disabled />);
    const thumb = screen.getByRole("slider");
    expect(thumb).toHaveAttribute("aria-disabled", "true");
    expect(thumb).toHaveAttribute("tabindex", "-1");
  });

  it("handles mouse events on track", () => {
    const onChange = vi.fn();
    const onAfterChange = vi.fn();
    const { container } = render(
      <Slider defaultValue={50} min={0} max={100} onChange={onChange} onAfterChange={onAfterChange} />
    );
    
    const sliderContainer = container.querySelector('[role="presentation"]') as HTMLDivElement;
    const trackContainer = container.querySelector(`.${styles.trackContainer}`) as HTMLDivElement;
    
    if (trackContainer) {
      trackContainer.getBoundingClientRect = vi.fn().mockReturnValue({
        left: 0, width: 100, top: 0, height: 10, bottom: 10, right: 100, x: 0, y: 0, toJSON: () => {},
      });
    }

    fireEvent.mouseDown(sliderContainer, { clientX: 20 });
    expect(onChange).toHaveBeenCalledWith(20);
    
    // Mouse move
    fireEvent.mouseMove(document, { clientX: 30 });
    expect(onChange).toHaveBeenCalledWith(30);
    
    // Mouse up
    fireEvent.mouseUp(document);
    expect(onAfterChange).toHaveBeenCalledWith(30);
  });

  it("handles touch events", () => {
    const onChange = vi.fn();
    const { container } = render(<Slider min={0} max={100} onChange={onChange} />);
    const slider = container.querySelector('[role="presentation"]') as HTMLElement;
    const track = container.querySelector(`.${styles.trackContainer}`) as HTMLElement;
    
    vi.spyOn(track, "getBoundingClientRect").mockReturnValue({
      left: 0, width: 100, top: 0, height: 10, bottom: 10, right: 100, x: 0, y: 0, toJSON: () => {},
    } as DOMRect);

    // Touch start
    fireEvent.touchStart(slider, { touches: [{ clientX: 40 }] });
    expect(onChange).toHaveBeenCalledWith(40);

    // Touch move
    fireEvent.touchMove(document, { touches: [{ clientX: 60 }] });
    expect(onChange).toHaveBeenCalledWith(60);

    // Touch end
    fireEvent.touchEnd(document);
    // onAfterChange not tested here but it follows same logic as mouseUp
  });

  it("applies layout and status classes", () => {
    const { container } = render(
      <Slider 
        label="Slider Label" 
        error="Field error" 
        layout="horizontal" 
        className="custom-slider" 
        disabled
      />
    );
    expect(container.querySelector(`.${fieldStyles.root}`)).toHaveClass(fieldStyles.horizontal);
    const sliderRoot = container.querySelector('[role="presentation"]');
    expect(sliderRoot).toHaveClass(styles.disabled);
    expect(container.querySelector(`.${fieldStyles.root}`)).toHaveClass("custom-slider");
    expect(screen.getByRole("alert")).toHaveTextContent("Field error");
  });

  it("applies error state to the slider visuals", () => {
    const { container } = render(<Slider error="Field error" aria-label="With error" />);
    const sliderRoot = container.querySelector('[role="presentation"]');
    expect(sliderRoot).toHaveClass(styles.error);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-invalid", "true");
  });
});
