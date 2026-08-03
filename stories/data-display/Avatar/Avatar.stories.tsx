import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Avatar } from "wimui";
import avatar1 from "@/media/avatar_1.svg";


const meta: Meta<typeof Avatar> = {
  title: "Components/Data Indicators/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "radio",
      options: ["circle", "rounded"],
    },
    intent: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "info", "neutral"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Avatar
        {...args}
        src={avatar1}
        alt={t("story.avatar_alt")}
      />
    );
  },
  args: {},
};

export const Initials: Story = {
  args: {
    initials: "JD",
    intent: "primary",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar {...args} size="sm" initials="SM" intent="neutral" />
      <Avatar {...args} size="md" initials="MD" intent="neutral" />
      <Avatar {...args} size="lg" initials="LG" intent="neutral" />
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} shape="circle" initials="C" intent="secondary" />
      <Avatar {...args} shape="rounded" initials="R" intent="secondary" />
    </div>
  ),
};

export const Fallback: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Avatar
        {...args}
        src="https://invalid-image-url.com"
        initials="FB"
        alt={t("story.avatar_alt")}
      />
    );
  },
  args: {},
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} initials="P" intent="primary" />
      <Avatar {...args} initials="S" intent="secondary" />
      <Avatar {...args} initials="N" intent="neutral" />
      <Avatar {...args} initials="E" intent="danger" />
      <Avatar {...args} initials="SU" intent="success" />
    </div>
  ),
};
