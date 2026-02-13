import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    it("renders children", () => {
        render(
            <Sidebar>
                <Sidebar.Header>Header</Sidebar.Header>
                <Sidebar.Content>Content</Sidebar.Content>
                <Sidebar.Footer>Footer</Sidebar.Footer>
            </Sidebar>
        );

        expect(screen.getByText("Header")).toBeInTheDocument();
        expect(screen.getByText("Content")).toBeInTheDocument();
        expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("applies collapsed class", () => {
        const { container } = render(<Sidebar collapsed />);
        expect(container.querySelector("aside")).toHaveClass("wim-sidebar--collapsed");
    });

    it("renders sidebar items with icons", () => {
        render(
            <Sidebar>
                <Sidebar.Item icon={<span data-testid="icon">Icon</span>}>Item Label</Sidebar.Item>
            </Sidebar>
        );

        expect(screen.getByTestId("icon")).toBeInTheDocument();
        expect(screen.getByText("Item Label")).toBeInTheDocument();
    });
});
