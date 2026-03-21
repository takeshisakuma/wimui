import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { TreeView, TreeViewItem } from "./TreeView";

describe("TreeView", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("renders tree items", () => {
    render(
      <TreeView>
        <TreeViewItem value="1" label="Root 1">
          <TreeViewItem value="1.1" label="Child 1.1" />
        </TreeViewItem>
        <TreeViewItem value="2" label="Root 2" />
      </TreeView>,
    );
    expect(screen.getByText("Root 1")).toBeInTheDocument();
    expect(screen.getByText("Root 2")).toBeInTheDocument();
  });

  it("expands item when expand button is clicked", () => {
    render(
      <TreeView>
        <TreeViewItem value="1" label="Root 1">
          <TreeViewItem value="1.1" label="Child 1.1" />
        </TreeViewItem>
      </TreeView>,
    );

    expect(screen.queryByText("Child 1.1")).not.toBeInTheDocument();

    const expandBtn = screen.getByLabelText("Expand Root 1");
    fireEvent.click(expandBtn);

    act(() => {
      vi.advanceTimersByTime(10);
    });

    expect(screen.getByText("Child 1.1")).toBeInTheDocument();
  });

  it("selects item when clicked", () => {
    const onSelectedChange = vi.fn();
    render(
      <TreeView defaultSelectedValues={["1"]} onSelectedChange={onSelectedChange}>
        <TreeViewItem value="1" label="Root 1" />
        <TreeViewItem value="2" label="Root 2" />
      </TreeView>,
    );

    const item1 = screen.getByText("Root 1").closest(".wim-tree-view-item");
    const item2 = screen.getByText("Root 2").closest(".wim-tree-view-item");

    expect(item1).toHaveClass("wim-tree-view-item--selected");

    fireEvent.click(screen.getByText("Root 2"));
    expect(item2).toHaveClass("wim-tree-view-item--selected");
    expect(item1).not.toHaveClass("wim-tree-view-item--selected");
    expect(onSelectedChange).toHaveBeenCalledWith(["2"]);
  });

  it("handles multiSelect mode", () => {
    const onSelectedChange = vi.fn();
    render(
      <TreeView multiSelect onSelectedChange={onSelectedChange}>
        <TreeViewItem value="1" label="Root 1" />
        <TreeViewItem value="2" label="Root 2" />
      </TreeView>,
    );

    fireEvent.click(screen.getByText("Root 1"));
    fireEvent.click(screen.getByText("Root 2"));

    const item1 = screen.getByText("Root 1").closest(".wim-tree-view-item");
    const item2 = screen.getByText("Root 2").closest(".wim-tree-view-item");

    expect(item1).toHaveClass("wim-tree-view-item--selected");
    expect(item2).toHaveClass("wim-tree-view-item--selected");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["1", "2"]);
    
    // Toggle off
    fireEvent.click(screen.getByText("Root 1"));
    expect(item1).not.toHaveClass("wim-tree-view-item--selected");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["2"]);
  });

  it("handles checkboxes with toggleCheck", () => {
    const onCheckedChange = vi.fn();
    render(
      <TreeView checkable onCheckedChange={onCheckedChange}>
        <TreeViewItem value="1" label="Root 1" />
      </TreeView>,
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalledWith(["1"]);
    
    // Toggle off
    fireEvent.click(checkbox);
    expect(onCheckedChange).toHaveBeenLastCalledWith([]);
  });

  it("filters items by search query and shows parent if child matches", () => {
    render(
      <TreeView searchable>
        <TreeViewItem value="parent" label="Parent">
          <TreeViewItem value="apple" label="Apple" />
          <TreeViewItem value="banana" label="Banana" />
        </TreeViewItem>
      </TreeView>,
    );

    const searchInput = screen.getByPlaceholderText("Search...");
    
    // Search for "app" -> should show Parent and Apple
    fireEvent.change(searchInput, { target: { value: "app" } });
    
    act(() => {
      vi.advanceTimersByTime(20);
    });

    expect(screen.getByText("Parent")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  });

  it("handles keyboard navigation (ArrowDown, ArrowUp, Home, End)", () => {
    render(
      <TreeView defaultSelectedValues={["1"]}>
        <TreeViewItem value="1" label="Item 1" />
        <TreeViewItem value="2" label="Item 2" />
        <TreeViewItem value="3" label="Item 3" />
      </TreeView>,
    );

    const item1 = screen.getByText("Item 1").closest('[role="treeitem"]') as HTMLElement;
    const item2 = screen.getByText("Item 2").closest('[role="treeitem"]') as HTMLElement;
    const item3 = screen.getByText("Item 3").closest('[role="treeitem"]') as HTMLElement;

    item1.focus();
    
    fireEvent.keyDown(item1, { key: "ArrowDown" });
    expect(document.activeElement).toBe(item2);

    fireEvent.keyDown(item2, { key: "ArrowDown" });
    expect(document.activeElement).toBe(item3);

    fireEvent.keyDown(item3, { key: "ArrowUp" });
    expect(document.activeElement).toBe(item2);

    fireEvent.keyDown(item2, { key: "Home" });
    expect(document.activeElement).toBe(item1);

    fireEvent.keyDown(item1, { key: "End" });
    expect(document.activeElement).toBe(item3);
  });

  it("handles keyboard expansion (ArrowRight, ArrowLeft)", async () => {
    render(
      <TreeView>
        <TreeViewItem value="1" label="Parent">
          <TreeViewItem value="1.1" label="Child" />
        </TreeViewItem>
      </TreeView>,
    );

    const parent = screen.getByText("Parent").closest('[role="treeitem"]') as HTMLElement;
    
    act(() => {
      parent.focus();
    });

    // ArrowRight to expand
    act(() => {
      fireEvent.keyDown(parent, { key: "ArrowRight" });
    });
    
    act(() => {
      vi.advanceTimersByTime(20);
    });

    expect(screen.getByText("Child")).toBeInTheDocument();

    // ArrowRight again to move to first child
    act(() => {
      fireEvent.keyDown(parent, { key: "ArrowRight" });
    });
    
    await vi.waitFor(() => {
        expect(document.activeElement?.getAttribute("data-value")).toBe("1.1");
    });

    const child = screen.getByText("Child").closest('[role="treeitem"]') as HTMLElement;
    
    // ArrowLeft to move back to parent
    act(() => {
      fireEvent.keyDown(child, { key: "ArrowLeft" });
    });
    expect(document.activeElement).toBe(parent);

    // ArrowLeft again to collapse
    act(() => {
      fireEvent.keyDown(parent, { key: "ArrowLeft" });
    });
  });

  it("handles enter and space keys", () => {
    const onSelectedChange = vi.fn();
    render(
      <TreeView onSelectedChange={onSelectedChange}>
        <TreeViewItem value="1" label="Item 1" />
      </TreeView>,
    );

    const item = screen.getByText("Item 1").closest('[role="treeitem"]')!;
    
    fireEvent.keyDown(item, { key: "Enter" });
    expect(onSelectedChange).toHaveBeenCalledWith(["1"]);

    fireEvent.keyDown(item, { key: " ", code: "Space" });
    expect(onSelectedChange).toHaveBeenCalledTimes(2);
  });

  it("handles container focus", () => {
    render(
      <TreeView defaultSelectedValues={["2"]}>
        <TreeViewItem value="1" label="Item 1" />
        <TreeViewItem value="2" label="Item 2" />
      </TreeView>,
    );

    const tree = screen.getByRole("tree");
    const item2 = screen.getByText("Item 2").closest('[role="treeitem"]')!;
    
    // Focus container -> should focus selected item
    fireEvent.focus(tree);
    expect(document.activeElement).toBe(item2);
  });

  it("handles disabled items", () => {
    const onSelectedChange = vi.fn();
    render(
      <TreeView onSelectedChange={onSelectedChange}>
        <TreeViewItem value="1" label="Disabled" disabled />
      </TreeView>,
    );

    const item = screen.getByText("Disabled").closest(".wim-tree-view-item");
    expect(item).toHaveClass("wim-tree-view-item--disabled");

    fireEvent.click(screen.getByText("Disabled"));
    expect(onSelectedChange).not.toHaveBeenCalled();
    
    fireEvent.keyDown(item!, { key: "Enter" });
    expect(onSelectedChange).not.toHaveBeenCalled();
  });

  it("applies width prop", () => {
    const { container } = render(
      <TreeView width="500px">
        <TreeViewItem value="1" label="Item" />
      </TreeView>,
    );
    const tree = container.querySelector(".wim-tree-view");
    expect(tree).toHaveStyle({ width: "500px" });
  });

  it("throws error if item is used outside TreeView", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<TreeViewItem value="1" label="Fail" />)).toThrow("TreeView components must be used within a TreeView");
    consoleError.mockRestore();
  });
});
