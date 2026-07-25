import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Masonry } from "wimui";
import { DemoCell, demoCellIntent } from "../_helpers/DemoCell";

const meta: Meta<typeof Masonry> = {
  title: "Components/Layout/Masonry",
  component: Masonry,
  tags: [],
  argTypes: {
    columns: { control: { type: "number", min: 1, max: 10 } },
    spacing: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Masonry>;

const heights = [150, 200, 100, 250, 180, 220, 120, 300, 140, 190];

const MasonryDemo = (args: Parameters<typeof Masonry>[0]) => {
  return (
    <Masonry {...args}>
      {heights.map((height, index) => (
        <DemoCell
          key={index}
          intent={demoCellIntent(index)}
          h={height}
          style={{ fontSize: "var(--wim-font-size-2xl)" }}
        >
          {index + 1}
        </DemoCell>
      ))}
    </Masonry>
  );
};

export const Default: Story = {
  render: (args) => <MasonryDemo {...args} />,
  args: {
    columns: 3,
    spacing: 16,
  },
};

export const ManyColumns: Story = {
  render: (args) => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10,
  },
};

export const LargeSpacing: Story = {
  render: (args) => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40,
  },
};
