import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { OtpInput } from "./OtpInput";

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
    expect(input).toHaveClass("wim-otp-input--error");
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
});
