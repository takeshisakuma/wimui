import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { StatusContent } from "./StatusContent";

describe("StatusContent", () => {
  it("renders string title through translation", () => {
    render(<StatusContent title="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders ReactNode title (non-string)", () => {
    render(<StatusContent title={<strong>Bold Title</strong>} />);
    expect(screen.getByText("Bold Title")).toBeInTheDocument();
  });

  it("renders ReactNode description (non-string)", () => {
    render(<StatusContent description={<em>Italic desc</em>} />);
    expect(screen.getByText("Italic desc")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(<StatusContent icon={<span data-testid="icon">★</span>} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<StatusContent>Extra content</StatusContent>);
    expect(screen.getByText("Extra content")).toBeInTheDocument();
  });

  it("renders actions", () => {
    render(<StatusContent actions={<button>Click me</button>} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies sm size class", () => {
    const { container } = render(<StatusContent size="sm" />);
    expect(container.firstChild).toHaveClass("wim-status-content--sm");
  });

  it("applies custom prefixCls", () => {
    const { container } = render(<StatusContent prefixCls="my-prefix" />);
    expect(container.firstChild).toHaveClass("my-prefix");
  });
});
