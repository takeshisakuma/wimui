import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { OtpInput } from "./OtpInput";
import styles from "./otp-input.module.scss";

describe("OtpInput", () => {
  it("renders the correct number of input boxes", () => {
    render(<OtpInput length={4} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("handles typing and moves focus to the next input", () => {
    render(<OtpInput length={4} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];

    fireEvent.change(inputs[0], { target: { value: "1" } });
    expect(inputs[0].value).toBe("1");
    expect(document.activeElement).toBe(inputs[1]);
  });

  it("typing last character does not advance focus past end", () => {
    render(<OtpInput length={2} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    fireEvent.change(inputs[1], { target: { value: "9" } });
    expect(inputs[1].value).toBe("9");
    // No focus shift since we are at the last input
  });

  // マウント時に渡された value は「変化」ではないので、同期を差分でしか行わないと
  // 一度も表示されない（保存済みコードの再表示・ステップの再マウントで消える）。
  it("shows the value it is mounted with", () => {
    render(<OtpInput length={6} value="418203" />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    expect(inputs.map((input) => input.value).join("")).toBe("418203");
  });

  it("pads the value it is mounted with when it is shorter than length", () => {
    render(<OtpInput length={4} value="41" />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    expect(inputs.map((input) => input.value)).toEqual(["4", "1", "", ""]);
  });

  it("handles backspace and moves focus to the previous input", () => {
    render(<OtpInput length={4} value="12" />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];

    inputs[1].focus();
    fireEvent.keyDown(inputs[1], { key: "Backspace" });

    expect(inputs[1].value).toBe("");

    fireEvent.keyDown(inputs[1], { key: "Backspace" });
    expect(inputs[0].value).toBe("");
    expect(document.activeElement).toBe(inputs[0]);
  });

  it("handles backspace on non-empty input clears current", () => {
    render(<OtpInput length={4} value="12" />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    inputs[0].focus();
    // Input[0] has value "1" - pressing backspace should clear it
    fireEvent.keyDown(inputs[0], { key: "Backspace" });
    expect(inputs[0].value).toBe("");
  });

  it("handles ArrowLeft navigation", () => {
    render(<OtpInput length={3} value="12" />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    inputs[1].focus();
    fireEvent.keyDown(inputs[1], { key: "ArrowLeft" });
    expect(document.activeElement).toBe(inputs[0]);
  });

  it("ArrowLeft at index 0 does not navigate", () => {
    render(<OtpInput length={3} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    inputs[0].focus();
    fireEvent.keyDown(inputs[0], { key: "ArrowLeft" });
    // No crash, still on inputs[0]
    expect(document.activeElement).toBe(inputs[0]);
  });

  it("handles ArrowRight navigation", () => {
    render(<OtpInput length={3} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    inputs[0].focus();
    fireEvent.keyDown(inputs[0], { key: "ArrowRight" });
    expect(document.activeElement).toBe(inputs[1]);
  });

  it("ArrowRight at last index does not navigate", () => {
    render(<OtpInput length={3} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    inputs[2].focus();
    fireEvent.keyDown(inputs[2], { key: "ArrowRight" });
    expect(document.activeElement).toBe(inputs[2]);
  });

  it("handles paste", () => {
    const handleChange = vi.fn();
    render(<OtpInput length={4} onChange={handleChange} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];

    const pasteData = {
      clipboardData: {
        getData: () => "1234",
      },
    };

    fireEvent.paste(inputs[0], pasteData);

    expect(inputs[0].value).toBe("1");
    expect(inputs[1].value).toBe("2");
    expect(inputs[2].value).toBe("3");
    expect(inputs[3].value).toBe("4");
    expect(handleChange).toHaveBeenCalledWith("1234");
  });

  it("renders with error state", () => {
    const { container } = render(<OtpInput length={1} error="error" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass(styles.danger);
  });

  it("is disabled when disabled prop is true", () => {
    render(<OtpInput length={4} disabled />);
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it("renders label", () => {
    render(<OtpInput length={4} label="Enter OTP" />);
    expect(screen.getByText("Enter OTP")).toBeInTheDocument();
  });

  it("renders required indicator with label", () => {
    render(<OtpInput length={4} label="OTP" required />);
    expect(screen.getByText("OTP")).toBeInTheDocument();
  });

  it("renders horizontal layout", () => {
    const { container } = render(<OtpInput length={3} layout="horizontal" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("does not crash when no onChange provided and typing", () => {
    render(<OtpInput length={3} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    fireEvent.change(inputs[0], { target: { value: "5" } });
    expect(inputs[0].value).toBe("5");
  });

  it("syncs value prop changes via derived state", () => {
    const { rerender } = render(<OtpInput length={3} value="" />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];

    rerender(<OtpInput length={3} value="xyz" />);
    expect(inputs[0].value).toBe("x");
    expect(inputs[1].value).toBe("y");
    expect(inputs[2].value).toBe("z");
  });

  // digitAriaLabel は 1 始まりで呼ばれる。型にそう書いてあるだけでは黙って
  // ずれるので、位置そのものを固定する。0 始まりと解釈して +1 すると
  // 最初の箱が "Digit 2" になる（実際に踏んだ）。
  it("calls digitAriaLabel with 1-based positions", () => {
    const digitAriaLabel = vi.fn((position: number) => `Digit ${position}`);
    render(<OtpInput length={3} labels={{ digitAriaLabel }} />);

    expect(digitAriaLabel.mock.calls.map(([p]) => p)).toEqual([1, 2, 3]);
  });

  it("names the first box 'Digit 1' by default", () => {
    render(<OtpInput length={3} />);
    const inputs = screen.getAllByRole("textbox");

    expect(inputs[0]).toHaveAttribute("aria-label", "Digit 1");
    expect(inputs[2]).toHaveAttribute("aria-label", "Digit 3");
  });

  // T424: 端末の SMS のコードの候補は `one-time-code` の欄に出る。最初の欄だけに付ける
  it("asks for the one-time code on the first box only, with a numeric keyboard", () => {
    render(<OtpInput length={4} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveAttribute("autocomplete", "one-time-code");
    for (const input of inputs.slice(1)) expect(input).toHaveAttribute("autocomplete", "off");
    for (const input of inputs) expect(input).toHaveAttribute("inputmode", "numeric");
  });

  it("uses a text keyboard for codes with letters", () => {
    render(<OtpInput length={4} inputMode="text" />);
    for (const input of screen.getAllByRole("textbox")) expect(input).toHaveAttribute("inputmode", "text");
  });

  // iOS の自動入力はコード全体を最初の欄へ入れる。以前は最後の 1 桁しか残らなかった
  it("spreads a whole code that arrives in one box across the boxes", () => {
    const onChange = vi.fn();
    render(<OtpInput length={6} onChange={onChange} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    fireEvent.change(inputs[0], { target: { value: "482913" } });
    expect(inputs.map((i) => i.value).join("")).toBe("482913");
    expect(onChange).toHaveBeenLastCalledWith("482913");
    expect(document.activeElement).toBe(inputs[5]);
  });

  it("still replaces the digit when typing over a filled box", () => {
    const onChange = vi.fn();
    render(<OtpInput length={4} value="1" onChange={onChange} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    fireEvent.change(inputs[0], { target: { value: "12" } });
    expect(inputs[0].value).toBe("2");
    expect(inputs[1].value).toBe("");
    expect(onChange).toHaveBeenLastCalledWith("2");
  });
});
