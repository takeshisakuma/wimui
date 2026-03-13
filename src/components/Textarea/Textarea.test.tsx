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
});
