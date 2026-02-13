import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputMask } from "./InputMask";

describe("InputMask", () => {
    it("renders input", () => {
        render(<InputMask mask="999" placeholder="Enter number" />);
        expect(screen.getByPlaceholderText("Enter number")).toBeInTheDocument();
    });

    it("masks input value", () => {
        render(<InputMask mask="99-99" />);
        const input = screen.getByRole("textbox");

        // Input "1234" -> "12-34"
        fireEvent.change(input, { target: { value: "1234" } });
        expect(input).toHaveValue("12-34");
    });

    it("filters invalid char", () => {
        render(<InputMask mask="99" />);
        const input = screen.getByRole("textbox");

        // Input "1a2" -> "1" (stops at 'a')
        fireEvent.change(input, { target: { value: "1a2" } });
        expect(input).toHaveValue("1");
    });
});
