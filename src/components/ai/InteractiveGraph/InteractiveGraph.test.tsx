import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { InteractiveGraph } from "./InteractiveGraph";
import type { Node, Edge } from "@xyflow/react";

vi.mock("@xyflow/react", () => ({
  ReactFlow: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="react-flow">{children}</div>
  ),
  Background: () => <div data-testid="react-flow-background" />,
  Controls: ({ className }: { className?: string }) => (
    <div data-testid="react-flow-controls" className={className} />
  ),
  MiniMap: ({ className }: { className?: string }) => (
    <div data-testid="react-flow-minimap" className={className} />
  ),
  ReactFlowProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="react-flow-provider">{children}</div>
  ),
}));

const sampleNodes: Node[] = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Node A" } },
  { id: "2", position: { x: 200, y: 0 }, data: { label: "Node B" } },
];

const sampleEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
];

describe("InteractiveGraph", () => {
  it("renders inside ReactFlowProvider", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} />);
    expect(screen.getByTestId("react-flow-provider")).toBeInTheDocument();
  });

  it("renders ReactFlow canvas", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} />);
    expect(screen.getByTestId("react-flow")).toBeInTheDocument();
  });

  it("renders Background by default", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} />);
    expect(screen.getByTestId("react-flow-background")).toBeInTheDocument();
  });

  it("hides Background when showGrid is false", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} showGrid={false} />);
    expect(screen.queryByTestId("react-flow-background")).not.toBeInTheDocument();
  });

  it("renders MiniMap by default", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} />);
    expect(screen.getByTestId("react-flow-minimap")).toBeInTheDocument();
  });

  it("hides MiniMap when showMiniMap is false", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} showMiniMap={false} />);
    expect(screen.queryByTestId("react-flow-minimap")).not.toBeInTheDocument();
  });

  it("renders Controls by default", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} />);
    expect(screen.getByTestId("react-flow-controls")).toBeInTheDocument();
  });

  it("hides Controls when showControls is false", () => {
    render(<InteractiveGraph nodes={sampleNodes} edges={sampleEdges} showControls={false} />);
    expect(screen.queryByTestId("react-flow-controls")).not.toBeInTheDocument();
  });

  it("applies custom height and width via inline style", () => {
    const { container } = render(
      <InteractiveGraph nodes={sampleNodes} edges={sampleEdges} height={400} width="80%" />,
    );
    const root = container.querySelector("[style]") as HTMLElement;
    expect(root.style.height).toBe("400px");
    expect(root.style.width).toBe("80%");
  });

  it("applies custom className", () => {
    const { container } = render(
      <InteractiveGraph nodes={sampleNodes} edges={sampleEdges} className="my-graph" />,
    );
    expect(container.firstChild?.firstChild).toHaveClass("my-graph");
  });
});
