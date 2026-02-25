import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("handles changes", () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Check me" onChange={handleChange} />);

    const checkbox = screen.getByLabelText("Check me");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("supports indeterminate state", () => {
    render(<Checkbox label="Indeterminate" indeterminate />);
    const checkbox: HTMLInputElement = screen.getByLabelText("Indeterminate");
    expect(checkbox.indeterminate).toBe(true);
  });

  it("can be disabled", () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByLabelText("Disabled")).toBeDisabled();
  });
});
