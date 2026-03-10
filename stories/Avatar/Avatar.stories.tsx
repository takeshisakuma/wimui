import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@/components/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Data Indicators/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    shape: {
      control: "radio",
      options: ["circle", "rounded"],
    },
    status: {
      control: "select",
      options: ["primary", "secondary", "neutral", "error", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Avatar
        {...args}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120"
        alt={t("story_avatar_alt")}
      />
    );
  },
  args: {},
};

export const Initials: Story = {
  args: {
    initials: "JD",
    status: "primary",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar {...args} size="small" initials="SM" status="neutral" />
      <Avatar {...args} size="medium" initials="MD" status="neutral" />
      <Avatar {...args} size="large" initials="LG" status="neutral" />
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} shape="circle" initials="C" status="secondary" />
      <Avatar {...args} shape="rounded" initials="R" status="secondary" />
    </div>
  ),
};

export const Fallback: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Avatar
        {...args}
        src="https://invalid-image-url.com"
        initials="FB"
        alt={t("story_avatar_alt")}
      />
    );
  },
  args: {},
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} initials="P" status="primary" />
      <Avatar {...args} initials="S" status="secondary" />
      <Avatar {...args} initials="N" status="neutral" />
      <Avatar {...args} initials="E" status="error" />
      <Avatar {...args} initials="SU" status="success" />
    </div>
  ),
};
