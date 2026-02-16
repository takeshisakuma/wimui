import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Combobox } from "./Combobox";

describe("Combobox", () => {
    const options = [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
    ];

    it("renders input field", () => {
        render(<Combobox options={options} placeholder="Select fruit" />);
        expect(screen.getByPlaceholderText("Select fruit")).toBeInTheDocument();
    });

    it("shows options on focus/input", () => {
        render(<Combobox options={options} />);
        const input = screen.getByRole("combobox");

        fireEvent.focus(input);
        expect(screen.getByText("Apple")).toBeInTheDocument();
        expect(screen.getByText("Banana")).toBeInTheDocument();
    });

    it("filters options", () => {
        render(<Combobox options={options} />);
        const input = screen.getByRole("combobox");

        fireEvent.change(input, { target: { value: "Ban" } });

        expect(screen.queryByText("Apple")).not.toBeInTheDocument();
        expect(screen.getByText("Banana")).toBeInTheDocument();
    });

    it("calls onSelect when option clicked", () => {
        const handleSelect = vi.fn();
        render(<Combobox options={options} onSelect={handleSelect} />);
        const input = screen.getByRole("combobox");

        fireEvent.focus(input);
        fireEvent.click(screen.getByText("Cherry"));

        expect(handleSelect).toHaveBeenCalledWith({ label: "Cherry", value: "cherry" });
        expect(input).toHaveValue("Cherry");
    });
});
