import type { Meta, StoryObj } from "@storybook/react-vite";
import { Group } from "@/components/Group/Group";
import { Button } from "@/components/Button/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Group> = {
  title: "Components/Layout/Group",
  component: Group,
  tags: [],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    gap: { control: "text" },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    grow: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Group {...args}>
        <Button label={t("story.group_first", "First")} variant="filled" />
        <Button label={t("story.group_second", "Second")} variant="outlined" />
        <Button label={t("story.group_third", "Third")} variant="ghost" />
      </Group>
    );
  },
  args: {
    gap: 16,
  },
};

export const Grow: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Group {...args}>
        <Button label={t("story.group_first", "First")} variant="filled" />
        <Button label={t("story.group_second", "Second")} variant="outlined" />
      </Group>
    );
  },
  args: {
    grow: true,
    gap: 16,
  },
};

export const AlignEnd: Story = {
  args: {
    align: "end",
    children: (
      <>
        <div
          style={{ height: "40px", width: "40px", backgroundColor: "#3b82f6" }}
        />
        <div
          style={{ height: "80px", width: "40px", backgroundColor: "#10b981" }}
        />
        <div
          style={{ height: "60px", width: "40px", backgroundColor: "#ef4444" }}
        />
      </>
    ),
    gap: 16,
  },
};
