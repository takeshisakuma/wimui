import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  ScheduleView,
  type ScheduleViewEvent,
  type EventClickArg,
  type DateSelectArg,
  type EventChangeArg,
  type EventApi,
} from "@/components/data-display/ScheduleView/ScheduleView";

const meta: Meta<typeof ScheduleView> = {
  title: "Components/Visualization/ScheduleView",
  component: ScheduleView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    initialView: {
      control: "radio",
      options: ["timeGridWeek", "timeGridDay", "dayGridMonth"],
    },
    editable: { control: "boolean" },
    selectable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ScheduleView>;

const useSampleEvents = (): ScheduleViewEvent[] => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

  return [
    {
      id: "1",
      title: t("story.schedule_event_design"),
      start: `${date}T10:00:00`,
      end: `${date}T11:00:00`,
      color: "#7c3aed",
    },
    {
      id: "2",
      title: t("story.schedule_event_standup"),
      start: `${date}T09:00:00`,
      end: `${date}T09:30:00`,
      // 白文字イベントの背景は AA 4.5:1 を満たす濃さにする
      color: "#047857",
    },
    {
      id: "3",
      title: t("story.schedule_event_sprint"),
      start: `${date}T14:00:00`,
      end: `${date}T16:00:00`,
      color: "#92400e",
    },
  ];
};

import Dialog from "@/components/overlay/Dialog/Dialog";
import { Input } from "@/components/form/Input/Input";
import { Button } from "@/components/form/Button/Button";

const ScheduleTemplate = (args: React.ComponentProps<typeof ScheduleView>) => {
  const sampleEvents = useSampleEvents();
  const [events, setEvents] = React.useState<ScheduleViewEvent[]>(sampleEvents);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [draftEvent, setDraftEvent] = React.useState<{ start: string; end: string; allDay: boolean } | null>(null);
  const [eventToDelete, setEventToDelete] = React.useState<EventApi | null>(null);
  
  const { t, i18n } = useTranslation(ALL_NAMESPACES);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    setDraftEvent({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    setNewTitle("");
    setIsDialogOpen(true);
  };

  const handleConfirmAdd = () => {
    if (draftEvent) {
      const newEvent: ScheduleViewEvent = {
        id: String(Date.now()),
        title: newTitle.trim() || t("common:new"),
        start: draftEvent.start,
        end: draftEvent.end,
        allDay: draftEvent.allDay,
        color: "#3b82f6",
      };
      setEvents((prev) => [...prev, newEvent]);
      setIsDialogOpen(false);
      setDraftEvent(null);
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setEventToDelete(clickInfo.event);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (eventToDelete) {
      eventToDelete.remove();
      setEvents((prev) => prev.filter((e) => e.id !== eventToDelete.id));
      setIsDeleteDialogOpen(false);
      setEventToDelete(null);
    }
  };

  const handleEventChange = (changeInfo: EventChangeArg) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === changeInfo.event.id
          ? {
              ...e,
              start: changeInfo.event.startStr,
              end: changeInfo.event.endStr,
              allDay: changeInfo.event.allDay,
            }
          : e
      )
    );
  };

  return (
    <div style={{ width: "100%", height: "600px", padding: "16px" }}>
      <ScheduleView
        {...args}
        events={events}
        locale={i18n.language}
        onDateSelect={handleDateSelect}
        onEventClick={handleEventClick}
        onEventChange={handleEventChange}
        onEventDrop={handleEventChange}
      />

      {/* Add Event Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Content style={{ width: "min(320px, 90vw)" }}>
          <Dialog.Header>
            <Dialog.Title>{t("common:action.add")}</Dialog.Title>
          </Dialog.Header>
          <div style={{ padding: "16px 0" }}>
            <Input
              label={t("common:common.title")}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder={t("story.schedule_event_placeholder")}
              autoFocus
              fullWidth
            />
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="ghost">{t("common:action.cancel")}</Button>
            </Dialog.Close>
            <Button onClick={handleConfirmAdd} variant="solid">
              {t("common:action.add")}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <Dialog.Content style={{ width: "min(320px, 90vw)" }}>
          <Dialog.Header>
            <Dialog.Title>{t("common:action.delete")}</Dialog.Title>
            <Dialog.Description>
              <strong>{eventToDelete?.title}</strong>
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="ghost">{t("common:action.cancel")}</Button>
            </Dialog.Close>
            <Button onClick={handleConfirmDelete} variant="solid" intent="danger">
              {t("common:action.delete")}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </div>
  );
};

export const Default: Story = {
  render: ScheduleTemplate,
  args: {
    initialView: "timeGridWeek",
    editable: true,
    selectable: true,
  },
};

export const DayView: Story = {
  render: ScheduleTemplate,
  args: {
    initialView: "timeGridDay",
    editable: true,
    selectable: true,
  },
};

export const MonthView: Story = {
  render: ScheduleTemplate,
  args: {
    initialView: "dayGridMonth",
    editable: true,
    selectable: true,
  },
};

export const Interactive: Story = {
  render: ScheduleTemplate,
  args: {
    initialView: "timeGridWeek",
    editable: true,
    selectable: true,
  },
};

/** T189: 親に px の高さを渡さない。流れに置く既定経路。 */
export const InFlow: Story = {
  render: function Render(args) {
    const events = useSampleEvents();
    const { i18n } = useTranslation(ALL_NAMESPACES);
    return (
      <ScheduleView
        {...args}
        events={events}
        locale={i18n.language}
      />
    );
  },
  args: {
    initialView: "timeGridDay",
    editable: false,
    selectable: false,
  },
};
