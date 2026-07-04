import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PasswordInput } from "./PasswordInput";

describe("PasswordInput", () => {
  // placeholder は型レベルで禁止されているため、aria-label で要素を特定する
  it("renders as a password input by default", () => {
    render(<PasswordInput aria-label="Password" />);
    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("toggles visibility when eye icon is clicked", async () => {
    render(<PasswordInput aria-label="Password" />);
    const input = screen.getByLabelText("Password");

    // Find the toggle button. Input component renders rightIcon in a button.
    const toggleButton = screen.getByRole("button", {
      name: "Show password",
    });

    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(input).toHaveAttribute("type", "text");
    });

    // Re-query because the label changed
    const hideButton = screen.getByRole("button", {
      name: "Hide password",
    });

    fireEvent.click(hideButton);
    await waitFor(() => {
      expect(input).toHaveAttribute("type", "password");
    });
  });

  it("forwards other props to Input", () => {
    render(<PasswordInput aria-label="Password" disabled />);
    expect(screen.getByLabelText("Password")).toBeDisabled();
  });
});
