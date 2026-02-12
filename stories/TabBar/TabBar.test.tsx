import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TabBar } from "./TabBar";

describe("TabBar", () => {
    it("renders children and applies fixed class by default", () => {
        const { container } = render(
            <TabBar>
                <TabBar.Item label="Home" />
            </TabBar>
        );
        expect(container.firstChild).toHaveClass("wim-tab-bar--fixed");
        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("renders labels and icons", () => {
        render(
            <TabBar>
                <TabBar.Item icon={<span data-testid="icon">Icon</span>} label="Settings" />
            </TabBar>
        );
        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();
    });
});
