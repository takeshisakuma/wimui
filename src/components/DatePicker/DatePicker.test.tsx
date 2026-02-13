import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
    it("renders input", () => {
        render(<DatePicker placeholder="Select Date" />);
        expect(screen.getByPlaceholderText("Select Date")).toBeInTheDocument();
    });

    it("opens calendar on click", () => {
        render(<DatePicker />);
        const input = screen.getByPlaceholderText("Select date");

        // Ideally checking for calendar presence visually.
        // Calendar component implementation details not fully known, but usually has days.
        // Or we can check if dropdown container appears.
        expect(document.querySelector(".wim-datepicker-dropdown")).not.toBeInTheDocument();

        fireEvent.click(input);

        expect(document.querySelector(".wim-datepicker-dropdown")).toBeInTheDocument();
    });

    it("displays formatted date", () => {
        const date = new Date(2023, 0, 15); // Jan 15 2023
        render(<DatePicker value={date} format="YYYY-MM-DD" readOnly />);

        expect(screen.getByDisplayValue("2023-01-15")).toBeInTheDocument();
    });

    it("can be cleared", () => {
        const handleChange = vi.fn();
        const date = new Date(2023, 0, 15);
        render(<DatePicker value={date} onChange={handleChange} clearable />);

        const clearBtn = screen.getByLabelText("Clear date");
        fireEvent.click(clearBtn);

        expect(handleChange).toHaveBeenCalledWith(null);
    });
});
