import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState title="No Data" description="Try creating new item" />);
    expect(screen.getByText("No Data")).toBeInTheDocument();
    expect(screen.getByText("Try creating new item")).toBeInTheDocument();
  });

  it("renders extra action", () => {
    render(<EmptyState title="Title" extra={<button>Create</button>} />);
    expect(screen.getByText("Create")).toBeInTheDocument();
  });

  it("renders with custom icon", () => {
    render(
      <EmptyState title="Empty" icon={<span data-testid="custom-icon">★</span>} />,
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders children via rest props", () => {
    render(
      <EmptyState title="Empty">
        <p>Extra content</p>
      </EmptyState>,
    );
    expect(screen.getByText("Extra content")).toBeInTheDocument();
  });

  // T250 ③。素の EmptyState はカードや表の中に置かれるので、既定は左揃え。
  it("is start-aligned by default and centers on request", () => {
    const { container, rerender } = render(<EmptyState title="Empty" />);
    expect(container.firstChild).toHaveAttribute("data-align", "start");
    rerender(<EmptyState title="Empty" align="center" />);
    expect(container.firstChild).toHaveAttribute("data-align", "center");
  });

  it("passes div attributes through to the root", () => {
    render(<EmptyState title="Empty" id="no-orders" data-testid="empty" />);
    expect(screen.getByTestId("empty")).toHaveAttribute("id", "no-orders");
  });
});
