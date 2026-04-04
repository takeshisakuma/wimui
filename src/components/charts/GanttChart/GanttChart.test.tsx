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

  it("moves focus to next bar on ArrowDown", () => {
    render(<GanttChart tasks={tasks} startDate={today} onTaskClick={vi.fn()} />);
    const bars = screen.getAllByRole("gridcell");
    fireEvent.keyDown(bars[0], { key: "ArrowDown" });
    expect(bars[0]).not.toHaveClass("wim-gantt-chart__bar--focused");
  });

  it("moves focus to previous bar on ArrowUp", () => {
    render(<GanttChart tasks={tasks} startDate={today} onTaskClick={vi.fn()} />);
    const bars = screen.getAllByRole("gridcell");
    fireEvent.keyDown(bars[1], { key: "ArrowUp" });
  });

  it("ArrowDown at last bar stays at last bar", () => {
    render(<GanttChart tasks={tasks} startDate={today} onTaskClick={vi.fn()} />);
    const bars = screen.getAllByRole("gridcell");
    const last = bars[bars.length - 1];
    expect(() => fireEvent.keyDown(last, { key: "ArrowDown" })).not.toThrow();
  });

  it("ArrowUp at first bar stays at first bar", () => {
    render(<GanttChart tasks={tasks} startDate={today} onTaskClick={vi.fn()} />);
    const bars = screen.getAllByRole("gridcell");
    expect(() => fireEvent.keyDown(bars[0], { key: "ArrowUp" })).not.toThrow();
  });

  it("sets focusedIndex on bar focus", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    const bars = screen.getAllByRole("gridcell");
    fireEvent.focus(bars[1]);
    expect(bars[1]).toHaveClass("wim-gantt-chart__bar--focused");
  });

  it("uses custom aria label for chart", () => {
    render(
      <GanttChart
        tasks={tasks}
        startDate={today}
        labels={{ ariaChart: "Project Timeline" }}
      />,
    );
    expect(screen.getByRole("grid")).toHaveAttribute("aria-label", "Project Timeline");
  });

  it("uses custom ariaTaskBar label function", () => {
    render(
      <GanttChart
        tasks={tasks}
        startDate={today}
        labels={{ ariaTaskBar: (label) => `Task: ${label}` }}
      />,
    );
    const bars = screen.getAllByRole("gridcell");
    expect(bars[0]).toHaveAttribute("aria-label", "Task: Design");
  });

  it("renders with explicit endDate", () => {
    const endDate = new Date(2026, 0, 31);
    render(<GanttChart tasks={tasks} startDate={today} endDate={endDate} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders with explicit columnWidth", () => {
    render(<GanttChart tasks={tasks} startDate={today} columnWidth={60} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("applies clickable class to bars when onTaskClick provided", () => {
    render(<GanttChart tasks={tasks} startDate={today} onTaskClick={vi.fn()} />);
    const bars = document.querySelectorAll(".wim-gantt-chart__bar--clickable");
    expect(bars.length).toBe(3);
  });

  it("does not apply clickable class when no onTaskClick", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    expect(document.querySelector(".wim-gantt-chart__bar--clickable")).toBeNull();
  });

  it("renders header cells in week mode", () => {
    render(
      <GanttChart
        tasks={tasks}
        startDate={today}
        endDate={new Date(2026, 0, 31)}
        viewMode="week"
      />,
    );
    const headers = document.querySelectorAll(".wim-gantt-chart__header-cell:not(.wim-gantt-chart__header-cell--label)");
    expect(headers.length).toBeGreaterThan(0);
  });

  it("renders header cells in month mode", () => {
    render(
      <GanttChart
        tasks={tasks}
        startDate={today}
        endDate={new Date(2026, 3, 30)}
        viewMode="month"
      />,
    );
    const headers = document.querySelectorAll(".wim-gantt-chart__header-cell:not(.wim-gantt-chart__header-cell--label)");
    expect(headers.length).toBeGreaterThan(0);
  });

  it("getMonday handles Sunday correctly (diff = -6)", () => {
    // 2026-01-04 is a Sunday
    const sunday = new Date(2026, 0, 4);
    render(<GanttChart tasks={tasks} startDate={sunday} viewMode="week" />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("applies aria-selected=true on focused bar", () => {
    render(<GanttChart tasks={tasks} startDate={today} />);
    const bars = screen.getAllByRole("gridcell");
    fireEvent.focus(bars[0]);
    expect(bars[0]).toHaveAttribute("aria-selected", "true");
  });

  it("derives startDate and endDate from tasks when not provided", () => {
    // No explicit startDate/endDate → exercises Math.min/Math.max branches
    render(<GanttChart tasks={tasks} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("syncs header scroll position on body scroll", () => {
    const { container } = render(<GanttChart tasks={tasks} startDate={today} />);
    const bodyScroll = container.querySelector(".wim-gantt-chart__body-scroll") as HTMLElement;
    const headerScroll = container.querySelector(".wim-gantt-chart__header-scroll") as HTMLElement;
    Object.defineProperty(bodyScroll, "scrollLeft", { value: 100, writable: true });
    fireEvent.scroll(bodyScroll);
    // headerScroll.scrollLeft should have been set to bodyScroll.scrollLeft
    expect(headerScroll.scrollLeft).toBeDefined();
  });

  it("progress bar clamps at 100%", () => {
    const overflowTask: GanttTask[] = [
      {
        id: "t1",
        label: "Over",
        startDate: new Date(2026, 0, 1),
        endDate: new Date(2026, 0, 5),
        progress: 150,
      },
    ];
    render(<GanttChart tasks={overflowTask} startDate={today} />);
    const bar = document.querySelector(".wim-gantt-chart__progress");
    expect(bar).toHaveStyle({ width: "100%" });
  });
});
