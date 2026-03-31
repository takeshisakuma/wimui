import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuDivider,
  ContextMenuGroup,
} from "./ContextMenu";

const menu = (
  <>
    <ContextMenuItem>Menu Item 1</ContextMenuItem>
  </>
);

describe("ContextMenu", () => {
  it("shows menu on right click", () => {
    render(
      <ContextMenu menu={menu}>
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

    const floatingMenu = document.querySelector('[role="menu"]') as HTMLElement;
    fireEvent.keyDown(floatingMenu, { key: "ArrowDown" });
    expect(screen.getByText("Item 2").closest('[role="menuitem"]')).toHaveFocus();

    fireEvent.keyDown(floatingMenu, { key: "ArrowUp" });
    expect(screen.getByText("Item 1").closest('[role="menuitem"]')).toHaveFocus();
  });

  it("does not open menu when disabled", () => {
    render(
      <ContextMenu menu={menu} disabled>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));

    expect(screen.queryByText("Menu Item 1")).not.toBeInTheDocument();
  });

  it("opens menu with Enter key", async () => {
    render(
      <ContextMenu menu={<ContextMenuItem>Item 1</ContextMenuItem>}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    const container = screen.getByRole("button");
    fireEvent.keyDown(container, { key: "Enter" });

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
    });
  });

  it("opens menu with Space key", async () => {
    render(
      <ContextMenu menu={<ContextMenuItem>Item 1</ContextMenuItem>}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    const container = screen.getByRole("button");
    fireEvent.keyDown(container, { key: " " });

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
    });
  });

  it("does not open with keyboard when disabled", () => {
    render(
      <ContextMenu menu={menu} disabled>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(screen.queryByText("Menu Item 1")).not.toBeInTheDocument();
  });

  it("closes menu on Escape key in the floating menu", async () => {
    render(
      <ContextMenu menu={<ContextMenuItem>Item 1</ContextMenuItem>}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    const floatingMenu = document.querySelector('[role="menu"]') as HTMLElement;
    fireEvent.keyDown(floatingMenu, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
  });

  it("closes menu on click inside the floating menu", async () => {
    render(
      <ContextMenu menu={<ContextMenuItem>Item 1</ContextMenuItem>}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    const floatingMenu = document.querySelector('[role="menu"]') as HTMLElement;
    fireEvent.click(floatingMenu);

    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
  });

  it("applies custom className to container", () => {
    const { container } = render(
      <ContextMenu menu={menu} className="my-class">
        <div>Trigger</div>
      </ContextMenu>,
    );
    expect(container.querySelector(".wim-context-menu-container")).toHaveClass("my-class");
  });

  it("sets tabIndex -1 on container when disabled", () => {
    render(
      <ContextMenu menu={menu} disabled>
        <div>Trigger</div>
      </ContextMenu>,
    );
    expect(screen.getByRole("button")).toHaveAttribute("tabIndex", "-1");
  });
});

describe("ContextMenuItem", () => {
  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <ContextMenu
        menu={
          <ContextMenuItem onClick={handleClick} disabled>
            Disabled Item
          </ContextMenuItem>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    fireEvent.click(screen.getByText("Disabled Item"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with icon", () => {
    render(
      <ContextMenu
        menu={
          <ContextMenuItem icon={<span data-testid="icon">★</span>}>
            With Icon
          </ContextMenuItem>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders with danger style", () => {
    render(
      <ContextMenu
        menu={<ContextMenuItem danger>Delete</ContextMenuItem>}
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    const item = screen.getByText("Delete").closest('[role="menuitem"]');
    expect(item).toHaveClass("wim-base-list-item--danger");
  });

  it("works without onClick callback", () => {
    render(
      <ContextMenu
        menu={<ContextMenuItem>No Handler</ContextMenuItem>}
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(() => fireEvent.click(screen.getByText("No Handler"))).not.toThrow();
  });

  it("applies custom className", () => {
    render(
      <ContextMenu
        menu={<ContextMenuItem className="my-item">Item</ContextMenuItem>}
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByText("Item").closest('[role="menuitem"]')).toHaveClass("my-item");
  });

  it("activates item with Enter key", () => {
    const handleClick = vi.fn();
    render(
      <ContextMenu
        menu={<ContextMenuItem onClick={handleClick}>Item</ContextMenuItem>}
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    const item = screen.getByText("Item").closest('[role="menuitem"]') as HTMLElement;
    fireEvent.keyDown(item, { key: "Enter" });

    expect(handleClick).toHaveBeenCalled();
  });
});

describe("ContextMenuDivider", () => {
  it("renders a separator element", () => {
    render(
      <ContextMenu menu={<ContextMenuDivider />}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ContextMenu menu={<ContextMenuDivider className="my-divider" />}>
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByRole("separator")).toHaveClass("my-divider");
  });
});

describe("ContextMenuGroup", () => {
  it("renders children", () => {
    render(
      <ContextMenu
        menu={
          <ContextMenuGroup>
            <ContextMenuItem>Grouped Item</ContextMenuItem>
          </ContextMenuGroup>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByText("Grouped Item")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <ContextMenu
        menu={
          <ContextMenuGroup title="Group Title">
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuGroup>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(screen.getByText("Group Title")).toBeInTheDocument();
  });

  it("does not render title element when title is not provided", () => {
    render(
      <ContextMenu
        menu={
          <ContextMenuGroup>
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuGroup>
        }
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(
      document.querySelector(".wim-context-menu-group__title"),
    ).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ContextMenu
        menu={<ContextMenuGroup className="my-group"><ContextMenuItem>Item</ContextMenuItem></ContextMenuGroup>}
      >
        <div data-testid="trigger">Trigger</div>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByTestId("trigger"));
    expect(document.querySelector(".wim-context-menu-group")).toHaveClass("my-group");
  });
});
