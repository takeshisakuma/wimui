import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateRangePicker } from "@/components/form/DateRangePicker/DateRangePicker";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof DateRangePicker> = {
  title: "Components/Pickers & Sliders/DateRangePicker",
  component: DateRangePicker,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <DateRangePicker
        {...args}
        startProps={{
          placeholder: t("story.daterangepicker_start"),
          ...args.startProps,
        }}
        endProps={{
          placeholder: t("story.daterangepicker_end"),
          ...args.endProps,
        }}
      />
    );
  },
};
