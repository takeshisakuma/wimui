import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Masonry } from "@/components/Masonry/Masonry";
import { Box } from "@/components/Box/Box";

const meta: Meta<typeof Masonry> = {
  title: "Components/Layout/Masonry",
  component: Masonry,
  tags: [],
  argTypes: {
    columns: { control: { type: "number", min: 1, max: 10 } },
    spacing: { control: { type: "number" } },
  },
};

export default meta;
type Story = StoryObj<typeof Masonry>;

const heights = [150, 200, 100, 250, 180, 220, 120, 300, 140, 190];

export const Default: Story = {
  args: {
    columns: 3,
    spacing: 16,
    children: heights.map((height, index) => (
      <Box
        key={index}
        bg={`hsl(${index * 40}, 70%, 80%)`}
        radius={8}
        h={height}
        display="flex"
        style={{
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: `hsl(${index * 40}, 70%, 30%)`,
        }}
      >
        {index + 1}
      </Box>
    )),
  },
};

export const ManyColumns: Story = {
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10,
  },
};

export const LargeSpacing: Story = {
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40,
  },
};
