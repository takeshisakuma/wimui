import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Link } from "./Link";

// Mock translation
vi.mock("react-i18next", () => ({
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
    // Should have external icon
    // Icon rendering check if needed
  });
});
