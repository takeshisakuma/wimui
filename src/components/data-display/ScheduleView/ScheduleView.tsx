import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import FullCalendar from "@fullcalendar/react";
import { useMergedRef } from "../../../hooks/useMergedRef";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type {
  EventInput,
  EventClickArg,
  EventDropArg,
  DateSelectArg,
  EventChangeArg,
  EventApi,
} from "@fullcalendar/core";

export type {
  EventInput,
  EventClickArg,
  EventDropArg,
  DateSelectArg,
  EventChangeArg,
  EventApi,
};
// 本ライブラリの対応言語（en / ja / pt-BR）のロケールのみ登録する。en は FullCalendar
// のビルトイン既定のため import 不要。全ロケール（@fullcalendar/core/locales-all は
// ~100 言語で gzip 約 28KB）は同梱しない。
import jaLocale from "@fullcalendar/core/locales/ja";
import ptLocale from "@fullcalendar/core/locales/pt";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import styles from "./schedule-view.module.scss";

const locales = [jaLocale, ptLocale, ptBrLocale];

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

const PLUGINS = [timeGridPlugin, dayGridPlugin, interactionPlugin];
const HEADER_TOOLBAR = {
  // i18n-ignore-next-line FullCalendar のツールバー指定（ボタン名の列挙）であって UI テキストではない
  left: "prev,next today",
  center: "title",
  right: "dayGridMonth,timeGridWeek,timeGridDay",
};

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
      unselectAuto = true,
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
    const rootRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRef(ref, rootRef);

    // FullCalendar 内部 DOM の axe 違反を補正する:
    // - ボタン内の .fc-icon は role="img" だが代替テキストが無い（ボタン側に
    //   aria-label があるため装飾として隠すのが正しい）→ aria-hidden
    // - 「+N more」リンクは href 無し <a> に aria-expanded が付き
    //   aria-allowed-attr 違反 → role="button" を付与
    // - 時刻グリッドの .fc-scroller は overflow: scroll なのに tabindex が無い
    //   → scrollable-region-focusable（T189。親が短いと格子が内側スクロールする）
    // ビュー切替やイベント再描画で再生成されるため MutationObserver で追従する。
    useEffect(() => {
      const root = rootRef.current;
      if (!root) return;
      const patch = () => {
        root
          .querySelectorAll('.fc-icon[role="img"]:not([aria-hidden])')
          .forEach((el) => el.setAttribute("aria-hidden", "true"));
        root
          .querySelectorAll("a.fc-more-link:not([role])")
          .forEach((el) => el.setAttribute("role", "button"));
        root.querySelectorAll(".fc-scroller").forEach((el) => {
          const node = el as HTMLElement;
          const overflows =
            node.scrollHeight > node.clientHeight + 1 ||
            node.scrollWidth > node.clientWidth + 1;
          if (overflows) {
            node.setAttribute("tabindex", "0");
          } else if (node.getAttribute("tabindex") === "0") {
            node.removeAttribute("tabindex");
          }
        });
      };
      patch();
      const observer = new MutationObserver(patch);
      observer.observe(root, { childList: true, subtree: true });
      const ro = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(patch);
      ro?.observe(root);
      return () => {
        observer.disconnect();
        ro?.disconnect();
      };
    }, []);

    return (
      <div
        ref={mergedRef}
        className={classNames("wim-schedule-view", styles.root, className)}
        role="region"
        aria-label={ariaLabel}
        {...props}
      >
        <FullCalendar
          ref={calendarRef}
          plugins={PLUGINS}
          initialView={initialView}
          headerToolbar={HEADER_TOOLBAR}
          events={events}
          editable={editable}
          selectable={selectable}
          selectMirror
          unselectAuto={unselectAuto}
          dayMaxEvents
          weekends
          slotMinTime={slotMinTime}
          slotMaxTime={slotMaxTime}
          slotDuration={slotDuration}
          locale={locale}
          locales={locales}
          eventColor="var(--wim-color-primary)"
          eventTextColor="var(--wim-color-text-on-primary)"
          eventClick={onEventClick}
          eventDrop={onEventDrop}
          eventChange={onEventChange}
          select={onDateSelect}
          // 親が auto のとき height 100% は 0 になり、格子もイベントも描かれない。
          // catalog は 600px の style で隠していた。min-height は wrapper にしか効かない（T189）。
          height="auto"
        />
      </div>
    );
  }
);

ScheduleView.displayName = "ScheduleView";
