import React, { useMemo } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Tooltip, TooltipTrigger, TooltipContent } from "../../overlay/Tooltip/Tooltip";
import styles from "./calendar-heatmap.module.scss";

export type CalendarHeatmapData = {
  date: string; // YYYY-MM-DD
  count: number;
};

export type CalendarHeatmapProps = {
  /**
   * Activity data array.
   */
  data: CalendarHeatmapData[];
  /**
   * The year to display.
   * @default current year
   */
  year?: number;
  /**
   * Function to map count to a level (0-4).
   */
  getColorLevel?: (count: number) => 0 | 1 | 2 | 3 | 4;
  /**
   * Custom class name for the root element.
   */
  className?: string;
  /**
   * Custom tooltip formatter.
   */
  tooltipFormatter?: (date: string, count: number) => React.ReactNode;
  /**
   * Whether to render as a child component.
   */
  asChild?: boolean;
  /**
   * Content to render inside.
   */
  children?: React.ReactNode;
};

/**
 * CalendarHeatmap component (GitHub-style contribution graph).
 * Visualizes activity levels over a year.
 */
export const CalendarHeatmap = React.forwardRef<HTMLDivElement, CalendarHeatmapProps>(
  (
    {
      data = [],
      year = new Date().getFullYear(),
      getColorLevel = (count) => {
        if (count === 0) return 0;
        if (count < 3) return 1;
        if (count < 6) return 2;
        if (count < 9) return 3;
        return 4;
      },
      className,
      tooltipFormatter,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const Component = asChild ? Slot : "div";
    const dataMap = useMemo(() => {
      const map = new Map<string, number>();
      data.forEach((d) => map.set(d.date, d.count));
      return map;
    }, [data]);

    const weeks = useMemo(() => {
      const result: { date: string; count: number; level: number }[][] = [];
      const startDate = new Date(year, 0, 1);
      
      // Start from the beginning of the week (Sunday)
      const current = new Date(startDate);
      current.setDate(current.getDate() - current.getDay());

      for (let w = 0; w < 53; w++) {
        const week: { date: string; count: number; level: number }[] = [];
        for (let d = 0; d < 7; d++) {
          const dateStr = current.toISOString().split("T")[0];
          const count = dataMap.get(dateStr) || 0;
          week.push({
            date: dateStr,
            count,
            level: getColorLevel(count),
          });
          current.setDate(current.getDate() + 1);
        }
        result.push(week);
        
        // Stop if we've moved to the next year significantly
        if (current.getFullYear() > year && current.getMonth() > 0) break;
      }
      return result;
    }, [year, dataMap, getColorLevel]);

    const dayLabels = [
      t("sun"),
      t("mon"),
      t("tue"),
      t("wed"),
      t("thu"),
      t("fri"),
      t("sat")
    ];

    return (
      <Component className={classNames("wim-calendar-heatmap", styles.root, className)} ref={ref} {...props}>
        <Slottable>{children}</Slottable>
        <div className={styles.internalWrapper}>
          <div className={styles.grid} role="grid" aria-readonly="true">
            <div className={styles.labels}>
              {dayLabels.map((day, i) => (
                <span key={i}>
                  {day}
                </span>
              ))}
            </div>
            {weeks.map((week, i) => (
              <div key={i} className={styles.week} role="row">
                {week.map((day) => {
                  const content = tooltipFormatter 
                    ? tooltipFormatter(day.date, day.count)
                    : `${day.date}: ${day.count} activities`;
                    
                  return (
                    <Tooltip key={day.date}>
                      <TooltipTrigger asChild>
                        <div
                          className={classNames(styles.cell, styles[`level${day.level}`])}
                          data-date={day.date}
                          data-count={day.count}
                          role="gridcell"
                          aria-label={`${day.count} activities on ${day.date}`}
                          aria-selected={false}
                        />
                      </TooltipTrigger>
                      <TooltipContent>{content}</TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <span>{t("calendar_heatmap.less")}</span>
          <div className={styles.legend}>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={classNames(styles.cell, styles[`level${level}`])} />
            ))}
          </div>
          <span>{t("calendar_heatmap.more")}</span>
        </div>
      </Component>
    );
  },
);

CalendarHeatmap.displayName = "CalendarHeatmap";

