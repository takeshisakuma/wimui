import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { NodeGraph } from "./NodeGraph";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("@xyflow/react", () => ({
  ReactFlow: ({
    children,
    deleteKeyCode,
  }: {
    children?: React.ReactNode;
    deleteKeyCode?: string | string[] | null;
  }) => (
    <div data-testid="react-flow" data-delete-key={JSON.stringify(deleteKeyCode)}>
      {children}
    </div>
  ),
  Background: () => <div data-testid="background" />,
  Controls: () => <div data-testid="controls" />,
  MiniMap: () => <div data-testid="minimap" />,
  BackgroundVariant: { Dots: "dots", Lines: "lines", Cross: "cross" },
}));

const scss = fs.readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "node-graph.module.scss"),
  "utf8",
);

const selectedNode = {
  id: "a",
  position: { x: 0, y: 0 },
  data: { label: "A" },
  selected: true,
};
const otherNode = { id: "b", position: { x: 80, y: 0 }, data: { label: "B" } };
const connectedEdge = { id: "e-ab", source: "a", target: "b" };

const defaultProps = {
  nodes: [],
  edges: [],
  onNodesChange: vi.fn(),
  onEdgesChange: vi.fn(),
};

function addNamedNode(label: string) {
  fireEvent.click(screen.getByRole("button", { name: "Add" }));
  fireEvent.change(screen.getByRole("textbox", { name: "Node name" }), {
    target: { value: label },
  });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));
}

describe("NodeGraph", () => {
  it("renders a region with the correct aria-label", () => {
    render(<NodeGraph {...defaultProps} aria-label="My graph" />);
    expect(screen.getByRole("region", { name: "My graph" })).toBeInTheDocument();
  });

  it("shows controls by default", () => {
    render(<NodeGraph {...defaultProps} />);
    expect(screen.getByTestId("controls")).toBeInTheDocument();
  });

  it("hides controls when showControls is false", () => {
    render(<NodeGraph {...defaultProps} showControls={false} />);
    expect(screen.queryByTestId("controls")).not.toBeInTheDocument();
  });

  it("shows minimap when showMiniMap is true", () => {
    render(<NodeGraph {...defaultProps} showMiniMap />);
    expect(screen.getByTestId("minimap")).toBeInTheDocument();
  });

  it("hides minimap by default", () => {
    render(<NodeGraph {...defaultProps} />);
    expect(screen.queryByTestId("minimap")).not.toBeInTheDocument();
  });

  it("deletes with Backspace or Delete by default", () => {
    render(<NodeGraph {...defaultProps} />);
    expect(JSON.parse(screen.getByTestId("react-flow").dataset.deleteKey ?? "")).toEqual([
      "Backspace",
      "Delete",
    ]);
  });

  it("shows a disabled delete control until something is selected", () => {
    render(<NodeGraph {...defaultProps} />);
    expect(screen.getByRole("button", { name: "Delete" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Add" })).toBeEnabled();
  });

  it("hides add and delete when deleteKeyCode is null", () => {
    render(<NodeGraph {...defaultProps} deleteKeyCode={null} />);
    expect(screen.queryByRole("button", { name: "Delete" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Add" })).not.toBeInTheDocument();
  });

  it("asks for a name before adding a node", () => {
    const onNodesChange = vi.fn();
    render(
      <NodeGraph
        nodes={[otherNode]}
        edges={[]}
        onNodesChange={onNodesChange}
        onEdgesChange={vi.fn()}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(onNodesChange).not.toHaveBeenCalled();
    expect(screen.getByRole("textbox", { name: "Node name" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add" })).toBeDisabled();
  });

  it("adds a named node to the right of the current rightmost node", () => {
    const onNodesChange = vi.fn();
    render(
      <NodeGraph
        nodes={[otherNode]}
        edges={[]}
        onNodesChange={onNodesChange}
        onEdgesChange={vi.fn()}
      />,
    );
    addNamedNode("Gate");
    expect(onNodesChange).toHaveBeenCalledWith([
      {
        type: "add",
        item: {
          id: "node-1",
          position: { x: 260, y: 0 },
          data: { label: "Gate" },
        },
      },
    ]);
  });

  it("adds a named node when Enter is pressed", () => {
    const onNodesChange = vi.fn();
    render(
      <NodeGraph nodes={[]} edges={[]} onNodesChange={onNodesChange} onEdgesChange={vi.fn()} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    const field = screen.getByRole("textbox", { name: "Node name" });
    fireEvent.change(field, { target: { value: "Start" } });
    fireEvent.keyDown(field, { key: "Enter" });
    expect(onNodesChange).toHaveBeenCalledWith([
      {
        type: "add",
        item: {
          id: "node-1",
          position: { x: 80, y: 80 },
          data: { label: "Start" },
        },
      },
    ]);
  });

  it("cancels naming with Escape and does not add", () => {
    const onNodesChange = vi.fn();
    render(
      <NodeGraph nodes={[]} edges={[]} onNodesChange={onNodesChange} onEdgesChange={vi.fn()} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    const field = screen.getByRole("textbox", { name: "Node name" });
    fireEvent.change(field, { target: { value: "Nope" } });
    fireEvent.keyDown(field, { key: "Escape" });
    expect(onNodesChange).not.toHaveBeenCalled();
    expect(screen.queryByRole("textbox", { name: "Node name" })).not.toBeInTheDocument();
  });

  it("skips node ids that are already in the graph", () => {
    const onNodesChange = vi.fn();
    render(
      <NodeGraph
        nodes={[{ id: "node-1", position: { x: 0, y: 40 }, data: { label: "Taken" } }]}
        edges={[]}
        onNodesChange={onNodesChange}
        onEdgesChange={vi.fn()}
      />,
    );
    addNamedNode("Next");
    expect(onNodesChange).toHaveBeenCalledWith([
      {
        type: "add",
        item: {
          id: "node-2",
          position: { x: 180, y: 40 },
          data: { label: "Next" },
        },
      },
    ]);
  });

  it("removes selected nodes and their connected edges", () => {
    const onNodesChange = vi.fn();
    const onEdgesChange = vi.fn();
    render(
      <NodeGraph
        nodes={[selectedNode, otherNode]}
        edges={[connectedEdge]}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(onNodesChange).toHaveBeenCalledWith([{ type: "remove", id: "a" }]);
    expect(onEdgesChange).toHaveBeenCalledWith([{ type: "remove", id: "e-ab" }]);
  });

  it("removes a selected edge without touching unselected nodes", () => {
    const onNodesChange = vi.fn();
    const onEdgesChange = vi.fn();
    render(
      <NodeGraph
        nodes={[
          { ...selectedNode, selected: false },
          otherNode,
        ]}
        edges={[{ ...connectedEdge, selected: true }]}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(onNodesChange).not.toHaveBeenCalled();
    expect(onEdgesChange).toHaveBeenCalledWith([{ type: "remove", id: "e-ab" }]);
  });

  it("keeps add and delete in the graph chrome", () => {
    expect(scss).toMatch(/\.tools\s*\{/);
    expect(scss).toMatch(/top:\s*var\(--wim-spacing-md\)/);
    expect(scss).toMatch(/right:\s*var\(--wim-spacing-md\)/);
    expect(scss).toMatch(/\.name\s*\{/);
  });
});
