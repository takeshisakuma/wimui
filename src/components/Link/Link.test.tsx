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
  });

  it("applies small size class", () => {
    render(<Link label="Small" href="#" size="small" />);
    expect(screen.getByRole("link")).toHaveClass("wim-link--sm");
  });

  it("applies large size class", () => {
    render(<Link label="Large" href="#" size="large" />);
    expect(screen.getByRole("link")).toHaveClass("wim-link--lg");
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
    expect(screen.getByRole("link")).toHaveClass("wim-link--secondary");
  });
});
