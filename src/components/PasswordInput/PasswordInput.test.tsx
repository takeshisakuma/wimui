import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PasswordInput } from "./PasswordInput";

describe("PasswordInput", () => {
  it("renders as a password input by default", () => {
    render(<PasswordInput placeholder="Enter password" />);
    const input = screen.getByPlaceholderText("Enter password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("toggles visibility when eye icon is clicked", () => {
    render(<PasswordInput placeholder="Enter password" />);
    const input = screen.getByPlaceholderText("Enter password");

    // Find the toggle button. Input component renders rightIcon in a button.
    const toggleButton = screen.getByRole("button", {
      name: "right-icon-action",
    });

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("forwards other props to Input", () => {
    render(<PasswordInput placeholder="Enter password" disabled />);
    expect(screen.getByPlaceholderText("Enter password")).toBeDisabled();
  });
});
