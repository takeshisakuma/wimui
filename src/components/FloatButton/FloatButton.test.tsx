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
    expect(container.querySelector(".wim-float-button__badge--dot")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<FloatButton description="Tooltip text" />);
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  it("renders small size", () => {
    render(<FloatButton size="sm" />);
    expect(screen.getByRole("button")).toHaveClass("wim-float-button--sm");
  });

  it("renders large size", () => {
    render(<FloatButton size="lg" />);
    expect(screen.getByRole("button")).toHaveClass("wim-float-button--lg");
  });

  it("renders primary variant and square shape", () => {
    render(<FloatButton variant="primary" shape="square" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("wim-float-button--primary");
    expect(btn).toHaveClass("wim-float-button--square");
  });

  it("renders shrink class", () => {
    render(<FloatButton label="Create" shrink />);
    expect(screen.getByRole("button")).toHaveClass("wim-float-button--shrink");
  });
});
