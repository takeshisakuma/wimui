import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Blockquote } from "./Blockquote";
import styles from "./blockquote.module.scss";

// Mock translation
vi.mock("react-i18next", () => ({
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
});

