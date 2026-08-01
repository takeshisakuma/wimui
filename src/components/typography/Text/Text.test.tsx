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

  it("does not wrap when nowrap is set", () => {
    render(<Text nowrap>1.2 MB</Text>);
    const text = screen.getByText("1.2 MB");
    expect(text).toHaveClass(styles.nowrap);
    expect(text).not.toHaveClass(styles.truncate);
  });

  // truncate は nowrap を含む。省略記号は 1 行でしか出ないため、
  // 片方だけ付くと黙って効かなくなる。
  it("implies nowrap when truncate is set", () => {
    render(<Text truncate>A very long line of text</Text>);
    const text = screen.getByText("A very long line of text");
    expect(text).toHaveClass(styles.truncate);
    expect(text).toHaveClass(styles.nowrap);
  });

  it("wraps by default", () => {
    render(<Text>1.2 MB</Text>);
    const text = screen.getByText("1.2 MB");
    expect(text).not.toHaveClass(styles.nowrap);
    expect(text).not.toHaveClass(styles.truncate);
  });

  // 多行の打ち切り。1 行の  と同時には成立しないので、
  // 片方が勝つことをテストで固定する（両方当てると -webkit-box と
  // white-space: nowrap が食い合ってどちらの見た目にもならない）。
  it("clamps to the given number of lines", () => {
    render(<Text lineClamp={3}>A long blurb that needs to stop</Text>);
    const text = screen.getByText("A long blurb that needs to stop");
    expect(text).toHaveClass(styles.lineClamp);
    expect(text.style.getPropertyValue("--wim-text-line-clamp")).toBe("3");
  });

  it("lets truncate win over lineClamp", () => {
    render(
      <Text truncate lineClamp={3}>
        Only one line
      </Text>,
    );
    const text = screen.getByText("Only one line");
    expect(text).toHaveClass(styles.truncate);
    expect(text).not.toHaveClass(styles.lineClamp);
    expect(text.style.getPropertyValue("--wim-text-line-clamp")).toBe("");
  });

  it("ignores non-positive line counts instead of clamping to nothing", () => {
    render(<Text lineClamp={0}>Still visible</Text>);
    const text = screen.getByText("Still visible");
    expect(text).not.toHaveClass(styles.lineClamp);
  });

  it("does not clamp by default", () => {
    render(<Text>Plain</Text>);
    expect(screen.getByText("Plain")).not.toHaveClass(styles.lineClamp);
  });
});
