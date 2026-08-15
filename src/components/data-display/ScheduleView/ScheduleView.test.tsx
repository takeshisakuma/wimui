import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { ScheduleView } from "./ScheduleView";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("@fullcalendar/react", () => ({
  default: () => <div data-testid="fullcalendar" />,
}));

vi.mock("@fullcalendar/timegrid", () => ({ default: {} }));
vi.mock("@fullcalendar/daygrid", () => ({ default: {} }));
vi.mock("@fullcalendar/interaction", () => ({ default: {} }));

describe("ScheduleView", () => {
  it("renders a region with the correct aria-label", () => {
    render(<ScheduleView aria-label="Team calendar" />);
    expect(screen.getByRole("region", { name: "Team calendar" })).toBeInTheDocument();
  });

  it("renders FullCalendar", () => {
    render(<ScheduleView />);
    expect(screen.getByTestId("fullcalendar")).toBeInTheDocument();
  });

  it("applies className to the root element", () => {
    const { container } = render(<ScheduleView className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });

  it("marks overflowing FullCalendar scrollers as keyboard reachable (T189)", () => {
    const src = readFileSync(
      "src/components/data-display/ScheduleView/ScheduleView.tsx",
      "utf8",
    );
    expect(src).toContain('node.setAttribute("tabindex", "0")');
    expect(src).toContain('height="auto"');
    expect(src).toContain('eventColor="var(--wim-color-primary)"');
    expect(src).toContain('eventTextColor="var(--wim-color-text-on-primary)"');
    expect(src).toContain('el.setAttribute("aria-hidden", "true")');
    expect(src).toContain('el.setAttribute("role", "button")');
    const scss = readFileSync(
      "src/components/data-display/ScheduleView/schedule-view.module.scss",
      "utf8",
    );
    expect(scss).toContain(".fc-day-today .fc-col-header-cell-cushion");
    expect(scss).toContain("--fc-page-bg-color: var(--wim-color-surface)");
  });

  it("wraps the header toolbar by chunk, not inside prev/next (T190)", () => {
    const scss = readFileSync(
      "src/components/data-display/ScheduleView/schedule-view.module.scss",
      "utf8",
    );
    expect(scss).toMatch(/\.fc-header-toolbar\.fc-toolbar\s*\{[\s\S]*?flex-wrap:\s*wrap/);
    expect(scss).toMatch(/\.fc-toolbar-chunk\s*\{[\s\S]*?flex-wrap:\s*nowrap/);
    expect(scss).toMatch(/\.fc-toolbar-chunk\s*\{[\s\S]*?flex:\s*0 0 auto/);
    expect(scss).not.toMatch(/flex:\s*1 1 100%/);
    expect(scss).not.toMatch(/\.fc-toolbar-chunk\s*\{[\s\S]*?flex-wrap:\s*wrap/);
  });
});
