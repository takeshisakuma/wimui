import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from "@/components/Marquee/Marquee";
import { Badge } from "@/components/Badge/Badge";
import { Group } from "@/components/Group/Group";

const meta: Meta<typeof Marquee> = {
  title: "Components/Utilities/Marquee",
  component: Marquee,
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  args: {
    children: (
      <Group gap="xl">
        <Badge color="primary">New Feature</Badge>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Welcome to wimui! This is a flexible marquee component.
        </span>
        <Badge color="secondary">Update</Badge>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Check out our latest components.
        </span>
      </Group>
    ),
  },
};

export const Fast: Story = {
  args: {
    ...Default.args,
    duration: 5,
  },
};

export const Slow: Story = {
  args: {
    ...Default.args,
    duration: 40,
  },
};

export const Reverse: Story = {
  args: {
    ...Default.args,
    reverse: true,
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div style={{ height: "200px", border: "1px solid #ccc" }}>
      <Marquee {...args} vertical duration={5}>
        <div
          style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
        >
          Item 1
        </div>
        <div
          style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
        >
          Item 2
        </div>
        <div
          style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
        >
          Item 3
        </div>
      </Marquee>
    </div>
  ),
};
