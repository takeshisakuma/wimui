import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@/components/Radio/Radio";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Radio> = {
  title: "Components/Selection Controls/Radio",
  component: Radio,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_option1")} value="option1" />;
  },
};

export const Checked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Radio
        {...args}
        label={t("story_radio_checked")}
        checked={true}
        value="checked"
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Radio
        {...args}
        label={t("story_radio_disabled")}
        disabled={true}
        value="disabled"
      />
    );
  },
};

export const DisabledChecked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Radio
        {...args}
        label={t("story_radio_dis_checked")}
        disabled={true}
        checked={true}
        value="disabled-checked"
      />
    );
  },
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Radio {...args} label={t("story_radio_long_label")} value="long" />;
  },
};
