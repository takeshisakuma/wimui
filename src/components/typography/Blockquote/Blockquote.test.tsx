import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Blockquote } from "./Blockquote";
import styles from "./blockquote.module.scss";

// Mock translation
vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Blockquote", () => {
  it("renders correctly", () => {
    render(<Blockquote content="Quote content" cite="Author" />);
    expect(screen.getByText("Quote content")).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
  });

  it("applies size and color classes", () => {
    render(<Blockquote size="sm" color="primary">Quote</Blockquote>);
    const element = screen.getByRole("blockquote");
    expect(element).toHaveClass(styles.sm);
    expect(element).toHaveClass(styles.primary);
  });

  it("handles border prop", () => {
    render(<Blockquote border={false}>Quote</Blockquote>);
    const element = screen.getByRole("blockquote");
    expect(element).not.toHaveClass(styles.border);
  });

  it("supports asChild prop", () => {
    render(
      <Blockquote asChild>
        <section data-testid="custom">Custom Blockquote</section>
      </Blockquote>,
    );
    const element = screen.getByTestId("custom");
    expect(element.tagName).toBe("SECTION");
    expect(element).toHaveClass(styles.root);
  });

  it("forwards ref to the element", () => {
    const ref = React.createRef<HTMLQuoteElement>();
    render(<Blockquote ref={ref}>Ref test</Blockquote>);
    expect(ref.current).toBeInstanceOf(HTMLQuoteElement);
  });

  it("applies custom className", () => {
    render(<Blockquote className="custom-class">Custom</Blockquote>);
    const element = screen.getByRole("blockquote");
    expect(element).toHaveClass("custom-class");
  });
});

