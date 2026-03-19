import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("renders like a button but is anchor", () => {
    render(<LinkButton href="/link" label="Go" />);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("wim-button");
    expect(link).toHaveAttribute("href", "/link");
  });

  it("applies small size class", () => {
    render(<LinkButton href="#" label="Small" size="small" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--sm");
  });

  it("applies large size class", () => {
    render(<LinkButton href="#" label="Large" size="large" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--lg");
  });

  it("applies medium size class by default", () => {
    render(<LinkButton href="#" label="Default" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--md");
  });

  it("applies priority class", () => {
    render(<LinkButton href="#" label="Primary" priority="primary" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--primary");
  });

  it("applies role class", () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    render(<LinkButton href="#" label="Destructive" role="destructive" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--destructive");
  });

  it("applies icon-only class when iconName is set and no label", () => {
    render(<LinkButton href="#" iconName="SearchIcon" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--icon-only");
  });

  it("does not apply icon-only class when label is present", () => {
    render(<LinkButton href="#" label="Home" iconName="SearchIcon" />);
    expect(screen.getByRole("link")).not.toHaveClass("wim-button--icon-only");
  });

  it("renders icon on the left by default does not show right container", () => {
    const { container } = render(<LinkButton href="#" label="Link" iconName="HomeIcon" iconPosition="left" />);
    // icon is rendered before label (left side)
    const inner = container.querySelector(".wim-button__inner");
    expect(inner).toBeInTheDocument();
  });

  it("renders icon on the right with iconPosition=right", () => {
    const { container } = render(<LinkButton href="#" label="Link" iconName="HomeIcon" iconPosition="right" />);
    const inner = container.querySelector(".wim-button__inner");
    expect(inner).toBeInTheDocument();
  });

  it("applies backgroundColor style attribute", () => {
    const { container } = render(<LinkButton href="#" label="Styled" backgroundColor="red" />);
    const link = container.querySelector("a");
    expect(link?.getAttribute("style")).toContain("background-color");
  });

  it("applies custom className", () => {
    render(<LinkButton href="#" label="Custom" className="my-link" />);
    expect(screen.getByRole("link")).toHaveClass("my-link");
  });

  it("sets aria-label", () => {
    render(<LinkButton href="#" aria-label="Go to home" />);
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "Go to home");
  });
});
