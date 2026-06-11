import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Text } from "./Text";
import styles from "./text.module.scss";

// Mock translation
vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Text", () => {
  it("renders correctly", () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("applies size class", () => {
    render(<Text size="lg">Test Text</Text>);
    expect(screen.getByText("Test Text")).toHaveClass(styles.lg);
  });

  it("applies weight and style classes", () => {
    render(
      <Text weight="bold" fontStyle="italic">
        Test Text
      </Text>,
    );
    const element = screen.getByText("Test Text");
    expect(element).toHaveClass(styles.bold);
    expect(element).toHaveClass(styles.italic);
  });

  it("handles decoration", () => {
    render(<Text decoration="underline">Test Text</Text>);
    const span = screen.getByText("Test Text");
    expect(span).toHaveClass(styles.underline);
  });

  it("renders as child when asChild is true", () => {
    render(
      <Text asChild>
        <span>Test Text</span>
      </Text>,
    );
    const span = screen.getByText("Test Text");
    expect(span.tagName).toBe("SPAN");
    expect(span).toHaveClass(styles.root);
  });
});

