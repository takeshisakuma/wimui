import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SegmentedControl } from "./SegmentedControl";

describe("SegmentedControl", () => {
    const options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
    ];

    it("renders all options", () => {
        render(<SegmentedControl options={options} value="1" onChange={() => { }} />);
        expect(screen.getByText("Option 1")).toBeInTheDocument();
        expect(screen.getByText("Option 2")).toBeInTheDocument();
        expect(screen.getByText("Option 3")).toBeInTheDocument();
    });

    it("calls onChange when an option is clicked", () => {
        const onChange = vi.fn();
        render(<SegmentedControl options={options} value="1" onChange={onChange} />);
        fireEvent.click(screen.getByText("Option 2"));
        expect(onChange).toHaveBeenCalledWith("2");
    });

    it("sets active class on selected option", () => {
        render(<SegmentedControl options={options} value="2" onChange={() => { }} />);
        const activeItem = screen.getByText("Option 2").closest("button");
        expect(activeItem).toHaveClass("wim-segmented-control__item--active");
    });
});
