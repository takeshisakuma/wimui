import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ContextMenu, ContextMenuItem } from "./ContextMenu";

describe("ContextMenu", () => {
    it("shows menu on right click", () => {
        render(
            <ContextMenu
                menu={
                    <>
                        <ContextMenuItem>Menu Item 1</ContextMenuItem>
                    </>
                }
            >
                <div data-testid="trigger">Right click me</div>
            </ContextMenu>
        );

        expect(screen.queryByText("Menu Item 1")).not.toBeInTheDocument();

        fireEvent.contextMenu(screen.getByTestId("trigger"));

        expect(screen.getByText("Menu Item 1")).toBeInTheDocument();
    });

    it("hides menu on click outside", () => {
        render(
            <ContextMenu
                menu={<ContextMenuItem>Menu Item 1</ContextMenuItem>}
            >
                <div data-testid="trigger">Trigger</div>
            </ContextMenu>
        );

        fireEvent.contextMenu(screen.getByTestId("trigger"));
        expect(screen.getByText("Menu Item 1")).toBeInTheDocument();

        fireEvent.mouseDown(document.body);
        expect(screen.queryByText("Menu Item 1")).not.toBeInTheDocument();
    });

    it("calls item onClick", () => {
        const handleClick = vi.fn();
        render(
            <ContextMenu
                menu={<ContextMenuItem onClick={handleClick}>Action</ContextMenuItem>}
            >
                <div data-testid="trigger">Trigger</div>
            </ContextMenu>
        );

        fireEvent.contextMenu(screen.getByTestId("trigger"));
        fireEvent.click(screen.getByText("Action"));

        expect(handleClick).toHaveBeenCalled();
    });
});
