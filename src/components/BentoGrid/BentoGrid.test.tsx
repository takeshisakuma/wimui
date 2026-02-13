import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

describe("BentoGrid", () => {
    it("renders children", () => {
        render(
            <BentoGrid>
                <div data-testid="child">Child Content</div>
            </BentoGrid>
        );
        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<BentoGrid className="custom-grid" />);
        expect(container.firstChild).toHaveClass("custom-grid");
    });
});

describe("BentoGridItem", () => {
    it("renders title, description, and header", () => {
        render(
            <BentoGridItem
                title="Item Title"
                description="Item Description"
                header={<div data-testid="header">Header</div>}
                icon={<span data-testid="icon">Icon</span>}
            />
        );
        expect(screen.getByText("Item Title")).toBeInTheDocument();
        expect(screen.getByText("Item Description")).toBeInTheDocument();
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<BentoGridItem className="custom-item" />);
        expect(container.firstChild).toHaveClass("custom-item");
    });
});
