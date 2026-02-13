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
        // Focus management logic is within the component, testing it requires checking document.activeElement
        expect(document.activeElement).toBe(inputs[1]);
    });

    it("handles backspace and moves focus to the previous input", () => {
        render(<OtpInput length={4} value="12" />);
        const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];

        // Focus on the second input and press backspace
        inputs[1].focus();
        fireEvent.keyDown(inputs[1], { key: "Backspace" });

        expect(inputs[1].value).toBe("");

        // Press backspace again to move to previous
        fireEvent.keyDown(inputs[1], { key: "Backspace" });
        expect(inputs[0].value).toBe("");
        expect(document.activeElement).toBe(inputs[0]);
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
        const { container } = render(<OtpInput length={1} error />);
        const input = container.querySelector("input");
        expect(input).toHaveClass("wim-otp-input--error");
    });

    it("is disabled when disabled prop is true", () => {
        render(<OtpInput length={4} disabled />);
        const inputs = screen.getAllByRole("textbox");
        inputs.forEach(input => {
            expect(input).toBeDisabled();
        });
    });
});
