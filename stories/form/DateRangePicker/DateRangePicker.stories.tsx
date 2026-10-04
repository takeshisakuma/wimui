import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { DateRangePicker } from "wimui";
import { openFirstPopup } from "../../playOpen";


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

// 開いた姿。ほかのストーリーは閉じたまま撮られるので、開いた中身を変えても VRT と a11y の CI が
// 動かなかった。docs ページでは play が走らず閉じた姿になるので、載せても意味がない。
export const Open: Story = {
  ...Default,
  play: openFirstPopup,
};
