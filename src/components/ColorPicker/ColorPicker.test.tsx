import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ColorPicker } from "./ColorPicker";

describe("ColorPicker", () => {
  it("renders color picker input", () => {
    render(<ColorPicker data-testid="color-picker" id="color-picker" />);
    const input = screen.getByTestId("color-picker");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "color");
  });

  it("applies state classes", () => {
    render(<ColorPicker status="error" data-testid="error-picker" id="error-picker" />);
    // Check if the input itself or its wrapper has the error class.
    // In Input component, the input element gets wim-input--error
    expect(screen.getByTestId("error-picker")).toHaveClass("wim-input--error");
  });

  it("can be disabled", () => {
    render(<ColorPicker disabled data-testid="disabled-picker" />);
    expect(screen.getByTestId("disabled-picker")).toBeDisabled();
  });
});
