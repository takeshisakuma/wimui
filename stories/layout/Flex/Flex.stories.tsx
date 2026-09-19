import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Flex } from "wimui";
import { DemoCell } from "../_helpers/DemoCell";


const meta: Meta<typeof Flex> = {
  title: "Components/Layout/Flex",
  component: Flex,
  tags: [],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: [
        "start",
        "center",
        "end",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    gap: { control: "text" },
    inline: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Flex {...args}>
        <DemoCell intent="primary" style={{ minWidth: 60 }}>{t("story.flex_item_1", "Unassigned")}</DemoCell>
        <DemoCell intent="success" style={{ minWidth: 60 }}>{t("story.flex_item_2", "In review")}</DemoCell>
        <DemoCell intent="warning" style={{ minWidth: 60 }}>{t("story.flex_item_3", "Blocked")}</DemoCell>
      </Flex>
    );
  },
  args: {
    direction: "row",
    gap: 16,
  },
};

export const Column: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Flex {...args}>
        <DemoCell intent="primary">{t("story.flex_item_1", "Unassigned")}</DemoCell>
        <DemoCell intent="success">{t("story.flex_item_2", "In review")}</DemoCell>
        <DemoCell intent="danger">{t("story.flex_item_3", "Blocked")}</DemoCell>
      </Flex>
    );
  },
  args: {
    direction: "column",
    gap: "1rem",
  },
};

export const JustifyBetween: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Flex {...args}>
        <DemoCell intent="primary">{t("story.flex_left")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_middle")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_right")}</DemoCell>
      </Flex>
    );
  },
  args: {
    justify: "between",
    gap: 16,
    style: { width: "100%", border: "1px solid var(--wim-color-border)", padding: "10px" },
  },
};

export const Wrapped: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Flex {...args}>
        <DemoCell intent="primary">{t("story.flex_item_1", "Unassigned")}</DemoCell>
        <DemoCell intent="success">{t("story.flex_item_2", "In review")}</DemoCell>
        <DemoCell intent="warning">{t("story.flex_item_3", "Blocked")}</DemoCell>
        <DemoCell intent="danger">{t("story.flex_item_4", "Shipped")}</DemoCell>
        <DemoCell intent="neutral">{t("story.flex_item_5", "Archived")}</DemoCell>
      </Flex>
    );
  },
  args: {
    wrap: "wrap",
    gap: 16,
    style: { width: "200px", padding: "10px", border: "1px solid var(--wim-color-border)" },
  },
};
