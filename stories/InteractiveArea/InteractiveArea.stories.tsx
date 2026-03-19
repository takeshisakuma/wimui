import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InteractiveArea } from "@/components/InteractiveArea/InteractiveArea";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof InteractiveArea> = {
  title: "Internal/InteractiveArea",
  component: InteractiveArea,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveArea>;

export const Default: Story = {
  args: {
    title: "Interact with this area",
    description: "This is a base component for building interactive surfaces.",
    variant: "dashed",
    size: "medium",
  },
};

export const WithIconAndActions: Story = {
  args: {
    title: "Import your data",
    description: "Click here or drag a file to start the import process.",
    icon: <Icon name="UploadIcon" size="large" />,
    actions: <Button priority="secondary">Select File</Button>,
    isClickable: true,
  },
};

export const SolidMuted: Story = {
  args: {
    title: "No results matched",
    description: "Try adjusting your filters or search terms.",
    variant: "solid",
    bgVariant: "muted",
    icon: <Icon name="SearchIcon" size="medium" />,
    actions: <Button priority="tertiary">Clear filters</Button>,
  },
};

export const Small: Story = {
  args: {
    title: "Small area",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    title: "Large landing area",
    description: "Best used for primary dropzones or empty states on main dashboards.",
    size: "large",
    actions: <Button priority="primary">Primary Action</Button>,
  },
};
