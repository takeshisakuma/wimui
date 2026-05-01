import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NodeGraph } from "./NodeGraph";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("@xyflow/react", () => ({
  ReactFlow: ({ children, "aria-label": ariaLabel }: { children?: React.ReactNode; "aria-label"?: string }) => (
    <div data-testid="react-flow" aria-label={ariaLabel}>{children}</div>
  ),
  Background: () => <div data-testid="background" />,
  Controls: () => <div data-testid="controls" />,
  MiniMap: () => <div data-testid="minimap" />,
  BackgroundVariant: { Dots: "dots", Lines: "lines", Cross: "cross" },
  useNodesState: () => [[], vi.fn(), vi.fn()],
  useEdgesState: () => [[], vi.fn(), vi.fn()],
  addEdge: vi.fn((params, edges) => [...edges, params]),
}));

describe("NodeGraph", () => {
  it("renders a region with the correct aria-label", () => {
    render(<NodeGraph aria-label="My graph" />);
    expect(screen.getByRole("region", { name: "My graph" })).toBeInTheDocument();
  });

  it("shows controls by default", () => {
    render(<NodeGraph />);
    expect(screen.getByTestId("controls")).toBeInTheDocument();
  });

  it("hides controls when showControls is false", () => {
    render(<NodeGraph showControls={false} />);
    expect(screen.queryByTestId("controls")).not.toBeInTheDocument();
  });

  it("shows minimap when showMiniMap is true", () => {
    render(<NodeGraph showMiniMap />);
    expect(screen.getByTestId("minimap")).toBeInTheDocument();
  });

  it("hides minimap by default", () => {
    render(<NodeGraph />);
    expect(screen.queryByTestId("minimap")).not.toBeInTheDocument();
  });
});
