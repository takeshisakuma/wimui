import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@/components/Switch/Switch";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Switch> = {
  title: "Components/Selection Controls/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: "radio",
      options: ["small", "medium"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_notif")} />;
  },
};

export const Checked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_wifi")} />;
  },
  args: {
    defaultChecked: true,
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_airplane")} />;
  },
  args: {
    size: "small",
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Switch {...args} label={t("story_switch_bluetooth")} />;
  },
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Switch
        {...args}
        label={t("story_switch_bluetooth")}
      />
    );
  },
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const NoLabel: Story = {
  render: function Render(args) {
    return <Switch {...args} aria-label="Toggle" />;
  },
};
