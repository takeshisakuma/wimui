import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { NumberInput } from "./NumberInput";

describe("NumberInput", () => {
  it("renders as a number input", () => {
    render(<NumberInput placeholder="Enter number" />);
    const input = screen.getByPlaceholderText("Enter number");
    expect(input).toHaveAttribute("type", "number");
  });

  it("handles value changes", () => {
    const handleChange = vi.fn();
    render(<NumberInput placeholder="Enter number" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Enter number");

    fireEvent.change(input, { target: { value: "42" } });

    expect(handleChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe("42");
  });

  it("applies standard input props", () => {
    render(<NumberInput disabled />);
    expect(screen.getByRole("spinbutton")).toBeDisabled();
  });

  it("blocks e, E, -, +, and . by default in number mode", () => {
    const onKeyDown = vi.fn();
    render(<NumberInput onKeyDown={onKeyDown} />);
    const input = screen.getByRole("spinbutton") as HTMLInputElement;

    const dispatchKey = (key: string) => {
      const event = { key, cancelable: true } as unknown as React.KeyboardEvent<HTMLInputElement>;
      const result = fireEvent.keyDown(input, event);
      return !result; // fireEvent returns false if preventDefault was called
    };

    expect(dispatchKey("e")).toBe(true);
    expect(dispatchKey("E")).toBe(true);
    expect(dispatchKey("-")).toBe(true);
    expect(dispatchKey("+")).toBe(true);
    expect(dispatchKey(".")).toBe(true);
    expect(dispatchKey("1")).toBe(false);

    expect(onKeyDown).toHaveBeenCalledTimes(6);
  });

  it("allows configured keys in number mode", () => {
    render(<NumberInput allowDecimal allowNegative />);
    const input = screen.getByRole("spinbutton") as HTMLInputElement;

    const dispatchKey = (key: string) => {
      const event = { key, cancelable: true } as unknown as React.KeyboardEvent<HTMLInputElement>;
      const result = fireEvent.keyDown(input, event);
      return !result;
    };

    expect(dispatchKey("-")).toBe(false);
    expect(dispatchKey("+")).toBe(false);
    expect(dispatchKey(".")).toBe(false);
    expect(dispatchKey("e")).toBe(true);
  });

  it("renders as text input in mode='text'", () => {
    render(<NumberInput mode="text" placeholder="Text mode" />);
    const input = screen.getByPlaceholderText("Text mode");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("inputmode", "numeric");
    expect(input).toHaveAttribute("pattern", "[0-9]*");

    // it should not block keys in text mode from handleKeyDown
    const dispatchKey = (key: string) => {
      const event = { key, cancelable: true } as unknown as React.KeyboardEvent<HTMLInputElement>;
      const result = fireEvent.keyDown(input, event);
      return !result;
    };

    expect(dispatchKey("e")).toBe(false);
  });
});
