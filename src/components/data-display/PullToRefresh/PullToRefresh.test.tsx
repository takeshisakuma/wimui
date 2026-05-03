import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PullToRefresh } from "./PullToRefresh";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("PullToRefresh", () => {
  it("renders correctly", () => {
    render(<PullToRefresh onRefresh={() => Promise.resolve()}>Test content</PullToRefresh>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <PullToRefresh asChild onRefresh={() => Promise.resolve()}>
        <span data-testid="child">Child</span>
      </PullToRefresh>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
