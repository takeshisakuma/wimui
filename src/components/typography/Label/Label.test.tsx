import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
  it("renders label text", () => {
    render(<Label label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders required badge", () => {
    render(<Label label="Username" required />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("renders optional badge", () => {
    render(<Label label="Username" showOptional />);
    expect(screen.getByText("Optional")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Label label="Test">
        <input />
      </Label>,
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
