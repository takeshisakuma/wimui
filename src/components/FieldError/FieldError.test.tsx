import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FieldError } from "./FieldError";
import React from "react";

describe("FieldError", () => {
  it("renders the error message", () => {
    render(<FieldError content="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("has correct role and aria-live attributes", () => {
    render(<FieldError content="Error" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveAttribute("aria-live", "polite");
  });
});
