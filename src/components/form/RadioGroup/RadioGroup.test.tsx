import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RadioGroup } from "./RadioGroup";
import styles from "./radio-group.module.scss";

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
    expect(screen.getByRole("radiogroup")).toHaveClass(styles.horizontal);
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

describe("RadioGroup card variant and descriptions (T365)", () => {
  const shipping = [
    { label: "Standard", value: "std", description: "3 to 5 days, free" },
    { label: "Express", value: "exp", description: "Next day, 900 yen" },
  ];

  it("links each description to its radio", () => {
    render(<RadioGroup options={shipping} variant="card" label="Shipping" />);
    // 名前は名前の文字だけ。説明文は説明としてだけ読む（label の中にあるので、何もしないと 2 回読まれる）
    const radio = screen.getByRole("radio", { name: "Express" });
    expect(radio).toHaveAccessibleName("Express");
    expect(radio).toHaveAccessibleDescription("Next day, 900 yen");
  });

  it("selects an option by clicking anywhere on its card", () => {
    const onChange = vi.fn();
    render(<RadioGroup options={shipping} variant="card" onChange={onChange} />);
    fireEvent.click(screen.getByText("Next day, 900 yen"));
    expect(onChange).toHaveBeenCalledWith("exp");
    expect(screen.getByRole("radio", { name: /Express/ })).toBeChecked();
  });

  it("keeps the label as the name when there is no description", () => {
    render(<RadioGroup options={[{ label: "Pickup", value: "pick" }]} variant="card" />);
    const radio = screen.getByRole("radio", { name: "Pickup" });
    expect(radio).not.toHaveAttribute("aria-describedby");
  });
});
