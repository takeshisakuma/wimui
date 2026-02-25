import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components/Box/Box";

const meta: Meta<typeof Box> = {
  title: "Components/Layout/Box",
  component: Box,
  tags: [],
  argTypes: {
    as: { control: "text" },
    bg: { control: "color" },
    display: { control: "text" },
    position: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "This is a Box",
    bg: "#f0f0f0",
    p: 20,
    radius: 8,
  },
};

export const WithCustomShadow: Story = {
  args: {
    children: "Box with Shadow",
    bg: "white",
    p: 40,
    radius: 12,
    shadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    children: "Box as Button",
    bg: "#eff6ff",
    color: "#1d4ed8",
    p: "10px 20px",
    radius: 6,
    style: { border: "1px solid #bfdbfe", cursor: "pointer", fontWeight: 600 },
  },
};

export const Spacing: Story = {
  render: () => (
    <Box bg="#f8fafc" p={20} radius={8} style={{ border: "1px solid #e2e8f0" }}>
      <Box
        bg="#eff6ff"
        p={15}
        mb={15}
        color="#1d4ed8"
        radius={4}
        style={{ border: "1px solid #bfdbfe" }}
      >
        Margin Bottom 15
      </Box>
      <Box
        bg="#f0fdf4"
        p={15}
        color="#15803d"
        radius={4}
        style={{ border: "1px solid #bbf7d0" }}
      >
        Box 2
      </Box>
    </Box>
  ),
};

export const PaddingProps: Story = {
  args: {
    children: "Box with px and py",
    bg: "#fdf2f8",
    color: "#be185d",
    px: 40, // 左右パディング
    py: 10, // 上下パディング
    radius: 8,
    style: { border: "1px solid #fbcfe8", display: "inline-block" },
  },
};
