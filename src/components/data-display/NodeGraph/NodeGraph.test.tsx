import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NodeGraph } from "./NodeGraph";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
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
}));

const defaultProps = {
  nodes: [],
  edges: [],
  onNodesChange: vi.fn(),
  onEdgesChange: vi.fn(),
};

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
});
