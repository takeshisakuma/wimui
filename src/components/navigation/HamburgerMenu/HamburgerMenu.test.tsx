import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HamburgerMenu } from "./HamburgerMenu";
import styles from "./hamburger-menu.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("HamburgerMenu", () => {
  it("renders correctly", () => {
    render(<HamburgerMenu />);
    expect(
      screen.getByRole("button", { name: "Open menu" }),
    ).toBeInTheDocument();
  });

  it("toggles state class", () => {
    render(<HamburgerMenu open />);
    const button = screen.getByRole("button", { name: "Close menu" });
    expect(button).toHaveClass(styles.open);
  });

  it("handles click", () => {
    const handleClick = vi.fn();
    render(<HamburgerMenu onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("sets aria-expanded according to open state", () => {
    const { rerender } = render(<HamburgerMenu />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

    rerender(<HamburgerMenu open />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("prefers a custom aria-label over the default", () => {
    render(<HamburgerMenu aria-label="メニュー" />);
    expect(screen.getByRole("button", { name: "メニュー" })).toBeInTheDocument();
  });

  it("applies the visibleBelow class", () => {
    render(<HamburgerMenu visibleBelow="md" />);
    expect(screen.getByRole("button")).toHaveClass(styles.visibleBelowMd);
  });

  it("does not apply a visibility class by default", () => {
    render(<HamburgerMenu />);
    expect(screen.getByRole("button")).not.toHaveClass(styles.visibleBelowMd);
  });

  it("supports asChild prop", () => {
    render(
      <HamburgerMenu asChild>
        <button type="button" data-testid="hamburger-slot">
          Menu
        </button>
      </HamburgerMenu>,
    );
    const element = screen.getByTestId("hamburger-slot");
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass(styles.root);
    expect(element).toHaveAttribute("aria-expanded", "false");
  });
});
