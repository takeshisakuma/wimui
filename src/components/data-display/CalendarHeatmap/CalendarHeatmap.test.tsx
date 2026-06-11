import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CalendarHeatmap } from "./CalendarHeatmap";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("CalendarHeatmap", () => {
  it("renders correctly", () => {
    const data = [{ date: "2024-01-01", count: 5 }];
    const { container } = render(<CalendarHeatmap data={data} year={2024} />);
    expect(container.querySelector('[data-date="2024-01-01"]')).toBeInTheDocument();
  });

  it("supports asChild", () => {
    const data = [{ date: "2024-01-01", count: 5 }];
    render(
      <CalendarHeatmap asChild data={data}>
        <div data-testid="child">Child</div>
      </CalendarHeatmap>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
