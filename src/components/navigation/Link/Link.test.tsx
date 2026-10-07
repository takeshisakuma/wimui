import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Link } from "./Link";
import styles from "./link.module.scss";

// Mock translation
vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Link", () => {
  it("renders label and href", () => {
    render(<Link label="Home" href="/home" />);
    const link = screen.getByRole("link", { name: "Home" });
    expect(link).toHaveAttribute("href", "/home");
  });

  it("renders external link", () => {
    render(<Link label="External" href="https://example.com" external />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("applies small size class", () => {
    render(<Link label="Small" href="#" size="sm" />);
    expect(screen.getByRole("link")).toHaveClass(styles.sm);
  });

  it("applies large size class", () => {
    render(<Link label="Large" href="#" size="lg" />);
    expect(screen.getByRole("link")).toHaveClass(styles.lg);
  });

  it("renders children when no label", () => {
    render(<Link href="#"><span>Child</span></Link>);
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  it("uses target prop when not external", () => {
    render(<Link label="Tab" href="#" target="_blank" />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("applies secondary priority class", () => {
    render(<Link label="Sec" href="#" priority="secondary" />);
    expect(screen.getByRole("link")).toHaveClass(styles.secondary);
  });

  // T323: Slottable を内側の span の中に置いていたので、子ではなくその span が根になり、
  // href もクラスも span に付いていた（`<span href="/parent"><span><a href="/child">`）
  describe("asChild", () => {
    it("子の要素を根にして、Link のクラスと属性を子に付ける", () => {
      const { container } = render(
        <Link asChild id="docs-link" aria-describedby="hint" data-track="nav">
          <a href="/docs" data-testid="child">
            Docs
          </a>
        </Link>,
      );
      const child = screen.getByTestId("child");

      expect(container.firstElementChild).toBe(child);
      expect(child.tagName).toBe("A");
      expect(child).toHaveClass("wim-link");
      expect(child).toHaveAttribute("href", "/docs");
      expect(child).toHaveAttribute("id", "docs-link");
      expect(child).toHaveAttribute("aria-describedby", "hint");
      expect(child).toHaveAttribute("data-track", "nav");
      // リンクは 1 つだけ。href を持つ span も、入れ子の a も作らない
      expect(screen.getAllByRole("link")).toHaveLength(1);
      expect(container.querySelector("span[href]")).toBeNull();
    });

    it("子の中身を、asChild なしと同じ内側の作りで包む", () => {
      const anatomy = (root: Element) =>
        Array.from(root.querySelectorAll("*"))
          .filter((el) => !el.closest("svg") || el.tagName.toLowerCase() === "svg")
          .map((el) => `${el.tagName.toLowerCase()}:${el.parentElement === root ? "root" : el.parentElement?.tagName.toLowerCase()}`);

      const plain = render(
        <Link href="/docs" iconName="CircleIcon" external>
          Docs
        </Link>,
      );
      const plainAnatomy = anatomy(plain.container.firstElementChild as Element);
      plain.unmount();

      const slotted = render(
        <Link asChild iconName="CircleIcon" external>
          <a href="/docs">Docs</a>
        </Link>,
      );
      const root = slotted.container.firstElementChild as Element;

      expect(anatomy(root)).toEqual(plainAnatomy);
      expect(root).toHaveAttribute("target", "_blank");
      expect(root).toHaveTextContent("Docs");
      // アイコンと外部リンクの印の 2 つが、子の中に描かれる
      expect(root.querySelectorAll("svg")).toHaveLength(2);
    });

    it("label を渡すと、子の中身の代わりに label を描く", () => {
      render(
        <Link asChild label="From label">
          <a href="/docs">From child</a>
        </Link>,
      );
      const link = screen.getByRole("link");

      expect(link).toHaveTextContent("From label");
      expect(link).not.toHaveTextContent("From child");
    });

    it("href は、子に書いた値が残る", () => {
      render(
        <Link asChild href="/parent">
          <a href="/child">Docs</a>
        </Link>,
      );
      expect(screen.getByRole("link")).toHaveAttribute("href", "/child");
    });
  });
});
