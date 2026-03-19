import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3", disabled: true },
  ];

  it("renders all options", () => {
    render(<RadioGroup options={options} />);
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 3")).toBeInTheDocument();
  });

  it("calls onChange when an option is selected", () => {
    const onChange = vi.fn();
    render(<RadioGroup options={options} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(onChange).toHaveBeenCalledWith("2");
  });

  it("respects controlled value", () => {
    render(<RadioGroup options={options} value="1" />);
    expect(screen.getByLabelText("Option 1")).toBeChecked();
    expect(screen.getByLabelText("Option 2")).not.toBeChecked();
  });

  it("respects horizontal direction", () => {
    render(
      <RadioGroup options={options} direction="horizontal" />,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("wim-radio-group--horizontal");
  });

  it("uncontrolled: updates internal value on change", () => {
    render(<RadioGroup options={options} defaultValue="1" />);
    expect(screen.getByLabelText("Option 1")).toBeChecked();
    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(screen.getByLabelText("Option 2")).toBeChecked();
  });

  it("renders label and sets aria-labelledby", () => {
    const { container } = render(<RadioGroup options={options} label="My Group" />);
    expect(screen.getByText("My Group")).toBeInTheDocument();
    expect(container.querySelector("[role='radiogroup']")).toHaveAttribute("aria-labelledby");
  });

  it("renders error message", () => {
    render(<RadioGroup options={options} error="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
