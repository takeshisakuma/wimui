import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { TreeView, TreeViewItem, type TreeViewNode } from "./TreeView";
import styles from "./tree-view.module.scss";

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

    const item1 = screen.getByText("Root 1").closest(`.${styles.item}`);
    const item2 = screen.getByText("Root 2").closest(`.${styles.item}`);

    expect(item1).toHaveClass(styles.selected);

    fireEvent.click(screen.getByText("Root 2"));
    expect(item2).toHaveClass(styles.selected);
    expect(item1).not.toHaveClass(styles.selected);
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

    const item1 = screen.getByText("Root 1").closest(`.${styles.item}`);
    const item2 = screen.getByText("Root 2").closest(`.${styles.item}`);

    expect(item1).toHaveClass(styles.selected);
    expect(item2).toHaveClass(styles.selected);
    expect(onSelectedChange).toHaveBeenLastCalledWith(["1", "2"]);
    
    // Toggle off
    fireEvent.click(screen.getByText("Root 1"));
    expect(item1).not.toHaveClass(styles.selected);
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
      <TreeView searchable labels={{ searchPlaceholder: "Search..." }}>
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

    const item = screen.getByText("Disabled").closest(`.${styles.item}`);
    expect(item).toHaveClass(styles.disabled);

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
    const tree = container.querySelector(`.${styles.root}`);
    expect(tree).toHaveStyle({ width: "500px" });
  });

  it("throws error if item is used outside TreeView", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<TreeViewItem value="1" label="Fail" />)).toThrow("TreeView components must be used within a TreeView");
    consoleError.mockRestore();
  });

  describe("data-driven mode (nodes prop)", () => {
    const treeNodes: TreeViewNode[] = [
      {
        value: "1",
        label: "Root 1",
        children: [
          { value: "1.1", label: "Child 1.1" },
          { value: "1.2", label: "Child 1.2" },
        ],
      },
      { value: "2", label: "Root 2" },
    ];

    it("renders root nodes", () => {
      render(<TreeView nodes={treeNodes} />);
      expect(screen.getByText("Root 1")).toBeInTheDocument();
      expect(screen.getByText("Root 2")).toBeInTheDocument();
    });

    it("renders numeric label as text", () => {
      render(<TreeView nodes={[{ value: "n", label: 42 }]} />);
      expect(screen.getByText("42")).toBeInTheDocument();
    });

    it("does not render children initially when node is collapsed", () => {
      render(<TreeView nodes={treeNodes} />);
      expect(screen.queryByText("Child 1.1")).not.toBeInTheDocument();
    });

    it("expands node when expand button is clicked", () => {
      render(<TreeView nodes={treeNodes} />);
      fireEvent.click(screen.getByLabelText("Expand Root 1"));
      expect(screen.getByText("Child 1.1")).toBeInTheDocument();
      expect(screen.getByText("Child 1.2")).toBeInTheDocument();
    });

    it("collapses expanded node when expand button is clicked again", () => {
      render(<TreeView nodes={treeNodes} defaultExpandedValues={["1"]} />);
      expect(screen.getByText("Child 1.1")).toBeInTheDocument();
      fireEvent.click(screen.getByLabelText("Collapse Root 1"));
      expect(screen.queryByText("Child 1.1")).not.toBeInTheDocument();
    });

    it("selects node on click and calls onSelectedChange", () => {
      const onSelectedChange = vi.fn();
      render(<TreeView nodes={treeNodes} onSelectedChange={onSelectedChange} />);
      fireEvent.click(screen.getByText("Root 2"));
      expect(onSelectedChange).toHaveBeenCalledWith(["2"]);
    });

    it("respects defaultExpandedValues", () => {
      render(<TreeView nodes={treeNodes} defaultExpandedValues={["1"]} />);
      expect(screen.getByText("Child 1.1")).toBeInTheDocument();
    });

    it("does not select disabled node on click", () => {
      const onSelectedChange = vi.fn();
      const disabledNodes: TreeViewNode[] = [{ value: "1", label: "Disabled Node", disabled: true }];
      render(<TreeView nodes={disabledNodes} onSelectedChange={onSelectedChange} />);
      fireEvent.click(screen.getByText("Disabled Node"));
      expect(onSelectedChange).not.toHaveBeenCalled();
    });

    it("renders icons when provided on nodes", () => {
      const nodesWithIcon: TreeViewNode[] = [
        { value: "1", label: "With Icon", icon: <span data-testid="custom-icon" /> },
      ];
      render(<TreeView nodes={nodesWithIcon} />);
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("filters nodes by search query and shows matching ancestors", () => {
      render(<TreeView nodes={treeNodes} searchable labels={{ searchPlaceholder: "Search..." }} />);
      fireEvent.change(screen.getByTestId("tree-view-search-input"), {
        target: { value: "1.1" },
      });
      expect(screen.getByText("Root 1")).toBeInTheDocument();
      expect(screen.getByText("Child 1.1")).toBeInTheDocument();
      expect(screen.queryByText("Child 1.2")).not.toBeInTheDocument();
      expect(screen.queryByText("Root 2")).not.toBeInTheDocument();
    });

    it("shows no results when search matches nothing", () => {
      render(<TreeView nodes={treeNodes} searchable labels={{ searchPlaceholder: "Search..." }} />);
      fireEvent.change(screen.getByTestId("tree-view-search-input"), {
        target: { value: "zzz" },
      });
      expect(screen.queryByText("Root 1")).not.toBeInTheDocument();
      expect(screen.queryByText("Root 2")).not.toBeInTheDocument();
    });

    it("applies labelId as aria-labelledby when no treeAriaLabel", () => {
      render(<TreeView nodes={treeNodes} labelId="external-label" />);
      expect(screen.getByRole("tree")).toHaveAttribute("aria-labelledby", "external-label");
    });

    it("uses treeAriaLabel and omits aria-labelledby", () => {
      render(
        <TreeView nodes={treeNodes} labels={{ treeAriaLabel: "My Tree" }} labelId="external" />,
      );
      expect(screen.getByRole("tree")).toHaveAttribute("aria-label", "My Tree");
      expect(screen.getByRole("tree")).not.toHaveAttribute("aria-labelledby");
    });

    it("uses virtual list when flatNodes exceed virtualThreshold", () => {
      const manyNodes = Array.from({ length: 5 }, (_, i) => ({
        value: `${i}`,
        label: `Node ${i}`,
      }));
      render(<TreeView nodes={manyNodes} virtualThreshold={3} />);
      expect(screen.getByText("Node 0")).toBeInTheDocument();
    });

    it("respects defaultCheckedValues and shows checked checkboxes", () => {
      render(
        <TreeView
          nodes={treeNodes}
          checkable
          defaultExpandedValues={["1"]}
          defaultCheckedValues={["1.1"]}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      const checkedCheckbox = checkboxes.find((cb) => (cb as HTMLInputElement).checked);
      expect(checkedCheckbox).toBeDefined();
    });

    it("calls onCheckedChange when checkbox is clicked (no nodes, exclusive)", () => {
      const onCheckedChange = vi.fn();
      render(<TreeView nodes={treeNodes} checkable onCheckedChange={onCheckedChange} />);
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[0]);
      expect(onCheckedChange).toHaveBeenCalled();
    });
  });

  describe("data-driven cascade checkStrategy", () => {
    const cascadeNodes: TreeViewNode[] = [
      {
        value: "parent",
        label: "Parent",
        children: [
          { value: "child1", label: "Child 1" },
          { value: "child2", label: "Child 2" },
        ],
      },
    ];

    it("cascade-checks all descendants when parent is checked", () => {
      const onCheckedChange = vi.fn();
      render(
        <TreeView
          nodes={cascadeNodes}
          checkable
          checkStrategy="cascade"
          onCheckedChange={onCheckedChange}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[0]);
      const calledWith: string[] = onCheckedChange.mock.calls[0][0];
      expect(calledWith).toContain("child1");
      expect(calledWith).toContain("child2");
    });

    it("unchecks all descendants when parent is unchecked", () => {
      const onCheckedChange = vi.fn();
      render(
        <TreeView
          nodes={cascadeNodes}
          checkable
          checkStrategy="cascade"
          defaultCheckedValues={["parent", "child1", "child2"]}
          onCheckedChange={onCheckedChange}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[0]);
      expect(onCheckedChange).toHaveBeenCalledWith([]);
    });

    it("sets parent to indeterminate when only some children are checked", () => {
      render(
        <TreeView
          nodes={cascadeNodes}
          checkable
          checkStrategy="cascade"
          defaultExpandedValues={["parent"]}
          defaultCheckedValues={["child1"]}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      const parentCheckbox = checkboxes[0] as HTMLInputElement;
      expect(parentCheckbox.indeterminate).toBe(true);
    });

    it("checking a leaf alone results in parent indeterminate, not checked", () => {
      const onCheckedChange = vi.fn();
      render(
        <TreeView
          nodes={cascadeNodes}
          checkable
          checkStrategy="cascade"
          defaultExpandedValues={["parent"]}
          onCheckedChange={onCheckedChange}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[1]); // child1
      expect(onCheckedChange).toHaveBeenCalledWith(["child1"]);
    });
  });

  describe("data-driven exclusive checkStrategy", () => {
    const exclusiveNodes: TreeViewNode[] = [
      {
        value: "parent",
        label: "Parent",
        children: [
          { value: "child1", label: "Child 1" },
          { value: "child2", label: "Child 2" },
        ],
      },
    ];

    it("removes ancestor when checking a child in exclusive mode", () => {
      const onCheckedChange = vi.fn();
      render(
        <TreeView
          nodes={exclusiveNodes}
          checkable
          checkStrategy="exclusive"
          defaultCheckedValues={["parent"]}
          defaultExpandedValues={["parent"]}
          onCheckedChange={onCheckedChange}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[1]); // child1
      const calledWith: string[] = onCheckedChange.mock.calls[0][0];
      expect(calledWith).not.toContain("parent");
      expect(calledWith).toContain("child1");
    });

    it("removes descendants when checking a parent in exclusive mode", () => {
      const onCheckedChange = vi.fn();
      render(
        <TreeView
          nodes={exclusiveNodes}
          checkable
          checkStrategy="exclusive"
          defaultCheckedValues={["child1"]}
          defaultExpandedValues={["parent"]}
          onCheckedChange={onCheckedChange}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[0]); // parent
      const calledWith: string[] = onCheckedChange.mock.calls[0][0];
      expect(calledWith).not.toContain("child1");
      expect(calledWith).toContain("parent");
    });

    it("unchecks node when already checked in exclusive mode", () => {
      const onCheckedChange = vi.fn();
      render(
        <TreeView
          nodes={exclusiveNodes}
          checkable
          checkStrategy="exclusive"
          defaultCheckedValues={["child1"]}
          defaultExpandedValues={["parent"]}
          onCheckedChange={onCheckedChange}
        />,
      );
      const checkboxes = screen.getAllByRole("checkbox");
      fireEvent.click(checkboxes[1]); // uncheck child1
      const calledWith: string[] = onCheckedChange.mock.calls[0][0];
      expect(calledWith).not.toContain("child1");
    });
  });

  describe("data-driven keyboard navigation", () => {
    const navNodes: TreeViewNode[] = [
      { value: "a", label: "Item A" },
      { value: "b", label: "Item B" },
      { value: "c", label: "Item C" },
    ];

    it("ArrowDown moves focus to next item", () => {
      render(<TreeView nodes={navNodes} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "ArrowDown" });
      expect(items[1]).toHaveAttribute("tabIndex", "0");
    });

    it("ArrowUp moves focus to previous item", () => {
      render(<TreeView nodes={navNodes} defaultSelectedValues={["b"]} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[1], { key: "ArrowUp" });
      expect(items[0]).toHaveAttribute("tabIndex", "0");
    });

    it("Home moves focus to first item", () => {
      render(<TreeView nodes={navNodes} defaultSelectedValues={["c"]} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[2], { key: "Home" });
      expect(items[0]).toHaveAttribute("tabIndex", "0");
    });

    it("End moves focus to last item", () => {
      render(<TreeView nodes={navNodes} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "End" });
      expect(items[2]).toHaveAttribute("tabIndex", "0");
    });

    it("ArrowDown does not move beyond last item", () => {
      render(<TreeView nodes={navNodes} defaultSelectedValues={["c"]} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[2], { key: "ArrowDown" });
      expect(items[2]).toHaveAttribute("tabIndex", "0");
    });

    it("ArrowUp does not throw when already at first item", () => {
      render(<TreeView nodes={navNodes} />);
      const items = screen.getAllByRole("treeitem");
      expect(() => fireEvent.keyDown(items[0], { key: "ArrowUp" })).not.toThrow();
    });

    it("ArrowRight expands collapsed node with children", () => {
      const parentNodes: TreeViewNode[] = [
        { value: "p", label: "Parent", children: [{ value: "c", label: "Child" }] },
      ];
      render(<TreeView nodes={parentNodes} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "ArrowRight" });
      expect(screen.getByText("Child")).toBeInTheDocument();
    });

    it("ArrowRight on expanded node moves focus to next item", () => {
      const parentNodes: TreeViewNode[] = [
        { value: "p", label: "Parent", children: [{ value: "c", label: "Child" }] },
      ];
      render(<TreeView nodes={parentNodes} defaultExpandedValues={["p"]} defaultSelectedValues={["p"]} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "ArrowRight" });
      expect(items[1]).toHaveAttribute("tabIndex", "0");
    });

    it("ArrowLeft collapses expanded node with children", () => {
      const parentNodes: TreeViewNode[] = [
        { value: "p", label: "Parent", children: [{ value: "c", label: "Child" }] },
      ];
      render(<TreeView nodes={parentNodes} defaultExpandedValues={["p"]} />);
      expect(screen.getByText("Child")).toBeInTheDocument();
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "ArrowLeft" });
      expect(screen.queryByText("Child")).not.toBeInTheDocument();
    });

    it("ArrowLeft on a leaf moves focus to shallower ancestor", () => {
      const parentNodes: TreeViewNode[] = [
        { value: "p", label: "Parent", children: [{ value: "c", label: "Child" }] },
      ];
      render(<TreeView nodes={parentNodes} defaultExpandedValues={["p"]} defaultSelectedValues={["c"]} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[1], { key: "ArrowLeft" });
      expect(items[0]).toHaveAttribute("tabIndex", "0");
    });

    it("Enter selects the focused item", () => {
      const onSelectedChange = vi.fn();
      render(<TreeView nodes={navNodes} onSelectedChange={onSelectedChange} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "Enter" });
      expect(onSelectedChange).toHaveBeenCalledWith(["a"]);
    });

    it("Space selects the focused item", () => {
      const onSelectedChange = vi.fn();
      render(<TreeView nodes={navNodes} onSelectedChange={onSelectedChange} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[1], { key: " " });
      expect(onSelectedChange).toHaveBeenCalledWith(["b"]);
    });

    it("Enter also toggles check when checkable", () => {
      const onCheckedChange = vi.fn();
      render(<TreeView nodes={navNodes} checkable onCheckedChange={onCheckedChange} />);
      const items = screen.getAllByRole("treeitem");
      fireEvent.keyDown(items[0], { key: "Enter" });
      expect(onCheckedChange).toHaveBeenCalled();
    });
  });
});
