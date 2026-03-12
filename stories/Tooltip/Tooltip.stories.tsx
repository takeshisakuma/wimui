import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button label={t("story_tooltip_hover")} />
        </TooltipTrigger>
        <TooltipContent>{t("story_tooltip_text")}</TooltipContent>
      </Tooltip>
    );
  },
};

export const Top: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args} placement="top">
          <TooltipTrigger asChild>
            <Button label={t("top")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_top_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const Bottom: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args} placement="bottom">
          <TooltipTrigger asChild>
            <Button label={t("bottom")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_bottom_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const Left: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args} placement="left">
          <TooltipTrigger asChild>
            <Button label={t("left")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_left_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const Right: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ padding: "50px" }}>
        <Tooltip {...args} placement="right">
          <TooltipTrigger asChild>
            <Button label={t("right")} />
          </TooltipTrigger>
          <TooltipContent>{t("story_tooltip_right_text")}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const WithDelay: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Tooltip {...args} delay={args.delay ?? 1000}>
        <TooltipTrigger asChild>
          <Button label={t("story_tooltip_hover_1s")} />
        </TooltipTrigger>
        <TooltipContent>{t("story_tooltip_delayed")}</TooltipContent>
      </Tooltip>
    );
  },
};
