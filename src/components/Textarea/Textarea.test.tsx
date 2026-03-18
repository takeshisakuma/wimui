import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders and accepts input", () => {
    const onChange = vi.fn();
    render(<Textarea placeholder="Enter text" onChange={onChange} />);
    const textarea = screen.getByPlaceholderText("Enter text");
    fireEvent.change(textarea, { target: { value: "Hello" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("applies fullWidth class", () => {
    render(<Textarea fullWidth />);
    expect(screen.getByRole("textbox")).toHaveClass("wim-textarea--full-width");
  });

  it("applies fieldSizing content class", () => {
    render(<Textarea fieldSizing="content" />);
    expect(screen.getByRole("textbox")).toHaveClass("wim-textarea--field-sizing-content");
  });

  it("handles error state and aria-describedby", () => {
    render(<Textarea error="This is required" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("wim-textarea--error");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    
    // The error message is rendered within a div with role="alert"
    const errorAlert = screen.getByRole("alert");
    expect(errorAlert).toHaveTextContent("This is required");
    expect(textarea).toHaveAttribute("aria-describedby", errorAlert.id);
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Textarea variant="outline" />);
    expect(screen.getByRole("textbox")).toHaveClass("wim-textarea--outline");

    rerender(<Textarea variant="ghost" />);
    expect(screen.getByRole("textbox")).toHaveClass("wim-textarea--ghost");
  });
});
