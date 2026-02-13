import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stats } from "./Stats";

describe("Stats", () => {
    it("renders labels and values", () => {
        render(
            <Stats>
                <Stats.Label>Total Users</Stats.Label>
                <Stats.Value>1,234</Stats.Value>
                <Stats.Description>Past 30 days</Stats.Description>
                <Stats.Trend direction="up">+12%</Stats.Trend>
            </Stats>
        );

        expect(screen.getByText("Total Users")).toBeInTheDocument();
        expect(screen.getByText("1,234")).toBeInTheDocument();
        expect(screen.getByText("Past 30 days")).toBeInTheDocument();
        expect(screen.getByText("+12%")).toBeInTheDocument();
    });

    it("applies trend direction classes", () => {
        const { container } = render(<Stats.Trend direction="down">-5%</Stats.Trend>);
        expect(container.firstChild).toHaveClass("wim-stats__trend--down");
    });
});
