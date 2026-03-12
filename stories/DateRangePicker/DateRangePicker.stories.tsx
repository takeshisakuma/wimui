import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateRangePicker } from "@/components/DateRangePicker/DateRangePicker";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof DateRangePicker> = {
  title: "Components/Pickers & Sliders/DateRangePicker",
  component: DateRangePicker,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <DateRangePicker
        {...args}
        startProps={{
          placeholder: t("story_daterangepicker_start"),
          ...args.startProps,
        }}
        endProps={{
          placeholder: t("story_daterangepicker_end"),
          ...args.endProps,
        }}
      />
    );
  },
};
