import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    delay: { control: "number" },
    isOpen: { control: "boolean" },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button label={t("story.tooltip_hover")} />
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_text")}</TooltipContent>
      </Tooltip>
    );
  },
};

export const Top: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("top")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_top_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
  args: {
    placement: "top",
  },
};

export const Bottom: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("bottom")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_bottom_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
  args: {
    placement: "bottom",
  },
};

export const Left: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("left")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_left_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
  args: {
    placement: "left",
  },
};

export const Right: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button label={t("right")} />
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_right_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
  args: {
    placement: "right",
  },
};

export const WithDelay: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Tooltip {...args} delay={args.delay ?? 1000}>
        <TooltipTrigger asChild>
          <Button label={t("story.tooltip_hover_1s")} />
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_delayed")}</TooltipContent>
      </Tooltip>
    );
  },
};
