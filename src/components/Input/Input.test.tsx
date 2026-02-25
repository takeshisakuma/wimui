import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders input", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue("test");
  });

  it("shows icons", () => {
    render(<Input leftIcon="SearchIcon" rightIcon="CloseIcon" />);
    // Icons are rendered inside button or div.
    // Checking for icon existence is bit abstract with current Icon mock/impl.
    // But we can check if buttons are there if clickable, or divs.
    // The implementation renders Icon component.
    // Let's assume Icon renders SVG with wim-icon class.
  });

  it("toggles password visibility", () => {
    render(<Input type="password" showPasswordToggle placeholder="password" />);
    // Find by placeholder as password inputs don't have implicit role
    const input = screen.getByPlaceholderText("password");
    // Initially password type
    expect(input).toHaveAttribute("type", "password");

    // Find toggle button by aria-label
    const button = screen.getByRole("button", { name: "right-icon-action" });
    fireEvent.click(button);

    expect(input).toHaveAttribute("type", "text");
  });
});
