import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Select, SelectOption } from "wimui";


const meta: Meta<typeof Select> = {
  title: "Components/Selection Controls/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.select_opt1"), value: "opt1" },
      { label: t("story.select_opt2"), value: "opt2" },
      { label: t("story.select_opt3"), value: "opt3" },
      { label: t("story.select_opt4"), value: "opt4", disabled: true },
      { label: t("story.select_opt5"), value: "opt5" },
    ];
    return <Select {...args} options={options} placeholder={t("story.select_placeholder")} />;
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.select_opt1"), value: "opt1" },
      { label: t("story.select_opt2"), value: "opt2" },
      { label: t("story.select_opt3"), value: "opt3" },
      { label: t("story.select_opt4"), value: "opt4", disabled: true },
      { label: t("story.select_opt5"), value: "opt5" },
    ];
    return (
      <Select
        {...args}
        label={t("story.select_label")}
        options={options}
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};

export const Preselected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.select_opt1"), value: "opt1" },
      { label: t("story.select_opt2"), value: "opt2" },
      { label: t("story.select_opt3"), value: "opt3" },
      { label: t("story.select_opt4"), value: "opt4", disabled: true },
      { label: t("story.select_opt5"), value: "opt5" },
    ];
    return <Select {...args} options={options} label={t("story.select_label")} defaultValue="opt2" />;
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.select_opt1"), value: "opt1" },
      { label: t("story.select_opt2"), value: "opt2" },
      { label: t("story.select_opt3"), value: "opt3" },
      { label: t("story.select_opt4"), value: "opt4", disabled: true },
      { label: t("story.select_opt5"), value: "opt5" },
    ];
    return <Select {...args} options={options} label={t("story.select_label")} disabled={true} defaultValue="opt1" />;
  },
};

export const WithSeparator: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const optionsWithSeparators: SelectOption[] = [
      { label: t("story.select_settings"), value: "settings" },
      { label: t("story.select_profile"), value: "profile" },
      { type: "separator" },
      { label: t("story.select_help"), value: "help" },
      { label: t("story.select_about"), value: "about" },
      { type: "separator" },
      { label: t("story.select_logout"), value: "logout" },
    ];
    return (
      <Select
        {...args}
        options={optionsWithSeparators}
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};

export const WithClearButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.select_opt1"), value: "opt1" },
      { label: t("story.select_opt2"), value: "opt2" },
      { label: t("story.select_opt3"), value: "opt3" },
      { label: t("story.select_opt4"), value: "opt4", disabled: true },
      { label: t("story.select_opt5"), value: "opt5" },
    ];
    return (
      <Select
        {...args}
        options={options}
        allowClear={true}
        defaultValue="opt1"
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};

export const Searchable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = [
      { label: t("story.select_opt_apple"), value: "apple" },
      { label: t("story.select_opt_banana"), value: "banana" },
      { label: t("story.select_opt_cherry"), value: "cherry" },
      { label: t("story.select_opt_grape"), value: "grape" },
      { label: t("story.select_opt_orange"), value: "orange" },
    ];
    return (
      <Select
        {...args}
        options={options}
        searchable={true}
        searchPlaceholder={t("story.select_placeholder")}
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};

export const Grouped: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [
      {
        label: t("story.select_group_fruits"),
        options: [
          { label: t("story.select_opt_apple"), value: "apple" },
          { label: t("story.select_opt_banana"), value: "banana" },
        ],
      },
      {
        label: t("story.select_group_veggies"),
        options: [
          { label: t("story.select_opt_carrot"), value: "carrot" },
          { label: t("story.select_opt_potato"), value: "potato" },
        ],
      },
    ];
    return (
      <Select
        {...args}
        options={groupedOptions}
        grouped={true}
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};

export const AdvancedSearch: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [
      {
        label: t("story.select_group_fruits"),
        options: [
          { label: t("story.select_opt_apple"), value: "apple" },
          { label: t("story.select_opt_banana"), value: "banana" },
        ],
      },
      {
        label: t("story.select_group_veggies"),
        options: [
          { label: t("story.select_opt_carrot"), value: "carrot" },
          { label: t("story.select_opt_potato"), value: "potato" },
        ],
      },
    ];
    return (
      <Select
        {...args}
        options={groupedOptions}
        grouped={true}
        searchable={true}
        searchPlaceholder={t("story.select_placeholder")}
        allowClear={true}
        placeholder={t("story.select_placeholder")}
      />
    );
  },
};
