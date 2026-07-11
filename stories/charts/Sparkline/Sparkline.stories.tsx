import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sparkline } from "@/components/charts/Sparkline/Sparkline";

const TREND = [4, 6, 5, 8, 7, 10, 9, 12, 11, 14];
const VOLATILE = [8, 3, 9, 2, 7, 4, 10, 5, 8, 6];
const DECLINE = [14, 13, 15, 11, 12, 9, 10, 7, 8, 5];

const meta: Meta<typeof Sparkline> = {
  title: "Components/Visualization/Sparkline",
  component: Sparkline,
  parameters: {
    layout: "centered",
  },
  args: {
    data: TREND,
    type: "line",
    width: 120,
    height: 32,
  },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

export const Default: Story = {};

export const Types: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Sparkline {...args} type="line" />
      <Sparkline {...args} type="area" />
      <Sparkline {...args} type="bar" />
    </div>
  ),
};

export const WithLastDot: Story = {
  args: {
    type: "area",
    showLastDot: true,
    width: 160,
    height: 40,
  },
};

export const Trends: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Sparkline {...args} data={TREND} color="var(--wim-color-success)" showLastDot />
      <Sparkline {...args} data={DECLINE} color="var(--wim-color-danger)" showLastDot />
      <Sparkline {...args} data={VOLATILE} color="var(--wim-color-info)" />
    </div>
  ),
};

export const Inline: Story = {
  render: (args) => (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
      1,248
      <Sparkline {...args} data={TREND} width={80} height={20} color="var(--wim-color-success)" />
      +12%
    </span>
  ),
};
