import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinkButton } from "./LinkButton";
import buttonStyles from "../Button/button.module.scss";
import { vi } from "vitest";

// Mock Icon because it might use assets/etc
vi.mock("../../media/Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

describe("LinkButton", () => {
  it("renders like a button but is anchor", () => {
    render(<LinkButton href="/link">Go</LinkButton>);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(buttonStyles.root);
    expect(link).toHaveAttribute("href", "/link");
  });

  it("applies small size class", () => {
    render(<LinkButton href="#" size="sm">Small</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass(buttonStyles.sm);
  });

  it("applies large size class", () => {
    render(<LinkButton href="#" size="lg">Large</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass(buttonStyles.lg);
  });

  it("applies medium size class by default", () => {
    render(<LinkButton href="#">Default</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass(buttonStyles.md);
  });

  it("applies variant class", () => {
    render(<LinkButton href="#" variant="solid">Filled</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass(buttonStyles.solid);
  });

  it("applies intent class", () => {
    render(<LinkButton href="#" intent="danger">Destructive</LinkButton>);
    expect(screen.getByRole("link")).toHaveClass(buttonStyles.danger);
  });

  it("applies icon-only class when iconName is set and no children", () => {
    render(<LinkButton href="#" icon="SearchIcon" aria-label="search" />);
    expect(screen.getByRole("link")).toHaveClass(buttonStyles.iconOnly);
  });

  it("does not apply icon-only class when children is present", () => {
    render(<LinkButton href="#" icon="SearchIcon">Home</LinkButton>);
    expect(screen.getByRole("link")).not.toHaveClass(buttonStyles.iconOnly);
  });

  it("renders icon on the left by default", () => {
    const { container } = render(<LinkButton href="#" icon="HomeIcon">Home</LinkButton>);
    const icon = container.querySelector('[data-testid="icon"]');
    expect(icon).toBeInTheDocument();
  });

  it("renders icon on the right with iconPosition=right", () => {
    const { container } = render(
      <LinkButton href="#" icon="HomeIcon" iconPosition="right">
        Home
      </LinkButton>,
    );
    const icon = container.querySelector('[data-testid="icon"]');
    expect(icon).toBeInTheDocument();
  });

  it("applies backgroundColor style attribute", () => {
    const { container } = render(<LinkButton href="#" backgroundColor="red">Styled</LinkButton>);
    const link = container.querySelector("a");
    expect(link).toHaveStyle({ "background-color": "rgb(255, 0, 0)" });
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
