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

  it("applies variant class", () => {
    render(<EmptyState title="Title" variant="simple" />);
    // We need to find the wrapper. It has class wim-empty-state
    const title = screen.getByText("Title");
    const wrapper = title.closest(".wim-empty-state");
    expect(wrapper).toHaveClass("wim-empty-state--simple");
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
});
