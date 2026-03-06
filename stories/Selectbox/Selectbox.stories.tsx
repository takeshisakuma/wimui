import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Selectbox,
  SelectboxOption,
} from "@/components/Selectbox/Selectbox";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Selectbox> = {
  title: "Components/Selection Controls/Selectbox",
  component: Selectbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const options = [
      { label: t("story_selectbox_opt1"), value: "opt1" },
      { label: t("story_selectbox_opt2"), value: "opt2" },
      { label: t("story_selectbox_opt3"), value: "opt3" },
      { label: t("story_selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story_selectbox_opt5"), value: "opt5" },
    ];
    return <Selectbox {...args} options={options} placeholder={t("story_selectbox_placeholder")} />;
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const options = [
      { label: t("story_selectbox_opt1"), value: "opt1" },
      { label: t("story_selectbox_opt2"), value: "opt2" },
      { label: t("story_selectbox_opt3"), value: "opt3" },
      { label: t("story_selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story_selectbox_opt5"), value: "opt5" },
    ];
    return (
      <Selectbox
        {...args}
        label={t("story_selectbox_label")}
        options={options}
        placeholder={t("story_selectbox_placeholder")}
      />
    );
  },
};

export const Preselected: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const options = [
      { label: t("story_selectbox_opt1"), value: "opt1" },
      { label: t("story_selectbox_opt2"), value: "opt2" },
      { label: t("story_selectbox_opt3"), value: "opt3" },
      { label: t("story_selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story_selectbox_opt5"), value: "opt5" },
    ];
    return <Selectbox {...args} options={options} defaultValue="opt2" />;
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const options = [
      { label: t("story_selectbox_opt1"), value: "opt1" },
      { label: t("story_selectbox_opt2"), value: "opt2" },
      { label: t("story_selectbox_opt3"), value: "opt3" },
      { label: t("story_selectbox_opt4"), value: "opt4", disabled: true },
      { label: t("story_selectbox_opt5"), value: "opt5" },
    ];
    return <Selectbox {...args} options={options} disabled={true} defaultValue="opt1" />;
  },
};

export const WithSeparator: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const optionsWithSeparators: SelectboxOption[] = [
      { label: t("story_selectbox_settings"), value: "settings" },
      { label: t("story_selectbox_profile"), value: "profile" },
      { type: "separator" },
      { label: t("story_selectbox_help"), value: "help" },
      { label: t("story_selectbox_about"), value: "about" },
      { type: "separator" },
      { label: t("story_selectbox_logout"), value: "logout" },
    ];
    return (
      <Selectbox
        {...args}
        options={optionsWithSeparators}
        placeholder={t("story_selectbox_placeholder")}
      />
    );
  },
};
