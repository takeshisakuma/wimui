import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Portal } from "./Portal";

describe("Portal", () => {
    it("renders children into document.body by default", () => {
        render(
            <div>
                <div data-testid="parent">Parent</div>
                <Portal>
                    <div data-testid="portal-content">Portal Content</div>
                </Portal>
            </div>
        );

        const content = screen.getByTestId("portal-content");
        expect(content).toBeInTheDocument();
        expect(content.parentElement).toBe(document.body);
    });

    it("renders children into a custom container", () => {
        const container = document.createElement("div");
        container.setAttribute("data-testid", "custom-container");
        document.body.appendChild(container);

        render(
            <Portal container={container}>
                <div data-testid="portal-content">Portal Content</div>
            </Portal>
        );

        const content = screen.getByTestId("portal-content");
        expect(content).toBeInTheDocument();
        expect(content.parentElement).toBe(container);

        document.body.removeChild(container);
    });
});
