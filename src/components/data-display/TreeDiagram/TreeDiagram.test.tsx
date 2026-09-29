import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TreeDiagram, type TreeDiagramNode } from "./TreeDiagram";

const ORG: TreeDiagramNode[] = [
  {
    value: "ceo",
    label: "Ada",
    description: "CEO",
    children: [
      {
        value: "cto",
        label: "Grace",
        description: "CTO",
        children: [
          { value: "eng1", label: "Linus" },
          { value: "eng2", label: "Barbara" },
        ],
      },
      { value: "cfo", label: "Katherine", description: "CFO" },
    ],
  },
];

const item = (name: string) => screen.getByRole("treeitem", { name: new RegExp(name) });
const key = (name: string, k: string) => fireEvent.keyDown(item(name), { key: k });

describe("TreeDiagram", () => {
  it("renders a tree with every node expanded by default", () => {
    render(<TreeDiagram nodes={ORG} aria-label="Company" />);
    expect(screen.getByRole("tree", { name: "Company" })).toBeInTheDocument();
    expect(screen.getAllByRole("treeitem")).toHaveLength(5);
    expect(item("Grace")).toHaveAttribute("aria-level", "2");
    expect(item("Grace")).toHaveAttribute("aria-posinset", "1");
    expect(item("Grace")).toHaveAttribute("aria-setsize", "2");
    expect(item("Grace")).toHaveAttribute("aria-expanded", "true");
    expect(item("Linus")).not.toHaveAttribute("aria-expanded");
  });

  it("names each node by its card only, not by the collapse button inside it", () => {
    render(<TreeDiagram nodes={ORG} />);
    expect(screen.getByRole("treeitem", { name: "Grace CTO" })).toBeInTheDocument();
    expect(screen.getByRole("treeitem", { name: "Linus" })).toBeInTheDocument();
  });

  it("uses a default accessible name when none is given", () => {
    render(<TreeDiagram nodes={ORG} />);
    expect(screen.getByRole("tree", { name: "Tree diagram" })).toBeInTheDocument();
  });

  it("places a parent centred over its children", () => {
    render(<TreeDiagram nodes={ORG} nodeWidth={100} nodeHeight={40} />);
    const left = (name: string) => parseFloat(item(name).style.left);
    expect(left("Grace")).toBe((left("Linus") + left("Barbara")) / 2);
    expect(parseFloat(item("Linus").style.top)).toBeGreaterThan(parseFloat(item("Grace").style.top));
  });

  it("grows left to right when horizontal", () => {
    render(<TreeDiagram nodes={ORG} orientation="horizontal" nodeWidth={100} nodeHeight={40} />);
    expect(screen.getByRole("tree")).toHaveAttribute("aria-orientation", "horizontal");
    expect(parseFloat(item("Grace").style.left)).toBeGreaterThan(parseFloat(item("Ada").style.left));
    const top = (name: string) => parseFloat(item(name).style.top);
    expect(top("Grace")).toBe((top("Linus") + top("Barbara")) / 2);
  });

  it("collapses a subtree from its button and shows how many nodes it hides", () => {
    render(<TreeDiagram nodes={ORG} />);
    fireEvent.click(screen.getByRole("button", { name: "Collapse Grace" }));
    expect(screen.queryByRole("treeitem", { name: /Linus/ })).not.toBeInTheDocument();
    expect(item("Grace")).toHaveAttribute("aria-expanded", "false");
    const expand = screen.getByRole("button", { name: "Expand Grace" });
    expect(expand).toHaveTextContent("+2");
    expect(expand).toHaveAttribute("tabindex", "-1"); // キーボードは矢印キーで開閉する
  });

  it("starts with only the given nodes expanded", () => {
    render(<TreeDiagram nodes={ORG} defaultExpandedValues={["ceo"]} />);
    expect(screen.getAllByRole("treeitem")).toHaveLength(3);
    expect(screen.queryByRole("treeitem", { name: /Linus/ })).not.toBeInTheDocument();
  });

  it("follows expandedValues when controlled and reports changes", () => {
    const onExpandedChange = vi.fn();
    const { rerender } = render(<TreeDiagram nodes={ORG} expandedValues={["ceo"]} onExpandedChange={onExpandedChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Expand Grace" }));
    expect(onExpandedChange).toHaveBeenCalledWith(["ceo", "cto"]);
    expect(screen.queryByRole("treeitem", { name: /Linus/ })).not.toBeInTheDocument(); // 親が渡すまで開かない
    rerender(<TreeDiagram nodes={ORG} expandedValues={["ceo", "cto"]} onExpandedChange={onExpandedChange} />);
    expect(item("Linus")).toBeInTheDocument();
  });

  describe("keyboard (WAI-ARIA tree, same as TreeView)", () => {
    it("keeps exactly one tab stop, on the first node", () => {
      render(<TreeDiagram nodes={ORG} />);
      const stops = screen.getAllByRole("treeitem").filter((el) => el.getAttribute("tabindex") === "0");
      expect(stops).toEqual([item("Ada")]);
    });

    it("moves through visible nodes in reading order with Up / Down / Home / End", () => {
      render(<TreeDiagram nodes={ORG} />);
      item("Ada").focus();
      key("Ada", "ArrowDown");
      expect(item("Grace")).toHaveFocus();
      key("Grace", "ArrowDown");
      expect(item("Linus")).toHaveFocus();
      key("Linus", "ArrowUp");
      expect(item("Grace")).toHaveFocus();
      key("Grace", "End");
      expect(item("Katherine")).toHaveFocus();
      expect(item("Katherine")).toHaveAttribute("tabindex", "0");
      key("Katherine", "Home");
      expect(item("Ada")).toHaveFocus();
    });

    it("collapses with Left, moves to the parent with Left again, and expands with Right", () => {
      render(<TreeDiagram nodes={ORG} />);
      item("Grace").focus();
      key("Grace", "ArrowLeft");
      expect(item("Grace")).toHaveAttribute("aria-expanded", "false");
      key("Grace", "ArrowLeft");
      expect(item("Ada")).toHaveFocus();
      key("Ada", "ArrowDown");
      key("Grace", "ArrowRight");
      expect(item("Grace")).toHaveAttribute("aria-expanded", "true");
      key("Grace", "ArrowRight");
      expect(item("Linus")).toHaveFocus();
    });

    it("moves focus to the nearest visible ancestor when its subtree is collapsed", () => {
      render(<TreeDiagram nodes={ORG} />);
      item("Linus").focus();
      fireEvent.click(screen.getByRole("button", { name: "Collapse Ada" }));
      expect(item("Ada")).toHaveFocus();
    });
  });

  describe("selection", () => {
    it("is read-only without onSelect: no aria-selected, Enter does nothing", () => {
      render(<TreeDiagram nodes={ORG} />);
      expect(item("Ada")).not.toHaveAttribute("aria-selected");
    });

    it("selects by click, Enter and Space when onSelect is given", () => {
      const onSelect = vi.fn();
      render(<TreeDiagram nodes={ORG} onSelect={onSelect} selectedValue="cfo" />);
      expect(item("Katherine")).toHaveAttribute("aria-selected", "true");
      expect(item("Ada")).toHaveAttribute("aria-selected", "false");
      fireEvent.click(item("Grace"));
      key("Linus", "Enter");
      key("Barbara", " ");
      expect(onSelect.mock.calls.map((c) => c[0])).toEqual(["cto", "eng1", "eng2"]);
    });

    it("does not select when the collapse button is clicked", () => {
      const onSelect = vi.fn();
      render(<TreeDiagram nodes={ORG} onSelect={onSelect} />);
      fireEvent.click(screen.getByRole("button", { name: "Collapse Grace" }));
      expect(onSelect).not.toHaveBeenCalled();
    });
  });

  it("renders a custom card and custom button labels", () => {
    render(
      <TreeDiagram
        nodes={ORG}
        renderNode={(node, state) => <strong>{`${node.value}:${state.depth}`}</strong>}
        labels={{ collapse: (l) => `Hide ${l}`, expand: (l) => `Show ${l}` }}
      />,
    );
    expect(screen.getByText("cto:1")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hide Grace" })).toBeInTheDocument();
  });

  it("forwards the ref to the tree element", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<TreeDiagram ref={ref} nodes={ORG} />);
    expect(ref.current).toBe(screen.getByRole("tree"));
  });
});
