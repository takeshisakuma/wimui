import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Group } from "./Group";

describe("Group", () => {
    it("renders children", () => {
        render(
            <Group>
                <div>Item 1</div>
                <div>Item 2</div>
            </Group>
        );
        expect(screen.getByText("Item 1")).toBeInTheDocument();
    });

    it("applies grow styles to children", () => {
        render(
            <Group grow>
                <div data-testid="item">Item 1</div>
            </Group>
        );
        const item = screen.getByTestId("item");
        expect(item).toHaveStyle({ flexGrow: "1" });
    });
});
