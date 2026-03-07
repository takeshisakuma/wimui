import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultiSelect } from "@/components/MultiSelect/MultiSelect";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/Selection Controls/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const options = [
      { label: t("story_multiselect_apple"), value: "apple" },
      { label: t("story_multiselect_banana"), value: "banana" },
      { label: t("story_multiselect_orange"), value: "orange" },
      { label: t("story_multiselect_grape"), value: "grape" },
      { label: t("story_selectbox_opt4"), value: "disabled", disabled: true },
    ];
    return <MultiSelect {...args} options={options} placeholder={t("story_multiselect_fruits")} />;
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const options = [
      { label: t("story_multiselect_apple"), value: "apple" },
      { label: t("story_multiselect_banana"), value: "banana" },
      { label: t("story_multiselect_orange"), value: "orange" },
      { label: t("story_multiselect_grape"), value: "grape" },
      { label: t("story_selectbox_opt4"), value: "disabled", disabled: true },
    ];
    return (
      <MultiSelect
        {...args}
        label={t("story_multiselect_favorites")}
        options={options}
        placeholder={t("story_selectbox_placeholder")}
      />
    );
  },
};

export const MultipleSelected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const options = [
      { label: t("story_multiselect_apple"), value: "apple" },
      { label: t("story_multiselect_banana"), value: "banana" },
      { label: t("story_multiselect_orange"), value: "orange" },
      { label: t("story_multiselect_grape"), value: "grape" },
      { label: t("story_selectbox_opt4"), value: "disabled", disabled: true },
    ];
    return <MultiSelect {...args} options={options} defaultValue={["apple", "orange"]} />;
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const options = [
      { label: t("story_multiselect_apple"), value: "apple" },
      { label: t("story_multiselect_banana"), value: "banana" },
      { label: t("story_multiselect_orange"), value: "orange" },
      { label: t("story_multiselect_grape"), value: "grape" },
      { label: t("story_selectbox_opt4"), value: "disabled", disabled: true },
    ];
    return <MultiSelect {...args} options={options} disabled={true} defaultValue={["banana"]} />;
  },
};

export const WithClearButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const options = [
      { label: t("story_multiselect_apple"), value: "apple" },
      { label: t("story_multiselect_banana"), value: "banana" },
      { label: t("story_multiselect_orange"), value: "orange" },
      { label: t("story_multiselect_grape"), value: "grape" },
      { label: t("story_selectbox_opt4"), value: "disabled", disabled: true },
    ];
    return (
      <MultiSelect
        {...args}
        options={options}
        allowClear={true}
        defaultValue={["apple", "banana"]}
        placeholder={t("story_multiselect_fruits")}
      />
    );
  },
};
