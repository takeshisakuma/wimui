import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhoneInput } from "@/components/form/PhoneInput/PhoneInput";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof PhoneInput> = {
  title: "Components/Basic Inputs/PhoneInput",
  component: PhoneInput,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("");
    const [countryCode, setCountryCode] = useState("US");
    return (
      <PhoneInput
        {...args}
        label={t("story.phoneinput_label")}
        placeholder={t("story.phoneinput_placeholder")}
        value={value}
        onChange={setValue}
        countryCode={countryCode}
        onCountryChange={setCountryCode}
      />
    );
  },
};

export const WithError: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("abc");
    const [countryCode, setCountryCode] = useState("US");
    return (
      <PhoneInput
        {...args}
        label={t("story.phoneinput_label")}
        placeholder={t("story.phoneinput_placeholder")}
        value={value}
        onChange={setValue}
        countryCode={countryCode}
        onCountryChange={setCountryCode}
        error={t("story.phoneinput_error")}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <PhoneInput
        {...args}
        label={t("story.phoneinput_label")}
        placeholder={t("story.phoneinput_placeholder")}
        value="090-1234-5678"
        countryCode="JP"
        disabled
      />
    );
  },
};
