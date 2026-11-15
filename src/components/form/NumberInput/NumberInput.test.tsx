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

  // T394: 小数をコンマで書く言語のブラウザは、"," を小数点として受け取る。"." だけを止めると、
  // allowDecimal={false} のまま 1,5 が 1.5 として入っていた。
  it("blocks the comma as well as the period when decimals are not allowed", () => {
    render(<NumberInput />);
    const input = screen.getByRole("spinbutton");
    expect(fireEvent.keyDown(input, { key: ",", cancelable: true })).toBe(false);
    expect(fireEvent.keyDown(input, { key: ".", cancelable: true })).toBe(false);
  });

  it("lets the comma and the period through when decimals are allowed", () => {
    render(<NumberInput allowDecimal />);
    const input = screen.getByRole("spinbutton");
    expect(fireEvent.keyDown(input, { key: ",", cancelable: true })).toBe(true);
    expect(fireEvent.keyDown(input, { key: ".", cancelable: true })).toBe(true);
  });

  it("does not take a pasted value that has a blocked character", () => {
    const onPaste = vi.fn();
    render(<NumberInput onPaste={onPaste} />);
    const input = screen.getByRole("spinbutton");
    const paste = (text: string) => fireEvent.paste(input, { clipboardData: { getData: () => text } });

    expect(paste("1,5")).toBe(false);
    expect(paste("1.5")).toBe(false);
    expect(paste("-3")).toBe(false);
    expect(paste("15")).toBe(true);
    // 利用者の onPaste は、止めたときも呼ぶ（onKeyDown と同じ）
    expect(onPaste).toHaveBeenCalledTimes(4);
  });

  it("takes a pasted decimal or negative value when they are allowed", () => {
    render(<NumberInput allowDecimal allowNegative />);
    const input = screen.getByRole("spinbutton");
    const paste = (text: string) => fireEvent.paste(input, { clipboardData: { getData: () => text } });

    expect(paste("-1,5")).toBe(true);
    expect(paste("1e5")).toBe(false);
  });

  it("does not block anything in mode='text'", () => {
    render(<NumberInput mode="text" />);
    const input = screen.getByRole("textbox");
    expect(fireEvent.keyDown(input, { key: ",", cancelable: true })).toBe(true);
    expect(fireEvent.paste(input, { clipboardData: { getData: () => "00-12" } })).toBe(true);
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
