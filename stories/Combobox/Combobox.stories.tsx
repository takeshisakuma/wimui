import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "@/components/form/Combobox/Combobox";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Combobox> = {
  title: "Components/Selection Controls/Combobox",
  component: Combobox,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    showSearchIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const useSampleOptions = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.fruit_apple"), value: "apple" },
    { label: t("story.fruit_banana"), value: "banana" },
    { label: t("story.fruit_blueberry"), value: "blueberry" },
    { label: t("story.fruit_cherry"), value: "cherry" },
    { label: t("story.fruit_grape"), value: "grape" },
    { label: t("story.fruit_kiwi"), value: "kiwi" },
    { label: t("story.fruit_lemon"), value: "lemon" },
    { label: t("story.fruit_mango"), value: "mango" },
    { label: t("story.fruit_orange"), value: "orange" },
    { label: t("story.fruit_peach"), value: "peach" },
    { label: t("story.fruit_pear"), value: "pear" },
    { label: t("story.fruit_pineapple"), value: "pineapple" },
    { label: t("story.fruit_strawberry"), value: "strawberry" },
    { label: t("story.fruit_watermelon"), value: "watermelon" },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const sampleOptions = useSampleOptions();
    return (
      <Combobox
        {...args}
        label={t("story.combobox_label")}
        options={sampleOptions}
        placeholder={t("story.combobox_placeholder")}
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
