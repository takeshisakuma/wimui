import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ColorPicker } from "./ColorPicker";

describe("ColorPicker", () => {
  it("renders color picker input", () => {
    render(<ColorPicker data-testid="color-picker" />);
    const input = screen.getByTestId("color-picker");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "color");
    expect(input).toHaveClass("wim-colorpicker");
  });

  it("applies state classes", () => {
    render(<ColorPicker state="error" data-testid="error-picker" />);
    expect(screen.getByTestId("error-picker")).toHaveClass("wim-input--error");
  });

  it("can be disabled", () => {
    render(<ColorPicker disabled data-testid="disabled-picker" />);
    expect(screen.getByTestId("disabled-picker")).toBeDisabled();
  });
});
