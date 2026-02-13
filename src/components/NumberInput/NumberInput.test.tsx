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
});
