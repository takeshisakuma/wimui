import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Group } from "wimui";


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
        <Button variant="solid">{t("story.group_first", "First")}</Button>
        <Button variant="outline">{t("story.group_second", "Second")}</Button>
        <Button variant="ghost">{t("story.group_third", "Third")}</Button>
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
        <Button variant="solid">{t("story.group_first", "First")}</Button>
        <Button variant="outline">{t("story.group_second", "Second")}</Button>
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
          style={{ height: "40px", width: "40px", backgroundColor: "color-mix(in srgb, var(--wim-color-primary) 12%, white)" }}
        />
        <div
          style={{ height: "80px", width: "40px", backgroundColor: "color-mix(in srgb, var(--wim-color-positive) 12%, white)" }}
        />
        <div
          style={{ height: "60px", width: "40px", backgroundColor: "color-mix(in srgb, var(--wim-color-destructive) 12%, white)" }}
        />
      </>
    ),
    gap: 16,
  },
};
