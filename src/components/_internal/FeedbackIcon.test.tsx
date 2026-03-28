import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FeedbackIcon } from "./FeedbackIcon";

describe("FeedbackIcon", () => {
  it("renders a custom ReactElement icon", () => {
    render(<FeedbackIcon icon={<span data-testid="custom-icon">★</span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders nothing when icon is false", () => {
    const { container } = render(<FeedbackIcon icon={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders a default icon for success status", () => {
    const { container } = render(<FeedbackIcon status="success" />);
    expect(container.firstChild).not.toBeNull();
  });

  it("renders a default icon for each non-success status", () => {
    for (const status of ["info", "warning", "error", "default"] as const) {
      const { container } = render(<FeedbackIcon status={status} />);
      expect(container.firstChild).not.toBeNull();
    }
  });

  it("applies className to the icon", () => {
    const { container } = render(<FeedbackIcon className="my-icon" />);
    expect(container.querySelector(".my-icon")).toBeInTheDocument();
  });
});
