import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TreeSelect, TreeSelectNode } from "./TreeSelect";

const treeData: TreeSelectNode[] = [
  {
    label: "Node 1",
    value: "node-1",
    children: [
      {
        label: "Child 1-1",
        value: "child-1-1",
      },
      {
        label: "Child 1-2",
        value: "child-1-2",
      },
    ],
  },
  {
    label: "Node 2",
    value: "node-2",
  },
];

describe("TreeSelect", () => {
  it("renders with placeholder", () => {
    render(<TreeSelect treeData={treeData} placeholder="Please select" />);
    expect(screen.getByText("Please select")).toBeDefined();
  });

  it("opens dropdown on click", () => {
    render(<TreeSelect treeData={treeData} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    expect(screen.getByText("Node 1")).toBeDefined();
    expect(screen.getByText("Node 2")).toBeDefined();
  });

  it("selects a node", () => {
    const onChange = vi.fn();
    render(<TreeSelect treeData={treeData} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));

    // Clicks the label of Node 2 in the dropdown
    // Since 'Node 2' is in both trigger and list, we use a more specific query or getAll
    const options = screen.getAllByText("Node 2");
    fireEvent.click(options[options.length - 1]); // The one in the list

    expect(onChange).toHaveBeenCalledWith("node-2");
    // Verify it's displayed in the trigger
    const triggerValue = screen.getByRole("combobox").querySelector(".wim-tree-select__value");
    expect(triggerValue?.textContent).toBe("Node 2");
  });

  it("expands nodes and selects child", () => {
    const onChange = vi.fn();
    render(<TreeSelect treeData={treeData} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));

    const expandBtn = screen.getByLabelText("Expand");
    fireEvent.click(expandBtn);

    const childNode = screen.getByText("Child 1-1");
    fireEvent.click(childNode);

    // Should be called with the child value
    expect(onChange).toHaveBeenLastCalledWith("child-1-1");
    
    // Verify it's displayed in the trigger (should NOT be parent "Node 1")
    const triggerValue = screen.getByRole("combobox").querySelector(".wim-tree-select__value");
    expect(triggerValue?.textContent).toBe("Child 1-1");
  });

  it("supports multiple selection", () => {
    const onChange = vi.fn();
    render(<TreeSelect treeData={treeData} multiple onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));

    // Check checkboxes
    // The checkbox is associated with the label text via aria-labelledby
    const node2Check = screen.getByLabelText("Node 2");
    fireEvent.click(node2Check);

    expect(onChange).toHaveBeenCalledWith(["node-2"]);
  });
});
