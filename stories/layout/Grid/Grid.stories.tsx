import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Grid } from "wimui";


const meta: Meta<typeof Grid> = {
  title: "Components/Layout/Grid",
  component: Grid,
  tags: [],
  argTypes: {
    cols: { control: "object" },
    rows: { control: "text" },
    gap: { control: "text" },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "stretch"],
    },
    flow: {
      control: "select",
      options: ["row", "column", "dense", "row dense", "column dense"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

type BoxIntent = "primary" | "success" | "warning" | "danger" | "secondary" | "info";
const intentStyles: Record<BoxIntent, { bg: string; text: string }> = {
  primary:     { bg: "color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))",     text: "color-mix(in srgb, var(--wim-color-primary) 60%, black)" },
  success:    { bg: "color-mix(in srgb, var(--wim-color-success) 12%, var(--wim-color-surface))",    text: "color-mix(in srgb, var(--wim-color-success) 60%, black)" },
  warning:     { bg: "color-mix(in srgb, var(--wim-color-warning) 12%, var(--wim-color-surface))",     text: "color-mix(in srgb, var(--wim-color-warning) 60%, black)" },
  danger: { bg: "color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-surface))", text: "color-mix(in srgb, var(--wim-color-danger) 60%, black)" },
  secondary:   { bg: "color-mix(in srgb, var(--wim-color-secondary) 12%, var(--wim-color-surface))",   text: "color-mix(in srgb, var(--wim-color-secondary) 60%, black)" },
  info: { bg: "color-mix(in srgb, var(--wim-color-info) 12%, var(--wim-color-surface))", text: "color-mix(in srgb, var(--wim-color-info) 60%, black)" },
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
    }}
  >
    {children}
  </div>
);

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Grid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box intent="success">{t("story.grid_item", "2")}</Box>
        <Box intent="warning">{t("story.grid_item", "3")}</Box>
        <Box intent="danger">{t("story.grid_item", "4")}</Box>
        <Box intent="secondary">{t("story.grid_item", "5")}</Box>
        <Box intent="info">{t("story.grid_item", "6")}</Box>
      </Grid>
    );
  },
  args: {
    cols: 3,
    gap: 16,
  },
};

export const CustomColumns: Story = {
  render: function Render(args) {
    return (
      <Grid {...args}>
        <Box>1fr</Box>
        <Box intent="success">2fr</Box>
        <Box intent="warning">1fr</Box>
      </Grid>
    );
  },
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem",
  },
};

export const Responsive: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const intents: BoxIntent[] = ["primary", "success", "warning", "danger", "secondary", "info", "secondary", "success"];
    return (
      <Grid {...args}>
        {intents.map((intent, i) => (
          <Box key={i} intent={intent}>{t("story.grid_item", String(i + 1))}</Box>
        ))}
      </Grid>
    );
  },
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4 },
    gap: 16,
  },
};
