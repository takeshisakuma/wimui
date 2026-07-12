import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toolbar } from "./Toolbar";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Toolbar", () => {
  it("exposes role=toolbar", () => {
    render(
      <Toolbar aria-label="Formatting">
        <button type="button">Bold</button>
      </Toolbar>,
    );
    expect(screen.getByRole("toolbar", { name: "Formatting" })).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <Toolbar asChild aria-label="Actions">
        <section data-testid="child">
          <button type="button">A</button>
        </section>
      </Toolbar>,
    );
    expect(screen.getByTestId("child")).toHaveAttribute("role", "toolbar");
  });

  it("renders groups and separators", () => {
    render(
      <Toolbar aria-label="Editor">
        <Toolbar.Group aria-label="Style">
          <button type="button">Bold</button>
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group aria-label="Align">
          <button type="button">Left</button>
        </Toolbar.Group>
      </Toolbar>,
    );
    expect(screen.getByRole("group", { name: "Style" })).toBeInTheDocument();
    expect(screen.getAllByRole("separator", { hidden: true }).length).toBeGreaterThan(0);
  });

  it("moves focus with arrow keys", async () => {
    const user = userEvent.setup();
    render(
      <Toolbar aria-label="Nav">
        <button type="button">One</button>
        <button type="button">Two</button>
        <button type="button">Three</button>
      </Toolbar>,
    );
    const [one, two] = screen.getAllByRole("button");
    one.focus();
    await user.keyboard("{ArrowRight}");
    expect(two).toHaveFocus();
  });
});
