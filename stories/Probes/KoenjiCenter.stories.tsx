import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import { Button, ButtonGroup, Chip, RangeCalendar, Text } from "wimui";
import {
  ScheduleView,
  type ScheduleViewEvent,
} from "@/components/data-display/ScheduleView/ScheduleView";
import styles from "./probe.module.scss";

/**
 * T180 の 8 本目のプローブ。高円寺区民センターの部屋予約。
 * `ButtonGroup`（和室 / 集会室 / 調理実習室）/ `Chip`（部屋の設備）/
 * `ScheduleView`（今日の掲示）/ `RangeCalendar`（連続利用。終わりは未選択）。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/KoenjiCenter",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:koenji.${k}`;

type Room = "tatami" | "hall" | "kitchen";

const ROOMS: Room[] = ["tatami", "hall", "kitchen"];

const ROOM_CHIPS: Record<Room, string[]> = {
  tatami: ["tatami_mat", "fits12"],
  hall: ["projector", "tables", "fits24"],
  kitchen: ["gas"],
};

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isoDate(d: Date) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function eventsFor(
  room: Room,
  day: Date,
  t: (key: string) => string,
): ScheduleViewEvent[] {
  const date = isoDate(day);
  if (room === "tatami") {
    return [
      {
        id: "t1",
        title: t(ns("e_tea")),
        start: `${date}T10:00:00`,
        end: `${date}T12:00:00`,
      },
    ];
  }
  if (room === "kitchen") {
    return [
      {
        id: "k1",
        title: t(ns("e_cook")),
        start: `${date}T13:00:00`,
        end: `${date}T16:00:00`,
      },
    ];
  }
  return [
    {
      id: "h1",
      title: t(ns("e_circle")),
      start: `${date}T09:00:00`,
      end: `${date}T10:00:00`,
    },
    {
      id: "h2",
      title: t(ns("e_japanese")),
      start: `${date}T10:00:00`,
      end: `${date}T12:00:00`,
    },
    {
      id: "h3",
      title: t(ns("e_disaster")),
      start: `${date}T14:00:00`,
      end: `${date}T17:00:00`,
    },
  ];
}

export const Lockup: Story = {
  render: function Render() {
    const { t, i18n } = useTranslation(ALL_NAMESPACES);
    const today = React.useMemo(() => startOfDay(new Date()), []);
    const [room, setRoom] = React.useState<Room>("hall");
    const [range, setRange] = React.useState<[Date | null, Date | null]>([
      today,
      null,
    ]);

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("center"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("line"))}
            </Text>
          </div>
          <div role="group" aria-label={t(ns("rooms"))}>
            <ButtonGroup joined>
              {ROOMS.map((id) => (
                <Button
                  key={id}
                  size="md"
                  variant={room === id ? "solid" : "outline"}
                  aria-pressed={room === id}
                  onClick={() => setRoom(id)}
                >
                  {t(ns(id))}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <div className={styles.facts}>
            {ROOM_CHIPS[room].map((key) => (
              <Chip key={key} intent="neutral" variant="outline" size="sm">
                {t(ns(key))}
              </Chip>
            ))}
          </div>
          <div className={styles.board}>
            <ScheduleView
              events={eventsFor(room, today, t)}
              initialView="timeGridDay"
              editable={false}
              selectable={false}
              locale={i18n.language}
              slotMinTime="09:00:00"
              slotMaxTime="21:00:00"
              aria-label={t(ns("board"))}
            />
          </div>
          <div className={styles.dates}>
            <Text size="sm" color="secondary">
              {t(ns("dates"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("dates_line"))}
            </Text>
            <RangeCalendar
              value={range}
              onChange={setRange}
              minDate={today}
              weekStartsOn={1}
              isDateDisabled={(d) => d.getDay() === 1}
            />
          </div>
        </div>
      </div>
    );
  },
};
