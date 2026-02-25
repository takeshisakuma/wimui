import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TimePicker } from "./TimePicker";

describe("TimePicker", () => {
  it("renders input with type time", () => {
    render(<TimePicker />);
    const input = document.querySelector('input[type="time"]');
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when value changes", () => {
    const onChange = vi.fn();
    render(<TimePicker onChange={onChange} />);
    const input = document.querySelector(
      'input[type="time"]',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "12:00" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("applies error state class", () => {
    const { container } = render(<TimePicker state="error" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass("wim-input--error");
  });
});
