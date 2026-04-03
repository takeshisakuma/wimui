import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputMask } from "@/components/form/InputMask/InputMask";
import { Label } from "@/components/typography/Label/Label";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof InputMask> = {
  title: "Components/Basic Inputs/InputMask",
  component: InputMask,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    mask: {
      control: "text",
      description: "Mask pattern ('9': number, 'a': letter, '*': alphanumeric)",
    },
    maskChar: {
      control: "text",
      description: "Placeholder character for unentered parts",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputMask>;

export const ZipCode: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.inputmask_zip")}>
        <InputMask {...args} />
      </Label>
    );
  },
  args: {
    mask: "999-9999",
    placeholder: "000-0000",
  },
};

export const Phone: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.inputmask_phone")}>
        <InputMask {...args} />
      </Label>
    );
  },
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678",
  },
};

export const CreditCard: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.inputmask_credit")}>
        <InputMask {...args} />
      </Label>
    );
  },
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000",
  },
};

export const CustomMask: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.inputmask_custom")}>
        <InputMask {...args} />
      </Label>
    );
  },
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X",
  },
};
