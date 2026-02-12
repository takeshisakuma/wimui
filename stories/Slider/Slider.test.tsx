import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
    it("renders with initial value", () => {
        render(<Slider defaultValue={30} />);
        const thumb = screen.getByRole("slider");
        expect(thumb).toHaveAttribute("aria-valuenow", "30");
    });

    it("calls onChange on key down", () => {
        const onChange = vi.fn();
        render(<Slider defaultValue={50} step={10} onChange={onChange} />);
        const thumb = screen.getByRole("slider");
        fireEvent.keyDown(thumb, { key: "ArrowRight" });
        expect(onChange).toHaveBeenCalledWith(60);
    });

    it("is disabled when disabled prop is true", () => {
        render(<Slider disabled />);
        const thumb = screen.getByRole("slider");
        expect(thumb).toHaveAttribute("aria-disabled", "true");
        expect(thumb).toHaveAttribute("tabindex", "-1");
    });
});
