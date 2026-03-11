import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { InteractiveArea } from "./InteractiveArea";

describe("InteractiveArea", () => {
  it("renders title and description", () => {
    render(<InteractiveArea title="Title" description="Description" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders icon and actions", () => {
    render(
      <InteractiveArea
        icon={<span data-testid="icon">Icon</span>}
        actions={<button>Action</button>}
      />
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("handles clicks when isClickable is true", () => {
    const onClick = vi.fn();
    render(<InteractiveArea isClickable onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("does not handle clicks when disabled", () => {
    const onClick = vi.fn();
    const { container } = render(<InteractiveArea isClickable disabled onClick={onClick} />);
    const area = container.firstChild as HTMLElement;
    
    expect(area).not.toHaveAttribute("role", "button");
    expect(area).not.toHaveAttribute("tabIndex");
    
    fireEvent.click(area);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies variant classes", () => {
    const { container } = render(<InteractiveArea variant="solid" bgVariant="muted" size="large" />);
    const area = container.firstChild;
    expect(area).toHaveClass("wim-interactive-area--solid");
    expect(area).toHaveClass("wim-interactive-area--muted");
    expect(area).toHaveClass("wim-interactive-area--large");
  });
});
