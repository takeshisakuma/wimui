import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Flex } from "wimui";


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

type BoxIntent = "primary" | "success" | "warning" | "danger" | "secondary";
const intentStyles: Record<BoxIntent, { bg: string; text: string }> = {
  primary:     { bg: "color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-bg-component))",     text: "color-mix(in srgb, var(--wim-color-primary) 60%, black)" },
  success:    { bg: "color-mix(in srgb, var(--wim-color-success) 12%, var(--wim-color-bg-component))",    text: "color-mix(in srgb, var(--wim-color-success) 60%, black)" },
  warning:     { bg: "color-mix(in srgb, var(--wim-color-warning) 12%, var(--wim-color-bg-component))",     text: "color-mix(in srgb, var(--wim-color-warning) 60%, black)" },
  danger: { bg: "color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-bg-component))", text: "color-mix(in srgb, var(--wim-color-danger) 60%, black)" },
  secondary:   { bg: "color-mix(in srgb, var(--wim-color-secondary) 12%, var(--wim-color-bg-component))",   text: "color-mix(in srgb, var(--wim-color-secondary) 60%, black)" },
};

const Box = ({
  children,
  intent = "primary",
}: {
  children: React.ReactNode;
  intent?: BoxIntent;
}) => (
  <div
    style={{
      backgroundColor: intentStyles[intent].bg,
      color: intentStyles[intent].text,
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Flex {...args}>
        <Box>{t("story.flex_item_1", "1")}</Box>
        <Box intent="success">{t("story.flex_item_2", "2")}</Box>
        <Box intent="warning">{t("story.flex_item_3", "3")}</Box>
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
        <Box>{t("story.flex_item_1", "Item 1")}</Box>
        <Box intent="success">{t("story.flex_item_2", "Item 2")}</Box>
        <Box intent="danger">{t("story.flex_item_3", "Item 3")}</Box>
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
        <Box>{t("story.flex_left")}</Box>
        <Box intent="secondary">{t("story.flex_middle")}</Box>
        <Box intent="secondary">{t("story.flex_right")}</Box>
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
        <Box>{t("story.flex_item_1", "1")}</Box>
        <Box intent="success">{t("story.flex_item_2", "2")}</Box>
        <Box intent="warning">{t("story.flex_item_3", "3")}</Box>
        <Box intent="danger">{t("story.flex_item_4", "4")}</Box>
        <Box intent="secondary">{t("story.flex_item_5", "5")}</Box>
      </Flex>
    );
  },
  args: {
    wrap: "wrap",
    gap: 16,
    style: { width: "200px", padding: "10px", border: "1px solid var(--wim-color-border)" },
  },
};
