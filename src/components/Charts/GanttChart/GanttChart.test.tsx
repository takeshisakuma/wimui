import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { GanttChart } from "./GanttChart";
import type { GanttTask } from "./GanttChart";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: Record<string, string>) => {
      if (opts) {
        return Object.entries(opts).reduce(
          (str, [k, v]) => str.replace(`{{${k}}}`, v),
          key,
        );
      }
      return key;
    },
  }),
}));

const today = new Date(2026, 0, 1); // 2026-01-01
const tasks: GanttTask[] = [
  {
    id: "task-1",
    label: "Design",
    startDate: new Date(2026, 0, 1),
    endDate: new Date(2026, 0, 5),
  },
  {
    id: "task-2",
    label: "Development",
    startDate: new Date(2026, 0, 6),
    endDate: new Date(2026, 0, 15),
    progress: 50,
  },
  {
    id: "task-3",
    label: "Testing",
    startDate: new Date(2026, 0, 16),
    endDate: new Date(2026, 0, 20),
    color: "#e65100",
  },
];

describe("GanttChart", () => {
  it("renders without crashing", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders all task labels", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    expect(screen.getAllByText("Design").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Development").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Testing").length).toBeGreaterThan(0);
  });

  it("renders task bars with aria-labels", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    const bars = screen.getAllByRole("gridcell");
    expect(bars.length).toBe(3);
  });

  it("calls onTaskClick when a bar is clicked", () => {
    const handleClick = vi.fn();
    render(
      <GanttChart tasks={tasks} startDate={today} onTaskClick={handleClick} />,
    );
    const bars = screen.getAllByRole("gridcell");
    fireEvent.click(bars[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(tasks[0]);
  });

  it("calls onTaskClick on Enter key", () => {
    const handleClick = vi.fn();
    render(
      <GanttChart tasks={tasks} startDate={today} onTaskClick={handleClick} />,
    );
    const bars = screen.getAllByRole("gridcell");
    fireEvent.keyDown(bars[0], { key: "Enter" });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls onTaskClick on Space key", () => {
    const handleClick = vi.fn();
    render(
      <GanttChart tasks={tasks} startDate={today} onTaskClick={handleClick} />,
    );
    const bars = screen.getAllByRole("gridcell");
    fireEvent.keyDown(bars[0], { key: " " });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders in week view mode", () => {
    render(<GanttChart tasks={tasks} startDate={today} viewMode="week" />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders in month view mode", () => {
    render(<GanttChart tasks={tasks} startDate={today} viewMode="month" />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders with empty task list", () => {
    render(<GanttChart tasks={[]} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders progress bar when progress is set", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    const container = document.querySelector(".wim-gantt-chart__progress");
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle({ width: "50%" });
  });

  it("applies custom color to task bar", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    const bars = document.querySelectorAll(".wim-gantt-chart__bar");
    expect(bars[2]).toHaveStyle({ backgroundColor: "#e65100" });
  });

  it("does not call onTaskClick when handler is not provided", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    const bars = screen.getAllByRole("gridcell");
    expect(() => fireEvent.click(bars[0])).not.toThrow();
  });
});
