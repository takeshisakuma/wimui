import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SignaturePad } from "./SignaturePad";

describe("SignaturePad", () => {
  it("renders with default props", () => {
    const { container } = render(<SignaturePad />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("has a clear button", () => {
    render(<SignaturePad clearLabel="Clear Signature" />);
    expect(screen.getByText("Clear Signature")).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<SignaturePad disabled clearLabel="Clear" />);
    const button = screen.getByRole("button");
    expect(button.closest("button")).toBeDisabled();
  });

  // Note: Deep testing of canvas drawing is difficult in this environment without proper canvas mock or E2E.
});
