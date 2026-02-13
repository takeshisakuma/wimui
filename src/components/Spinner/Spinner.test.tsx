import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
    it("renders svg indicator", () => {
        const { container } = render(<Spinner />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders label when provided", () => {
        render(<Spinner label="Loading..." />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("applies size and color classes to svg", () => {
        const { container } = render(<Spinner size="lg" color="success" />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("wim-spinner--lg");
        expect(svg).toHaveClass("wim-spinner--success");
    });
});
