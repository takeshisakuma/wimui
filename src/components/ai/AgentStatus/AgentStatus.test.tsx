import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AgentStatus } from "./AgentStatus";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("AgentStatus", () => {
  it("renders without crashing", () => {
    const { container } = render(<AgentStatus status="idle" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the localized label by default", () => {
    render(<AgentStatus status="thinking" />);
    expect(screen.getByText("agent_status.thinking")).toBeInTheDocument();
  });

  it("renders a custom message when provided", () => {
    render(<AgentStatus status="running" message="Building project…" />);
    expect(screen.getByText("Building project…")).toBeInTheDocument();
  });

  it("hides label when showLabel is false", () => {
    render(<AgentStatus status="done" showLabel={false} />);
    expect(screen.queryByText("agent_status.done")).not.toBeInTheDocument();
  });

  it("has role=status for live region", () => {
    render(<AgentStatus status="error" />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders Icon for waiting/done/error statuses", () => {
    const { rerender, container } = render(<AgentStatus status="done" />);
    expect(container.querySelector("svg")).toBeInTheDocument();

    rerender(<AgentStatus status="error" />);
    expect(container.querySelector("svg")).toBeInTheDocument();

    rerender(<AgentStatus status="waiting" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders dot span for idle/thinking/running", () => {
    const { rerender, container } = render(<AgentStatus status="idle" />);
    expect(container.querySelector("svg")).not.toBeInTheDocument();

    rerender(<AgentStatus status="thinking" />);
    expect(container.querySelector("svg")).not.toBeInTheDocument();

    rerender(<AgentStatus status="running" />);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<AgentStatus status="idle" size="lg" />);
    expect(container.firstChild).toHaveClass("lg");
  });
});
