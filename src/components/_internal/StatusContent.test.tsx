import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { StatusContent } from "./StatusContent";
import styles from "./status-content.module.scss";

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
    render(<StatusContent icon={<span data-testid="icon"></span>} />);
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
    expect(container.firstChild).toHaveClass(styles.sm);
  });

  // T250 ③。以前は md / lg を中央揃えに固定していた（sm だけ左）。
  it("is start-aligned by default at every size", () => {
    for (const size of ["sm", "md", "lg"] as const) {
      const { container, unmount } = render(<StatusContent size={size} title="t" />);
      expect(container.firstChild).toHaveAttribute("data-align", "start");
      unmount();
    }
  });

  it("centers when align is center", () => {
    const { container } = render(<StatusContent align="center" title="t" />);
    expect(container.firstChild).toHaveAttribute("data-align", "center");
    expect(container.firstChild).toHaveClass(styles.alignCenter);
  });

  // 以前は知らない props を受け取らずに捨てていた（EmptyState の {...props} が効かなかった）。
  it("forwards other div attributes to the root", () => {
    render(<StatusContent id="empty" role="status" aria-label="No results" title="t" />);
    const root = screen.getByRole("status", { name: "No results" });
    expect(root).toHaveAttribute("id", "empty");
  });

  it("applies custom prefixCls", () => {
    const { container } = render(<StatusContent prefixCls="my-prefix" />);
    expect(container.firstChild).toHaveClass("my-prefix");
  });
});

