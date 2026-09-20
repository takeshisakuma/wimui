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
    // メニューは body 直下のポータルに出るので、項目から DOM を遡ってもルートには
    // 着かない（React はポータル越しでも React ツリーでイベントを伝播させるため、
    // 実際のキー操作はルートの onKeyDown に届く）。
    const dropdown = trigger.closest('[role="none"]') as HTMLElement;

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

  // T264: 開く手段が公開されていなかったので、VRT はメニューを一度も撮れず、
  // 使う側も行の操作から開けなかった。契約は Popover / HoverCard に合わせてある。
  it("starts open with defaultOpen and still closes from the trigger", async () => {
    render(
      <Dropdown defaultOpen>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Rename</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.getByText("Rename")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    await waitFor(() => {
      expect(screen.queryByText("Rename")).not.toBeInTheDocument();
    });
  });

  it("lets the caller own the open state with open + onOpenChange", async () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Dropdown open={false} onOpenChange={onOpenChange}>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Rename</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.queryByText("Rename")).not.toBeInTheDocument();

    // 制御下ではクリックは**要求を伝えるだけ**で、自分では開かない。
    fireEvent.click(screen.getByText("Toggle"));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByText("Rename")).not.toBeInTheDocument();

    rerender(
      <Dropdown open onOpenChange={onOpenChange}>
        <DropdownTrigger>Toggle</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Rename</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(screen.getByText("Rename")).toBeInTheDocument();

    // 外側クリックの dismiss も、閉じる代わりに false を伝える。
    fireEvent.mouseDown(document.body);
    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
    expect(screen.getByText("Rename")).toBeInTheDocument();
  });
});
