import { render, screen } from "@testing-library/react";
import { Marquee } from "./Marquee";
import { describe, it, expect } from "vitest";

describe("Marquee", () => {
    it("should render children multiple times", () => {
        render(
            <Marquee repeat={3}>
                <div data-testid="item">Item</div>
            </Marquee>
        );
        expect(screen.getAllByTestId("item")).toHaveLength(3);
    });

    it("should apply correct styles for duration", () => {
        const { container } = render(
            <Marquee duration={10}>
                <div>Item</div>
            </Marquee>
        );
        const marquee = container.firstChild as HTMLElement;
        expect(marquee.style.getPropertyValue("--duration")).toBe("10s");
    });
});
