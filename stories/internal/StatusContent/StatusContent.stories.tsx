import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusContent } from "@/components/_internal/StatusContent";
import { Button, Icon } from "wimui";

const meta: Meta<typeof StatusContent> = {
  title: "Components/Internal/StatusContent",
  component: StatusContent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof StatusContent>;

export const Default: Story = {
  args: {
    icon: <Icon name="CheckCircleIcon" size="lg" />,
    title: "Action completed",
    description: "Your changes were saved. You can continue or return to the previous step.",
    actions: (
      <>
        <Button variant="solid">Continue</Button>
        <Button variant="outline">Go back</Button>
      </>
    ),
  },
};
