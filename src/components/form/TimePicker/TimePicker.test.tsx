import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TimePicker } from "./TimePicker";
import inputStyles from "../Input/input.module.scss";

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
    const { container } = render(<TimePicker error="Required" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass(inputStyles.error);
  });
});
