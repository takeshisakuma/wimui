import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SegmentedControl } from "./SegmentedControl";
import styles from "./segmented-control.module.scss";
import fieldStyles from "../FieldTemplate/field-template.module.scss";

describe("SegmentedControl", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("renders all options", () => {
    render(
      <SegmentedControl options={options} value="1" onChange={() => {}} />,
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("calls onChange when an option is clicked", () => {
    const onChange = vi.fn();
    render(
      <SegmentedControl options={options} value="1" onChange={onChange} />,
    );
    fireEvent.click(screen.getByText("Option 2"));
    expect(onChange).toHaveBeenCalledWith("2");
  });

  it("sets active class on selected option", () => {
    render(
      <SegmentedControl options={options} value="2" onChange={() => {}} />,
    );
    const activeItem = screen.getByText("Option 2").closest("button");
    expect(activeItem).toHaveClass(styles.active);
  });

  it("handles keyboard navigation (ArrowRight, ArrowDown, ArrowLeft, ArrowUp)", () => {
    const onChange = vi.fn();
    render(
      <SegmentedControl options={options} value="1" onChange={onChange} />,
    );
    const btns = screen.getAllByRole("radio");

    fireEvent.keyDown(btns[0], { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledWith("2");

    fireEvent.keyDown(btns[0], { key: "ArrowDown" });
    expect(onChange).toHaveBeenCalledWith("2");

    fireEvent.keyDown(btns[0], { key: "ArrowLeft" });
    expect(onChange).toHaveBeenCalledWith("3");

    fireEvent.keyDown(btns[0], { key: "ArrowUp" });
    expect(onChange).toHaveBeenCalledWith("3");

    fireEvent.keyDown(btns[0], { key: "a" });
    expect(onChange).toHaveBeenCalledTimes(4); // No change
  });

  it("applies size, fullWidth and custom className", () => {
    const { container } = render(
      <SegmentedControl
        options={options}
        value="1"
        onChange={() => {}}
        size="lg"
        fullWidth
        className="my-custom"
      />,
    );
    const el = screen.getByRole("radiogroup");
    expect(el).toHaveClass(styles.lg);
    expect(el).toHaveClass(styles.fullWidth);
    expect(container.firstChild).toHaveClass("my-custom"); // FieldTemplate container
  });

  it("renders with icon only", () => {
    // Only iconName, no label
    const iconOptions = [{ value: "1", iconName: "CircleIcon" as const }];
    render(
      <SegmentedControl options={iconOptions} value="1" onChange={() => {}} />,
    );
    const btn = screen.getByRole("radio");
    expect(btn).toHaveClass(styles.iconOnly);
    // Icon renders svg
    expect(btn.querySelector("svg")).toBeInTheDocument();
  });

  it("applies small and medium size classes", () => {
    const { rerender } = render(
      <SegmentedControl options={options} value="1" onChange={() => {}} size="sm" />
    );
    expect(screen.getByRole("radiogroup")).toHaveClass(styles.sm);

    rerender(<SegmentedControl options={options} value="1" onChange={() => {}} size="md" />);
    expect(screen.getByRole("radiogroup")).toHaveClass(styles.md);
  });

  it("applies horizontal layout class", () => {
    const { container } = render(
      <SegmentedControl options={options} value="1" onChange={() => {}} layout="horizontal" />
    );
    expect(container.querySelector(`.${fieldStyles.root}`)).toHaveClass(fieldStyles.horizontal);
  });
});
