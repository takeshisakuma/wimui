import { default as React } from '../../../../node_modules/react';
import { EventInput, EventClickArg, EventDropArg, DateSelectArg, EventChangeArg, EventApi } from '@fullcalendar/core';
export type { EventInput, EventClickArg, EventDropArg, DateSelectArg, EventChangeArg, EventApi, };
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
    /** Whether clicking elsewhere on the page will clear the current selection */
    unselectAuto?: boolean;
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
export declare const ScheduleView: React.ForwardRefExoticComponent<ScheduleViewProps & React.RefAttributes<HTMLDivElement>>;
