import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./Icon";

describe("Icon", () => {
    it("renders icon", () => {
        const { container } = render(<Icon name="CircleIcon" />);
        // Checking if SVG is rendered.
        // Implementation: <IconComponent className=... />
        // IconComponent is SVG.
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("wim-icon");
    });

    it("applies size and color", () => {
        const { container } = render(<Icon name="CircleIcon" size="large" color="primary" />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("wim-icon--lg");
        expect(svg).toHaveClass("wim-icon--primary");
    });

    it("returns null if name not found", () => {
        // @ts-expect-error: Testing invalid icon name behavior
        const { container } = render(<Icon name="NonExistentIcon" />);
        expect(container.firstChild).toBeNull();
    });
});
