import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ColorInput } from "./ColorInput";

describe("ColorInput", () => {
    it("renders color input", () => {
        render(<ColorInput placeholder="Pick a color" />);
        // Input wrapper (from Input component) renders.
        // The actual input should have type="color".
        // Based on Input implementation (not shown here but assumed), it passes type down.
        // Let's check generally. 
        // Note: Input component usually renders an input element.
        // If it renders an input with type="color", we can find it by display value or type?
        // Query selector input[type='color'] is best.
        // Since I don't have visibility into Input component internals right now, 
        // I'll assume it renders an input element.
        // Or I can look for placeholder if mapped. Input doc says `placeholder` is prop.
        const input = screen.getByPlaceholderText("Pick a color");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "color");
    });
});
