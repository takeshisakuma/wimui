import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("ThemeToggle", () => {
  it("cycles modes on the icon variant and applies data-theme", () => {
    const onChange = vi.fn();
    render(<ThemeToggle defaultValue="light" onChange={onChange} />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    fireEvent.click(screen.getByRole("button"));
    expect(onChange).toHaveBeenCalledWith("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("removes data-theme for the system mode", () => {
    render(<ThemeToggle defaultValue="dark" modes={["dark", "system"]} />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    fireEvent.click(screen.getByRole("button"));
    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
  });

  it("persists the choice to localStorage", () => {
    render(<ThemeToggle defaultValue="light" storageKey="my-theme" />);
    fireEvent.click(screen.getByRole("button"));
    expect(localStorage.getItem("my-theme")).toBe("dark");
  });

  it("restores the persisted choice on mount", () => {
    localStorage.setItem("wim-theme", "dark");
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("renders one button per mode in the segmented variant with aria-pressed", () => {
    render(
      <ThemeToggle
        variant="segmented"
        modes={["light", "dark", "system"]}
        defaultValue="light"
        labels={{ light: "Light", dark: "Dark", system: "System" }}
      />,
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    expect(screen.getByLabelText("Light")).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByLabelText("Dark"));
    expect(screen.getByLabelText("Dark")).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByLabelText("Light")).toHaveAttribute("aria-pressed", "false");
  });

  it("does not touch the document when applyToDocument is false", () => {
    render(<ThemeToggle defaultValue="dark" applyToDocument={false} />);
    expect(document.documentElement.hasAttribute("data-theme")).toBe(false);
  });

  it("respects a controlled value", () => {
    const { rerender } = render(<ThemeToggle value="light" />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    rerender(<ThemeToggle value="dark" />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("supports asChild prop", () => {
    render(
      <ThemeToggle asChild>
        <div data-testid="theme-slot" />
      </ThemeToggle>,
    );
    const element = screen.getByTestId("theme-slot");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass("wim-theme-toggle");
    expect(element.querySelector("button")).toBeInTheDocument();
  });
});
