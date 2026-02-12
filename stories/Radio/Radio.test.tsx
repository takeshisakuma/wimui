import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
    it("renders with label", () => {
        render(<Radio label="Option 1" />);
        expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    });

    it("calls onChange when clicked", () => {
        const onChange = vi.fn();
        render(<Radio label="Option 1" onChange={onChange} />);
        fireEvent.click(screen.getByLabelText("Option 1"));
        expect(onChange).toHaveBeenCalled();
    });

    it("is disabled when disabled prop is true", () => {
        render(<Radio label="Option 1" disabled />);
        expect(screen.getByLabelText("Option 1")).toBeDisabled();
    });
});
