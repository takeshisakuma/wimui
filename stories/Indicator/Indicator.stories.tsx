import type { Meta, StoryObj } from "@storybook/react-vite";
import { Indicator } from "@/components/Indicator/Indicator";
import { Avatar } from "@/components/Avatar/Avatar";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Indicator> = {
  title: "Components/Data Indicators/Indicator",
  component: Indicator,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "success", "error", "warning", "neutral"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {
    children: <Avatar initials="JD" />,
    color: "success",
    position: "bottom-right",
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Indicator {...args} color="primary">
        <Avatar initials="P" />
      </Indicator>
      <Indicator {...args} color="success">
        <Avatar initials="S" />
      </Indicator>
      <Indicator {...args} color="warning">
        <Avatar initials="W" />
      </Indicator>
      <Indicator {...args} color="error">
        <Avatar initials="E" />
      </Indicator>
      <Indicator {...args} color="neutral">
        <Avatar initials="N" />
      </Indicator>
    </div>
  ),
};

export const Pulse: Story = {
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right",
  },
};

export const Inline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Indicator {...args} color="success" inline />
        <span>{t("story_indicator_online")}</span>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Indicator {...args} size="small" inline />
      <Indicator {...args} size="medium" inline />
      <Indicator {...args} size="large" inline />
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Indicator {...args} color="error">
        <div
          style={{ padding: "8px", background: "var(--wim-color-surface-variant)", borderRadius: "8px" }}
        >
          <Icon name="BellIcon" />
        </div>
      </Indicator>
    </div>
  ),
};
