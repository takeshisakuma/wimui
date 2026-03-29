import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "@/components/NumberInput/NumberInput";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof NumberInput> = {
  title: "Components/Basic Inputs/NumberInput",
  component: NumberInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <NumberInput {...args} placeholder={t("story.numberinput_placeholder")} />
    );
  },
};

/**
 * 数量の入力など、数値の増減が必要な場合（デフォルト）
 */
export const NumericMode: Story = {
  args: {
    mode: "number",
    hideSpinButton: true,
  },
};

/**
 * クレジットカード番号やIDなど、「記号としての数字」を入力する場合
 */
export const TextMode: Story = {
  args: {
    mode: "text",
    placeholder: "XXXX-XXXX-XXXX-XXXX",
  },
};

/**
 * ブラウザ標準のスピンボタンを表示したい場合
 */
export const ShowSpinButton: Story = {
  args: {
    mode: "number",
    hideSpinButton: false,
  },
};

/**
 * 小数点や負の数を許可する場合
 */
export const DecimalAndNegative: Story = {
  args: {
    mode: "number",
    allowDecimal: true,
    allowNegative: true,
    placeholder: "-123.45",
  },
};
