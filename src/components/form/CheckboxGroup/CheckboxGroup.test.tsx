import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CheckboxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3", disabled: true },
  ];

  it("renders options", () => {
    render(<CheckboxGroup options={options} />);
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 3")).toBeInTheDocument();
  });

  it("handles value changes", () => {
    const handleChange = vi.fn();
    render(<CheckboxGroup options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByLabelText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith(["opt1"]);

    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(handleChange).toHaveBeenLastCalledWith(["opt1", "opt2"]);

    fireEvent.click(screen.getByLabelText("Option 1")); // Uncheck
    expect(handleChange).toHaveBeenLastCalledWith(["opt2"]);
  });

  it("respects default value", () => {
    render(<CheckboxGroup options={options} defaultValue={["opt2"]} />);
    expect(screen.getByLabelText("Option 2")).toBeChecked();
    expect(screen.getByLabelText("Option 1")).not.toBeChecked();
  });

  it("supports controlled mode", () => {
    render(<CheckboxGroup options={options} value={["opt1"]} />);
    expect(screen.getByLabelText("Option 1")).toBeChecked();

    // Clicking shouldn't change checked state if no onChange handler updates the prop
    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(screen.getByLabelText("Option 2")).not.toBeChecked();
  });
});
