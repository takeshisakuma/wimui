import { createRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SwitchGroup } from "./SwitchGroup";
import styles from "./switch-group.module.scss";

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
    const disabledSwitch = screen.getByLabelText("Option 3") as HTMLInputElement;
    expect(disabledSwitch).toBeDisabled();
  });

  it("uncontrolled: unchecking removes from value", () => {
    const onChange = vi.fn();
    render(<SwitchGroup options={options} defaultValue={["1", "2"]} onChange={onChange} />);
    const switch1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    expect(switch1.checked).toBe(true);
    fireEvent.click(switch1);
    expect(onChange).toHaveBeenCalledWith(["2"]);
  });

  it("controlled mode renders checked state", () => {
    render(<SwitchGroup options={options} value={["2"]} />);
    const switch2 = screen.getByLabelText("Option 2") as HTMLInputElement;
    expect(switch2.checked).toBe(true);
  });

  it("controlled mode calls onChange but does not change internal state", () => {
    const onChange = vi.fn();
    render(<SwitchGroup options={options} value={["1"]} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(onChange).toHaveBeenCalledWith(["1", "2"]);
    // controlled, so switch2 stays unchecked
    const switch2 = screen.getByLabelText("Option 2") as HTMLInputElement;
    expect(switch2.checked).toBe(false);
  });

  it("applies horizontal direction class", () => {
    const { container } = render(<SwitchGroup options={options} direction="horizontal" />);
    expect(container.querySelector(`.${styles.horizontal}`)).toBeInTheDocument();
  });

  it("renders label and sets aria-labelledby", () => {
    const { container } = render(<SwitchGroup options={options} label="My Group" />);
    expect(screen.getByText("My Group")).toBeInTheDocument();
    const group = container.querySelector("[role='group']");
    expect(group).toHaveAttribute("aria-labelledby");
  });

  it("renders error message and links it to the group via aria-describedby", () => {
    const { container } = render(<SwitchGroup options={options} error="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
    const message = screen.getByRole("alert");
    const group = container.querySelector("[role='group']");
    expect(group).toHaveAttribute("aria-describedby", message.id);
    expect(message.id).toBeTruthy();
  });

  it("forwards ref to the group element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<SwitchGroup options={options} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveAttribute("role", "group");
  });

  it("spreads extra props onto the group element", () => {
    const { container } = render(
      <SwitchGroup options={options} data-testid="switch-group" id="my-group" />,
    );
    const group = container.querySelector("[role='group']");
    expect(group).toHaveAttribute("data-testid", "switch-group");
    expect(group).toHaveAttribute("id", "my-group");
  });

  it("propagates error state to the switches", () => {
    render(<SwitchGroup options={options} error="Required" />);
    expect(screen.getByLabelText("Option 1")).toHaveAttribute("aria-invalid", "true");
  });
});
