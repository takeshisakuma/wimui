import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Result } from "./Result";

describe("Result", () => {
  it("renders title and description", () => {
    render(<Result title="Success" description="Operation completed" />);
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Operation completed")).toBeInTheDocument();
  });

  it("renders status class for success", () => {
    const { container } = render(<Result status="success" />);
    expect(container.firstChild).toHaveClass("wim-result--success");
  });

  it("renders status class for error", () => {
    const { container } = render(<Result status="error" />);
    expect(container.firstChild).toHaveClass("wim-result--error");
  });

  it("renders status class for warning", () => {
    const { container } = render(<Result status="warning" />);
    expect(container.firstChild).toHaveClass("wim-result--warning");
  });

  it("renders status class for 404", () => {
    const { container } = render(<Result status="404" />);
    expect(container.firstChild).toHaveClass("wim-result--404");
  });

  it("renders status class for 403", () => {
    const { container } = render(<Result status="403" />);
    expect(container.firstChild).toHaveClass("wim-result--403");
  });

  it("renders status class for 500", () => {
    const { container } = render(<Result status="500" />);
    expect(container.firstChild).toHaveClass("wim-result--500");
  });

  it("renders children in content area", () => {
    render(<Result>Additional Info</Result>);
    expect(screen.getByText("Additional Info")).toBeInTheDocument();
  });

  it("renders custom icon", () => {
    render(<Result icon={<span data-testid="my-icon">★</span>} />);
    expect(screen.getByTestId("my-icon")).toBeInTheDocument();
  });

  it("renders extra content", () => {
    render(<Result extra={<button>Retry</button>} />);
    expect(screen.getByText("Retry")).toBeInTheDocument();
  });
});
