import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders with children", () => {
    render(<Radio>Option 1</Radio>);
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const onChange = vi.fn();
    render(<Radio onChange={onChange}>Option 1</Radio>);
    fireEvent.click(screen.getByLabelText("Option 1"));
    expect(onChange).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Radio disabled>Option 1</Radio>);
    expect(screen.getByLabelText("Option 1")).toBeDisabled();
  });
});
