import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

describe("Card", () => {
    it("renders children", () => {
        render(<Card>Content</Card>);
        expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies variant styles", () => {
        const { container } = render(<Card variant="outline" />);
        expect(container.firstChild).toHaveClass("wim-card--outline");
    });

    it("applies padding and radius", () => {
        const { container } = render(<Card padding="lg" radius="none" />);
        expect(container.firstChild).toHaveClass("wim-card--padding-lg");
        expect(container.firstChild).toHaveClass("wim-card--radius-none");
    });

    it("renders composed components correctly", () => {
        render(
            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        );
        expect(screen.getByText("Header")).toHaveClass("wim-card__header");
        expect(screen.getByText("Body")).toHaveClass("wim-card__body");
        expect(screen.getByText("Footer")).toHaveClass("wim-card__footer");
    });

    it("renders as custom element", () => {
        const { container } = render(<Card as="section">Content</Card>);
        expect(container.querySelector("section")).toBeInTheDocument();
    });
});
