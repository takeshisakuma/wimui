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
});
