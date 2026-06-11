import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SwipeAction } from "./SwipeAction";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
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
