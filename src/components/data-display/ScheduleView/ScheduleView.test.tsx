import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScheduleView } from "./ScheduleView";

vi.mock("react-i18next", () => ({
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
});
