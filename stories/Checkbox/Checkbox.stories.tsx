import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Selection Controls/Checkbox",
  component: Checkbox,
  // tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_accept")} />;
  },
};

export const Checked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Checkbox
        {...args}
        label={t("story_checkbox_newsletter")}
        checked={true}
        onChange={() => {}} // Supress warning
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_disabled")} disabled={true} />;
  },
};

export const DisabledChecked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Checkbox
        {...args}
        label={t("story_checkbox_dis_checked")}
        disabled={true}
        checked={true}
        onChange={() => {}}
      />
    );
  },
};

export const Indeterminate: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Checkbox
        {...args}
        label={t("story_checkbox_indeterminate")}
        indeterminate={true}
        checked={true} // Usually indeterminate implies partially selected
        onChange={() => {}}
      />
    );
  },
};

export const Controlled = () => {
  const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={`${t("story_checkbox_controlled")}: ${
        checked ? t("story_checkbox_on") : t("story_checkbox_off")
      }`}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_long_label")} />;
  },
};
