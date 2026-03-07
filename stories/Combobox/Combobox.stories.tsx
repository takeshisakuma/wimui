import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "@/components/Combobox/Combobox";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Combobox> = {
  title: "Components/Selection Controls/Combobox",
  component: Combobox,
  argTypes: {
    showSearchIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const useSampleOptions = () => {
  const { t } = useTranslation(["docs", "common", "components"]);
  return [
    { label: t("story_fruit_apple"), value: "apple" },
    { label: t("story_fruit_banana"), value: "banana" },
    { label: t("story_fruit_blueberry"), value: "blueberry" },
    { label: t("story_fruit_cherry"), value: "cherry" },
    { label: t("story_fruit_grape"), value: "grape" },
    { label: t("story_fruit_kiwi"), value: "kiwi" },
    { label: t("story_fruit_lemon"), value: "lemon" },
    { label: t("story_fruit_mango"), value: "mango" },
    { label: t("story_fruit_orange"), value: "orange" },
    { label: t("story_fruit_peach"), value: "peach" },
    { label: t("story_fruit_pear"), value: "pear" },
    { label: t("story_fruit_pineapple"), value: "pineapple" },
    { label: t("story_fruit_strawberry"), value: "strawberry" },
    { label: t("story_fruit_watermelon"), value: "watermelon" },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const sampleOptions = useSampleOptions();
    return (
      <Combobox
        {...args}
        label={t("story_combobox_label")}
        options={sampleOptions}
        placeholder={t("story_combobox_placeholder")}
      />
    );
  },
};

export const WithIcon: Story = {
  ...Default,
  args: {
    showSearchIcon: true,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};
