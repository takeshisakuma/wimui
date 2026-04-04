import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Badge } from "./Badge";

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders icon", () => {
    render(<Badge icon={<span data-testid="icon">Icon</span>} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies variant and status classes", () => {
    const { container } = render(
      <Badge intent="error" variant="outline">Test</Badge>,
    );
    const span = container.firstChild;
    expect(span).toHaveClass("wim-badge--error");
    expect(span).toHaveClass("wim-badge--outline");
  });

  it("applies size class", () => {
    const { container } = render(<Badge size="sm">Small</Badge>);
    expect(container.firstChild).toHaveClass("wim-badge--sm");
  });

  it("sets role='img' when aria-label is provided", () => {
    render(<Badge aria-label="5件の通知">5</Badge>);
    expect(screen.getByRole("img", { name: "5件の通知" })).toBeInTheDocument();
  });

  it("does not set role='img' when no aria-label", () => {
    render(<Badge>Active</Badge>);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("respects explicit role over aria-label default", () => {
    const { container } = render(
      <Badge aria-label="読み込み中" role="status">3</Badge>,
    );
    expect(container.firstChild).toHaveAttribute("role", "status");
  });

  it("applies icon-only class when no content", () => {
    const { container } = render(<Badge icon={<span>Icon</span>} />);
    expect(container.firstChild).toHaveClass("wim-badge--icon-only");
  });
});
