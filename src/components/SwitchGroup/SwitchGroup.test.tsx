import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SwitchGroup } from "./SwitchGroup";
import React from "react";

describe("SwitchGroup", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3", disabled: true },
  ];

  it("renders all options", () => {
    render(<SwitchGroup options={options} />);
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 3")).toBeInTheDocument();
  });

  it("handles selection correctly (uncontrolled)", () => {
    render(<SwitchGroup options={options} defaultValue={["1"]} />);
    const switch1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    const switch2 = screen.getByLabelText("Option 2") as HTMLInputElement;

    expect(switch1.checked).toBe(true);
    expect(switch2.checked).toBe(false);

    fireEvent.click(switch2);
    expect(switch2.checked).toBe(true);
  });

  it("calls onChange when selection changes", () => {
    const onChange = vi.fn();
    render(<SwitchGroup options={options} onChange={onChange} />);

    fireEvent.click(screen.getByLabelText("Option 1"));
    expect(onChange).toHaveBeenCalledWith(["1"]);
  });

  it("respects disabled state", () => {
    render(<SwitchGroup options={options} />);
    const disabledSwitch = screen.getByLabelText(
      "Option 3",
    ) as HTMLInputElement;
    expect(disabledSwitch).toBeDisabled();
  });
});
