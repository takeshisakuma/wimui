import React, { useRef, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./gantt-chart.scss";

export type GanttTask = {
  id: string;
  label: string;
  startDate: Date;
  endDate: Date;
  color?: string;
  progress?: number;
};

export type GanttViewMode = "day" | "week" | "month";

export type GanttChartProps = {
  tasks: GanttTask[];
  startDate?: Date;
  endDate?: Date;
  viewMode?: GanttViewMode;
  columnWidth?: number;
  rowHeight?: number;
  onTaskClick?: (task: GanttTask) => void;
  className?: string;
};

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getDaysDiff(a: Date, b: Date): number {
  return Math.round(
    (startOfDay(b).getTime() - startOfDay(a).getTime()) / (1000 * 60 * 60 * 24),
  );
}

function getMonday(date: Date): Date {
  const d = startOfDay(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

type HeaderCell = { label: string; date: Date };

function getHeaderCells(
  chartStart: Date,
  chartEnd: Date,
  viewMode: GanttViewMode,
): HeaderCell[] {
  const cells: HeaderCell[] = [];
  if (viewMode === "day") {
    const current = startOfDay(chartStart);
    const end = startOfDay(chartEnd);
    while (current <= end) {
      cells.push({ label: String(current.getDate()), date: new Date(current) });
      current.setDate(current.getDate() + 1);
    }
  } else if (viewMode === "week") {
    const current = getMonday(chartStart);
    const end = startOfDay(chartEnd);
    while (current <= end) {
      const m = current.getMonth() + 1;
      const d = current.getDate();
      cells.push({ label: `${m}/${d}`, date: new Date(current) });
      current.setDate(current.getDate() + 7);
    }
  } else {
    const current = new Date(chartStart.getFullYear(), chartStart.getMonth(), 1);
    const end = startOfDay(chartEnd);
    while (current <= end) {
      const label = current.toLocaleString("en-US", { month: "short", year: "2-digit" });
      cells.push({ label, date: new Date(current) });
      current.setMonth(current.getMonth() + 1);
    }
  }
  return cells;
}

function getUnitDays(viewMode: GanttViewMode): number {
  if (viewMode === "day") return 1;
  if (viewMode === "week") return 7;
  return 30.44;
}

function getBarLeft(
  task: GanttTask,
  chartStart: Date,
  viewMode: GanttViewMode,
  columnWidth: number,
): number {
  const days = getDaysDiff(chartStart, task.startDate);
  return (days / getUnitDays(viewMode)) * columnWidth;
}

function getBarWidth(
  task: GanttTask,
  viewMode: GanttViewMode,
  columnWidth: number,
): number {
  const days = Math.max(getDaysDiff(task.startDate, task.endDate), 1);
  const minWidth = columnWidth * 0.5;
  return Math.max((days / getUnitDays(viewMode)) * columnWidth, minWidth);
}

const DEFAULT_COLUMN_WIDTHS: Record<GanttViewMode, number> = {
  day: 40,
  week: 80,
  month: 120,
};

export const GanttChart = ({
  tasks,
  startDate,
  endDate,
  viewMode = "day",
  columnWidth,
  rowHeight = 40,
  onTaskClick,
  className,
}: GanttChartProps): React.ReactElement => {
  const { t } = useTranslation("components");
  const bodyScrollRef = useRef<HTMLDivElement>(null);
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const colWidth = columnWidth ?? DEFAULT_COLUMN_WIDTHS[viewMode];

  const chartStart = useMemo(() => {
    if (startDate) return startOfDay(startDate);
    if (tasks.length === 0) return startOfDay(new Date());
    return startOfDay(
      new Date(Math.min(...tasks.map((t) => t.startDate.getTime()))),
    );
  }, [startDate, tasks]);

  const chartEnd = useMemo(() => {
    if (endDate) return startOfDay(endDate);
    if (tasks.length === 0) {
      const d = startOfDay(new Date());
      d.setDate(d.getDate() + 30);
      return d;
    }
    return startOfDay(
      new Date(Math.max(...tasks.map((t) => t.endDate.getTime()))),
    );
  }, [endDate, tasks]);

  const headerCells = useMemo(
    () => getHeaderCells(chartStart, chartEnd, viewMode),
    [chartStart, chartEnd, viewMode],
  );

  const totalWidth = headerCells.length * colWidth;

  const onBodyScroll = useCallback(() => {
    if (headerScrollRef.current && bodyScrollRef.current) {
      headerScrollRef.current.scrollLeft = bodyScrollRef.current.scrollLeft;
    }
  }, []);

  const handleTaskKeyDown = useCallback(
    (e: React.KeyboardEvent, task: GanttTask, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onTaskClick?.(task);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(index + 1, tasks.length - 1);
        setFocusedIndex(next);
        const rows = document.querySelectorAll<HTMLElement>(".wim-gantt-chart__bar");
        rows[next]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(index - 1, 0);
        setFocusedIndex(prev);
        const rows = document.querySelectorAll<HTMLElement>(".wim-gantt-chart__bar");
        rows[prev]?.focus();
      }
    },
    [onTaskClick, tasks.length],
  );

  return (
    <div
      className={classNames("wim-gantt-chart", className)}
      role="grid"
      aria-label={t("ganttchart_aria_chart")}
    >
      <div className="wim-gantt-chart__layout">
        {/* Left: task label panel */}
        <div className="wim-gantt-chart__label-panel" aria-hidden="true">
          <div
            className="wim-gantt-chart__header-cell wim-gantt-chart__header-cell--label"
            style={{ height: rowHeight }}
          />
          {tasks.map((task) => (
            <div
              key={task.id}
              className="wim-gantt-chart__label-row"
              style={{ height: rowHeight }}
            >
              <span className="wim-gantt-chart__label-text">{task.label}</span>
            </div>
          ))}
        </div>

        {/* Right: scrollable timeline */}
        <div className="wim-gantt-chart__timeline-wrapper">
          {/* Header */}
          <div
            ref={headerScrollRef}
            className="wim-gantt-chart__header-scroll"
          >
            <div
              className="wim-gantt-chart__header"
              style={{ width: totalWidth, height: rowHeight }}
              role="row"
            >
              {headerCells.map((cell) => (
                <div
                  key={cell.date.toISOString()}
                  className="wim-gantt-chart__header-cell"
                  style={{ width: colWidth }}
                  role="columnheader"
                >
                  {cell.label}
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div
            ref={bodyScrollRef}
            className="wim-gantt-chart__body-scroll"
            onScroll={onBodyScroll}
          >
            <div
              className="wim-gantt-chart__body"
              style={{ width: totalWidth, "--gantt-col-width": `${colWidth}px`, "--gantt-row-height": `${rowHeight}px` } as React.CSSProperties}
            >
              {/* Task rows */}
              {tasks.map((task, index) => {
                const left = getBarLeft(task, chartStart, viewMode, colWidth);
                const width = getBarWidth(task, viewMode, colWidth);
                const startStr = task.startDate.toLocaleDateString();
                const endStr = task.endDate.toLocaleDateString();

                return (
                  <div
                    key={task.id}
                    className="wim-gantt-chart__row"
                    style={{ height: rowHeight }}
                    role="row"
                  >
                    <div
                      role="gridcell"
                      className={classNames("wim-gantt-chart__bar", {
                        "wim-gantt-chart__bar--clickable": !!onTaskClick,
                        "wim-gantt-chart__bar--focused": focusedIndex === index,
                      })}
                      style={{
                        left,
                        width,
                        height: rowHeight - 12,
                        top: 6,
                        backgroundColor: task.color ?? "var(--color-primary, #1976d2)",
                      }}
                      tabIndex={0}
                      aria-label={t("ganttchart_aria_task_bar", {
                        label: task.label,
                        start: startStr,
                        end: endStr,
                      })}
                      aria-selected={focusedIndex === index}
                      onClick={() => onTaskClick?.(task)}
                      onKeyDown={(e) => handleTaskKeyDown(e, task, index)}
                      onFocus={() => setFocusedIndex(index)}
                    >
                      {task.progress !== undefined && (
                        <div
                          className="wim-gantt-chart__progress"
                          style={{ width: `${Math.min(task.progress, 100)}%` }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
