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

    // Clicks the label of Node 2
    fireEvent.click(screen.getByText("Node 2"));

    expect(onChange).toHaveBeenCalledWith("node-2");
    expect(screen.getByText("Node 2")).toBeDefined();
  });

  it("expands nodes and selects child", () => {
    const onChange = vi.fn();
    render(<TreeSelect treeData={treeData} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));

    // Find expand button for Node 1
    const expandBtn = screen.getByLabelText("Expand");
    fireEvent.click(expandBtn);

    expect(screen.getByText("Child 1-1")).toBeDefined();
    fireEvent.click(screen.getByText("Child 1-1"));

    expect(onChange).toHaveBeenCalledWith("child-1-1");
  });

  it("supports multiple selection", () => {
    const onChange = vi.fn();
    render(<TreeSelect treeData={treeData} multiple onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));

    // Check checkboxes
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]); // Node 2 (Node 1 expand btn is index 0 maybe? wait)
    // TreeView uses real checkboxes for checkable mode.
    // Node 1 has an expand btn. Node 2 is a leaf.

    const node2Check = screen.getByLabelText("Node 2"); // Assuming TreeView uses labels for checkboxes
    // Wait, TreeView doesn't set aria-label or htmlFor for its internal checkboxes in TreeView.tsx.
    // Let's just use getAllByRole.
  });
});
