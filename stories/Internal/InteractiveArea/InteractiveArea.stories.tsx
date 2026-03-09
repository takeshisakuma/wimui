import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InteractiveArea } from "../../../src/components/InteractiveArea/InteractiveArea";
import { Icon } from "../../../src/components/Icon/Icon";
import { Button } from "../../../src/components/Button/Button";
import { ContextMenu, ContextMenuItem } from "../../../src/components/ContextMenu/ContextMenu";

const meta: Meta<typeof InteractiveArea> = {
  title: "Components/Internal/InteractiveArea",
  component: InteractiveArea,
};

export default meta;
type Story = StoryObj<typeof InteractiveArea>;

export const Default: Story = {
  args: {
    title: "No Data Available",
    description: "Please upload a file or create a new entry to get started.",
    icon: <Icon name="DocumentIcon" />,
    variant: "dashed",
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    isClickable: true,
    description: "Click here to perform an action.",
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    actions: (
      <>
        <Button label="Upload" priority="primary" />
        <Button label="Learn More" priority="secondary" />
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
    description: "Compact area",
  },
};

export const WithContextMenu: Story = {
  render: (args) => (
    <ContextMenu
      menu={
        <>
          <ContextMenuItem icon={<Icon name="EditIcon" />}>Edit</ContextMenuItem>
          <ContextMenuItem icon={<Icon name="TrashIcon" />} danger>Delete</ContextMenuItem>
        </>
      }
    >
      <InteractiveArea {...args} title="Right Click Me" description="I have a context menu." />
    </ContextMenu>
  ),
  args: {
    variant: "solid",
    bgVariant: "muted",
  },
};
