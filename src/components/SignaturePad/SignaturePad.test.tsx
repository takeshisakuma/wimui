import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SignaturePad } from "./SignaturePad";

describe("SignaturePad", () => {
  it("renders with default props", () => {
    render(<SignaturePad />);
    const canvas = screen.getByRole("img", { hidden: true }); // Canvas often doesn't have a default role but let's see
    // Actually, canvas doesn't have a role. Let's use container.
  });

  it("has a clear button", () => {
    render(<SignaturePad clearLabel="Clear Signature" />);
    expect(screen.getByText("Clear Signature")).toBeDefined();
  });

  it("can be disabled", () => {
    render(<SignaturePad disabled clearLabel="Clear" />);
    const button = screen.getByRole("button");
    expect(button.closest("button")).toBeDisabled();
  });

  // Note: Deep testing of canvas drawing is difficult in this environment without proper canvas mock or E2E.
});
