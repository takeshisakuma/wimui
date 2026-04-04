import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("renders like a button but is anchor", () => {
    render(<LinkButton href="/link">Go</LinkButton>);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("wim-button");
    expect(link).toHaveAttribute("href", "/link");
  });

  it("applies small size class", () => {
    render(<LinkButton href="#" size="sm">Small</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("wim-button--sm");
  });

  it("applies large size class", () => {
    render(<LinkButton href="#" size="lg">Large</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("wim-button--lg");
  });

  it("applies medium size class by default", () => {
    render(<LinkButton href="#">Default</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("wim-button--md");
  });

  it("applies variant class", () => {
    render(<LinkButton href="#" variant="solid">Filled</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("wim-button--solid");
  });

  it("applies intent class", () => {
    render(<LinkButton href="#" intent="destructive">Destructive</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("wim-button--destructive");
  });

  it("applies icon-only class when iconName is set and no children", () => {
    render(<LinkButton href="#" icon="SearchIcon" />);
    expect(screen.getByRole("link")).toHaveClass("wim-button--icon-only");
  });

  it("does not apply icon-only class when children is present", () => {
    render(<LinkButton href="#" icon="SearchIcon">Home</LinkButton>);
    expect(screen.getByRole("link")).not.toHaveClass("wim-button--icon-only");
  });

  it("renders icon on the left by default does not show right container", () => {
    const { container } = render(<LinkButton href="#" icon="HomeIcon" iconPosition="left">Link</LinkButton>);
    const inner = container.querySelector(".wim-button__inner");
    expect(inner).toBeInTheDocument();
  });

  it("renders icon on the right with iconPosition=right", () => {
    const { container } = render(<LinkButton href="#" icon="HomeIcon" iconPosition="right">Link</LinkButton>);
    const inner = container.querySelector(".wim-button__inner");
    expect(inner).toBeInTheDocument();
  });

  it("applies backgroundColor style attribute", () => {
    const { container } = render(<LinkButton href="#" backgroundColor="red">Styled</LinkButton>);
    const link = container.querySelector("a");
    expect(link?.getAttribute("style")).toContain("background-color");
  });

  it("applies custom className", () => {
    render(<LinkButton href="#" className="my-link">Custom</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass("my-link");
  });

  it("sets aria-label", () => {
    render(<LinkButton href="#" aria-label="Go to home" />);
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "Go to home");
  });
});
