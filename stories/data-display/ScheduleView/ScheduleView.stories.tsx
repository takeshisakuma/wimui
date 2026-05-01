import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScheduleView } from "@/components/data-display/ScheduleView/ScheduleView";
import type { ScheduleViewEvent } from "@/components/data-display/ScheduleView/ScheduleView";

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

const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

const sampleEvents: ScheduleViewEvent[] = [
  {
    id: "1",
    title: "Design Review",
    start: `${date}T10:00:00`,
    end: `${date}T11:00:00`,
    color: "#7c3aed",
  },
  {
    id: "2",
    title: "Team Standup",
    start: `${date}T09:00:00`,
    end: `${date}T09:30:00`,
    color: "#059669",
  },
  {
    id: "3",
    title: "Sprint Planning",
    start: `${date}T14:00:00`,
    end: `${date}T16:00:00`,
    color: "#d97706",
  },
];

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "100%", height: "600px", padding: "16px" }}>
      <ScheduleView {...args} events={sampleEvents} />
    </div>
  ),
  args: {
    initialView: "timeGridWeek",
    editable: true,
    selectable: true,
  },
};

export const DayView: Story = {
  render: (args) => (
    <div style={{ width: "100%", height: "600px", padding: "16px" }}>
      <ScheduleView {...args} events={sampleEvents} />
    </div>
  ),
  args: {
    initialView: "timeGridDay",
    editable: true,
    selectable: true,
  },
};

export const MonthView: Story = {
  render: (args) => (
    <div style={{ width: "100%", height: "600px", padding: "16px" }}>
      <ScheduleView {...args} events={sampleEvents} />
    </div>
  ),
  args: {
    initialView: "dayGridMonth",
    editable: false,
    selectable: false,
  },
};
