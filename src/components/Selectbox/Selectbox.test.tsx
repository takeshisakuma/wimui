import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Selectbox } from "./Selectbox";
import React from "react";

describe("Selectbox", () => {
    const options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3", disabled: true },
    ];

    it("renders with placeholder", () => {
        render(<Selectbox options={options} placeholder="Select item" />);
        expect(screen.getByText("Select item")).toBeInTheDocument();
    });

    it("opens dropdown and selects an option", async () => {
        const onChange = vi.fn();
        render(<Selectbox options={options} onChange={onChange} />);

        const trigger = screen.getByRole("combobox");
        fireEvent.click(trigger);

        const option1 = screen.getByRole("option", { name: "Option 1" });
        fireEvent.click(option1);

        expect(onChange).toHaveBeenCalledWith("1");
        await waitFor(() => {
            expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument();
        }, { timeout: 1000 });
    });

    it("shows label when provided", () => {
        render(<Selectbox options={options} label="My Label" />);
        expect(screen.getByText("My Label")).toBeInTheDocument();
    });

    it("does not select disabled options", () => {
        const onChange = vi.fn();
        render(<Selectbox options={options} onChange={onChange} />);

        fireEvent.click(screen.getByRole("combobox"));
        const disabledOption = screen.getByText("Option 3");
        fireEvent.click(disabledOption);

        expect(onChange).not.toHaveBeenCalled();
    });
});
