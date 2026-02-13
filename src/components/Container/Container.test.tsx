import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
    it("renders children", () => {
        render(<Container>Content</Container>);
        expect(screen.getByText("Content")).toBeInTheDocument();
        expect(screen.getByText("Content")).toHaveClass("wim-container");
    });

    it("applies fluid styling", () => {
        render(<Container fluid>Fluid Content</Container>);
        const container = screen.getByText("Fluid Content");
        // Fluid sets maxWidth to 100%
        expect(container).toHaveStyle({ maxWidth: "100%" });
    });

    it("applies size styling", () => {
        render(<Container size="sm">Small Content</Container>);
        const container = screen.getByText("Small Content");
        // sm is 720px
        expect(container).toHaveStyle({ maxWidth: "720px" });
    });
});
