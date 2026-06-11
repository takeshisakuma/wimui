import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Badge } from "./Badge";
import styles from "./badge.module.scss";

// Mock useTranslation
vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders content prop", () => {
    render(<Badge content="Count" />);
    expect(screen.getByText("Count")).toBeInTheDocument();
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
    expect(span).toHaveClass(styles.error);
    expect(span).toHaveClass(styles.outline);
  });

  it("applies size class", () => {
    const { container } = render(<Badge size="sm">Small</Badge>);
    expect(container.firstChild).toHaveClass(styles.sm);
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

  it("applies iconOnly class only when no content and no icon (dot mode)", () => {
    const { container: dotContainer } = render(<Badge />);
    expect(dotContainer.firstChild).toHaveClass(styles.iconOnly);

    const { container: iconContainer } = render(<Badge icon={<span>Icon</span>} />);
    expect(iconContainer.firstChild).not.toHaveClass(styles.iconOnly);

    const { container: textContainer } = render(<Badge>Text</Badge>);
    expect(textContainer.firstChild).not.toHaveClass(styles.iconOnly);
  });
});
