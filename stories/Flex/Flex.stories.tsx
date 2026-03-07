import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "@/components/Flex/Flex";
import React from "react";
import { useTranslation } from "react-i18next";

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

const Box = ({
  children,
  color = "#3b82f6",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      backgroundColor: color,
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      minWidth: "60px",
    }}
  >
    {children}
  </div>
);

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Flex {...args}>
        <Box>{t("story_flex_item_1", "1")}</Box>
        <Box color="#10b981">{t("story_flex_item_2", "2")}</Box>
        <Box color="#f59e0b">{t("story_flex_item_3", "3")}</Box>
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
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Flex {...args}>
        <Box>{t("story_flex_item_1", "Item 1")}</Box>
        <Box color="#10b981">{t("story_flex_item_2", "Item 2")}</Box>
        <Box color="#ef4444">{t("story_flex_item_3", "Item 3")}</Box>
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
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Flex {...args}>
        <Box>{t("story_flex_left")}</Box>
        <Box color="#8b5cf6">{t("story_flex_middle")}</Box>
        <Box color="#ec4899">{t("story_flex_right")}</Box>
      </Flex>
    );
  },
  args: {
    justify: "between",
    gap: 16,
    style: { width: "100%", border: "1px solid #ddd", padding: "10px" },
  },
};

export const Wrapped: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Flex {...args}>
        <Box>{t("story_flex_item_1", "1")}</Box>
        <Box color="#10b981">{t("story_flex_item_2", "2")}</Box>
        <Box color="#f59e0b">{t("story_flex_item_3", "3")}</Box>
        <Box color="#ef4444">{t("story_flex_item_4", "4")}</Box>
        <Box color="#8b5cf6">{t("story_flex_item_5", "5")}</Box>
      </Flex>
    );
  },
  args: {
    wrap: "wrap",
    gap: 16,
    style: { width: "200px", padding: "10px", border: "1px solid #ccc" },
  },
};
