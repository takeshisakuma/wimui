import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FloatButton } from "./FloatButton";

// Mock translation
vi.mock("react-i18next", () => ({
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
      "wim-float-button--extended",
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
      // Mock window scroll
      // We need to trigger the event listener.
      // window.pageYOffset is read-only usually, but in JSDOM we might be able to set it or scrollTop.
      Object.defineProperty(window, "pageYOffset", {
        value: 200,
        configurable: true,
      });
      fireEvent.scroll(window);
    });

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
