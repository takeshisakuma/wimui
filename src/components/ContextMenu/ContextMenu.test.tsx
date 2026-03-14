import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
      </ContextMenu>,
    );

    expect(screen.queryByText("Menu Item 1")).not.toBeInTheDocument();

    fireEvent.contextMenu(screen.getByTestId("trigger"));

    expect(screen.getByText("Menu Item 1")).toBeInTheDocument();
  });

  it("hides menu on click outside", async () => {
    render(
      <ContextMenu menu={<ContextMenuItem>Menu Item 1</ContextMenuItem>}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByText("Menu Item 1")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    fireEvent.pointerDown(document.body);
    await waitFor(() => {
      expect(screen.queryByText("Menu Item 1")).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it("calls item onClick", () => {
    const handleClick = vi.fn();
    render(
      <ContextMenu
        menu={<ContextMenuItem onClick={handleClick}>Action</ContextMenuItem>}
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    fireEvent.click(screen.getByText("Action"));

    expect(handleClick).toHaveBeenCalled();
  });

  it("focuses the first item when opened", async () => {
    render(
      <ContextMenu
        menu={
          <>
            <ContextMenuItem>Item 1</ContextMenuItem>
            <ContextMenuItem>Item 2</ContextMenuItem>
          </>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByText("Item 1").closest('[role="menuitem"]')).toHaveFocus();
    });
  });

  it("navigates with arrow keys", async () => {
    render(
      <ContextMenu
        menu={
          <>
            <ContextMenuItem>Item 1</ContextMenuItem>
            <ContextMenuItem>Item 2</ContextMenuItem>
          </>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByText("Item 1").closest('[role="menuitem"]')).toHaveFocus();
    });

    // Use querySelector directly: jsdom's partial popover API hides [popover="manual"] elements
    // from the accessibility tree until showPopover() resolves, causing getByRole to fail.
    const menu = document.querySelector('[role="menu"]') as HTMLElement;
    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(screen.getByText("Item 2").closest('[role="menuitem"]')).toHaveFocus();

    fireEvent.keyDown(menu, { key: "ArrowUp" });
    expect(screen.getByText("Item 1").closest('[role="menuitem"]')).toHaveFocus();
  });
});

