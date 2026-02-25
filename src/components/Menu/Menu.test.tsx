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
    expect(item).toHaveClass("wim-menu-item--disabled");

    fireEvent.click(screen.getByText("Disabled Item"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
