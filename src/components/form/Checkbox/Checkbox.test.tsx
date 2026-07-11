import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";
import styles from "./checkbox.module.scss";

describe("Checkbox", () => {
  it("renders with children", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("handles changes", () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange}>Check me</Checkbox>);

    const checkbox = screen.getByLabelText("Check me");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("supports indeterminate state", () => {
    render(<Checkbox indeterminate>Indeterminate</Checkbox>);
    const checkbox: HTMLInputElement = screen.getByLabelText("Indeterminate");
    expect(checkbox.indeterminate).toBe(true);
  });

  it("applies error state", () => {
    render(<Checkbox error>With error</Checkbox>);
    const checkbox = screen.getByLabelText("With error");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
    expect(checkbox).toHaveClass(styles.danger);
  });

  it("does not set aria-invalid without error", () => {
    render(<Checkbox>No error</Checkbox>);
    expect(screen.getByLabelText("No error")).not.toHaveAttribute("aria-invalid");
  });

  it("supports asChild prop", () => {
    render(
      <Checkbox asChild>
        <li data-testid="check-slot">Custom Checkbox</li>
      </Checkbox>
    );
    const element = screen.getByTestId("check-slot");
    expect(element.tagName).toBe("LI");
    expect(element).toHaveClass(styles.root);
    expect(screen.getByText("Custom Checkbox")).toBeInTheDocument();
  });
});
