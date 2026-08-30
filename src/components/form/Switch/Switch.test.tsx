import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./Switch";
import styles from "./switch.module.scss";

describe("Switch", () => {
  it("renders with children", () => {
    render(<Switch>Enable Notifications</Switch>);
    expect(screen.getByLabelText("Enable Notifications")).toBeInTheDocument();
  });

  it("calls onChange when toggled", () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange}>Toggle</Switch>);
    const input = screen.getByRole("switch");
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });

  it("is checked when checked prop is true", () => {
    render(<Switch checked readOnly />);
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Switch disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("applies error state", () => {
    render(<Switch error />);
    const input = screen.getByRole("switch");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass(styles.danger);
  });

  /** T239。理由と対照の意図は Checkbox 側のテストの注記を見ること。 */
  it("marks the label as bare only when there is no text label", () => {
    const { container, rerender } = render(<Switch aria-label="Notifications" />);
    expect(container.querySelector("label")).toHaveClass(styles.bare);

    rerender(<Switch>Notifications</Switch>);
    expect(container.querySelector("label")).not.toHaveClass(styles.bare);
  });

  it("supports asChild prop", () => {
    render(
      <Switch asChild>
        <li data-testid="switch-slot">Custom Switch</li>
      </Switch>,
    );
    const element = screen.getByTestId("switch-slot");
    expect(element.tagName).toBe("LI");
    expect(element).toHaveClass(styles.root);
    expect(screen.getByText("Custom Switch")).toBeInTheDocument();
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });
});
