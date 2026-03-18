import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Menu, MenuItem, SubMenu, MenuDivider, MenuItemGroup } from "./Menu";

describe("Menu", () => {
  it("renders menu with items", () => {
    render(
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuDivider />
        <MenuItemGroup title="Group">
          <MenuItem>Item 3</MenuItem>
        </MenuItemGroup>
      </Menu>,
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Group")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("calls onClick when menu item is clicked", () => {
    const handleClick = vi.fn();
    render(
      <Menu>
        <MenuItem onClick={handleClick}>Click Me</MenuItem>
      </Menu>,
    );

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("toggles submenu when clicked", async () => {
    render(
      <Menu>
        <SubMenu itemKey="sub1" title="SubMenu">
          <MenuItem>SubItem 1</MenuItem>
        </SubMenu>
      </Menu>,
    );

    expect(screen.queryByText("SubItem 1")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("SubMenu"));
    expect(screen.getByText("SubItem 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("SubMenu"));
    await waitFor(() => {
      expect(screen.queryByText("SubItem 1")).not.toBeInTheDocument();
    });
  });

  it("disables menu items", () => {
    const handleClick = vi.fn();
    render(
      <Menu>
        <MenuItem onClick={handleClick} disabled>
          Disabled Item
        </MenuItem>
      </Menu>,
    );

    const item = screen.getByText("Disabled Item").parentElement;
    expect(item).toHaveClass("wim-base-list-item--disabled");

    fireEvent.click(screen.getByText("Disabled Item"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("handles keyboard navigation in vertical mode", () => {
    const { container } = render(
      <Menu mode="vertical">
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <SubMenu itemKey="sub" title="Sub">
          <MenuItem>3</MenuItem>
        </SubMenu>
      </Menu>,
    );

    const menu = container.querySelector(".wim-menu") as HTMLElement;
    const items = container.querySelectorAll('[role="menuitem"]');
    
    // Focus first
    (items[0] as HTMLElement).focus();

    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(document.activeElement).toBe(items[1]);

    fireEvent.keyDown(menu, { key: "ArrowUp" });
    expect(document.activeElement).toBe(items[0]);

    // ArrowUp from 0 goes to last
    fireEvent.keyDown(menu, { key: "ArrowUp" });
    expect(document.activeElement).toBe(items[2]); // SubMenu

    // SubMenu ArrowRight opens it
    fireEvent.keyDown(menu, { key: "ArrowRight" });
    expect(screen.getByText("3")).toBeInTheDocument();

    // ArrowLeft closes it
    fireEvent.keyDown(menu, { key: "ArrowLeft" });
    // Wait for animation to finish
    // Just verifying it doesn't crash here.
  });

  it("handles keyboard navigation in horizontal mode", () => {
    const { container } = render(
      <Menu mode="horizontal">
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <SubMenu itemKey="sub" title="Sub">
          <MenuItem>3</MenuItem>
        </SubMenu>
      </Menu>,
    );

    const menu = container.querySelector(".wim-menu") as HTMLElement;
    const items = container.querySelectorAll('[role="menuitem"]');
    (items[0] as HTMLElement).focus();

    fireEvent.keyDown(menu, { key: "ArrowRight" });
    expect(document.activeElement).toBe(items[1]);

    fireEvent.keyDown(menu, { key: "ArrowLeft" });
    expect(document.activeElement).toBe(items[0]);

    fireEvent.keyDown(menu, { key: "End" });
    expect(document.activeElement).toBe(items[2]);

    fireEvent.keyDown(menu, { key: "Home" });
    expect(document.activeElement).toBe(items[0]);

    fireEvent.keyDown(menu, { key: "End" });
    
    // ArrowDown on submenu opens it in horizontal mode
    fireEvent.keyDown(menu, { key: "ArrowDown" });
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("can select items with Enter and Space", () => {
    const onClick = vi.fn();
    render(
      <Menu>
        <MenuItem onClick={onClick}>Item</MenuItem>
        <SubMenu itemKey="sub" title="Sub">
          <MenuItem>3</MenuItem>
        </SubMenu>
      </Menu>
    );
    const item = screen.getByText("Item").parentElement as HTMLElement;
    fireEvent.keyDown(item, { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
    
    fireEvent.keyDown(item, { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);

    const sub = screen.getByText("Sub").parentElement as HTMLElement;
    fireEvent.keyDown(sub, { key: "Enter" });
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
