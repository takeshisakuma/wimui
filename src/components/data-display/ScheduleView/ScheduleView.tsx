import React, { useRef } from "react";
import classNames from "classnames";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type {
  EventInput,
  EventClickArg,
  EventDropArg,
  DateSelectArg,
  EventChangeArg,
} from "@fullcalendar/core";
import styles from "./schedule-view.module.scss";

export type ScheduleViewEvent = EventInput;

export type ScheduleViewView = "timeGridWeek" | "timeGridDay" | "dayGridMonth";

export interface ScheduleViewProps {
  /** List of calendar events */
  events?: ScheduleViewEvent[];
  /** Initial view mode */
  initialView?: ScheduleViewView;
  /** Whether events can be dragged to new times */
  editable?: boolean;
  /** Whether date ranges can be selected by clicking/dragging */
  selectable?: boolean;
  /** Called when an event is clicked */
  onEventClick?: (arg: EventClickArg) => void;
  /** Called when an event is dropped to a new time */
  onEventDrop?: (arg: EventDropArg) => void;
  /** Called when an event is resized */
  onEventChange?: (arg: EventChangeArg) => void;
  /** Called when a date/time range is selected */
  onDateSelect?: (arg: DateSelectArg) => void;
  /** First hour displayed in the time grid (e.g. "08:00:00") */
  slotMinTime?: string;
  /** Last hour displayed in the time grid (e.g. "20:00:00") */
  slotMaxTime?: string;
  /** Duration of each time slot, e.g. "00:30:00" */
  slotDuration?: string;
  /** Locale string, e.g. "ja", "pt" */
  locale?: string;
  /** Additional CSS class */
  className?: string;
  /** Accessible label for the schedule region */
  "aria-label"?: string;
}

/**
 * ScheduleView renders a time-grid calendar (week/day/month) powered by FullCalendar.
 *
 * Composition Contract:
 * - Managed by: App consumption; FullCalendar manages its own DOM
 * - Scroll lock: No
 */
export const ScheduleView = React.forwardRef<HTMLDivElement, ScheduleViewProps>(
  (
    {
      events = [],
      initialView = "timeGridWeek",
      editable = true,
      selectable = true,
      onEventClick,
      onEventDrop,
      onEventChange,
      onDateSelect,
      slotMinTime = "08:00:00",
      slotMaxTime = "20:00:00",
      slotDuration = "00:30:00",
      locale = "en",
      className,
      "aria-label": ariaLabel = "Schedule",
      ...props
    },
    ref
  ) => {
    const calendarRef = useRef<FullCalendar>(null);

    return (
      <div
        ref={ref}
        className={classNames(styles.root, className)}
        role="region"
        aria-label={ariaLabel}
        {...props}
      >
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView={initialView}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          editable={editable}
          selectable={selectable}
          selectMirror
          dayMaxEvents
          weekends
          slotMinTime={slotMinTime}
          slotMaxTime={slotMaxTime}
          slotDuration={slotDuration}
          locale={locale}
          eventClick={onEventClick}
          eventDrop={onEventDrop}
          eventChange={onEventChange}
          select={onDateSelect}
          height="100%"
        />
      </div>
    );
  }
);

ScheduleView.displayName = "ScheduleView";
