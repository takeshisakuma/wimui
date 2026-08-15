import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { FloatButton } from "./FloatButton";
import styles from "./float-button.module.scss";

// Mock translation
vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("FloatButton", () => {
  it("renders with icon", () => {
    // Icon rendering depends on Icon component, we assume it works or renders something.
    // FloatButton renders button.
    render(<FloatButton iconName="PlusIcon" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders label when extended", () => {
    render(<FloatButton label="Create" />);
    expect(screen.getByText("Create")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass(
      styles.extended,
    );
  });

  it("handles click", () => {
    const handleClick = vi.fn();
    render(<FloatButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("backTop functionality shows/hides on scroll", () => {
    render(<FloatButton backTop visibilityHeight={100} />);

    // Initially hidden (scrollY is 0)
    expect(screen.queryByRole("button")).not.toBeInTheDocument();

    act(() => {
      Object.defineProperty(window, "pageYOffset", {
        value: 200,
        configurable: true,
      });
      fireEvent.scroll(window);
    });

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("backTop scrolls to top on click", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    // Make scrollY > visibilityHeight so button is visible
    Object.defineProperty(window, "pageYOffset", { value: 500, configurable: true });
    render(<FloatButton backTop visibilityHeight={100} />);
    // Trigger scroll to show button
    act(() => { fireEvent.scroll(window); });
    fireEvent.click(screen.getByRole("button"));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    scrollTo.mockRestore();
  });

  it("renders number badge", () => {
    render(<FloatButton badge={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders dot badge", () => {
    const { container } = render(<FloatButton badge={true} />);
    expect(container.querySelector(`.${styles.dot}`)).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<FloatButton description="Tooltip text" />);
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  it("renders small size", () => {
    render(<FloatButton size="sm" />);
    expect(screen.getByRole("button")).toHaveClass(styles.sm);
  });

  it("renders large size", () => {
    render(<FloatButton size="lg" />);
    expect(screen.getByRole("button")).toHaveClass(styles.lg);
  });

  it("renders the outline variant and square shape", () => {
    render(<FloatButton variant="outline" shape="square" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass(styles.outline);
    expect(btn).toHaveClass(styles.square);
  });

  it("renders shrink class", () => {
    render(<FloatButton label="Create" shrink />);
    expect(screen.getByRole("button")).toHaveClass(styles.shrink);
  });

  it("ellipsis-clips long labels at the 200px cap (T181)", () => {
    const scss = readFileSync(
      "src/components/form/FloatButton/float-button.module.scss",
      "utf8",
    );
    const label = scss.match(/^\s+\.label\s*\{([^}]+)\}/m);
    expect(label?.[1]).toMatch(/text-overflow:\s*ellipsis/);
    expect(label?.[1]).toMatch(/overflow:\s*hidden/);
    expect(label?.[1]).toMatch(/white-space:\s*nowrap/);
    expect(scss).toMatch(/max-width:\s*200px/);
  });
});
