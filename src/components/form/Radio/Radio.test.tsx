import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";
import styles from "./radio.module.scss";

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

  it("applies error state", () => {
    render(<Radio error>With error</Radio>);
    expect(screen.getByLabelText("With error")).toHaveClass(styles.danger);
  });

  /** T239。理由と対照の意図は Checkbox 側のテストの注記を見ること。 */
  it("marks the label as bare only when there is no text label", () => {
    const { container, rerender } = render(<Radio aria-label="Select row" />);
    expect(container.querySelector("label")).toHaveClass(styles.bare);

    rerender(<Radio>Option 1</Radio>);
    expect(container.querySelector("label")).not.toHaveClass(styles.bare);
  });
});
