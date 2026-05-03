import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SwipeAction } from "./SwipeAction";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SwipeAction", () => {
  it("renders correctly", () => {
    render(<SwipeAction>Test content</SwipeAction>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <SwipeAction asChild>
        <span data-testid="child">Child</span>
      </SwipeAction>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
