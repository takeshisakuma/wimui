import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { GanttChart, GanttTask } from "@/components/charts/GanttChart/GanttChart";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof GanttChart> = {
  title: "Components/Data Structures/GanttChart",
  component: GanttChart,
};

export default meta;
type Story = StoryObj<typeof GanttChart>;

export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const tasks = [
      {
        id: "task-1",
        label: t("story.ganttchart_task_requirements"),
        startDate: new Date(2026, 2, 1),
        endDate: new Date(2026, 2, 5),
      },
      {
        id: "task-2",
        label: t("story.ganttchart_task_design"),
        startDate: new Date(2026, 2, 4),
        endDate: new Date(2026, 2, 10),
      },
      {
        id: "task-3",
        label: t("story.ganttchart_task_development"),
        startDate: new Date(2026, 2, 9),
        endDate: new Date(2026, 2, 20),
        progress: 60,
      },
      {
        id: "task-4",
        label: t("story.ganttchart_task_testing"),
        startDate: new Date(2026, 2, 18),
        endDate: new Date(2026, 2, 24),
      },
      {
        id: "task-5",
        label: t("story.ganttchart_task_release"),
        startDate: new Date(2026, 2, 25),
        endDate: new Date(2026, 2, 31),
      },
    ];

    return (
      <GanttChart
        tasks={tasks}
        startDate={new Date(2026, 2, 1)}
        endDate={new Date(2026, 2, 31)}
        viewMode="day"
      />
    );
  },
};

export const WeekView: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const tasks = [
      {
        id: "task-1",
        label: t("story.ganttchart_task_requirements"),
        startDate: new Date(2026, 2, 1),
        endDate: new Date(2026, 2, 14),
      },
      {
        id: "task-2",
        label: t("story.ganttchart_task_design"),
        startDate: new Date(2026, 2, 10),
        endDate: new Date(2026, 2, 28),
        progress: 30,
      },
      {
        id: "task-3",
        label: t("story.ganttchart_task_development"),
        startDate: new Date(2026, 2, 20),
        endDate: new Date(2026, 3, 15),
        progress: 10,
      },
      {
        id: "task-4",
        label: t("story.ganttchart_task_testing"),
        startDate: new Date(2026, 3, 10),
        endDate: new Date(2026, 3, 24),
      },
    ];

    return (
      <GanttChart
        tasks={tasks}
        startDate={new Date(2026, 2, 1)}
        endDate={new Date(2026, 3, 30)}
        viewMode="week"
      />
    );
  },
};

export const MonthView: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const tasks = [
      {
        id: "task-1",
        label: t("story.ganttchart_task_requirements"),
        startDate: new Date(2026, 0, 5),
        endDate: new Date(2026, 1, 10),
      },
      {
        id: "task-2",
        label: t("story.ganttchart_task_design"),
        startDate: new Date(2026, 1, 1),
        endDate: new Date(2026, 2, 20),
        progress: 70,
      },
      {
        id: "task-3",
        label: t("story.ganttchart_task_development"),
        startDate: new Date(2026, 2, 1),
        endDate: new Date(2026, 5, 30),
        progress: 20,
      },
      {
        id: "task-4",
        label: t("story.ganttchart_task_testing"),
        startDate: new Date(2026, 5, 1),
        endDate: new Date(2026, 7, 31),
      },
      {
        id: "task-5",
        label: t("story.ganttchart_task_release"),
        startDate: new Date(2026, 8, 1),
        endDate: new Date(2026, 8, 30),
      },
    ];

    return (
      <GanttChart
        tasks={tasks}
        startDate={new Date(2026, 0, 1)}
        endDate={new Date(2026, 9, 31)}
        viewMode="month"
      />
    );
  },
};

export const WithClickHandler: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const tasks = [
      {
        id: "task-1",
        label: t("story.ganttchart_task_design"),
        startDate: new Date(2026, 2, 1),
        endDate: new Date(2026, 2, 10),
        color: "var(--wim-color-primary)",
      },
      {
        id: "task-2",
        label: t("story.ganttchart_task_development"),
        startDate: new Date(2026, 2, 8),
        endDate: new Date(2026, 2, 20),
        color: "var(--wim-color-positive)",
        progress: 45,
      },
      {
        id: "task-3",
        label: t("story.ganttchart_task_testing"),
        startDate: new Date(2026, 2, 18),
        endDate: new Date(2026, 2, 28),
        color: "var(--wim-color-caution)",
      },
    ];

    return (
      <GanttChart
        tasks={tasks}
        startDate={new Date(2026, 2, 1)}
        endDate={new Date(2026, 2, 31)}
        viewMode="day"
        onTaskClick={(task: GanttTask) => alert(`Clicked: ${task.label}`)}
      />
    );
  },
};
