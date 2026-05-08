import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AgentStatus, AgentStatusValue } from "@/components/ai/AgentStatus/AgentStatus";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof AgentStatus> = {
  title: "Components/AI/AgentStatus",
  component: AgentStatus,
  parameters: {
    layout: "padded",
  },
  args: {
    status: "thinking",
    showLabel: true,
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof AgentStatus>;

export const Default: Story = {};

export const AllStatuses: Story = {
  render: () => {
    const statuses: AgentStatusValue[] = ["idle", "thinking", "running", "waiting", "done", "error"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {statuses.map((s) => (
          <AgentStatus key={s} status={s} />
        ))}
      </div>
    );
  },
};

export const WithCustomMessage: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <AgentStatus status="thinking" message={t("story.agent_status_thinking_msg")} />
        <AgentStatus status="running" message={t("story.agent_status_running_msg")} />
        <AgentStatus status="waiting" message={t("story.agent_status_waiting_msg")} />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <AgentStatus status="running" size="sm" />
      <AgentStatus status="running" size="md" />
      <AgentStatus status="running" size="lg" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    status: "thinking",
  },
};

const CYCLE_SEQUENCE: AgentStatusValue[] = ["idle", "thinking", "running", "waiting", "done"];

export const Cycling: Story = {
  render: () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % CYCLE_SEQUENCE.length);
      }, 1800);
      return () => clearInterval(id);
    }, []);

    return <AgentStatus status={CYCLE_SEQUENCE[index]} />;
  },
};

export const ErrorState: Story = {
  args: {
    status: "error",
  },
};

export const DoneState: Story = {
  args: {
    status: "done",
  },
};
