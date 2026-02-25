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

    const expandBtn = screen.getByLabelText("Expand");
    fireEvent.click(expandBtn);

    act(() => {
      vi.advanceTimersByTime(10);
    });

    expect(screen.getByText("Child 1.1")).toBeInTheDocument();
  });

  it("selects item when clicked", () => {
    render(
      <TreeView defaultSelectedValues={["1"]}>
        <TreeViewItem value="1" label="Root 1" />
        <TreeViewItem value="2" label="Root 2" />
      </TreeView>,
    );

    const item1 = screen.getByText("Root 1").parentElement?.parentElement;
    const item2 = screen.getByText("Root 2").parentElement?.parentElement;

    expect(item1).toHaveClass("wim-tree-view-item--selected");

    fireEvent.click(screen.getByText("Root 2"));
    expect(item2).toHaveClass("wim-tree-view-item--selected");
    expect(item1).not.toHaveClass("wim-tree-view-item--selected");
  });

  it("handles checkboxes", () => {
    const onCheckedChange = vi.fn();
    render(
      <TreeView checkable onCheckedChange={onCheckedChange}>
        <TreeViewItem value="1" label="Root 1" />
      </TreeView>,
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onCheckedChange).toHaveBeenCalledWith(["1"]);
  });

  it("filters items by search query", () => {
    render(
      <TreeView searchable>
        <TreeViewItem value="apple" label="Apple" />
        <TreeViewItem value="banana" label="Banana" />
      </TreeView>,
    );

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "app" } });

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  });
});
