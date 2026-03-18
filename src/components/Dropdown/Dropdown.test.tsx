import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "./Dropdown";

describe("Dropdown", () => {
  it("toggles menu on click", async () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
  });

  it("closes on item click", async () => {
    const handleClick = vi.fn();
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={handleClick}>Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    fireEvent.click(screen.getByText("Toggle"));
    fireEvent.click(screen.getByText("Action"));

    expect(handleClick).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.queryByText("Action")).not.toBeInTheDocument();
    });
  });

  it("closes on outside click", async () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    fireEvent.click(screen.getByText("Toggle"));
    expect(screen.getByText("Item")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    await waitFor(() => {
      expect(screen.queryByText("Item")).not.toBeInTheDocument();
    });
  });

  it("handles keyboard navigation (ArrowDown, ArrowUp, Home, End, Tab, Escape)", async () => {
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    const trigger = screen.getByText("Toggle");
    fireEvent.click(trigger);
    
    // items should be rendered
    const items = screen.getAllByRole("menuitem");
    const dropdown = items[0].closest(".wim-dropdown") as HTMLElement;

    fireEvent.keyDown(dropdown, { key: "ArrowDown" });
    expect(document.activeElement).toBe(items[1]);

    fireEvent.keyDown(dropdown, { key: "ArrowUp" });
    expect(document.activeElement).toBe(items[0]);

    // ArrowUp on first element loops to last
    fireEvent.keyDown(dropdown, { key: "ArrowUp" });
    expect(document.activeElement).toBe(items[2]);

    fireEvent.keyDown(dropdown, { key: "Home" });
    expect(document.activeElement).toBe(items[0]);

    fireEvent.keyDown(dropdown, { key: "End" });
    expect(document.activeElement).toBe(items[2]);

    // Escape closes
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
    
    // Re-open and Tab
    fireEvent.click(trigger);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    fireEvent.keyDown(dropdown, { key: "Tab" });
    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
  });

  it("selects item with Enter or Space on item and trigger", async () => {
    const onClick = vi.fn();
    render(
      <Dropdown>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={onClick}>Item 1</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    const trigger = screen.getByText("Toggle");
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    const item = screen.getByText("Item 1");
    fireEvent.keyDown(item, { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
    
    // Reopen and Space
    fireEvent.keyDown(trigger, { key: " " });
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByText("Item 1"), { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
