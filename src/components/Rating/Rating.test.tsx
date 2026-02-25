import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("renders correct number of stars", () => {
    const { container } = render(<Rating count={5} />);
    expect(container.querySelectorAll(".wim-rating__star")).toHaveLength(5);
  });

  it("calls onChange when a star is clicked", () => {
    const onChange = vi.fn();
    const { container } = render(<Rating count={5} onChange={onChange} />);
    const stars = container.querySelectorAll(".wim-rating__star");
    fireEvent.click(stars[2]); // 3rd star
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("shows half stars when displayValue has .5", () => {
    const { container } = render(<Rating value={2.5} allowHalf />);
    const stars = container.querySelectorAll(".wim-rating__star");
    expect(stars[2]).toHaveClass("wim-rating__star--half");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Rating disabled />);
    expect(screen.getByRole("radiogroup")).toHaveClass("wim-rating--disabled");
  });
});
