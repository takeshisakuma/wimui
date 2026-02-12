import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VisuallyHidden } from "./VisuallyHidden";

describe("VisuallyHidden", () => {
    it("renders children", () => {
        render(<VisuallyHidden>Hidden Content</VisuallyHidden>);
        expect(screen.getByText("Hidden Content")).toBeInTheDocument();
    });

    it("has correct CSS class", () => {
        const { container } = render(<VisuallyHidden>Content</VisuallyHidden>);
        expect(container.firstChild).toHaveClass("wim-visually-hidden");
    });

    it("forwards attributes to the span", () => {
        render(<VisuallyHidden id="test-id">Content</VisuallyHidden>);
        expect(screen.getByText("Content")).toHaveAttribute("id", "test-id");
    });
});
