import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TabNavigation } from "./TabNavigation";

describe("TabNavigation", () => {
    it("renders items/links", () => {
        render(
            <TabNavigation>
                <TabNavigation.Item href="/home" active>Home</TabNavigation.Item>
                <TabNavigation.Item href="/about">About</TabNavigation.Item>
            </TabNavigation>
        );
        const homeLink = screen.getByText("Home");
        expect(homeLink).toHaveAttribute("href", "/home");
        expect(homeLink).toHaveClass("wim-tab-navigation__item--active");
    });

    it("prevents click and doesn't call onClick when disabled", () => {
        const onClick = vi.fn();
        render(<TabNavigation.Item disabled onClick={onClick}>Disabled</TabNavigation.Item>);
        const item = screen.getByText("Disabled");
        fireEvent.click(item);
        expect(onClick).not.toHaveBeenCalled();
    });
});
