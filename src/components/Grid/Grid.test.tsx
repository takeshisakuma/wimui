import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./Grid";

describe("Grid", () => {
    it("renders children", () => {
        render(
            <Grid>
                <div>Item 1</div>
                <div>Item 2</div>
            </Grid>
        );
        expect(screen.getByText("Item 1")).toBeInTheDocument();
    });

    it("applies style for cols", () => {
        render(<Grid cols={3} data-testid="grid" />);
        const grid = screen.getByTestId("grid");
        expect(grid).toHaveStyle({ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" });
    });
});
