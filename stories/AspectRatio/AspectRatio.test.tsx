import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AspectRatio } from "./AspectRatio";

describe("AspectRatio", () => {
    it("renders children", () => {
        render(
            <AspectRatio ratio={16 / 9}>
                <div data-testid="child">Content</div>
            </AspectRatio>
        );
        expect(screen.getByTestId("child")).toBeInTheDocument();
        expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies the ratio as a CSS variable", () => {
        const { container } = render(
            <AspectRatio ratio={2}>
                <div>Content</div>
            </AspectRatio>
        );
        const element = container.firstChild as HTMLElement;
        expect(element.style.getPropertyValue("--wim-aspect-ratio")).toBe("2");
    });

    it("applies custom className", () => {
        render(
            <AspectRatio ratio={1} className="custom-class">
                <div>Content</div>
            </AspectRatio>
        );
        expect(screen.getByText("Content").parentElement?.parentElement).toHaveClass("custom-class");
    });
});
