import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Label, CreditCardInput } from "wimui";

const meta: Meta<typeof CreditCardInput> = {
  title: "Components/Form/CreditCardInput",
  component: CreditCardInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CreditCardInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.credit_card_label")}>
        <CreditCardInput
          {...args}
          placeholder={t("story.credit_card_placeholder")}
        />
      </Label>
    );
  },
};

export const Visa: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.credit_card_visa_label")}>
        <CreditCardInput {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: "4111111111111111",
  },
};

export const Amex: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.credit_card_amex_label")}>
        <CreditCardInput {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: "341234567890123",
  },
};
