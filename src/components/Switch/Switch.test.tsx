import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with label", () => {
    render(<Switch label="Enable Notifications" />);
    expect(screen.getByLabelText("Enable Notifications")).toBeInTheDocument();
  });

  it("calls onChange when toggled", () => {
    const onChange = vi.fn();
    render(<Switch label="Toggle" onChange={onChange} />);
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
});
